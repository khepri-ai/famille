import { motion } from 'motion/react';
import { Play, Share2, Heart, PartyPopper, Snowflake, Download } from 'lucide-react';

export default function Photos() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="max-w-6xl mx-auto px-6 py-12 pb-32"
    >
      <section className="mb-16 border-b border-primary/20 pb-12">
        <div className="flex flex-col mb-8">
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-3 block">Archives Visuelles</span>
          <h2 className="font-headline text-6xl text-on-surface leading-tight font-bold">Récapitulatif de Janvier</h2>
        </div>

        <div className="relative group rounded-xl overflow-hidden bg-surface-container aspect-video shadow-2xl border border-primary/10">
          <img
            src="https://picsum.photos/seed/winter/1200/800"
            alt="Winter family meal"
            className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all group-hover:bg-black/20">
            <button className="w-24 h-24 bg-primary/20 backdrop-blur-xl rounded-full flex items-center justify-center text-primary border border-primary/40 shadow-2xl hover:scale-110 transition-transform">
              <Play size={48} className="fill-current" />
            </button>
          </div>
          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
            <div className="text-on-surface">
              <p className="font-headline italic text-2xl font-bold">"Les premiers flocons"</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mt-2">Durée: 02:45</p>
            </div>
            <button className="bg-primary/20 backdrop-blur-md p-4 rounded-xl text-primary border border-primary/30 hover:bg-primary hover:text-on-primary transition-all">
              <Share2 size={24} />
            </button>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <div className="grid grid-cols-12 gap-6 auto-rows-[140px]">
          <div className="col-span-7 row-span-3 rounded-xl overflow-hidden relative border border-primary/20 shadow-2xl group">
            <img
              src="https://picsum.photos/seed/games/800/1200"
              alt="Family playing games"
              className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 left-6 bg-primary/90 backdrop-blur-md px-4 py-2 rounded-lg text-[10px] font-bold text-on-primary uppercase tracking-[0.2em] border border-primary/50">Jeux du Dimanche</div>
          </div>

          <div className="col-span-5 row-span-2 rounded-xl overflow-hidden relative border border-primary/20 shadow-2xl group">
            <img
              src="https://picsum.photos/seed/snow/800/800"
              alt="Snowy garden"
              className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-6 right-6 bg-primary/20 backdrop-blur-md p-3 rounded-full border border-primary/40">
              <Heart size={20} className="text-primary fill-current" />
            </div>
          </div>

          <div className="col-span-5 row-span-2 bg-secondary-container/10 p-8 rounded-xl flex flex-col justify-center border border-secondary/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
            <p className="font-headline italic text-on-surface leading-relaxed text-xl">
              "Un mois de calme et de rires sous la neige. On se souviendra longtemps du chocolat chaud de Mamie."
            </p>
          </div>

          <div className="col-span-12 row-span-2 rounded-xl overflow-hidden relative mt-6 border border-primary/10 shadow-2xl group">
            <img
              src="https://picsum.photos/seed/baking/1600/900"
              alt="Baking session"
              className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-8 left-8">
              <h4 className="text-on-surface font-headline text-3xl font-bold">L'atelier pâtisserie du samedi</h4>
              <p className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mt-2">Cuisine & Transmission</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-16 mb-16">
        <div className="space-y-8">
          <h3 className="font-headline text-3xl text-primary border-b border-primary/10 pb-4 font-bold">Les Temps Forts</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-6 p-6 bg-surface-container rounded-xl border border-primary/5 hover:border-primary/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary group-hover:text-on-primary transition-all">
                <PartyPopper size={24} />
              </div>
              <div>
                <h4 className="font-bold text-on-surface text-lg">Anniversaire de Lucas</h4>
                <p className="text-on-surface-variant text-sm mt-2 italic">Une journée magique avec tous ses cousins. Le gâteau aux dinosaures a fait sensation !</p>
              </div>
            </div>
            <div className="flex items-start gap-6 p-6 bg-surface-container rounded-xl border border-primary/5 hover:border-primary/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary group-hover:text-on-primary transition-all">
                <Snowflake size={24} />
              </div>
              <div>
                <h4 className="font-bold text-on-surface text-lg">Premier Week-end au Ski</h4>
                <p className="text-on-surface-variant text-sm mt-2 italic">Clara a enfin lâché le chasse-neige. Des souvenirs gravés dans la poudreuse.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-high rounded-xl p-10 flex flex-col justify-between border border-primary/10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-12 -top-12 opacity-5">
            <Download size={240} className="text-primary" />
          </div>
          <div className="relative z-10">
            <h3 className="font-headline text-2xl mb-10 text-primary font-bold uppercase tracking-widest">Le mois en chiffres</h3>
            <div className="grid grid-cols-2 gap-10">
              <div className="flex flex-col">
                <span className="font-headline text-5xl text-on-surface font-bold">142</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold mt-2">Clichés</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-5xl text-on-surface font-bold">12</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold mt-2">Recettes</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-5xl text-on-surface font-bold">8</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold mt-2">Sorties</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-5xl text-on-surface font-bold">4</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold mt-2">Vidéos</span>
              </div>
            </div>
          </div>
          <button className="mt-12 w-full bg-primary text-on-primary py-5 rounded-xl font-bold text-[10px] uppercase tracking-[0.3em] shadow-2xl shadow-primary/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 border border-primary/50">
            <Download size={20} />
            Exporter l'Album Technique
          </button>
        </div>
      </section>
    </motion.div>
  );
}
