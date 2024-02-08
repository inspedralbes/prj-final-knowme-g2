import React, { useState } from 'react';

export function Share() {
    const [link, setLink] = useState('');

    

    return (
        <>
            <h2>Publicar</h2>
            <label htmlFor="link">Com vols que es vegi el teu portfolio? Exemple knowme.cat/loris-crisafo</label>
            <input className=" text-black" type="text" id="link"  placeholder='loris-crisafo' onInput={(e) => setLink(e.target.value)} />
            <h2>Tu link</h2>
            <p>knowme.cat/{link}</p>
            <button>Share</button>
        </>
    )
}

export default Share;