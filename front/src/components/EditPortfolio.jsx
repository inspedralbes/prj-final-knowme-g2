import { PrototypePortfolio } from './PrototypePortfolio.jsx';
import { RightSideBar } from './RightSideBar.jsx'
import { DragDropContext } from 'react-beautiful-dnd';

export function EditPortfolio() {
    return (
        <DragDropContext>
            <PrototypePortfolio />
            <RightSideBar />
        </DragDropContext>
    )
}
export default EditPortfolio