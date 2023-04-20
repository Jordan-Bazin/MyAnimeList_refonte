import { useParams } from "react-router-dom";
import FocusManga from "./../focusManga/FocusManga";

export default function FocusMangaContainer() {
    let params = useParams();
    return (
        <div>
            <FocusManga id={params.id} />
        </div>
    )
}