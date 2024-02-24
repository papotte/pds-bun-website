import { formatDate } from "date-fns";
import { es } from "date-fns/locale";

const locales = { es };

// by providing a default string of 'PP' or any of its variants for `formatStr`
// it will format dates in whichever way is appropriate to the locale
enum DefaultFormats {
  SHORT = "short",
  MEDIUM = "medium",
  LONG = "long",
  FULL = "full",
}

const FormatMap: Record<DefaultFormats, string> = {
  [DefaultFormats.SHORT]: "dd/MM/y",
  [DefaultFormats.MEDIUM]: "d MMM y",
  [DefaultFormats.LONG]: "d 'de' MMMM 'de' y",
  [DefaultFormats.FULL]: "EEEE, d 'de' MMMM 'de' y",
};
const formatDateString = (
  dateStr: string,
  targetFormat: DefaultFormats = DefaultFormats.MEDIUM,
) => {
  const formatStr = FormatMap[targetFormat] || targetFormat;

  return formatDate(dateStr, formatStr);
};
export default formatDateString;
