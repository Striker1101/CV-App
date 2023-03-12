function activityName() {
  const click = document.getElementById("btnName");
  click.onclick = () => {
    const form = document.getElementById("Form");
    const FirstName = document.getElementById("FirstName").value;
    const SecondName = document.getElementById("LastName").value;

    profileName = {
      FirstName,
      SecondName,
    };
    form.reset();
  };
}

App.controller("names", function (page) {
  $(page).on("appShow", function () {
    $(document).ready(activityName());
  });
});
