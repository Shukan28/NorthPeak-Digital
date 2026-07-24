import "./Pricing.css";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    title: "Starter",
    price: "₹999",
    duration: "/month",
    button: "Choose Plan",
    features: [
      "Landing Page Website",
      "Responsive Design",
      "Basic SEO",
      "Email Support"
    ]
  },
  {
    title: "Growth",
    price: "₹2,999",
    duration: "/month",
    popular: true,
    button: "Get Started",
    features: [
      "Up to 5 Pages",
      "Custom UI/UX Design",
      "SEO Optimization",
      "Analytics Dashboard",
      "Priority Support"
    ]
  },
  {
    title: "Enterprise",
    price: "Custom",
    duration: "",
    button: "Contact Us",
    features: [
      "Unlimited Pages",
      "Custom Development",
      "Marketing Strategy",
      "Dedicated Manager",
      "24/7 Premium Support"
    ]
  }
];

function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <h2>Simple Pricing</h2>
      <p className="pricing-subtitle">
        Flexible plans designed to help businesses of every size
        establish and grow their digital presence.
      </p>
      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div
            className={`price-card ${plan.popular ? "popular" : ""}`}
            key={index}
          >
            {plan.popular && (
              <span className="badge">
                Most Popular
              </span>
            )}
            <h3>{plan.title}</h3>
            <div className="price">
              <span className="amount">
                {plan.price}
              </span>
              <span className="duration">
                {plan.duration}
              </span>
            </div>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <FaCheck />
                  {feature}
                </li>
              ))}
            </ul>
            <button>
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;