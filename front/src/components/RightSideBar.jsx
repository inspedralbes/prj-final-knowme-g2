import { EditText } from "./SideBarTools/EditText.jsx";
import { EditComponent } from "./SideBarTools/EditComponent.jsx";
import { useState } from 'react'
import { useRightSideBarStore } from '../store/rightSideBarStore.js'


import { MenuBar } from "./MenuBar.jsx";
import { EditImage } from "./SideBarTools/EditImage.jsx";

export function RightSideBar({ componentData, setComponentData, imgData, setImgData}) {
    let [selected, setSelected] = useState(null);
    const { type } = useRightSideBarStore();

    return (

        <>
            <div className="h-screen w-1/4  min-w-fit bg-[#2d2d2d] flex text-[#E8E9EA]">
                <div className="h-full w-96 bg-[#2d2d2d]  text-[#E8E9EA]">
                    <main className="m-10">
                        {type == 'text' ? <EditText /> : null}
                        {type == 'component' ? <EditComponent /> : null}
                        {type == 'image' ? <EditImage /> : null}

                    </main>
                </div>
                <nav className="h-full w-14 bg-[#4e4e4e] top-0  text-[#E8E9EA]">
                    <MenuBar selected={selected} setSelected={setSelected} />
                </nav>
            </div>
        </>
    )
}
export default RightSideBar