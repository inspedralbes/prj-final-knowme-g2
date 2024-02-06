import { useRightSideBarStore } from '../../store/rightSideBarStore.js'
import { useEffect } from 'react';

export function ImgComponent() {
    const { setType, content, setContent } = useRightSideBarStore(state => state);

    useEffect(() => {
        content?.src == undefined ? setContent({ ...content, src: 'https://via.placeholder.com/150' }) : null
        content?.border == undefined ? setContent({ ...content, border: '3' }) : null
        content?.radius == undefined ? setContent({ ...content, radius: '50' }) : null
    });

    const styles = {
        border: `${content?.border}px solid black`,
        borderRadius: `${content?.radius}%`,
    }
    return (

        <>
            <div className="min-h-12">
                <img onClick={() => setType('image')} className='size-52' alt="" style={styles} src={content?.src} id="preview" />
            </div>
        </>
    )
}
export default ImgComponent