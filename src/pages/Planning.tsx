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
      className="max-w-5xl mx-auto px-6 pt-4 pb-32"
    >
      <div className="mb-8 mt-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-tertiary font-semibold tracking-[0.2em] uppercase text-xs mb-2 block">Our Schedule</span>
          <h2 className="font-headline text-4xl font-bold text-on-surface">September 2024</h2>
        </div>
        <div className="flex gap-2">
          <button className="p-3 bg-surface-container rounded-full hover:bg-surface-container-high transition-colors">
            <ChevronLeft size={24} />
          </button>
          <button className="p-3 bg-surface-container rounded-full hover:bg-surface-container-high transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <section className="bg-surface-container rounded-xl p-6 md:p-8 mb-12 border border-outline-variant/10">
        <div className="grid grid-cols-7 gap-2 md:gap-4 mb-4">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
            <div key={d} className="text-center text-xs font-bold text-on-surface-variant uppercase tracking-tighter">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2 md:gap-4">
          {calendarDays.map((d, idx) => (
            <div
              key={idx}
              className={clsx(
                'aspect-square rounded-lg flex flex-col items-center justify-center relative transition-all',
                !d.current && 'bg-surface/40 text-on-surface-variant/30',
                d.current && !d.today && 'bg-surface-container-low shadow-sm',
                d.today && 'bg-primary-container text-white shadow-md scale-105'
              )}
            >
              <span className="font-headline text-lg">{d.day}</span>
              {d.today && <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Today</span>}
              {d.dots && (
                <div className="absolute bottom-2 flex gap-0.5">
                  {d.dots.map((dot, i) => (
                    <div key={i} className={clsx('w-1 h-1 rounded-full', dot === 'primary' ? 'bg-primary' : 'bg-secondary')} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="flex items-center gap-4 mb-8">
        <h3 className="font-headline text-3xl font-bold">Today's Heartbeat</h3>
        <div className="h-px bg-outline-variant flex-grow opacity-30"></div>
      </div>

      <div className="space-y-6">
        {agenda.map((person, idx) => (
          <div key={idx} className="group flex flex-col md:flex-row gap-6 p-6 bg-surface-container-low rounded-lg hover:bg-surface-container transition-colors duration-300">
            <div className="flex items-center gap-4 md:w-1/4">
              {typeof person.avatar === 'string' && person.avatar.startsWith('http') ? (
                <img
                  src={person.avatar}
                  alt={person.name}
                  className="w-14 h-14 rounded-full bg-primary-fixed border-4 border-surface"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-14 h-14 rounded-full bg-tertiary-fixed border-4 border-surface flex items-center justify-center text-2xl">
                  {person.avatar}
                </div>
              )}
              <div>
                <p className="font-bold text-lg">{person.name}</p>
                <p className="text-xs text-tertiary font-semibold uppercase tracking-widest">{person.role}</p>
              </div>
            </div>
            <div className="flex-grow space-y-4">
              {person.events.map((event, eIdx) => (
                <div key={eIdx} className={clsx('bg-surface rounded-lg p-4 border-l-4 shadow-sm flex justify-between items-center', event.color)}>
                  <div>
                    <p className="font-bold text-on-surface">{event.title}</p>
                    <p className="text-sm text-on-surface-variant flex items-center gap-1 mt-1">
                      <Clock size={14} /> {event.time}
                    </p>
                  </div>
                  <event.icon size={24} className={clsx(event.color.replace('border-', 'text-'))} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button className="fixed bottom-28 right-8 w-16 h-16 bg-gradient-to-br from-primary to-primary-container text-white rounded-xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform z-40">
        <Plus size={32} />
      </button>
    </motion.div>
  );
}
