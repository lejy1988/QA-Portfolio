import { Mail, MapPin, Linkedin, Github, FileDown } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-white" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
          Get In Touch
        </h2>
        <p className="text-lg text-slate-700 mb-12 max-w-2xl mx-auto">
          I'm always open to discussing QA opportunities, testing projects, or collaborations.
          Feel free to reach out through any of the channels below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <a
            href="mailto:lejy1988@gmail.com"
            className="flex items-center justify-center gap-3 p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors border border-slate-200"
          >
            <Mail className="text-amber-500" size={24} />
            <div className="text-left">
              <p className="text-sm text-slate-600">Email</p>
              <p className="text-slate-900 font-medium">lejy1988@gmail.com</p>
            </div>
          </a>

          <div className="flex items-center justify-center gap-3 p-6 bg-slate-50 rounded-xl border border-slate-200">
            <MapPin className="text-amber-500" size={24} />
            <div className="text-left">
              <p className="text-sm text-slate-600">Location</p>
              <p className="text-slate-900 font-medium">Moray, UK</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <a
            href="https://www.linkedin.com/in/louis-young/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/lejy1988"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
        </div>

        <a
          href="/LouisY - CV - QA.pdf"
          download
          className="inline-flex items-center gap-2 px-8 py-3 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition-colors shadow-md hover:shadow-lg"
        >
          <FileDown size={20} />
          <span>Download Resume</span>
        </a>
      </div>
    </section>
  );
}
