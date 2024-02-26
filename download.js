
// const firebaseConfig = {
    // apiKey: "AIzaSyBqomz7R-Y1gDpaytcDZfeJpHAf2fqHE84",
    // authDomain: "weatherstation2-dce46.firebaseapp.com",
    // databaseURL: "https://weatherstation2-dce46-default-rtdb.firebaseio.com",
    // projectId: "weatherstation2-dce46",
    // storageBucket: "weatherstation2-dce46.appspot.com",
    // messagingSenderId: "1038917743222",
    // appId: "1:1038917743222:web:18dec3bf4ee3a12b2f2557",
    // measurementId: "G-KRH0152J2J"
// }
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

function downloadtemperature() {
    var tempdownload = firebase.database().ref().child('download/temperature');
    tempdownload.set(1)
}
function downloadhumidity() {
    var humdownload = firebase.database().ref().child('download/humidity');
    humdownload.set(1)
}
function downloadpm10() {
    var pm10download = firebase.database().ref().child('download/pm10');
    pm10download.set(1)
}
function downloadpm25() {
    var pm25download = firebase.database().ref().child('download/pm25');
    pm25download.set(1)
}
function downloadaltitude() {
    var altitudedownload = firebase.database().ref().child('download/altitude');
    altitudedownload.set(1)
}
function downloadpressure() {
    var pressdownload = firebase.database().ref().child('download/pressure');
    pressdownload.set(1)
}


var time = ["Time"]
var data = ["Temperature"]
var tempref = firebase.database().ref().child('otherData/Temperature');
tempref.on('value', snap => {
    const timestamp = new Date();
    time.push(timestamp.getDate() + "/" + timestamp.getMonth() + " at " + timestamp.getHours() + ":" + timestamp.getMinutes() + ":" + timestamp.getSeconds());
    tempsds = snap.val()
    data.push(tempsds)
});
var tempdowm = firebase.database().ref().child('download/temperature');
tempdowm.on('value', snap => {
    td = snap.val()
    executed = false
    while (td == 1) {
        downloadExcel(time, data, "Temperature")
        tempdowm.set(0);
        break;
    }
});

var timeh = ["Time"]
var datah = ["Humidity"]
var temprefh = firebase.database().ref().child('otherData/Humidity');
temprefh.on('value', snap => {
    const timestamp = new Date();
    timeh.push(timestamp.getDate() + "/" + timestamp.getMonth() + " at " + timestamp.getHours() + ":" + timestamp.getMinutes() + ":" + timestamp.getSeconds());
    tempsds = snap.val()
    datah.push(tempsds)
});
var tempdowmh = firebase.database().ref().child('download/humidity');
tempdowmh.on('value', snap => {
    td = snap.val()
    while (td == 1) {
        downloadExcel(timeh, datah, "Humidity")
        tempdowmh.set(0);
        break;
    }
});

var timep = ["Time"]
var datap = ["Pressure"]
var temprefp = firebase.database().ref().child('otherData/Pressure');
temprefp.on('value', snap => {
    const timestamp = new Date();
    timep.push(timestamp.getDate() + "/" + timestamp.getMonth() + " at " + timestamp.getHours() + ":" + timestamp.getMinutes() + ":" + timestamp.getSeconds());
    tempsds = snap.val()
    datap.push(tempsds)
});
var tempdowmp = firebase.database().ref().child('download/pressure');
tempdowmp.on('value', snap => {
    td = snap.val()
    while (td == 1) {
        downloadExcel(timep, datap, "Pressure")
        tempdowmp.set(0);
        break;
    }
});

var timea = ["Time"]
var dataa = ["Altitude"]
var temprefa = firebase.database().ref().child('otherData/Altitude');
temprefa.on('value', snap => {
    const timestamp = new Date();
    timea.push(timestamp.getDate() + "/" + timestamp.getMonth() + " at " + timestamp.getHours() + ":" + timestamp.getMinutes() + ":" + timestamp.getSeconds());
    tempsds = snap.val()
    dataa.push(tempsds)
});
var tempdowma = firebase.database().ref().child('download/altitude');
tempdowma.on('value', snap => {
    td = snap.val()
    while (td == 1) {
        downloadExcel(timea, dataa, "Altitude")
        tempdowma.set(0);
        break;
    }
});

var timepm10 = ["Time"]
var datapm10 = ["PM10"]
var temprefpm10 = firebase.database().ref().child('sdsData/Pm10');
temprefpm10.on('value', snap => {
    const timestamp = new Date();
    timepm10.push(timestamp.getDate() + "/" + timestamp.getMonth() + " at " + timestamp.getHours() + ":" + timestamp.getMinutes() + ":" + timestamp.getSeconds());
    tempsds = snap.val()
    datapm10.push(tempsds)
});
var tempdowmpm10 = firebase.database().ref().child('download/pm10');
tempdowmpm10.on('value', snap => {
    td = snap.val()
    while (td == 1) {
        downloadExcel(timepm10, datapm10, "PM10")
        tempdowmpm10.set(0);
        break;
    }
});

var timepm25 = ["Time"]
var datapm25 = ["PM25"]
var temprefpm25 = firebase.database().ref().child('sdsData/Pm10');
temprefpm25.on('value', snap => {
    const timestamp = new Date();
    timepm25.push(timestamp.getDate() + "/" + timestamp.getMonth() + " at " + timestamp.getHours() + ":" + timestamp.getMinutes() + ":" + timestamp.getSeconds());
    tempsds = snap.val()
    datapm25.push(tempsds)
});
var tempdowmpm25 = firebase.database().ref().child('download/pm25');
tempdowmpm25.on('value', snap => {
    td = snap.val()
    while (td == 1) {
        downloadExcel(timepm25, datapm25, "PM25")
        tempdowmpm25.set(0);
        break;
    }
});




function downloadExcel(array1, array2, filename) {
    // const array1 = [1, 2, 3, 4, 5];
    // const array2 = ['A', 'B', 'C', 'D', 'E'];
    const verticalData = array1.map((value, index) => [value, array2[index]]);

    const xlsxSheet = XLSX.utils.aoa_to_sheet(verticalData);
    const xlsxWorkbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(xlsxWorkbook, xlsxSheet, 'Sheet1');

    const buffer = XLSX.write(xlsxWorkbook, { bookType: 'xlsx', bookSST: false, type: 'array' });
    const blob = new Blob([buffer], { type: 'application/octet-stream' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename + ".xlsx";
    link.click();
}