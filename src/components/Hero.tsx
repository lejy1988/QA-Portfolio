import { Github, Linkedin, Mail, FileDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4 tracking-tight">
          Louis Young
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-6 font-light">
          QA Engineer & Manual Tester | Manual & Automation Testing
        </p>
        <p className="text-lg text-slate-500 mb-8">
          Moray, UK
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <a
            href="https://www.linkedin.com/in/louis-young/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-slate-700 hover:text-slate-900 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/lejy1988"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-slate-700 hover:text-slate-900 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a
            href="mailto:lejy1988@gmail.com"
            className="flex items-center gap-2 px-4 py-2 text-slate-700 hover:text-slate-900 transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
            <span>lejy1988@gmail.com</span>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition-colors shadow-md hover:shadow-lg"
          >
            View My Work
          </a>
          <a
            href="/LouisY - CV - QA.pdf"
            download
            className="flex items-center gap-2 px-8 py-3 bg-slate-800 text-white font-medium rounded-lg hover:bg-slate-900 transition-colors shadow-md hover:shadow-lg"
          >
            <FileDown size={20} />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}
