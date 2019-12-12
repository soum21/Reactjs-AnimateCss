export const testAction = (project) => {
    console.log(project)
    return (dispatch, getState) => {
        dispatch({ type: 'CREATE_TEST', payload: project })
    }
}