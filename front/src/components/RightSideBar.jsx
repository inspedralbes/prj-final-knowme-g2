import { EditText } from "./SideBarTools/EditText.jsx";
import { EditComponent } from "./SideBarTools/EditComponent.jsx";
import { useState, useEffect } from 'react'

import { MenuBar } from "./MenuBar.jsx";
import { OptImg } from "./SideBarTools/EditImage.jsx";

export function RightSideBar({ componentData, setComponentData, imgData, setImgData}) {
    let [selected, setSelected] = useState(null);

    return (

        <>
            <div className="h-screen w-1/4  min-w-fit bg-[#2d2d2d] flex text-[#E8E9EA]">
                <div className="h-full w-96 bg-[#2d2d2d]  text-[#E8E9EA]">
                    <main className="m-10">
                        {selected == 0 ? <EditText componentData={componentData} setComponentData={setComponentData} /> : null}
                        {selected == 1 ? <EditComponent /> : null}
                        {selected == 3 ? <OptImg imgData={imgData} setImgData={setImgData} /> : null}

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