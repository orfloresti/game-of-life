/**
 * Function to get time in milliseconds to the interval considering the slider from 0 to 100 and the speed from 0 to 2000ms
 * @param {*} sliderValue 
 * @returns 
 */
export const getSpeed = (sliderValue) => {
  const speedMs = -20 * sliderValue + 2000;
  return speedMs;
}