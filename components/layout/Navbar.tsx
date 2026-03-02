'use client';

const navItems = [
  { label: '서비스', id: 'services' },
  { label: '시공 사례', id: 'portfolio' },
  { label: '견적 문의', id: 'contact' },
];

export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-lg font-black tracking-tight text-neutral-900">
          YH Interior
        </span>
        <nav className="flex items-center gap-1">
          {navItems.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="px-4 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
