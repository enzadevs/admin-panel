import * as Yup from "yup";

export const AdminFormSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .min(1, "Слишком коротко")
    .max(64, "Слишком длинно")
    .required("Наполните это поле"),
  password: Yup.string()
    .min(1, "Слишком коротко")
    .max(64, "Слишком длинно")
    .required("Наполните это поле"),
});
