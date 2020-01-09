/* eslint-disable react/jsx-props-no-spreading */
// @flow

import React, { useCallback } from 'react';
import type { Element } from 'react';
// $FlowFixMe
import PropTypes from 'prop-types';
// $FlowFixMe
import { Slider as ReactCompoundSlider, Handles, Rail, Tracks } from 'react-compound-slider';
// $FlowFixMe
import SliderHandleView from '../sliderhandle/SliderHandleView';
// $FlowFixMe
import SliderTrackView from '../slidertrack/SliderTrackView';
// $FlowFixMe
import type { SliderHandle } from '../sliderhandle/SliderHandle';

type SliderProps = $Exact<{
  className?: ?string,
  onSliderValuesChange: (number, number) => void,
  selectedMaxValue?: ?number,
  selectedMinValue?: ?number,
  sliderMaxValue: number,
  sliderMinValue: number
}>;

const SliderView = ({
  className,
  onSliderValuesChange,
  selectedMaxValue,
  selectedMinValue,
  sliderMaxValue,
  sliderMinValue
}: SliderProps): Element<any> => {
  const handleSliderUpdate = useCallback((values: number[]) => {
    if (values.length === 2) {
      onSliderValuesChange(values[0], values[1]);
    }
  }, []);

  const sliderStyle = {
    position: 'relative',
    height: '45px',
    marginLeft: '10px',
    marginRight: '10px',
    flexBasis: 'calc(100% - 20px)'
  };

  const sliderRailStyle = {
    backgroundColor: 'rgb(150, 150, 150)',
    borderRadius: '5px',
    height: '10px',
    marginTop: '18px',
    position: 'absolute',
    width: '100%'
  };

  return (
    <ReactCompoundSlider
      className={className}
      rootStyle={sliderStyle}
      domain={[sliderMinValue, sliderMaxValue]}
      step={1}
      mode={2}
      values={[selectedMinValue ?? sliderMinValue, selectedMaxValue ?? sliderMaxValue]}
      onUpdate={handleSliderUpdate}
    >
      <Rail>{({ getRailProps }: any) => <div style={sliderRailStyle} {...getRailProps()} />}</Rail>
      <Handles>
        {({ handles, getHandleProps }: any): Element<any> => (
          <div className="slider-handles">
            {handles.map((handle: SliderHandle) => (
              <SliderHandleView key={handle.id} handle={handle} getHandleProps={getHandleProps} />
            ))}
          </div>
        )}
      </Handles>
      <Tracks left={false} right={false}>
        {({ tracks, getTrackProps }: any): Element<any> => (
          <div className="slider-tracks">
            {tracks.map(({ id, source, target }: any) => (
              <SliderTrackView
                key={id}
                sourceHandle={source}
                targetHandle={target}
                getTrackProps={getTrackProps}
              />
            ))}
          </div>
        )}
      </Tracks>
    </ReactCompoundSlider>
  );
};

SliderView.propTypes = {
  className: PropTypes.string,
  onSliderValuesChange: PropTypes.func.isRequired,
  selectedMaxValue: PropTypes.number,
  selectedMinValue: PropTypes.number,
  sliderMaxValue: PropTypes.number.isRequired,
  sliderMinValue: PropTypes.number.isRequired
};

SliderView.defaultProps = {
  className: '',
  selectedMinValue: null,
  selectedMaxValue: null
};

export default SliderView;
