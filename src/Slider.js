// @flow

import React from 'react';
import type { Element } from 'react';
import { Slider as ReactCompoundSlider, Handles, Rail, Tracks } from 'react-compound-slider';
import { handleValue, sliderHandle, sliderRail, sliderTrack } from './Slider.module.scss';

type HandleType = {
  id: any,
  value: number,
  percent: number
};

type HandleProps = {
  handle: HandleType,
  getHandleProps: any
};

const Handle = ({ handle: { id, value, percent }, getHandleProps }: HandleProps): Element<any> => (
  <div
    className={sliderHandle}
    style={{
      left: `${percent}%`
    }}
    {...getHandleProps(id)}
  >
    <div className={handleValue}>{value}</div>
  </div>
);

type TrackProps = {
  source: HandleType,
  target: HandleType,
  getTrackProps: any
};

const Track = ({ source, target, getTrackProps }: TrackProps): Element<any> => (
  <div
    className={sliderTrack}
    style={{
      left: `${source.percent}%`,
      width: `${target.percent - source.percent}%`
    }}
    {...getTrackProps()}
  />
);

type SliderProps = {
  className: string,
  sliderMinValue: number,
  sliderMaxValue: number,
  selectedMinValue?: ?number,
  selectedMaxValue?: ?number,
  onSliderValuesChange: (number, number) => void
};

export default class Slider extends React.Component<SliderProps, {}> {
  static defaultProps = {
    selectedMinValue: null,
    selectedMaxValue: null
  };

  onSliderValuesChange = (values: number[]) => {
    const { onSliderValuesChange } = this.props;
    if (values.length === 2) {
      onSliderValuesChange(values[0], values[1]);
    }
  };

  render(): Element<any> {
    const { className, sliderMinValue, sliderMaxValue } = this.props;
    let { selectedMinValue, selectedMaxValue } = this.props;

    if (selectedMinValue == null) {
      selectedMinValue = sliderMinValue;
    }

    if (selectedMaxValue == null) {
      selectedMaxValue = sliderMaxValue;
    }

    return (
      <ReactCompoundSlider
        className={className}
        rootStyle={{
          position: 'relative',
          height: '45px',
          marginLeft: '10px',
          marginRight: '10px',
          flexBasis: 'calc(100% - 20px)'
        }}
        domain={[sliderMinValue, sliderMaxValue]}
        step={1}
        mode={2}
        values={[selectedMinValue, selectedMaxValue]}
        onUpdate={this.onSliderValuesChange}
      >
        <Rail>{({ getRailProps }: any) => <div className={sliderRail} {...getRailProps()} />}</Rail>
        <Handles>
          {({ handles, getHandleProps }: any): Element<any> => (
            <div className="slider-handles">
              {handles.map((handle: HandleType) => (
                <Handle key={handle.id} handle={handle} getHandleProps={getHandleProps} />
              ))}
            </div>
          )}
        </Handles>
        <Tracks left={false} right={false}>
          {({ tracks, getTrackProps }: any): Element<any> => (
            <div className="slider-tracks">
              {tracks.map(({ id, source, target }: any) => (
                <Track key={id} source={source} target={target} getTrackProps={getTrackProps} />
              ))}
            </div>
          )}
        </Tracks>
      </ReactCompoundSlider>
    );
  }
}
