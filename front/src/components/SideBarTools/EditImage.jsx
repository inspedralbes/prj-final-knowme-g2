import { useState, useRef, useEffect, useCallback } from 'react'
import { useRightSideBarStore } from '../../store/rightSideBarStore.js'
import AvatarEditor from 'react-avatar-editor'

export function EditImage() {
    const { content, setContent, contentIndex } = useRightSideBarStore(state => state);
    const [firstTime, setFirstTime] = useState(true);
    const [onCanvas, setOnCanvas] = useState(false);
    let styles = {
        border: `${content[contentIndex]?.border}px solid`,
        borderRadius: `${content[contentIndex]?.radius}%`,
        borderColor: 'white',
    }


    let editor = useRef(null);
    const keyDownEvent = useCallback((event) => {
        if (event.keyCode == 107 && event.ctrlKey) {
            event.preventDefault();
            if (content[contentIndex]?.zoom < 400) {
                setContent({ zoom: content[contentIndex]?.zoom + 10, id: contentIndex })
            }
        }
        if (event.keyCode == 109 && event.ctrlKey) {
            event.preventDefault();
            if (content[contentIndex]?.zoom > 40) {
                setContent({ zoom: content[contentIndex]?.zoom - 10, id: contentIndex })
            }
        }
    }, [onCanvas, setContent, contentIndex, content[contentIndex]?.zoom]);


    const wheelEvent = useCallback((event) => {
        const { ctrlKey } = event;
        if (onCanvas) {
            if (ctrlKey) {
                event.preventDefault();
                if (event.deltaY < 0) {
                    if (content[contentIndex]?.zoom < 400) {
                        setContent({ zoom: content[contentIndex]?.zoom + 10, id: contentIndex })
                    }
                }
                else if (event.deltaY > 0) {
                    if (content[contentIndex]?.zoom > 40) {
                        setContent({ zoom: content[contentIndex]?.zoom - 10, id: contentIndex })
                    }
                }
            }
        }
    }, [onCanvas, setContent, contentIndex, content[contentIndex]?.zoom]);

    useEffect(() => {
        if (onCanvas) {
            window.addEventListener('keydown', keyDownEvent, false);
            window.addEventListener('wheel', wheelEvent, { passive: false })
        } else {
            window.removeEventListener('keydown', keyDownEvent, false);
            window.removeEventListener('wheel', wheelEvent, { passive: false })
        }

        return () => {
            window.removeEventListener('keydown', keyDownEvent, false);
            window.removeEventListener('wheel', wheelEvent, { passive: false })
        }
    }, [onCanvas, keyDownEvent, wheelEvent]);
    const handlerUpload = () => {
        const canvas = editor.current.getImage();
        setContent({ src: canvas.toDataURL(), width: content[contentIndex]?.width, zoom: content[contentIndex]?.zoom, rotate: content[contentIndex]?.rotate, height: content[contentIndex]?.height, id: contentIndex })
        setFirstTime(false);
    }
    const handlerChange = (e) => {
        if (!firstTime) {
            const canvas = editor.current.getImage();
            setContent({ src: canvas.toDataURL(), width: content[contentIndex]?.width, zoom: content[contentIndex]?.zoom, rotate: content[contentIndex]?.rotate, height: content[contentIndex]?.height, id: contentIndex })
        }
    }

    const handleZoom = (value) => {
        setOnCanvas(value)
    }

    return (
        <>
            <h2 className="text-2xl font-bold">Image</h2>
            <button className="relative font-bold text-lg w-full h-12 rounded-full bg-[#69b4ff] text-[#ffffff] hover:opacity-90 transition-all duration-100 mt-3">
                + Add File
                <input onInput={(event) => {
                    let srcImg = URL.createObjectURL(event.target.files[0])
                    setContent({ srcOrig: srcImg, id: contentIndex })
                }} className="top-0 left-0 rounded-full opacity-0 bg-slate-500 absolute size-full hover:cursor-pointer" type="file" name="img" id="imatge" accept="image/*" />
            </button>
            <div className="flex mt-4">
                <div className="flex items-center justify-center gap-4">
                    <label htmlFor="radius" className="text-lg text-gray-100">Radius</label>
                    <input type="number" min="0" max="50" value={content[contentIndex]?.radius} onChange={(e) => setContent({ radius: e.target.value, id: contentIndex })} name="border" id="border"
                        className=" h-7 w-12 p-1 right-0 border rounded-xl focus:outline-none text-right focus:border-blue-500 text-slate-700"
                    />
                </div>

                <div className=" ml-10 flex items-center">
                    <label htmlFor="border" className="text-lg text-gray-100 mr-2">Border</label>
                    <input type="number" min="0" max="100" value={content[contentIndex]?.border} onChange={(e) => setContent({ border: e.target.value, id: contentIndex })} name="border" id="border"
                        className=" h-7 w-12 p-1 right-0 border rounded-xl focus:outline-none text-right focus:border-blue-500 text-slate-700"
                    />
                </div>
            </div>
            <hr className='h-0.5 my-5 bg-[#4e4e4e] border-0'></hr>
            <div className="flex items-center w-1/2 mb-5">
                <button onClick={() => setContent({ align: 'left', id: contentIndex })} className={"rounded-md bg-[#454545] w-24 h-10 min-w-10 transition-all duration-100 hover:bg-opacity-80 mr-2 flex justify-center items-center " + (content[contentIndex]?.align == 'left' ? 'bg-[#e0ffff] text-[#444444]' : '')}>
                    <span className="icon-[clarity--align-left-text-line] text-2xl"></span>
                </button>
                <button onClick={() => setContent({ align: 'center', id: contentIndex })} className={"rounded-md bg-[#454545] w-24 h-10 min-w-10 transition-all duration-100 hover:bg-opacity-80 mr-2 flex justify-center items-center " + (content[contentIndex]?.align == 'center' ? 'bg-[#e0ffff] text-[#444444]' : '')}>
                    <span className="icon-[clarity--center-text-line] text-2xl"></span>
                </button>
                <button onClick={() => setContent({ align: 'right', id: contentIndex })} className={"rounded-md bg-[#454545] w-24 h-10 min-w-10 transition-all duration-100 hover:bg-opacity-80 mr-2 flex justify-center items-center " + (content[contentIndex]?.align == 'right' ? 'bg-[#e0ffff] text-[#444444]' : '')}>
                    <span className="icon-[clarity--align-right-text-line] text-2xl"></span>
                </button>
            </div>
            {content[contentIndex]?.srcOrig != "https://via.placeholder.com/150" ?
                <div className={"flex align-middle justify-center flex-col"}>


                    <div className="max-w-96">

                        <div className="flex mt-4">

                            <div className="flex items-center justify-center gap-2 mb-4 mr-4">
                                <label htmlFor='width' className="text-lg font-bold text-gray-100">Width</label>
                                <input type="number" min="0" max="1000" value={content[contentIndex]?.width} onChange={(e) => setContent({ width: parseInt(e.target.value), id: contentIndex })} name="width" id="width"
                                    className=" h-7 w-16 p-1 right-0 border rounded-xl focus:outline-none text-right focus:border-blue-500 text-slate-700"
                                />
                            </div>
                            <div className="flex items-center justify-center gap-2 mb-4 ">
                                <label htmlFor='height' className="text-lg font-bold text-gray-100">Height</label>
                                <input type="number" min="0" max="1000" value={content[contentIndex]?.height} onChange={(e) => setContent({ height: parseInt(e.target.value), id: contentIndex })} name="height" id="height"
                                    className=" h-7  w-16 p-1 right-0 border rounded-xl focus:outline-none text-right focus:border-blue-500 text-slate-700"
                                />
                            </div>
                        </div>
                        <h1 className='text-xl font-bold'>Preview {onCanvas}</h1>
                        <AvatarEditor id="canvas" onMouseOver={() => { handleZoom(true) }} onMouseLeave={() => { handleZoom(false) }} style={styles} className=" max-w-64 max-h-64 ml-auto mr-auto border-2 border-gray-100 rounded-md overflow-hidden mt-4 mb-4 w-3/4 h-3/4"
                            ref={editor}
                            image={content[contentIndex]?.srcOrig}
                            width={content[contentIndex]?.width}
                            height={content[contentIndex]?.height}
                            borderRadius={parseInt(content[contentIndex]?.radius)}
                            border={parseInt(content[contentIndex]?.border)}
                            color={[255, 255, 255, 0.6]} // RGBA
                            scale={content[contentIndex]?.zoom / 100}
                            rotate={parseInt(content[contentIndex]?.rotate)}
                            onImageChange={handlerChange}
                            onImageReady={handlerUpload}
                        />
                        <div className="flex items-center justify-center gap-4 mb-4 mt-4">
                            <label htmlFor="zoom" className="text-lg font-bold text-gray-100">Zoom</label>
                            <input type="range" id='zoom' min="40" max="400" value={content[contentIndex]?.zoom} onInput={(e) => setContent({ zoom: e.target.value, id: contentIndex })}
                                className=" w-full h-1 opacity-100 transition-opacity duration-[0.2s] rounded-[5px] "
                            />
                            <p className="font-semibold">{content[contentIndex]?.zoom}%</p>
                        </div>
                        <div className="flex items-center justify-center gap-4 mb-4 mt-4">
                            <label htmlFor="rotate" className="text-lg font-bold text-gray-100">Rotate</label>
                            <input type="range" id='rotate' min="0" max="360" value={content[contentIndex]?.rotate} onChange={(e) => setContent({ rotate: e.target.value, id: contentIndex })}
                                className="w-full h-1 opacity-100 transition-opacity duration-[0.2s] rounded-[5px]"
                            />
                            <p className="font-semibold">{content[contentIndex]?.rotate}</p>
                        </div>
                    </div>
                </div> : ""}
        </>

    )
}

export default EditImage