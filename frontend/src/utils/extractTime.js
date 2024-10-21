export function ExtractTime(dateString) {
  const date = new Date(dateString);

  // Get the hours, minutes from the date
  // Saat, dakika  al
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  return `${hours}:${minutes}`;
}

// Helper function to pad zeros. It will add a zero in front of the number if it is less than 10
// Sıfırları doldurmak için yardımcı fonksiyon. Eğer sayı 10'dan küçükse başına bir sıfır ekleyecektir.

function padZero(number) {
  return number.toString().padStart(2, "0");
}
