import PropTypes from "prop-types";
import Feature from "../Feature/Feature";
const Price = ({ option }) => {
  const { id, name, price, description, features } = option;
  return (
    <div className=" bg-slate-300 rounded-lg flex flex-col  mx-6  p-6 md:p-10">
      <h1 className="text-7xl text-center font-extrabold ">
        {price}
        <span className="text-2xl">month</span>
      </h1>
      <h4 className="text-3xl">{name}</h4>
      <div className="flex-grow py-3">
        {features.map((feature, idx) => (
          <Feature key={idx} feature={feature} />
        ))}
      </div>
      <button className="font-bold text-xl text-center text-white bg-green-600 p-3 w-full rounded-lg">
        By Now
      </button>
    </div>
  );
};
Price.PropTypes = {
  option: PropTypes.object,
};
export default Price;
