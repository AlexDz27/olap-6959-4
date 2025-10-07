/**
 * Function for converting words (e.g., task statuses) from camelCased strings into strings delimited using delimiter.
 * E.g., we can make kebab-case for CSS classes via hyphen or human readable text via space.
 */
export function assembleWords(str: string, delimiter: string): string {
  // Check if the string contains uppercase chars at all. If not, bail and return the string
  let isStringCamelCased = false
  for (const char of str) {
    if (isUppercase(char)) isStringCamelCased = true
  }
  if (!isStringCamelCased) return str

  const pieces = []
  let piece: string[] = []
  for (const char of str) {
    if (isUppercase(char)) {
      pieces.push(piece.join(''))
      piece = [char.toLowerCase()]
    } else {
      piece.push(char)
    }
  }
  pieces.push(piece.join(''))
  
  return pieces.join(delimiter)


  function isUppercase(char: string) {
    return /^[A-Z]$/.test(char)
  }
}