import React, { Component } from "react";
import "./pdp.scss"; 

export default class PDP extends Component {
  render() {
    const d = this.props.description;
    console.log(d.brand);

    return (
      <div className="PDP"> 
        <div className="mainDiv">
          <div>
            <img src={d.gallery[1]} alt="" />
            <img src={d.gallery[2]} alt="" />
            <img src={d.gallery[3]} alt="" />
          </div>

          <div>
            <img src={d.gallery[0]} alt="" />
          </div>

          <div>
            <div>
              <p>{d.name}</p>
              <p>{d.brand}</p>

              <p className="p">size:</p>
              <div className="attribute">
                <span>m</span>
              </div>

              <p className="p">
                {" "}
                price: <br /> {d.prices[0].currency.symbol} {d.prices[0].amount}{" "}
              </p>
              <button>add to cart</button>

              <div className="description"> {d.description}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
