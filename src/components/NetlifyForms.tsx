/**
 * UN SOLO FORMULARIO para detección de Netlify
 */
export default function NetlifyForms() {
  return (
    <form name="contact" data-netlify="true" hidden>
      <input name="maquinaria" />
      <input name="ciudad" />
      <input name="nombre" />
      <input name="telefono" />
      <input name="email" />
      <textarea name="mensaje"></textarea>
    </form>
  );
}
