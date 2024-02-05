import { useState, useEffect } from 'react'

export function ImgComponent({ imgData, pos }) {

    const styles = {
        border: `${imgData.border}px solid ${imgData.color}`,
        borderRadius: `${imgData.radius}%`,
    }
    return (

        <>
            <div className="w-2/3 min-h-28">

                <img className='size-52' alt="" style={styles} src={imgData.src} id="preview" />
            </div>
        </>
    )
}
export default ImgComponent