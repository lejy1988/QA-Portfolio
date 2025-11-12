import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'uTest',
    role: 'Freelance QA Tester',
    period: 'September 2025 - Present',
    description: 'Crowdtesting platform contributing to functional and exploratory testing for live client applications.',
    responsibilities: [
      'Logged clear, reproducible bug reports with screenshots and environment details',
      'Tested cross-browser and mobile functionality using structured QA methodologies',
      'Collaborated with global QA teams following professional reporting standards'
    ]
  },
  {
    company: 'Releaf',
    role: 'Patient Support Coordinator',
    period: 'July 2024 - April 2025',
    location: 'Remote',
    description: 'Ensured accuracy and quality in remote workflows with strong process compliance.',
    responsibilities: [
      'Coordinated with distributed teams in structured development environments',
      'Applied process standards to maintain data integrity and workflow efficiency',
      'Managed QA coordination for patient support workflows'
    ]
  },
  {
    company: 'North Bristol NHS Trust',
    role: 'Coordinator / Coder / Technician',
    period: '2018 - 2024',
    description: 'Managed sensitive patient data under strict accuracy and compliance requirements.',
    responsibilities: [
      'Coordinated the Cardiac Waiting List ensuring validated patient records',
      'Applied structured workflows and compliance standards across departments',
      'Maintained data accuracy in high-stakes healthcare environment'
    ]
  },
  {
    company: 'Royal Navy',
    role: 'IT Support (Recruitment Systems)',
    period: '2015 - 2018',
    description: 'Provided IT troubleshooting and maintained secure system processes.',
    responsibilities: [
      'Documented and resolved IT issues to ensure system integrity and security',
      'Supported recruitment systems with structured processes and clear reporting',
      'Protected sensitive data through secure system maintenance'
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-20 px-4 bg-white" id="experience">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">
          Professional Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-amber-100 rounded-lg">
                  <Briefcase className="text-amber-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-slate-900">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-amber-600 font-medium">
                    {exp.company}
                  </p>
                  <p className="text-slate-600">
                    {exp.period} {exp.location && `• ${exp.location}`}
                  </p>
                </div>
              </div>
              <p className="text-slate-700 mb-4">
                {exp.description}
              </p>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex} className="flex items-start gap-3">
                    <span className="text-amber-500 mt-1">•</span>
                    <span className="text-slate-700">{resp}</span>
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
