import { EditText } from "./SideBarTools/EditText.jsx";
import { EditComponent } from "./SideBarTools/EditComponent.jsx";
import { EditLayout } from "./SideBarTools/EditLayout.jsx";
import { SaveData } from "./SideBarTools/SaveData.jsx";
import { useState } from 'react'
import { useRightSideBarStore } from '../store/rightSideBarStore.js'
import { MenuBar } from "./MenuBar.jsx";
import { EditImage } from "./SideBarTools/EditImage.jsx";

export function RightSideBar() {
    let [selected, setSelected] = useState(null);
    const { type } = useRightSideBarStore();

    return (
        <>
            <div className="h-screen w-1/4 min-w-fit  bg-[#2d2d2d] flex text-[#E8E9EA]">
                <div className="h-full overflow-y-auto w-96 bg-[#2d2d2d] text-[#E8E9EA]">
                    <main className="m-10">
                        <div className={`transition-all duration-700 ease-in-out overflow-hidden ${type == 'image' ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0'}`}>
                            {type == 'image' ? <EditImage /> : ''}
                        </div>
                        <div className={`transition-all duration-700 ease-in-out overflow-hidden ${type == 'text' ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0'}`}>
                            {type == 'text' ? <EditText /> : ''}
                        </div>
                        <div className={`transition-all duration-700 ease-in-out overflow-hidden ${type == 'component' ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0'}`}>
                            {type == 'component' ? <EditComponent /> : ''}
                        </div>
                        <div className={`transition-all duration-700 ease-in-out overflow-hidden ${type == 'layout' ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0'}`}>
                            <EditLayout />
                        </div>
                        <div className={`transition-all duration-700 ease-in-out overflow-hidden ${type == 'save' ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0'}`}>
                            <SaveData />
                        </div>
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