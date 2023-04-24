const initState = {
    themeId: 1,
}

type actionType = {
    type: string,
    id : number
}

export type stateType = {
    themeId: number
}


export const themeReducer = (state = initState, action: actionType): stateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {
                ...state,
                themeId: action.id
            }
        default:
            return state
    }
}

export const changeThemeId = (id: number): actionType => ({ type: 'SET_THEME_ID', id }) // fix any
