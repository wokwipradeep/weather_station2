
const firebaseConfig = {
    apiKey: "AIzaSyBqomz7R-Y1gDpaytcDZfeJpHAf2fqHE84",
    authDomain: "weatherstation2-dce46.firebaseapp.com",
    databaseURL: "https://weatherstation2-dce46-default-rtdb.firebaseio.com",
    projectId: "weatherstation2-dce46",
    storageBucket: "weatherstation2-dce46.appspot.com",
    messagingSenderId: "1038917743222",
    appId: "1:1038917743222:web:18dec3bf4ee3a12b2f2557",
    measurementId: "G-KRH0152J2J"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
    counth = 0
    let yaxistemph = [1]
    let xaxistemph = [1]
    var humidityref = firebase.database().ref().child('otherData/Humidity');
    humidityref.on('value', snap => {
        counth += 1
        tempsds = snap.val()
        // console.log(tempsds)
        yaxistemph.push(tempsds)
        xaxistemph.push(counth)
        let yaxish = yaxistemph.slice(1)
        let xaxish = xaxistemph.slice(1)
        // console.log(yaxis)
        // console.log(xaxis)
        plotGraph(xaxish, yaxish,"Humidity","humidity")
        // yaxiss.push(tempsds)
    });
    countt = 0
    let yaxistempt = [1]
    let xaxistempt = [1]
    var temperatureref = firebase.database().ref().child('otherData/Temperature');
    temperatureref.on('value', snap => {
        countt += 1
        tempsds = snap.val()
        // console.log(tempsds)
        yaxistempt.push(tempsds)
        xaxistempt.push(countt)
        let yaxist = yaxistempt.slice(1)
        let xaxist = xaxistempt.slice(1)
        // console.log(yaxis)
        // console.log(xaxis)
        plotGraph(xaxist, yaxist,"Temperature","temperature")
        // yaxiss.push(tempsds)
    });
    countpm1 = 0
    let yaxistemppm1 = [1]
    let xaxistemppm1 = [1]
    var temperatureref = firebase.database().ref().child('sdsData/Pm10');
    temperatureref.on('value', snap => {
        countpm1 += 1
        tempsds = snap.val()
        // console.log(tempsds)
        yaxistemppm1.push(tempsds)
        xaxistemppm1.push(countpm1)
        let yaxispm1 = yaxistemppm1.slice(1)
        let xaxispm1 = xaxistemppm1.slice(1)
        // console.log(yaxis)
        // console.log(xaxis)
        plotGraph(xaxispm1, yaxispm1,"PM10","pm10")
        // yaxiss.push(tempsds)
    });
    countpm5 = 0
    let yaxistemppm5 = [1]
    let xaxistemppm5 = [1]
    var temperatureref = firebase.database().ref().child('sdsData/PM25');
    temperatureref.on('value', snap => {
        countpm5 += 1
        tempsds = snap.val()
        // console.log(tempsds)
        yaxistemppm5.push(tempsds)
        xaxistemppm5.push(countpm5)
        let yaxispm5 = yaxistemppm5.slice(1)
        let xaxispm5 = xaxistemppm5.slice(1)
        // console.log(yaxis)
        // console.log(xaxis)
        plotGraph(xaxispm5, yaxispm5,"PM2.5","pm25")
        // yaxiss.push(tempsds)
    });
    countalt = 0
    let yaxistempalt = [1]
    let xaxistempalt = [1]
    var temperatureref = firebase.database().ref().child('otherData/Altitude');
    temperatureref.on('value', snap => {
        countalt += 1
        tempsds = snap.val()
        // console.log(tempsds)
        yaxistempalt.push(tempsds)
        xaxistempalt.push(countalt)
        let yaxisalt = yaxistempalt.slice(1)
        let xaxisalt = xaxistempalt.slice(1)
        // console.log(yaxis)
        // console.log(xaxis)
        plotGraph(xaxisalt, yaxisalt,"Altitude","altitude")
        // yaxiss.push(tempsds)
    });

    countpress = 0
    let yaxistempress = [1]
    let xaxistempress = [1]
    var temperatureref = firebase.database().ref().child('otherData/Pressure');
    temperatureref.on('value', snap => {
        countpress += 1
        tempsds = snap.val()
        // console.log(tempsds)
        yaxistempress.push(tempsds)
        xaxistempress.push(countpress)
        let yaxispress = yaxistempress.slice(1)
        let xaxispress = xaxistempress.slice(1)
        // console.log(yaxis)
        // console.log(xaxis)
        plotGraph(xaxispress, yaxispress,"Pressure","pressure")
        // yaxiss.push(tempsds)
    });
}

getData()
function plotGraph(x, y,title,link) {
    new Chart(link, {
        type: "line",
        data: {

            labels: x,
            datasets: [{
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(0,0,255,1.0)",
                borderColor: "rgba(0,0,255,0.2)",
                data: y
            }]
        },
        options: {
            legend : {display:false},
            title: {
                display: true,
                text: title, // Your chart title
                fontSize: 16, // Customize title font size if needed
                fontColor: 'black' // Customize title font color if needed
            },
            // scales:{
            //     // y : [{ticks :{min :6,max:16}}]
            // }
        }
    });

}
