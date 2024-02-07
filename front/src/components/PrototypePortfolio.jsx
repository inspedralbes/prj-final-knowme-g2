import { useState } from 'react';
import { TitleComponent } from "./PortfolioComponents/TitleComponent.jsx";
import { ImgComponent } from "./PortfolioComponents/ImgComponent.jsx";
import { useRightSideBarStore } from '../store/rightSideBarStore.js'


export function PrototypePortfolio() {
    const [portfolioComponents, setPortfolioComponents] = useState([
        {
            components: [[], [], []],
            style: {
                sizes: [1, 1, 1],
                string: "minmax(20px,1fr) minmax(20px,1fr) minmax(20px,1fr)"
            }
        },
        {
            components: [[], [], []],
            style: {
                sizes: [1, 1, 1],
                string: "minmax(20px,1fr) minmax(20px,1fr) minmax(20px,1fr)"
            }
        },
        {
            components: [[], [], []],
            style: {
                sizes: [1, 1, 1],
                string: "minmax(20px,1fr) minmax(20px,1fr) minmax(20px,1fr)"
            }
        },
    ]);
    const [draggedOverIndex, setDraggedOverIndex] = useState(null);
    const { setType } = useRightSideBarStore(state => state);


    const draggingOver = (evt, gridIndex, componentIndex) => {
        evt.preventDefault();
        setDraggedOverIndex([gridIndex, componentIndex]);
    }

    const draggingLeave = (evt) => {
        evt.preventDefault();
        setDraggedOverIndex(null);
    }

    const startDrag = (evt, gridIndex, componentIndex, elementIndex) => {
        evt.dataTransfer.setData("itemMode", "move");
        evt.dataTransfer.setData("gridIndex", gridIndex);
        evt.dataTransfer.setData("componentIndex", componentIndex);
        evt.dataTransfer.setData("elementIndex", elementIndex);
    }

    const onDrop = (evt, gridIndex, componentIndex) => {
        setDraggedOverIndex(null);

        const item = {
            id: evt.dataTransfer.getData("itemID"),
            mode: evt.dataTransfer.getData("itemMode"),
            key: evt.dataTransfer.getData("itemComponentId"),
        }

        if (item.mode == "add") {
            switch (item.id) {
                case "TitleComponent":
                    updatePortfolioComponent(TitleComponent, gridIndex, componentIndex, item.key, evt);
                    break;
                case "ImgComponent":
                    updatePortfolioComponent(ImgComponent, gridIndex, componentIndex, item.key, evt);
                    break;
            }
        } else if (item.mode === "move") {
            const draggedItemGridIndex = parseInt(evt.dataTransfer.getData("gridIndex"));
            const draggedItemComponentIndex = parseInt(evt.dataTransfer.getData("componentIndex"));
            const draggedItemElementIndex = parseInt(evt.dataTransfer.getData("elementIndex"));

            setPortfolioComponents(prevComponents => {
                const newComponents = [...prevComponents];
                const draggedComponent = newComponents[draggedItemGridIndex].components[draggedItemComponentIndex][draggedItemElementIndex];
                newComponents[draggedItemGridIndex].components[draggedItemComponentIndex].splice(draggedItemElementIndex, 1);
                if (newComponents[gridIndex].components[componentIndex].length == 0) {
                    newComponents[gridIndex].components[componentIndex] = [draggedComponent];
                } else {
                    const elementIndex = evt.target.parentNode.parentNode.dataset.key;
                    newComponents[gridIndex].components[componentIndex].splice(elementIndex, 0, draggedComponent);
                }

                return newComponents;
            });
        }
    }

    const updatePortfolioComponent = (Component, gridIndex, componentIndex, ItemKey, evt) => {
        setPortfolioComponents(prevComponents => {
            const newComponents = [...prevComponents];
            const key = prevComponents.length + 1;
            const component = <Component key={key} id={ItemKey.toString()} />;

            if (newComponents[gridIndex].components[componentIndex].length != 0) {
                const elementIndex = evt.target.parentNode.parentNode.dataset.key;
                newComponents[gridIndex].components[componentIndex].splice(elementIndex, 0, component);
            } else {
                newComponents[gridIndex].components[componentIndex] = [component];
            }

            return newComponents;
        });
    };

    const deleteComponent = (gridIndex, componentIndex, elementIndex) => {
        setPortfolioComponents(prevComponents => {
            const newComponents = [...prevComponents];
            newComponents[gridIndex].components[componentIndex].splice(elementIndex, 1);
            return newComponents;
        });
        setType('component')
    }

    const setSizeGrid = (gridIndex, componentIndex, value) => {
        setPortfolioComponents(prevComponents => {
            const newComponents = [...prevComponents];
            newComponents[gridIndex].style.sizes[componentIndex] = value;
            let styleString = newComponents[gridIndex].style.string.split(" ");
            styleString[componentIndex] = "minmax(20px," + value + "fr)";
            let style = styleString[0] + " " + styleString[1] + " " + styleString[2];
            newComponents[gridIndex].style.string = style;
            return newComponents;
        });


    }

    return (
        <>
            <div className="h-screen w-3/4 max-w-proses mx-20 bg-white shadow-lg p-8 overflow-hidden overflow-ellipsis overflow-y-visible whitespace-nowrap">
                {portfolioComponents.map((gridComponent, gridIndex) => (
                    <div key={gridIndex} className='w-full max-w-full min-h-[33%] grid relative' style={{ gridTemplateColumns: gridComponent.style.string }}>
                        {gridComponent.components.map((component, componentIndex) => {
                            return (
                                <div className={`border-2  hover:border-transparent ${draggedOverIndex && draggedOverIndex[0] == gridIndex && draggedOverIndex[1] == componentIndex ? 'border-2 border-pink-500' : ''} `} droppable="true" key={componentIndex} onDragOver={(evt => draggingOver(evt, gridIndex, componentIndex))} onDragLeave={(evt => draggingLeave(evt))} onDrop={(evt => onDrop(evt, gridIndex, componentIndex))}>
                                    <div className='absolute z-10 h-0 flex flex-col items-end justify-start'>
                                        <input type="range" min="0" max="2" step="0.05" value={portfolioComponents[gridIndex].style.sizes[componentIndex]} onChange={(e) => setSizeGrid(gridIndex, componentIndex, e.target.value)}
                                            className="w-full h-1 transition-opacity duration-[0.2s] rounded-[5px]"
                                        />
                                    </div>
                                    {component.map((element, elementIndex) => {
                                        return (
                                            <div key={elementIndex} data-key={elementIndex} className='group w-full h-fit border-2 border-transparent hover:border-pink-500' draggable onDragStart={(evt) => startDrag(evt, gridIndex, componentIndex, elementIndex)}>
                                                {element}
                                                <div className='relative right-[-16px] z-10 h-0 flex flex-col items-end justify-start'>
                                                    <button onClick={() => deleteComponent(gridIndex, componentIndex, elementIndex)} className='flex justify-center items-center opacity-0 group-hover:opacity-100 bg-red-600 rounded-full w-8 h-10 p-2 transition-all duration-150 hover:bg-red-700'>
                                                        <span className="icon-[tabler--trash] text-white"></span>
                                                    </button>
                                                </div>
                                            </div>
                                        )
                                    })}
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