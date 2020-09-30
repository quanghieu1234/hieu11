firebase.firestore().collection("users").onSnapshot(function(querySnapshot) {
console.log(querySnapshot);
});
