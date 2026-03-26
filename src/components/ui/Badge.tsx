type BadgeVariant = 'available' | 'high-demand' | 'unavailable' | 'consult';

const BADGE_STYLES: Record<BadgeVariant, { className: string; label: string }> = {
  available: { className: 'bg-success text-white', label: 'Disponible' },
  'high-demand': { className: 'bg-primary text-white', label: 'Alta demanda' },
  unavailable: { className: 'bg-error text-white', label: 'No disponible' },
  consult: { className: 'bg-neutral-400 text-white', label: 'Consultar' },
};

export default function Badge({ variant }: { variant: BadgeVariant }) {
  const style = BADGE_STYLES[variant];
  return (
    <span className={`${style.className} text-xs font-semibold px-2.5 py-1 rounded`}>
      {style.label}
    </span>
  );
}
