const people = [
    { name: 'A', age: 19 },
    { name: 'B', age: 17 },
    { name: 'C', age: 21 },
    { name: 'D', age: 15 },
    { name: 'E', age: 23 }
]

const checkAge = ({age}) => {
    if (age >= 18) {
        return 'adult';
    }
    return 'minor';
}

const groupedByAge = Object.groupBy(people, checkAge);
console.log(groupedByAge)
console.log(groupedByAge.adult)
console.log(groupedByAge.minor)

const names = ['Adam', 'Pawel', 'Ewa']
const sortedNames = names.toSorted();
console.log(names)
console.log(sortedNames)

const numbers = [3000, 30, 300]
const sortedNumbers = numbers.toSorted((a, b) => a - b);
console.log(numbers)
console.log(sortedNumbers)

const reversedNumbers = sortedNumbers.toReversed();
console.log(reversedNumbers)

const changedNumbers = sortedNumbers.with(0, 999);
console.log(changedNumbers)

const numbers2 = numbers.toSpliced(1, 2, 1);
console.log(numbers2)

console.log(numbers)
