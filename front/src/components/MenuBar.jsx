import { useState } from 'react'

export function MenuBar() {
    const sizes = ['Primary', 'Secondary', 'Tertiary'];
    let [isBold, setIsBold] = useState(false);
    let [isItaly, setIsItaly] = useState(false);
    let [size, setSize] = useState(0);
    let [dropDown, setDropDown] = useState(false);

    return (
        <>
            <ul>
                <li>
                    <button> <span class="icon-[material-symbols--draw-sharp] w-12 h-12 p-2 border-r-2 bg-[#2d2d2d] top-8 right-1 text-white" ></span>
                    </button>
                </li>
            </ul>

        </>
    )
}

export default MenuBar