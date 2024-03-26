import React, {useState} from "react";
import Button from "../Button/Button";
import { useTelegram } from "../hooks/useTelegtam";
import './Header.css'
import { FaCartPlus } from "react-icons/fa6";
import Order from "../Order";

const getTotalPrice = (products = []) => {
    return products.reduce((acc, item) => {
        return acc += item.price
  
    }, 0)
  }


const showOrders = (props) => {
    const totalPrice = getTotalPrice(props.orders);
    return (
        <div>
            {props.orders.map(el => (
                <Order  onDelete={props.onDelete} key={el.id} item={el}/>
            ))}
            <Button className="baton" onClick={() => buyItems(props.orders, totalPrice)}>Купить за {totalPrice}₽</Button>
        </div>
    )
}

const showNothing = () => {
    return (<div className="empty"> <p>Здесь пока пусто...</p> </div>)
}



export default function Header(props) {

    let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
        
        <div>
            <FaCartPlus onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>

            {cartOpen && (
                <div className="shop-cart">
                    {props.orders.length > 0 ? showOrders(props): showNothing()}
                </div>
            )}
        </div>
        
    </header>
  )
}


/* const Header = () => {
    const {user, onClose} = useTelegram();

    retorn (
        <div className={'header'}>
            <Button onClick={onClose} >Уйти</Button>
            <span className={'username'}>
                {user?.username}
            </span>

        </div>
    );
};

export default Header; */