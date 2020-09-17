import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';
import Select from 'react-select';

const Input = ({
  error,
  value,
  touched,
  onChange,
  placeholder,
  type = 'text',
  getOptionLabel,
  options,
  isSelect,
  ...props
}) => {
  const styles = classNames('custom-input__input', {
    'custom-input__input--error': error && touched,
  });

  return (
    <div className="custom-input">
      <div className="custom-input__wrap">
        {isSelect ? (
          <Select
            getOptionLabel={option => option.displayName}
            name="origin"
            value={value}
            options={options}
            placeholder={placeholder}
            onChange={onChange}
            {...props}
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={onChange}
            className={styles}
            placeholder={placeholder}
            {...props}
          />
        )}
      </div>

      {error && touched && <span className="custom-input__error-text">{error}</span>}
    </div>
  );
};

Input.defaultProps = {
  error: '',
  value: null,
  type: 'text',
  isSelect: false,
  touched: null,
  getOptionLabel: null,
  options: [],
};

Input.propTypes = {
  error: T.string,
  value: T.oneOfType([T.string, T.number, T.object]),
  touched: T.oneOfType([T.bool, T.object]),
  onChange: T.func.isRequired,
  placeholder: T.string.isRequired,
  type: T.string,
  getOptionLabel: T.func,
  options: T.arrayOf(T.object),
  isSelect: T.bool,
};

export default Input;
