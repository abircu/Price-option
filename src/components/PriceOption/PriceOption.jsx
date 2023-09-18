import Price from "../Price/Price";
const PriceOption = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      description: "Access to basic gym facilities",
      price: 30.99,
      features: [
        "Access to cardio area",
        "Access to weightlifting area",
        "Locker room access",
        "Unlimited gym hours",
        "Free parking",
      ],
    },
    {
      id: 2,
      name: "Premium Membership",
      description: "Full access to all gym facilities",
      price: 50.99,
      features: [
        "Access to cardio area",
        "Access to weightlifting area",
        "Locker room access",
        "Access to sauna and spa",
        "Group fitness classes included",
        "Personalized fitness assessment",
        "Towel service",
      ],
    },
    {
      id: 3,
      name: "Personal Training Package",
      description: "Includes personalized training sessions",
      price: 80.99,
      features: [
        "Personalized workout plan",
        "One-on-one training sessions",
        "Access to premium facilities",
        "Nutritional guidance",
        "Weekly progress tracking",
        "Fitness consultation",
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {priceOptions.map((option) => (
        <Price option={option} />
      ))}
    </div>
  );
};
// priceOptions.PropTypes={

// }

export default PriceOption;
