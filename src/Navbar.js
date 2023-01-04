import React, {Component} from 'react';

function Navbar(props){
    return (

        <div style={styles.nav}>
            {console.log(props.products)}
            <div style={styles.cartIconContainer}>
                <img style = {styles.cartIcon}src= "https://cdn-icons-png.flaticon.com/512/1170/1170678.png"/>
                <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>
    )
}

const styles = {
    cartIcon : {
        height : 32,
        marginRight : 20
    },
    nav : {
        height : 70,
        background : "#77777",
        display:'flex',
        justifyContent:'flex-end',
        alignItems : 'center'
    },
    cartIconContainer : {
        position :'relative'
    },
    cartCount : {
        background : "yellow",
        borderRadius : "50%",
        padding : '4px 8px',
        position : 'absolute',
        right : 0,
        top : -9
    }
};
export default Navbar;