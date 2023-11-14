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
      return {
        ...state,
        mensaje: action.payload,
      };

    case types.auth.limpiarAlerta:
      return {
        ...state,
        mensaje: null,
      };

    default:
      return state;
  }
};
