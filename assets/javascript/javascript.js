var config = {
    apiKey: "AIzaSyDjluOVqlc8KteL8aHveMEORIlpMGfQPkg",
    authDomain: "train-scheduler-2ca1a.firebaseapp.com",
    databaseURL: "https://train-scheduler-2ca1a.firebaseio.com",
    projectId: "train-scheduler-2ca1a",
    storageBucket: "train-scheduler-2ca1a.appspot.com",
    messagingSenderId: "573028567462",
    appId: "1:573028567462:web:c7c9ca9471a76aeb05a767",
    measurementId: "G-T2BLGB20T8"
};
// Initialize Firebase
firebase.initializeApp(config);
//firebase.analytics();

var trainData = firebase.database();

$("#addTrainBtn").on("click", function () {
    var trainName = $("#trainNameInput").val().trim();
    var destination = $("#destinationInput").val().trim();
    var firstTrain = moment($("#firstTrainInput").val().trim(), "HH;mm").subtract(10, "years").format("X");
    var frequency = $("#frequencyInput").val().trim();

    var newTrain = {
        name: trainName,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency
    }

    trainData.ref().push(newTrain);

    alert("Train Added!");

    $("trainNameInput").val("");
    $("destinationInput").val("");
    $("firstTrainInput").val("");
    $("frequencyInput").val("");

    console.log(firstTrain);
    return false;
})

trainData.ref().on("child_added", function (snapshot) {
    var name = snapshot.val().name;
    var destination = snapshot.val().destination;
    var frequency = snapshot.val().frequency;
    var firstTrain = snapshot.val().firstTrain;

    var remainder = moment().diff(moment.unix(firstTrain), "minutes") % frequency;
    var minutes = frequency - remainder;
    var arrival = moment().add(minutes, "m").format("hh:mm A");

    console.log(remainder);
    console.log(minutes);
    console.log(arrival);
})