
import { TitleComponent } from "./TitleComponent.jsx";

export function PrototypePortfolio({ componentData }) {

    return (
        <>
            <div className="h-screen w-3/4 max-w-proses mx-20 bg-white shadow-lg p-8 overflow-hidden overflow-ellipsis whitespace-nowrap">
                <TitleComponent componentData={componentData} />
            </div>
        </>
    )
}

export default PrototypePortfolio;