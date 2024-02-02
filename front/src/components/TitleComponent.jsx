import { useState, useEffect } from 'react'

export function TitleComponent({ componentData }) {


    return (

        <>
            <div className="w-2/3 min-h-28 border-2 border-transparent hover:border-2 hover:border-pink-500">
                <h1 className={"text-8xl font-inter text-pretty " + (componentData.bold ? 'font-bold ' : '') + (componentData.italic ? 'italic ' : '')}> {componentData.text} </h1>
            </div>
        </>
    )
}
export default TitleComponent