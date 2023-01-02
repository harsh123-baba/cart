import React from 'react';


class CartItem extends React.Component{
    // constructor (){
    //     super();
    //     this.state = {
    //         price : 999,
    //         title:"Mobile Phone",
    //         qty : 1,
    //         img:''
    //     }
        
    // }
    increaseQty =()=> {
        console.log("this ", this.state);
        this.setState({
            qty : this.state.qty+1
        })
        
    }
    decreaseQty = () =>{
        console.log("called -");
    }
   render(){
    console.log(this.props, "b")
    const {price, title, qty, img} = this.props;
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
                    <img className='action-icons' onClick={this.decreaseQty} src= "https://cdn-icons-png.flaticon.com/512/992/992683.png"/>
                    <img className='action-icons' onClick={this.increaseQty} src= "https://cdn-icons-png.flaticon.com/512/992/992651.png"/>
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