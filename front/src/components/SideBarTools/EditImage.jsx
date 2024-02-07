import { useState, useRef } from 'react'
import { useRightSideBarStore } from '../../store/rightSideBarStore.js'
import AvatarEditor from 'react-avatar-editor'

export function EditImage() {
    const { content, setContent } = useRightSideBarStore(state => state);
    const [img, setImg] = useState(null);
    let editor = useRef(null);
    const styles = {
        border: `${content?.border}px solid black`,
        borderRadius: `${content?.radius}%`,
    }

    return (
        <>
            <h2 className="text-2xl font-bold">Image</h2>
            <button className="relative font-bold text-lg w-full h-12 rounded-full bg-[#69b4ff] text-[#ffffff] hover:opacity-90 transition-all duration-100 mt-3">
                + Add File
                <input onInput={(event) => {
                   let src = URL.createObjectURL(event.target.files[0])
                    console.log(src);
                    setImg(src);
                }} className="top-0 left-0 rounded-full opacity-0 bg-slate-500 absolute w-full hover:cursor-pointer" type="file" name="img" id="imatge" accept="image/*" />
            </button>
            <div className={img ? "" : "hidden"}>
                <AvatarEditor
                    ref={editor}
                    image={img}
                    width={250}
                    height={250}
                    border={50}
                    color={[255, 255, 255, 0.6]} // RGBA
                    scale={1.2}
                    rotate={0}

                />


                <button onClick={() => {

                    const canvas = editor.current.getImage();

                    setContent({ ...content, src: canvas.toDataURL() })
                }
                }>Save</button>
            </div>


            <div className="flex items-center justify-center gap-4 mb-4 mt-4">
                <label htmlFor="radius" className="text-lg font-bold text-gray-100">Radius</label>
                <input type="range" min="0" max="100" value={content?.radius} onChange={(e) => setContent({ ...content, radius: e.target.value })}
                    className="w-full h-1 opacity-70 transition-opacity duration-[0.2s] rounded-[5px]"
                />
                <p className="font-semibold">{content?.radius}%</p>
            </div>

            <div className="mb-8 flex items-center">
                <label htmlFor="border" className="text-lg font-bold text-gray-100 mr-2">Border</label>
                <input type="number" min="0" max="100" value={content?.border} onChange={(e) => setContent({ ...content, border: e.target.value })} name="border" id="border"
                    className="w-full p-1 right-0 border rounded-md focus:outline-none text-right focus:border-blue-500 text-slate-700"
                />
            </div>


            
        </>
    )
}

export default EditImage