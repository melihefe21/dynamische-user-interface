let nummer = prompt("geef een getal: ")

let getal = 0

for(let i = 0; i< nummer; i++) {
    for(let z = 0; z < i+1; z++){
        if(z == getal){
            document.write(z + 1)
        }
        else{
            document.write(z+ 1 + "-" )
        }
        
    }
    getal+= 1
    document.write("<br>")
}
getal = 19
for(i = nummer; i > 0; i--) {
    for(let z = 1; z < i; z++){
        if(z == getal){
            document.write(z) 
        } else{
            document.write(z + "-")
        }
    }
    getal-=1
    document.write("<br>")
}