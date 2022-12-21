const englishOrdinalRules = new Intl.PluralRules('en', { type: 'ordinal' });
const suffixes = {
  zero: '',
  many: '',
  one: 'st',
  two: 'nd',
  few: 'rd',
  other: 'th',
};
function toOrdinal(num: number | undefined): string {
  if (!num) {
    return '';
  }
  const category = englishOrdinalRules.select(num);
  const suffix = suffixes[category];
  return num + suffix;
}

export default toOrdinal;
