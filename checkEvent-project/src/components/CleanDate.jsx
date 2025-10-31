export function CleanDate(date) {
  if (!date) return 'Date non définie';

  const regex = new RegExp(/(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/)
  const result = date.match(regex);

  if (!result) return 'Date invalide';

  const [_, year, month, day, hours, minutes] = result;
  return `${day}/${month}/${year} à ${hours}h${minutes}`;
}