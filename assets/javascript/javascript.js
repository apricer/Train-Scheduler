var firebaseConfig = {
    apiKey: "AIzaSyAyVQ3eg1ez08-KT85EfETVaN25csWyHiA",
    authDomain: "train-scheduler-1934f.firebaseapp.com",
    databaseURL: "https://train-scheduler-1934f.firebaseio.com",
    projectId: "train-scheduler-1934f",
    storageBucket: "train-scheduler-1934f.appspot.com",
    messagingSenderId: "212664747432",
    appId: "1:212664747432:web:1fe3a1533f6d30547c099d",
    measurementId: "G-2E1LRRDL6W"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var trainData = firebase.database();

$(#addTrainBtn).on("click", function () {
    var trainName = $("#trainNameInput").val().trim();
    var destination = $("#destinationInput").val().trim();
    var firstTrain = moment($("#firstTrainInput").val().trim(), "HH;mm").subtract(10, "years").format("X");
    var frequency = $("#frequencyInput").val().trim();

    console.log(firstTrain);
    return false;
})