function activityEducationInput() {
  const click = document.getElementById("btnEducation");
  click.onclick = () => {
    const form = document.getElementById("Form");
    const name = document.getElementById("nameEducation").value;
    const location = document.getElementById("location").value;
    const details = document.getElementById("details").value;

    const obj = {
      name,
      location,
      details,
    };

    education.index = 1;
    if ((name, location)) education.data.push(obj);
    form.reset();
  };
}

App.controller("education", function (page) {
  $(page).on("appShow", function () {
    $(document).ready(activityEducationInput());
  });
});
