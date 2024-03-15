import PropTypes from 'prop-types';

const DescriptionList = ({ icon, title, text }) => {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <i>{icon}</i>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <p>{text}</p>
    </div>
  );
};

DescriptionList.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default DescriptionList;
