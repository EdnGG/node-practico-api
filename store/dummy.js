const db = {
  user: [
    { id: "2", name: "Sophia G" },
    { id: "5", name: "Lucia G" },
  ],
};

async function list(table) {
  return db[table] || [];
}
async function get(table, id) {
  let col = await list(table);
  return col.filter((item) => item.id === id)[0] || null;
}
async function upsert(table, data) {
  console.log(data);
  if (!db[table]) {
    db[table] = [];
  }
  db[table].push(data);
  console.log(db);
  // return data;
}
async function remove(table, id) {
  return true;
}

async function query(table, q) {
  // traemos y guardamos la tabla
  let col = await list(table);
  let keys = Object.keys(q);
  let key = keys[0];

  // iteramos la info de la tabla con "filter"
  return col.filter((item) => item[key] === q[key])[0] || null;
}

module.exports = {
  list,
  get,
  upsert,
  remove,
  query,
};
