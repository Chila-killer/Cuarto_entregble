const EMAIL_VALIDATIONS = {
  required: {
    value: true,
    message: "Este campo es requerido",
  },
  pattern: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Ingrese un correo válido",
  },
  maxLength: {
    value: 150,
    message: "Este campo acepta 50 carácteres como máximo",
  },
  minLength: {
    value: 1,
    message: "Este campo acepta 5 carácteres como minimo",
  },
};

const PASSWORD_VALIDATIONS = {
  required: {
    value: true,
    message: "Este campo es requerido",
  },
  maxLength: {
    value: 25,
    message: "Este campo acepta 50 carácteres como máximo",
  },
  minLength: {
    value: 1,
    message: "Este campo acepta 5 carácteres como minimo",
  },
};

const FIRSTNAME_VALIDATIONS = {
  required: {
    value: true,
    message: "Este campo es requerido",
  },
  maxLength: {
    value: 25,
    message: "Este campo acepta 50 carácteres como máximo",
  },
  minLength: {
    value: 1,
    message: "Este campo acepta 5 carácteres como minimo",
  },
};

const LASTNAME_VALIDATIONS = {
  required: {
    value: true,
    message: "Este campo es requerido",
  },
  maxLength: {
    value: 25,
    message: "Este campo acepta 50 carácteres como máximo",
  },
  minLength: {
    value: 1,
    message: "Este campo acepta 5 carácteres como minimo",
  },
};
export { EMAIL_VALIDATIONS, PASSWORD_VALIDATIONS, FIRSTNAME_VALIDATIONS, LASTNAME_VALIDATIONS };
