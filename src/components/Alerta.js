import { AuthContext } from '@/contexts/authContext';
import { useContext } from 'react';

export default function Alerta() {
  const { mensaje } = useContext(AuthContext);
  return (
    <div className="bg-red-500 py-2 px-3 w-full my-3 max-w-lg text-center text-white mx-auto">
      {mensaje}
    </div>
  );
}
