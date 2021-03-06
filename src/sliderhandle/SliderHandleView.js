/* eslint-disable react/jsx-props-no-spreading */
// @flow

import React from 'react';
import type { Element } from 'react';
// $FlowFixMe
import type { SliderHandle } from './SliderHandle';

type Props = $Exact<{
  handle: SliderHandle,
  getHandleProps: any,
  style: ?Object
}>;

const SliderHandleView = ({ handle: { id, value, percent }, getHandleProps, style }: Props): Element<any> => (
  <div
    style={{
      left: `${percent}%`,
      backgroundColor: '#2185d0',
      borderRadius: '50%',
      color: '#333',
      cursor: 'pointer',
      height: '20px',
      marginLeft: '-10px',
      marginTop: '12px',
      position: 'absolute',
      textAlign: 'center',
      width: '20px',
      zIndex: 2,
      ...style
    }}
    {...getHandleProps(id)}
  >
    <div
      style={{
        fontSize: '14px',
        marginTop: '-20px'
      }}
    >
      {value}
    </div>
  </div>
);

export default SliderHandleView;
