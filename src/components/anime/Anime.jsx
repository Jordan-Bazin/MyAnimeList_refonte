import "./anime.css"

export default function AnimeInSection(props) {

    return (
        <div className="anime">
            <img className="image" src={props.data.images.jpg.image_url} alt="image" />
        </div>
    )
}