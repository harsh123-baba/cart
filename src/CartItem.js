import React from 'react';


class CartItem extends React.Component{
    constructor (){
        super();
        this.state = {
            price : 999,
            title:"Mobile Phone",
            qty : 1,
            img:''
        }
    }
   render(){
    const {price, title, qty} = this.state;
    return(
        <div className='cart-item'>
            <div className='left-block'>
                <img style={styles.image} />
            </div>
            <div className='right-block'>
                <div style={styles.prodName}>{title}</div>
                <div style={styles.prodPrice}>RS {price}</div>
                <div style={styles.prodQty}>Qty : {qty}</div>
                <div className='cart-item-actions'>
                    <img className='action-icons' src= "https://cdn-icons-png.flaticon.com/512/992/992683.png"/>
                    <img className='action-icons' src= "https://cdn-icons-png.flaticon.com/512/1828/1828925.png"/>
                    <img className='action-icons' src= "https://cdn-icons-png.flaticon.com/512/3405/3405244.png"/>                    
                </div>
            </div>
        </div>
    )
   } 
}
const styles = {
    image:{
        height:110,
        width:110,
        borderRadius : 4
    },
    prodName:{
        fontSize : 25
    },
    prodPrice:{
        color:'#777'
    },
    prodQty:{
        color:"#777"
    }

}
export default CartItem;