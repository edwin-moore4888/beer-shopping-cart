import { Button, Card } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"

type BeerItemProps = {
    id: number,
    name: string, 
    price: number,
    image: string,
}

export default function BeerItem({ id, name, price, image }: BeerItemProps) {
    const { 
        getBeerQuantity,
        increaseQuantity, 
        decreaseQuantity, 
        removeFromCart  
        } = useShoppingCart()

    const quantity = getBeerQuantity(id)
    return ( 
    <Card className="h-100">
        <Card.Img 
            variant="top" 
            src={image} 
            height="200px" 
            style={{objectFit: 'scale-down'}} />
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex
            justify-content-between align-items-baseline 
            mb-4">
                <span className="fs-2">{name}</span>
                <span className="ms-2 text-muted">{price}kc</span>
            </Card.Title>
            <div className="mt-auto">
                {quantity === 0 ? (
                    <Button className="w-100" onClick={() => increaseQuantity(id)}>Add To Cart</Button>
                ) : <div className="d-flex 
                        align-items-center justify-content-between" 
                        style={{gap: ".5rem"}}>
                            <Button onClick={() => removeFromCart(id)}>Remove</Button>
                        <div className="d-flex 
                            align-items-center 
                            justify-content-center" 
                            style={{gap: ".5rem"}}>
                                <Button onClick={() => decreaseQuantity(id)}>-</Button>
                                <div><span className="fs-4">{quantity}</span> In Cart</div>
                                <Button onClick={() => increaseQuantity(id)}>+</Button>
                        </div>

                    </div>
                }
            </div>
        </Card.Body>

    </Card>
    )
}