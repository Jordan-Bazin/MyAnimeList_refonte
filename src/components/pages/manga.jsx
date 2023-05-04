import Container from '../container/Container';
import CarrouselPoster from '../container/carrouselposter/CarrouselPoster';

export default function Manga() {
    return (
        <div style={{paddingLeft : "16px", paddingRight : "16px"}}>  
            <CarrouselPoster />
            <Container type="manga"/>
        </div>
    );
}