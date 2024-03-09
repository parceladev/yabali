import PropTypes from 'prop-types';

const LineSpan = ({ margin }) => {
  return (
    <div className="flex items-center h-5">
      <div
        className={`flex items-center w-16 ${margin} bg-black h-[3px]`}
      ></div>
    </div>
  );
};

LineSpan.propTypes = {
  margin: PropTypes.string.isRequired,
};

export default LineSpan;
