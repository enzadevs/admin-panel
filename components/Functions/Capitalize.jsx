export const capitalize = (string) =>
  string?.replace(/\b\w/g, (substr) => substr.toUpperCase());
