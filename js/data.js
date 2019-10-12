"use strict";

const recipes = [
    {
        name: 'Cukinijų tyrelė',
        img: ['cukiniju-tyrele.jpg'],
        author: '',
        age: {
            fromMin: { value: 4, param: 'm' },
            fromNorm: { value: 6, param: 'm' }
        },
        ingredients: {
            main: [
                { name: 'cukinija', value: 50, param: 'g' },
                { name: 'žiedinis kopūstas', value: 25, param: 'g', comment: 'šviežias arba šaldytas' }
            ],
            optional: [
                { name: 'bulvė', comment: 'Jei reikia sočiau' }
            ]
        },
        process: [
            'Nulupame cukiniją ir supjaustome nedideliais gabalėliais ir paverdame apie 8 min, kol suminkštės',
            'Žiedinius kopūstus paverdame apie 10-12 minučių, kol suminkštės',
            'Daržoves sudedame į maisto smulkintuvą. Smulkiname iki vientisos masės'
        ],
        commets: [
            'Jei vaikas jau vyresnis ir matome, kad greitai išalksta, įdėkime papildomai šaukštelį kokybiško aliejaus, pavyzdžiui, ypač tyro (extra virgin) alyvuogių, šalto spaudimo kanapių ar linų sėmenų, ar tiesiog natūralaus sviesto.'
        ]
    }
]