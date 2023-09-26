import { Card, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchData, exerciseOptions } from "./FetchData";
const About = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const renderFetch = async () => {
      const fetchedData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setData(['all',...fetchedData])
    };
    renderFetch()
  }, []);
return(
    <div className="w-full h-screen flex flex-col items-center justify-start gap-3">
      <Typography mt={3} fontSize={25} className="" color="white">
        Our Program
      </Typography>
      <Typography fontSize={40} fontWeight="bold" color="white">
        Build a cool body
      </Typography>
      <div className="flex flex-row gap-4">
        {data.map((item)=>(
          <Card sx={{backgroundColor:"#2b2b2b"}} key={item}>
            <CardContent>
              <Typography>{item}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default About;
