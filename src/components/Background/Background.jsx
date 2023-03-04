import React from "react";
import "./background.css";
import Header from "../Header/Header";
import MakeOrder from "./MakeOrder/MakeOrder";
import { Box } from "@mui/material";
import { Example } from "../MobileMenu/Example";

const Background = ({ handleScroll, scrollTop }) => {
  return (
    <div className="bg">
      <Header handleScroll={handleScroll} scrollTop={scrollTop} />
      <div className="bg-content">
        <h1 className="animate__animated animate__fadeInUp">
          Строительство дороги
        </h1>
        <h2 className="animate__animated animate__fadeInUp">
          Асфальтирование в Воронеже
        </h2>
        <p className="animate__animated animate__fadeInUp">
          Специалисты компании «АРМстройСЕРВИС» уже более 8 лет успешно
          производят асфальтирование дорог в Воронеже и Воронежской области с
          точным соблюдением технологических требований и гарантийных
          обязательств. Выполняем работы по нанесению асфальтового покрытия
          оперативно, качественно и по доступной стоимости. Мы соблюдаем все
          правила технологического процесса, что позволяет обеспечить длительный
          эксплуатационный ресурс дорожного полотна.
        </p>
        <MakeOrder />
      </div>
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <Example />
      </Box>
    </div>
  );
};

export default Background;
