import {ACTIONS} from './actions';

const mainReducer = (state = {
	mainData: null
}, action) => {
	switch (action.type) {
		case ACTIONS.CUSTOM_DATA:
		default:
			return {
				...state
			}
	}
};

export default mainReducer;
