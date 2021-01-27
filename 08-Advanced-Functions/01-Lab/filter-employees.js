function filterEmployees(dataJson, criteria) {
  let data = JSON.parse(dataJson);
  const [key, value] = criteria.split('-');

  if (key !== "all") {
    filterByKeyValue(key, value, data);
  } else {
    displayAll(data);
  }

  function filterByKeyValue(key, value, data) {
    let filteredData = data.filter(e => e[key] === value);
    filteredData.map((el, index) => console.log(`${index}. ${el.first_name} ${el.last_name} - ${el.email}`));

  }
  function displayAll(data) {
    data.map((el, index) => console.log(`${index}. ${el.first_name} ${el.last_name} - ${el.email}`));
  }
}


filterEmployees(
  `[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
  'last_name-Johnson'
);