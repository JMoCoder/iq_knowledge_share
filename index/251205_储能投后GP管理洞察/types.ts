import React from 'react';

export interface SlideProps {
  isActive: boolean;
}

export interface SlideData {
  id: number;
  component: React.FC<SlideProps>;
  title: string;
}