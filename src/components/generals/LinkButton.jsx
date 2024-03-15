import PropTypes from 'prop-types';

const LinkButton = ({ text, bgColor = 'bg-green-500', href = '#' }) => {
  return (
    <div>
      <a
        href={href}
        className={`px-3 py-2 text-white ${bgColor} rounded-md shadow-lg`}
      >
        {text}
      </a>
    </div>
  );
};

LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string, // Opsional, dengan default '#'
  bgColor: PropTypes.string, // Opsional, dengan default 'bg-green-500'
};

export default LinkButton;
