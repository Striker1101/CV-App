function activityCommunicationInput() {
  const click = document.getElementById("btnCommunication");
  click.onclick = () => {
    const form = document.getElementById("Form");
    const communication = document.getElementById("inputCommunication").value;

    extra.communication = communication;
    form.reset();
  };
}

App.controller("communication", function (page) {
  $(page).on("appShow", function () {
    $(document).ready(activityCommunicationInput());
  });
});
