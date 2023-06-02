// (1) Variablen initialisieren
const formContainer = document.getElementById("formContainer");
const submitButton = document.getElementById("submit");
submitButton.disabled = true;
const emailField = document.getElementById("email");
const nameField = document.getElementById("name");
const telField = document.getElementById("tel");
const messageField = document.getElementById("comment");

// (2) Interaktionen festlegen
emailField.addEventListener("keyup", () => {
  onChangeEmailField();
});
submitButton.addEventListener("click", async (event) => {
  event.preventDefault();
  onClickSubmit();
});

// (3) Interaktionen Code
const onChangeEmailField = () => {
  if (emailField.value === "") {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
};
const onClickSubmit = async () => {
  // Daten aus dem Formular für die Datenbank bereitstellen
  const data = {
    group: "cl2", // SQL Gruppen Namen
    pw: "0daca5a5", // SQL Passwort
    tableName: "user", // Name der Tabelle in der SQL Datenbank

    columns: {
      // "email" Name der Spalte in der SQL Tabelle
      // "emailField.value" Eingabe des Benutzers aus dem Formularfeld
      email: emailField.value,
      name: nameField.value,
      tel: telField.value,
      comment: messageField.value,
    },
  };
  // Speichert die Daten in der Datenbank
  await databaseClient.insertInto(data);

  // Nach dem Speichern verschwindet das Formular, das Game erscheint
  formContainer.classList.add("hidden");
  gameContainer.classList.remove("hidden");
};
