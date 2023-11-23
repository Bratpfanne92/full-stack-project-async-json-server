const PERSONS_API_URL = "http://localhost:3000/persons";

const personsSection = document.getElementById("persons-section");
// console.log(personSection);

async function getPersons() {
  try {
    const response = await fetch(PERSONS_API_URL);
    const persons = await response.json();
    return persons;
  } catch (error) {
    console.log("error: ", error);
  }
}

getPersons();

const renderPerson = async () => {
  const persons = await getPersons();
  const personsList = persons.map((person) => {
    return `<div class="person-container"><p>First Name: <strong>${person.firstName}</strong></p><p>Last Name: <strong>${person.lastName}</strong></p></div>`;
  });
  personsSection.innerHTML = personsList.join("");
};
