const initState = {
    themeId: 1,
}
type initStateType = typeof initState
export const themeReducer = (state = initState, action: changeThemeIdActionType): initStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state,themeId: action.id}
        default:
            return state
    }
}
type changeThemeIdActionType = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id }) // fix any
