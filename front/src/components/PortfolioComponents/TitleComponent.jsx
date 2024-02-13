import { useRightSideBarStore } from '../../store/rightSideBarStore.js'
import { useEffect } from 'react';

export function TitleComponent({ id }) {
    const { setType, content, addContent, setContentIndex } = useRightSideBarStore(state => state);
    let contentIndex = content.findIndex(item => item.id === id);
    const handleClick = () => {
        setContentIndex(contentIndex)
        setType('text');
        try {
            document.getElementById('editText').select();
        } catch (error) {}
    }

    useEffect(() => {
        addContent({ ...content, text: 'Hey, I\'m Loris Crisafo Norte', bold: true, id: id, align: 'left'});
    }, []);

    return (
        <>
            <div onClick={() => handleClick()} className={"w-2/3 min-w-96 min-h-12 " + (content[contentIndex]?.align == 'left' ? "text-left mr-auto" : content[contentIndex]?.align == 'center' ? "text-center m-auto" : "text-right ml-auto")}>
                <h1 className={"text-8xl transition-all duration-75 font-inter text-pretty hover:cursor-text " + (content[contentIndex]?.bold ? 'font-bold ' : '') + (content[contentIndex]?.italic ? 'italic ' : '')}> {content[contentIndex]?.text} </h1>
            </div>
        </>
    )
}
export default TitleComponent