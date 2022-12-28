const executeQuery = require("../executeQuery");
const { q10Results } = require("../expectedResults");
const q10 = require("../student_answer/q10");

test("La 1er propriété doit s'appeler 'Type'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q10);
  expect(Object.keys(queryResults[0])[0]).toEqual("Type");
});
test("La 2ème propriété doit s'appeler 'Meilleure attaque'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q10);
  expect(Object.keys(queryResults[0])[1]).toEqual("Meilleure attaque");
});
test("La 3ème propriété doit s'appeler 'Meilleure puissance'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q10);
  expect(Object.keys(queryResults[0])[2]).toEqual("Meilleure puissance");
});
test("La 4ème propriété doit s'appeler 'Pire Attaque'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q10);
  expect(Object.keys(queryResults[0])[3]).toEqual("Pire Attaque");
});
test("La 5ème propriété doit s'appeler 'Pire Puissance'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q10);
  expect(Object.keys(queryResults[0])[4]).toEqual("Pire Puissance");
});
test("Les résultats sont corrects et dans le bonne ordre", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q10);
  expect(queryResults).toMatchObject(q10Results);
});
