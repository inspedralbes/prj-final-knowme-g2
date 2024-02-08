import { useRightSideBarStore } from '../../store/rightSideBarStore.js'
import { useEffect } from 'react';

export function TitleComponent({ id }) {
    const { setType, content, setContent } = useRightSideBarStore(state => state);

    const handleClick = () => {
        setType('text');
        try {
            document.getElementById('editText').select();
        } catch (error) {

        }

    }

    useEffect(() => {
        console.log(id.toString());

        content?.text == null ? setContent({ ...content, text: 'Hey, I\'m Loris Crisafo Norte', bold: true }) : null;
    }, []);

    return (
        <>
            <div onClick={() => handleClick()} className="w-full min-h-12">
                <h1 className={"text-8xl font-inter text-pretty hover:cursor-text " + (content?.bold ? 'font-bold ' : '') + (content?.italic ? 'italic ' : '')}> {content?.text} </h1>
            </div>
        </>
    )
}
export default TitleComponent