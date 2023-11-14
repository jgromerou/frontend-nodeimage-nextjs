import { types } from '@/types/types';

export default (state, action) => {
  switch (action.type) {
    case types.usuarioAutenticado:
      return {
        ...state,
        usuario: action.payload,
      };

    default:
      return state;
  }
};
