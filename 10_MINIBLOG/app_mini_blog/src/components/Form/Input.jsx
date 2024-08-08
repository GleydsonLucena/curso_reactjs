import PropTypes from "prop-types";

import "../../pages/Register/Register.scss";

const Input = (props) => {
  return (
    <label>
      <span>{props.label}:</span>
      <input
        type={props.type}
        name={props.name}
        placeholder={`${props.placeholder}...`}
      />
    </label>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  text: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default Input;
