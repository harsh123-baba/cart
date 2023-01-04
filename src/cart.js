import React from 'react';
import CartItem from './CartItem';

function Cart(props){
    
        const {products} = props;
        return(
            <div className='cart'>
                {
                products.map((product)=>{
                    return <CartItem 
                        product={product}
                        onIncreaseQty={props.onIncreaseQty}
                        onDecreaseQty={props.onDecreaseQty}
                        onDelete={props.onDelete}
                        
                    />
                    // console.log("jnv", product)
                })
                }
                
            </div>
        )
    }


export default Cart;