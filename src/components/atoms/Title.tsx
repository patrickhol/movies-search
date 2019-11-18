import React from "react";

interface Props {
  movieTitle: string;
}

const Title: React.FC<Props> = ({ movieTitle }) => {
  return (
    <div>
      <h1>{movieTitle}</h1>
    </div>
  );
};

export default Title;
