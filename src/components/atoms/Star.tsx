import React from 'react';
import classN from 'classnames';

interface Props {
  half?: boolean;
  full?: boolean;
}

const Star: React.FC<Props> = ({ half, full }) => {
  const starClass = classN('rating__star', {
    'rating__star--half': half,
    'rating__star--full': full,
  });

  return <span className={starClass}></span>;
};

export default Star;
