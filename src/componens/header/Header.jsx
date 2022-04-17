import React, { Component } from "react";
import {Link} from "react-router-dom"
import "./header.scss";
import logo from "../../images/logo.svg";
import cart from "../../images/cart.svg";
import expand from "../../images/expand.svg";

export default class Header extends Component {
  render() {
    const currencies = this.props.currencies;
    const price = this.props.price;
    return (
      <>
        <header>
          <div>
            <p onClick={() => this.props.name(0)}>ALL</p>
            <p onClick={() => this.props.name(1)}>CLOTHES</p>
            <p onClick={() => this.props.name(2)}>TECH</p>
          </div>

          <div>
            <Link to="/">
            <img src={logo} alt="logo" />
            </Link>
          </div>

          <div>
            <span>{currencies[price].symbol}</span>
            <img src={expand} alt="expand" />
            <img src={cart} alt="cart" />
          </div>

          <div>
            <ul>
              {currencies.map(({ label, symbol }) => {
                return (
                  <li
                    key={label}
                    name={label}
                    onClick={() => {
                      this.props.symbolClick(() => {
                        switch (label) {
                          case "USD":
                            return 0;
                          case "GBP":
                            return 1;
                          case "AUD":
                            return 2;
                          case "JPY":
                            return 3;
                          case "RUB":
                            return 4;
                          default:
                            break;
                        }
                      });
                    }}
                  >
                    {symbol} {label}
                  </li>
                );
              })}
            </ul>
          </div>
        </header>
      </>
    );
  }
}

// <Switcher>
//   {data.currencies.map(({ label, symbol }) => (
//     <p onClick={bar}>
//       {symbol} {label}
//     </p>
//   ))}
// </Switcher>
// <Switcher style={{ display: "none" }}>
//   <div className="cartDiv">
//     <p>my bag</p>
//     <div className="cart">
//       <div>
//         <p>{data.category.products[0].name}</p>
//         <p>
//           {data.category.products[0].prices[0].currency.symbol}
//           {data.category.products[0].prices[0].amount}
//         </p>
//         <span>S</span>
//         <span>M</span>
//       </div>
//       <div className="cartCenter">
//         <span>+</span>1<span>-</span>
//       </div>
//       <div>
//         <img src={data.category.products[0].gallery[0]} alt="" />
//       </div>
//     </div>

//     <p>total</p>
//     <div className="btn">
//       <Btn>view bag</Btn>
//       <Btn1>check out</Btn1>
//     </div>
//   </div>
// </Switcher>
//     </>
//   );
// }
