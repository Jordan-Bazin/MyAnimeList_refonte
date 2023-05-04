import Container from '../container/Container';
import CarrouselPoster from '../carrouselposter/CarrouselPoster';

export default function Anime() {
    return (
        <div style={{paddingLeft : "16px", paddingRight : "16px"}}>  
            <CarrouselPoster />
            <Container type="anime"/>
        </div>
    );
}