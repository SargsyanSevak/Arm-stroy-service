import "./services.css";
import { motion } from "framer-motion";
import asphalt from "../../Assets/asphalt.jpeg";
import ukladka from "../../Assets/ukladka.jpeg";
import plitka from "../../Assets/plitka.jpeg";
import bordur from "../../Assets/bordur.jpeg";
import blagoslavenie from "../../Assets/blagoslavenie.jpeg";
import arenda from "../../Assets/arenda.jpeg";
const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;

function Card({ emoji, hueA, hueB, title }) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div className="card" variants={cardVariants}>
        {
          <div className="service_item">
            <img src={emoji} alt="" className="img" />
            <h4 className="itemText">{title}</h4>
          </div>
        }
      </motion.div>
    </motion.div>
  );
}

const food = [
  [asphalt, "АСФАЛЬТИРОВАНИЕ ДОРОГ"],
  [ukladka, "УКЛАДКА АСФАЛЬТНОЙ КРОШКИ"],
  [plitka, "УКЛАДКА ТРОТУАРНОЙ ПЛИТКИ"],
  [bordur, "установка бортовой камень"],
  [blagoslavenie, "БЛАГОУСТРОЙСТВО"],
  [arenda, "АРЕНДА СПЕЦТЕХНИКИ"],
];

export default function MottionItem() {
  return food.map(([emoji, title]) => (
    <Card emoji={emoji} key={emoji} title={title} />
  ));
}
