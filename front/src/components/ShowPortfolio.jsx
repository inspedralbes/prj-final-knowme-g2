export function ShowPortfolio({ jsonData}) {
    return (
        <>
            <div className="h-screen w-5/6 max-w-proses mx-20 bg-white shadow-lg p-8 overflow-hidden overflow-ellipsis overflow-y-visible whitespace-nowrap">
                {jsonData.attributes.example} {jsonData.attributes.proba}, you are number {jsonData.id}!
            </div>
        </>
    )
}

