import React, { Component } from "react";
import {Link} from "react-router-dom"; 
import cart from "../../images/cart.svg";
import "./plp.scss";



export default class PLP extends Component {


  render() {
    const price = this.props.price;

    const category = () => {
      switch (this.props.PLPcount) {
        case 0:
          return "All";
        case 1:
          return "Clothes";
        case 2:
          return "Tech";
        default:
          break;
      }
    };


    return (
      <section>
        <div>
          <h2>{category()}</h2> 
        </div>
        <div>
          {this.props.products.map(({ id, name, gallery, prices }, index) => (
            <div onClick={()=> this.props.index(index)} key={id} className="col animate"> 
              <Link to={`pdp/${id}`}><div style={{ backgroundImage: "url(" + gallery[0] + ")" }}></div></Link>
              <p>{name}</p>
              <p>
                {prices[price].currency.symbol}
                {prices[price].amount}
              </p>
              <span className="animate">
                <img src={cart} alt="cart" />
              </span>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
