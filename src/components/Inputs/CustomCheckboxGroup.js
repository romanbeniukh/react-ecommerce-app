import React from 'react';
import CheckboxGroup from 'react-checkbox-group';
import T from 'prop-types';

const CustomCheckboxGroup = ({ values, selectedValues, handler }) => (
  <CheckboxGroup value={selectedValues} onChange={handler}>
    {Checkbox => (
      <div className="checkboxes">
        {values.map(value => (
          <label htmlFor={value.value} className="checkbox" key={value.value}>
            <Checkbox value={value.value} />
            {value.displayName}
          </label>
        ))}
      </div>
    )}
  </CheckboxGroup>
);

CustomCheckboxGroup.propTypes = {
  handler: T.func.isRequired,
  values: T.arrayOf(T.object).isRequired,
  selectedValues: T.arrayOf(T.string).isRequired,
};

export default CustomCheckboxGroup;
