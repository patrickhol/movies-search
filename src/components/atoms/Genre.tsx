import React from "react";

interface Props {
  data?: string[];
}

const Genre: React.FC<Props> = ({ data }: Props) => {
  return (
    <div className="genre">
      {data &&
        data.map(item => {
          return <span className="genre__comma">{item}</span>;
        })}
    </div>
  );
};

export default Genre;
