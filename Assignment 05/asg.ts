// Q:05 Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.


// part 01
let nameWithWhiteSpaces = "\t\n AAHAD \t\n";
console.log(nameWithWhiteSpaces);

// part 02
let nameWithoutSpaces = nameWithWhiteSpaces
console.log(nameWithoutSpaces.trim());
// trim() : Removes the leading and trailing white space and line terminator characters from a string.