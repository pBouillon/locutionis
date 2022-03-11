/**
 * Remove all accents and/or diacritics from a given string
 * @param str The string to normalize
 * @returns The string without any accent
 *
 * @see https://stackoverflow.com/a/37511463/6152689
 */
export const normalize = (str: string): string => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
