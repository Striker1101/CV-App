try {
  App.restore(); // it loads/restores the app
} catch (err) {
  App.load("home"); // in case of error it loads the default page
}
