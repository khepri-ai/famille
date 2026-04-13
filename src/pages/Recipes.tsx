import { motion } from 'motion/react';
import { Search, Sparkles, ArrowRight, Clock, SignalLow, SignalMedium, SignalHigh, Plus } from 'lucide-react';

const categories = [
  'Tout', 'Les classiques de Mamie', 'Dîners rapides', 'Pâtisseries du dimanche', 'Grandes tablées'
];

const recipes = [
  {
    title: 'Pizza Marguerite au levain',
    category: 'Dîners Rapides',
    time: '20min',
    difficulty: 'Facile',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcQfZgAuQycWiqjHu9hKibsIcTkT_HvkrOUb1Zczjofv6-VqnmFU6MXxPDFHqMQN7ohnsLd1rBDi56nACFOxOi4AztN17p5IA7XeTav1uPBye4MKLpbaElatxQomGK2JHwhLPSa0nNk4lKpKprLSLfKYp1xvVlrtqmGu2UZ3pqswjfQxleHFYx96adCAJvKd86RgUKwuP6TI3q6Zqx4lgF3UQyTeVD_fZdeTdxH0Fb0haKw52ij9sgGdknJY9N0PgDejg598vuF8E'
  },
  {
    title: 'Macarons à la Rose de Maman',
    category: 'Pâtisseries',
    time: '2h',
    difficulty: 'Expert',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_8wCCHRlQcgQSpdRvRTGvRueMr1R3WPtNaIXVQp4wsdsFMoYpVIYcFuGmQA2WB4-qyfyg5_9etLPs3EGAIhOj5hWzsj4zesLYrSG2qXggWsEdmsl3Bq5GppdEbD4NeG_1Mo23sQJdyFrkIPKKem-zD5SqqaapPpP_D3F5vroUEnTvKB0XGQfygcM54Ege3opayzrvU792Q95JSYIerTDTbZbl_6BHlVroKOwAB_2ys0cPePlWSm2_T9warkJIDoPgqVwv0-kUSpE'
  },
  {
    title: 'Soupe au Pistou du Grand-Père',
    category: 'Classiques',
    time: '45min',
    difficulty: 'Moyen',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAN16TUCQAcHFvvtDkjmOse9LRpL-i9jrxmnWzmr9i6_QJbVIWP0K2aGNJy3jYhOBydDS8cy8VWBtbP6Q9l8jOcmQ2KQkfo77mqOusQkaUASw0ORUPNkaQpEuZBTripqUWX1spqq064ccvfY60g4ug_VB8joca67mJPkhKl7ESBQpiX8M0LqEaoMlJHVMP32U5Fl3q8IbnVRmpQbNFM1apkblMW2AMQj3qZfueVD5l5XSmcV1pcUuXOBp7mumCRXzr6CvR-r6Bj_dU'
  },
  {
    title: 'Beignets au Chocolat Noir',
    category: 'Pâtisseries',
    time: '1h 15min',
    difficulty: 'Moyen',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASElqOrChajTHctewqrc7zkfcNUmDcABHjKkLT22W4K1koLs-j6t1dPZMFlQ90UoFXGC4yuFEsM-h4GBMqewQstJATNJzKWBew-BR6QvR-VkiszLKtEBpvt-nWfs3FhlqlOcfCo9XK2LcMWHuCdzI7AZ5N3hPQW04vZoovVInUEsXXIj3kuWvzAYOJJ5RKBmqHyeKbk92sciC4UxtF6HP2j5RayNxSfisvgphkGjlQyqOtL37Fit87WvOd-9LSS8nCorspznlMvgI'
  },
  {
    title: 'Bol Vitaminé du Potager',
    category: 'Dîners Rapides',
    time: '15min',
    difficulty: 'Facile',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBciJSoZ3T0FCMeBqyjorxHOHzA8XsNWiqqSfCtgkZvbOLPnYNRv5EFeucFzYB-Z4cbuXaAd2YtCVbzC7xYGeBR9qEm7SSpsqVUF9QiZwa_iNaT-D_zBsb7POO2_vvbFBhEvyDYQiJ73fNKitmfSEV8LkM090qfnph0xgoLc9U-nxcyQi6mnp413jZJtR0_aqV96Ku32hWxgr1I9huQT8g3RLBxtBCuDF8qum8aI2iZVX9QYu6o5z4B-Mdp6625S3Wf2stL6Zbh6ak'
  }
];

