import { GraduationCap, Award, Heart } from 'lucide-react';

const education = [
  {
    institution: 'Edinburgh College',
    degree: 'Full-Stack Software Engineering Bootcamp',
    period: 'September - November 2025',
    details: [
      'HTML, CSS, JavaScript fundamentals',
      'React.js Components & State Management',
      'Node.js, Express & RESTful APIs',
      'SQL & NoSQL Databases (MySQL, MongoDB)',
      'Automated Testing with Cypress & Postman',
      'Git / GitHub & Version Control'
    ]
  }
];

const certifications = [
  {
    title: 'Software Testing Professional Certificate',
    issuer: 'LambdaTest',
    date: 'October 2025'
  },
  {
    title: 'Responsive Web Design Certificate',
    issuer: 'freeCodeCamp',
    date: 'August 2025'
  }
];

const interests = [
  'Watching movies and exploring storytelling',
  'Playing video games and understanding UX design',
  'Cooking and experimenting with new recipes',
  'Working on tech side projects and learning new tools'
];

export default function Education() {
  return (
    <section className="py-20 px-4 bg-slate-50" id="education">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">
          Education & Certifications
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="text-amber-500" size={32} />
              <h3 className="text-2xl font-semibold text-slate-900">Education</h3>
            </div>
            {education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h4 className="text-xl font-semibold text-slate-900 mb-1">
                  {edu.degree}
                </h4>
                <p className="text-amber-600 font-medium mb-2">
                  {edu.institution}
                </p>
                <p className="text-slate-600 mb-3">{edu.period}</p>
                <ul className="space-y-2">
                  {edu.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-2 text-slate-700">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Award className="text-amber-500" size={32} />
              <h3 className="text-2xl font-semibold text-slate-900">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="pb-4 border-b border-slate-200 last:border-0">
                  <h4 className="text-lg font-semibold text-slate-900 mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-amber-600 font-medium">{cert.issuer}</p>
                  <p className="text-slate-600 text-sm">Issued {cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="text-amber-500" size={32} />
            <h3 className="text-2xl font-semibold text-slate-900">Hobbies & Interests</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {interests.map((interest, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                <p className="text-slate-700">{interest}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
