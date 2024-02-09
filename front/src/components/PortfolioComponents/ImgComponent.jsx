import { useRightSideBarStore } from '../../store/rightSideBarStore.js'
import { useEffect } from 'react';

export function ImgComponent({ id }) {
    const { setType, content, setContent, setContentIndex, addContent } = useRightSideBarStore(state => state);
    let contentIndex = content.findIndex(item => item.id === id);

    useEffect(() => {
        addContent({ ...content, src: 'https://via.placeholder.com/150', border: '3', radius: '50', width: 250, height: 250, id: id });
    }, []);

    const handleClick = () => {
        setType('image')
        setContentIndex(contentIndex)
    }

    const styles = {
        border: `${content[contentIndex]?.border}px solid black`,
        borderRadius: `${content[contentIndex]?.radius}%`,
        width: `${content[contentIndex]?.width}px`,
        height: `${content[contentIndex]?.height}px`
    }
    return (

        <>
            <div className="min-h-12">
                <img onClick={() => handleClick()} className='size-52' alt="" style={styles} src={content[contentIndex]?.src} id="preview" />
            </div>
        </>
    )
}
export default ImgComponent