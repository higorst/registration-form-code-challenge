import { call, put, delay } from "redux-saga/effects";

import { Types } from "../ducks/register";

import * as firebase from 'firebase'
import 'firebase/firestore'

// web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDc6XgjXkGBpufg0VqsrrD15_BlHw_oj8E",
    authDomain: "code-challenge-ruptiva.firebaseapp.com",
    databaseURL: "code-challenge-ruptiva.firebaseapp.com",
    projectId: "code-challenge-ruptiva",
    storageBucket: "code-challenge-ruptiva.appspot.com",
    messagingSenderId: "955807102545",
    appId: "1:955807102545:web:6ec81b5bd282e64b962a70"
};
if (firebase.apps.length === 0) {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore()
const usersRef = db.collection("users")

interface UserType {
    name: string
    document: number
    type: string
}
function* sendRegister(register: UserType) {
    yield usersRef.add(register)
        .then((response) => {
            return true
        })
        .catch((response) => {
            return false
        })
}

export function* sagaSend({ register }: { register: UserType }) {

    try {
        yield put({ type: Types.INIT_SEND })
        yield delay(2000)
        yield call(sendRegister, register)
        yield put({ type: Types.STOP_SEND })
    } catch (error) {
        yield put({ type: Types.STOP_SEND })
    }
}
