import { useState, useEffect } from 'react';


/*export default function EpisodesContainer(props) {
    const [scrapeLoading, setScrapeLoading] = useState(false);
    const [episodeData, setEpisodeData] = useState(null);
    let url = props.data;

    useEffect(() => {
        fetch('http://localhost:5000/anime/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(props.urls)
        })
            .then(response => response.text())
            .then(data => {
                setEpisodeData(data);
                setScrapeLoading(true);
            })
            .catch(error => {
                console.error(error);
            });
    }, [props.urls]);


    console.log(episodeData);
    content = Array(count)
        .fill(0)
        .map((_, index) => <Episode key={index} data={episodeData} />);

    return (
        <div>
            <img src={url} />
        </div>
    )
}*/

export default function EpisodesContainer(props) {
    if(props.data === null) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    }
    else {
    let url = props.data;
    console.log(url)
    url = url.replace('[', '')
    url = url.replace(']', '')
    url = url.replace(/"/g, '');
    
    let url_array = url.split(',')

    let urlTest = url_array[0].substring(0, url_array[0].length - 1)
    url_array.slice(0, 5);
    let content = url_array.map((url, index) => { 
    return (<div key={index}>
                <img src={url} />
            </div>
    ) 
})
  
    return (
        <div>
            {content}
        </div>
    )
    }
}