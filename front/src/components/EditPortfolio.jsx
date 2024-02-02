import { useState, useEffect } from 'react'
import { PrototypePortfolio } from './PrototypePortfolio.jsx';
import { RightSideBar } from './RightSideBar.jsx'

export function EditPortfolio() {
    let [componentData, setComponentData] = useState({
        text: 'Hi, I\'m Loris Crisafo Norte',
        bold: true,
        italic: false,
    });

    return (
        <>
            <PrototypePortfolio componentData={componentData} />
            <RightSideBar componentData={componentData} setComponentData={setComponentData} />
        </>
    )
}
export default EditPortfolio