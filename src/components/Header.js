import { useState } from "react";
import { moneyFormat } from "../helpers";

function Header({ total, money }) {
  return (
    <>
      {total > 0 && money - total !== 0 && (
        <div className="header">
          <span>Harcayacak $ {moneyFormat(money - total)} paranız kaldı.</span>
        </div>
      )}
      {total === 0 && (
        <div className="header">
          <span>
            Harcamak için ($<b>{moneyFormat(money)}</b>) paranız var.
          </span>
        </div>
      )}
      {money - total === 0 && <div className="header">Paranız bitti! </div>}
      <style jsx>
        {`
          .header {
            position: sticky;
            top: 0;
            background: linear-gradient(to bottom, #20b820, #14be2a);
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-size: 24px;
            letter-spacing: 1px;
          }
          .header span {
            margin: 0 10px;
            font-weighy: bold;
          }
        `}
      </style>
    </>
  );
}

export default Header;
