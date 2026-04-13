import { motion } from 'motion/react';
import { Play, Share2, Heart, PartyPopper, Snowflake, Download } from 'lucide-react';

export default function Photos() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="max-w-screen-md mx-auto px-4 pb-32 pt-8"
    >
      <section className="mb-12">
        <div className="flex flex-col mb-8 ml-4">
          <span className="text-tertiary font-medium tracking-[0.2em] uppercase text-xs mb-2">Souvenirs Précieux</span>
          <h2 className="font-headline text-5xl text-on-surface leading-tight -ml-1">Récapitulatif de Janvier</h2>
        </div>

        <div className="relative group rounded-xl overflow-hidden bg-surface-container-highest aspect-video shadow-sm ring-1 ring-outline-variant/10">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxdVAAbG52MHJgeGHlsPYK7VEtWIHxlcKZiGlM0IJSpJTMs1XPG_6XxXCTjx7BKtyRKeeGYoBiyflSZ4u_8IYREhWKZF_GdI4PdVz1P7Ccr2CnZnbFyuQmLZm5jnsO9y3kX0vFBmUf-QWjgB5CdTA0XsjZnQptp91rJENOHIoNaogZdka5W8Gmjf0Fr9r4OM0FhyUTVlPrH4PsX2Vx7IstrxfARLLklOf6reLykfCh78BGtDe49TUJZSG_ynhkaX0ow0ML_CbfSIg"
            alt="Winter family meal"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-on-surface/20 flex items-center justify-center transition-all group-hover:bg-on-surface/30">
            <button className="w-20 h-20 bg-surface/90 backdrop-blur-md rounded-full flex items-center justify-center text-primary shadow-xl hover:scale-110 transition-transform">
              <Play size={48} className="fill-current" />
            </button>
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
            <div className="text-surface drop-shadow-md">
              <p className="font-headline italic text-lg">"Les premiers flocons"</p>
              <p className="text-xs font-medium opacity-90 uppercase tracking-widest">Durée: 02:45</p>
            </div>
            <button className="bg-surface/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-surface/40 transition-colors">
              <Share2 size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="grid grid-cols-12 gap-4 auto-rows-[120px]">
          <div className="col-span-7 row-span-3 rounded-lg overflow-hidden relative rotate-[-1deg] shadow-sm ring-4 ring-white">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuARMKYf-w9MTOdr5D1Lxa6XY4yFxRjABxfJYO6vGMB2z629w394Uy9bNSswJqwpSDhVx7tEAbDP9CSlGfaWl6JBxLbQ9KMPewuU4tb6sZgfFyhH9clRrH8ownFO4YAlzIQMLmTnmghUWmSeLK8w09LapZ4yofFNIw3ZP4Au0LPnQGmGRPaVJF4Ly9Pb0EvG-NN0AVqTeT22TqEyiCyYKQPaPFz642lNj0LXPruzPHj4wNo_Y-_jLyKgalJBGS64PwqInTudrIP-5-c"
              alt="Family playing games"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-3 left-3 bg-white/90 px-3 py-1 rounded text-[10px] font-bold text-secondary uppercase tracking-tighter">Jeux du Dimanche</div>
          </div>

          <div className="col-span-5 row-span-2 rounded-lg overflow-hidden relative rotate-[2deg] shadow-sm ring-4 ring-white">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl0c1DkvY6BzcA44TFS4F26JCUnnA5wMlbuJWUbzV43idetC3nd2hRoRVHoBI_Jcghsk69uiBZ00qBdLW7WbWXqokc-NigU4cAv8pRoyJjtEba5gEnOGYUA2U8BhJL4wUDcQM-hTEpEw9WPxBdvqVhWMpUtRJ28VfeReGVDxI-ZOLkv5LnSXUUQL8LPfz3NHT740LpRrkTWhO8WWK9RuYY73u6JP9gOL_7tjbTDSx3V94zLdxvr4oIBNht2lQaWY3YLkrFhuL7lFk"
              alt="Snowy garden"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-3 right-3 bg-white/90 p-2 rounded-full">
              <Heart size={16} className="text-primary fill-current" />
            </div>
          </div>

          <div className="col-span-5 row-span-2 bg-secondary-fixed p-6 rounded-lg flex flex-col justify-center shadow-inner mt-2">
            <p className="font-headline italic text-on-secondary-fixed leading-relaxed text-sm">
              "Un mois de calme et de rires sous la neige. On se souviendra longtemps du chocolat chaud de Mamie."
            </p>
          </div>

          <div className="col-span-12 row-span-2 rounded-lg overflow-hidden relative mt-4 shadow-sm ring-1 ring-outline-variant/5">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWklLCAd9lDWciN4EeiqY8p2WocLchpB3daYrNuXOp0KvjjD7gz9Gmj1mJ1ms0OQhGZZiM9PAcuaiIntWZQ74G5RafMZf0ZMd1elyOvr8bQqiKR405zZvBaCMAKkZIqg70CwzfqIXIeqZuIcg_WP4qjGB4_JXsDoCccbNZOOP2u9MQzVFyA5wTh3pe8O0nVTxPlIjKdX674TwLCLtbKw3X5QC4jgDemjgr_-QoL3jkuGZ0RI02FlFglCtB0NnHs9chO6kPg12pk5o"
              alt="Baking session"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <h4 className="text-white font-headline text-xl">L'atelier pâtisserie du samedi</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-6">
          <h3 className="font-headline text-2xl text-primary border-l-4 border-primary/20 pl-4">Les Temps Forts</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center shrink-0">
                <PartyPopper size={16} className="text-tertiary" />
              </div>
              <div>
                <h4 className="font-bold text-on-surface text-sm">Anniversaire de Lucas</h4>
                <p className="text-on-surface-variant text-sm mt-1">Une journée magique avec tous ses cousins. Le gâteau aux dinosaures a fait sensation !</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center shrink-0">
                <Snowflake size={16} className="text-tertiary" />
              </div>
              <div>
                <h4 className="font-bold text-on-surface text-sm">Premier Week-end au Ski</h4>
                <p className="text-on-surface-variant text-sm mt-1">Clara a enfin lâché le chasse-neige. Des souvenirs gravés dans la poudreuse.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface-container rounded-xl p-8 flex flex-col justify-between">
          <div>
            <h3 className="font-headline text-xl mb-6">Le mois en chiffres</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col">
                <span className="font-headline text-3xl text-primary">142</span>
                <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Photos</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-3xl text-primary">12</span>
                <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Recettes</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-3xl text-primary">8</span>
                <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Sorties</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-3xl text-primary">4</span>
                <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Vidéos</span>
              </div>
            </div>
          </div>
          <button className="mt-8 w-full bg-gradient-to-br from-primary to-primary-container text-white py-3 rounded-full font-bold text-sm shadow-lg shadow-primary/10 hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
            <Download size={18} />
            Exporter l'Album
          </button>
        </div>
      </section>
    </motion.div>
  );
}
