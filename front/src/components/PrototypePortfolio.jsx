import { useState } from 'react';
import { TitleComponent } from "./PortfolioComponents/TitleComponent.jsx";
import { CellComponent } from "./CellComponent.jsx";

export function PrototypePortfolio({ componentData, imgData }) {
    const [portfolioComponents, setPortfolioComponents] = useState([["", "", ""]]);

    const draggingOver = (evt) => {
        evt.preventDefault();
    }

    // const startDrag = (evt, key) => {
    //     evt.dataTransfer.setData("itemID", key);
    //     evt.dataTransfer.setData("itemMode", "move");
    // }

    const onDrop = (evt, gridIndex, componentIndex) => {
        const item = {
            id: evt.dataTransfer.getData("itemID"),
            mode: evt.dataTransfer.getData("itemMode"),
            posX: componentIndex,
            posY: gridIndex
        }

        if (item.mode == "add") {
            switch (item.id) {
                case "TitleComponent":
                    setPortfolioComponents([...portfolioComponents, <TitleComponent key={portfolioComponents.length + 1} componentData={componentData} pos={item.pos} />]);
                    break;
                case "ImgComponent":
                    setPortfolioComponents([...portfolioComponents, <ImgComponent key={portfolioComponents.length + 1} imgData={imgData} pos={item.pos} />]);
                    break;
            }
        } else if (item.mode == "move") {
            const dropIndex = evt.target.parentNode.parentNode.id;

            const updatedComponents = portfolioComponents;
            const draggedComponent = updatedComponents.find((component, index) => component.key == item.id);
            let index = updatedComponents.indexOf(draggedComponent);

            // Remove component from updatedComponents if key matches item.id
            updatedComponents.splice(index, 1);
            setPortfolioComponents(updatedComponents);
            if (draggedComponent.type.name == 'TitleComponent') {
                setPortfolioComponents([...portfolioComponents, <TitleComponent key={draggedComponent.key} componentData={componentData} pos={item.pos} />]);
            }
            else if (draggedComponent.type.name == 'ImgComponent') {
                setPortfolioComponents([...portfolioComponents, <ImgComponent key={draggedComponent.key} imgData={imgData} pos={item.pos} />]);
            }

        }
    }

    const deleteComponent = (index) => {
        const updatedComponents = [...portfolioComponents];
        const draggedComponent = updatedComponents.find((component, index) => component.key == index);
        let indexDel = updatedComponents.indexOf(draggedComponent);
        updatedComponents.splice(indexDel, 1);

        setPortfolioComponents(updatedComponents);
    }

    return (
        <>
            <div className="h-screen w-3/4 max-w-proses mx-20 bg-white shadow-lg p-8 overflow-hidden overflow-ellipsis whitespace-nowrap">
                {portfolioComponents.map((gridComponent, gridIndex) => (
                    <div key={gridIndex} className='w-full h-24 bg-red-500 grid grid-cols-3'>
                        {gridComponent.map((component, componentIndex) => {
                            return (
                                <CellComponent key={componentIndex} componentData={component} droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, gridIndex, gridComponent))} />
                            );
                        })}
                    </div>
                ))}

            </div>
        </>
    )
}

export default PrototypePortfolio;