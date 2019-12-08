import React from 'react';
import Star from '../atoms/Star';

import { VOTES_MIN_LIMIT } from '../../constants/text.constants';

interface Props {
  ratingData: number | string;
  votes: number | string;
}

const Rating: React.FC<Props> = ({ ratingData, votes }) => {
  const checkRatingRemainder = (rating: number) => {
    const result = rating % Math.floor(rating) === 0;
    return result;
  };

  const renderStars = () => {
    const STAR_NUMBER = 10;
    const elements = [];
    const theRemainder = typeof ratingData === 'number' ? checkRatingRemainder(ratingData) : undefined;
    if (theRemainder) {
      for (let index = 1; index <= STAR_NUMBER; index++) {
        if (index <= ratingData) {
          elements.push(<Star full key={index} />);
        } else {
          elements.push(<Star key={index} />);
        }
      }
      return <>{elements}</>;
    } else if (typeof theRemainder !== undefined && typeof ratingData === 'number') {
      const floorRatingData = Math.floor(ratingData);
      for (let index = 0; index < STAR_NUMBER; index++) {
        if (index < floorRatingData) {
          elements.push(<Star full key={index} />);
        } else if (index === floorRatingData) {
          elements.push(<Star half key={index} />);
        } else {
          elements.push(<Star key={index} />);
        }
      }
      return <>{elements}</>;
    }
    return;
  };

  return (
    <>
      <div>{votes >= 3 ? <div>{renderStars()}</div> : VOTES_MIN_LIMIT}</div>
    </>
  );
};

export default Rating;
