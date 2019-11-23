import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    {/* We define an onchange method for each form component and then all the other 
        props like name, id, type, value will be automatically passed in using 
        "...otherProps" */}
    <input className="form-input" onChange={handleChange} {...otherProps} />

    {/* Conditional rendering of label component */}
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
