import { CheckCircle2 } from 'lucide-react';

const skillCategories = [
  {
    title: 'Testing Tools',
    skills: ['Cypress', 'Selenium', 'Postman', 'Jira', 'Manual Testing', 'Exploratory Testing']
  },
  {
    title: 'Programming Languages',
    skills: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL', 'PHP']
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React.js', 'Node.js', 'Express', 'MySQL', 'MongoDB']
  },
  {
    title: 'Tools & Methodologies',
    skills: ['GitHub', 'Git', 'CI/CD', 'Agile', 'Cross-Browser Testing', 'API Testing']
  }
];

export default function Skills() {
  return (
    <section className="py-20 px-4 bg-slate-50" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-amber-500 flex-shrink-0" />
                    <span className="text-slate-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
