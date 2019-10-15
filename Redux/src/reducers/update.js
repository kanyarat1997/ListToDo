import Action from '../actions'

var initialState = {
    list: [],
    number_all: 0,
    number_todo: 0
}

export default function updateState(state = initialState, action) {
    switch (action.type) {
        case Action.ADD_LIST:
            console.log("1")
            state.list.push({ name: action.value_list, class: "" })
            state.number_all = state.number_all + 1
            state.number_todo = state.number_todo + 1
            break;
        case Action.CHANGE_CLASS:
            if (state.list[action.index].class == "line") {
                state.list[action.index].class = ""
                state.number_todo = state.number_todo + 1
            }
            else {
                state.list[action.index].class = "line"
                state.number_todo = state.number_todo - 1
            }
            break;
    }
    return state
}