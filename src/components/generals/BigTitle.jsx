import PropTypes from 'prop-types';

const BigTitle = ({ text }) => {
  return (
    <div className="max-w-[650px]">
      <h1 className="text-5xl font-bold leading-tight">{text}</h1>
    </div>
  );
};

BigTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BigTitle;
