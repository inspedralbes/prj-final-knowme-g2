import { useRightSideBarStore } from '../../store/rightSideBarStore.js'
import { createDomain } from '../../services/communicationManager.js';
import { useState } from 'react'

export function SaveData() {

    const { content, portfolioComponents } = useRightSideBarStore(state => state);
    const [link, setLink] = useState('');
    const [publico, setPublic] = useState(false);
    const [category, setCategory] = useState('');
    const handleClick = async () => {
        let token = '1|dtSvxfTpHBlUTM4vXV2SlLE1rWBmf37ih1MtyQeO85e13210';
        createDomain(content, portfolioComponents, link, category, publico, token);
    }

    return (
        <>
            <h2 className="text-2xl font-bold">Save</h2>
            <div className="relative mt-2">
                <div className="mb-2">
                    <label className="block text-sm font-medium text-white">URL name</label>
                    <input type="text" placeholder='loris-crisafo' onInput={(e) => setLink(e.target.value)} className="text-lg w-full overflow-hidden h-12 px-2 mt-2 resize-none focus:outline-none rounded-lg bg-[#313131] text-[#E8E9EA] border-2 border-[#E8E9EA] pr-10" />
                </div>
            </div>

            <div className="relative mt-2">
                <div className="mb-2">
                    <label className="block text-sm font-medium text-white">Public</label>
                    <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" onInput={(e) => setPublic(e.target.checked)} className="sr-only peer" />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-500"></div>
                    </label>
                </div>
            </div>

            <div className="relative mt-2">
                <div className="mb-2">
                    <label htmlFor="category" className="block text-sm font-medium text-white">Category</label>
                    <select onChange={setCategory} id="countries" className="border-gray-300 border-2 text-white rounded-lg block w-full p-2.5 bg-[#313131] ">
                        <option defaultValue="Choose a category">Choose a category</option>
                        <option value="Administrative">Administrative</option>
                        <option value="Customer Service">Customer Service</option>
                        <option value="Finance">Finance</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>
            <button onClick={() => handleClick()} className="relative font-bold text-lg w-full h-12 rounded-full bg-[#69b4ff] text-[#ffffff] hover:opacity-90 transition-all duration-100 mt-3">
                Save Data
            </button>


        </>
    )
}

export default SaveData;