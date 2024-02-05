import { useRightSideBarStore } from '../../store/rightSideBarStore.js'

export function TitleComponent() {
    const { setType, content, setContent } = useRightSideBarStore(state => state);

    content == null ? setContent({ ...content, text: 'Hey, I\'m Loris Crisafo Norte', bold: true }) : null;

    const handleClick = () => {
        setType('text'); 
    }

    return (
        <>
            <div onClick={() => { handleClick() }} className="w-2/3 min-h-12">
                <h1 className={"text-8xl font-inter text-pretty " + (content?.bold ? 'font-bold ' : '') + (content?.italic ? 'italic ' : '')}> {content?.text} </h1>
            </div>
        </>
    )
}
export default TitleComponent