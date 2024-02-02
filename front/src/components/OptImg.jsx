
import { counterStore } from "../stores/counterStore";
export function OptImg({ imgData, setImgData }) {
    let img = undefined;
    let styles = {
        borderRadius: imgData.radius + "px",
        border: imgData.border + "px solid black"
    }

    return (
        <>
            <h2 className="font-sans font-bold text-[30px]">Image</h2>
            <div>
                <label htmlFor="imatge">+ Add File</label>
                <input onInput={(event) => {
                    var output = document.getElementById('preview');
                    output.src = URL.createObjectURL(event.target.files[0])
                    setImgData({ ...imgData, src: output.src })
                }} className="hidden" type="file" name="img" id="imatge" />
            </div>
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

export default OptImg