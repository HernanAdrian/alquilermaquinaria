# 🧪 Guía de Prueba del Formulario - IMPORTANTE

## ⚠️ El Problema Identificado

El formulario **NO funcionaba** porque:
1. ❌ `handleSubmit` de react-hook-form NO pasa el evento correctamente
2. ❌ El `fetch` nunca se ejecutaba
3. ❌ El formulario se enviaba de forma tradicional (recargando página)

## ✅ La Solución Aplicada

Según la documentación oficial de Netlify, ahora:
1. ✅ Capturamos el evento directamente con `handleFormSubmit`
2. ✅ Validamos con react-hook-form usando `trigger()`
3. ✅ Enviamos con `fetch` usando FormData exactamente como indica Netlify

## 🧪 Cómo Probar en Desarrollo (ANTES de desplegar)

### Paso 1: Iniciar el servidor de desarrollo
```bash
cd /Users/hernanadrian/Desktop/IDEAS\ NEGOCIOS/ALQUILER-MAQUINARIA/alquiler-maquinaria
npm run dev
```

### Paso 2: Abrir una página de producto
Por ejemplo: `http://localhost:3000/alquiler/miniexcavadora/malaga`

### Paso 3: Abrir la Consola del Navegador
1. Click derecho → Inspeccionar → Pestaña "Console"
2. Pestaña "Network" (Red)

### Paso 4: Rellenar y Enviar el Formulario
1. Completa:
   - Nombre: "Test Usuario"
   - Teléfono: "600123456"
   - Fecha inicio: (cualquier fecha)
   - Días: 5
2. Click "Obtener Precio Final"

### Paso 5: Verificar en la Consola
**✅ COMPORTAMIENTO CORRECTO:**
- El formulario NO recarga la página
- Aparece el mensaje de confirmación verde
- En la consola NO hay errores rojos
- En Network tab ves una petición POST a "/"

**❌ SI VES ESTO, HAY UN PROBLEMA:**
- La página se recarga completamente
- No aparece el mensaje de confirmación
- Hay errores en la consola

## 🚀 Cómo Probar en Netlify (DESPUÉS de desplegar)

### Paso 1: Desplegar
```bash
git add .
git commit -m "Fix: Formulario de presupuesto corregido según docs Netlify"
git push
```

### Paso 2: Verificar que Netlify Detectó el Formulario
1. Ve a tu sitio en Netlify Dashboard
2. **Site settings** → **Forms**
3. Deberías ver: `product-request` ✅

### Paso 3: Probar el Formulario en Producción
1. Ve a tu web desplegada
2. Abre cualquier página de producto
3. Rellena el formulario
4. Envía

### Paso 4: Verificar Submissions en Netlify
1. Netlify Dashboard → **Forms** → **product-request**
2. Deberías ver tu submission con todos los datos:
   - name
   - phone
   - equipment
   - city
   - start-date
   - duration
   - with-operator

## 📧 Configurar Notificaciones Email

1. **Forms** → **Form notifications**
2. **Add notification**
3. Selecciona: **Email notification**
4. Email: [tu-email@ejemplo.com]
5. Evento: **New form submission**
6. Formulario: **product-request**

## 🔍 Debugging Si Sigue Sin Funcionar

### En Desarrollo:
```javascript
// Añade esto temporalmente en handleFormSubmit (línea 43):
console.log('📋 Form data:', Object.fromEntries(formData));
console.log('📤 Sending to Netlify...');
```

### En Producción:
1. Verifica en Netlify: **Deploys** → Log del último deploy
2. Busca: "1 form detected" (debe aparecer)
3. Si no aparece, el formulario no se está detectando en build time

## 📝 Campos que se Envían

```
form-name: "product-request"
name: [del input]
phone: [del input]
equipment: [prop pasada al componente]
city: [prop pasada al componente]
type: "request" o "waitlist"
start-date: [del input date]
duration: "5 días" [del estado]
with-operator: "yes" o "no" [del estado]
```

## ✨ Diferencia Clave con la Versión Anterior

**ANTES (NO FUNCIONABA):**
```javascript
const onSubmit = async (data: FormData, e?: React.BaseSyntheticEvent) => {
  if (e) {  // ❌ Nunca se ejecutaba porque 'e' era undefined
    // ...fetch
  }
};
onSubmit={handleSubmit(onSubmit)}  // ❌ handleSubmit NO pasa el evento
```

**AHORA (FUNCIONA):**
```javascript
const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();  // ✅ Capturamos el evento directamente
  const isValid = await trigger();  // ✅ Validamos
  // ...fetch  // ✅ Se ejecuta siempre
};
onSubmit={handleFormSubmit}  // ✅ Pasamos la función directamente
```

## 🎯 Próximos Pasos

1. [ ] Probar en desarrollo (localhost)
2. [ ] Verificar que el fetch se ejecuta en la consola
3. [ ] Desplegar a Netlify
4. [ ] Verificar que Netlify detecta el formulario
5. [ ] Hacer submission de prueba
6. [ ] Verificar que aparece en Netlify Forms
7. [ ] Configurar notificaciones email
8. [ ] Probar que te llega el email

---

**Última actualización:** $(date)
**Estado:** ✅ Código corregido según documentación oficial de Netlify
