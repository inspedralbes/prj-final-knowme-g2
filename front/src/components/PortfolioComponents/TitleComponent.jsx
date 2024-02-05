import { useState, useEffect } from 'react'

export function TitleComponent({ componentData, pos }) {

    const styles = {
        border: `${imgData.border}px solid ${imgData.color}`,
        borderRadius: `${imgData.radius}px`,
        absolute,
        top: `${pos[1]}px`,
        left: `${pos[0]}px`,
    }
    return (
        <>
            <div className="w-2/3">
                <h1 className={"text-8xl font-inter text-pretty absolute"  + (componentData.bold ? 'font-bold ' : '') + (componentData.italic ? 'italic ' : '')}> {componentData.text} </h1>
            </div>
        </>
    )
}
export default TitleComponent