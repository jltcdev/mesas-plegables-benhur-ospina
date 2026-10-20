/**
 * Utilidades de sanitización y control de entradas de usuario.
 */

// Permite solo dígitos enteros positivos
export function sanitizeInteger(value: string): string {
  return value.replace(/\D/g, '')
}

// Permite solo letras (con tildes, ñ/Ñ), espacios, puntos y guiones
export function sanitizeCity(value: string): string {
  return value.replace(/[^a-zA-A-záéíóúÁÉÍÓÚñÑ\s.-]/g, '')
}

// Permite números, letras, espacios y caracteres de dimensión (.,xX-/'")
export function sanitizeDimensionInput(value: string): string {
  return value.replace(/[^a-zA-Z0-9\s.,xX\-\/'"]/g, '')
}