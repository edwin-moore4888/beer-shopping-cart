import { Col, Row } from 'react-bootstrap'
import BeerItem from '../components/BeerItem';
import beerItems from '../data/items.json'
import image from '/images/beer-background3.jpg'


export function Store() {
    console.log(beerItems);
    return (
    <div style={{ backgroundImage:`url(${image})`,
     backgroundRepeat: 'no-repeat',
     backgroundSize: 'cover',
     minHeight: '100vh'  }}>
        <h1 style={{ color: 'white', textAlign: 'center'}}>Store</h1>
            <Row md={2} xs={1} lg={3} className="g-3">
                {beerItems.map(item => (

                    
                <Col key={item.id}><BeerItem {...item}/></Col>

                ))}
            </Row>
        </div>
    )
}