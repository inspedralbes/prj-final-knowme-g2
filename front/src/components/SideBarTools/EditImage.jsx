import { useRightSideBarStore } from '../../store/rightSideBarStore.js'

export function EditImage() {
    const { content, setContent, contentIndex } = useRightSideBarStore(state => state);

    const styles = {
        border: `${content[contentIndex]?.border}px solid black`,
        borderRadius: `${content[contentIndex]?.radius}%`,
    }

    return (
        <>
            <h2 className="text-2xl font-bold">Image</h2>
            <button className="relative font-bold text-lg w-full h-12 rounded-full bg-[#69b4ff] text-[#ffffff] hover:opacity-90 transition-all duration-100 mt-3">
                + Add File
                <input onInput={(event) => {
                    setContent({ src: URL.createObjectURL(event.target.files[0]), id: contentIndex })


                }} className="top-0 left-0 rounded-full opacity-0 bg-slate-500 absolute size-full hover:cursor-pointer" type="file" name="img" id="imatge" accept="image/*" />
            </button>

            <div className="flex items-center justify-center gap-4 mb-4 mt-4">
                <label htmlFor="radius" className="text-lg font-bold text-gray-100">Radius</label>
                <input type="range" min="0" max="100" value={content[contentIndex]?.radius} onChange={(e) => setContent({ radius: e.target.value, id: contentIndex })}
                    className="w-full h-1 opacity-70 transition-opacity duration-[0.2s] rounded-[5px]"
                />
                <p className="font-semibold">{content[contentIndex]?.radius}%</p>
            </div>

            <div className="mb-8 flex items-center">
                <label htmlFor="border" className="text-lg font-bold text-gray-100 mr-2">Border</label>
                <input type="number" min="0" max="100" value={content[contentIndex]?.border} onChange={(e) => setContent({ border: e.target.value, id: contentIndex })} name="border" id="border"
                    className="w-full p-1 right-0 border rounded-md focus:outline-none text-right focus:border-blue-500 text-slate-700"
                />
            </div>


            <h2 className="text-2xl font-bold mb-2">Preview</h2>
            <div className='flex w-full justify-center'>
                <img alt=""
                    style={styles}
                    className="size-52"
                    src={content[contentIndex]?.src}
                    id="preview" />
            </div>
        </>
    )
}

export default EditImage