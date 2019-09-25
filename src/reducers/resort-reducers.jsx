const toggleButton = (state = { toggle: false }, action) => {
  switch (action.type) {
    case "TOGGLE_BUTTON":
      return {
        ...state,
        toggle: !state.toggle
      };
    default:
      return state;
  }
};

export default toggleButton;
