import "./Contact.css";
import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: ""
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!formData.name.trim())
            newErrors.name = "Name is required.";
        if (!formData.email.trim())
            newErrors.email = "Email is required.";
        else if (!/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = "Enter a valid email.";
        if (!formData.message.trim())
            newErrors.message = "Message is required.";
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            setSuccess("Your message has been sent successfully!");
            setFormData({
                name: "",
                email: "",
                company: "",
                message: ""
            });
        }
    };

    return (

        <section className="contact" id="contact">
            <div className="contact-left">
                
            <p className="contact-tag">
    📩 Contact Us
</p>
                <h2>Let's Build Something Amazing</h2>
                <p>
                    Ready to grow your business?
                    We'd love to hear about your project.
                </p>
                <div className="contact-info">
                    <div>
                        <FaMapMarkerAlt />
                        Lucknow, India
                    </div>
                    <div>
                        <FaEnvelope />
                        hello@northpeakdigital.com
                    </div>
                    <div>
                        <FaPhoneAlt />
                        +91 98765 43210
                    </div>
                </div>
            </div>
            <div className="contact-right">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <p className="error">{errors.name}</p>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <p className="error">{errors.email}</p>
                    <input
                        type="text"
                        name="company"
                        placeholder="Company (Optional)"
                        value={formData.company}
                        onChange={handleChange}
                    />
                    <textarea
                        rows="5"
                        name="message"
                        placeholder="Tell us about your project..."
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    <p className="error">{errors.message}</p>
                    <button type="submit">
                        Send Message
                    </button>
                    {success && (
                        <p className="success">
                            {success}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}

export default Contact;