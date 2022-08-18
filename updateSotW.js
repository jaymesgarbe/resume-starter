// automate Song of the Week updating. . .

window.onload = function () {
  const form = document.getElementById("newsletterForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      alert("Success!");
      document.getElementById("buttonPopup").hidden = true;
      document.getElementById("emailButton").innerHTML = `
      <div id='boxDiv'>
        <h3 class='afterButton'> Subscribed to<br />SotW Notifications! </h3>
      </div>
      `;
    });
  });
};

function test() {
  alert("just testing :)");
}

function addToNewsletter() {
  document.getElementById("buttonPopup").hidden = false;
}
