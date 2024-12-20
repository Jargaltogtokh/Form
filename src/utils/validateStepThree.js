export const validateStepThree = (form) => {
  let isValid = true;

  let newErrors = {
    dateOfBirth: "",
    profileImage: "",
  };

  if (form.dateOfBirth === "") {
    isValid = false;
    newErrors.dateOfBirth = "This field is mandatory";
  }

  if (form.profileImage === "") {
    isValid = false;
    newErrors.profileImage = "This field is mandatory";
  }

  return { isValid, newErrors };
};
