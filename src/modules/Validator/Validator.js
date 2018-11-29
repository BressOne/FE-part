/* eslint-disable no-useless-escape */
function validateEmail(email) {
  if (!email) {
    return { error: 'Empty email field' };
  }
  const mask = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!mask.test(email)) {
    return { error: 'Use mail@mail.com pattern' };
  }
  return { error: null };
}
function validateUserName(userName) {
  const mask = /\w/;
  const minUserNameLenght = 6;
  if (userName.length < minUserNameLenght) {
    return {
      error: `Use more than ${minUserNameLenght} chars`,
    };
  }
  if (!mask.test(userName)) {
    return { error: "A-z, 0-9 and '_' allowed" };
  }
  return { error: null };
}
function validatePassword(password, confPassword) {
  const mask = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))/;
  const minPaswordLenght = 6;
  if (password !== confPassword) {
    return { error: 'Passwords missmatch' };
  }
  if (password < minPaswordLenght) {
    return {
      error: `Use more than ${minPaswordLenght}  chars`,
    };
  }
  if (!mask.test(password)) {
    return {
      error: "Use 'lowercase+uppercase' or 'char+digit' pattern",
    };
  }
  return { error: null };
}

export { validateEmail, validatePassword, validateUserName };
