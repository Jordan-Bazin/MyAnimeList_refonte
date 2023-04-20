import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './searchResult.css';
import ResultBox from '../resultBox/resultBox';

export default function SearchResult() {
    const [ searchAnime, setSearchAnime ] = useState({});
    const [ searchManga, setSearchManga ] = useState({});
    const [ loadingAnime, setLoadingAnime ] = useState(false);
    const [ loadingManga, setLoadingManga ] = useState(false);
    let resultAnime = "";
    let resultManga = "";
    let result;
    let params = useParams();

    useEffect(() => {
        fetch(`https://api.jikan.moe/v4/anime?q=${params.searchInput}`) 
        //fetch(`https://api.jikan.moe/v4/anime?q=naruto`)
            .then((response) => response.json())
            .then((data) => {
                setSearchAnime(data.data);
                setLoadingAnime(true);
            });    
    }, []);

    useEffect(() => {
        fetch(`https://api.jikan.moe/v4/manga?q=${params.searchInput}`)
            .then((response) => response.json())
            .then((data) => {
                setSearchManga(data.data);
                setLoadingManga(true);
            });    
    }, []);
    
    if(loadingAnime & loadingManga) {
        resultAnime = searchAnime.map((result, index) => {
            return (
                    <ResultBox data={result} />
            );
        });
        resultManga = searchManga.map((result, index) => {
            return (
                    <ResultBox data={result} />
            );
        });
    }
    result = resultAnime.concat(resultManga);

    return (
        <div className='searchResult'>
            <h1>Search results for : {params.searchInput}</h1>
            {loadingAnime & loadingManga ? 
                result : 
                <h1>Loading...</h1>}
        </div>
    );
}