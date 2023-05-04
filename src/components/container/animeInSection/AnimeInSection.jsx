import "./animeInSection.css"
import { Link } from "react-router-dom";

export default function AnimeInSection(props) {
    return (
        <div className="anime">
            {
                props.type == "anime" ? (
                    <Link to={`/focusAnime/${props.data.mal_id}`}>
                        <img className="image" src={props.data.images.jpg.image_url} alt="anime image" />
                    </Link>
                ) : (
                    <Link to={`/focusManga/${props.data.mal_id}`}>
                        <img className="image" src={props.data.images.jpg.image_url} alt="anime image" />
                    </Link>
                )
            }
        </div>
    )
}