import { useState } from "react";
import { validatorsList } from "../utils/validators-inputs";

function useFormDynamic(form: FormProps = {}) {
  const [formDynamic, setFormDynamic] = useState(form);

  const handleChange = (
    key: string,
    value: any,
    validators?: IValidators[]
  ) => {
    const formDynamicTemp = { ...formDynamic };
    const [isValid, errors] = validators
      ? validateField(key, value, validators)
      : [true, null];
    formDynamicTemp[key].value = value;
    formDynamicTemp[key].isValid = isValid;
    formDynamicTemp[key].errors = errors;
    setFormDynamic(formDynamicTemp);
  };

  const validateField = (
    key: string,
    value: any,
    validators: IValidators[]
  ): [boolean, object | null] => {
    let errors = {};
    const isValid = validators.every((validator) => {
      const [validated, message] = validatorsList[validator.validation].regex
        ? [
            !validatorsList[validator.validation].regex?.test(value),
            validatorsList[validator.validation].message,
          ]
        : othersValidators(
            validator,
            value,
            validatorsList[validator.validation].message || ""
          );
      if (validated) {
        errors = {
          ...errors,
          [key]: message,
        };
      }
      return !validated;
    });
    return [isValid, errors];
  };

  const othersValidators = (
    validator: IValidators,
    value: any,
    message: string
  ): [boolean, string] => {
    if (validator.validation === "length") {
      return length(value, message, validator.min, validator.max);
    }
    return [false, ""];
  };

  const length = (
    value: any,
    message: string,
    min?: number,
    max?: number
  ): [boolean, string] => {
    let isInvalid = false;
    let messageTemp = message;
    if (min && value.length < min) {
      isInvalid = true;
      messageTemp = messageTemp.replace(
        "[min] [max]",
        `mínimo ${min} caracteres`
      );
    }
    if (max && value.length > max) {
      isInvalid = true;
      messageTemp = messageTemp.includes("mínimo")
        ? messageTemp.replace(
            `mínimo ${min} caracteres`,
            `y maximo ${max} caracteres`
          )
        : messageTemp.replace("[min] [max]", `maximo ${max} caracteres`);
    }
    return [isInvalid, messageTemp];
  };

  const isFormValid = () => {
    const validateForm = Object.entries(formDynamic).every(([, field]) => {
      return field.isValid;
    });
    return validateForm;
  };

  const getValues = () => {
    const valuesForm = Object.entries(formDynamic).reduce(
      (prev, [key, field]) => {
        return {
          ...prev,
          [key]: field.value,
        };
      },
      {}
    );
    return valuesForm;
  };

  return { formDynamic, setFormDynamic, handleChange, isFormValid, getValues };
}

export interface FormProps {
  [key: string]: IFieldConfig;
}

export interface IFieldConfig {
  type: "text" | "email" | "number" | "password";
  value: any;
  label: string;
  placeholder: string;
  disabled?: boolean;
  validators?: IValidators[];
  isValid: boolean;
  touch: boolean;
  errors?: object | null;
}

interface IValidators {
  validation: "email" | "number" | "length";
  max?: number;
  min?: number;
}

export default useFormDynamic;
