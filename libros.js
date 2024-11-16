// Base de datos de libros
const libros = [
    {
        id: 1,
        titulo: "El Grúfalo",
        autor: "Julia Donaldson",
        imagen: "img/portada1.jpg",
        descripcionCorta: "Un ratón astuto inventa un monstruo para protegerse",
        resumenLargo: "Un pequeño ratón pasea por el bosque y se encuentra con varios animales que quieren comérselo. Para protegerse, inventa un monstruo llamado Grúfalo. ¿Pero qué pasará cuando se encuentre con un Grúfalo real?",
        edadRecomendada: "4-7 años",
        enlaceDescarga: "libros/el-grufalo.pdf" // Ruta directa al archivo
    },
    {
        id: 2,
        titulo: "La Oruga muy Hambrienta",
        autor: "Eric Carle",
        imagen: "img/portada2.png",
        descripcionCorta: "Una oruga que come y come hasta transformarse",
        resumenLargo: "Una pequeña oruga come diferentes alimentos durante una semana, creciendo más y más, hasta que finalmente se convierte en una hermosa mariposa. Una historia sobre transformación y números.",
        edadRecomendada: "4-6 años",
        enlaceDescarga: "libros/la-oruga-muy-hambrienta.pdf"
    },
    {
        id: 3,
        titulo: "Donde Viven los Monstruos",
        autor: "Maurice Sendak",
        imagen: "img/portada3.png",
        descripcionCorta: "La aventura de Max en el país de los monstruos",
        resumenLargo: "Max es enviado a la cama sin cenar y emprende un viaje imaginario al país de los monstruos, donde se convierte en el rey. Una historia sobre imaginación y el amor familiar.",
        edadRecomendada: "4-8 años",
        enlaceDescarga: "libros/donde-viven-los-monstruos.pdf"
    },
    {
        id: 4,
        titulo: "El Pez Arcoíris",
        autor: "Marcus Pfister",
        imagen: "img/portada4.png",
        descripcionCorta: "Un pez aprende a compartir sus escamas brillantes",
        resumenLargo: "El pez más hermoso del océano aprende que compartir y hacer amigos es más importante que ser el más bonito. Una historia sobre generosidad y amistad.",
        edadRecomendada: "4-7 años",
        enlaceDescarga: "libros/el-pez-arcoiris.pdf"
    },
    {
        id: 5,
        titulo: "¿A Qué Sabe la Luna?",
        autor: "Michael Grejniec",
        imagen: "img/portada5.png",
        descripcionCorta: "Animales intentan alcanzar la luna",
        resumenLargo: "Varios animales se apilan uno encima de otro para intentar alcanzar la luna y probar un pedacito. Una historia sobre cooperación y perseverancia.",
        edadRecomendada: "4-7 años",
        enlaceDescarga: "libros/a-que-sabe-la-luna.pdf"
    },
    {
        id: 6,
        titulo: "El Monstruo de Colores",
        autor: "Anna Llenas",
        imagen: "img/portada6.png",
        descripcionCorta: "Un monstruo aprende sobre las emociones",
        resumenLargo: "Un monstruo está confundido porque ha mezclado todas sus emociones. Con ayuda, aprenderá a identificar y organizar sus sentimientos por colores.",
        edadRecomendada: "4-6 años",
        enlaceDescarga: "libros/el-monstruo-de-colores.pdf"
    },
    {
        id: 7,
        titulo: "Frederick",
        autor: "Leo Lionni",
        imagen: "img/portada7.png",
        descripcionCorta: "Un ratón poeta que recolecta rayos de sol",
        resumenLargo: "Mientras otros ratones recolectan comida para el invierno, Frederick recolecta rayos de sol, colores y palabras. Una historia sobre el valor del arte y la poesía.",
        edadRecomendada: "5-8 años",
        enlaceDescarga: "libros/frederick.pdf"
    },
    {
        id: 8,
        titulo: "La Vaca que se Subió a un Árbol",
        autor: "Gemma Merino",
        imagen: "img/portada8.png",
        descripcionCorta: "Una vaca diferente que busca aventuras",
        resumenLargo: "Tina es una vaca curiosa que quiere explorar el mundo y hacer cosas diferentes, como subirse a los árboles. Una historia sobre ser único y seguir tus sueños.",
        edadRecomendada: "4-7 años",
        enlaceDescarga: "libros/la-vaca-que-se-subio-a-in-arbol.pdf"
    },
    {
        id: 9,
        titulo: "El Día Que Los Crayones Renunciaron",
        autor: "Drew Daywalt",
        imagen: "img/portada9.png",
        descripcionCorta: "Los crayones de Duncan están descontentos",
        resumenLargo: "Duncan encuentra cartas de sus crayones quejándose de cómo los usa. Una historia divertida sobre creatividad y pensar fuera de la caja.",
        edadRecomendada: "5-8 años",
        enlaceDescarga: "libros/el-dia-que-los-crayones-renunciaron.pdf"
    },
    {
        id: 10,
        titulo: "La Pequeña Oruga Glotona",
        autor: "Eric Carle",
        imagen: "img/portada2.png",
        descripcionCorta: "Una oruga muy hambrienta come de todo",
        resumenLargo: "Una oruga recién nacida come diferentes alimentos cada día de la semana, hasta que finalmente se transforma en una hermosa mariposa.",
        edadRecomendada: "4-6 años",
        enlaceDescarga: "libros/la-oruga-muy-hambrienta.pdf"
    },
    {
        id: 11,
        titulo: "Elmer",
        autor: "David McKee",
        imagen: "img/portada10.png",
        descripcionCorta: "Un elefante de colores que es diferente",
        resumenLargo: "Elmer es un elefante de colores que aprende que ser diferente es lo que lo hace especial. Una historia sobre diversidad y aceptación.",
        edadRecomendada: "4-7 años",
        enlaceDescarga: "libros/elmer-david-mckee.pdf"
    },
    {
        id: 12,
        titulo: "Te Quiero (Casi Siempre)",
        autor: "Anna Llenas",
        imagen: "img/portada11.png",
        descripcionCorta: "Una historia sobre aceptar las diferencias",
        resumenLargo: "Lolo y Rita son muy diferentes y a veces eso les causa problemas, pero aprenden a quererse tal como son. Una historia sobre amor y aceptación.",
        edadRecomendada: "5-8 años",
        enlaceDescarga: "libros/te-quiero-casi-siempre.pdf"
    },
    {
        id: 13,
        titulo: "El León que no Sabía Escribir",
        autor: "Martin Baltscheit",
        imagen: "img/portada12.png",
        descripcionCorta: "Un león enamorado aprende a escribir",
        resumenLargo: "Un león se enamora de una leona que ama los libros y decide aprender a escribir para conquistarla. Una historia sobre superación y amor.",
        edadRecomendada: "5-8 años",
        enlaceDescarga: "libros/el-leon-que-no-sabia-escribir.pdf"
    },
    {
        id: 14,
        titulo: "La Cebra Camila",
        autor: "Marisa Núñez",
        imagen: "img/portada13.png",
        descripcionCorta: "Una cebra que pierde sus rayas",
        resumenLargo: "La cebra Camila pierde sus rayas con el viento y diferentes amigos la ayudan a recuperarlas. Una historia sobre amistad y solidaridad.",
        edadRecomendada: "4-7 años",
        enlaceDescarga: "libros/la-cebra-camila.pdf"
    },
    {
        id: 15,
        titulo: "El Cazo de Lorenzo",
        autor: "Isabelle Carrier",
        imagen: "img/portada14.png",
        descripcionCorta: "Un niño aprende a vivir con sus diferencias",
        resumenLargo: "Lorenzo arrastra siempre un cazo que le complica la vida, pero aprende a manejarlo con ayuda. Una metáfora sobre superar las dificultades.",
        edadRecomendada: "5-8 años",
        enlaceDescarga: "libros/el-cazo-de-lorenzo.pdf"
    },
    {
        id: 16,
        titulo: "Por Cuatro Esquinitas de Nada",
        autor: "Jérôme Ruillier",
        imagen: "img/portada15.png",
        descripcionCorta: "Una historia sobre inclusión",
        resumenLargo: "Cuadradito quiere jugar con sus amigos redondos pero no puede entrar por la puerta redonda. Una historia sobre adaptación e inclusión.",
        edadRecomendada: "4-7 años",
        enlaceDescarga: "libros/por-cuatro-esquinas.pdf"
    },
    {
        id: 17,
        titulo: "El Punto",
        autor: "Peter H. Reynolds",
        imagen: "img/portada16.png",
        descripcionCorta: "Una niña descubre su talento artístico",
        resumenLargo: "Vashti piensa que no sabe dibujar, hasta que su profesora la anima a hacer un simple punto. Una historia sobre creatividad y confianza.",
        edadRecomendada: "5-8 años",
        enlaceDescarga: "libros/el-punto.pdf"
    },
    {
        id: 18,
        titulo: "¿A Qué Sabe la Luna?",
        autor: "Michael Grejniec",
        imagen: "img/portada5.png",
        descripcionCorta: "Animales intentan alcanzar la luna",
        resumenLargo: "Varios animales se apilan uno encima de otro para intentar alcanzar la luna y probar un pedacito. Una historia sobre cooperación y perseverancia.",
        edadRecomendada: "4-7 años",
        enlaceDescarga: "libros/a-que-sabe-la-luna.pdf"
    },
    {
        id: 19,
        titulo: "La Sorpresa de Nandi",
        autor: "Eileen Browne",
        imagen: "img/portada18.png",
        descripcionCorta: "Una niña lleva fruta a su amiga",
        resumenLargo: "Nandi lleva una cesta de frutas a su amiga Tindi, pero varios animales van tomando las frutas por el camino. Una historia sobre sorpresas.",
        edadRecomendada: "4-7 años",
        enlaceDescarga: "libros/la-sorpresa-de-nandi.pdf"
    },
    {
        id: 20,
        titulo: "Rosa Caramelo",
        autor: "Adela Turin",
        imagen: "img/portada19.png",
        descripcionCorta: "Una elefanta que rompe estereotipos",
        resumenLargo: "Margarita es una elefanta que no quiere ser rosa como las demás y prefiere jugar en el barro. Una historia sobre igualdad y libertad.",
        edadRecomendada: "5-8 años",
        enlaceDescarga: "libros/rosa-caramelo.pdf"
    }
];