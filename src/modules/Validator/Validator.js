function validateEmail(email) {
  if (!email) {
    return { result: false, error: "Empty email field" };
  }
  let mask = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!mask.test(email)) {
    return { result: false, error: "Use mail@mail.com pattern" };
  }
  return { result: true, error: null };
}
function validateUserName(userName) {
  let mask = /\w/;
  let minUserNameLenght = 6;
  if (userName.length < minUserNameLenght) {
    return {
      result: false,
      error: "Use more than " + minUserNameLenght + " chars"
    };
  }
  if (!mask.test(userName)) {
    return { result: false, error: "A-z, 0-9 and '_' allowed" };
  }
  return { result: true, error: null };
}
function validatePassword(password, confPassword) {
  let mask = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))/;
  let minPaswordLenght = 6;
  if (password !== confPassword) {
    return { result: false, error: "Passwords missmatch" };
  }
  if (password < minPaswordLenght) {
    return {
      result: false,
      error: "Use more than " + minPaswordLenght + " chars"
    };
  }
  if (!mask.test(password)) {
    return {
      result: false,
      error: "Use 'lowercase+uppercase' or 'char+digit' pattern"
    };
  }
  return { result: true, error: null };
}

export { validateEmail, validatePassword, validateUserName };
