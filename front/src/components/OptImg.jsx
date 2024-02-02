
import { useState, useEffect } from 'react'
import { counterStore } from "../stores/counterStore";
export function OptImg({ selected, setSelected }) {
    let img = undefined;
    let [radius, setRadius] = useState(0);
    let [border, setBorder] = useState(0);
    let styles = {
        borderRadius: radius + "px",
        border: border + "px solid black"
    }
    useEffect(() => {
        console.log(radius);
    }, [radius]);
    return (
        <>
            <h2 className="font-sans font-bold text-[30px]">Image</h2>
            <div>
                <label htmlFor="imatge">+ Add File</label>
                <input onInput={(event) => {
                    var output = document.getElementById('preview');
                    output.src = URL.createObjectURL(event.target.files[0])
                }} className="hidden" type="file" name="img" id="imatge" />
            </div>
            <div><label htmlFor="radius" >Radius</label>
                <input type="number" onInput={(event) => {
                    setRadius(event.target.value);
                }} className=" bg-black " value={radius} name="radius" id="radius" />
            </div>

            <label htmlFor="border" >Border</label>
            <input type="number" onInput={(event) => {
                setBorder(event.target.value);
            }} className=" bg-black " value={border} name="border" id="border" />

            <h2>Preview</h2>
            <img alt="" style={styles} className={" border-2 border-solid "} id="preview" />
        </>
    )
}

export default OptImg