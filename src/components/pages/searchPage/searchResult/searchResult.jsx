import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './searchResult.css';
import ResultBox from '../resultBox/resultBox';

export default function SearchResult() {
    const [ searchResult, setSearchResult ] = useState({});
    const [ loading, setLoading ] = useState(false);
    let result = "";
    let params = useParams();

    useEffect(() => {
        fetch(`https://api.jikan.moe/v4/anime?q=${params.searchInput}`) 
        //fetch(`https://api.jikan.moe/v4/anime?q=naruto`)
            .then((response) => response.json())
            .then((data) => {
                setSearchResult(data.data);
                setLoading(true);
            });    
    }, []);

    useEffect(() => {
        fetch(`https://api.jikan.moe/v4/manga?q=${params.searchInput}`)
            .then((response) => response.json())
            .then((data) => {
                setSearchResult(data.data);
                setLoading(true);
            });    
    }, []);
    
    if(loading) {
        result = searchResult.map((result, index) => {
            return (
                    <ResultBox data={result} />
            );
        });
    }


    return (
        <div className='searchResult'>
            <h1>Search results for : {params.searchInput}</h1>
            {loading ? 
                result : 
                <h1>Loading...</h1>}
        </div>
    );
}