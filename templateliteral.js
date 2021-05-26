let name = "Mohit";
let heading = "This is heading";
let paragraph = "This is paragraph";
let output = `Hello ${name}
            <h1>${heading}</h1>
            <p>${paragraph}</p>
            `;

document.body.innerHTML = output;


let marks = [23, 65, 45, 67]
// marks.splice(1,2)
marks.splice(1, 3)
console.log(marks);

let k = 0;

do {
    console.log(k + 1);
    k++;
} while (k < 10);