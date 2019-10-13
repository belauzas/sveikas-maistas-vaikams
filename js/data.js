"use strict";

let recipes = [
    // {
    //     name: '',
    //     img: ['a.jpg'],
    //     author: '',
    //     age: {
    //         fromMin: { value: 4, param: 'm' },
    //         fromNorm: { value: 6, param: 'm' }
    //     },
    //     portions: [3, 4],
    //     ingredients: {
    //         main: [
    //             '',
    //         ],
    //         optional: [
    //             ''
    //         ]
    //     },
    //     process: [
    //         ''
    //     ],
    //     commets: [
    //         ''
    //     ]
    // },
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
                '50 g cukinijos',
                '25 g žiedinių kopūstų (šviežių arba šaldytų)'
            ],
            optional: [
                'Jei reikia sočiau įdedame bulvės'
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
                '150 g sviesto',
                '40 g agavų sirupo arba nerafinuoto cukraus',
                '100 ml avižų ar kito augalinio pieno. Jei pienui nealergiškas, galite keisti ir natūraliu karvės pienu',
                '2 kiaušiniai',
                '50 g razinų',
                '300 ml pilno grūdo speltos miltų',
                '1 a.š. maltų meduolių prieskonių. Galite pasidaryti jų mišinį patys iš maltų gvazdikėlių, imbierų, žvaigždinio anyžiaus, kardamono bei cinamono)',
                '2 a.š. kepimo miltelių'
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
    },
    {
        name: 'Cukinijų ir varškės blynai',
        img: ['cukiniju-ir-varskes-blynai.jpg'],
        author: '',
        age: {
            fromNorm: { value: 12, param: 'm' }
        },
        ingredients: {
            main: [
                '180 g varškės',
                '1 nedidelė cukinija',
                '1 kiaušinis',
                '3 šaukštai kukurūzų miltų',
                '40 g tarkuoto kietojo sūrio',
                'žiupsnelis druskos'
            ]
        },
        process: [
            'Sutarkuokite burokine tarka cukiniją, pabarstykite žiupsneliu druskos ir palikite stovėti',
            'Kitame inde sumaišykite varškę, kiaušinį, sūrį, suberkite kukurūzų miltus',
            'Jeigu iš cukinijos išsisunkė sulčių, jas nupilkite ir berkite cukinijas į varškės masę. Turi gautis gan tiršta masė',
            'Keptuvėje įkaitinkite ghee sviestą, rankomis formuokite nedidelius kotletukus ir dėkite į keptuvę. Jei tešla limpa prie rankų, jas apibarstykite kukurūzų miltais',
            'Apkepkite iš abiejų pusių, kol gražiai pagels'
        ],
        commets: [
            'Patiekite su pomidorais, galite ir su grietine. Skanūs ir šalti.'
        ]
    },
    {
        name: 'Obuolių tyrė su razinomis ir cinamonu',
        img: ['obuoliu-tyre-su-razinomis-ir-cinamonu.jpg'],
        author: '',
        age: {
            fromNorm: { value: 8, param: 'm' }
        },
        portions: [3, 4],
        ingredients: {
            main: [
                '120 g obuolių (nuluptų, pašalintomis sėklinėmis ir supjaustytų)',
                '¼ citrinos sulčių',
                '25 g razinų',
                '¼ cinamono lazdelės',
                '¼ a.š. malto cinamono'
            ]
        },
        process: [
            'Sudėkite visas sudėtines dalis į nereaktyvaus (nelimpančio) pavirčiaus puodą',
            'Uždenkite tinkamo dydžio dangčiu ir užvirinkite',
            'Virkite ant mažos ugnies, kartas nuo karto pamaišydami',
            'Po 8-10 minučių arba kai vaisiai pakankamai suminkštės nukelkite nuo ugnies',
            'Išimkite cinamono lazdelę',
            'Sutrinkite tyrę elektriniu smulkintuvu'
        ],
        commets: [
            'Patiekite su pomidorais, galite ir su grietine. Skanūs ir šalti.'
        ]
    },
    {
        name: 'Jautiena su lešiais ir daržovėmis',
        img: ['jautiena-su-lesiais-ir-darzovemis.jpg'],
        author: '',
        age: {
            fromNorm: { value: 7, param: 'm' }
        },
        ingredients: {
            main: [
                'Jautiena',
                'Bulvė',
                'Morka',
                'Pomidoras',
                'Lešiai'
            ]
        },
        process: [
            'Lešius užmirkiau iš vakaro ir ryte išviriau atskirai',
            'autiena sumaliau ir garinau atskirai apie 30 min',
            'Bulvė ir morka garinau apie 20 min',
            'Nuo pomidoro nuemiau odelę ir išemiau seklas',
            'Viska sudėjau kartu ir sublenderavau',
            'Įdėjau 0.5 a.š. aliejaus'
        ]
    },
    {
        name: 'Šparaginių pupelių ir bulvių tyrė',
        img: ['sparaginiu-pupeliu-ir-bulviu-tyre.jpg'],
        author: '',
        age: {
            fromNorm: { value: 7, param: 'm' }
        },
        ingredients: {
            main: [
                'Šparaginės pupelėss'
            ],
            optional: [
                'Dėl sotumo galima pridėti bulvę, morką ar abi šias daržoves'
            ]
        },
        process: [
            'Nukerpame pupelių galus ir išimame pupeles iš ankšties',
            'Pupeles sudedame į puodą ir įpilame vandens, kad jas apsemtų',
            'Paverdame, kol jos suminkštėja',
            'Pupeles sudedame į maisto smulkintuvą ir smulkiname iki vientisos masės',
            'Jei gardiname virtomis bulvėmis, jas išverdame ir sutrinama šakute bei sumaišome su pupelių tyre'
        ],
        commets: [
            'Jei vaikas jau vyresnis ir matome, kad greitai išalksta, įdėkime papildomai šaukštelį kokybiško aliejaus, pavyzdžiui, ypač tyro (extra virgin) alyvuogių, šalto spaudimo kanapių ar linų sėmenų ar tiesiog natūralaus sviesto.'
        ]
    },{
        name: 'Bulvių, morkų ir lešių košė',
        img: ['bulviu-morku-ir-lesiu-kose.jpg'],
        author: '',
        age: {
            fromNorm: { value: 7, param: 'm' }
        },
        ingredients: {
            main: [
                '1 maža morka (50 g)',
                '30 g skaldytų lęšių',
                '100 g bulvių',
                '1 mažas lauro lapas',
                '200 ml namie gamintas daržovių sultinio ar vandens',
                'Šiek tiek lydyto sviesto'
            ]
        },
        process: [
            'Nulupame morką ir bulves bei supjaustome nedideliais gabalėliais',
            'Puode ištirpiname sviestą ir sudedame sutarkuotą morką ir lengvai pakepiname keletą minučių',
            'Įpilame vandens ar sultinį sudedame supjaustytas bulves, lauro lapą ir lęšiu',
            'Troškiname apie 15 min',
            'Išimame lauro lapą',
            'Troškinį supilame į maisto smulkintuvą ir sutriname iki reikiamos masės, priklausomai nuo to, kaip mažylis moka kramtyti'
        ]
    },{
        name: 'Aviečių ir bananų tyrė',
        img: ['avieciu-ir-bananu-tyre.jpg'],
        author: '',
        age: {
            fromNorm: { value: 7, param: 'm' }
        },
        ingredients: {
            main: [
                'saujelė aviečių',
                '0,5 banano'
            ]
        },
        process: [
            'Avietes kruopščiai nuplaukite tekančiu vandeniu ir nuplikykite verdančiu vandeniu',
            'Sutrinkite avietes į vientisą tyrę su bananu'
        ],
        commets: [
            'Kiti rekomenduojami deriniai su avietėmis: "avietės ir bananai", "avietės ir kriaušės", "avietės ir obuoliai", "avietės ir persikai", "avietės ir slyvos"',
            'Ir atminkite pagrindinę taisyklę, ruošiant mažyliams vaisių-uogų tyreles: nemaišykite daugiau nei 2 skirtingų vaisių ar uogų.'
        ]
    },{
        name: 'Kiaušinių-bananų blyneliai',
        img: ['kiausiniu-bananu-blyneliai.jpg'],
        author: '',
        age: {
            fromNorm: { value: 12, param: 'm' }
        },
        portions: [3, 4],
        ingredients: {
            main: [
                '1 bananas',
                '2 kiaušiniai',
                'keli šaukšteliai aliejaus (pvz.: extra virgin)'
            ]
        },
        process: [
            'Bananą sutrinti',
            'atskyrai išplakti kiaušinius',
            'viską sumaišyti',
            'Kepti mažais plonais blyniukais, kad lengviau apsiverstų. Kepa greitai, ant mažos ugnies'
        ],
        commets: [
            ''
        ]
    },{
        name: 'Virta menkė sviesto, petražolių ir pankolių padaže',
        img: ['virta-menke-sviesto-petrazoliu-ir-pankoliu-padaze.jpg'],
        author: '',
        age: {
            fromMin: { value: 4, param: 'm' },
            fromNorm: { value: 6, param: 'm' }
        },
        portions: [3, 4],
        ingredients: {
            main: [
                'Pusė pankolio (~50 g), supjaustyto į keturias dalis',
                '250 ml žuvies sultinio',
                '115 g menkės file (be odos ir kaulų)',
                '20 g nesūdyto sviesto',
                'Pusė valgomojo šaukšto smulkintų petražolių'
            ]
        },
        process: [
            'Pankolio skilteles sudėkite į verdantį vandenį ir virkite 8-10 min arba kol suminkštės',
            'Perplaukite šaltu vandeniu ir smulkiai supjaustykite',
            'Žuvies sultinį užvirinkite ir sudėkite menkę',
            'Virkite ant mažos ugnies 5-7 minutes (virimo trukmė priklauso nuo žuvies gabalėlio storio)',
            'Išvirusią žuvį išimkite iš sultinio ir trumpam atidėkite į šalį',
            'Išgarinkite sultinį kaitindami ant didelės ugnies maždaug 4 minutes ir perkoškite',
            'Apie 75 ml išgarinto sultinio supilkite į prikaistuvį.',
            'Jame ištirpinkite sviestą ir suberkite petražoles bei smulkiai pjaustytą pankolį',
            'Sutrupinkite žuvį į padažą',
            'Palikite atvėsti'
        ],
        commets: [
            'Mažesniems vaikams žuvį galite ir sutrinti'
        ]
    },{
        name: 'Braškių tyrė',
        img: ['braskiu-tyre.jpg'],
        author: '',
        age: {
            fromMin: { value: 7, param: 'm' },
            fromNorm: { value: 8, param: 'm' }
        },
        portions: [3, 4],
        ingredients: {
            main: [
                'Šviežios sunokusios braškės',
            ]
        },
        process: [
            'Nuskiname penkių-šešių sunokusių braškių kotelius ir jas sudedame į maisto smulkintuvą',
            'Smulkiname iki vientisos masės'
        ],
        commets: [
            'Svarbiausia šią tyrę naudoti tik sezono metu. Nebent turite šaldytų braškių be priedų, tuomet galite gaminti bet kada.',
            'Su braškėmis galime derinti saldžius vaisius: persiką, bananą ar kriaušę.',
            'Taip pat nuo 10 mėnesių tinka graikinis jogurtas ar grietinė.'
        ]
    }
];


recipes = [...recipes, ...recipes, ...recipes]