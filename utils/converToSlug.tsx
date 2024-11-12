
import slugify from "slugify";
export const convertToSlug = (str: string) => {
  if (!str) return "";
  str = slugify(str, {
    lower: true,
    locale: "vi",
  });
  return str;
};
