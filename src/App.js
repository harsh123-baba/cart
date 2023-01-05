import React from 'react';
import Cart from './cart';
import Navbar from './Navbar';
// import CartItem from './CartItem';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: "watch",
          qty: 1,
          img: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80',
          id: 1
        },
        {
          price: 9999,
          title: "Mobile Phone",
          qty: 1,
          img: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
          id: 2
        },
        {
          price: 99999,
          title: "Laptop",
          qty: 1,
          img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
          id: 3
        },
      ]
    }
  }
  handleIncreaseQty = (product) => {
    console.log("Incresse called", product)
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products: products
    })
  }

  handleDecreaseQty = (product) => {
    console.log("decrese qty called", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty > 0) {
      products[index].qty -= 1;
    }
    this.setState({
      products: products
    })
  }

  handleDelete = (productId) => {
    console.log("called delete");
    const { products } = this.state;
    const items = products.filter((item) => item.id !== productId)
    this.setState({
      products: items
    })
  }

  TotalQty = () => {
    const { products } = this.state;
    let qty = 0;
    console.log("inside")
    products.map((e) => {
      console.log(e);
      qty += e.qty;
    })
    console.log(qty)
    return qty;
  }

  TotalPrice = () => {
    const {products} = this.state;
    let totalprice = 0;
    products.map((e)=>{
      totalprice+=(e.price * e.qty);
    })
    console.log("total price", totalprice)
    return totalprice;
  }

  render(){
    const {products}=this.state;
    return (
      <div className="App">
        <Navbar
          products = {products}
          count = {this.TotalQty()} 
        />
        <Cart
          products={products}
          onIncreaseQty={this.handleIncreaseQty}
          onDecreaseQty={this.handleDecreaseQty}
          onDelete={this.handleDelete}
          totalprice={this.TotalPrice()}
        />
      </div>
    );
  }
}

export default App;
