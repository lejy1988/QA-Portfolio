export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-slate-400">
          &copy; {new Date().getFullYear()} Louis Young. All rights reserved.
        </p>
        <p className="text-slate-500 text-sm mt-2">
          Built with React, TypeScript, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
