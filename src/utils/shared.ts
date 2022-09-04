export const isEmail = (val: string): boolean => {
    const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(val);
}

export const isPassword = (val: string): boolean => {
    const regExp = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    return regExp.test(val);
}

export const isSameStr = (str1: string, str2: string): boolean => {
    return str1 === str2;
}