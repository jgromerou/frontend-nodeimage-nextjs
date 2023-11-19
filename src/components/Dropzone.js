'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import dashAxios from '@/config/axios';

export default function Dropzone() {
  const onDrop = useCallback(async (acceptedFiles) => {
    console.log(acceptedFiles);

    //Crear un Form Data
    const formData = new FormData();
    formData.append('archivo', acceptedFiles[0]);

    const resultado = await dashAxios.post('api/archivos', formData);
    console.log(resultado.data);
  }, []);

  //Extraer contenido de Dropzone
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div className="md:flex-1 mb-3 mx-2 mt-16 lg:mt-0 flex flex-col items-center justify-center border-dashed border-gray-400 border-2 bg-gray-100 px-4">
      <div {...getRootProps({ className: 'dropzone w-full py-32' })}>
        <input className="h-100 " {...getInputProps()} />

        {isDragActive ? (
          <p className="text-2xl text-center text-gray-600">
            Suelta el archivo
          </p>
        ) : (
          <div className="text-center">
            <p className="text-2xl text-center text-gray-600">
              Seleccione un archivo y arrástralo aquí
            </p>
            <button
              className="bg-blue-700 w-full py-3 rounded-lg text-white my-10 hover:bg-blue-800"
              type="button"
            >
              Seleccione el archivo a subir
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
