import * as React from 'react';
import { CommonProps } from '../const';
import { Reveal } from '../Reveal';

export const Pulse: React.FC<CommonProps> = ({ ...props }) => (
  <Reveal animation="pulse" {...props} />
);
