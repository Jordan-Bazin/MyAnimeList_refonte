import { ScrollArea } from "@mantine/core"
import "./episode.css"

export default function EpisodesContainer(props) {
    return (
        <div className="episode" key={props.index}>
            <img className="thumbnail" src={props.img_src} />
            <div className="episode__description">
                <h2 className="title">{props.title}</h2>
                <ScrollArea className="episodes__synopsis">
                    <p>{props.synopsis.substring(112)}</p>  { /* substring parce que my anime list a décidé de rajouter une ligne dans ses synopsis pour dire qu'ils sont dispo en dark theme ... */}
                </ScrollArea>
            </div>
        </div>
    )
}