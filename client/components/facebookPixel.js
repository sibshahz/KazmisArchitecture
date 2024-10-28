import dynamic from 'next/dynamic';

let ReactPixel;
if (typeof window !== 'undefined') {
  ReactPixel = require('react-facebook-pixel');
}

export const initFacebookPixel = () => {
  if (ReactPixel) {
    ReactPixel.init('3920104301552875');
    ReactPixel.pageView();
  }
};
