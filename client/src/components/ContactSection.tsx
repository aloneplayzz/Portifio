const features = [
  "Custom solutions tailored to your specific needs",
  "Clean, efficient code that's built to last",
  "Clear communication throughout the project",
  "Competitive rates with flexible payment options",
  "Fast turnaround times for critical projects",
  "Ongoing support and maintenance options"
];

export default function ContactSection() {
  return (
    <section className="py-20 px-6 bg-card/30" data-testid="contact-section">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="contact-title">Hire Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="contact-description">
            Ready to bring your vision to life? I'm currently available for new projects. Choose your preferred contact method below!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a 
            href="https://discordapp.com/users/931059762173464597" 
            className="bg-card rounded-xl p-8 text-center hover:bg-accent transition-all duration-300 transform hover:scale-105 group"
            data-testid="contact-discord"
          >
            <i className="fab fa-discord text-5xl text-chart-1 mb-4 group-hover:scale-110 transition-transform"></i>
            <h3 className="text-xl font-semibold mb-2">Discord</h3>
            <p className="text-muted-foreground">risin777</p>
          </a>

          <a 
            href="https://github.com/risin77" 
            className="bg-card rounded-xl p-8 text-center hover:bg-accent transition-all duration-300 transform hover:scale-105 group"
            data-testid="contact-github"
          >
            <i className="fab fa-github text-5xl text-foreground mb-4 group-hover:scale-110 transition-transform"></i>
            <h3 className="text-xl font-semibold mb-2">GitHub</h3>
            <p className="text-muted-foreground">risin77</p>
          </a>

          <a 
            href="mailto:risin.dev@gmail.com" 
            className="bg-card rounded-xl p-8 text-center hover:bg-accent transition-all duration-300 transform hover:scale-105 group"
            data-testid="contact-email"
          >
            <i className="fas fa-envelope text-5xl text-primary mb-4 group-hover:scale-110 transition-transform"></i>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground">risin.dev@gmail.com</p>
          </a>
        </div>

        {/* Features List */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3" data-testid={`feature-${index}`}>
              <i className="fas fa-check text-chart-2"></i>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
