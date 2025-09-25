const workSteps = [
  {
    number: 1,
    title: "Project Brief",
    description: "We will discuss your project and its goals, target audience, and specific requirements to ensure a clear understanding of your vision.",
    icon: "fas fa-clipboard-list"
  },
  {
    number: 2,
    title: "Design & Develop",
    description: "I will design and develop your website according to your needs, focusing on user experience, performance, and modern design principles.",
    icon: "fas fa-code"
  },
  {
    number: 3,
    title: "Testing & Review",
    description: "I will let you test the website and make any changes if needed, ensuring everything functions perfectly and meets your expectations.",
    icon: "fas fa-bug"
  },
  {
    number: 4,
    title: "Launch",
    description: "I will give you the source code and help you with the launch, providing support for deployment and any technical assistance needed.",
    icon: "fas fa-rocket"
  }
];

export default function WorkProcessSection() {
  return (
    <section className="py-20 px-6 bg-card/30" data-testid="work-process-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="work-process-title">Work Process</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="work-process-description">
            My structured approach ensures your project moves from concept to completion smoothly and efficiently, with clear communication at every step.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workSteps.map((step) => (
            <div
              key={step.number}
              className="bg-card rounded-xl p-8 text-center relative group hover:bg-accent transition-all duration-300 transform hover:scale-105"
              data-testid={`work-step-${step.number}`}
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground font-bold text-xl">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
              <div className="absolute top-4 right-4 text-primary opacity-20 group-hover:opacity-40 transition-opacity">
                <i className={`${step.icon} text-2xl`}></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
