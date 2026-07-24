import "./Services.css";
import {
    FaLaptopCode,
    FaPaintBrush,
    FaChartLine,
    FaCode,
    FaBullhorn,
    FaMobileAlt
} from "react-icons/fa";

const services = [
    {
        icon: <FaLaptopCode />,
        title: "Web Design",
        description: "Modern, responsive websites tailored to your business goals."
    },
    {
        icon: <FaPaintBrush />,
        title: "UI/UX Design",
        description: "Beautiful and intuitive user experiences that keep visitors engaged."
    },
    {
        icon: <FaChartLine />,
        title: "SEO Optimization",
        description: "Improve your search rankings and attract more organic traffic."
    },
    {
        icon: <FaCode />,
        title: "Web Development",
        description: "Fast, scalable, and secure web applications built with modern technologies."
    },
    {
        icon: <FaBullhorn />,
        title: "Digital Marketing",
        description: "Reach the right audience with strategic marketing campaigns."
    },
    {
        icon: <FaMobileAlt />,
        title: "Brand Strategy",
        description: "Create a memorable identity that helps your business stand out."
    }
];

function Services() {
    return (
        <section className="services" id="services">
            <h2>Services That Help Your Business Grow</h2>
            <p className="services-subtitle">
                From strategy and design to development and marketing, we build digital solutions that drive measurable business growth.
            </p>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <a href="#">Explore Service →</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;