import PropTypes from "prop-types";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Feature = ({ feature }) => {
  return (
    <div>
      <p className="flex items-center">
        <AiOutlineCheckCircle className=" text-blue-600" /> {feature}
      </p>
    </div>
  );
};
Feature.PropTypes = {
  feature: PropTypes.string,
};

export default Feature;
