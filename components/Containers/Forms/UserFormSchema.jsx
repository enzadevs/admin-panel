import * as Yup from 'yup'

export const UserFormSchema = Yup.object().shape({
    fullName: Yup.string()
        .min(1, 'Слишком коротко')
        .max(64, 'Слишком длинно')
        .required('Наполните это поле'),
    phoneNumber: Yup.string()
        .min(1, 'Слишком коротко')
        .max(64, 'Слишком длинно')
        .required('Наполните это поле'),
    password: Yup.string()
        .min(1, 'Слишком коротко')
        .max(64, 'Слишком длинно')
        .required('Наполните это поле'),
    address: Yup.string()
        .min(1, 'Слишком коротко')
        .max(128, 'Слишком длинный адрес')
})