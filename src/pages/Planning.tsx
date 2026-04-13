import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Clock, Flower2, ShoppingBag, Croissant, Music, Plus } from 'lucide-react';
import { clsx } from 'clsx';

const calendarDays = [
  { day: 27, current: false }, { day: 28, current: false }, { day: 29, current: false }, { day: 30, current: false },
  { day: 1, current: true }, { day: 2, current: true }, { day: 3, current: true, dots: ['primary'] },
  { day: 4, current: true }, { day: 5, current: true, dots: ['secondary', 'primary'] }, { day: 6, current: true },
  { day: 7, current: true }, { day: 8, current: true, today: true }, { day: 9, current: true }, { day: 10, current: true },
];

const agenda = [
  {
    name: 'Marc',
    role: 'Father',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2lucb-Icu6lASORenhUkikjdVvR4ghjyrVBkwEI_GnVDOkT1HvtOUS5QTWqia4IzqWRyat1OE-ZbffRQk6EyGnfEveUDyBkiqtkBo8B0Stw-0vQRJIOc0OPKFJDXy1OixAuMFn6umpxLVq7H2b10BqOa35womF3QuBm-33WnmvROHG-9MMMJdOnmxuW_YNfZZ_CksXUFhCtQdyYTkSee__DY2doJkRBaFiAcnrclf_Hq_1-rGtHsWMLO8o7sn6zxMHobVxw1DO30',
    events: [
      { title: 'Garden Harvest & Mulching', time: '08:30 AM — 11:00 AM', icon: Flower2, color: 'border-primary' }
    ]
  },
  {
    name: 'Elena',
    role: 'Mother',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANSwCwv5cW0vFEyyb3MakZw8XdD-qGB_KqgylojRQi4CQ9NkyyPhnG8465ckkvzEb1ojgq8L-VVjalcOXi-2j2UHgBAY83f9dcpDaMUj6bilQpKGPENX-0kiHLMIt4yxD5qJv7zEZlqGyIivI9nQ1P75vAM2k9oGEVOI34BTIGNeCezvO5MqK1HucJYsSPjS0YjNM0qVPhWiIzWDNnjfOEuK-HoTLkrGk-o6hifcO55XwUxksj1dtzc4DPvlgbiIrZ1YG00q2Xovw',
    events: [
      { title: 'Community Market Prep', time: '01:00 PM — 04:00 PM', icon: ShoppingBag, color: 'border-secondary' },
      { title: 'Sourdough Workshop', time: '06:00 PM — 08:00 PM', icon: Croissant, color: 'border-secondary' }
    ]
  },
  {
    name: 'Thomas',
    role: 'Son',
    avatar: '👦',
    events: [
      { title: 'Piano Practice', time: '04:30 PM — 05:30 PM', icon: Music, color: 'border-tertiary' }
    ]
  }
];

export default function Planning() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-6xl mx-auto px-6 py-12 pb-32"
    >
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-primary/20 pb-8">
        <div>
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-3 block">Chronogramme Familial</span>
          <h2 className="font-headline text-5xl font-bold text-on-surface">Septembre 2024</h2>
        </div>
        <div className="flex gap-3">
          <button className="p-4 bg-surface-container border border-primary/10 rounded-xl hover:bg-primary/10 hover:text-primary transition-all">
            <ChevronLeft size={24} />
          </button>
          <button className="p-4 bg-surface-container border border-primary/10 rounded-xl hover:bg-primary/10 hover:text-primary transition-all">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <section className="bg-surface-container-high rounded-xl p-8 md:p-10 mb-16 border border-primary/10 shadow-2xl">
        <div className="grid grid-cols-7 gap-4 md:gap-6 mb-8">
          {['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'].map(d => (
            <div key={d} className="text-center text-[10px] font-bold text-primary uppercase tracking-[0.2em]">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-3 md:gap-4">
          {calendarDays.map((d, idx) => (
            <div
              key={idx}
              className={clsx(
                'aspect-square rounded-xl flex flex-col items-center justify-center relative transition-all border',
                !d.current && 'bg-surface/20 border-transparent text-on-surface-variant/20',
                d.current && !d.today && 'bg-surface-container-low border-primary/5 hover:border-primary/30 text-on-surface',
                d.today && 'bg-primary border-primary text-on-primary shadow-xl shadow-primary/20 scale-105 z-10'
              )}
            >
              <span className="font-headline text-2xl font-bold">{d.day}</span>
              {d.today && <span className="text-[8px] font-bold uppercase tracking-widest mt-1">Aujourd'hui</span>}
              {d.dots && (
                <div className="absolute bottom-3 flex gap-1">
                  {d.dots.map((dot, i) => (
                    <div key={i} className={clsx('w-1.5 h-1.5 rounded-full', dot === 'primary' ? 'bg-primary' : 'bg-secondary')} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="flex items-center gap-6 mb-12">
        <h3 className="font-headline text-3xl font-bold text-primary">Le Pouls du Jour</h3>
        <div className="h-px bg-primary/20 flex-grow"></div>
      </div>

      <div className="space-y-8">
        {agenda.map((person, idx) => (
          <div key={idx} className="group flex flex-col md:flex-row gap-8 p-8 bg-surface-container-low rounded-xl border border-outline-variant/5 hover:border-primary/20 transition-all duration-500">
            <div className="flex items-center gap-6 md:w-1/3">
              <div className="relative p-1 rounded-full bg-gradient-to-tr from-primary to-primary-container">
                {typeof person.avatar === 'string' && person.avatar.startsWith('http') ? (
                  <img
                    src={person.avatar}
                    alt={person.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-surface"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-surface-container border-2 border-surface flex items-center justify-center text-3xl">
                    {person.avatar}
                  </div>
                )}
              </div>
              <div>
                <p className="font-bold text-xl text-on-surface">{person.name}</p>
                <p className="text-[10px] text-primary font-bold uppercase tracking-[0.2em]">{person.role}</p>
              </div>
            </div>
            <div className="flex-grow space-y-4">
              {person.events.map((event, eIdx) => (
                <div key={eIdx} className={clsx('bg-surface-container-high rounded-xl p-6 border-l-4 shadow-xl flex justify-between items-center group/event hover:bg-surface-container-highest transition-colors', event.color.replace('border-', 'border-l-'))}>
                  <div>
                    <p className="font-bold text-lg text-on-surface group-hover/event:text-primary transition-colors">{event.title}</p>
                    <p className="text-xs text-on-surface-variant flex items-center gap-2 mt-2 font-medium">
                      <Clock size={16} className="text-primary" /> {event.time}
                    </p>
                  </div>
                  <div className={clsx('p-3 rounded-lg bg-surface', event.color.replace('border-', 'text-'))}>
                    <event.icon size={24} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button className="fixed bottom-32 right-6 w-16 h-16 bg-primary text-on-primary rounded-full shadow-2xl shadow-primary/40 flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40 border-4 border-surface">
        <Plus size={32} />
      </button>
    </motion.div>
  );
}
