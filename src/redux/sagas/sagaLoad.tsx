import { call, all, put, delay } from "redux-saga/effects";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
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
function* loadUsers() {
    let users: UserType[] = []
    const snapshot = yield usersRef.get()
    users = yield snapshot.docs
        .map((doc: any) => {
            return doc.data()
        })
    yield all(users)
    return users
}

export function* sagaLoad() {

    try {
        const data = yield loadUsers()
        yield put({ type: Types.LOAD_REGISTERS, users: data })
    } catch (error) {
        yield put({ type: Types.LOAD_REGISTERS, users: [] })
    }
}
