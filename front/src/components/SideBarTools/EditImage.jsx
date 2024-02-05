export function EditImage({ imgData, setImgData }) {
    let img = undefined;
    let styles = {
        borderRadius: imgData.radius + "px",
        border: imgData.border + "px solid black"
    }

    return (
        <>
            <h2 className="text-2xl font-bold mb-5">Image</h2>
            <button className="relative font-bold text-lg w-full h-12 rounded-full bg-[#69b4ff] text-[#ffffff] hover:opacity-90 transition-all duration-100">
                + Add File
                <input onInput={(event) => {
                    let output = document.getElementById('preview');
                    output.src = URL.createObjectURL(event.target.files[0])
                    setImgData({ ...imgData, src: output.src })
                }} className=" top-0 left-0 rounded-full opacity-0 bg-slate-500 absolute w-full h-full hover:cursor-pointer" type="file" name="img" id="imatge" accept="image/*" />

            </button>
            <div><label htmlFor="radius" >Radius</label>
                <input type="number" onInput={(e) => setImgData({ ...imgData, radius: e.target.value })}
                    className=" bg-black " value={imgData.radius} name="radius" id="radius" />
            </div>

            <label htmlFor="border" >Border</label>
            <input type="number" onInput={(e) => setImgData({ ...imgData, border: e.target.value })} className=" bg-black " value={imgData.border} name="border" id="border" />

            <h2>Preview</h2>
            <img alt="" style={styles} className={" border-2 border-solid "} id="preview" />
        </>
    )
}

export default EditImage