export const nameValidation = new RegExp("^[A-Z][a-zA-Z]{2,}");
export const emailValidation = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
);
export const passwordValidation = new RegExp("^[a-zA-Z0-9@#$%^&*()!~]{8,}$");