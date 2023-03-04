import * as React from "react";
import { motion } from "framer-motion";
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ChatIcon from "@mui/icons-material/Chat";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
const menuItem = [
  {
    to: "О КОМПАНИИ",
    id: "#about",
    color: "#D309E1",
    icon: <InfoIcon />,
  },
  {
    to: "УСЛУГИ",
    id: "#services",
    color: "#9C1AFF",
    icon: <MiscellaneousServicesIcon />,
  },
  {
    to: "ОТЗЫВЫ",
    id: "#feeds",
    color: "#7700FF",
    icon: <ChatIcon />,
  },
  {
    to: "ПРОЕКТЫ",
    id: "#projects",
    color: "#FF008C",
    icon: <AddRoadIcon />,
  },
  {
    to: "КОНТАКТЫ",
    id: "#contacts",
    color: "#4400FF",
    icon: <ContactsIcon />,
  },
];
const colors = [];

export const MenuItem = ({ i }) => {
  return (
    <div>
      {menuItem.map(function (item, i) {
        return (
          <motion.li
            id={item.id}
            key={i}
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="icon-placeholder">
              <Box style={{ color: item.color }}>{item.icon}</Box>
            </div>
            <div className="text-placeholder" style={{ color: item.color }}>
              <Link href={item.id} underline="none">
                <Typography textAlign="center">{item.to}</Typography>
              </Link>
            </div>
          </motion.li>
        );
      })}
    </div>
  );
};
