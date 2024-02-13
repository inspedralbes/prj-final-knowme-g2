import { useRightSideBarStore } from '../../store/rightSideBarStore.js'

export function SaveData() {
    const { content, contentIndex, setContent } = useRightSideBarStore(state => state);

    return (
        <>
            <h2 className="text-2xl font-bold">Save</h2>
            <div className="relative mt-2">
                <div className="mb-2">
                    <label for="large-input" className="block text-sm font-medium text-white">URL name</label>
                    <input type="text" placeholder='loris-crisafo' className="text-lg w-full overflow-hidden h-12 px-2 mt-2 resize-none focus:outline-none rounded-lg bg-[#313131] text-[#E8E9EA] border-2 border-[#E8E9EA] pr-10" />
                </div>
            </div>
            <button className="relative font-bold text-lg w-full h-12 rounded-full bg-[#69b4ff] text-[#ffffff] hover:opacity-90 transition-all duration-100 mt-3">
                Save Data
            </button>


        </>
    )
}

export default SaveData;