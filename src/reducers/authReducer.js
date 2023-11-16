import { types } from '@/types/types';

export default (state, action) => {
  switch (action.type) {
    case types.auth.usuarioAutenticado:
      return {
        ...state,
        usuario: action.payload,
      };

    case types.auth.registroExitoso:
    case types.auth.registroError:

    case types.auth.loginError:
      return {
        ...state,
        mensaje: action.payload,
      };

    case types.auth.loginExitoso:
      return {
        ...state,
        token: action.payload,
        autenticado: true,
      };

    case types.auth.limpiarAlerta:
      return {
        ...state,
        mensaje: null,
      };

    case types.auth.cerrarSesion:
      return {
        ...state,
        usuario: null,
        token: null,
        autenticado: null,
      };

    default:
      return state;
  }
};
