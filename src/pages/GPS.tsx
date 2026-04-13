import { motion } from 'motion/react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import { MapPin, Users } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Fix for default marker icons in Leaflet with React
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const STATIC_FAMILY = [
  { id: 2, name: 'Elena', position: [48.8606, 2.3376], role: 'Mother' },
  { id: 3, name: 'Thomas', position: [48.8534, 2.3488], role: 'Son' },
];

export default function GPS() {
  const { profile } = useAuth();
  const [familyMembers, setFamilyMembers] = useState([...STATIC_FAMILY]);
  const [mapCenter, setMapCenter] = useState<[number, number]>([48.8566, 2.3522]);
  const [mapKey, setMapKey] = useState(0);
  const location = useLocation();

  useEffect(() => {
    let updatedMembers = [...STATIC_FAMILY];
    
    if (profile) {
      updatedMembers = [
        { id: 1, name: profile.name, position: profile.position || [48.8584, 2.2945], role: profile.role },
        ...STATIC_FAMILY
      ];
    } else {
      updatedMembers = [
        { id: 1, name: 'Marc', position: [48.8584, 2.2945], role: 'Father' },
        ...STATIC_FAMILY
      ];
    }
    
    setFamilyMembers(updatedMembers);

    // Check if we need to focus on a specific member from navigation state
    const state = location.state as { focusId?: number };
    if (state?.focusId) {
      const target = updatedMembers.find(m => m.id === state.focusId);
      if (target) {
        setMapCenter(target.position as [number, number]);
        setMapKey(prev => prev + 1);
      }
    } else {
      // Default center on user
      setMapCenter(updatedMembers[0].position as [number, number]);
      setMapKey(prev => prev + 1);
    }
  }, [profile, location.state]);

  const handleFocusMember = (position: [number, number]) => {
    setMapCenter(position);
    setMapKey(prev => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-6xl mx-auto px-6 py-12 pb-32 space-y-12"
    >
      <section className="border-b border-primary/20 pb-8">
        <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-3 block">Géolocalisation de la Tribu</span>
        <h2 className="font-headline text-6xl font-bold text-on-surface tracking-tight">GPS Famille</h2>
        <p className="text-on-surface-variant font-medium text-lg italic mt-4">Où se trouve la tribu aujourd'hui ? <span className="text-primary/50 text-sm not-italic ml-2">(Système de repérage technique)</span></p>
      </section>

      <div className="bg-surface-container rounded-xl overflow-hidden h-[550px] shadow-2xl border border-primary/10 relative z-10 group">
        <div className="absolute inset-0 bg-black/10 pointer-events-none z-20 group-hover:bg-transparent transition-all duration-700"></div>
        <MapContainer 
          key={mapKey}
          center={mapCenter} 
          zoom={15} 
          scrollWheelZoom={false}
          className="w-full h-full grayscale-[0.6] contrast-[1.1] brightness-[0.8] hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {familyMembers.map((member) => (
            <Marker key={member.id} position={member.position as [number, number]}>
              <Tooltip permanent direction="top" offset={[0, -40]} className="bg-primary text-on-primary font-bold rounded-lg px-4 py-2 border border-primary/50 shadow-2xl uppercase tracking-widest text-[10px]">
                {member.name}
              </Tooltip>
              <Popup>
                <div className="text-center p-3 min-w-[150px] bg-surface-container">
                  <p className="font-headline font-bold text-xl text-primary m-0 leading-tight">{member.name}</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant m-0 mt-2">{member.role}</p>
                  <div className="mt-4 pt-4 border-t border-primary/10 flex items-center justify-center gap-2 text-[10px] text-primary font-bold uppercase tracking-widest">
                    <MapPin size={12} />
                    <span>Position actuelle</span>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <section className="space-y-8">
        <div className="flex items-center gap-6">
          <h3 className="font-headline text-3xl font-bold text-primary">Membres de la tribu</h3>
          <div className="h-px bg-primary/20 flex-grow"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {familyMembers.map((member) => (
          <button 
            key={member.id} 
            onClick={() => handleFocusMember(member.position as [number, number])}
            className="bg-surface-container-low p-6 rounded-xl border border-primary/5 flex items-center gap-6 hover:bg-surface-container hover:border-primary/30 transition-all hover:scale-[1.02] text-left w-full group shadow-xl"
          >
            <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all">
              <Users size={28} />
            </div>
            <div className="flex-grow">
              <p className="font-bold text-xl text-on-surface group-hover:text-primary transition-colors">{member.name}</p>
              <p className="text-[10px] text-primary font-bold uppercase tracking-[0.2em] mt-1">{member.role}</p>
              <div className="flex items-center gap-2 text-[10px] text-on-surface-variant/60 font-bold uppercase tracking-widest mt-3">
                <MapPin size={12} className="text-primary" />
                <span>Voir sur la carte</span>
              </div>
            </div>
          </button>
        ))}
        </div>
      </section>
    </motion.div>
  );
}
