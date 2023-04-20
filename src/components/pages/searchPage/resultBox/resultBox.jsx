import { Button, ScrollArea } from '@mantine/core';
import "./resultBox.css";
import { Link } from 'react-router-dom';

export default function resultBox(props) {
    console.log(props.data);
    return (
        <Link to={`/focusAnime/${props.data.mal_id}`} style={{ textDecoration : "none" }}>
            <div className="resultBox">
                <div className='test'>
                    <img src={props.data.images.jpg.image_url} alt="poster" />
                    <div className="side">
                        <h1>{props.data.title}</h1>
                        <p>{props.data.synopsis}</p>
                    </div> 
                </div>   
                <Button size="lg">More info</Button>
            </div>
        </Link>
    );
}
