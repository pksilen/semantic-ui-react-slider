// @flow

import React, { useCallback, useState } from 'react';
import type { Element } from 'react';
import { render } from 'react-dom';
// $FlowFixMe
import SliderView from '../src/slider/SliderView';

const DemoApp = (): Element<any> => {
  const [minSelectedValue, setMinSelectedValue] = useState(0);
  const [maxSelectedValue, setMaxSelectedValue] = useState(100);

  const onSliderValuesChange = useCallback((minValue: number, maxValue: number) => {
    setMinSelectedValue(minValue);
    setMaxSelectedValue(maxValue);
  }, []);

  return (
    <div style={{ marginLeft: '5px', width: '50%' }}>
      <h1>Slider Demo</h1>
      <SliderView onSliderValuesChange={onSliderValuesChange} sliderMinValue={0} sliderMaxValue={100} />
      <br />
      <br />
      <span>
        Selected min value:&nbsp;
        {minSelectedValue}
      </span>
      <br />
      <span>
        Selected max value:&nbsp;
        {maxSelectedValue}
      </span>
      <br />
      <br />
      <SliderView
        onSliderValuesChange={onSliderValuesChange}
        selectedMinValue={minSelectedValue}
        selectedMaxValue={maxSelectedValue}
        sliderMinValue={0}
        sliderMaxValue={100}
      />
    </div>
  );
};

const rootElement = document.getElementById('app-root');

if (rootElement) {
  render(<DemoApp />, rootElement);
}
