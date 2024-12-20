export const validateStepOne = (form) => {
  let isValid = true;

  let newErrors = {
    firstName: "",
    lastName: "",
    userName: "",
  };

  const nameRegex = /^[a-zA-Z]+$/;

  if (form.firstName.trim() === "") {
    isValid = false;
    newErrors.firstName = "First Name is required";
  } else if (!nameRegex.test(form.firstName)) {
    isValid = false;
    newErrors.firstName = "First Name can only contain letters";
  }

  if (form.lastName.trim() === "") {
    isValid = false;
    newErrors.lastName = "Last Name is required";
  } else if (!nameRegex.test(form.lastName)) {
    isValid = false;
    newErrors.lastName = "Last Name can only contain letters";
  }

  if (form.userName.trim() === "") {
    newErrors.userName = "Username is required";
    isValid = false;
  }

  return { isValid, newErrors };
};
