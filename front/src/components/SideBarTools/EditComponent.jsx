import { useState } from 'react'

export function EditComponent({ componentData, setComponentData }) {
    const [draggedText, setDraggedText] = useState(null);
    const [posX, setPosX] = useState(0);
    const [posY, setPosY] = useState(0);
    const [eventData, setEventData] = useState({

        itemID: null,
        itemMode: null,
        posX: null,
        posY: null,

    });

    onmousemove = (evt) => {
        setPosX(evt.clientX);
        setPosY(evt.clientY);
    }
    const startDrag = (evt, id) => {
       
    }

    const endDrag = (evt, id) => {
        console.log("endDrag");
        evt.preventDefault();
        evt.dataTransfer.setData("itemID", id);
        evt.dataTransfer.setData("itemMode", "add");
        evt.dataTransfer.setData("posX", posX);
        evt.dataTransfer.setData("posY", posY);
        setDraggedText(id);
    }
    return (
        <>
            <h2 className="text-2xl font-bold">Components</h2>
            <div>
                <div id="TitleComponent" className="bg-red-600" draggable onDragStart={(evt) => startDrag(evt, "TitleComponent")} onDragEnd={(evt) => endDrag(evt, "TitleComponent")}>
                    <h1>Title component</h1>
                </div>
                <div id="ImgComponent" className="bg-red-600 mt-4" draggable onDragStart={(evt) => startDrag(evt, "ImgComponent")} onDragEnd={(evt) => endDrag(evt, "ImgComponent")}>
                    <h1>Image</h1>
                </div>
                <div id="TitleComponent" className="bg-red-600 mt-4" draggable onDragStart={(evt) => startDragImg(evt, "SocialComponent")}>
                    <h1>Social Media</h1>
                </div>
            </div>
        </>
    )
}

export default EditComponent;