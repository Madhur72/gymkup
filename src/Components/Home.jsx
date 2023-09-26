import React from "react";
import "../Style.css";
import back from "../assets/background.jpg";
import Navbar from "./Navbar";
import { Typography, Button } from "@mui/material";
import image from "../assets/image.jpg";
const Home = () => {
  return (
    <div className="w-full	h-screen  flex flex-col">
      <img
        className=" absolute p xl:w-full xl:h-screen xl:brightness-30 brightness-0 h-full"
        src={back}
        alt=""
      />
      <Navbar />
      <div className="relative flex flex-row justify-between">
        <div className="flex flex-col items-center justify-center gap-5 ml-20">
          <Typography
            color="white"
            fontWeight="bold"
           
            mt={4}
            fontSize={85}
          >
            FITNESS TO
            <br />
            LOOK COOL
          </Typography>
          <Typography fontSize={22} className="relative" color="GrayText">
            Together with GYMKUY your physical person will <br /> really form
            and look cool. Intrested? Join now!
          </Typography>
          <div className="flex flex-row items-center justify-around gap-9 mt-4">
            <Button size="large" variant="contained" color="success">
              Success
            </Button>
            <Button size="large" variant="contained" color="warning">
              Learn More
            </Button>
          </div>
          <div className="flex flex-row gap-16 items-start mt-2">
            <div className="flex flex-col items-start justify-center">
              <Typography fontSize={40} fontWeight="bold" color="green">28</Typography>
              <Typography fontSize={20} color="GrayText">Excercise <br />Program</Typography>
            </div>
            <div className="flex flex-col items-start justify-center">
              <Typography fontSize={40} fontWeight="bold" color="green">980+</Typography>
              <Typography fontSize={20} color="GrayText">Members</Typography>
            </div>
            <div className="flex flex-col items-start justify-center">
              <Typography fontSize={40} fontWeight="bold" color="green">180+</Typography>
              <Typography fontSize={20} color="GrayText">Total<br />Coach</Typography>
            </div>
          </div>
        </div>
        <img className=" mt-12 rounded-3xl" src={image} alt="" />
      </div>
    </div>
  );
};

export default Home;
