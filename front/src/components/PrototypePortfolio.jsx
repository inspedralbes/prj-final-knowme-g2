import { useState, useEffect } from 'react';
import { TitleComponent } from "./TitleComponent.jsx";
import { ImgComponent} from "./ImgComponent.jsx";
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

        console.log(item.mode);

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

    return (
        <>
            <div className="h-screen w-3/4 max-w-proses mx-20 bg-white shadow-lg p-8 overflow-hidden overflow-ellipsis whitespace-nowrap" droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 1))}>
                <TitleComponent componentData={componentData} />

                {portfolioComponents.map((component, index) => (
                    <div className="relative group" id={index} key={index} draggable onDragStart={(evt) => startDrag(evt, index)}>
                        {component}
                        <button className='absolute inline-block right-0 top-[10%] opacity-0 group-hover:opacity-100 bg-red-600 rounded-full z-10 p-4 size-12 transition-all duration-150'>
                            <svg viewBox="0 0 448 512" class="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
                        </button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default PrototypePortfolio;