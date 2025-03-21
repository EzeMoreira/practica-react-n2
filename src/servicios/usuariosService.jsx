import firebase from "../Config/Firebase";

export async function create(payload){
    const responseUser = await firebase.auth().createUserWithEmailAndPassword(payload.email)
    console.log("Create ID del usuario:", responseUser.user.uid)
    const document = await firebase.firestore().collection("usuarios")
    .add({
        name:puyload.nombre,
        lastname:payload.apellido,
        userId:responseUser.user.uid
    })
    console.log(document)

    return document
}

export async function login(email, password){
    const responseUser = await firebase.auth().signInWithEmailAndPassword(email, password)
    return responseUser.user.uid
}