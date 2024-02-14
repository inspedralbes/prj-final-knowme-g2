import { useRightSideBarStore } from '../../store/rightSideBarStore.js'

export function EditComponent() {
    const { setComponentItem, componentItem } = useRightSideBarStore();


    const startDrag = (evt, id) => {
        evt.dataTransfer.setData("itemID", id);
        setComponentItem({key: componentItem.key == undefined ? 0 : componentItem.key + 1, id: id, mode: "add"});
        evt.dataTransfer.setData("itemComponentId", componentItem.key == undefined ? 0 : componentItem.key + 1);
        evt.dataTransfer.setData("itemMode", "add");
    }

    return (
        <>
            <h2 className="text-2xl font-bold mb-4">Components</h2>
            <div>
                <div id="TitleComponent" className="p-2 rounded-md bg-slate-100 transition-colors duration-200 text-slate-900 h-32 mb-4 font-bold relative group cursor-grab active:cursor-grabbing"
                    draggable="true" onDragStart={(evt) => startDrag(evt, "TitleComponent")}>
                    <h1>Title</h1>
                    <div className="transition-all opacity-0 rounded-md group-hover:opacity-100 absolute inset-0 bg-gray-400 bg-opacity-80 flex items-center justify-center">
                        <span className="icon-[tabler--square-plus-2] size-6"></span>
                    </div>
                </div>
                <div id="ImgComponent" className="p-2 rounded-md bg-slate-100 text-slate-900 h-32 mb-4 font-bold relative group cursor-grab active:cursor-grabbing"
                    draggable onDragStart={(evt) => startDrag(evt, "ImgComponent")}>
                    <h1>Image</h1>
                    <div className="transition-all opacity-0 rounded-md group-hover:opacity-100 absolute inset-0 bg-gray-400 bg-opacity-80 flex items-center justify-center">
                        <span className="icon-[tabler--square-plus-2] size-6"></span>
                    </div>
                </div>
                <div id="TitleComponent" className="p-2 rounded-md bg-slate-100 text-slate-900 h-32 mb-4 font-bold relative group cursor-grab active:cursor-grabbing"
                    draggable onDragStart={(evt) => startDrag(evt, "SocialComponent")}>
                    <h1>Social Media</h1>
                    <div className="transition-all opacity-0 rounded-md group-hover:opacity-100 absolute inset-0 bg-gray-400 bg-opacity-80 flex items-center justify-center">
                        <span className="icon-[tabler--square-plus-2] size-6"></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditComponent;