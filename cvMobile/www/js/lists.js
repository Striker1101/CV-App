function activityList() {
  const click = document.getElementById("btnLinks");
  click.onclick = () => {
    const form = document.getElementById("Form");
    const url = document.getElementById("url").value;
    const name = document.getElementById("name").value;
    const obj = {
      name,
      url,
    };
    if (url) lists.data.push(obj);
    lists.index = 1;
    form.reset();
  };
}

App.controller("links", function (page) {
  $(page).on("appShow", function () {
    $(document).ready(activityList());
  });
});
