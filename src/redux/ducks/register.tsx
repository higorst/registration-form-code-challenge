import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
    loadRegisters: ['users'],
    deleteUser: ['user'],
    initSend: [],
    stopSend: [],
});

interface UserType {
    name: string
    document: number
    type: string
}
interface StateType {
    sending: boolean
    users: UserType[]
}

/**
 * Handlers
 */
const INITIAL_STATE: StateType = {
    sending: false,
    users: []
};

const initSend = (state = INITIAL_STATE, action: any) => {
    return { ...state, sending: true }
}

const stopSend = (state = INITIAL_STATE, action: any) => {
    return { ...state, sending: false }
}

const loadRegisters = (state = INITIAL_STATE, action: any) => {
    const { users } = action
    return { ...state, users: users }
}

const deleteUser = (state = INITIAL_STATE, action: any) => {
    const { user } = action
    const users = state.users.filter(item => !(item.name === user.name && item.document === user.document && item.type === user.type))
    return {
        ...state, users: users
    }
}

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
    [Types.LOAD_REGISTERS]: loadRegisters,
    [Types.DELETE_USER]: deleteUser,
    [Types.INIT_SEND]: initSend,
    [Types.STOP_SEND]: stopSend,
});
