type PrefixReplacement = {
  prefix: string;
  replacement: string;
};

const prefixReplacements: PrefixReplacement[] = [
  {prefix: 'mr', replacement: 'Sr.'},
  {prefix: 'ms', replacement: 'Sra.'},
  {prefix: 'mrs', replacement: 'Sra.'},
  {prefix: 'miss', replacement: 'Srta.'},
  {prefix: 'dr', replacement: 'Dr.'},
  {prefix: '', replacement: ''},
];

export function convertPrefixesToSpanish(name: string): string {
  let result = name;

  prefixReplacements.forEach(({prefix, replacement}) => {
    const regex = new RegExp(`^${prefix}\\s`, 'gi');
    if (regex.test(result)) {
      result = result.replace(regex, replacement + ' ');
    }
  });

  result = result
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return result;
}
