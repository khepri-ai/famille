import { motion, AnimatePresence } from 'motion/react';
import { User, Mail, MapPin, Shield, Bell, LogOut, ChevronRight, Edit2, Check, X, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const { user, profile, loading, login, logout, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tempUser, setTempUser] = useState<any>(null);

  // Initialize tempUser when profile is loaded
  useEffect(() => {
    if (profile) {
      setTempUser({ ...profile });
    }
  }, [profile]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (!user) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto px-6 pt-20 text-center space-y-8"
      >
        <div className="w-24 h-24 bg-surface-container rounded-full flex items-center justify-center mx-auto text-on-surface-variant">
          <User size={48} />
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-bold font-headline">Connectez-vous</h2>
          <p className="text-on-surface-variant">Rejoignez votre tribu pour partager votre position et vos moments en famille.</p>
        </div>
        <button
          onClick={login}
          className="w-full py-4 bg-primary text-on-primary rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg hover:bg-primary/90 transition-all active:scale-95"
        >
          <LogIn size={20} />
          Se connecter avec Google
        </button>
      </motion.div>
    );
  }

  const handleSave = async () => {
    if (!tempUser) return;
    setIsSaving(true);
    setError(null);
    let newPosition = tempUser.position;

    // Only geocode if address changed
    if (tempUser.address !== profile?.address) {
      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(tempUser.address)}&limit=1`);
        const data = await response.json();
        if (data && data.length > 0) {
          newPosition = [parseFloat(data[0].lat), parseFloat(data[0].lon)];
        } else {
          setError("Adresse introuvable sur la carte.");
          setIsSaving(false);
          return;
        }
      } catch (error) {
        console.error('Geocoding error:', error);
        setError("Erreur lors de la recherche de l'adresse.");
        setIsSaving(false);
        return;
      }
    }

    try {
      await updateProfile({ ...tempUser, position: newPosition });
      setIsEditing(false);
    } catch (err) {
      setError("Erreur lors de la sauvegarde.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setTempUser({ ...profile });
    setIsEditing(false);
    setError(null);
  };

  const displayUser = tempUser || profile || {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto px-6 py-12 pb-32 space-y-12"
    >
      <section className="text-center space-y-6 border-b border-primary/20 pb-12">
        <div className="relative inline-block group">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/40 transition-all"></div>
          <img 
            src={displayUser.avatar || user.photoURL || `https://picsum.photos/seed/${user.uid}/200/200`} 
            alt={displayUser.name} 
            className="w-40 h-40 rounded-full border-4 border-primary shadow-2xl object-cover relative z-10 grayscale-[0.2] group-hover:grayscale-0 transition-all"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-2 right-2 w-10 h-10 bg-primary text-on-primary rounded-xl flex items-center justify-center shadow-2xl border-2 border-surface z-20">
            <User size={20} />
          </div>
        </div>
        <div>
          <h2 className="font-headline text-4xl font-bold text-on-surface">{displayUser.name}</h2>
          <p className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mt-3">Rôle : {displayUser.role}</p>
        </div>
      </section>

      <div className="space-y-8">
        <section className="bg-surface-container rounded-xl p-8 space-y-6 shadow-2xl border border-primary/10">
          <div className="flex justify-between items-center px-2">
            <h3 className="font-headline text-2xl font-bold text-primary">Informations Techniques</h3>
            {!isEditing ? (
              <button 
                onClick={() => {
                  setError(null);
                  setIsEditing(true);
                }}
                className="p-3 bg-primary/10 hover:bg-primary hover:text-on-primary rounded-xl text-primary transition-all border border-primary/20"
              >
                <Edit2 size={20} />
              </button>
            ) : (
              <div className="flex gap-3">
                <button 
                  onClick={handleCancel}
                  className="p-3 bg-error-container/10 hover:bg-error hover:text-white rounded-xl text-error transition-all border border-error/20"
                >
                  <X size={20} />
                </button>
                <button 
                  onClick={handleSave}
                  disabled={isSaving}
                  className="p-3 bg-primary/10 hover:bg-primary hover:text-on-primary rounded-xl text-primary transition-all border border-primary/20 disabled:opacity-50"
                >
                  {isSaving ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Check size={20} className="opacity-50" />
                    </motion.div>
                  ) : (
                    <Check size={20} />
                  )}
                </button>
              </div>
            )}
          </div>
          
          <div className="space-y-2">
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mx-4 mb-4 p-4 bg-error-container/10 text-error text-xs font-bold rounded-xl text-center border border-error/20"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex items-center gap-6 p-6 rounded-xl bg-surface-container-high/50 border border-primary/5 hover:border-primary/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-on-primary transition-all">
                <User size={24} />
              </div>
              <div className="flex-grow">
                <p className="text-[10px] text-primary font-bold uppercase tracking-[0.2em] mb-1">Identité</p>
                {isEditing ? (
                  <input 
                    type="text"
                    value={displayUser.name}
                    onChange={(e) => setTempUser({ ...displayUser, name: e.target.value })}
                    className="w-full bg-surface-container border border-primary/20 px-4 py-2 rounded-lg focus:outline-none focus:border-primary font-medium text-on-surface"
                  />
                ) : (
                  <p className="font-bold text-lg text-on-surface">{displayUser.name}</p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-6 p-6 rounded-xl bg-surface-container-high/50 border border-primary/5 hover:border-primary/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20 group-hover:bg-secondary group-hover:text-on-secondary transition-all">
                <Mail size={24} />
              </div>
              <div className="flex-grow">
                <p className="text-[10px] text-secondary font-bold uppercase tracking-[0.2em] mb-1">Communication</p>
                {isEditing ? (
                  <input 
                    type="email"
                    value={displayUser.email}
                    onChange={(e) => setTempUser({ ...displayUser, email: e.target.value })}
                    className="w-full bg-surface-container border border-secondary/20 px-4 py-2 rounded-lg focus:outline-none focus:border-secondary font-medium text-on-surface"
                  />
                ) : (
                  <p className="font-bold text-lg text-on-surface">{displayUser.email}</p>
                )}
              </div>
            </div>

            <div className="relative group">
              <div className="flex items-center gap-6 p-6 rounded-xl bg-surface-container-high/50 border border-primary/5 hover:border-primary/20 transition-all group/item">
                <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary border border-tertiary/20 group-hover/item:bg-tertiary group-hover/item:text-on-tertiary transition-all">
                  <MapPin size={24} />
                </div>
                <div className="flex-grow">
                  <p className="text-[10px] text-tertiary font-bold uppercase tracking-[0.2em] mb-1">Localisation</p>
                  {isEditing ? (
                    <input 
                      type="text"
                      value={displayUser.address}
                      onChange={(e) => setTempUser({ ...displayUser, address: e.target.value })}
                      className="w-full bg-surface-container border border-tertiary/20 px-4 py-2 rounded-lg focus:outline-none focus:border-tertiary font-medium text-on-surface"
                    />
                  ) : (
                    <p className="font-bold text-lg text-on-surface">{displayUser.address || "Non renseignée"}</p>
                  )}
                </div>
                {!isEditing && (
                  <Link to="/gps" className="text-primary hover:scale-110 transition-transform">
                    <ChevronRight size={24} />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container rounded-xl p-8 space-y-4 shadow-2xl border border-primary/10">
          <div className="flex items-center gap-6 p-6 rounded-xl bg-surface-container-high/30 border border-primary/5 hover:border-primary/20 transition-all cursor-pointer group">
            <Shield size={24} className="text-primary/60 group-hover:text-primary transition-colors" />
            <span className="font-bold flex-grow text-on-surface">Confidentialité & Sécurité</span>
            <ChevronRight size={20} className="text-primary/40 group-hover:translate-x-1 transition-all" />
          </div>
          <div className="flex items-center gap-6 p-6 rounded-xl bg-surface-container-high/30 border border-primary/5 hover:border-primary/20 transition-all cursor-pointer group">
            <Bell size={24} className="text-primary/60 group-hover:text-primary transition-colors" />
            <span className="font-bold flex-grow text-on-surface">Paramètres de Notification</span>
            <ChevronRight size={20} className="text-primary/40 group-hover:translate-x-1 transition-all" />
          </div>
          <div className="pt-8 mt-8 border-t border-primary/10">
            <div 
              onClick={logout}
              className="flex items-center gap-6 p-6 rounded-xl bg-error/5 hover:bg-error hover:text-on-error transition-all cursor-pointer group border border-error/10"
            >
              <LogOut size={24} className="text-error group-hover:text-on-error transition-colors" />
              <span className="font-bold uppercase tracking-[0.2em] text-xs">Déconnexion du Système</span>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
