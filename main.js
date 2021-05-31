function id(e) { return document.getElementById(e); }

function go(href) { location.href = href; }

function projectAdd(title, text, img, href) {
  id("panel").insertAdjacentHTML("afterbegin", `
    <div class="card">
      <img src="pictures/${img}" class="picture">
      <p class="title">${title}</p>
      <p class="text">${text}</p>
      <button onclick="go('projects/${href}')"class="btn">Ver</button>
    </div>
  `);
}

function publish(name, profile, text, img, date) {
  id("panel2").insertAdjacentHTML("afterbegin", `
  <div class="card2">
    <img src="pictures/${profile}" class="profile">
    <p class="name">${name}</p>
    <p style="margin: 1rem 0;" class="text">${text}</p>
    <div class="content">
      <img src="pictures/${img}">
    </div>
    <br>
    <p>${date}</p>
  </div>
  `);
}

function click(e, f) {
  e.addEventListener("click", () => { f(); });
}

let projects = id("projects");
let activities = id("activities");

click(projects, () => {
  go("index.html");
});

click(activities, () => {
  go("activities.html");
});