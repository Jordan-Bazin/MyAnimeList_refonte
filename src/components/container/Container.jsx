import './container.css'
import AnimeInSection from "./animeInSection/AnimeInSection";
import { Carousel } from '@mantine/carousel';
import { createStyles } from '@mantine/core';
import { useState, useEffect } from "react";

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

export default function Container() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postsManga, setPostsManga] = useState([]);
  const { classes, cx } = useStyles();

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/anime")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data["data"]);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  let listSections = ["Trending", "Popular", "Upcoming", "Top"];
  let sections = listSections.map((section, index) => {
    let anime = posts.map((post, index) => {
      return (
        <Carousel.Slide key={index} style={{width : 180}}>
          <AnimeInSection data={post} />
        </Carousel.Slide>
      )
    })

    return (
      <div className='listSection' key={index}>
        <h3>{section}</h3>
        <Carousel
          className='animeList'
          slideSize="10%"
          withIndicators
          height={260}
          slideGap="md"
          loop
          align="start"
          slidesToScroll={5}
          styles={{
            indicator: {
                backgroundColor: "#608DB0",
                width: 16,
                height: 6,
                border: "1px solid white",
                transition: 'width 250ms ease',
                '&[data-active]': {
                    width: 40,
                },
            },
        }}
        >
            {anime}
        </Carousel>
      </div>
    )
  })

  return (
    <div className="container">
      {loading ? sections : (
        <div className="focusAnime__loading">
        <img src="./../../../public/logo.png" />
      </div> )}
    </div>
  )
}