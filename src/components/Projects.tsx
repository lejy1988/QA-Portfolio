import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'MKWATCHES E-commerce Site',
    description: 'PHP/MySQL e-commerce application with CRUD functionality. Led QA efforts ensuring consistent performance and data accuracy. Includes manual and automated Cypress tests covering product management, checkout flows, and backend validation.',
    github: 'https://github.com/lejy1988/MKWATCHES',
    live: 'https://lejy1988.github.io/MKWATCHES/',
    tags: ['PHP', 'MySQL', 'Cypress', 'QA Testing', 'E-commerce']
  },
  {
    title: 'Lemonade Stand Game',
    description: 'Browser-based simulation game built with modular JavaScript. Conducted exploratory testing and validated user input handling across pricing, demand, and weather mechanics to ensure reliable gameplay.',
    github: 'https://github.com/lejy1988/Lemonade',
    live: 'https://lejy1988.github.io/Lemonade/',
    tags: ['JavaScript', 'Game Development', 'Testing', 'UI/UX']
  }
];

export default function Projects() {
  return (
    <section className="py-20 px-4 bg-white" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                {project.title}
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors"
                >
                  <Github size={18} />
                  <span>View Code</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
                >
                  <ExternalLink size={18} />
                  <span>Live Site</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
