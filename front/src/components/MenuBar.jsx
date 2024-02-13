import { useRightSideBarStore } from '../store/rightSideBarStore.js'

export function MenuBar() {
    const { type, setType } = useRightSideBarStore(state => state);

    return (
        <>
            <ul className="top-10 fixed">
                <li>
                    <button onClick={() => setType('component')} className={"bg-[#2d2d2d] border-solid border-2 border-[#2d2d2d] w-12 h-12 mt-3 rounded-xl ml-1 shadow-sm shadow-black transition-all duration-100" + (type == 'component' ? ' border-[#ffffff] ' : ' ')}> <span className="icon-[streamline--widget] w-7 h-7 justify-center align-middle text-white" ></span>
                    </button>
                </li>
                <li>
                    <button onClick={() => setType('palette')} className={"bg-[#2d2d2d] border-solid border-2 border-[#2d2d2d] w-12 h-12 mt-3  rounded-xl ml-1 shadow-sm shadow-black transition-all duration-100" + (type == 'palette'? ' border-[#ffffff] ' : ' ')}> <span className="icon-[ph--palette-fill] w-8 h-8 justify-center align-middle text-white" ></span>
                    </button>
                </li>
                <li>
                    <button onClick={() => setType('header')} className={"bg-[#2d2d2d] border-solid border-2 border-[#2d2d2d] w-12 h-12 mt-3  rounded-xl ml-1 shadow-sm shadow-black transition-all duration-100" + (type == 'header' ? ' border-[#ffffff] ' : ' ')}> <span className="icon-[solar--smile-square-bold] w-8 h-8 justify-center align-middle text-white" ></span>
                    </button>
                </li>
                <li>
                    <button onClick={() => setType('layout')} className={"bg-[#2d2d2d] border-solid border-2 border-[#2d2d2d] w-12 h-12 mt-3  rounded-xl ml-1 shadow-sm shadow-black transition-all duration-100" + (type == 'layout' ? ' border-[#ffffff] ' : ' ')}> <span className="icon-[ph--layout] w-8 h-8 justify-center align-middle text-white" ></span>
                    </button>
                </li>
            </ul>
            <ul className="bottom-5 fixed">
                <li>
                    <button onClick={() => setType('save')} className={"bg-[#2d2d2d] border-solid border-2 border-[#2d2d2d] w-12 h-12 mt-3  rounded-xl ml-1 shadow-sm shadow-black transition-all duration-100" + (type == 'save' ? ' border-[#ffffff] ' : ' ')}> <span className="icon-[iconoir--floppy-disk] w-8 h-8 justify-center align-middle text-white" ></span>
                    </button>
                </li>
            </ul>
        </>
    )
}

export default MenuBar