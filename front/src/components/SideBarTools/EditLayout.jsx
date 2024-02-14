import { useState, useEffect } from 'react'
import { useRightSideBarStore } from '../../store/rightSideBarStore.js'

export function EditLayout() {
    const { portfolioComponents, setPortfolioComponents } = useRightSideBarStore(state => state);
    const [grid, setGrid] = useState(0);
    const [tableGrid, setTableGrid] = useState(portfolioComponents);

    const handleRowChange = (event) => {
        const newRow = parseInt(event.target.value);
        setGrid(newRow);
    };

    const setSizeGrid = (gridIndex, componentIndex, value) => {
        const newComponents = [...portfolioComponents];
        newComponents[gridIndex].style.sizes[componentIndex] = value;
        let styleString = newComponents[gridIndex].style.string.split(" ");
        styleString[componentIndex] = "minmax(40px," + value + "fr)";
        let style = styleString[0] + " " + styleString[1] + " " + styleString[2];
        newComponents[gridIndex].style.string = style;
        setPortfolioComponents(newComponents);

        styleString[componentIndex] = "minmax(10px," + value + "fr)";
        let styleTable = styleString[0] + " " + styleString[1] + " " + styleString[2];
        tableGrid[gridIndex].style.string = styleTable;
    }

    return (
        <>
            <h2 className="text-2xl font-bold">Layout</h2>
            <div className="flex mt-4">
                <div className="flex items-center justify-center gap-4 mb-4">
                    <label htmlFor="rowSelect" className="text-lg text-gray-100">Click on the row you want to edit</label>
                </div>
            </div>
            <div className="overflow-x-auto mt-2">
                {grid != "-1" ? (
                    <>
                        <div className="w-full">
                            {portfolioComponents.map((component, rowIndex) => (
                                <div onClick={() => setGrid(rowIndex)} key={rowIndex} className={'w-full max-w-full min-h-[33%] grid relative border' + (grid == rowIndex ? "border-orange-600" : "border-white")} style={{ gridTemplateColumns: tableGrid[rowIndex].style.string }}>
                                    {component.components.map((_, colIndex) => (
                                        <div key={colIndex} className={(grid == rowIndex ? "border-orange-600" : "border-white") + " border h-12"}></div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div className='flex mt-2'>
                            <div className="flex items-center justify-center gap-4 mb-4">
                                {portfolioComponents[grid] && portfolioComponents[grid].components.map((component, index) => (
                                    <div className='h-12 flex flex-col items-end justify-start' key={index}>
                                        <input type="range" min="0" max="2" step="0.05" value={portfolioComponents[grid].style.sizes[index]} onChange={(e) => setSizeGrid(grid, index, e.target.value)}
                                            className="w-full h-1 transition-opacity duration-[0.2s] rounded-[5px]"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                ) : (<></>)}
            </div>

        </>
    )
}

export default EditLayout;