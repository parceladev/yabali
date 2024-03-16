import PropTypes from 'prop-types';

const LittleTitle = ({ text }) => {
  return (
    <div>
      <p className="hidden text-sm font-bold leading-3 uppercase font-paragraph sm:block">
        {text}
      </p>
    </div>
  );
};

LittleTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default LittleTitle;
