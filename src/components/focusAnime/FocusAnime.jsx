import "./focusAnime.css";
import { useState, useEffect } from "react";
import { useCounter } from '@mantine/hooks';
import { ScrollArea, Button, Group } from '@mantine/core';
import EpisodesContainer from "./episodesContainer/EpisodesContainer";
//import request from 'request';


export default function FocusAnime(props) {
    const [anime, setAnime] = useState({});
    const [loading, setLoading] = useState(false);
    const [scrapeLoading, setScrapeLoading] = useState(false);
    const [episodeData, setEpisodeData] = useState(null);
    const [episodes, setEpisodes] = useState(null);
    const [count, handlers] = useCounter(1, { min: 0, max: 50 });
    const [cptEpisodes, setCptEpisodes] = useState(1);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        fetch(`https://api.jikan.moe/v4/anime/${props.id}/full`)
            .then((response) => response.json())
            .then((data) => {
                setAnime(data.data);
                setLoading(true);
            });
    }, []);

    //useEffect(() => {
    if(!scrapeLoading) {
    let res = fetch('http://localhost:5000/anime/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: anime.title, id: anime.mal_id, cpt: cptEpisodes })
        })
            .then(response => response.text())
            .then(data => {
                setEpisodeData(data);
                setScrapeLoading(true);
            })
            .catch(error => {
                console.error(error);
            });
    }

    //}, []);
    
    /*useEffect(() => {
        if (episodeData && !hasLoaded) {
            const createEpisodes = () => {
                let content = Array(count)
                  .fill(0)
                  .map((_, index) => <EpisodesContainer key={index} data={episodeData} />);
                return content;
            }

            setEpisodes(createEpisodes());
            setHasLoaded(true);
        }
    }, [episodeData, count, hasLoaded]);

    if(!scrapeLoading) {
        return <p>En plein scrappage bro</p>
    }*/

    let content = Array(count)
        .fill(0)
        .map((_, index) => <EpisodesContainer key={index} data={episodeData} />);

    let img_src = "";
    let trailer_src = "";
    let genre = "";
    let theme = "";
    let producer = "";
    try {
        img_src = anime.images.jpg.large_image_url;
        trailer_src = anime.trailer.embed_url + "&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1"
        genre = anime.genres.map((genre) => genre.name).join(", ");
        theme = anime.themes.map((theme) => theme.name).join(", ");
        producer = anime.producers.map((producer) => producer.name).join(", ");
    }
    catch (e) {
        console.log(e);
    }

    return (
        <div className="focusAnime">
            {
                loading ? (
                    <>
                        <div className="top">
                            <img className="image" src={img_src} alt="image" />
                            <ScrollArea className="top__right" type="auto">
                                <div>
                                    <h1>{anime.title}</h1>
                                    <p><b>Synopsis :</b></p>
                                    <p className="focusAnime__synopsis">{anime.synopsis}</p>
                                    <br />
                                    <p>
                                        <b>Genres</b> : {genre}
                                    </p>
                                    <p>
                                        <b>Themes</b> : {theme}
                                    </p>
                                    <p>
                                        <b>Producers</b> : {producer}
                                    </p>
                                    <p>
                                        <b>Episodes</b> : {anime.episodes}
                                    </p>
                                </div>
                            </ScrollArea>
                        </div>
                        <div className="focusAnime__container">
                            <div className="containerLeft">
                                <h3>Episodes :</h3>
                                <ScrollArea className="episodes" mx="auto">
                                    {content}
                                </ScrollArea>
                                <Group position="center" mt="md">
                                    <Button variant="outline" color="red" onClick={handlers.decrement}>
                                        Remove paragraph
                                    </Button>
                                    <Button variant="outline" onClick={handlers.increment}>
                                        Add paragraph
                                    </Button>
                                </Group>
                            </div>
                            <div className="containerRight">
                                <h3>Détails and stats</h3>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="focusAnime__loading">
                        <img src="./../../../public/logo.png" />
                    </div>
                )
            }
        </div>
    );
}