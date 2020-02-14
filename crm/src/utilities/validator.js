export const lengthValidation = (value, min) => {
    if (value == '' || !value) {
        return 'el campo no puede quedar vacio'
    }
    if (value.length < min) {
        return `ingrese al menos ${min} caracteres`
    } else {
        return ''
    }
}
export const emailValidation = value => {
    const emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if (lengthValidation(value, 1) == '' && emailValid) {
        return ''
    }
    else if (!emailValid) {
        return 'ingrese un email valido'
    } else {
        return lengthValidation(value, 1)
    }
}
export const minMaxValidation = (value, min, max) => {
    if ((parseInt(value)) < min || (parseInt(value)) > max) {
        return 'numero invalido'
    } else {
        return ''
    }
}
