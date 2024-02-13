import { useRightSideBarStore } from '../../store/rightSideBarStore.js'
import { crearDomini } from '../../../communicationManager.js';
import { useState } from 'react'
export function SaveData() {

    const { content, portfolioComponents } = useRightSideBarStore(state => state);
    const [ link, setLink ] = useState('');
    const  handleClick = async () => {

        let token = '1|dtSvxfTpHBlUTM4vXV2SlLE1rWBmf37ih1MtyQeO85e13210';
        let formData = new FormData();
        formData.append('content', JSON.stringify(content));
        formData.append('portfolioComponents', JSON.stringify(portfolioComponents));
        formData.append('webURL', link);
        const response = await fetch('http://localhost:8000/api/domains', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*'
            },
            body: formData

        });
        console.log(response);
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
            <button onClick={() => handleClick()} className="relative font-bold text-lg w-full h-12 rounded-full bg-[#69b4ff] text-[#ffffff] hover:opacity-90 transition-all duration-100 mt-3">
                Save Data
            </button>


        </>
    )
}

export default SaveData;