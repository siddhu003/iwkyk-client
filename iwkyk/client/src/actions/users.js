import * as api from '../api'

export const fetchAllUsers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAllUsers()
        dispatch({ type: 'FETCH_USERS', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const updateProfile = (id, updateData) => async (dispatch) => {
    try {
        const { data } = await api.updateProfile(id, updateData) 
        dispatch({ type: 'UPDATE_CURRENT_USER', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const updateCurrentPlan = (id, updateData) => async (dispatch) => {
    try {
        const { data } = await api.updateProfile(id, updateData) 
        dispatch({ type: 'UPDATE_CURRENT_PLAN', payload: data })
        // console.log(updateData)
    } catch (error) {
        console.log(error)
    }
}

export const updateFollow = (id, followData) => async (dispatch) => {
    try {
        // const { followId, followName } = followData
        const followId = followData
        // const { data } = await api.addFollow(id, followId, followName)
        const { data } = await api.addFollow(id, followId)
        dispatch({type: 'UPDATE_FOLLOW', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const updateUnFollow = (id, unFollowData) => async (dispatch) => {
    try {
        const followId = unFollowData
        const { data } = await api.unFollow(id, followId)
        dispatch({ type: 'UPDATE_UNFOLLOW', payload: data })
    } catch (error) {
        console.log(error)
    }
}