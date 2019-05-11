export const people = [
  {
    id: "0",
    name: "Jipro",
    age: 32,
    gender: "male"
  },
  {
    id: "1",
    name: "Koongdori",
    age: 31,
    gender: "female"
  },
  {
    id: "2",
    name: "Hangyeol",
    age: 9,
    gender: "male"
  },
  {
    id: "3",
    name: "Gaetori",
    age: 29,
    gender: "female"
  },
  {
    id: "4",
    name: "Mario",
    age: 18,
    gender: "male"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
};
