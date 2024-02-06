import { useState } from 'react';
import { TitleComponent } from "./PortfolioComponents/TitleComponent.jsx";
import { CellComponent } from "./CellComponent.jsx";

export function PrototypePortfolio({ componentData, imgData }) {
    const [portfolioComponents, setPortfolioComponents] = useState([[[], [], []], [[], [], []], [[], [], []]]);
    const [draggedOverIndex, setDraggedOverIndex] = useState(null);

    const draggingOver = (evt, gridIndex, componentIndex) => {
        evt.preventDefault();
        setDraggedOverIndex([gridIndex, componentIndex]);
    }

    const draggingLeave = (evt) => {
        evt.preventDefault();
        setDraggedOverIndex(null);
    }

    const startDrag = (evt, gridIndex, componentIndex) => {
        evt.dataTransfer.setData("itemMode", "move");
        evt.dataTransfer.setData("gridIndex", gridIndex);
        evt.dataTransfer.setData("componentIndex", componentIndex);
    }

    const onDrop = (evt, gridIndex, componentIndex) => {
        setDraggedOverIndex(null);

        const item = {
            id: evt.dataTransfer.getData("itemID"),
            mode: evt.dataTransfer.getData("itemMode"),
        }

        if (item.mode == "add") {
            switch (item.id) {
                case "TitleComponent":
                    updatePortfolioComponent(TitleComponent, componentData, gridIndex, componentIndex);
                    break;
                case "ImgComponent":
                    updatePortfolioComponent(ImgComponent, imgData, gridIndex, componentIndex);
                    break;
            }
        } else if (item.mode === "move") {
            const draggedItemGridIndex = parseInt(evt.dataTransfer.getData("gridIndex"));
            const draggedItemComponentIndex = parseInt(evt.dataTransfer.getData("componentIndex"));
            console.log(draggedItemComponentIndex, " ", draggedItemGridIndex);

            setPortfolioComponents(prevComponents => {
                const newComponents = [...prevComponents];
                const draggedComponent = newComponents[draggedItemGridIndex][draggedItemComponentIndex];
                newComponents[draggedItemGridIndex][draggedItemComponentIndex] = [];
                if (newComponents[gridIndex][componentIndex].length == 0) {
                    newComponents[gridIndex][componentIndex] = draggedComponent;
                } else {
                    newComponents[gridIndex][componentIndex].push(draggedComponent);
                }

                return newComponents;
            });
        }
    }

    const updatePortfolioComponent = (Component, componentData, gridIndex, componentIndex) => {
        setPortfolioComponents(prevComponents => {
            const newComponents = [...prevComponents];
            const key = prevComponents.length + 1;
            const component = <Component key={key} {...componentData} />;

            console.log(newComponents[gridIndex][componentIndex]);
            console.log(newComponents[gridIndex][componentIndex].length);

            if (newComponents[gridIndex][componentIndex].length != 0) {
                newComponents[gridIndex][componentIndex].push(component);
            } else {
                newComponents[gridIndex][componentIndex] = [component];
            }

            return newComponents;
        });
        console.log("hola: " + gridIndex + ", " + componentIndex);
    };

    const deleteComponent = (gridIndex, componentIndex) => {
        setPortfolioComponents(prevComponents => {
            const newComponents = [...prevComponents];
            newComponents[gridIndex][componentIndex] = [];
            return newComponents;
        });
    }

    return (
        <>
            <div className="h-screen w-3/4 max-w-proses mx-20 bg-white shadow-lg p-8 overflow-hidden overflow-ellipsis overflow-y-visible whitespace-nowrap">
                {portfolioComponents.map((gridComponent, gridIndex) => (
                    <div key={gridIndex} className='w-full min-h-40 h-fit grid grid-cols-3'>
                        {gridComponent.map((component, componentIndex) => {
                            return (
                                <div className={`group hover:border-2 hover:border-pink-500 ${draggedOverIndex && draggedOverIndex[0] == gridIndex && draggedOverIndex[1] == componentIndex ? 'border-2 border-pink-500' : ''} bg-blue-400`} droppable="true" draggable key={componentIndex} onDragOver={(evt => draggingOver(evt, gridIndex, componentIndex))} onDragLeave={(evt => draggingLeave(evt))} onDrop={(evt => onDrop(evt, gridIndex, componentIndex))} onDragStart={(evt) => startDrag(evt, gridIndex, componentIndex)}>
                                    {component.map((element, elementIndex) => {
                                        return (
                                            <div key={elementIndex} className='w-full min-h-24 h-fit bg-green-500 hover:border-2 hover:border-pink-500'>
                                                {element}
                                            </div>
                                        )
                                    })}
                                    {component != "" ? (
                                        <div className='relative right-[-16px] z-10 h-0 flex flex-col items-end justify-end'>
                                            <button onClick={() => deleteComponent(gridIndex, componentIndex)} className='flex justify-center items-center opacity-0 group-hover:opacity-100 bg-red-600 rounded-full w-8 h-10 p-2 transition-all duration-150 hover:bg-red-700'>
                                                <span className="icon-[tabler--trash] text-white"></span>
                                            </button>
                                            <button className='flex justify-center items-center mt-1 opacity-0 group-hover:opacity-100 bg-blue-600 rounded-full w-8 h-10 p-2 transition-all duration-150 hover:bg-blue-700'>
                                                <span className="icon-[tabler--edit] text-white"></span>
                                            </button>
                                        </div>
                                    ) : (<></>)}
                                </div>
                            );
                        })}
                    </div>
                ))}

            </div>
        </>
    )
}

export default PrototypePortfolio;