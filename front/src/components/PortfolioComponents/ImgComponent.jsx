import { useState, useEffect } from 'react'

export function ImgComponent({ imgData, pos }) {

    const styles = {
        border: `${imgData.border}px solid ${imgData.color}`,
        borderRadius: `${imgData.radius}px`,
        position: 'absolute',
        top: `${pos[1]}px`,
        left: `${pos[0]}px`,
    }
    return (

        <>
            <div className="w-2/3 min-h-28">

                <img alt="" style={styles} src={imgData.src} id="preview" />
            </div>
        </>
    )
}
export default ImgComponent