import { useState } from 'react';
import { TitleComponent } from "./PortfolioComponents/TitleComponent.jsx";
import { ImgComponent } from "./PortfolioComponents/ImgComponent.jsx";

export function CellComponent({ componentData }) {
    return (
        <>
            <div className='w-full min-h-24 h-fit bg-green-500'>
                {componentData}
            </div>
        </>
    )
}

export default CellComponent;