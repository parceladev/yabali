import PropTypes from 'prop-types';

const BigTitle = ({ text }) => {
  return (
    <div>
      <h1 className="text-6xl font-bold">{text}</h1>
    </div>
  );
};

BigTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BigTitle;
