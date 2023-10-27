export function convertToJalali(date: string) {
  return new Date(date).toLocaleDateString('fa-IR');
}
