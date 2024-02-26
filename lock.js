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

function replaceSpinnerWithTick(spinnerId, spanId, text) {
  // Get the spinner and span elements
  var spinner = document.getElementById(spinnerId);
  var span = document.getElementById(spanId);
  // Set a timeout to change the spinner to a green tick after 3000 milliseconds (3 seconds)
  // Replace the spinner with a green tick
  spinner.classList.remove('spinner-border', 'text-dark');
  spinner.classList.add('text-success');
  spinner.innerHTML = '<svg width="25px" height="25px" viewBox="0 0 16 16" class="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.742 11.95a1 1 0 0 1-1.415 0L2.82 9.82a1 1 0 1 1 1.415-1.414l1.828 1.828 4.364-4.364a1 1 0 1 1 1.414 1.414l-5.778 5.778z"/></svg>';
  // Update the text
  span.textContent = text + " Checked";
}


function replaceSpinnerWithCross(spinnerId, spanId, text) {
  // Get the spinner and span elements
  var spinner = document.getElementById(spinnerId);
  var span = document.getElementById(spanId);

  // Set a timeout to change the spinner to a red cross after 3000 milliseconds (3 seconds)

    // Replace the spinner with a red cross SVG
    spinner.classList.remove('spinner-border', 'text-dark');
    spinner.classList.add('text-danger');
    spinner.innerHTML = '<svg width="25px" height="25px" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M11.354 4.646a.5.5 0 0 0-.708 0L8 7.293 4.354 3.646a.5.5 0 0 0-.708 0l-.708.707a.5.5 0 0 0 0 .708L7.293 8l-3.647 3.646a.5.5 0 0 0 0 .708l.707.708a.5.5 0 0 0 .708 0L8 8.707l3.646 3.647a.5.5 0 0 0 .708 0l.707-.708a.5.5 0 0 0 0-.708L8.707 8l3.647-3.646a.5.5 0 0 0 0-.708l-.707-.708z"/></svg>';

    // Update the text
    span.textContent = text + " Failed";
}

function check() {
  // Get the container element by its id
  // document.querySelector('.login-container').style.background = "#fff";
  var container = document.getElementById("oncekl");
  var head = document.getElementById("loginhead");
  head.innerHTML = ""

  // Set the innerHTML of the container to the new content
  container.innerHTML = `
  <table>
  <tr>
    <td>
      <div id="sdsSpinner" class="spinner-border " style="width: 25px; height: 25px; color:#fce7a9;" role="status">
        <span  class="visually-hidden">Loading...</span>
      </div>
    </td>
    <td>
      <span id="sdsSpan" class="fs-5 fw-bold text-light">Checking SDS Sensor</span>
    </td>
  </tr>

  <tr>
    <td>
      <div id="dhtSpinner" class="spinner-border" style="width: 25px; height: 25px; color:#fce7a9;" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </td>
    <td >
      <span id="dhtSpan" class="fs-5 fw-bold text-light">Checking DHT Sensor</span>
    </td>
  </tr>

  <tr>
    <td>
      <div id="bmpSpinner" class="spinner-border " style="width: 25px; height: 25px; color:#fce7a9" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </td>
    <td>
      <span id="bmpSpan" class="fs-5 fw-bold text-light">Checking BMP Sensor</span>
    </td>
  </tr>
</table>
`;
  // Set a timeout to change the spinners to green ticks after 3000 milliseconds (3 seconds)
  var checkRef = firebase.database().ref().child('debug/check');
  checkRef.set(1)
  var sdsref = firebase.database().ref().child('debug/sds');
  sdsref.on('value', snap => {
      tempsds = snap.val();
      console.log(tempsds)
      if (tempsds) {
          replaceSpinnerWithTick("sdsSpinner", "sdsSpan", "SDS Sensor");
      }
      else if (tempsds == 0) {
          replaceSpinnerWithCross("sdsSpinner", "sdsSpan", "SDS Sensor");
      }
      // else {
          //     document.write("Checking SDS....." + "<br>")
          // }
      });
      var dhtref = firebase.database().ref().child('debug/dht11');
      dhtref.on('value', snap => {
          tempdht = snap.val();
          console.log(tempdht)
          if (tempdht) {
              replaceSpinnerWithTick("dhtSpinner", "dhtSpan", "DHT Sensor");
          }
          else if (tempdht == 0) {
          replaceSpinnerWithCross("dhtSpinner", "dhtSpan", "DHT Sensor");
      }
      // else {
      //     document.write("Checking DHT11....." + "<br>")
      // }
  });
  var bmpref = firebase.database().ref().child('debug/bmp');
  bmpref.on('value', snap => {
      temmpbmp = snap.val();
      console.log(temmpbmp)
      if (temmpbmp) {
          replaceSpinnerWithTick("bmpSpinner", "bmpSpan", "BMP Sensor");
      }
      else if (temmpbmp == 0) {
          replaceSpinnerWithCross("bmpSpinner", "bmpSpan", "BMP Sensor");
      }
      // else {
      //     document.write("Checking BMP......" + "<br>")
      // }
  });


}


function validateLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Replace these with your actual credentials
  var validUsername = "admin";
  var validPassword = "admin123";

  if (username === validUsername && password === validPassword) {
      // alert("Login successful!");

      // Display additional content (replace with your content)
      document.getElementById("loginForm").style.display = "none";
      document.getElementById("securedContent").style.display = "block";
  } else {
      alert("Invalid username or password. Please try again.");
  }
}