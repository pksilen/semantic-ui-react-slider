/* eslint-disable react/jsx-props-no-spreading */
// @flow

import React from 'react';
import type { Element } from 'react';
// $FlowFixMe
import type { SliderHandle } from '../sliderhandle/SliderHandle';

type Props = $Exact<{
  sourceHandle: SliderHandle,
  targetHandle: SliderHandle,
  getTrackProps: any,
  style: ?Object
}>;

const SliderTrackView = ({
  sourceHandle,
  targetHandle,
  getTrackProps,
  style
}: Props): Element<any> => ( // NOSONAR
  <div
    style={{
      left: `${sourceHandle.percent}%`,
      width: `${targetHandle.percent - sourceHandle.percent}%`,
      backgroundColor: '#2185d0',
      borderRadius: 5,
      cursor: 'pointer',
      height: '10px',
      marginTop: '18px',
      position: 'absolute',
      zIndex: 1,
      ...style
    }}
    {...getTrackProps()}
  />
);

export default SliderTrackView;
