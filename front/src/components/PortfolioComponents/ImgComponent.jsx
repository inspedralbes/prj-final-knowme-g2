import { useRightSideBarStore } from '../../store/rightSideBarStore.js'


export function ImgComponent() {
    const { setType, content, setContent } = useRightSideBarStore(state => state);
    
    content?.src == undefined ? setContent({ ...content, src: 'https://via.placeholder.com/150' }) : null
    content?.border == undefined ? setContent({ ...content, border: '3' }) : null
    content?.radius == undefined ? setContent({ ...content, radius: '50' }) : null
    content?.width == undefined ? setContent({ ...content, width: '250' }) : null
    content?.height == undefined ? setContent({ ...content, height: '250' }) : null

    const styles = {
        border: `${content?.border}px solid black`,
        borderRadius: `${content?.radius}%`,
        width: `${content?.width}px`,
        height: `${content?.height}px`
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