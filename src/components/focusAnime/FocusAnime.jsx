import "./focusAnime.css";
import { useState, useEffect } from "react";
import { useCounter } from '@mantine/hooks';
import { ScrollArea, Button, Group, Rating } from '@mantine/core';
import EpisodesContainer from "./episodesContainer/EpisodesContainer";

export default function FocusAnime(props) {
    const [anime, setAnime] = useState({});
    const [loading, setLoading] = useState(false);
    const [scrapeLoading, setScrapeLoading] = useState(false);
    const [episodeData, setEpisodeData] = useState([]);
    const [episodes, setEpisodes] = useState(null);
    const [count, handlers] = useCounter(1, { min: 0, max: 50 });
    const [cptEpisodes, setCptEpisodes] = useState(1);
    const [hasLoaded, setHasLoaded] = useState(false);

    const addEpisodes = async () => {
        if (cptEpisodes + 5 < anime.episodes) {
            setCptEpisodes(cptEpisodes + 5);
            setScrapeLoading(false);
            fetch('http://localhost:5000/anime/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title: anime.title, id: anime.mal_id, cpt: cptEpisodes })
            })
                .then(response => response.json())
                .then(data => {
                    setEpisodeData((episodeData) => [...episodeData, ...data]);
                    setScrapeLoading(true);
                }
                )
                .catch(error => {
                    console.error(error);
                });
        }
    }

    useEffect(() => {
        fetch(`https://api.jikan.moe/v4/anime/${props.id}/full`)
            .then((response) => response.json())
            .then((data) => {
                setAnime(data.data);
                setLoading(true);
            });
    }, []);
  
    if (!scrapeLoading) {
        let res = fetch('http://localhost:5000/anime/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: anime.title, id: anime.mal_id, cpt: cptEpisodes })
        })
            .then(response => response.json())
            .then(data => {
                setEpisodeData(episodeData.concat(data));
                setScrapeLoading(true);
            })
            .catch(error => {
                console.error(error);
            });
    }

    let content = Array(count)
        .fill(0)
        .map((_, index) => <EpisodesContainer key={index} dataScrapped={episodeData} dataApi={anime} />);

    let img_src = "";
    let genre = "";
    let theme = "";
    let producer = "";
    try {
        img_src = anime.images.jpg.large_image_url;
        genre = anime.genres.map((genre) => genre.name).join(", ");
        theme = anime.themes.map((theme) => theme.name).join(", ");
        producer = anime.producers.map((producer) => producer.name).join(", ");
    }
    catch (e) {
        console.log(e);
    }
    console.log(anime);
    return (
        <div className="focusAnime">
            {
                loading ? (
                    <>
                        <div className="top">
                            <img className="poster" src={img_src} alt="image" />
                            <ScrollArea className="top__right" type="auto">
                                <div>
                                    <h1>{anime.title}</h1>
                                    <p><b>Synopsis :</b></p>
                                    <p className="focusAnime__synopsis">{anime.synopsis}</p>
                                    <br />
                                    <p><b>Genres</b> : {genre}</p>
                                    <p><b>Themes</b> : {theme}</p>
                                    <p><b>Producers</b> : {producer}</p>
                                    <p><b>Year</b> : {anime.year}</p>
                                </div>
                            </ScrollArea>
                        </div>
                        <div className="focusAnime__container">
                            {anime.episodes == 1 ? (     
                                    <div className="trailer">
                                        <iframe style={{ width: '100%', height: '100%' }}
                                            src={ anime.trailer.embed_url }
                                            allowFullScreen
                                        />
                                    </div>
                            ) : (
                                <>
                                    <div className="containerLeft">
                                        <h3>Episodes : </h3>
                                        <ScrollArea className="episodes" mx="auto">
                                            {content}
                                        </ScrollArea>
                                        <Group position="center" mt="md">
                                            <Button className="addEpisodes" onClick={addEpisodes}>
                                                Show More Episodes
                                            </Button>
                                        </Group>
                                    </div>
                                </>
                            )
                            }

                            <div className="containerRight">
                                <div className="buttonFocus">
                                    <Button className="">
                                        ADD TO WATCHLIST
                                    </Button>
                                    <Button className="">
                                        ADD TO A PLAYLIST
                                    </Button>
                                </div>
                                <div className="detailsContainer">
                                    <h3>Détails and stats</h3>
                                    <p><b>Episodes : </b>{anime.episodes}</p>
                                    <p><b>Duration : </b>{anime.duration}</p>
                                    <p><b>Status : </b>{anime.status}</p>
                                    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}><div className="separation"></div></div>
                                    <div style={{ display: "flex", flexDirection: "row" }}><p><b>Score : </b></p><Rating style={{ paddingTop: "8px", paddingLeft: "8px" }} value={anime.score / 2} fractions={8} title={anime.score / 2} size="md" readOnly /></div>
                                    <p><b>Ranked : </b>{anime.rank}</p>
                                    <p><b>Popularity : </b>{anime.popularity}</p>
                                    <p><b>Members : </b>{anime.members}</p>
                                    <p><b>Favorites : </b>{anime.favorites}</p>
                                </div>
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