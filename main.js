const nameOfWorkers = [
  {
    firstname: 'Vanessa',
    lastName: 'Rogers',
    gender: 'Female',
    age: 19,
    salary: 60193
  },
  {
    firstname: 'Charlotte',
    lastName: 'Hunt',
    gender: 'Female',
    age: 24,
    salary: 92383
  },
  {
    firstname: 'Marcus',
    lastName: 'Foster',
    gender: 'Male',
    age: 21,
    salary: 65760
  },
  {
    firstname: 'Myra',
    lastName: 'Brooks',
    gender: 'Female',
    age: 21,
    salary: 174036
  },
  {
    firstname: 'Caroline',
    lastName: 'Armstrong',
    gender: 'Female',
    age: 29,
    salary: 149879
  },
  {
    firstname: 'Belinda',
    lastName: 'Carroll',
    gender: 'Female',
    age: 19,
    salary: 188935
  },
  {
    firstname: 'Olivia',
    lastName: 'Armstrong',
    gender: 'Female',
    age: 26,
    salary: 34782
  },
  {
    firstname: 'April',
    lastName: 'Cooper',
    gender: 'Female',
    age: 20,
    salary: 68263
  },
  {
    firstname: 'Edith',
    lastName: 'Harrison',
    gender: 'Female',
    age: 23,
    salary: 54709
  },
  {
    firstname: 'Vivian',
    lastName: 'Henderson',
    gender: 'Female',
    age: 20,
    salary: 155709
  },
  {
    firstname: 'Ashton',
    lastName: 'Martin',
    gender: 'Male',
    age: 27,
    salary: 166647
  },
  {
    firstname: 'Gianna',
    lastName: 'Moore',
    gender: 'Female',
    age: 23,
    salary: 191619
  },
  {
    firstname: 'Camila',
    lastName: 'Allen',
    gender: 'Female',
    age: 23,
    salary: 85567
  },
  {
    firstname: 'Gianna',
    lastName: 'Morrison',
    gender: 'Female',
    age: 28,
    salary: 191509
  },
  {
    firstname: 'Paul',
    lastName: 'Cooper',
    gender: 'Male',
    age: 28,
    salary: 39471
  },
  {
    firstname: 'Tara',
    lastName: 'Mason',
    gender: 'Female',
    age: 19,
    salary: 189780
  },
  {
    firstname: 'Aida',
    lastName: 'Tucker',
    gender: 'Female',
    age: 21,
    salary: 143187
  },
  {
    firstname: 'Richard',
    lastName: 'Cameron',
    gender: 'Male',
    age: 21,
    salary: 116644
  },
  {
    firstname: 'Amy',
    lastName: 'Stewart',
    gender: 'Female',
    age: 29,
    salary: 126961
  },
  {
    firstname: 'Eleanor',
    lastName: 'Thompson',
    gender: 'Female',
    age: 22,
    salary: 159003
  },
  {
    firstname: 'Alberta',
    lastName: 'Edwards',
    gender: 'Female',
    age: 21,
    salary: 105648
  },
  {
    firstname: 'Gianna',
    lastName: 'Evans',
    gender: 'Female',
    age: 27,
    salary: 183805
  },
  {
    firstname: 'Florrie',
    lastName: 'Kelley',
    gender: 'Female',
    age: 24,
    salary: 180568
  },
  {
    firstname: 'Miranda',
    lastName: 'Harris',
    gender: 'Female',
    age: 19,
    salary: 185753
  },
  {
    firstname: 'Henry',
    lastName: 'Davis',
    gender: 'Male',
    age: 18,
    salary: 83804
  },
  {
    firstname: 'Kirsten',
    lastName: 'Barnes',
    gender: 'Female',
    age: 26,
    salary: 161833
  },
  {
    firstname: 'Jack',
    lastName: 'Chapman',
    gender: 'Male',
    age: 19,
    salary: 41007
  },
  {
    firstname: 'Myra',
    lastName: 'Kelly',
    gender: 'Female',
    age: 27,
    salary: 118346
  },
  {
    firstname: 'Emma',
    lastName: 'Evans',
    gender: 'Female',
    age: 23,
    salary: 126125
  },
  {
    firstname: 'Blake',
    lastName: 'Evans',
    gender: 'Male',
    age: 24,
    salary: 69702
  },
  {
    firstname: 'Aldus',
    lastName: 'Armstrong',
    gender: 'Male',
    age: 26,
    salary: 132491
  },
  {
    firstname: 'Adelaide',
    lastName: 'Martin',
    gender: 'Female',
    age: 20,
    salary: 175263
  },
  {
    firstname: 'Victoria',
    lastName: 'Elliott',
    gender: 'Female',
    age: 21,
    salary: 111645
  },
  {
    firstname: 'Nicole',
    lastName: 'Harrison',
    gender: 'Female',
    age: 22,
    salary: 54624
  },
  {
    firstname: 'Edwin',
    lastName: 'Hamilton',
    gender: 'Male',
    age: 18,
    salary: 152586
  },
  {
    firstname: 'Jessica',
    lastName: 'Robinson',
    gender: 'Female',
    age: 29,
    salary: 85446
  },
  {
    firstname: 'Sofia',
    lastName: 'Turner',
    gender: 'Female',
    age: 20,
    salary: 131564
  },
  {
    firstname: 'Cadie',
    lastName: 'Higgins',
    gender: 'Female',
    age: 21,
    salary: 138663
  },
  {
    firstname: 'Jessica',
    lastName: 'Turner',
    gender: 'Female',
    age: 24,
    salary: 91319
  },
  {
    firstname: 'Walter',
    lastName: 'Hamilton',
    gender: 'Male',
    age: 25,
    salary: 117408
  },
  {
    firstname: 'Alexander',
    lastName: 'Farrell',
    gender: 'Male',
    age: 26,
    salary: 65878
  },
  {
    firstname: 'Justin',
    lastName: 'Howard',
    gender: 'Male',
    age: 21,
    salary: 165575
  },
  {
    firstname: 'Chelsea',
    lastName: 'Holmes',
    gender: 'Female',
    age: 21,
    salary: 32690
  },
  {
    firstname: 'Alberta',
    lastName: 'Wilson',
    gender: 'Female',
    age: 22,
    salary: 143459
  },
  {
    firstname: 'Miller',
    lastName: 'Murphy',
    gender: 'Male',
    age: 25,
    salary: 163776
  },
  {
    firstname: 'Adrianna',
    lastName: 'Hawkins',
    gender: 'Female',
    age: 29,
    salary: 64412
  },
  {
    firstname: 'Dominik',
    lastName: 'Reed',
    gender: 'Male',
    age: 23,
    salary: 42643
  },
  {
    firstname: 'Gianna',
    lastName: 'Craig',
    gender: 'Female',
    age: 18,
    salary: 141944
  },
  {
    firstname: 'Alissa',
    lastName: 'Cameron',
    gender: 'Female',
    age: 25,
    salary: 101581
  },
  {
    firstname: 'Aldus',
    lastName: 'Adams',
    gender: 'Male',
    age: 28,
    salary: 132894
  }
];

let firstAndLastName = nameOfWorkers.forEach(workers => {
  console.log(`${workers.firstname} ${workers.lastName}`);
});

const totalSalaryOfWorkers = nameOfWorkers.reduce(
  (acc, curr) => acc + curr.salary,
  0
);
console.log(totalSalaryOfWorkers);

const totalAgeOfWorkers = nameOfWorkers.reduce(
  (acc, curr) => acc + curr.age,
  0
);
let averageAgeOfWorkers = totalAgeOfWorkers / nameOfWorkers.length;
console.log(averageAgeOfWorkers);

const workersAbove20 = nameOfWorkers.filter(workers => workers.age > 20);
console.log(workersAbove20);

const doubledSalary = nameOfWorkers
  .map(workers => {
    return (newSalary = workers.salary * 2);
  })
  .forEach(salary => console.log(salary));

//Assignment 2
const arrayFunction = arr => {
  return `First element: ${arr[0]}, Last element: ${arr[arr.length - 1]} `;
};
console.log(arrayFunction([1, 2, 3, 4, 5]));
