# semantic-ui-react-slider
Slider control for [Semantic UI React]

Based on [React Compound Slider]

[![version][version-badge]][package]
[![build][build]][circleci]
[![Downloads][downloads]][package]
[![MIT License][license-badge]][license]

## Prerequisites
    "react": "^16.8.0",
    "react-dom": "^16.8.0",
    "semantic-ui-react": "^0.87.0"

## Installation
    npm install --save semantic-ui-react-slider
    
## Demo
   SliderView [demo] 
    
## Example usage
```jsx
import React, { useCallback, useState } from 'react';
import SliderView from 'semantic-ui-react-slider';

const SliderExample = () => {
    const [minSelectedValue, setMinSelectedValue] = useState(0);
    const [maxSelectedValue, setMaxSelectedValue] = useState(100);

    const onSliderValuesChange = useCallback((minValue: number, maxValue: number) => {
        setMinSelectedValue(minValue);
        setMaxSelectedValue(maxValue);
      }, []);

    return (<SliderView onSliderValuesChange={onSliderValuesChange} sliderMinValue={0} sliderMaxValue={100} />);
}
```

## Mandatory properties      
    sliderMinValue: number
    onSliderValuesChange: (minValue: number, maxValue: number) => void,
         
## Optional properties

    | property             | type     | description                              |
    | ---------------------|-----------------------------------------------------|
    | className            | string   | className for root div                   |    
    | selectedMinValue     | number   | Selected minimum value                   |
    | selectedMaxValue     | number   | Selected max value                       |
    | sliderStyle          | Object   | Style for slider                         |
    | sliderRailStyle      | Object   | Style for slider rail                    |
    | sliderTrackStyle     | Object   | Style for slider track                   |
    | sliderHandleStyle    | Object   | Style for slider handle                  |

    
## License
MIT License

[license-badge]: https://img.shields.io/badge/license-MIT-green
[license]: https://github.com/pksilen/semantic-ui-react-slider/blob/master/LICENSE
[version-badge]: https://img.shields.io/npm/v/semantic-ui-react-slider.svg?style=flat-square
[package]: https://www.npmjs.com/package/semantic-ui-react-slider
[downloads]: https://img.shields.io/npm/dm/semantic-ui-react-slider
[build]: https://img.shields.io/circleci/project/github/pksilen/semantic-ui-react-slider/master.svg?style=flat-square
[circleci]: https://circleci.com/gh/pksilen/semantic-ui-react-slider/tree/master
[demo]: https://pksilen.github.io/semantic-ui-react-slider/
[Semantic UI React]: https://react.semantic-ui.com/
[React Compound Slider]: https://github.com/sghall/react-compound-slider
