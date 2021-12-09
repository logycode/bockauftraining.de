var consent = localStorage.getItem("consentKey");

function closeCookies() {
    document.getElementById("cookieConsent").style.display = "none";
    consent = "granted";
    localStorage.setItem("consentKey", consent);
    // console.log(consent);
}

function showCookies() {
    if (consent != "granted") {
        document.getElementById("cookieConsent").style.display = "inline-flex";
    } else {
        document.getElementById("cookieConsent").style.display = "none";
    }
}

let modal = "";
let link = "";

function openModal(destinationID) {
    modal = document.getElementById(destinationID);
    modal.style.display = "block";
}

const span = document.getElementsByClassName("close")[0];

span.onclick = () => {
  modal.style.display = "none";
}

window.onclick = event => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}