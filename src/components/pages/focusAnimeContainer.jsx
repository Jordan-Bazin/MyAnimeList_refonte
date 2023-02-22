import { useParams } from "react-router-dom";
import FocusAnime from "./../focusAnime/FocusAnime";

export default function FocusAnimeContainer() {
    let params = useParams();
    return (
        <div>
            <FocusAnime id={params.id} />
        </div>
    )
}