import { useState, useEffect } from 'react';

export function EditImage({ imgData, setImgData }) {
    const [radiusImg, setRadiusImg] = useState(50);
    const [borderImg, setBorderImg] = useState(1);

    let styles = {
        borderRadius: radiusImg + "px",
        border: borderImg + "px solid black"
    }
    console.log(imgData.src);

    const handleRangeChange = (e) => {
        const nuevoValor = parseInt(e.target.value);
        setRadiusImg(nuevoValor);
    };

    const handleBorderChange = (e) => {
        const nuevoValor = parseInt(e.target.value);
        setBorderImg(nuevoValor);
    };

    return (
        <>
            <div className="h-8">
                <h2 className="text-2xl font-bold mr-4 float-left">Image</h2>
                <label htmlFor="imatge" className="relative float-right flex items-center justify-center font-bold text-md w-32 h-8 rounded-full bg-[#69b4ff] text-[#ffffff] hover:opacity-90 transition-all duration-100">
                    + Add File
                    <input onInput={(event) => {
                        let output = document.getElementById('preview');
                        output.src = URL.createObjectURL(event.target.files[0])
                        setImgData({ ...imgData, src: output.src })
                    }} className="top-0 left-0 rounded-full opacity-0 bg-slate-500 absolute w-full h-full hover:cursor-pointer" type="file" name="img" id="imatge" accept="image/*" />
                </label>
            </div>

            <div className="flex items-center justify-center gap-4 mb-4 mt-4">
                <label htmlFor="radius" className="text-lg font-bold text-gray-100">Radius</label>
                <input type="range" min="0" max="100" value={radiusImg} onChange={handleRangeChange}
                    className="w-full h-1 opacity-70 transition-opacity duration-[0.2s] rounded-[5px]"
                />
                <p className="font-semibold">{radiusImg}%</p>
            </div>

            <div className="mb-8 flex items-center">
                <label htmlFor="border" className="text-lg font-bold text-gray-100 mr-2">Border</label>
                <input type="number" min="0" max="100" value={borderImg} onChange={handleBorderChange} name="border" id="border"
                    className="w-full p-1 right-0 border rounded-md focus:outline-none text-right focus:border-blue-500 text-slate-700"
                />
            </div>


            <h2 className="text-2xl font-bold mb-2">Preview</h2>
            <img alt=""
                style={styles}
                className="border-2 border-solid rounded-md"
                id="preview" />
        </>
    )
}

export default EditImage