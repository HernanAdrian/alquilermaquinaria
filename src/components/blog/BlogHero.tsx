export default function BlogHero() {
  return (
    <section className="bg-dark py-10 md:py-16 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-primary text-xs font-semibold uppercase tracking-widest mb-4 inline-block">
          Blog de maquinaria
        </span>
        <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
          Guías, precios y consejos sobre<br className="hidden md:block" />
          maquinaria de construcción
        </h1>
        <p className="text-white/60 text-base md:text-lg mt-4 max-w-xl mx-auto leading-relaxed">
          Todo lo que necesitas saber antes de alquilar tu próximo equipo. Actualizado en 2026.
        </p>
      </div>
    </section>
  );
}
