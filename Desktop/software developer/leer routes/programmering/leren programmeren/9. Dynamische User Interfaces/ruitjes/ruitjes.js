let user_input = Number(prompt("geef een getal: ")) +2

for (let i = 0; i < user_input; i++){
    const nummer = []
    for (let z = 1; z < i; z++){
        nummer.push(z)
    }
    let test = nummer.join("-")
    document.write(test)
    document.write("<br>")
}

user_input = user_input - 3

for (let i = user_input; i > 0; i--){
    const nummer = []
    for (let z = i; z > 0; z--){
        nummer.push(z)
    }
    let test2 = nummer.reverse()
    document.write(test2.join("-"))
    document.write("<br>")
}