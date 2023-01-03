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
    handleIncreaseQty = (product) =>{
        console.log("Incresse called", product)
        const { products } = this.state;
        const index = products.indexOf(product);
        
            products[index].qty += 1;
        
        this.setState({
            products : products
        })
    }

    handleDecreaseQty = (product) => {
        console.log("decrese qty called", product);
        const { products } = this.state;
        const index = products.indexOf(product);
        if(products[index].qty > 0){
            products[index].qty -= 1;
        }
        this.setState({
            products : products
        })
    }

    render(){
        const {products} = this.state;
        return(
            <div className='cart'>
                {
                products.map((product)=>{
                    return <CartItem 
                        product={product}
                        onIncreaseQty = {this.handleIncreaseQty}
                        onDecreaseQty = {this.handleDecreaseQty}
                    />
                    console.log("jnv", product)
                })
                }
                
            </div>
        )
    }
}

export default Cart;