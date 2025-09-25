import { useState } from "react";

type FilterType = 'all' | 'frontend' | 'backend' | 'devops' | 'design';

interface TechItem {
  name: string;
  icon: string;
  level: number;
  status: string;
  category: FilterType[];
}

const techStack: TechItem[] = [
  { name: "React", icon: "fab fa-react", level: 83, status: "Mastered", category: ["frontend"] },
  { name: "Next.js", icon: "fab fa-js", level: 80, status: "Mastered", category: ["frontend"] },
  { name: "TypeScript", icon: "fab fa-js", level: 80, status: "Mastered", category: ["frontend"] },
  { name: "Tailwind CSS", icon: "fab fa-css3-alt", level: 83, status: "Mastered", category: ["frontend"] },
  { name: "JavaScript", icon: "fab fa-js-square", level: 100, status: "Mastered", category: ["frontend"] },
  { name: "HTML5", icon: "fab fa-html5", level: 100, status: "Mastered", category: ["frontend"] },
  { name: "Node.js", icon: "fab fa-node-js", level: 80, status: "Proficient", category: ["backend"] },
  { name: "MongoDB", icon: "fas fa-database", level: 75, status: "Proficient", category: ["backend"] },
  { name: "Firebase", icon: "fas fa-fire", level: 60, status: "Currently Learning", category: ["backend"] },
  { name: "Git", icon: "fab fa-git-alt", level: 83, status: "Mastered", category: ["devops"] },
  { name: "Docker", icon: "fab fa-docker", level: 75, status: "Proficient", category: ["devops"] },
  { name: "AWS", icon: "fab fa-aws", level: 60, status: "Currently Learning", category: ["devops"] },
  { name: "Figma", icon: "fab fa-figma", level: 80, status: "Proficient", category: ["design"] },
];

const chartColorClasses = [
  { text: "text-chart-1", bg: "bg-chart-1" },
  { text: "text-chart-2", bg: "bg-chart-2" },
  { text: "text-chart-3", bg: "bg-chart-3" },
  { text: "text-chart-4", bg: "bg-chart-4" },
  { text: "text-chart-5", bg: "bg-chart-5" }
];

export default function TechStackSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredTech = techStack.filter(tech => 
    activeFilter === 'all' || tech.category.includes(activeFilter)
  );

  const getChartColorClasses = (index: number) => {
    return chartColorClasses[index % chartColorClasses.length];
  };

  return (
    <section className="py-20 px-6" data-testid="tech-stack-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="tech-stack-title">Tech Stack</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="tech-stack-description">
            Modern technologies I use to build exceptional digital experiences, with expertise in frontend, backend, and development operations.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(['all', 'frontend', 'backend', 'devops', 'design'] as FilterType[]).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-card-foreground border border-border hover:bg-accent hover:text-accent-foreground'
              }`}
              data-testid={`filter-${filter}`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6" data-testid="tech-grid">
          {filteredTech.map((tech, index) => (
            <div
              key={tech.name}
              className="bg-card rounded-xl p-6 text-center hover:bg-accent transition-all duration-300 transform hover:scale-105 cursor-pointer animate-fade-in"
              data-testid={`tech-item-${tech.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            >
              <i className={`${tech.icon} text-4xl ${getChartColorClasses(index).text} mb-3`}></i>
              <h3 className="font-semibold mb-2">{tech.name}</h3>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className={`${getChartColorClasses(index).bg} h-2 rounded-full transition-all duration-500`}
                  style={{ width: `${tech.level}%` }}
                ></div>
              </div>
              <span className="text-xs text-muted-foreground mt-1 block">{tech.status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
