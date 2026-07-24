import "./Testimonials.css";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, BrightLabs",
    review: "NorthPeak Digital completely transformed our website. Our conversions increased significantly within weeks."
  },
  {
    name: "Michael Chen",
    role: "Founder, NovaTech",
    review: "Professional, responsive, and incredibly talented. The team delivered beyond our expectations."
  },
  {
    name: "Emily Davis",
    role: "Marketing Head, Elevate Co.",
    review: "Our brand now looks modern and trustworthy. Working with NorthPeak Digital was a fantastic experience."
  }
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <h2>What Our Clients Say</h2>
      <p className="testimonial-metric">
        ⭐ Rated <strong>4.9/5</strong> by 150+ happy clients
      </p>
      <p className="testimonials-subtitle">
        Trusted by startups and growing businesses to deliver impactful digital experiences.
      </p>
      <div className="testimonial-grid">
        {testimonials.map((client, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="review">
              "{client.review}"
            </p>
            <div className="client-info">
              <div className="avatar">
                {client.name.charAt(0)}
              </div>
              <div>
                <h4>{client.name}</h4>
                <span>{client.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;