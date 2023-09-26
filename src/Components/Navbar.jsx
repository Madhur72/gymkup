import React from "react";
import { Typography } from "@mui/material";
import logo from "../assets/logo.svg";
import "../Style.css";
import {HiOutlineViewList} from 'react-icons/hi';
const Navbar = () => {
  const contents = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "Program",
    },
    {
      id: 3,
      text: "About Us",
    },
    {
      id: 4,
      text: "Pricing",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  
  return (
    <div className="bg-transparent  p-9 relative w-full flex justify-around items-center xl: gap-32">
      <img src={logo} alt="Logo" className="w-52 cursor-pointer" />
      <div className="sm:hidden md:hidden xl:flex gap-12">
        {contents.map((item)=>(
          <Typography
          key={item.id}
          component="a"
          color="GrayText"
          href="#"
          variant="h6"
          className="hover:text-white "
        >
          {item.text}
        </Typography>
        ))}
      </div>
      <HiOutlineViewList className=" xl:hidden" size={30} color="white"></HiOutlineViewList>
    </div>
  );
};

export default Navbar;
