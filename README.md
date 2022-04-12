function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let members = [
  "Eli P. Webster",
  "Sylvia K. Jenkins",
  "Daniel S. Oceguera",
  "Valerie A. Everett",
  "Miguel K. Yohe",
  "Annette T. Boyce",
  "Ernestine J. Norberg",
  "Henry E. Wheless",
  "Duane M. McCarroll",
  "David E. Thomas",
  "Myra J. Wells",
  "Xavier C. Schulz",
  "Zackary M. Majors",
  "David C. Bowers"
];

//let group1 = [];
//let group2 = [];

let groups = {
  'group1': [],
  'group2': [],
};

let count_group = Object.keys(groups).length;

if (members.length % count_group != 0) {
  console.log('Не хватает участников');
}

let count_in_group = members.length / count_group;
console.log('Количество в группе:', count_in_group)

function add_to_group(group) {
  let index = getRandomInt(members.length - 1);
  group.push(members[index]);
  members.splice(index, 1);
}

//for (let i=0; i<)
add_to_group(groups.group1);


//add_to_group(groups.group2);

console.log(count_group);
console.log(members);
