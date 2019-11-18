import React from "react";

interface Props {
  name?: string;
}

const Subtitle: React.FC<Props> = ({ name }: Props) => {
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default Subtitle;
