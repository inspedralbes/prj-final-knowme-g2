
import { useState, useEffect } from 'react'
import { counterStore } from "../stores/counterStore";
export function MenuBar({selected, setSelected}) {
      useEffect(() => {
        counterStore.value.selected = selected;
    }, [selected]);

    return (
        <>
            <ul className="top-10 fixed">
                <li className="shadow-2xl">
                    <button onClick={() => setSelected(0)} className={"bg-[#2d2d2d] border-solid border-2 border-[#2d2d2d] w-12 h-12  rounded-xl ml-1" + (selected == 0 ? ' border-[#ffffff] ' : ' ')}> <span className="icon-[material-symbols--draw-sharp] w-8 h-8 justify-center align-middle  text-white" ></span>
                    </button>
                </li>
                <li>
                    <button onClick={() => setSelected(1)} className={"bg-[#2d2d2d] border-solid border-2 border-[#2d2d2d] w-12 h-12 mt-3 rounded-xl ml-1" + (selected == 1 ? ' border-[#ffffff] ' : ' ')}> <span className="icon-[streamline--widget] w-7 h-7 justify-center align-middle  text-white" ></span>
                    </button>
                </li>
                <li>
                    <button onClick={() => setSelected(2)} className={"bg-[#2d2d2d] border-solid border-2 border-[#2d2d2d] w-12 h-12 mt-3  rounded-xl ml-1" + (selected == 2 ? ' border-[#ffffff] ' : ' ')}> <span className="icon-[ph--palette-fill] w-8 h-8 justify-center align-middle  text-white" ></span>
                    </button>
                </li>
                <li>
                    <button onClick={() => setSelected(3)} className={"bg-[#2d2d2d] border-solid border-2 border-[#2d2d2d] w-12 h-12 mt-3  rounded-xl ml-1" + (selected == 3 ? ' border-[#ffffff] ' : ' ')}> <span className="icon-[material-symbols--imagesmode-outline] w-8 h-8 justify-center align-middle  text-white" ></span>
                    </button>
                </li>
                <li>
                    <button onClick={() => setSelected(4)} className={"bg-[#2d2d2d] border-solid border-2 border-[#2d2d2d] w-12 h-12 mt-3  rounded-xl ml-1" + (selected == 4 ? ' border-[#ffffff] ' : ' ')}> <span className="icon-[solar--smile-square-bold] w-8 h-8 justify-center align-middle  text-white" ></span>
                    </button>
                </li>
                
            </ul>

        </>
    )
}

export default MenuBar