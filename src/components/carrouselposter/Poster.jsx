import "./poster.css"
import { Button, Text, Image, Rating, Group } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

export default function Poster(props) {

    if (props.data.synopsis.indexOf("[") !== -1) { // pour supprimer quand ya écrit [Written by MAL Rewrite] dans le synopsis
        props.data.synopsis = props.data.synopsis.substring(0, props.data.synopsis.indexOf("["));
    }

    return (
        <>
            <Carousel.Slide className="slide">
                <div>
                    <Image className="poster"
                        height={370}
                        width={250}
                        radius="md"
                        src={props.data.images.jpg.large_image_url}
                    />
                </div>
                <div className="infoSlide">
                    <Text fz={25} fw={700} className="titre">
                        {props.data.title}
                    </Text>
                    <Text fz={10} className="synopsis">
                        <h3>Synopsis :</h3>
                        {props.data.synopsis}
                    </Text>
                </div>
                <div className="statSlide">
                    <Group className="rating">
                        <Text fz={15} fw={700}>
                            <h3>Rating :</h3>
                        </Text>
                        <Rating value={props.data.score / 2} fractions={8} title={props.data.score / 2} size="lg" readOnly />
                    </Group>
                    <div className="button">
                        <Button className="buttonMoreInfo" variant="gradient" gradient={{ from: '#CD3D10', to: '#E3AA63', deg: 90 }} size="lg">MORE INFO</Button>
                        <Button className="buttonAddWatchList" variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} size="lg">ADD TO WATCH LIST</Button>
                    </div>
                </div>
            </Carousel.Slide>
        </>

    )
}