'use client';

import { useContext, useEffect } from 'react';
import { AuthContext } from '@/contexts/authContext';
import Link from 'next/link';

export default function Header() {
  //Extraer el usuario auntenticado del Storage
  const {
    usuarioAutenticado,
    autenticado,
    paginaSinLogin,
    usuario,
    cerrarSesion,
  } = useContext(AuthContext);

  useEffect(() => {
    usuarioAutenticado();
  }, [autenticado, paginaSinLogin]);

  return (
    <header className="py-8 flex flex-col md:flex-row items-center justify-between">
      <Link href="/">
        <img className="w-64 mb-8 md:mb-0" src="logo.svg" alt="logo imagen" />
      </Link>

      <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-2">
        {usuario ? (
          <div className="flex items-center ">
            <p className="mr-2">Hola {usuario.nombre}</p>
            <button
              type="button"
              className="bg-black px-5 py-3 rounded-lg text-white font-bold uppercase "
              onClick={() => cerrarSesion()}
            >
              Cerrar Sesión
            </button>
          </div>
        ) : (
          <div className={`${paginaSinLogin ? '' : 'hidden'}`}>
            <Link
              href="/login"
              className="bg-red-500 px-5 py-3 rounded-lg text-white font-bold uppercase mr-1"
            >
              Iniciar Sesión
            </Link>
            <Link
              href="/crearcuenta"
              className="bg-black px-5 py-3 rounded-lg text-white font-bold uppercase "
            >
              Crear Cuenta
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
