import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor (){
        super();
        this.state = {
            products : [
                {
                    price : 999,
                    title:"watch",
                    qty : 1,
                    img:''
                },
                {
                    price: 999,
                    title: "Mobile Phone",
                    qty: 1,
                    img: ''
                },
                {
                    price: 999,
                    title: "Ear Phone",
                    qty: 1,
                    img: ''
                },
            ]
        }
    }
    render(){
        return(
            <div className='cart'>
                <CartItem qty = {1} price={99} title = {"Titan Watch"} img = {''} />
                {/* <CartItem />
                <CartItem /> */}

            </div>
        )
    }
}

export default Cart;