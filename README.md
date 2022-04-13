function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let members = [
  "Amanda Murphy",
  "Ernesto Walton",
  "Antoinette Thornton",
  "Otis Lloyd",
  "Dana Haynes",
  "Lester Myers",
  "Emily Graham",
  "Amos Mcbride",
  "Bryan Berry",
  "Carlton Barnes",
  "Ken Floyd",
  "Shannon Johnston",
  "Louis Mccormick",
  "Leon Leonard",
];

let groups = {
  group1: [],
  group2: [],
};

function group_generate() {
  let count_group = Object.keys(groups).length;
  let div = members.length % count_group;
  if (div != 0) {
    console.log("Не хватает участников: ", count_group - div); 
 
    return;
  }
  let count_in_group = members.length / count_group;
  console.log("Колличество в группе: ", count_in_group);

  for (let i = 0; i < count_in_group; i++) {
    for (const [key, value] of Object.entries(groups)) {
      add_to_group(groups[key]);
    }
  }
}

function add_to_group(group) {
  let index = getRandomInt(members.length - 1);
  group.push(members[index]);
  members.splice(index, 1);
}

group_generate();
console.log(groups);
