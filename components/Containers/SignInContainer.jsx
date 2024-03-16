"use client";

import Image from "next/image";
import Logo from "public/assets/logo_only_transparent.png";
import { SuccessToast, ErrorToast } from "components/Functions/Toaster";
import { UseAdminData } from "utils/UseAdminData";
import { AdminFormSchema } from "utils/AdminFormSchema";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SlLock } from "react-icons/sl";
import { BsPhone } from "react-icons/bs";

export default function SignInContainer() {
  const setAdmin = UseAdminData((state) => state.setAdmin);

  const checkUser = async (phoneNumber, password) => {
    try {
      const response = await fetch("http://localhost:3001/auth/isadmin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber,
          password,
        }),
      });

      if (response.ok) {
        const adminInfo = await response.json();
        setAdmin(adminInfo);
        SuccessToast({ successText: "Вы успешно вошли в аккаунт." });
        setTimeout(() => {
          window.location.href = "/home";
        }, 500);
      } else {
        const error = await response.json();
        ErrorToast({
          errorText: error.message,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await checkUser(values.phoneNumber, values.password);
      setSubmitting(false);
      resetForm();
    } catch (error) {
      console.log("Неправильные данные.");
    }
  };

  return (
    <div className="bg-mercury border border-mercury-200 rounded-lg flex flex-col items-center gap-4 p-4 h-fit w-[360px]">
      <span className="center flex-col gap-2 w-full">
        <Image
          src={Logo}
          alt="image"
          height={200}
          width={200}
          className="object-cover"
          sizes="50vw"
          priority="true"
        ></Image>
        <p className="text-xl font-mono">Admin Tools</p>
      </span>
      <Formik
        initialValues={{
          phoneNumber: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={AdminFormSchema}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-4 w-full">
            <div className="relative flex flex-col w-full">
              <Field
                name="phoneNumber"
                type="text"
                className="input-outline pl-4 pr-10"
                placeholder="Номер телефона"
              />
              <span className="center absolute right-0 h-10 w-10">
                <BsPhone className="icons" />
              </span>
              <ErrorMessage
                name="phoneNumber"
                component="span"
                className="text-xs text-red-400 ml-4"
              />
            </div>
            <div className="relative flex flex-col w-full">
              <Field
                name="password"
                type="password"
                className="input-outline pl-4 pr-10"
                placeholder="Пароль"
              />
              <span className="center absolute right-0 h-10 w-10">
                <SlLock className="icons" />
              </span>
              <ErrorMessage
                name="password"
                component="span"
                className="text-xs text-red-400 ml-4"
              />
            </div>
            <button
              className="button-primary center gap-2 h-10"
              disabled={isSubmitting}
              type="submit"
            >
              Войти
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
