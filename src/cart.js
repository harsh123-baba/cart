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
                    img:'',
                    id:1
                },
                {
                    price: 999,
                    title: "Mobile Phone",
                    qty: 1,
                    img: '',
                    id: 2
                },
                {
                    price: 999,
                    title: "Ear Phone",
                    qty: 1,
                    img: '',
                    id: 3
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
    
    handleDelete = (productId) => {
        console.log("called delete");
        const {products} = this.state;
        const items = products.filter((item)=> item.id !== productId)
        this.setState ({
            products:items
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
                        onDelete = {this.handleDelete}
                    />
                    console.log("jnv", product)
                })
                }
                
            </div>
        )
    }
}

export default Cart;