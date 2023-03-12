function activityRefrenceInput() {
  const click = document.getElementById("btnReference");
  click.onclick = () => {
    const form = document.getElementById("Form");

    const name = document.getElementById("inputReference").value;

    if (name) extra.reference.push(name);
    extra.index = 1;
    form.reset();
  };
}

App.controller("reference", function (page) {
  $(page).on("appShow", function () {
    $(document).ready(activityRefrenceInput());
  });
});
