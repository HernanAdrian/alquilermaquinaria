'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin, Minus, Plus, AlertCircle } from 'lucide-react';
import { EQUIPMENT_CATEGORIES } from '@/lib/data/equipment';
import { CITIES } from '@/lib/data/cities';

interface SearchBarProps {
  defaultCity?: string;
}

export default function SearchBar({ defaultCity }: SearchBarProps) {
  const router = useRouter();
  const [equipment, setEquipment] = useState('');
  const [city, setCity] = useState(defaultCity || 'malaga');
  const [days, setDays] = useState(5);
  const [error, setError] = useState(false);

  const handleSearch = () => {
    if (!equipment) {
      setError(true);
      return;
    }
    setError(false);
    
    // Default to malaga if no city selected (though it defaults to malaga in state)
    const citySlug = city || 'malaga';
    router.push(`/alquiler/${equipment}/${citySlug}/`);
  };

  return (
    <div className="mt-10 max-w-3xl mx-auto w-full group">
      <div className={`bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-200 ${error ? 'ring-2 ring-red-500' : ''}`}>
        {/* Desktop */}
        <div className="hidden md:flex items-stretch h-16">
          <div className="flex-1 flex items-center gap-2 px-4 border-r border-neutral-200">
            <Search className="w-4 h-4 text-neutral-400 flex-shrink-0" />
            <select 
              value={equipment}
              onChange={(e) => {
                setEquipment(e.target.value);
                if (e.target.value) setError(false);
              }}
              className="w-full bg-transparent text-sm text-neutral-900 focus:outline-none cursor-pointer"
            >
              <option value="">¿Qué maquinaria necesitas?</option>
              {EQUIPMENT_CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.slug}>{cat.name}</option>
              ))}
            </select>
          </div>
          <div className="flex-1 flex items-center gap-2 px-4 border-r border-neutral-200">
            <MapPin className="w-4 h-4 text-neutral-400 flex-shrink-0" />
            <select 
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full bg-transparent text-sm text-neutral-900 focus:outline-none cursor-pointer"
            >
              <option value="">Selecciona ciudad</option>
              {CITIES.filter(c => c.status === 'active').map((city) => (
                <option key={city.id} value={city.slug}>{city.name}</option>
              ))}
            </select>
          </div>
          <div className="w-36 flex items-center justify-center gap-2 px-3">
            <button onClick={() => setDays(Math.max(1, days - 1))} className="w-7 h-7 rounded border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors"><Minus className="w-3 h-3" /></button>
            <span className="text-sm font-semibold text-center w-12">{days} día{days > 1 ? 's' : ''}</span>
            <button onClick={() => setDays(days + 1)} className="w-7 h-7 rounded border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors"><Plus className="w-3 h-3" /></button>
          </div>
          <button 
            onClick={handleSearch}
            className="bg-primary hover:bg-primary-hover text-white font-semibold text-sm px-8 rounded-r-xl transition-colors"
          >
            Buscar disponibilidad
          </button>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <div className="flex items-center gap-2 px-4 h-14 border-b border-neutral-200">
            <Search className="w-4 h-4 text-neutral-400 flex-shrink-0" />
            <select 
              value={equipment}
              onChange={(e) => {
                setEquipment(e.target.value);
                if (e.target.value) setError(false);
              }}
              className="w-full bg-transparent text-sm text-neutral-900 focus:outline-none"
            >
              <option value="">¿Qué maquinaria necesitas?</option>
              {EQUIPMENT_CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.slug}>{cat.name}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2 px-4 h-14 border-b border-neutral-200">
            <MapPin className="w-4 h-4 text-neutral-400 flex-shrink-0" />
            <select 
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full bg-transparent text-sm text-neutral-900 focus:outline-none"
            >
              <option value="">Selecciona ciudad</option>
              {CITIES.filter(c => c.status === 'active').map((city) => (
                <option key={city.id} value={city.slug}>{city.name}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-between px-4 h-14 border-b border-neutral-200">
            <span className="text-sm text-neutral-600">Duración</span>
            <div className="flex items-center gap-3">
              <button onClick={() => setDays(Math.max(1, days - 1))} className="w-8 h-8 rounded border border-neutral-200 flex items-center justify-center"><Minus className="w-3 h-3" /></button>
              <span className="text-sm font-semibold w-14 text-center">{days} día{days > 1 ? 's' : ''}</span>
              <button onClick={() => setDays(days + 1)} className="w-8 h-8 rounded border border-neutral-200 flex items-center justify-center"><Plus className="w-3 h-3" /></button>
            </div>
          </div>
          <button 
            onClick={handleSearch}
            className="w-full h-14 bg-primary hover:bg-primary-hover text-white font-semibold text-sm rounded-b-xl transition-colors"
          >
            Buscar disponibilidad
          </button>
        </div>
      </div>
      
      {/* Validation Message */}
      {error && (
        <div className="mt-3 flex items-center gap-2 text-red-600 animate-in fade-in slide-in-from-top-1 duration-200">
          <AlertCircle size={16} />
          <span className="text-sm font-medium">Selecciona el tipo de maquinaria que necesitas</span>
        </div>
      )}
    </div>
  );
}
