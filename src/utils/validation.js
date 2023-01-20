import { useEffect, useState } from "react";

const useValidation = (value, validationRules) => {
  const [status, setStatus] = useState({ isValid: true, errText: "" });

  const setValid = () => {
    setStatus({
      isValid: true,
      errText: "",
    });
  };

  const setInvalid = (errText) => {
    setStatus({
      isValid: false,
      errText,
    });
  };

  useEffect(() => {
    for (const rule in validationRules) {
      if (rule === "notEmpty" && !value) {
        setInvalid("The field can't be empty");
        break;
      } else if (rule === "minLength" && value.length < validationRules[rule]) {
        setInvalid(`The minimum length is ${validationRules[rule]}`);
        break;
      } else {
        setValid();
      }
    }
  }, [value]);

  return status;
};

const useValidatedInput = (initialValue, validationRules) => {
  const [value, setValue] = useState(initialValue);
  const [inFocus, setInFocus] = useState(true);
  const valid = useValidation(value, validationRules);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    setInFocus(false);
  };

  return {
    value,
    inFocus,
    setValue,
    onChange,
    onBlur,
    isValid: valid.isValid,
    errText: valid.errText,
  };
};

export { useValidatedInput };
