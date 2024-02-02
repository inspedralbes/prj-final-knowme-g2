import { useState, useEffect } from 'react'

export function ImgComponent({ imgData }) {

    const styles = {
        border: `${imgData.border}px solid ${imgData.color}`,
        borderRadius: `${imgData.radius}px`
    }
    return (

        <>
            <div className="w-2/3 min-h-28 border-2 border-transparent hover:border-2 hover:border-pink-500">

                <img alt="" style={styles} src={imgData.src} id="preview" />
            </div>
        </>
    )
}
export default ImgComponent