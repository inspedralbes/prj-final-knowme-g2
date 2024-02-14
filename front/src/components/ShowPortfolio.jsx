export function ShowPortfolio({ jsonData}) {
    return (
        <>
            <div className="h-screen w-5/6 max-w-proses mx-20 bg-white shadow-lg p-8 overflow-hidden overflow-ellipsis overflow-y-visible whitespace-nowrap">
                <h2>URL: {jsonData.domini.webURL}, el teu id_user: {jsonData.domini.id_user}, l'id del portfoli és: {jsonData.domini.id}!</h2>
                <div>El teu contingut en string és: {jsonData.domini.content}</div>
            </div>
        </>
    )
}

