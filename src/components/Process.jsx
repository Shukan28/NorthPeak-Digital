import "./Process.css";
import { FaSearch, FaPencilRuler, FaRocket } from "react-icons/fa";

function Process() {
  const steps = [
    {
      icon: <FaSearch />,
      title: "Discover",
      description:
        "We understand your business goals, audience, and project requirements before we begin."
    },
    {
      icon: <FaPencilRuler />,
      title: "Design & Develop",
      description:
        "Our team designs and builds a responsive, modern website tailored to your brand."
    },
    {
      icon: <FaRocket />,
      title: "Launch & Grow",
      description:
        "After launch, we optimize your website for performance, SEO, and long-term growth."
    }
  ];

  return (
    <section className="process" id="process">
      <h2>Our Process</h2>
      <p className="process-subtitle">
        A simple three-step approach that turns your ideas into a successful digital experience.
      </p>
      <div className="process-container">
        {steps.map((step, index) => (
          <div className="process-card" key={index}>
            <div className="process-number">
              {index + 1}
            </div>
            <div className="process-icon">
              {step.icon}
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;