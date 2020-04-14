const div = document.getElementById('show');

const db = firebase.database();
db.ref().on('value', function(snapshot) {
div.innerHTML = "";
// var key = snapshot.key;
snapshot.forEach(function(childSnapshot) {
    var patID = childSnapshot.key;
    var div1 = document.createElement('div');
    div.appendChild(div1);


    var name = childSnapshot.child("patientName").val();
    var div2 = document.createElement('div');
    div1.appendChild(div2);
    div2.innerText = name;

    var age = childSnapshot.child("patientAge").val();
    var div3 = document.createElement('div');
    div1.appendChild(div3);
    div3.innerText = age;
    // childSnapshot.forEach(function(child2Snapshot) {
    //     // var childKey = child2Snapshot.key;
    //     // console.log(childKey);
    //     var name = snapshot.child("patientName").val();
    //
    //     j++;
    //   });
  });
});

console.log(patients);
