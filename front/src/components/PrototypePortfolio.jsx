import { useState } from 'react';
import { TitleComponent } from "./PortfolioComponents/TitleComponent.jsx";
import { ImgComponent } from "./PortfolioComponents/ImgComponent.jsx";
import { useRightSideBarStore } from '../store/rightSideBarStore.js'


export function PrototypePortfolio() {
    const [draggedOverIndex, setDraggedOverIndex] = useState(null);
    const { setType, portfolioComponents, setPortfolioComponents, componentItem, setComponentItem, addContent } = useRightSideBarStore(state => state);

    const draggingOver = (evt, gridIndex, componentIndex) => {
        evt.preventDefault();
        setDraggedOverIndex([gridIndex, componentIndex]);
    }

    const draggingLeave = (evt) => {
        evt.preventDefault();
        setDraggedOverIndex(null);
    }

    const startDrag = (evt, gridIndex, componentIndex, elementIndex) => {
        setComponentItem({ elementIndex: elementIndex, componentIndex: componentIndex, gridIndex: gridIndex, mode: "move", key: componentItem.key });
    }

    const onDrop = (evt, gridIndex, componentIndex) => {
        setDraggedOverIndex(null);
        if (componentItem.mode == "add") {
            switch (componentItem.id) {
                case "TitleComponent":
                    updatePortfolioComponent(TitleComponent, gridIndex, componentIndex, evt);
                    addContent({ text: 'Hey, I\'m Loris Crisafo Norte', bold: true, id: parseInt(componentItem.key), align: 'left' });
                    break;
                case "ImgComponent":
                    updatePortfolioComponent(ImgComponent, gridIndex, componentIndex, evt);
                    addContent({ src: 'https://via.placeholder.com/150', srcOrig: 'https://via.placeholder.com/150', border: 3, radius: 50, width: 250, height: 250, rotate: 0, zoom: 100, align: 'left', id: parseInt(componentItem.key) });
                    break;
            }

        } else if (componentItem.mode === "move") {
            const draggedItemGridIndex = parseInt(componentItem.gridIndex);
            const draggedItemComponentIndex = parseInt(componentItem.componentIndex);
            const draggedItemElementIndex = parseInt(componentItem.elementIndex);

            const newComponents = [...portfolioComponents];
            const draggedComponent = newComponents[draggedItemGridIndex].components[draggedItemComponentIndex][draggedItemElementIndex];
            newComponents[draggedItemGridIndex].components[draggedItemComponentIndex].splice(draggedItemElementIndex, 1);
            if (newComponents[gridIndex].components[componentIndex].length == 0) {
                newComponents[gridIndex].components[componentIndex] = [draggedComponent];
            } else {
                const elementIndex = evt.target.parentNode.parentNode.dataset.key;
                newComponents[gridIndex].components[componentIndex].splice(elementIndex, 0, draggedComponent);
            }

            setPortfolioComponents(newComponents);
        }
    }

    const updatePortfolioComponent = (Component, gridIndex, componentIndex, evt) => {
        const newComponents = [...portfolioComponents];
        const key = newComponents.length + 1;
        const component = <Component key={key} id={parseInt(componentItem.key)} />;

        if (newComponents[gridIndex].components[componentIndex].length != 0) {
            const elementIndex = evt.target.parentNode.parentNode.dataset.key;
            newComponents[gridIndex].components[componentIndex].splice(elementIndex, 0, component);
        } else {
            newComponents[gridIndex].components[componentIndex] = [component];
        }

        setPortfolioComponents(newComponents);
    };

    const deleteComponent = (gridIndex, componentIndex, elementIndex) => {
        const newComponents = [...portfolioComponents];
        newComponents[gridIndex].components[componentIndex].splice(elementIndex, 1);

        setPortfolioComponents(newComponents);
        setType('component')
    }

    const addRow = () => {
        const newComponents = [...portfolioComponents];
        newComponents.push({
            components: [[], [], []],
            style: {
                sizes: [1, 1, 1],
                string: "minmax(40px,1fr) minmax(40px,1fr) minmax(40px,1fr)"
            }
        });

        console.log(newComponents)
        setPortfolioComponents(newComponents);
    }

    return (
        <>
            <div className="h-screen w-3/4 max-w-proses mx-20 bg-white shadow-lg p-8 overflow-hidden overflow-ellipsis overflow-y-visible whitespace-nowrap">
                {portfolioComponents && portfolioComponents.map((gridComponent, gridIndex) => (
                    <div key={gridIndex} className='w-full max-w-full min-h-[33%] grid relative' style={{ gridTemplateColumns: gridComponent.style.string }}>
                        {gridComponent.components.map((component, componentIndex) => {
                            return (
                                <div className={`border-2 hover:border-transparent ${draggedOverIndex && draggedOverIndex[0] == gridIndex && draggedOverIndex[1] == componentIndex ? ' border-pink-500' : ''} `} droppable="true" key={componentIndex} onDragOver={(evt => draggingOver(evt, gridIndex, componentIndex))} onDragLeave={(evt => draggingLeave(evt))} onDrop={(evt => onDrop(evt, gridIndex, componentIndex))}>
                                    {component.map((element, elementIndex) => {
                                        return (
                                            <div key={elementIndex} data-key={elementIndex} className='group w-full h-fit border-2 border-dashed border-transparent hover:border-pink-500' draggable onDragStart={(evt) => startDrag(evt, gridIndex, componentIndex, elementIndex)}>
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
                <button onClick={() => addRow()} className='hover:text-blue-300 text-white mt-2 w-full flex items-center justify-center bg-blue-500 hover:bg-blue-600 rounded-sm py-2'>
                    <span className="icon-[tabler--circle-plus]  text-xl"></span>
                </button>

            </div>
        </>
    )
}

export default PrototypePortfolio;