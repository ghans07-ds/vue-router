export let regexMail = /^([a-z\d]{1})([a-z\d.]{5,30})@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
export let regexPwd = /^[\w@-]{8,20}$/;
export let regexUser = /^[a-zA-Z\d]{4,10}$/;

export function isValid(value, regex) {
  if (regex.test(value)) {
    return 1;
  } else {
    return 0;
  }
}
export function inputStatus(value, regex) {
  if (isValid(value, regex)) {
    return true;
  }
  return false;
}
