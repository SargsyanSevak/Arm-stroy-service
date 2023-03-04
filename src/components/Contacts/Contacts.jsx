import React from "react";
import "./contacts.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Map from "./Map";
const Contacts = () => {
  return (
    <div id="contacts">
      <div className="header">КОНТАКТЫ</div>
      <div className="ContactsContainer">
        <div className="info">
          {/* <div className="infoBox">
          <span className="callIcon">
             <LocationOnIcon fontSize="large" color="primary" />
          </span>
            <span className="contactTxt">
              Воронежская область, г. Воронеж Большая Чернавская ул., 9А
            </span>
          </div> */}
          {/* <div className="infoBox">
          <span className="callIcon">
            <AccessTimeIcon fontSize="large" color="primary" />
          </span>
            
            <span className="contactTxt">с 9 до 21 без выходных</span>
          </div> */}
          {/* <div className="infoBox">
            <span className="callIcon">
               <CallIcon fontSize="large" color="primary" />
            </span>
           
            <span className="contactTxt">+8(951)560-11-22</span>
          </div> */}
          {/* <div className="infoBox">
          <span className="callIcon">
            <WhatsAppIcon fontSize="large" color="primary" />
          </span>
            
            <span className="contactTxt">+8(906)676-99-77</span>
          </div> */}
          {/* <div className="infoBox">
          <span className="callIcon">
            <EmailIcon fontSize="large" color="primary" />
          </span>
            <span className="contactTxt">armstroy2006@mail.ru</span>
          </div> */}
          <div className="infoBox animate__animated animate__fadeInUp">
            <div className="infoIcon">
              <span className="callIcon">
                <LocationOnIcon fontSize="large" color="primary" />
              </span>
            </div>
            <div className="infoTxt">
             г. Воронеж Большая Чернавская ул., 9А
            </div>
          </div>
          <div className="infoBox animate__animated animate__fadeInUp">
            <div className="infoIcon">
              <span className="callIcon">
              <AccessTimeIcon fontSize="large" color="primary" />
              </span>
            </div>
            <div className="infoTxt">
            с 9 до 21 без выходных
            </div>
          </div>
          <div className="infoBox animate__animated animate__fadeInUp">
            <div className="infoIcon">
              <span className="callIcon">
              <CallIcon fontSize="large" color="primary" />
              </span>
            </div>
            <div className="infoTxt">
            +8(951)560-11-22
            </div>
          </div>
          <div className="infoBox animate__animated animate__fadeInUp">
            <div className="infoIcon">
              <span className="callIcon">
              <WhatsAppIcon fontSize="large" color="primary" />
              </span>
            </div>
            <div className="infoTxt">
            +8(906)676-99-77
            </div>
          </div>
          <div className="infoBox animate__animated animate__fadeInUp">
            <div className="infoIcon">
              <span className="callIcon">
              <EmailIcon fontSize="large" color="primary" />
              </span>
            </div>
            <div className="infoTxt">
            armstroy2006@mail.ru
            </div>
          </div>
        </div>
        <div className="map">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
