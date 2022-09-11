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

const likeCounter = document.createElement("span");

fetch("http://localhost:3000/songs")
  .then((resp) => resp.json())
  .then((currentLikeData) => setLikeCounter(currentLikeData, id, likeCounter));

function setLikeCounter(currentLikeData, id, likeCounter) {
  const likedSong = currentLikeData.find(
    (Element) => Element["id"] === id.innerText
  );

  if (typeof likedSong === "undefined") {
    likeCounter.innerText = "0 likes";
  } else if (typeof likedSong === 1) {
    likeCounter.innerText = "1 like";
  } else {
    likeCounter.innerText = `${likedSong["likes"]} likes`;
  }
}

function handleLike(e) {
  let currentLikes = parseInt(e.target.previousElementSibling.innerText);
  const id = e.target.previousElementSibling.previousElementSibling.innerText;

  if (currentLikes === 0) {
    const newSong = {
      id: id,
      likes: 1,
    };

    fetch("http://localhost:3000/songs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSong),
    })
      .then((resp) => resp.json())
      .then(
        () =>
          (e.target.previousElementSibling.innerText = `${
            currentLikes + 1
          } like`)
      );
  } else {
    fetch(`http://localhost:3000/songs${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: currentLikes + 1,
      }),
    })
      .then((resp) => resp.json())
      .then(
        () =>
          (e.target.previousElementSibling.innerText = `${
            currentLikes + 1
          } likes`)
      );
  }
}
