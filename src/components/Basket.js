import React from "react";
import BasketItem from "./BasketItem";

import { moneyFormat } from "../helpers";

function Basket({ basket, resetBasket, products, total }) {
  return (
    <>
      <div className="basket-container container2">
        <h5>My Basket</h5>
        <hr />
        <ul>
          {basket.map((item) => (
            <BasketItem
              key={item.id}
              item={item}
              product={products.find((p) => p.id === item.id)}
            />
          ))}
        </ul>
        <div className="total">
          Total: $<b>{moneyFormat(total)}</b>
        </div>
        <br />
        <button className="basket-reset-btn" onClick={resetBasket}>
          Reset
        </button>
      </div>
      <style jsx>{`
        .basket-container {
          width: 200px;
          padding: 20px;
          background: #fff;
          border: 3px solid #ddd;
          border-radius: 10px 10px 10px 10px;
          text-align: right;
        }
        .basket-container h3 {
          font-size: 20px;
          margin-bottom: 15px;
        }
        .basket-container .total {
          border-top: 1px solid #ddd;
          padding-top: 10px;
          margin-top: 10px;
          font-size: 18px;
          font-weight: 600;
          text-align: right;
          color: #179b17;
        }
        .basket-reset-btn {
          background: #61dafb;
          height: 40px;
          width: 75%;
          padding: 0 20px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          border-radius: 4px 4px 4px 4px;
          float: right;
        }
      `}</style>
    </>
  );
}

export default Basket;
