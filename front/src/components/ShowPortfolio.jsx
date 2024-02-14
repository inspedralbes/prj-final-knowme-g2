export function ShowPortfolio({ jsonData }) {
    return (
        <>
            <div className="h-screen w-5/6 max-w-proses mx-20 bg-white shadow-lg p-8 overflow-hidden overflow-ellipsis overflow-y-visible whitespace-nowrap">
                {jsonData && jsonData.map((gridComponent, gridIndex) => (
                    <div key={gridIndex} className='w-full max-w-full min-h-[33%] grid relative' style={{ gridTemplateColumns: gridComponent.style.string }}>
                        {gridComponent.components.map((component, componentIndex) => {
                            return (
                                <div key={componentIndex}>
                                    {component.map((element, elementIndex) => {
                                        return (
                                            <div key={elementIndex} data-key={elementIndex} className='group w-full h-fit'>
                                                {element}
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

