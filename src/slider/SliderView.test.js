import React from 'react';
import { shallow as renderShallow } from 'enzyme';
import SliderView from './SliderView';

describe('render', () => {
  it('should render SliderView correctly', () => {
    // WHEN
    const sliderView = renderShallow(
      <SliderView sliderMinValue={0} sliderMaxValue={0} onSliderValuesChange={jest.fn()} />
    );

    expect(sliderView).toMatchSnapshot();
  });
});
