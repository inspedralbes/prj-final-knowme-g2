import { useRightSideBarStore } from '@/store/rightSideBarStore.js'
import { motion } from "framer-motion";


export function TitleComponent({ id }) {
    const { setType, content, setContentIndex } = useRightSideBarStore(state => state);
    let contentIndex = content.findIndex(item => item.id === id);
    const handleClick = () => {
        setContentIndex(contentIndex)
        setType('text');
        try {
            document.getElementById('editText').select();
        } catch (error) { }
    }

    return (
        <>
            <motion.div layoutId={contentIndex + 1} key={contentIndex + 1} onClick={() => handleClick()} className={"min-h-12 " +
                (content[contentIndex]?.align == 'left' ?
                    "text-left mr-auto" : content[contentIndex]?.align == 'center' ?
                        "text-center m-auto" : content[contentIndex]?.align == 'right' ?
                            "text-right ml-auto" : "")}>
                <h1 className={(content[contentIndex]?.size == 2 ? "text-4xl" : content[contentIndex]?.size == 1 ? "text-6xl" : "text-8xl") + " transition-all duration-75 font-inter text-pretty hover:cursor-text " + (content[contentIndex]?.bold ? 'font-bold ' : '') + (content[contentIndex]?.italic ? 'italic ' : '')}> {content[contentIndex]?.text} </h1>
            </motion.div>
        </>
    )
}
export default TitleComponent