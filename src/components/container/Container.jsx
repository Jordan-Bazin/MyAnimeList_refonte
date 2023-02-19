import './container.css'
import Anime from "../anime/Anime";
import { Carousel } from '@mantine/carousel';
import { createStyles } from '@mantine/core';
import { useState, useEffect } from "react";
import Section from './Section';

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
  const { classes, cx } = useStyles();

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/anime")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data["data"]);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  let anime = posts.map((post, index) => {
    return (
      <Anime key={index} data={post} />
    )
  });


  let listSections = ["Trending", "Popular", "Upcoming", "Top"];
  let sections = listSections.map((section, index) => {
    let anime = posts.map((post, index) => {
      return (
        <Carousel.Slide style={{width : 180}}>
          <Anime key={index} data={post} />
        </Carousel.Slide>
      )
    })

    return (
      <div className='listSection'>
        <h3>{section}</h3>
        <Carousel
          slideSize="10%"
          withIndicators
          height={230}
          slideGap="md"
          loop
          align="start"
          slidesToScroll={5}
          styles={{
            indicator: {
                backgroundColor: "#608DB0",
                width: 16,
                height: 6,
                border: "1px solid lightgray",
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
      {sections}
    </div>
  )
}