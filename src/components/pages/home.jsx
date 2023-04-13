import Container from '../container/Container';
import CarrouselPoster from '../container/carrouselposter/CarrouselPoster';

export default function Home() {
    return (
        <div style={{paddingLeft : "16px", paddingRight : "16px"}}>  
            <CarrouselPoster />
            <Container />
        </div>
    );
}