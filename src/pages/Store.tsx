import { Col, Row } from 'react-bootstrap'
import BeerItem from '../components/BeerItem';
import beerItems from '../data/items.json'


export function Store() {
    console.log(beerItems);
    return (
    <>
        <h1>Store</h1>
            <Row md={2} xs={1} lg={3} className="g-3">
                {beerItems.map(item => (

                    
                <Col key={item.id}><BeerItem {...item}/></Col>

                ))}
            </Row>
        </>
    )
}