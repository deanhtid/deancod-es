export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#070b14]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-7 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© {new Date().getFullYear()} Dean Whittaker</p>
        <p>Senior Platform Engineer · Sunderland, UK</p>
      </div>
    </footer>
  );
}
