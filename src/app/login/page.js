'use client';

import Alerta from '@/components/Alerta';
import { AuthContext } from '@/contexts/authContext';
import { useFormik } from 'formik';
import { useContext, useEffect } from 'react';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';

export default function Login() {
  //definir el context
  const { autenticarUsuario, autenticado, mensaje } = useContext(AuthContext);

  //Next router
  const router = useRouter();

  useEffect(() => {
    console.log(autenticado);
    if (autenticado) {
      router.push('/');
    }
  }, [autenticado]);
  //Formulario y validación de Formik y yup
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    // TODO: Agregar validaciones correspondientes con respecto al Backend
    validationSchema: Yup.object({
      email: Yup.string()
        .email('El Email no es válido')
        .required('El Email es obligatorio'),
      password: Yup.string()
        .required('La contraseña no puede ir vacío')
        .min(6, 'La contraseña debe contener al menos 6 caracteres'),
    }),
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2));
      autenticarUsuario(values);
      //formik.resetForm();
    },
  });

  return (
    <main className="md:w-4/5 xl:w-3/5 mx-auto mb-32">
      <h2 className="text-4xl font-sans font-bold text-gray-800 text-center my-4">
        Iniciar Sesión
      </h2>
      {mensaje && <Alerta />}
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-lg">
          <form
            className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
            onSubmit={formik.handleSubmit}
          >
            <div className="mb-4">
              {/* Email */}
              <label
                className="block text-black text-sm font-bold m-2"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                  <p className="font-bold">Error</p>
                  <p>{formik.errors.email}</p>
                </div>
              ) : null}
              {/* Password */}
              <label
                className="block text-black text-sm font-bold m-2"
                htmlFor="password"
              >
                Password:
              </label>
              <input
                type="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                placeholder="Contraseña de usuario"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                  <p className="font-bold">Error</p>
                  <p>{formik.errors.password}</p>
                </div>
              ) : null}
            </div>
            <input
              type="submit"
              className="bg-red-500 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold"
              value="Ingresar"
            />
          </form>
        </div>
      </div>
    </main>
  );
}
