// collect image input from html
var imageInput = document.getElementById("image");

// collect image button from html
const imageBTN = document.getElementById("imageBTN");

var imageID = document.getElementById("dragBox");
var preview = document.getElementById("preview");
var btn = document.getElementById("btnLink");

function activityGeneral() {
  imageInput.onchange = dragNdrop;
  imageInput.ondrop = drop;
  imageInput.ondragover = drag;
  imageBTN.onclick = handlePreview;

  //ptrint out user name
  const name = document.getElementById("tagName");
  name.children[0].children[0].textContent = profileName.FirstName;
  name.children[0].children[1].textContent = profileName.SecondName;

  //print communication
  const communication = document.getElementById("tagCommunication");
  communication.children[0].children[1].textContent = extra.communication;

  const leadership = document.getElementById("tagLeadership");
  leadership.children[0].children[1].textContent = extra.leadership;
}

function activityReference(pin) {
  const content = document.getElementById("refernceContent");
  content.style.cssText = "position:relative;";

  if (pin) {
    content.innerHTML = "";
  }
  for (let i = extra.index; i < extra.reference.length; i++) {
    //container for holding item
    const name = document.createElement("li");
    name.textContent = extra.reference[i];
    content.appendChild(name);

    // div for deleting link
    const hold = document.createElement("div");
    hold.classList.add("app-button");
    hold.classList.add("deleteList");
    hold.classList.add("deleter");
    hold.setAttribute("data-index", i);
    hold.setAttribute("onclick", `deleteList(${i}, "reference")`);

    const remove = document.createElement("h1");
    remove.textContent = "*";
    hold.appendChild(remove);
    content.appendChild(hold);
  }
}
function activityExperience(pin) {
  const content = document.getElementById("ContentExperience");

  if (pin) {
    content.innerHTML = "";
  }

  for (let i = experience.index; i < experience.data.length; i++) {
    //container for holding item
    const div = document.createElement("div");
    div.style.cssText = "position:relative;";
    div.classList.add("linksItem");
    content.appendChild(div);

    const container = document.createElement("div");
    div.appendChild(container);

    const date = document.createElement("div");
    date.style.display = "flex";
    div.appendChild(date);

    const start = document.createElement("h5");
    start.textContent = `${experience.data[i].stateDate} -  `;
    date.appendChild(start);

    const end = document.createElement("h5");
    end.textContent = experience.data[i].endDate;
    date.appendChild(end);

    const list = document.createElement("ul");
    list.style.cssText = "display:flex; gap:20px; flex-wrap:wrap;";
    div.appendChild(list);

    const title = document.createElement("li");
    title.textContent = experience.data[i].title;
    list.appendChild(title);

    const position = document.createElement("li");
    position.textContent = experience.data[i].position;
    list.appendChild(position);

    const companyName = document.createElement("li");
    companyName.textContent = experience.data[i].companyName;
    list.appendChild(companyName);

    // div for deleting link
    const hold = document.createElement("div");
    hold.classList.add("app-button");
    hold.classList.add("deleteList");
    hold.classList.add("deleter");
    hold.setAttribute("data-index", i);
    hold.setAttribute("onclick", `deleteList(${i}, "experience")`);
    div.appendChild(hold);

    const remove = document.createElement("h1");
    remove.textContent = "*";
    hold.appendChild(remove);
  }

  const summary = document.createElement("p");
  summary.textContent = experience.summary;
  content.appendChild(summary);
}

function activityEducation(pin) {
  const content = document.getElementById("ContentEducation");

  if (pin) {
    content.innerHTML = "";
  }

  for (let i = education.index; i < education.data.length; i++) {
    //container for holding item
    const div = document.createElement("div");
    div.style.cssText = "position:relative;";
    div.classList.add("linksItem");
    content.appendChild(div);

    const container = document.createElement("div");
    div.appendChild(container);

    const address = document.createElement("div");
    address.style.display = "flex";
    div.appendChild(address);

    const name = document.createElement("h5");
    name.textContent = `${education.data[i].name} -  `;
    address.appendChild(name);

    const location = document.createElement("h5");
    location.textContent = education.data[i].location;
    address.appendChild(location);

    const list = document.createElement("ul");
    list.style.cssText = "display:flex; gap:20px; flex-wrap:wrap;";
    div.appendChild(list);

    const detail = document.createElement("li");
    detail.textContent = education.data[i].details;
    list.appendChild(detail);

    // div for deleting link
    const hold = document.createElement("div");
    hold.classList.add("app-button");
    hold.classList.add("deleteList");
    hold.classList.add("deleter");
    hold.setAttribute("data-index", i);
    hold.setAttribute("onclick", `deleteList(${i}, "education")`);
    div.appendChild(hold);

    const remove = document.createElement("h1");
    remove.textContent = "*";
    hold.appendChild(remove);
  }
}

function activitiesLinks(pin) {
  // input the list of links
  const content = document.getElementById("LinkContent");

  if (pin) {
    content.innerHTML = "";
  }
  for (let i = lists.index; i < lists.data.length; i++) {
    //container for holding item
    const div = document.createElement("div");
    div.style.cssText = "position:relative;";
    div.classList.add("linksItem");

    const url = document.createElement("a");
    url.setAttribute("href", lists.data[i].url);

    var image = document.createElement("img");
    image.classList.add("linksIcon");
    if (lists.data[i].name.search("/instagram/") > 0) {
      image.setAttribute("src", "./img/instagram-icon.svg");
    } else {
      image.setAttribute("src", "./img/web-icon.svg");
    }

    const text = document.createElement("p");
    text.textContent = lists.data[i].name;

    // div for deleting link
    const hold = document.createElement("div");
    hold.classList.add("app-button");
    hold.classList.add("deleteList");
    hold.classList.add("deleter");
    hold.setAttribute("data-index", i);
    hold.setAttribute("onclick", `deleteList(${i}, "link")`);

    const remove = document.createElement("h1");
    remove.textContent = "*";
    hold.appendChild(remove);

    content.appendChild(div);
    div.appendChild(url);
    div.appendChild(hold);
    url.appendChild(image);
    url.appendChild(text);
  }
}

function deleteList(index, tag) {
  switch (tag) {
    case "link":
      lists.data.splice(index, 1);
      activitiesLinks(true);
      return;
    case "experience":
      experience.data.splice(index, 1);
      activityExperience(true);
      return;
    case "education":
      education.data.splice(index, 1);
      activityEducation(true);
      return;
    case "reference":
      extra.reference.splice(index, 1);
      activityReference(true);
      return;
  }
}

function dragNdrop(event) {
  console.log("blog");
  var fileName = URL.createObjectURL(event.target.files[0]);

  var previewImg = document.createElement("img");
  previewImg.setAttribute("src", fileName);
  preview.appendChild(previewImg);
  if (event.target.files[0]) {
    imageID.style.display = "none";
    preview.style.cssText = "display:flex;";
  }
}

function drag() {
  imageInput.classList.toggle("draging");
}
function drop() {
  imageInput.classList.toggle("dragBox");
}

function handlePreview() {
  imageID.style.display = "flex";
  preview.style.cssText = "display:none; ";
  imageInput.value = "";
  const take = preview.children[1];
  take.remove();
}

App.controller("home", function (page) {
  $(page).on("appShow", function () {
    $(document).ready(function () {
      activitiesLinks(false);
      activityGeneral();
      activityExperience(false);
      activityEducation(false);
      activityReference(false);
    });
  });
});
