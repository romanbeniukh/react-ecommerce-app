import React from 'react';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import T from 'prop-types';

import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);
const { Handle } = Slider;

const handle = ({ value, dragging, index, ...restProps }) => {
  return (
    <Tooltip prefixCls="rc-slider-tooltip" overlay={value} visible={dragging} placement="top" key={index}>
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const CustomRange = ({ min, max, step, value, onChange, onAfterChange }) => (
  <Range
    value={value}
    min={min}
    max={max}
    step={step}
    onChange={onChange}
    onAfterChange={onAfterChange}
    marks={{ 0: min, 1000: max }}
    handle={handle}
  />
);

handle.propTypes = {
  value: T.arrayOf(T.number).isRequired,
  dragging: T.func.isRequired,
  index: T.number.isRequired,
};

CustomRange.propTypes = {
  min: T.number.isRequired,
  max: T.number.isRequired,
  step: T.number.isRequired,
  value: T.arrayOf(T.number).isRequired,
  onChange: T.func.isRequired,
  onAfterChange: T.func.isRequired,
};

export default CustomRange;
