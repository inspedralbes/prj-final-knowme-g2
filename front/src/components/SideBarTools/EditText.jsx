import { useState, useEffect } from 'react'
import { useRightSideBarStore } from '../../store/rightSideBarStore.js'

export function EditText() {
    const { content, setContent } = useRightSideBarStore(state => state);
    const sizes = ['Primary', 'Secondary', 'Tertiary'];
    let [size, setSize] = useState(0);
    let [dropDown, setDropDown] = useState(false);

    useEffect(() => {
        document.getElementById('editText').select();
    }, []);

    return (
        <>
            <h2 className="text-2xl font-bold">Text</h2>
            <div className="relative mb-2">
                <textarea
                    id='editText'
                    className={"text-lg w-full overflow-hidden h-14 px-2 mt-2 resize-none focus:outline-none rounded-lg bg-[#313131] text-[#E8E9EA] border-2 border-[#E8E9EA] pr-10 " + (content?.bold ? ' font-bold ' : '') + (content?.italic ? 'italic ' : '')}
                    defaultValue={content?.text}
                    onChange={(e) => setContent({ ...content, text: e.target.value })}
                ></textarea>
                <span className="icon-[bi--stars] size-5 absolute top-8 right-1 text-white"></span>
            </div>
            <div className="flex items-center">
                <button onClick={() => setContent({ ...content, bold: !content?.bold })} className={"rounded-full bg-[#454545] w-24 h-10 min-w-10 transition-all duration-100 hover:bg-opacity-80 mr-2 flex justify-center items-center " + (content?.bold ? 'bg-[#e0ffff] text-[#444444]' : '')}>
                    <span className="icon-[mingcute--bold-fill] text-xl"></span>
                </button>
                <button onClick={() => setContent({ ...content, italic: !content?.italic })} className={"rounded-full bg-[#454545] w-24 h-10 min-w-10 transition-all duration-100 hover:bg-opacity-80 mr-2 flex justify-center items-center " + (content?.italic ? 'bg-[#e0ffff] text-[#444444]' : '')}>
                    <span className="icon-[tabler--italic] text-xl"></span>
                </button>
                <p className='inline-block ml-6'>Size</p>
                <div onClick={() => setDropDown(!dropDown)} className='cursor-pointer select-custom font-bold ml-2 pl-5 w-full h-10 pt-2 rounded-full bg-[#e0ffff] text-[#444444] border-[#E8E9EA] focus:outline-none'>
                    <ul>{sizes[size]}</ul>
                    {dropDown && (
                        <ul className='absolute top-48 w-max rounded bg-[#e0ffff] text-[#444444] border-[#E8E9EA]'>
                            {sizes.map((size, index) => (
                                <li
                                    key={index}
                                    onClick={() => {
                                        setSize(index);
                                        setDropDown(false);
                                    }}
                                    className='hover:bg-[#E8E9EA] rounded px-4 cursor-pointer p-2'
                                >
                                    {size}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <hr className='h-0.5 my-5 bg-[#4e4e4e] border-0'></hr>

        </>
    )
}

export default EditText;