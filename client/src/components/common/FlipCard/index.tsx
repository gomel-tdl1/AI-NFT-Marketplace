import React, { FC } from 'react';

import {
  FlipCardBack,
  FlipCardContainer,
  FlipCardFront,
  FlipCardFrontImage,
  FlipCardInner,
} from './styles';
import { IFlipCard } from './types';

import { MarkerButton } from '../Button';
import { Heading } from '../Heading';

export const FlipCard: FC<IFlipCard> = ({
  icon,
  title,
  description,
  onClick,
}) => {
  return (
    <FlipCardContainer>
      <FlipCardInner>
        <FlipCardFront>
          <FlipCardFrontImage src={icon} alt="front" />
        </FlipCardFront>
        <FlipCardBack onClick={onClick}>
          <Heading mb="20px" scale={'xxl'}>
            {title}
          </Heading>
          <Heading scale={'lg'}>{description}</Heading>
          <MarkerButton fillColor="black" mt="40px">
            Do It
          </MarkerButton>
        </FlipCardBack>
      </FlipCardInner>
    </FlipCardContainer>
  );
};
