let mongoose = require("mongoose");
let Profesional = require("./src/model/profesional");

mongoose.connect('mongodb+srv://PatriciaGonFu:14deJulio!@cluster0.j6yavxj.mongodb.net/profesional');

mongoose.connection.on('connected', function(){
    console.log('Conexión establecida con MongoDB');
});

mongoose.connection.on('error', function (err){
    console.log('Error en la conexión a MongoDB: ' + err);
});

// creación de la colección y la base de datos profesional:

// let data1 = {
//             nombre: "Emma Stone",
//             edad: 34,
//             peso: 52,
//             altura: 1.68,
//             enActivo: true,
//             nacionalidad: "Estadounidense",
//             numOscars: 1,
//             profesion: "Actriz",
//             foto: "https://upload.wikimedia.org/wikipedia/commons/3/31/Emma_Stone_at_Maniac_UK_premiere_%28cropped%29.jpg"
//           }

// let profesional1 = new Profesional(data1);

// profesional1.save()
//     .then(function (){
//         console.log("Profesional guardado correctamente");
//         mongoose.disconnect();
//     })
//     .catch(function (err){
//         console.log("Error al guardar el profesional: " + err);
//     });

// añadir nuevos profesionales a la base de Profesional.discriminators

let nuevosProfesionales = [
    {
        nombre: "Steven Spielberg",
        edad: 75,
        peso: 84,
        altura: 1.71,
        enActivo: true,
        nacionalidad: "Estadounidense",
        numOscars: 3,
        profesion: "Director",
        foto: "https://www.buscabiografias.com/img/people/Steven_Spielberg.jpg" 
      },
      {
        nombre: "Meryl Streep",
        edad: 72,
        peso: 64,
        altura: 1.68,
        enActivo: true,
        nacionalidad: "Estadounidense",
        numOscars: 3,
        profesion: "Actriz",
        foto: "https://media.vogue.mx/photos/5ea6e6d4185b6200087d0f47/2:3/w_2560%2Cc_limit/meryl-streep.jpg"
      },
      {
        nombre: "Martin Scorsese",
        edad: 79,
        peso: 73,
        altura: 1.63,
        enActivo: true,
        nacionalidad: "Estadounidense",
        numOscars: 1,
        profesion: "Director",
        foto: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Martin_Scorsese_MFF_2023.jpg"
      },
      {
        nombre: "Leonardo DiCaprio",
        edad: 48,
        peso: 75,
        altura: 1.83,
        enActivo: true,
        nacionalidad: "Estadounidense",
        numOscars: 1,
        profesion: "Actor",
        foto: "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg"
      },
      
      {
        nombre: "Quentin Tarantino",
        edad: 59,
        peso: 90,
        altura: 1.85,
        enActivo: true,
        nacionalidad: "Estadounidense",
        numOscars: 2,
        profesion: "Director",
        foto: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Quentin_Tarantino_by_Gage_Skidmore.jpg"
      },

      {
        nombre: "Tom Hanks",
        edad: 66,
        peso: 80,
        altura: 1.83,
        enActivo: true,
        nacionalidad: "Estadounidense",
        numOscars: 2,
        profesion: "Actor",
        foto: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Tom_Hanks_at_the_Elvis_Premiere_2022.jpg"
      },

      {
        nombre: "Denzel Washington",
        edad: 67,
        peso: 86,
        altura: 1.85,
        enActivo: true,
        nacionalidad: "Estadounidense",
        numOscars: 2,
        profesion: "Actor",
        foto: "https://upload.wikimedia.org/wikipedia/commons/4/40/Denzel_Washington_2018.jpg"
      },

      {
        nombre: "Francis Ford Coppola",
        edad: 83,
        peso: 84,
        altura: 1.83,
        enActivo: true,
        nacionalidad: "Estadounidense",
        numOscars: 5,
        profesion: "Director",
        foto: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Francis_Ford_Coppola_%2833906700778%29_%28cropped%29.jpg"
      },

      {
        nombre: "Angelina Jolie",
        edad: 46,
        peso: 59,
        altura: 1.69,
        enActivo: true,
        nacionalidad: "Estadounidense",
        numOscars: 1,
        profesion: "Actriz",
        foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Angelina_Jolie_2_June_2014_%28cropped%29.jpg/640px-Angelina_Jolie_2_June_2014_%28cropped%29.jpg"
      },

      {
        nombre: "Ridley Scott",
        edad: 85,
        peso: 76,
        altura: 1.75,
        enActivo: true,
        nacionalidad: "Británico",
        numOscars: 0,
        profesion: "Director",
        foto: "https://upload.wikimedia.org/wikipedia/commons/1/12/NASA_Journey_to_Mars_and_%E2%80%9CThe_Martian%E2%80%9D_%28201508180030HQ%29.jpg"
      },

      {
        nombre: "Brad Pitt",
        edad: 59,
        peso: 78,
        altura: 1.80,
        enActivo: true,
        nacionalidad: "Estadounidense",
        numOscars: 1,
        profesion: "Actor",
        foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg/800px-Brad_Pitt_2019_by_Glenn_Francis.jpg"
      },

      {
        nombre: "Cate Blanchett",
        edad: 53,
        peso: 61,
        altura: 1.74,
        enActivo: true,
        nacionalidad: "Estadounidense",
        numOscars: 2,
        profesion: "Actriz",
        foto: "https://upload.wikimedia.org/wikipedia/commons/e/e6/2018-05-19-_Cannes-Cate_Blanchett-5591_%2827924434047%29.jpg"
      },

      {
        nombre: "James Cameron",
        edad: 68,
        peso: 89,
        altura: 1.87,
        enActivo: true,
        nacionalidad: "Canadiense",
        numOscars: 3,
        profesion: "Director",
        foto: "https://upload.wikimedia.org/wikipedia/commons/7/77/James_Cameron_October_2012.jpg"
      },

      {
        nombre: "Natalie Portman",
        edad: 41,
        peso: 53,
        altura: 1.60,
        enActivo: true,
        nacionalidad: "Israelí",
        numOscars: 1,
        profesion: "Actriz",
        foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Natalie_Portman_%2848470988352%29_%28cropped%29.jpg/800px-Natalie_Portman_%2848470988352%29_%28cropped%29.jpg"
      },

      {
        nombre: "Clint Eastwood",
        edad: 92,
        peso: 89,
        altura: 1.93,
        enActivo: true,
        nacionalidad: "Estadounidense",
        numOscars: 4,
        profesion: "Actor/Director",
        foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Clint_Eastwood_at_2010_New_York_Film_Festival.jpg/640px-Clint_Eastwood_at_2010_New_York_Film_Festival.jpg"
      },

      
      {
        nombre: "Sofia Coppola",
        edad: 51,
        peso: 55,
        altura: 1.70,
        enActivo: true,
        nacionalidad: "Estadounidense",
        numOscars: 1,
        profesion: "Directora",
        foto: "https://upload.wikimedia.org/wikipedia/commons/0/06/Sofia_Coppola_Cannes_2013.jpg"
      },
      
      {
        nombre: "Pedro Almodovar",
        edad: 72,
        peso: 73,
        altura: 1.78,
        enActivo: true,
        nacionalidad: "Español",
        numOscars: 2,
        profesion: "Director",
        foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Pedro_Almod%C3%B3var_at_Premios_Goya_2017_1_%28cropped_3%29.jpg/1200px-Pedro_Almod%C3%B3var_at_Premios_Goya_2017_1_%28cropped_3%29.jpg"
      }
]

Profesional.create(nuevosProfesionales)
.then(function(result)
{
    console.log("Profesionales guardados correctamente")
    mongoose.disconnect();
})
.catch(function()
{
    console.log("Error al guardar los documentos");
});

