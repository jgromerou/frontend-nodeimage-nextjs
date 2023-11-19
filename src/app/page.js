import Link from 'next/link';
import Dropzone from '@/components/Dropzone';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 mt-20">
      <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32">
        <div className="lg:flex md:shadow-lg p-5 bg-white rounded-lg py-10">
          <Dropzone />
          <div className="md:flex-1 mb-3 mx-2 mt-16 lg:mt-0">
            <h2 className="text-4xl font-sans font-bold text-gray-800 my-4">
              Compartir archivos de forma sencilla y privada
            </h2>
            <p className="text-lg loading-tools">
              <span className="text-red-500 font-bold">ReactNodeSend</span> te
              permite compartir archivos con cifrado de extremo a extremo que es
              eliminado después de ser descargado. Asi que puedes mantener lo
              que compartes y asegurarte de que tus cosas no permanezcan en
              líneas para siempre.
            </p>
            <Link
              href="/crearcuenta"
              className="text-red-500 font-bold text-lg hover:text-red-700"
            >
              Crear una cuenta para mayor beneficio
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
