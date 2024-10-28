// lib/facebookPixel.js
import ReactPixel from 'react-facebook-pixel';

export const initFacebookPixel = () => {
  ReactPixel.init('3920104301552875');
  ReactPixel.pageView(); // For the initial page load
};
