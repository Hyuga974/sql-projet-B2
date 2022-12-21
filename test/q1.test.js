const executeQuery = require("../executeQuery");
const { q1Results } = require("../expectedResults");
const q1 = require("../student_answer/q1");

test("La 1er propriété doit s'appeller 'name'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q1);
  expect(Object.keys(queryResults[0])[0]).toEqual("name");
});
test("La 2ème propriété doit s'appeller 'height'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q1);
  expect(Object.keys(queryResults[0])[1]).toEqual("height");
});
test("La 3ème propriété doit s'appeller 'weight'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q1);
  expect(Object.keys(queryResults[0])[2]).toEqual("weight");
});
test("Les résultats sont corrects et dans le bonne ordre", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q1);
  expect(queryResults).toMatchObject(q1Results);
});
