import PropTypes from 'prop-types';

const Button = ({ text, bgColor = 'bg-green-500' }) => {
  return (
    <div>
      <button
        className={`px-3 py-2 text-white ${bgColor} rounded-md shadow-lg`}
      >
        {text}
      </button>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string, // Opsional, dengan default 'bg-green-500'
};

export default Button;
