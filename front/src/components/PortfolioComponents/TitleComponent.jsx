import { useRightSideBarStore } from '../../store/rightSideBarStore.js'

export function TitleComponent({ id }) {
    const { setType, content, setContentIndex } = useRightSideBarStore(state => state);

    const handleClick = () => {
        setContentIndex(id)
        setType('text');
        try {
            document.getElementById('editText').select();
        } catch (error) { }
    }

    return (
        <>
            <div onClick={() => handleClick()} className={"w-2/3 min-w-96 min-h-12 " +
                (content[id]?.align == 'left' ?
                    "text-left mr-auto" : content[id]?.align == 'center' ?
                        "text-center m-auto" : content[id]?.align == 'right' ?
                            "text-right ml-auto" : "")}>
                <h1 className={"text-8xl transition-all duration-75 font-inter text-pretty hover:cursor-text " + (content[id]?.bold ? 'font-bold ' : '') + (content[id]?.italic ? 'italic ' : '')}> {content[id]?.text} </h1>
            </div>
        </>
    )
}
export default TitleComponent