export const createPluralPattern = (term: string): string => {
  // Escape special characters in the term for safe regex pattern
  const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  // If the term is multi-word (e.g., "Ring Dips"), apply pluralization to the last word only
  const parts = escapedTerm.split(' ');
  const lastWord = parts.pop()!; // Get the last word of the term

  let pluralPattern = '';

  // Apply pluralization rules only to the last word
  if (lastWord.endsWith('fe')) {
    pluralPattern = `${lastWord}|${lastWord.replace(/fe$/, 'ves')}`; // knife -> knives
  } else if (lastWord.endsWith('us')) {
    pluralPattern = `${lastWord}|${lastWord.replace(/us$/, 'i')}`; // cactus -> cacti
  } else if (lastWord.endsWith('on')) {
    pluralPattern = `${lastWord}|${lastWord.replace(/on$/, 'a')}`; // phenomenon -> phenomena
  } else if (lastWord.endsWith('um')) {
    pluralPattern = `${lastWord}|${lastWord.replace(/um$/, 'a')}`; // datum -> data
  } else if (lastWord.endsWith('sis')) {
    pluralPattern = `${lastWord}|${lastWord.replace(/sis$/, 'ses')}`; // crisis -> crises
  } else if (lastWord.endsWith('o') && !lastWord.endsWith('oo')) {
    pluralPattern = `${lastWord}|${lastWord}es`; // potato -> potatoes
  } else if (lastWord.match(/[^aeiou]y$/)) {
    pluralPattern = `${lastWord}|${lastWord.replace(/y$/, 'ies')}`; // baby -> babies
  } else if (lastWord.match(/[aeiou]y$/)) {
    pluralPattern = `${lastWord}s`; // toy -> toys
  } else if (lastWord.endsWith('s') || lastWord.endsWith('x') || lastWord.endsWith('ch') || lastWord.endsWith('sh')) {
    pluralPattern = `${lastWord}|${lastWord}es`; // bus -> buses
  } else {
    pluralPattern = `${lastWord}|${lastWord}s`; // Default: cat -> cats
  }

  // Recombine the pattern with the rest of the words
  const combinedPattern = parts.length > 0 ? `\\b${parts.join(' ')} ${pluralPattern}\\b` : `\\b${pluralPattern}\\b`;
  return combinedPattern;
};
