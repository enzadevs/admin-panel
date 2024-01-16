'use client'

import Image from 'next/image'
import Logo from 'public/assets/logo_only_transparent.png'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import {PiUserCircleLight} from 'react-icons/pi'
import {SlLock} from 'react-icons/sl'
import { BsPhone } from 'react-icons/bs'

const AdminFormSchema = Yup.object().shape({
    full_name: Yup.string()
        .min(1, 'Слишком коротко')
        .max(64, 'Слишком длинно')
        .required('Наполните это поле'),
    phone_number: Yup.string()
        .min(1, 'Слишком коротко')
        .max(64, 'Слишком длинно')
        .required('Наполните это поле'),
    password: Yup.string()
        .min(1, 'Слишком коротко')
        .max(64, 'Слишком длинно')
        .required('Наполните это поле')
})

export default function SignInContainer(){
    return(
        <div className='bg-calm-50 border border-light rounded-lg flex flex-col items-center gap-4 p-4 h-fit w-96'>
            <span className='center flex-col gap-2 text-xl w-full'>
                <Image
                    src={Logo}
                    alt='image'
                    height={200}
                    width={200}
                    className='object-cover'
                    sizes='50vw'
                    priority='true'
                >
                </Image>
                <p>{'"Älem Tilsimat"'}</p>
                <p>E-Commerce Tools</p>
            </span>
            <Formik
                initialValues={{
                    full_name: '',
                    phone_number: '',
                    password: ''
                }}
                onSubmit={(values, {setSubmitting,resetForm}) => {
                    setTimeout(() => {
                        setSubmitting(false)
                        resetForm()
                    }, 500)
                }}
                validationSchema={AdminFormSchema}
            >
                {({isSubmitting}) => (
                    <Form className='flex flex-col gap-4 w-full'>
                        <div className='relative flex flex-col w-full'>
                            <Field name='full_name' type='text' className='button-primary w-full pl-4 pr-10' placeholder='Полное имя'/>
                            <span className='center absolute right-0 h-10 w-10'>
                                <PiUserCircleLight className='h-6 w-6'/>
                            </span>
                            <ErrorMessage name='full_name' component='span' className='text-xs text-red-400 ml-4'/>
                        </div>
                        <div className='relative flex flex-col w-full'>
                            <Field name='phone_number' type='text' className='button-primary w-full pl-4 pr-10' placeholder='Номер телефона'/>
                            <span className='center absolute right-0 h-10 w-10'>
                                <BsPhone className='icons'/>
                            </span>
                            <ErrorMessage name='phone_number' component='span' className='text-xs text-red-400 ml-4'/>
                        </div>
                        <div className='relative flex flex-col w-full'>
                            <Field name='password' type='password' className='button-primary w-full pl-4 pr-10' placeholder='Пароль'/>
                            <span className='center absolute right-0 h-10 w-10'>
                                <SlLock className='icons'/>
                            </span>
                            <ErrorMessage name='password' component='span' className='text-xs text-red-400 ml-4'/>
                        </div>
                        <button
                            className='button-primary button-hover center gap-2'
                            disabled={isSubmitting} 
                            type='submit'
                        >
                            Войти
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}