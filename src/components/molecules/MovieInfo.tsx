import React from "react";
import Subtitle from "../atoms/Subtitle";
import Genre from "../atoms/Genre";
import Ratting from "../atoms/Ratting";
import Title from "../atoms/Title";
import Summary from "../atoms/Summary";

interface Props {}

const MovieInfo: React.FC<Props> = () => {
  return (
    <div>
      <Title />
      <Subtitle />
      <Summary />
      <Subtitle />
      <Genre />
      <Subtitle />
      <Ratting />
    </div>
  );
};

export default MovieInfo;
