import Link from 'next/link';

export default function Header() {
  return (
    <header className="py-8 flex flex-col md:flex-row items-center justify-between">
      <Link href="/">
        <img className="w-64 mb-8 md:mb-0" src="logo.svg" alt="logo imagen" />
      </Link>

      <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-2">
        <Link
          href="/login"
          className="mr-1 bg-red-500 px-5 py-3 rounded-lg text-white font-bold uppercase mr-1"
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
    </header>
  );
}
