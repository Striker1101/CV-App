function activityLeadershipInput() {
  const click = document.getElementById("btnLeadership");
  click.onclick = () => {
    const form = document.getElementById("Form");
    const leadership = document.getElementById("inputLeadership").value;

    extra.leadership = leadership;
    form.reset();
  };
}

App.controller("leadership", function (page) {
  $(page).on("appShow", function () {
    $(document).ready(activityLeadershipInput());
  });
});
