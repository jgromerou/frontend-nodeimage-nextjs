'use client';
import { useReducer } from 'react';
import { AuthContext } from '@/contexts/authContext';
import authReducer from '@/reducers/authReducer';
import { types } from '@/types/types';
import dashAxios from '@/config/axios';

export const AuthProvider = ({ children }) => {
  //Definir un state inicial
  const initialState = {
    token: '',
    autenticado: null,
    usuario: null,
    mensaje: null,
  };

  //Definir el reducer
  const [state, dispatch] = useReducer(authReducer, initialState);

  //Registrar nuevos usuarios
  const registrarUsuario = async (datos) => {
    try {
      const respuesta = await dashAxios.post('api/usuarios', datos);
      console.log(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  //Usuario autenticado
  const usuarioAutenticado = (nombre) => {
    dispatch({
      type: types.usuarioAutenticado,
      payload: nombre,
    });
  };

  return (
    <AuthContext.Provider
      value={{ state, ...state, registrarUsuario, usuarioAutenticado }}
    >
      {children}
    </AuthContext.Provider>
  );
};
