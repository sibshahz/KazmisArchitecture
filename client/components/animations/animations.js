// import anime from 'animejs/lib/anime.es.js';
// const csv=require('csvtojson');
const anime=require('animejs/lib/anime.js');
export const popUp=(targetList)=>{
    anime({
        targets: targetList,
        scale: [0.88,1],
        opacity:[0,1],
        visibility:[0,1],
        rotate:[-3,3],
        // keyframes: [
        //   {rotate: [0,-3]},
        //   {rotate: [-3,3]},
        //   {rotate: [3,0]}          
        // ],
        duration:2500,
        // translateX: [250, 0], // from 100 to 250
        // delay: 500,
        loop: false,
        // direction:'alternate'
      });
}