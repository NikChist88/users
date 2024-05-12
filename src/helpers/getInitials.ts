export const getInitials = (fullName: string) => {
  // Разделяем имя и фамилию по пробелу
  const parts = fullName.split(' ')

  // Проверяем, что в имени и фамилии есть хотя бы одна буква
  if (parts.length >= 2) {
    // Берем первую букву имени
    const firstInitial = parts[0].charAt(0).toUpperCase()

    // Берем первую букву фамилии
    const lastInitial = parts[1].charAt(0).toUpperCase()

    // Возвращаем обе буквы, объединенные дефисом
    return firstInitial + lastInitial
  } else {
    // Если имя и фамилия не разделены пробелом, возвращаем первую букву
    return fullName.charAt(0).toUpperCase()
  }
}
