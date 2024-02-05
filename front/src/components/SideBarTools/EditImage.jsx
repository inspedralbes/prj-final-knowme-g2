import { useRightSideBarStore } from '../../store/rightSideBarStore.js'


export function EditImage() {
    const { content, setContent } = useRightSideBarStore(state => state);

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
                    let output = document.getElementById('preview');
                    output.src = URL.createObjectURL(event.target.files[0])
                    setContent({ ...content, src: output.src })
                }} className="top-0 left-0 rounded-full opacity-0 bg-slate-500 absolute w-full hover:cursor-pointer" type="file" name="img" id="imatge" accept="image/*" />
            </button>

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


            <h2 className="text-2xl font-bold mb-2">Preview</h2>
            <div className='flex w-full justify-center'>
                <img alt=""
                    style={styles}
                    className="size-52"
                    src={content?.src}
                    id="preview" />
            </div>
        </>
    )
}

export default EditImage