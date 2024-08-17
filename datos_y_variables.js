//Actividad 1: Datos y variables

let nombre = "isabella";
console.log("nombre:", nombre);

let edad = 28;
console.log("edad:", edad);

let precio = "$78.500";
console.log("precio:", precio);


let seriesFavoritas = ["Sherlock", "Sweet Home", "Bones" ];
console.log("Series favoritas:");
console.log("\ ", seriesFavoritas[0]);
console.log("\ ", seriesFavoritas[1]);
console.log("\ ", seriesFavoritas[2]);

let peliculasFavoritas = {
    nombre: ["El castillo ambulante", "Mujercitas", "Harry Potter y el Misterio del Príncipe " ], 
    estreno: [2004, 2019, 2009], 
    protagonistas: [["Howl", "Sophie", "Calcifer"], ["Jo", "Amy", "Laurie", "Beth", "Meg"],["Harry Potter","Hermione Granger","Ron Weasley"]]
};

console.log("Peliculas favoritas:");

console.log("\n Nombre:", peliculasFavoritas.nombre[0])
console.log("\ Año de estreno: ", peliculasFavoritas.estreno[0])
console.log("\ Protagonistas:",peliculasFavoritas.protagonistas[0][0], ",", peliculasFavoritas.protagonistas[0][1],",", peliculasFavoritas.protagonistas[0][2]);

console.log("\n Nombre:", peliculasFavoritas.nombre[1])
console.log("\ Año de estreno: ", peliculasFavoritas.estreno[1])
console.log("\ Protagonistas:",peliculasFavoritas.protagonistas[1][0], ",", peliculasFavoritas.protagonistas[1][1],",", peliculasFavoritas.protagonistas[1][2]);

console.log("\n Nombre:", peliculasFavoritas.nombre[2])
console.log("\ Año de estreno: ", peliculasFavoritas.estreno[2])
console.log("\ Protagonistas:",peliculasFavoritas.protagonistas[2][0], ",", peliculasFavoritas.protagonistas[2][1],",", peliculasFavoritas.protagonistas[2][2]);

edad = ++edad;
console.log("\nedad + 1:",edad);

seriesFavoritas.push("Fullmetal Alchemist");
console.log("\nLista con otra serie favorita mas: ", seriesFavoritas);