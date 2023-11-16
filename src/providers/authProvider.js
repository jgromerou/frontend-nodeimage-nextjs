'use client';
import { useReducer } from 'react';
import { AuthContext } from '@/contexts/authContext';
import authReducer from '@/reducers/authReducer';
import { types } from '@/types/types';
import dashAxios from '@/config/axios';

export const AuthProvider = ({ children }) => {
  //Definir un state inicial
  const initialState = {
    token: typeof window !== 'undefined' ? localStorage.getItem('token') : '',
    autenticado: null,
    usuario: null,
    mensaje: null,
  };

  //Definir el reducer
  const [state, dispatch] = useReducer(authReducer, initialState);

  //Autenticar un usuario
  const autenticarUsuario = async (datos) => {
    try {
      const respuesta = await dashAxios.post('api/auth', datos);
      dispatch({
        type: types.auth.loginExitoso,
        payload: respuesta.data.token,
      });
      localStorage.setItem('token', respuesta.data.token);
    } catch (error) {
      const msg = error.response?.data?.errores[0]?.msg;
      dispatch({
        type: types.auth.loginError,
        payload: msg || 'Usuario o password incorrecto',
      });
    }
    //Limpia la Alerta después de 3 segundos
    setTimeout(() => {
      dispatch({
        type: types.auth.limpiarAlerta,
      });
    }, 3000);
  };

  //Registrar nuevos usuarios
  const registrarUsuario = async (datos) => {
    try {
      const respuesta = await dashAxios.post('api/usuarios', datos);
      dispatch({
        type: types.auth.registroExitoso,
        payload: respuesta.data.msg,
      });
    } catch (error) {
      dispatch({
        type: types.auth.registroExitoso,
        payload: error.response.data.msg,
      });
    }
    //Limpia la Alerta después de 2,5 segundos
    setTimeout(() => {
      dispatch({
        type: types.auth.limpiarAlerta,
      });
    }, 2500);
  };

  //Retorne el usuario autenticado en base al JWT
  const usuarioAutenticado = async () => {
    const token = localStorage.getItem('token') || null;
    try {
      if (token) {
        const respuesta = await dashAxios.get('api/auth');
        dispatch({
          type: types.auth.usuarioAutenticado,
          payload: respuesta.data.usuario,
        });
      }
    } catch (error) {
      dispatch({
        type: types.auth.loginError,
        payload: error.response.data.msg,
      });
    }
  };

  //Cerrar la sesión
  const cerrarSesion = () => {
    localStorage.clear();
    dispatch({ type: types.auth.cerrarSesion });
  };

  //Usuario autenticado
  // const usuarioAutenticado = (nombre) => {
  //   dispatch({
  //     type: types.auth.usuarioAutenticado,
  //     payload: nombre,
  //   });
  // };

  return (
    <AuthContext.Provider
      value={{
        state,
        ...state,
        autenticarUsuario,
        registrarUsuario,
        usuarioAutenticado,
        cerrarSesion,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
