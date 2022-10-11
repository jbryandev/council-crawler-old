import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export default function Header({ children }: Props) {
  return (
    <h2 className='text-xl font-semibold tracking-tight leading-tight mb-20 mt-8 text-center md:text-left'>
      {children}
    </h2>
  );
}
