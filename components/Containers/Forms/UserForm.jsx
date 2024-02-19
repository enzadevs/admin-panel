"use client";

import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { UserFormSchema } from "./UserFormSchema";
import { IoSaveOutline } from "react-icons/io5";

export default function UserForm() {
  const router = useRouter();

  return (
    <>
      <Formik
        initialValues={{
          fullName: "",
          phoneNumber: "",
          password: "",
          address: "",
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            setSubmitting(false);
            resetForm();
          }, 500);
        }}
        validationSchema={UserFormSchema}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 w-full">
              <Field
                name="fullName"
                type="text"
                className="button-primary w-full pl-4"
                placeholder="Полное имя"
              />
              <ErrorMessage
                name="fullName"
                component="span"
                className="text-xs text-red-400 flex items-center"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <Field
                name="phoneNumber"
                type="text"
                className="button-primary w-full pl-4"
                placeholder="Номер телефона"
              />
              <ErrorMessage
                name="phoneNumber"
                component="span"
                className="text-xs text-red-400 flex items-center"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <Field
                name="password"
                type="password"
                className="button-primary w-full pl-4"
                placeholder="Пароль"
              />
              <ErrorMessage
                name="password"
                component="span"
                className="text-xs text-red-400 flex items-center"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <Field
                name="address"
                type="text"
                className="button-primary w-full pl-4"
                placeholder="Адрес"
              />
              <ErrorMessage
                name="address"
                component="span"
                className="text-xs text-red-400 flex items-center"
              />
            </div>
            <button
              className="button-primary button-hover center gap-2"
              disabled={isSubmitting}
              type="submit"
            >
              Сохранить
              <IoSaveOutline className="icons" />
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
