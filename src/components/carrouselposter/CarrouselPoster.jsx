import "./CarrouselPoster.css";
import { createStyles } from '@mantine/core';
import { useState, useEffect } from "react";
import { Carousel } from '@mantine/carousel';
import Poster from "./Poster";

const useStyles = createStyles((theme, _params, getRef) => {
    return {
      controls: {
        ref: getRef('controls'),
        transition: 'opacity 150ms ease',
        opacity: 0,
      },
    
      root: {
        '&:hover': {
          [`& .${getRef('controls')}`]: {
            opacity: 1,
          },
        },
      },
    };
  });

export default function CarrouselPoster(props) {
    const { classes, cx } = useStyles();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch("https://api.jikan.moe/v4/anime")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPosts(data["data"]);
                setLoading(true); /* On modifie la valeur à la fin du fetch */
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    let anime = posts.map((post, index) => {
        return (
            <Poster key={index} data={post}/>
        )
    });

    return (
        <div className="carrouselPoster">
            <Carousel
                style={{borderBottom : "5px solid", borderColor: "lightgray"}}
                classNames={classes}
                mh="auto"
                mx="auto"
                withIndicators
                loop="true"
                styles={{
                    indicator: {
                        backgroundColor: "#608DB0",
                        border: "1px solid lightgray",
                        width: 16,
                        height: 6,
                        transition: 'width 250ms ease',
                        '&[data-active]': {
                            width: 40,
                        },
                    },
                }}
            >
                {anime.slice(0, 5)}
            </Carousel>
        </div>
    )
}