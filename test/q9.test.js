const executeQuery = require("../executeQuery");
const { q9Results } = require("../expectedResults");
const q9 = require("../student_answer/q9");

test("La 1er propriété doit s'appeler 'type_name'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q9);
  expect(Object.keys(queryResults[0])[0]).toEqual("type_name");
});
test("La 2ème propriété doit s'appeler 'move_name'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q9);
  expect(Object.keys(queryResults[0])[1]).toEqual("move_name");
});
test("La 3ème propriété doit s'appeler 'move_power'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q9);
  expect(Object.keys(queryResults[0])[2]).toEqual("move_power");
});
test("La 4ème propriété doit s'appeler 'move_accuracy'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q9);
  expect(Object.keys(queryResults[0])[3]).toEqual("move_accuracy");
});
test("La 5ème propriété doit s'appeler 'move_description'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q9);
  expect(Object.keys(queryResults[0])[4]).toEqual("move_description");
});
test("Les résultats sont corrects et dans le bonne ordre", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q9);
  expect(queryResults).toMatchObject(q9Results);
});
