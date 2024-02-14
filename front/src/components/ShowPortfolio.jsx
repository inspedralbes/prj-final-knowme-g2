import TitleComponent from "./PortfolioComponents/TitleComponent";
import { useRightSideBarStore } from '../store/rightSideBarStore.js'
import { useEffect } from "react";
import ImgComponent from "./PortfolioComponents/ImgComponent.jsx";


export function ShowPortfolio({ jsonData }) {
    const { content, setContent } = useRightSideBarStore(state => state);


    useEffect(() => {
        jsonData.forEach((gridComponent) => {
            gridComponent.components.forEach((component) => {
                component.forEach((element, elementIndex) => {
                    if (element.id) {
                        let contentIndex = content.findIndex(item => item.id === element.id);
                        if (contentIndex === -1) {
                            
                            setContent( element );
                        }
                    }
                });
            });
        });
    }, []);

    return (
        <>
            <div className="h-screen w-screen bg-white max-w-proses p-20 overflow-hidden overflow-ellipsis overflow-y-visible whitespace-nowrap">
                {jsonData && jsonData.map((gridComponent, gridIndex) => (
                    <div key={gridIndex} className='w-full max-w-full min-h-[33%] grid relative' style={{ gridTemplateColumns: gridComponent.style.string }}>
                        {gridComponent.components.map((component, componentIndex) => {
                            return (
                                <div key={componentIndex}>
                                    {component.map((element, elementIndex) => {
                                        if (element.type == 'TitleComponent') {
                                            return (
                                                <div key={elementIndex} data-key={elementIndex} className='group w-full h-fit'>
                                                    <TitleComponent id={element.id} />
                                                </div>
                                            )
                                        }else if (element.type == 'ImageComponent'){
                                            return (
                                                <div key={elementIndex} data-key={elementIndex} className='group w-full h-fit'>
                                                    <ImgComponent id={element.id} />
                                                </div>
                                            )
                                        }
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

