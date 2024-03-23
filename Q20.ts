// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let countries: string[]= [" Denmark", "Italy", "Paris", "Brazil"];

// simple method;

console.log("I like to visit:" , countries);

//  map method;

countries.map((count) => console.log(`I like to visit ${count} country`))
