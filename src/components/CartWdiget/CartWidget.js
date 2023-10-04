import cart from "./assets/carrito.png"


const CartWidget = () => {
    return (
        <div className="has-text-centered">
            <figure className="is-inline-block image is-32x32">
            <img src={cart} alt="cart-widget" />
            </figure>
            0
        </div>
    )
}

export default CartWidget;