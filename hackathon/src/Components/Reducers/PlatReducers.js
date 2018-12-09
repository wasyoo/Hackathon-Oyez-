const plats = [{
  id: 1, title: 'cc', details: 'gg', ingredients: 'ff',
}];

const todo = (state = { plats }, action) => {
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
    case 'REMOVE_TODO':
      return (
        state.filter((el, index) => index != action.id)
      );
    default: return state;
  }
};

export default todo;
