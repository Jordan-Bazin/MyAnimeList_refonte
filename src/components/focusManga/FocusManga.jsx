import { useState, useEffect } from "react";
import { ScrollArea, Button, Group, Rating } from '@mantine/core';

export default function FocusManga(props) {
    const [manga, setManga] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch(`https://api.jikan.moe/v4/manga/${props.id}/full`)
            .then((response) => response.json())
            .then((data) => {
                setManga(data.data);
                setLoading(true);
            });
    }, []);

    let img_src = "";
    let genre = "";
    let theme = "";
    let producer = "";
    try {
        img_src = manga.images.jpg.large_image_url;
        genre = manga.genres.map((genre) => genre.name).join(", ");
        theme = manga.themes.map((theme) => theme.name).join(", ");
        producer = manga.producers.map((producer) => producer.name).join(", ");
    } catch (e) {
        console.log(e);
    }

    return (
        <div className="focus">
            {loading ? (
                <>
                    <div className="top">
                        <img className="poster" src={img_src} alt="image" />
                        <ScrollArea className="top__right" type="auto">
                            <div>
                                <h1>{manga.title}</h1>
                                <p><b>Synopsis :</b></p>
                                <p className="focusAnime__synopsis">{manga.synopsis}</p>
                                <br />
                                <p><b>Genres</b> : {genre}</p>
                                <p><b>Themes</b> : {theme}</p>
                                <p><b>Producers</b> : {producer}</p>
                                <p><b>Year</b> : {manga.year}</p>
                            </div>
                        </ScrollArea>
                    </div>
                    <div className="focusAnime__container">
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
                                <p><b>Volumes : </b>{manga.volumes}</p>
                                <p><b>Status : </b>{manga.status}</p>
                                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}><div className="separation"></div></div>
                                <div style={{ display: "flex", flexDirection: "row" }}><p><b>Score : </b></p><Rating style={{ paddingTop: "8px", paddingLeft: "8px" }} value={manga.score / 2} fractions={8} title={manga.score / 2} size="md" readOnly /></div>
                                <p><b>Ranked : </b>{manga.rank}</p>
                                <p><b>Popularity : </b>{manga.popularity}</p>
                                <p><b>Members : </b>{manga.members}</p>
                                <p><b>Favorites : </b>{manga.favorites}</p>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="focusAnime__loading">
                    <img src="./../../../public/logo.png" />
                </div>
            )}
        </div>
    );
}