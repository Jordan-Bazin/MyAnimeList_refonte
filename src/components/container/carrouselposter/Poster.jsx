import "./poster.css"
import { Button, Text, Image, Rating, Group, ScrollArea } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { Link } from "react-router-dom";

export default function Poster(props) {

    if (props.data.synopsis.indexOf("[") !== -1) { // pour supprimer quand ya écrit [Written by MAL Rewrite] dans le synopsis
        props.data.synopsis = props.data.synopsis.substring(0, props.data.synopsis.indexOf("["));
    }

    return (
            <Carousel.Slide className="slide">
                <div className="posterContainer">
                    <Link to={`/focusAnime/${props.data.mal_id}`}><img className="poster"src={props.data.images.jpg.large_image_url}/></Link>
                </div>
                <div className="infoSlide">
                    <Text className="titre__poster">
                        {props.data.title}
                    </Text>
                    <h3>Synopsis :</h3>
                    <ScrollArea className="synopsis">
                        <p>{props.data.synopsis}</p>
                    </ScrollArea>
                </div>
                <div className="statSlide">
                    <Group className="rating">
                        <Text fz={15} fw={700}>
                            <h3>Rating :</h3>
                        </Text>
                        <Rating value={props.data.score / 2} fractions={8} title={props.data.score / 2} size="lg" readOnly />
                    </Group>
                    <div className="button">
                        <Link className="link" to={`/focusAnime/${props.data.mal_id}`}><Button variant="gradient" gradient={{ from: '#CD3D10', to: '#E3AA63', deg: 90 }} size="lg">MORE INFO</Button></Link>
                        <Link className="link" to={`/focusAnime/${props.data.mal_id}`}><Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} size="lg">ADD TO WATCH LIST</Button></Link>
                    </div>
                </div>
            </Carousel.Slide>
    )
}