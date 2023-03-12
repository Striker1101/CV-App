document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  // Cordova is now initialized. Have fun!

  console.log("Running cordova-" + cordova.platformId + "@" + cordova.version);
  document.getElementById("deviceready").classList.add("ready");
}

let lists = {
  data: [
    {
      name: "instagram",
      url: "https://www.sitepoint.com/intro-app-js-mobile-webapps-made-easy/",
    },
  ],
  index: 0,
};

let profileName = {
  FirstName: "[FIRSTNAME]",
  SecondName: "[SECONDNAME]",
};

let experience = {
  data: [
    {
      stateDate: "[Dates From]",
      endDate: "[To]",
      title: "[Job Title]",
      position: "[Job Position]",
      companyName: "[Company Name]",
    },
  ],
  summary:
    "[This is the place for a brief summary of your key responsibilities and most stellar accomplishments.]",
  index: 0,
};

let education = {
  data: [
    {
      name: "[School Name]",
      location: "[City, State]",
      details:
        "[You might want to include your GPA here and a brief summary of relevant coursework, awards, and honors.]",
    },
  ],
  index: 0,
};

const extra = {
  communication:
    "[Want to put your own image in the circle?  It is easy!  Select the image and do a right mouse click.  Select “Fill” from the shortcut menu.  Choose Picture… from the list.  Navigate your computer to get the appropriate picture.  Click okay to insert your selected image.]",
  leadership:
    "[Once your image has been inserted, select it again.  Go to the Picture Tools Format menu. Click on the down arrow below “Crop” and select “Fill” from the list.  This will auto adjust your image to crop to the image.  You can click and drag your image to place it appropriately.]",
  reference: ["[Available upon request.]"],
  index: 0,
};

function resetCV() {
  //reset the data
}

function save() {
  //hide class deleter and hide
}
