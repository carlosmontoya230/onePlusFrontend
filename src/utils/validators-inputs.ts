export const validatorsList: any = {
  email: {
    message: "Debe ser un email valido",
    regex: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
  },
  number: {
    message: "Solo se permiten numeros",
    regex: /^[0-9]+$/,
  },
  length: {
    message: "Debe tener [min] [max]",
  },
};