export default function Recipes() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-6xl mx-auto px-6 py-12 pb-32"
    >
      <section className="mb-16 border-b border-primary/20 pb-12">
        <h2 className="font-headline text-6xl md:text-7xl text-primary mb-6 tracking-tight leading-tight font-bold">
          Le Grimoire <br /><span className="italic text-on-surface opacity-90">des Saveurs</span>
        </h2>
        <p className="text-on-surface-variant font-medium mb-10 max-w-xl text-lg italic">Retrouvez les secrets culinaires transmis de génération en génération dans notre sanctuaire numérique.</p>
        <div className="relative group max-w-2xl">
          <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
            <Search size={22} className="text-primary" />
          </div>
          <input
            type="text"
            className="w-full bg-surface-container border border-primary/10 rounded-xl py-6 pl-16 pr-8 focus:ring-2 focus:ring-primary/50 transition-all text-on-surface placeholder:text-on-surface-variant/30 font-medium"
            placeholder="Rechercher une recette de famille..."
          />
        </div>
      </section>

      <section className="mb-16 overflow-hidden -mx-6 px-6">
        <div className="flex gap-4 overflow-x-auto pb-6 no-scrollbar">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`whitespace-nowrap px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] transition-all border ${
                idx === 0 
                  ? 'bg-primary text-on-primary border-primary shadow-xl shadow-primary/20' 
                  : 'bg-surface-container border-primary/10 text-on-surface-variant hover:border-primary/40 hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
        <div className="lg:col-span-7 group cursor-pointer relative">
          <div className="relative rounded-xl overflow-hidden h-[500px] mb-6 border border-primary/10">
            <img
              src="https://picsum.photos/seed/lasagna/1200/800"
              alt="Featured Recipe"
              className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-6 left-6 bg-secondary/90 backdrop-blur-md text-on-secondary-fixed px-6 py-2 rounded-lg text-[10px] font-bold uppercase tracking-[0.3em] border border-secondary/50">Coups de cœur</div>
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60"></div>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <h3 className="font-headline text-4xl text-on-surface mb-3 font-bold group-hover:text-primary transition-colors">Les Lasagnes d'Antoinette</h3>
              <div className="flex gap-6 text-primary/70 text-[10px] font-bold uppercase tracking-widest">
                <span className="flex items-center gap-2"><Clock size={16} /> 1h 30min</span>
                <span className="flex items-center gap-2"><SignalHigh size={16} /> Difficile</span>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 flex flex-col justify-center bg-secondary-container/20 p-12 rounded-xl border border-secondary/20 relative overflow-hidden group">
          <div className="absolute -right-12 -bottom-12 opacity-5 group-hover:rotate-12 transition-transform duration-1000">
            <Sparkles size={240} className="text-secondary" />
          </div>
          <Sparkles size={40} className="text-secondary mb-6" />
          <h4 className="font-headline text-3xl text-secondary mb-6 font-bold">Secret du mois</h4>
          <p className="text-on-surface leading-relaxed mb-8 text-xl italic font-headline">"Le secret d'un bon bœuf bourguignon ? Faites mariner la viande 24h avant dans un vin rouge charpenté avec une branche de thym frais du jardin."</p>
          <button className="text-secondary font-bold flex items-center gap-3 group text-xs uppercase tracking-[0.2em] hover:gap-4 transition-all">
            Voir l'astuce complète
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {recipes.map((recipe, idx) => (
          <div key={idx} className="flex flex-col group cursor-pointer">
            <div className="aspect-[4/5] rounded-xl overflow-hidden bg-surface-container mb-6 border border-primary/5 group-hover:border-primary/30 transition-all relative">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="px-1">
              <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-2 block">{recipe.category}</span>
              <h4 className="font-headline text-2xl text-on-surface mb-3 font-bold group-hover:text-primary transition-colors">{recipe.title}</h4>
              <div className="flex gap-6 text-on-surface-variant/60 text-[10px] font-bold uppercase tracking-widest">
                <span className="flex items-center gap-2"><Clock size={14} /> {recipe.time}</span>
                <span className="flex items-center gap-2">
                  {recipe.difficulty === 'Facile' ? <SignalLow size={14} /> : recipe.difficulty === 'Moyen' ? <SignalMedium size={14} /> : <SignalHigh size={14} />}
                  {recipe.difficulty}
                </span>
              </div>
            </div>
          </div>
        ))}
        <div className="flex flex-col border-2 border-dashed border-primary/10 rounded-xl p-12 items-center justify-center text-center bg-primary/5 aspect-[4/5] group hover:border-primary/40 transition-all cursor-pointer">
          <Plus size={48} className="text-primary/40 mb-6 group-hover:scale-110 transition-transform" />
          <h4 className="font-headline text-2xl text-on-surface mb-3 font-bold">Une idée ?</h4>
          <p className="text-on-surface-variant text-sm mb-8 italic">Ajoutez une nouvelle recette au patrimoine de la famille.</p>
          <button className="bg-primary text-on-primary px-10 py-4 rounded-lg font-bold text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-primary/10">Partager</button>
        </div>
      </section>

      <button className="fixed bottom-32 right-6 w-16 h-16 bg-primary text-on-primary rounded-full shadow-2xl shadow-primary/40 flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40 border-4 border-surface">
        <Plus size={32} />
      </button>
    </motion.div>
  );
}
