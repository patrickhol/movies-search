import React from "react";

interface Props {
  description: string;
}

const Summary: React.FC<Props> = ({ description }: Props) => {
  return (
    <div>
      <p>{description}</p>
    </div>
  );
};

export default Summary;
