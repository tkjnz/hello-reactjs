//actions
const SET_RULES = 'localusersettings_set_rule';
const SET__PANELS = 'localusersettings_set_active';

// initial state
const INITIAL_STATE = {
  activeCasePanels: [],
  isHelpPanelVisible: false
};

//reducer
export default function reducer(state = INITIAL_STATE, action) {
  return {
    activeCasePanels: [],
    isHelpPanelVisible: false
  };
}