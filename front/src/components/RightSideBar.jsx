import { EditText } from "./EditText";
import { useState, useEffect } from 'react'

import { MenuBar } from "./MenuBar.jsx";
import { counterStore } from "../stores/counterStore";
import { OptImg } from "./OptImg.jsx";
export function RightSideBar({ componentData, setComponentData }) {
    let [selected, setSelected] = useState(null);

    return (

        <>
            <div className="h-screen w-1/4  min-w-fit bg-[#2d2d2d] flex text-[#E8E9EA]">
                <div className="h-full w-96 bg-[#2d2d2d]  text-[#E8E9EA]">
                    <main className="m-10">
                        {selected == 0 ? <EditText componentData={componentData} setComponentData={setComponentData} /> : null}
                        {selected == 3 ? <OptImg /> : null}

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