import { useRightSideBarStore } from '../../store/rightSideBarStore.js'
import { motion } from "framer-motion";


export function ImgComponent({ id }) {
    const { setType, content, setContentIndex } = useRightSideBarStore(state => state);
    let contentIndex = content.findIndex(item => item.id === id);

    const handleClick = () => {
        setType('image')
        setContentIndex(contentIndex)
        console.log(id);
    }

    const styles = {
        border: `${content[contentIndex]?.border}px solid black`,
        borderRadius: `${content[contentIndex]?.radius}%`,
        width: `${content[contentIndex]?.width}px`,
        height: `${content[contentIndex]?.height}px`
    }
    return (

        <>
            <motion.div layoutId={id + 1} onClick={() => handleClick()} className={"min-h-12 items-center flex " +
                (content[contentIndex]?.align == 'left' ?
                    "justify-start" : content[contentIndex]?.align == 'center' ?
                        "justify-center" : content[contentIndex]?.align == 'right' ?
                            "justify-end" : "")}>
                <img className='size-52' alt="" style={styles} src={content[contentIndex]?.src} id="preview" />
            </motion.div>
        </>
    )
}
export default ImgComponent