import Ember from "ember";

var vocabulary = [{
    word: "Welcome!",
    translation: "Bienvenido!"
}, {
    word: "Mexico",
    translation: "Mexico"
}, {
    word: "how are you?",
    translation: "Como estas?"
    // formal: Como esta usted?
}, {
    word: "thank you",
    translation: "Gracias."
    // emphasis: Muchas gracias.
}, {
    word: "delicious",
    translation: "delicioso"
}, {
    word: "here",
    translation: "aqui"
}, {
    word: "husband",
    translation: "esposo"
}, {
    word: "wife",
    translation: "esposa"
}, {
    word: "how much",
    translation: "cuanto"
}, {
    word: "car",
    translation: "el auto"
}, {
    word: "goodbye",
    translation: "adios"
}, {
    word: "man",
    translation: "el hombre"
}, {
    word: "woman",
    translation: "la mujer"
}, {
    word: "yes",
    translation: "si"
}, {
    word: "he",
    translation: "el"
}, {
    word: "she",
    translation: "ella"
}, {
    word: "no",
    translation: "no"
}, {
    word: "not",
    translation: "no"
}, {
    word: "beautiful",
    translation: "hermoso"
}, {
    word: "one",
    translation: "uno"
}, {
    word: "or",
    translation: "o"
}, {
    word: "and",
    translation: "y"
}, {
    word: "I",
    translation: "yo"
}, {
    word: "you",
    translation: "tu"
    // formal: usted
}];

var dialogues = [
    [ // conversation grouping
        {
            phrase: "Welcome to Mexico!",
            translation: "Bienvenido a Mexico."
        },
        {
            phrase: "How are you?",
            translation: "Como estas? (inf.)"
            // and formal?
        },
        {
            phrase: "I'm doing well, thank you.",
            translation: "Lo estoy haciendo bien, gracias."
        },
    ],
    [ // conversation grouping
        {
            phrase: "This rice is delicious.",
            translation: "Este arroz es delicioso."
        },
        {
            phrase: "Yes, it is delicious.",
            translation: "Si, es delicioso."
        }
    ],
    [ // conversation grouping
        {
            phrase: "This is Ann. Here is her husband, Steve.",
            translation: "Esta es Ann. Aqui esta su esposo, Steve."
        },
        {
            phrase: "Ann is Steve's wife.",
            translation: "Ann es la esposa de Steve."
        },
    ],
    [ // conversation grouping
        {
            phrase: "There is one car.",
            translation: "Hay un carro."
        },
        {
            phrase: "How much does the car cost?",
            translation: "Cuanto cuesta el automovil?"
        },
        {
            phrase: "He is driving the car. She is driving the car.",
            translation: "El esta conduciendo el automovil. Ella esta manejando el auto."
        },
        {
            phrase: "Is that the man's car or the woman's car?",
            translation: "Es ese el auto del hombre o el [auto] de la mujer?"
        },
    ],
    [ // conversation grouping
        {
            phrase: "There is only one beautiful car.",
            translation: "Solo hay un hermoso auto."
        },
        {
            phrase: "That is not Steve's car.",
            translation: "Ese no es el auto de Steve."
        },
        {
            phrase: "That is not the man's car.",
            translation: "Ese no es el auto del hombre."
        },
        {
            phrase: "That is the woman's car.",
            translation: "Ese es el auto de la mujer."
        },
        {
            phrase: "No, there are two cars.",
            translation: "No, hay dos autos."
        },
        {
            phrase: "He has a car and she has a car.",
            translation: "El tiene un auto y ella tiene un auto."
        },
    ],
    [ // conversation grouping
        {
            phrase: "I have a car. You have a car.",
            translation: "Tengo un carro. Tienes un carro."
        },
        {
            phrase: "It was nice meeting you. Goodbye!",
            translation: "Fue un placer conocerte. Adios!"
        },
    ],
];

var weekOne = {
    id: 1,
    dialogues: [],
    phrases: [],
    vocabulary: []
};

var phraseIndex = 0;
dialogues.forEach((dialogue, dIndex) => {
    weekOne.dialogues.push(dialogue);

    // post-process step: fill in the "phrases" object
    dialogue.forEach((phrase, pIndex) => {
        phrase = Ember.$.extend({id: phraseIndex += 1, difficultyLevel: 5}, phrase);
        weekOne.phrases.push(phrase);
    });
});

vocabulary.forEach((pair, index) => {
    pair = Ember.$.extend({id: index + 1, difficultyLevel: 5}, pair);
    weekOne.vocabulary.push(pair);
})

export default weekOne;
