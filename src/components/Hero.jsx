import "./Hero.css";

function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero-left">
                <p className="hero-tag">
                    🚀 Trusted by 150+ Businesses
                </p>
                <h1>
                    Transform Your Vision
                    <span> Into Digital Success.</span>
                </h1>
                <p className="hero-description">
                    We design modern websites, craft memorable brands and build digital experiences that help businesses attract more customers and grow online.
                </p>
                <div className="hero-buttons">
                    <button className="primary-btn">
                        Get Started
                    </button>
                    <a href="#services" className="secondary-btn" >Our Services</a>
                </div>
                <div className="hero-stats">
                    <div>
                        <p className="hero-stat-number">150+</p>
                        <p>Projects</p>
                    </div>
                    <div>
                        <p className="hero-stat-number">98%</p>
                        <p>Satisfaction</p>
                    </div>
                    <div>
                        <p className="hero-stat-number">4.9★</p>
                        <p>Client Rating</p>
                    </div>
                </div>
            </div>
            <div className="hero-right">
                <div className="dashboard-card">
                    <div className="card-header">
                        <h3>Website Analytics</h3>
                        <span>Live</span>
                    </div>
                    <div className="graph">
                        <div className="bar bar1"></div>
                        <div className="bar bar2"></div>
                        <div className="bar bar3"></div>
                        <div className="bar bar4"></div>
                        <div className="bar bar5"></div>
                    </div>
                    <div className="metrics">
                        <div>
                            <h4>25.6K</h4>
                            <p>Visitors</p>
                        </div>
                        <div>
                            <h4>+48%</h4>
                            <p>Growth</p>
                        </div>
                        <div>
                            <h4>98%</h4>
                            <p>Success</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;