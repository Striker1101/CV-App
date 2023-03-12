function activityExperienceInput() {
  const click = document.getElementById("btnExperience");
  click.onclick = () => {
    const form = document.getElementById("Form");
    const stateDate = document.getElementById("stateDate").value;
    const endDate = document.getElementById("endDate").value;
    const title = document.getElementById("title").value;
    const position = document.getElementById("position").value;
    const companyName = document.getElementById("companyName").value;
    const summary = document.getElementById("summary").value;
    const obj = {
      stateDate,
      endDate,
      title,
      position,
      companyName,
    };
    experience.summary = summary;
    experience.index = 1;
    if ((stateDate, endDate)) experience.data.push(obj);
    form.reset();
  };
}

App.controller("experience", function (page) {
  $(page).on("appShow", function () {
    $(document).ready(activityExperienceInput());
  });
});
