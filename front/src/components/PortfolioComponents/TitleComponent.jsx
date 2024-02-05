import { useState, useEffect } from 'react'

export function TitleComponent({ componentData, pos }) {

    const styles = {
        left: `${pos[0]}px`,
        top: `${pos[1]}px`,
    }
    return (
        <>
            <div className="w-2/3 h-40">
                <h1 style={styles} className={" h-fit text-8xl font-inter text-pretty absolute"  + (componentData.bold ? 'font-bold ' : '') + (componentData.italic ? 'italic ' : '')}> {componentData.text} </h1>
            </div>
        </>
    )
}
export default TitleComponent