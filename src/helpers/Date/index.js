export const MONTHS = {
  1: "janvier",
  2: "février",
  3: "mars",
  4: "avril",
  5: "mai",
  6: "juin",
  7: "juillet",
  8: "août",
  9: "septembre",
  10: "octobre",
  11: "novembre",
  12: "décembre",
};

// Incrément de 1 pour adapter l'index retourné par `getMonth()` (qui va de 0 à 11) 
// à l'indexation de l'objet `MONTHS` (qui va de 1 à 12).
export const getMonth = (date) => MONTHS[date.getMonth()+1];
