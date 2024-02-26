(function($, document, window){
	
	$(document).ready(function(){

		// Cloning main navigation for mobile menu
		$(".mobile-navigation").append($(".main-navigation .menu").clone());

		// Mobile menu toggle 
		$(".menu-toggle").click(function(){
			$(".mobile-navigation").slideToggle();
		});

		var map = $(".map");
		var latitude = map.data("latitude");
		var longitude = map.data("longitude");
		if( map.length ){
			
			map.gmap3({
				map:{
					options:{
						center: [latitude,longitude],
						zoom: 15,
						scrollwheel: false
					}
				},
				marker:{
					latLng: [latitude,longitude],
				}
			});
			
		}
	});

	$(window).load(function(){

	});

})(jQuery, document, window);

// jaydeep


// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js';
// import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-analytics.js';
// import { getDatabase } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-database.js';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBppYIBeGGG9_A9Jix7MZa5v6bXPG6AzP8",
//   authDomain: "weather-19b7e.firebaseapp.com",
//   databaseURL: "https://weather-19b7e-default-rtdb.firebaseio.com",
//   projectId: "weather-19b7e",
//   storageBucket: "weather-19b7e.appspot.com",
//   messagingSenderId: "135047709000",
//   appId: "1:135047709000:web:3c4252c68f3b87fb8ef37d",
//   measurementId: "G-74BFKJTTRY"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// // Reference to the Firebase Realtime Database
// const db = getDatabase(app);
// const storageUrl = "https://weather-19b7e-default-rtdb.firebaseio.com/"; // Update the URL to the correct path in your database

// // Use the Fetch API to load the JSON file
// fetch(storageUrl)
//   .then(response => response.json())
//   .then(data => {
//     // Access the data and update the content on your webpage
//     document.getElementById('output').innerHTML = `
//         <p>Name: ${data.bmp}</p>
//         <p>Age: ${data.hehe}</p>
//     `;
//   })
//   .catch(error => console.error('Error loading JSON file:', error));





// pradeep


  
// const firebaseConfig = {
//   apiKey: "AIzaSyBppYIBeGGG9_A9Jix7MZa5v6bXPG6AzP8",
//   authDomain: "weather-19b7e.firebaseapp.com",
//   databaseURL: "https://weather-19b7e-default-rtdb.firebaseio.com",
//   projectId: "weather-19b7e",
//   storageBucket: "weather-19b7e.appspot.com",
//   messagingSenderId: "135047709000",
//   appId: "1:135047709000:web:3c4252c68f3b87fb8ef37d",
//   measurementId: "G-74BFKJTTRY"
// };
const firebaseConfig = {
apiKey: "AIzaSyBqomz7R-Y1gDpaytcDZfeJpHAf2fqHE84",
  authDomain: "weatherstation2-dce46.firebaseapp.com",
  databaseURL: "https://weatherstation2-dce46-default-rtdb.firebaseio.com",
  projectId : "weatherstation2-dce46",
  storageBucket: "weatherstation2-dce46.appspot.com",
  messagingSenderId: "1038917743222",
  appId: "1:1038917743222:web:18dec3bf4ee3a12b2f2557",
  measurementId:"G-KRH0152J2J"}
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        var conductivity = document.getElementById('conductivity');
        var prediksi = document.getElementById('prediksi');
        var temp = document.getElementById('temperature')
        var dbRef = firebase.database().ref().child('otherData/Humidity');
        dbRef.on('value', snap => conductivity.innerText =parseInt(snap.val()));
        var dbRef1 = firebase.database().ref().child('otherData/Temperature');
        dbRef1.on('value', snap => temperature.innerText = snap.val());
  





		
        var Humidity = document.getElementById('Humidity');
		var dbRef = firebase.database().ref().child('otherData/Humidity');
        dbRef.on('value', snap => Humidity.innerText =parseInt(snap.val()));

        var Pressure = document.getElementById('Pressure');
		var dbRef = firebase.database().ref().child('otherData/Pressure');
        dbRef.on('value', snap => Pressure.innerText =parseInt(snap.val()));
		
		var Altitude = document.getElementById('Altitude');
		var dbRef1 = firebase.database().ref().child('otherData/Altitude');
        dbRef1.on('value', snap => Altitude.innerText = snap.val());
		
		var PM25 = document.getElementById('PM25');
		var dbRef1 = firebase.database().ref().child('sdsData/PM25');
        dbRef1.on('value', snap => PM25.innerText = snap.val());

        var PM10 = document.getElementById('Pm10');
		var dbRef1 = firebase.database().ref().child('sdsData/Pm10');
        dbRef1.on('value', snap => Pm10.innerText = snap.val());
  
  
		function openLink(firstlink,secondlink){
			document.getElementById('linkopen').innerHTML='<iframe src="'+firstlink+'"></iframe><iframe src="'+secondlink+'"></iframe>';
			}
			
// MATTY GRAPH LODU

