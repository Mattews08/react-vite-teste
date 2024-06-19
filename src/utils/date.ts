import { format, parseISO } from 'date-fns';
import { ptBR, enUS } from 'date-fns/locale';

const localeMap = {
  en: enUS,
  pt: ptBR,
};

export const formatDate = (dateString: string, locale: 'en' | 'pt') => {
  const date = parseISO(dateString);
  return format(date, 'PPpp', { locale: localeMap[locale] });
};