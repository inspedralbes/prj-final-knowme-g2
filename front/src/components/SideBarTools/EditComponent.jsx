import { useState } from 'react'

export function EditComponent() {
    const startDrag = (evt, id) => {
        evt.dataTransfer.setData("itemID", id);
        evt.dataTransfer.setData("itemMode", "add");
        setDraggedText(id);
    }
    const startDragImg = (evt, id) => {
        evt.dataTransfer.setData("itemID", id);
        evt.dataTransfer.setData("itemMode", "add");
        setDraggedText(id);
    }
    return (
        <>
            <h2 className="text-2xl font-bold mb-4">Components</h2>
            <div>
                <div id="TitleComponent" className="p-2 rounded-md bg-slate-100 text-slate-900 h-32 mb-4 font-bold relative group"
                    draggable onDragStart={(evt) => startDrag(evt, "TitleComponent")} onDragEnd={(evt) => endDrag(evt, "TitleComponent")}>
                    <h1>Title component</h1>
                    <div className="transition-all opacity-0 rounded-md group-hover:opacity-100 absolute inset-0 bg-gray-400 bg-opacity-80 flex items-center justify-center">
                        <span className="icon-[tabler--square-plus-2] size-6"></span>
                    </div>
                </div>
                <div id="ImgComponent" className="p-2 rounded-md bg-slate-100 text-slate-900 h-32 mb-4 font-bold relative group"
                    draggable onDragStart={(evt) => startDrag(evt, "ImgComponent")} onDragEnd={(evt) => endDrag(evt, "ImgComponent")}>
                    <h1>Image</h1>
                    <div className="transition-all opacity-0 rounded-md group-hover:opacity-100 absolute inset-0 bg-gray-400 bg-opacity-80 flex items-center justify-center">
                        <span className="icon-[tabler--square-plus-2] size-6"></span>
                    </div>
                </div>
                <div id="TitleComponent" className="p-2 rounded-md bg-slate-100 text-slate-900 h-32 mb-4 font-bold relative group"
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