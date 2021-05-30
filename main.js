function id(e) { return document.getElementById(e); }

function go(href) { location.href = href; }

function add(title, text, img, href) {
  id("panel").insertAdjacentHTML("afterbegin", `
    <div class="card">
      <div style="background: url(pictures/${img}); background-size: cover;" class="picture"></div>
      <p class="title">${title}</p>
      <p class="text">${text}</p>
      <button onclick="go('projects/${href}')"class="btn">Ver</button>
    </div>
  `);
}

function click(e, f) {
  e.addEventListener("click", () => { f(); });
}

let projects = id("projects");
let Activities = id("activities");

click(projects, () => {
  go("index.html");
});

click(activities, () => {
  go("activities.html");
});