import { Carousel } from '@mantine/carousel';
import { useState, useEffect } from "react";
import Anime from "../anime/Anime";

export default function Section(props) {

    let anime = props.data.map((post, index) => {
        return (
            <div key={index + 2}>
                <Carousel.Slide key={index}>
                    <Anime key={index + 1} data={post} />
                </Carousel.Slide>
            </div>
        )
    });

    return (
        <>
            {anime}
        </>

    )
}
