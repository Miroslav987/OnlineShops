import { CardMedia, Container, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./HomePage.css";
const HomePage = () => {
  return (
    <>
      <div className="textBG">
        <Typography
          className="tr"
          style={{ marginTop: "50px", fontSize: "50px", position: "relative" }}>
          Welcome OnlineShop
        </Typography>
        <Typography
          className="tr"
          style={{ marginTop: "50px", fontSize: "20px", position: "relative" }}>
          Чтобы увидеть товары нужно ввести в консоль Json-server -w db.json -p
          8000
        </Typography>
      </div>
    </>
  );
};

export default HomePage;
