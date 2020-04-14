// // TODO: Replace the following with your app's Firebase project configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyAXCjxVtuf93UH8jpEdcBcyV7sH2U6_ckY",
//     authDomain: "dripdetec.firebaseapp.com",
//     databaseURL: "https://dripdetec.firebaseio.com",
//     projectId: "dripdetec",
//     storageBucket: "dripdetec.appspot.com",
//     messagingSenderId: "58303797467",
//     appId: "1:58303797467:web:1c29c3977d6949e51694fe",
//     measurementId: "G-FDJEZKW6X0"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//

const preObject = document.getElementById('object');
const db = firebase.database();
// dbRefObject.on('value', snap => console.log(snap.val()));

const submit = document.getElementById('submit');

submit.addEventListener("click", function(){
  var patID = Date.now() % Math.pow(10,7);
  console.log(patID);
  const name = document.getElementById('inputName').value;
  const age = document.getElementById('inputAge').value;
  const disease = document.getElementById('inputDisease').value;
  const bloodGroup = document.getElementById('inputBloodGroup').value;
  const gender = document.getElementById('inputGender').value;
  const doctor = document.getElementById('inputDoctorName').value;
  const mobile = document.getElementById('inputNumber').value;
  const room = document.getElementById('inputRoomNumber').value;
  const bed = document.getElementById('inputBedNumber').value;
  // const auth = firebase.auth();
  // auth.createUserWithEmailAndPassword(email,password);
  // console.log(login_mess);
  // firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // // Handle Errors here.
  // var errorCode = error.code;
  // var errorMessage = error.message;
  // ...
  db.ref(patID).set({
    patientName: name,
    patientAge: age,
    patientDisease: disease,
    patientBloodGroup: bloodGroup,
    patientGender: gender,
    consultingDoctor: doctor,
    patientMobile: mobile,
    roomNumber: room,
    bedNumber: bed

  });

});
// console.log(errorCode);
//
// });
