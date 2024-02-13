export function CellComponent({ componentData }) {
    return (
        <>
            <div className='w-full min-h-24 h-fit bg-green-500 border-2 hover:border-pink-500'>
                {componentData}
            </div>
        </>
    )
}

export default CellComponent;