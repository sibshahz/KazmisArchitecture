import React from 'react';
import Head from 'next/head';
import FacebookPixel1 from './facebook/pixel-1';

const PixelHead = ({ name }) => {
  return (
    <Head>
      {name === 'FACEBOOK_PIXEL_1' && <FacebookPixel1 />}
    </Head>
  );
};

export default PixelHead;
