import PropTypes from 'prop-types';

const LinkButton = ({ text, bgColor = 'bg-primary', href = '#' }) => {
  return (
    <div className="w-fit">
      <a
        href={href}
        className={`px-3 py-2 text-white ${bgColor} rounded-sm shadow-lg`}
      >
        {text}
      </a>
    </div>
  );
};

LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
  bgColor: PropTypes.string,
};

export default LinkButton;
