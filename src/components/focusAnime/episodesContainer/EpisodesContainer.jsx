import { useState, useEffect } from 'react';
import Episode from './../episode/Episode';
import "./episodeContainer.css";

export default function EpisodesContainer(props) {
    if (props.data === null) {
        return (
            <div>
                <p>Rien à afficher</p>
            </div>
        )
    }
    else {
        let url = props.dataScrapped;
        if (props.dataApi.episodes < 5) {
            url = url.slice(0, props.dataApi.episodes);
        }
        console.log(url);
        let content = url.map((url, index) => {
            if (url[0] == undefined || url[0] == "https://cdn.myanimelist.net/images/episodes/videos/icon_crunchyroll_small_orange.png") {
                let img_src = "";
                try {
                    img_src = props.dataApi.images.jpg.image_url;
                }
                catch (e) {
                    console.log(e);
                }
                return ( <Episode key={index} img_src={img_src} title={url[1]} synopsis={url[2]}/> )
            }
            else {
                return ( <Episode key={index} img_src={url[0]} title={url[1]} synopsis={url[2]}/>)
            }
        })

        return (
            <div className="episodesContainer">
                {content}
            </div>
        )
    }
}