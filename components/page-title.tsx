import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export default function PageTitle({ children }: Props) {
  return (
    <h1 className='text-6xl md:text-7xl font-bold tracking-tight leading-tighter md:leading-none mb-12'>
      {children}
    </h1>
  );
}
