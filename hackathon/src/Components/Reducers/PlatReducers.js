const plat = [];

const todo = (state = plat, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state, {
          title: action.title,
          details: action.title,
          ingredients: action.ingredients,
          img: action.img,
        },
      ];
    case 'TOGGLE_TODO':
      return (
        state.map((el, index) => (index === action.id) ? {
          text: el.text,
          isDone: !el.isDone,
        }:el)
      );
    case 'REMOVE_TODO':
      return (
        state.filter((el, index) => index != action.id)
      );
    default: return state;
  }
};

export default todo;
