import React from 'react';
import { Ratings } from './ratings.component';

export default {
  title: 'Ratings',
  component: Ratings,
};

export const Default = () => <Ratings ratings={4.5} numberOfRatings={123} />;
