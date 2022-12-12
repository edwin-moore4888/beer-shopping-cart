import { Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import beerItems from "../data/items.json"

type ShoppingCartProps = {
    isOpen: boolean
}
export function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart()
    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <OffcanvasHeader closeButton>
                <OffcanvasTitle>Cart</OffcanvasTitle>
            </OffcanvasHeader>
            <OffcanvasBody>
                <Stack gap={3}>
                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item}/>
                        
                    ))}
                    <div className="ms-auto fw-bold fs-5">
                        Total: {cartItems.reduce((total, cartItem) => {
                            const item = beerItems.find(i => i.id === cartItem.id)
                            return total + (item?.price || 0)* cartItem.quantity
                        }, 0)}kc
                    </div>
                </Stack>
            </OffcanvasBody>
        </Offcanvas>
    )
}