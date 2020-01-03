// @flow

const style = {
  sliderRail: {
    background-color: rgb(150, 150, 150);
    border-radius: 5px;
    height: 10px;
    margin-top: 18px;
    position: absolute;
    width: 100%;
  },
  sliderHandle: {
    sliderHandle {
      background-color: var(--brand-color-1);
      border-radius: 50%;
      color: #333;
      cursor: pointer;
      height: 20px;
      margin-left: -10px;
      margin-top: 12px;
      position: absolute;
      text-align: center;
      width: 20px;
      z-index: 2;
    },
  handleValue: {
      font-size: 10px;
      margin-top: -12px;
    },
    sliderTrack: {
      background-color: var(--brand-color-1);
      border-radius: 5;
      cursor: pointer;
      height: 10px;
      margin-top: 18px;
      position: absolute;
      z-index: 1;
    }

};

export default style;
