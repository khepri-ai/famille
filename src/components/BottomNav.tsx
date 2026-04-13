import { 
  CalendarDays, 
  Camera, 
  MapPin, 
  Cloud, 
  FileText, 
  UtensilsCrossed, 
  Star, 
  Gamepad2 
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { clsx } from 'clsx';

export default function BottomNav() {
  const navItems = [
    { icon: CalendarDays, label: 'Planning', path: '/planning' },
    { icon: Camera, label: 'Photo', path: '/photos' },
    { icon: MapPin, label: 'GPS Famille', path: '/gps' },
    { icon: Cloud, label: 'Le Cloud', path: '#' },
    { icon: FileText, label: 'Note', path: '#' },
    { icon: UtensilsCrossed, label: 'Recettes', path: '/recipes' },
    { icon: Star, label: 'Favoris', path: '/favorites' },
    { icon: Gamepad2, label: 'Jeux', path: '#' },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-320px)] min-w-[300px] h-20 z-50 flex justify-between items-center px-6 bg-surface/95 backdrop-blur-xl border border-primary/20 rounded-xl shadow-[0_-10px_50px_rgba(0,0,0,0.5)] overflow-x-auto no-scrollbar">
      <div className="flex justify-around w-full min-w-max gap-1">
        {navItems.map((item, idx) => (
          <NavLink
            key={idx}
            to={item.path}
            className={({ isActive }) =>
              clsx(
                'flex flex-col items-center justify-center px-3 py-2 transition-all duration-300 rounded-xl min-w-[64px]',
                isActive && item.path !== '#'
                  ? 'bg-primary/10 text-primary scale-105'
                  : 'text-on-surface-variant hover:text-primary hover:scale-105'
              )
            }
          >
            <item.icon size={18} className="mb-1" />
            <span className="font-body text-[8px] font-bold uppercase tracking-tighter text-center whitespace-nowrap">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
