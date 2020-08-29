const initState = { registration_btn_text: "Log in" , theme: "dark"};

const countReducer = (state = initState, action) => {
  if (action.type === 'ChangeToIn') {
	return ({
	  ...state,
	  registration_btn_text: "Log in",
	})
  }
  if (action.type === 'ChangeToOut') {
	return ({
	  ...state,
	  registration_btn_text: "Profile",
	})
  }
  if (action.type === 'ChangeToProfile') {
	return ({
	  ...state,
	  registration_btn_text: "Profile",
	})
  }

  if (action.type === 'DarkTheme') {
	return ({
	  ...state,
	  theme: "dark",
	})
  }
  if (action.type === 'PinkTheme') {
	return ({
	  ...state,
	  theme: "pink",
	})
  }
  if (action.type === 'YellowTheme') {
	return ({
	  ...state,
	  theme: "yellow",
	})
  }
  return state;
}

export default countReducer;