const model = {
    app: {
        pages: [ 
            'firstPage',
            'login',
            'newAccount',
            'mainMenu',
            'highscoreList'
        ],
        isLoggedIn: false,
        currentUser: {
            id: 1,
            name: 'bananmann',
            password: 'bananergodt123',
            coins: 700,
            upgrades: {
                hp: 0,
                jump: 0,
            },
            ownedSkins: [1],
            equippedSkin:{skinID:1, skinPath: ""},
            highscore: 6969
        },
        currentAnimation: {
            skin: "ugly",
            sprite: "idle",
        },
    },


    inputs: {
        addUser: {
            name: '',
            password: '',
        },

        logIn: {
            name: '',
            password: '',
        }
    },

    data: {
        back: [
            {
                img: "./images/gameBackground.jpg"
            },
        ],
        liveHighscore: 0,
        liveCoins: 0,
        isAlive: true,

        encounters: [
            {
                event: "rock"
            },
            {
                event: "cactus"
            },
        ],

        highscoreBoard: [
            {
                navn: 'bananorama AS',
                score: 6969696969,
            },
            {
                navn: 'John',
                score: 9999,
            },
            {
                navn: 'banandamen',
                score: 0,
            },
            {
                navn: 'sverd',
                score: 0,
            },
            {
                navn: 'Mats',
                score: 69,
            },
        ],

        skins: [
            {
                itemnum: 1,
                name: 'ugly',
                price: 100,
                img: "./images/sprites/ugly-idle.png"
            },

            {
                itemnum: 2,
                name: 'peel',
                price: 200,
                img: "./images/sprites/peel-idle.png"
            },
            {
                itemnum: 3,
                name: 'dino',
                price: 300,
                img: "./images/sprites/dino-idle.png",
            }

        ],

        user: [
            {
                id: '1',
                name: 'bananmann',
                password: 'bananergodt123',
                coins: 700,
                upgrades: {
                    hp: 0,
                    jump: 0,
                },
                ownedSkins: [1],
                equippedSkin:{skinID:1, skinPath: ""},
                highscore: 6969,
            },
            {
                id: '2',
                name: 'bananorama AS',
                password: 'JegElskerBanan',
                coins: 69,
                upgrades: {
                    hp: 0,
                    jump: 0,
                },
                ownedSkins: [1],
                equippedSkin:{skinID:1, skinPath: ""},
                highscore: 6969,
            },
            {
                id: '3',
                name: 'banandamen',
                password: 'nemadnanab',
                coins: 0,
                upgrades: {
                    hp: 0,
                    jump: 0,
                },
                ownedSkins: [1],
                equippedSkin:{skinID:1, skinPath: ""},
                highscore: 6969,
            },
            
        ]
    },
}