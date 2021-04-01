const alpha = /^[a-zA-Z_]+( [a-zA-Z_]+)*$/;
const alphaNumeric = /^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$/;
const email = /^\w+([\+.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,})+$/;
const phone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
const url = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;

export { alpha, alphaNumeric, email, phone, url };
