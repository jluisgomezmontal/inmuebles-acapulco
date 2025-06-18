export function formatToMXN(amount) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 0,
  }).format(amount);
}

export function toSlug(str) {
  return str
    .toLowerCase()
    .normalize("NFD") // Elimina acentos
    .replace(/[\u0300-\u036f]/g, "") // Caracteres diacríticos
    .replace(/[^a-z0-9\s-]/g, "") // Elimina símbolos
    .trim()
    .replace(/\s+/g, "-"); // Reemplaza espacios por guiones
}
