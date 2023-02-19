import "./anime.css"

export default function Anime(props) {

    return (
        <div className="anime">
            <img className="image" src={props.data.images.jpg.image_url} alt="image" />
        </div>
    )
}