import { useState, useEffect } from 'react';
import { TitleComponent } from "./PortfolioComponents/TitleComponent.jsx";
import { ImgComponent } from "./PortfolioComponents/ImgComponent.jsx";
export function PrototypePortfolio({ componentData, imgData }) {
    const [portfolioComponents, setPortfolioComponents] = useState([]);

    const draggingOver = (evt) => {
        evt.preventDefault();
    }

    const startDrag = (evt, key) => {
        evt.dataTransfer.setData("itemID", key);
        evt.dataTransfer.setData("itemMode", "move");
    }

    const onDrop = (evt) => {
        const item = {
            id: evt.dataTransfer.getData("itemID"),
            mode: evt.dataTransfer.getData("itemMode")
        }

        if (item.mode == "add") {
            switch (item.id) {
                case "TitleComponent":
                    setPortfolioComponents([...portfolioComponents, <TitleComponent key={portfolioComponents.length + 1} componentData={componentData} />]);
                    break;
                case "ImgComponent":
                    setPortfolioComponents([...portfolioComponents, <ImgComponent key={portfolioComponents.length + 1} imgData={imgData} />]);
                    break;
            }
        } else if (item.mode == "move") {
            const dropIndex = evt.target.parentNode.parentNode.id;

            const updatedComponents = [...portfolioComponents];
            const draggedComponent = updatedComponents[item.id];
            updatedComponents.splice(item.id, 1);
            updatedComponents.splice(dropIndex, 0, draggedComponent);

            setPortfolioComponents(updatedComponents);
        }
    }

    const deleteComponent = (index) => {
        const updatedComponents = [...portfolioComponents];
        updatedComponents.splice(index, 1);

        setPortfolioComponents(updatedComponents);
    }

    return (
        <>
            <div className="h-screen w-3/4 max-w-proses mx-20 bg-white shadow-lg p-8 overflow-hidden overflow-ellipsis whitespace-nowrap" droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 1))}>
                {portfolioComponents.map((component, index) => (
                    <div className="relative group border-2 border-transparent hover:border-2 hover:border-pink-500" id={index} key={index} draggable onDragStart={(evt) => startDrag(evt, index)}>
                        {component}
                        <div className='absolute right-[-16px] z-10 top-0 h-full flex flex-col items-center justify-center'>
                            <button onClick={() => deleteComponent(index)} className='flex justify-center items-center opacity-0 group-hover:opacity-100 bg-red-600 rounded-full size-[30px] transition-all duration-150 hover:bg-red-700'>
                                <span className="icon-[tabler--trash] text-white"></span>
                            </button>
                            <button className='flex justify-center items-center mt-1 opacity-0 group-hover:opacity-100 bg-blue-600 rounded-full size-[30px] transition-all duration-150 hover:bg-blue-700'>
                                <span className="icon-[tabler--edit] text-white"></span>
                            </button>
                        </div>
                    </div>
                ))}
            </div >
        </>
    )
}

export default PrototypePortfolio;