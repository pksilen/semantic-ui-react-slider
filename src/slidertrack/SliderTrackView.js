/* eslint-disable react/jsx-props-no-spreading */
// @flow

import React from 'react';
import type { Element } from 'react';
import type { SliderHandle } from '../sliderhandle/SliderHandle';

type Props = $Exact<{
  sourceHandle: SliderHandle,
  targetHandle: SliderHandle,
  getTrackProps: any
}>;

const SliderTrackView = ({
  sourceHandle,
  targetHandle,
  getTrackProps
}: Props): Element<any> => ( // NOSONAR
  <div
    style={{
      left: `${sourceHandle.percent}%`,
      width: `${targetHandle.percent - sourceHandle.percent}%`,
      backgroundColor: 'blue',
      borderRadius: 5,
      cursor: 'pointer',
      height: '10px',
      marginTop: '18px',
      position: 'absolute',
      zIndex: 1
    }}
    {...getTrackProps()}
  />
);

export default SliderTrackView;
