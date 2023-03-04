import React from "react";
import "./payment.css";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SendToMobileIcon from "@mui/icons-material/SendToMobile";
const Payment = () => {
  return (
    <>
      <div className="header">Как оплатить</div>
      <div className="Payment">
        <div className="method-payment">
          <div className="option">
            <div className="payIcon">
              <AccountBalanceIcon fontSize="large" color="error" />
            </div>
            <div className="title">Безналичный расчет для юридических лиц.</div>
            <div className="moreInfo">
              После подтверждения заказа, менеджер отправит Вам счет на оплату.
            </div>
          </div>
          <div className="option">
            <div className="payIcon">
              <CurrencyRubleIcon color="primary" fontSize="large" />
            </div>
            <div className="title">Наличными средствами</div>
            <div className="moreInfo">в офисе или при получении товара.</div>
          </div>
          <div className="option">
            <div className="payIcon">
              <SendToMobileIcon fontSize="large" color="secondary" />
            </div>
            <div className="title">
              Банковским переводом для физических лиц.
            </div>
            <div className="moreInfo">
              После подтверждения заказа, менеджер отправит Вам квитанцию на
              оплату.
            </div>
          </div>
          <div className="option">
            <div className="payIcon">
              <CreditCardIcon fontSize="large" color="success" />
            </div>
            <div className="title">Банковской картой</div>
            <div className="moreInfo">VISA, Master Card, Maestro в офисе.</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
