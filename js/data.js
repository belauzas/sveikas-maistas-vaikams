"use strict";

let recipes = [
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
    },
    {
        name: 'Pilno grūdo speltos keksiukai su razinomis',
        img: ['pilno-grudo-speltos-keksiukai-su-razinomis.jpg'],
        author: '',
        age: {
            fromNorm: { value: 12, param: 'm' }
        },
        ingredients: {
            main: [
                { name: 'sviestas', value: 150, param: 'g' },
                [
                    { name: 'agavų sirupas', value: 40, param: 'g' },       // multiple means - OR
                    { name: 'nerafinuotas cukrus', value: 40, param: 'g' }
                ],
                [
                    { name: 'avižų pienas', value: 100, param: 'ml' },
                    { name: 'augalinis pienas', value: 100, param: 'ml' },
                    { comment: 'Jei pienui nealergiškas, galite keisti ir natūraliu karvės pienu.' }
                ],
                { name: 'kiaušiniai', value: 2 },                           // no param -> 'units' ('vnt')
                { name: 'razinos', value: 50, param: 'g' },
                { name: 'pilno grūdo speltos miltai', value: 300, param: 'ml' },
                { name: 'maltų meduolių prieskoniai', value: 1, param: 'ts',      // ts - tea spoon
                    comment: 'Galite pasidaryti jų mišinį patys iš maltų gvazdikėlių, imbierų, žvaigždinio anyžiaus, kardamono bei cinamono' },
                { name: 'kepimo milteliai', value: 2, param: 'ts' }
            ]
        },
        process: [
            'Sviestą ištirpiname puode ir nukeliame nuo viryklės',
            'Į puodą įdedame agavų sirupą arba cukrų, supilame avižų pieną ir gerai išmaišome',
            'Atskiriame kiaušinių baltymus nuo trynių, trynius suverčiame į bendrą masę, o baltymus išplakame iki putų',
            'Puode esančius produktus sumaišome su išplaktais kiaušinio baltymais, supilame miltus, prieskonius, kepimo miltelius, gerai išmaišome, kol tešlos konsistencija taps panaši į grietinės',
            'Jei tešla per skysta, įpilame daugiau pilno grūdo miltų',
            'Keksiukų formeles pripildome gauta mase iki pusės, į kiekvieną formelę įdedame po 3-4 razinas',
            'Kepame +175 C orkaitėje apie 25 minutes, kol keksiukai patamsės'
        ]
    }
];


recipes = [...recipes, ...recipes, ...recipes, ...recipes, ...recipes, ...recipes]