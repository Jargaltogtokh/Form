export const validateStepOne = (form) => {
  let isValid = true;

  let newErrors = {
    firstName: "",
    lastName: "",
    userName: "",
  };

  if (form.firstName === "") {
    newErrors.firstName = "This field is mandatory";
    isValid = false;
  }

  if (form.lastName === "") {
    newErrors.lastName = "This field is mandatory";
    isValid = false;
  }

  if (form.userName === "") {
    newErrors.userName = "This field is mandatory";
    isValid = false;
  }

  return { isValid, newErrors };
};
