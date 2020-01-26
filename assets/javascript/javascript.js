var config = {
    apiKey: "AIzaSyAyVQ3eg1ez08-KT85EfETVaN25csWyHiA",
    authDomain: "train-scheduler-1934f.firebaseapp.com",
    databaseURL: "https://train-scheduler-1934f.firebaseio.com",
    projectId: "train-scheduler-1934f",
    storageBucket: "train-scheduler-1934f.appspot.com",
    messagingSenderId: "212664747432",
    appId: "1:212664747432:web:1fe3a1533f6d30547c099d",
    measurementId: "G-2E1LRRDL6W"
};

firebase.initializeApp(config);

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