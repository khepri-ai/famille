import { Home, Calendar, Image, UtensilsCrossed } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { clsx } from 'clsx';

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Calendar, label: 'Planning', path: '/planning' },
  { icon: Image, label: 'Photos', path: '/photos' },
  { icon: UtensilsCrossed, label: 'Recipes', path: '/recipes' },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-surface/90 backdrop-blur-xl rounded-t-[2.5rem] shadow-[0_-4px_40px_rgba(27,29,14,0.06)]">
      {navItems.map(({ icon: Icon, label, path }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            clsx(
              'flex flex-col items-center justify-center px-5 py-2 transition-all duration-300 rounded-full',
              isActive
                ? 'bg-surface-container text-primary scale-105'
                : 'text-on-surface/50 hover:scale-105'
            )
          }
        >
          <Icon size={24} className={clsx('mb-1')} />
          <span className="font-body text-[11px] font-semibold uppercase tracking-wider">{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
