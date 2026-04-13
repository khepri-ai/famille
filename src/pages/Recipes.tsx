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
      className="max-w-5xl mx-auto px-6 pt-8 pb-32"
    >
      <section className="mb-12">
        <h2 className="font-headline text-5xl md:text-6xl text-on-surface mb-4 tracking-tight leading-tight">
          Le Grimoire <br /><span className="italic text-primary">des Saveurs</span>
        </h2>
        <p className="text-on-surface-variant font-medium mb-8 max-w-md">Retrouvez les secrets culinaires transmis de génération en génération dans notre sanctuaire numérique.</p>
        <div className="relative group">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
            <Search size={20} className="text-tertiary" />
          </div>
          <input
            type="text"
            className="w-full bg-surface-container-highest border-none rounded-xl py-5 pl-14 pr-6 focus:ring-2 focus:ring-primary/30 transition-all text-on-surface placeholder:text-on-surface-variant/50"
            placeholder="Rechercher une recette de famille..."
          />
        </div>
      </section>

      <section className="mb-12 overflow-hidden -mx-6 px-6">
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`whitespace-nowrap px-6 py-3 rounded-full font-semibold transition-all ${
                idx === 0 ? 'bg-primary-container text-on-primary shadow-sm' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
        <div className="md:col-span-7 group cursor-pointer">
          <div className="relative rounded-lg overflow-hidden h-[400px] mb-4">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOrf3nPVplhk3ZkoPWuzSSttltsZkbQr3rl45IDbyvDbE4hI6gjBwwLfJmO1aiRoY5l6kIer6xgmT_C5zkrS85RaMAEFMqiBRriPQGmRThPZL_uybXISjN4CyHal2VK1GUpmt1ubklur7mQjnVF79YD2A44I1L2e9RnW0eVK_VfPsloySykezpb9CXb0ShBYIbLfP7sGe4pO7qsP04rGHKY7Hbo9unRaZBzrx_IDoVq5663l9OpJNA36CXRgsZRzTldQ-Pq79Hs1Y"
              alt="Featured Recipe"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-secondary-container/90 backdrop-blur-sm text-on-secondary-container px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Coups de cœur</div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-headline text-3xl text-on-surface mb-2">Les Lasagnes d'Antoinette</h3>
              <div className="flex gap-4 text-on-surface-variant text-sm font-medium">
                <span className="flex items-center gap-1"><Clock size={16} /> 1h 30min</span>
                <span className="flex items-center gap-1"><SignalHigh size={16} /> Difficile</span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 flex flex-col justify-center bg-secondary-fixed p-8 rounded-xl">
          <Sparkles size={32} className="text-tertiary mb-4" />
          <h4 className="font-headline text-2xl text-on-secondary-fixed mb-4">Secret du mois</h4>
          <p className="text-on-secondary-fixed-variant leading-relaxed mb-6">"Le secret d'un bon bœuf bourguignon ? Faites mariner la viande 24h avant dans un vin rouge charpenté avec une branche de thym frais du jardin."</p>
          <button className="text-on-secondary-fixed font-bold flex items-center gap-2 group">
            Voir l'astuce complète
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
        {recipes.map((recipe, idx) => (
          <div key={idx} className="flex flex-col group cursor-pointer">
            <div className="aspect-[4/5] rounded-lg overflow-hidden bg-surface-container-high mb-4">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="px-2">
              <span className="text-tertiary text-xs font-bold uppercase tracking-widest mb-1 block">{recipe.category}</span>
              <h4 className="font-headline text-xl text-on-surface mb-2">{recipe.title}</h4>
              <div className="flex gap-4 text-on-surface-variant text-xs font-semibold">
                <span className="flex items-center gap-1"><Clock size={14} /> {recipe.time}</span>
                <span className="flex items-center gap-1">
                  {recipe.difficulty === 'Facile' ? <SignalLow size={14} /> : recipe.difficulty === 'Moyen' ? <SignalMedium size={14} /> : <SignalHigh size={14} />}
                  {recipe.difficulty}
                </span>
              </div>
            </div>
          </div>
        ))}
        <div className="flex flex-col border-2 border-dashed border-outline-variant/30 rounded-lg p-8 items-center justify-center text-center bg-surface-container-low/50 aspect-[4/5]">
          <Plus size={40} className="text-outline-variant mb-4" />
          <h4 className="font-headline text-xl text-on-surface mb-2">Une idée ?</h4>
          <p className="text-on-surface-variant text-sm mb-6">Ajoutez une nouvelle recette au patrimoine de la famille.</p>
          <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-bold text-sm">Partager</button>
        </div>
      </section>

      <div className="fixed bottom-28 right-6 z-40">
        <button className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-container text-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
          <Plus size={32} />
        </button>
      </div>
    </motion.div>
  );
}
