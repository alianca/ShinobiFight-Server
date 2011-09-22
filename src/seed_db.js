var config = require('../config').config;
var models = require('./models').models;
var ObjectId = require('mongoose').Schema.ObjectId;

var Clan = models.Clan;
var Skill = models.Skill;

config();

function seed_clan() {
    return {
        senju: new Clan({
            name: 'Senju',
            skills: [],
            attrs: {
                hp : 'low',
                nin: 'high',
                gen: 'low',
                tai: 'medium',
                agi: 'medium',
                con: 'medium',
                str: 'high',
                def: 'low',
                cog: 'low',
                intel: 'low',
                chk: 'medium',
                stm: 'low'
            }
        }),

        aburame: new Clan({
            name: 'Aburame',
            skills: [],
            attrs: {
                hp : 'medium',
                nin: 'medium',
                gen: 'low',
                tai: 'low',
                agi: 'low',
                con: 'high',
                str: 'low',
                def: 'medium',
                cog: 'medium',
                intel: 'high',
                chk: 'low',
                stm: 'low'
            }
        }),

        akimichi: new Clan({
            name: 'Akimichi',
            skills: [],
            attrs: {
                hp : 'medium',
                nin: 'low',
                gen: 'low',
                tai: 'high',
                agi: 'low',
                con: 'low',
                str: 'high',
                def: 'medium',
                cog: 'medium',
                intel: 'low',
                chk: 'low',
                stm: 'medium'
            }
        }),

        hyuuga: new Clan({
            name: 'Hyuuga',
            skills: [],
            attrs: {
                hp : 'low',
                nin: 'medium',
                gen: 'low',
                tai: 'high',
                agi: 'low',
                con: 'medium',
                str: 'low',
                def: 'high',
                cog: 'medium',
                intel: 'low',
                chk: 'medium',
                stm: 'low'
            }
        }),

        inuzuka: new Clan({
            name: 'Inuzuka',
            skills: [],
            attrs: {
                hp : 'high',
                nin: 'medium',
                gen: 'low',
                tai: 'medium',
                agi: 'high',
                con: 'low',
                str: 'medium',
                def: 'low',
                cog: 'low',
                intel: 'low',
                chk: 'medium',
                stm: 'low'
            }
        }),

        nara: new Clan({
            name: 'Nara',
            skills: [],
            attrs: {
                hp : 'low',
                nin: 'medium',
                gen: 'medium',
                tai: 'low',
                agi: 'low',
                con: 'high',
                str: 'low',
                def: 'medium',
                cog: 'low',
                intel: 'high',
                chk: 'medium',
                stm: 'low'
            }
        }),

        uzumaki: new Clan({
            name: 'Uzumaki',
            skills: [],
            attrs: {
                hp : 'high',
                nin: 'medium',
                gen: 'low',
                tai: 'low',
                agi: 'medium',
                con: 'low',
                str: 'medium',
                def: 'low',
                cog: 'low',
                intel: 'low',
                chk: 'high',
                stm: 'low'
            }
        }),

        yamanaka: new Clan({
            name: 'Yamaaka',
            skills: [],
            attrs: {
                hp : 'low',
                nin: 'medium',
                gen: 'high',
                tai: 'medium',
                agi: 'low',
                con: 'high',
                str: 'low',
                def: 'medium',
                cog: 'medium',
                intel: 'low',
                chk: 'low',
                stm: 'low'
            }
        }),

        suna: new Clan({
            name: 'Suna',
            skills: [],
            attrs: {
                hp : 'high',
                nin: 'medium',
                gen: 'low',
                tai: 'low',
                agi: 'low',
                con: 'low',
                str: 'medium',
                def: 'high',
                cog: 'low',
                intel: 'medium',
                chk: 'medium',
                stm: 'low'
            }
        }),

        kaguya: new Clan({
            name: 'Kaguya',
            skills: [],
            attrs: {
                hp : 'medium',
                nin: 'medium',
                gen: 'low',
                tai: 'high',
                agi: 'high',
                con: 'low',
                str: 'low',
                def: 'medium',
                cog: 'low',
                intel: 'low',
                chk: 'low',
                stm: 'medium'
            }
        }),

        yuki: new Clan({
            name: 'Yuki',
            skills: [],
            attrs: {
                hp : 'low',
                nin: 'high',
                gen: 'low',
                tai: 'medium',
                agi: 'medium',
                con: 'low',
                str: 'low',
                def: 'high',
                cog: 'medium',
                intel: 'low',
                chk: 'medium',
                stm: 'low'
            }
        }),

        uchiha: new Clan({
            name: 'Uchiha',
            skills: [],
            attrs: {
                hp : 'low',
                nin: 'high',
                gen: 'medium',
                tai: 'medium',
                agi: 'high',
                con: 'low',
                str: 'low',
                def: 'low',
                cog: 'low',
                intel: 'medium',
                chk: 'medium',
                stm: 'low'
            }
        }),

        futagokura: new Clan({
            name: 'Futagokura',
            skills: [],
            attrs: {
                hp : 'high',
                nin: 'medium',
                gen: 'low',
                tai: 'high',
                agi: 'medium',
                con: 'low',
                str: 'low',
                def: 'low',
                cog: 'low',
                intel: 'medium',
                chk: 'low',
                stm: 'medium'
            }
        }),

        hoozuki: new Clan({
            name: 'Hoozuki',
            skills: [],
            attrs: {
                hp : 'low',
                nin: 'high',
                gen: 'low',
                tai: 'medium',
                agi: 'medium',
                con: 'low',
                str: 'high',
                def: 'medium',
                cog: 'low',
                intel: 'low',
                chk: 'low',
                stm: 'medium'
            }
        }),

        hoshigaki: new Clan({
            name: 'Hoshigaki', // TODO
            skills: [],
            attrs: {
                hp : 'low',
                nin: 'low',
                gen: 'low',
                tai: 'low',
                agi: 'low',
                con: 'low',
                str: 'low',
                def: 'low',
                cog: 'low',
                intel: 'low',
                chk: 'low',
                stm: 'low'
            }
        }),

        bakudankura: new Clan({
            name: 'Bakudankura',
            skills: [],
            attrs: {
                hp : 'medium',
                nin: 'high',
                gen: 'low',
                tai: 'low',
                agi: 'low',
                con: 'medium',
                str: 'medium',
                def: 'low',
                cog: 'low',
                intel: 'medium',
                chk: 'high',
                stm: 'low'
            }
        }),

        kumokura: new Clan({
            name: 'Kumokura',
            skills: [],
            attrs: {
                hp : 'low',
                nin: 'high',
                gen: 'low',
                tai: 'low',
                agi: 'medium',
                con: 'medium',
                str: 'low',
                def: 'high',
                cog: 'low',
                intel: 'medium',
                chk: 'medium',
                stm: 'low'
            }
        }),

        juinkura: new Clan({
            name: 'Juinkura', // TODO
            skills: [],
            attrs: {
                hp : 'low',
                nin: 'low',
                gen: 'low',
                tai: 'low',
                agi: 'low',
                con: 'low',
                str: 'low',
                def: 'low',
                cog: 'low',
                intel: 'low',
                chk: 'low',
                stm: 'low'
            }
        }),

        no_clan: new Clan({
            name: 'Sem Cla',
            skills: [],
            attrs: {
                hp : 'medium',
                nin: 'low',
                gen: 'low',
                tai: 'high',
                agi: 'medium',
                con: 'low',
                str: 'medium',
                def: 'medium',
                cog: 'low',
                intel: 'low',
                chk: 'low',
                stm: 'high'
            }
        })
    };
}

function seed_skill() {
    return {
        basic: [
            new Skill({
                name: 'Soco',
                description: 'Ataque corporal básico',
                min_level: 0,
                precision: 60,
                critical: 25,
                strength: 12,
                type: 'tai',
                activation: 0,
                duration: 1,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 3 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Carregar Chakra',
                description: '',
                min_level: 0,
                precision: 100,
                critical: 0,
                strength: 0,
                type: 'natural',
                activation: 0,
                duration: 2,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 15, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: '1º Portão - Portão Inicial',
                description: 'Localiza-se no lado direito do cérebro. O ninja consegue uma velocidade e força maior do que ele normalmente atinge.',
                min_level: 29,
                precision: 100,
                critical: 0,
                strength: 0,
                type: 'portao',
                activation: 1,
                duration: 5,
                fatigue: 10,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0.05, con: 0, str: 0.05, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: '2º Portão - Portão da Energia',
                description: 'Localiza-se no lado esquerdo do cérebro. O chakra flui mais rapidamente, aumentando mais uma vez a velocidade e a força do usuário. ',
                min_level: 39,
                precision: 100,
                critical: 0,
                strength: 0,
                type: 'portao',
                activation: 1,
                duration: 5,
                fatigue: 10,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0.1, con: 0, str: 0.1, def: 0, cog: 0, intel: 0, chk: 0.05, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: '3º Portão - Portão da Vida',
                description: 'Localiza-se entre os pulmões. Sua velocidade e força ficam ainda mais aprimoradas, refletindo em suas tecnicas de Defesa e Taijutsu.',
                min_level: 49,
                precision: 100,
                critical: 0,
                strength: 0,
                type: 'portao',
                activation: 2,
                duration: 5,
                fatigue: 11,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0.05, agi: 0.2, con: 0, str: 0.2, def: 0.1, cog: 0, intel: 0, chk: 0.05, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            })
        ],

        senju: [
            new Skill({
                name: 'Mokuton Jubaku Eisou',
                description: 'Com a técnica do Ninho Sólido o usuário faz raizes brotarem do chão para prenderem e danificarem seu adversario por constrição.',
                min_level: 0,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Mokuton Shouheki',
                description: 'Com a técnica da Barreira de Grilhões de Madeira cria uma cupula de madeira sobre o oponente para encurrala-lo, ou sobre o usuário para sua proteção.',
                min_level: 9,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Mokuton Shichuurou',
                description: 'O usuário da origem a tábuas de madeira do chão criando uma resistente Prisão de Quatro Pilares capaz de prender seu oponente.',
                min_level: 20,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Mokuton Jukai Koutan',
                description: 'Com a  Gênesis da Floresta o usuário é capaz de criar uma floresta para prender seu inimigo ou defender-se de algum ataque, após isso o usuário pode explodir a floresta.',
                min_level: 35,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Mokuton Jukai Meikai Kousan',
                description: 'Com a Gênesis da Floresta infernal uma gigantesca floresta é criada e começa a se transformar em uma gigantesca árvore labirintelo, após isso a grande árvore se auto-destrói criando uma explosão colossal.',
                min_level: 44,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            })
        ],

        aburame: [
            new Skill({
                name: 'Kikaichuu Yajiri',
                description: 'A Técnica do Poço dos Insetos aprisiona o inimigo em um poço de insetos que causam dano e absorvem o chakra do adversário.',
                min_level: 0,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Kikaichuu Tsumoji',
                description: 'A Técnica do Tornado dos Insetos envolvem o inimigo em um tornado de insetos que causam danos e absorvem o chakra do adversário.',
                min_level: 9,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Mushi Kame',
                description: 'A Técnica do Jarro de Insetos cria um escudo de insetos ao redor do usuário para bloquear ataques do adversário que ao tentar atacar também recebe danos.',
                min_level: 20,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Kikaichuu Arare',
                description: 'A Técnica de Compressão dos Insetos dispara uma esfera massiva de insetos contra ao adversário que causam dano e absorvem o chakra do adversário.',
                min_level: 35,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Mushidama',
                description: 'A Técnica Secreta do Globo de Insetos cerca o inimigo com milhares de insetos que drenam o chakra e devoram o adversário além de impedí-lo de se mover.',
                min_level: 44,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            })
        ],

        akimichi: [
            new Skill({
                name: 'Nikudan Sensha',
                description: 'Utilizando o Tanque de Carne Humana, o usuário rotaciona seu corpo em direção ao inimigo se transformando em uma ofensiva esfera giratória.',
                min_level: 0,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Nikudan Hari Sensha',
                description: 'Utilizando o Tanque de Carne Humana com Espinhos, o usuário envolve seu corpo com kunais e realiza o movimento do golpe Nikudan Sensha.',
                min_level: 9,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Chou Baika',
                description: 'Utilizando o Técnica de Expansão Total do Corpo, o usuário multiplica em várias vezes seu tamanho, atingindo a dimensão de prédios.',
                min_level: 20,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Chou Harite',
                description: 'O Super Tapa é utilizado enquanto o usuário está em seu tamanho ampliado, que com as duas mãos, direciona um palmada em direção ao solo.',
                min_level: 35,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Choudan Bakugeki',
                description: 'O Super Soco é aplicado após o membro liberar uma quantidade enorme de chakra que é canalizada em um poderoso soco vertical contra o oponente.',
                min_level: 44,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            })
        ],

        hyuuga: [
            new Skill({
                name: 'Byakugan',
                description: 'Utilizando os Olhos Brancos,  além de ampliar a visão periférica do usuário, este também enxerga o chakra do oponente, podendo identificar pontos críticos.',
                min_level: 0,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Hakkeshou Kaiten',
                description: 'Com a Defesa Rotativa dos 8 Trigramas Ofensivos , o usuário defende-se realizando um movimento circulatório enquanto expele chakra de seus poros.',
                min_level: 9,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Hakke Kuushou',
                description: 'Utilizando a Palma Aérea dos 8 Trigramas, o usuário ataca os pontos vitais do inimigo com uma tensa rajada de chakra realizada com a palma.',
                min_level: 20,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Hakke Rokujuuyonshou 64',
                description: 'As 64 Palmas do Campo de Batalha de 8 Trigramas são desferidas contra os tenketsus do adversário, paralisando a circulação de chakra deste por um tempo.',
                min_level: 35,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Hakke Hyakunijuuhasshou 128',
                description: 'As 128 Palmas do Campo de Batalha de 8 Trigramas são desferidas contra os tenketsus, ferindo gravemente e paralisando a circulação de chakra do inimigo.',
                min_level: 44,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            })
        ],

        inuzuka: [
            new Skill({
                name: 'Shikyaku',
                description: 'O Jutsu das Quatro Patas deixa o usuário mais semelhante a seu parceiro animal, aumentando sua força e velocidade, aguçando seu olfato e transformando suas unhas em garras e seus ',
                min_level: 0,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Tsuuga',
                description: 'Ao utilizar o Redemuinho de Presas o usuário se projeta no ar e inicia um movimento rotatório muito rapido, formando uma espécie de tornado capaz de rasgar o que estiver pela frente.',
                min_level: 9,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Gatsuuga',
                description: 'Utilizando o golpe Presa Sobre Presa o usuário e seu parceiro animal utilizam simultaneamente o Tsuuga, duplicando a área de impacto.',
                min_level: 20,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Soutorou',
                description: 'Com a técnica do Lobo de Duas Cabeças o usuário se junta a seu parceiro animal, transformando ambos em um poderoso lobo gigante de duas cabeças.',
                min_level: 35,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Garouga',
                description: 'Com o Transpassar das Presas Lupinas o usuário utiliza o Tsuuga, enquanto na forma de lobo gigante de duas cabeças, assim aumentando muito o poder destrutivo do golpe.',
                min_level: 44,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            })
        ],

        nara: [
            new Skill({
                name: 'Kage Mane',
                description: 'Com a Possesão da Sombra o usuário estica sua própria sombra até encostar na sombra do oponente, após as sombras se encostarem todos os movimentos do usuario serão imitados pelo inimigo.',
                min_level: 0,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Kage Mane Shuriken',
                description: 'Ao utilizar a Possesão da Sombra de Shuriken o usuário arremessa uma shuriken capaz de conduzir chakra na sombra de seu oponente, ao acertar a sombra o inimigo fica imobilizado pelo jutsu.',
                min_level: 9,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Kage Kubi Shibari ',
                description: 'Com o Enforcamento Pela Sombra o usuario pode projetar uma mão de sombra até o pescoço de seu oponente, para assim estrangula-lo.',
                min_level: 20,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Kage Nui',
                description: 'Durante a Prisão das Sombras o usuário pode projetar sua sombra em formato de agulhas para fora do chão, podendo assim perfurar ou prender seu adversário.',
                min_level: 35,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Kage Iani',
                description: 'Com a Sombra do Tubarão o usuário cria uma densa e poderosa sombra sob seu inimigo, imobilizando-o ao mesmo tempo que suga seu chakra.',
                min_level: 44,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            })
        ],

        uzumaki: [
            new Skill({
                name: 'Rasengan',
                description: 'Liberando uma quantia de chakra ao mesmo tempo em que se faz ele girar em varias direções rapidamente, o usuário cria uma Esfera Espiral capaz de danificar intelernamente seu inimigo.',
                min_level: 0,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Odama Rasengan',
                description: 'Com uma liberação de chakra mais intelensa o usuário cria a Grande Bola da Esfera Espiral, um rasengan muito mais denso e que explode ao acertar o oponente.',
                min_level: 9,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Rasenshuriken',
                description: 'Injetando chakra do elemento vento na formação do rasengam o usuário cria uma Shuriken Espiral, capaz de destruir seu inimigo a nivel celular com as pequenas lâminas de chakra.',
                min_level: 20,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Odama Rasenshuriken',
                description: 'Liberando uma enorme quantidade de chakra o usuario forma uma Grande Bola de Shuriken Espiral muito maior, mais densa, mais veloz que o normal. Seu poder destrutivo é multiplicado inumeras vezes.',
                min_level: 35,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Tajuu Odama Rasenshukiren',
                description: 'Com o dominio na criação de rasengans o usuário pode criar e arremessar em seu oponente Múltiplas Grandes Bolas de Shurikens Espirais. Causando uma gigantesca área de destruição.',
                min_level: 44,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            })
        ],

        yamanaka: [
            new Skill({
                name: 'Chakra Kami Nawa',
                description: 'O usuário corta uma quantidade de seu cabelo e arremessa sobre o campo de batalha, caso o oponente pise sobre a Corda Capilar de Chakra ele ficará paralizado.',
                min_level: 0,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Shintelenshin',
                description: 'Com a Transferência de Mente o usuário projeta sua mente para frente em linha reta, ao atingir o corpo do inimigo este fica sob total controle do usuário.',
                min_level: 9,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Seishin Raichuu',
                description: 'Utilizando esta técnica o usuario causa um poderoso Ataque Mental, fazendo com que seu oponente acredite ter sido ferido seriamente.',
                min_level: 20,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Seishin Toukai',
                description: 'O usuário ao tocar a cabeça de seu oponente pode vasculhar sua memoria e após isso utilizar a Destruição da Mente, podendo causar morte cerebral.',
                min_level: 35,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Kouchou Seishin Toukai',
                description: 'Com a Técnica ninja da Destruição Suprema da Mente o usuario pode, a distancia, fazer com que seu oponente sofra morte cerebral.',
                min_level: 44,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            })
        ],

        suna: [
            new Skill({
                name: 'Suna no Yoroi',
                description: 'Durante esta técnica o usuário cria uma Armadura de Areia densa, capaz de protege-lo de diversos ataques.',
                min_level: 0,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Suna no Tate',
                description: 'Com esta técnica o usuario cria um denso e resistente Escudo de Areia, capaz de parar ataques poderosos.',
                min_level: 9,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Sabaku Sousou ',
                description: 'Ao utilizar o Funeral do Deserto o usuario prende seu oponente em uma grande quantidade de areia, após isso o usuario comprime a areia esmagando o que estiver dentro dela.',
                min_level: 20,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Ryuusa Bakuryuu ',
                description: 'Com esta técnica o usuario cria uma enorme e poderosa Avalanche de Areia capaz de soterrar seu inimigo.',
                min_level: 35,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Sabaku Taisou',
                description: 'Durante o Requiém do Deserto o usuário cria uma quantidade colossal de areia e enterra seu inimigo no fundo de um deserto, para que assim, ele morra lentamente esmagado pela pressão da areia.',
                min_level: 44,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            })
        ],

        kaguya: [
            new Skill({
                name: 'Yanagi no Mai',
                description: 'Com a Dança do Salgueiro o usuário projeta ossos para fora de suas palmas, joelhos, cotovelos, e escapulas para um poderoso ataque frontal.',
                min_level: 0,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Tsubaki no Mai',
                description: 'Com a Dança da Camélia o usuário ataca o oponente com poderosos golpes de uma espada criada com os ossos do braço e do radio.',
                min_level: 9,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Karamatsu no Mai',
                description: 'Durante a Dança da Árvore o usuário projeta todos os ossos de sua caixa toráxica para fora de seu corpo, criando uma espécie de ataque e defesa simultanea.',
                min_level: 20,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Tessenka no Mai',
                description: 'Ao utilizar a Dança do Clematis o usuário retira sua coluna inteleira e prende seu adversário, após isso transforma os ossos de seu antebraço em uma grande broca para um poderoso ataque.',
                min_level: 35,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Sawarabi no Mai',
                description: 'A Dança da Samambaia ataca o inimigo craindo uma grande floresta de lanças de osso, possibilitando também que o usuário se locomova através das lanças.',
                min_level: 44,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            })
        ],

        yuki: [
            new Skill({
                name: 'Sankyomu Hyoushou',
                description: 'Ao ativar a técnica da Cúpula de Gelo o usuário rapidamente cria uma resistente redoma degelo a sua volta, se protegendo assim de diversos ataques.',
                min_level: 0,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Hyouton Sensatsu Suishou',
                description: 'Ao utilizar as Mil Agulhas Voadoras de Água o usuário arremessa uma quantidade de água ao ar  para se transformar em mil agulhas que voam em direção ao oponente. ',
                min_level: 9,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Makyou Hyoushou',
                description: 'O usuario cria Espelhos Demoníacos de Gelo ao redor de seu oponente, o usuário se esconde dentro deles e se move entre eles quase instantaneamente. podendo atacar seu inimigo de todas as direções.',
                min_level: 20,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Makyou Hyo Satsu',
                description: 'Com o Assassinato dos Espelhos Demoníacos de Gelo o usuário prende o oponente em uma redoma de espelhos e após isso os explode, danificando o inimigo dentro da redoma.',
                min_level: 35,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Thaksie Hyoushou',
                description: 'Com a técnica Prisão de Gelo Perfurada o usuário utiliza a umidade do ar para criar enormes estalagmites de gelo, perfurando tudo ao seu redor devido a incrivel velocidade em que se formam.',
                min_level: 44,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            })
        ],

        uchiha: [
            new Skill({
                name: 'Sharingan',
                description: 'Com o Olho Copiador Giratório o usuário ganha a habilidade de ver o fluxo do chakra de seu inimigo, dando a ele a capacidade de prever os movimentos de seu oponente.',
                min_level: 0,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Kyouten Chiten',
                description: 'Com a ativação da Mudança do Espelho do Céu e da Terra o usuário é capaz de perceber ilusões que estão sendo utilizado, assim se tornando imune a golpes de genjutsu.',
                min_level: 9,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Tsukuyomi',
                description: 'Ao utilizar a técnica Deus da Lua o usuário cria uma dimensão fictícia onde tudo é determinado por ele, dentro desta dimensão o usuário pode torturar seu adversario até a exaustão mental.',
                min_level: 20,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Amaterasu',
                description: 'Utilizando a técnica Deus do Sol o usuário é capaz de invocar as chamas negras no ponto em que focalizar sua visão. As chamas negras consomem tudo, até mesmo outras chamas.',
                min_level: 35,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Susano\'o',
                description: 'Utilizando esta técnica o usuário invoca o Deus do Oceano, materializando seu chakra na forma de uma criatura divina com uma capacidade incrível de ataque e defesa. Como consequencia esgota as forças do usuário.',
                min_level: 44,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            })
        ],

        futagokura: [
            new Skill({
                name: 'Souseiji',
                description: 'A técnica dos Gêmos Siameses é ativada pelo Soma no Ko, permitindo que o usuário divida seu corpo com um aliado, amprimorando suas habilidades.',
                min_level: 0,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Taren Ken',
                description: 'A Metralhadora dos Braços utiliza a Soma no Ko permitindo que os usuários que compartilham o mesmo corpo alternem os socos de forma super veloz.',
                min_level: 9,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Taren Kyaku',
                description: 'A Metralhadora dos Pés utiliza a Soma no Ko permitindo que os usuários que compartilham o mesmo corpo alternem os chutes de forma super veloz.',
                min_level: 20,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Bunkatsu',
                description: 'A técnica de Separação Corporal permite que os usuários do Soma no Ko batalhem separadamente.',
                min_level: 35,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Kisei Kikai',
                description: 'Através do Fantasma Parasita Destrutivo  o usuário se funde com o corpo do inimigo, podendo danificar os vórtices de chakra deste.',
                min_level: 44,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            })
        ],

        hoozuki: [
            new Skill({
                name: 'Suika',
                description: 'Com a técnica da Torrente o usuário pode transformar completamente seu corpo em água pura, podendo assim diminuir o dano que seria recebido de ataques inimigos.',
                min_level: 0,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Gousuiwan',
                description: 'Ao se transformar completamente em água o usuário pode utilizar a técnica do Forte Braço de Água para aumentar o tamanho e fortalecer seus braços.',
                min_level: 9,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Gousuiashi',
                description: 'Similar ao Gousuiwan o usuário pode utilizar a técnica da Forte Perna de Água para aumentar o tamanho e fortalecer suas pernas.',
                min_level: 20,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Kibaku Karada',
                description: 'Estando na forma aquatica o usuário pode utilizar a técnica da Explosão de Corpo, fazendo com que a agua que forma seu corpo se expanda extremamente rapido, criando assim uma poderosa explosão.',
                min_level: 35,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Mizuakuma',
                description: 'Com a técnica do Demonio Aquático o usuário se tranforma completamente em água e a manipula para obter habilidades fisicas sem comparações.',
                min_level: 44,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            })
        ],

        hoshigaki: [
            new Skill({
                name: 'Suiton: Suikoudan',
                description: 'Com esta técnica o usuário cria um grande Projétil Aquático do Tubarão que voa na direção de seu oponente.',
                min_level: 0,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Suiton: Daikoudan',
                description: 'O usuário cria um poderoso Míssil Gigante do Tubarão de Água para atacar seu oponente.',
                min_level: 9,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Suiton: Suishouha',
                description: 'Com a Onda Chocante de Água o usuário cria uma enorme quantidade de água para submergir e afogar seu oponente.',
                min_level: 20,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Suiton: Goshokuzame',
                description: 'O usuário cria uma enorme quantidade de água para submergir seus oponentes, após isso aparecem Cinco Tubarões Comedores de Gente na cupula aquatica para atacar seus inimigos.',
                min_level: 35,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Suiton: Dai Baku Suisouha',
                description: 'O usuário cria uma colossal quantidade de água, formando a Grande onda de Colisão da Água Explosiva para esmagar, prender e afogar seu oponente com tremenda força.',
                min_level: 44,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            })
        ],

        bakudankura: [
            new Skill({
                name: 'Shii Wan: Kikkai ',
                description: 'Através do C1: Inseto Destrutivo, o usuário lança pequenos insetos explosivos de argila em direção ao inimigo.',
                min_level: 0,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Shii Tsuu: Shinryuu',
                description: 'Através do C2: Dragão, o usuário cria um grande dragão de argila que arremessa bombas, também de argila, contra o inimigo.',
                min_level: 9,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Shii Surii: Nendoshin',
                description: 'Utilizando a C3: Criatura de Argila, o usuário enquanto sobrevoa uma área, cria um enorme boneco de argila que é lançado no solo contra o inimigo.',
                min_level: 20,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Shii Fou: Karura',
                description: 'Utilizando a C4: Garuda, o usuário cria uma enorme explosão. Quando a fumaça da explosão é inalada, micro-bombas causam dano nas células do inimigo.',
                min_level: 35,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Shii Ou: Kyuukyoku Geijutsu',
                description: 'Utilizando a C0: Arte Suprema, o usuário mistura intelernamente sua argila explosiva com seu chakra, criando uma substância negra com enorme poder destrutívo.',
                min_level: 44,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            })
        ],

        kumokura: [
            new Skill({
                name: 'Kumonendo',
                description: 'Com o Vômito Pegajoso da Aranha o usuário é capaz de criar uma corda de teia pegajosa e agarrar seu oponente.',
                min_level: 0,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Kumosouka',
                description: 'Com a técnica Flor de Teia de Aranha o usuário cria e arremessa uma teia mais resistente, capaz de prender seu oponente.',
                min_level: 9,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Kumosoukai',
                description: 'Com a Abertura da Teia de Aranha o usuário cria e arremessa uma bola de teia contra seu adversario, a bola explode no meio grudando fortemente em tudo que encostar.',
                min_level: 20,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Kumonenkin',
                description: 'Durante o Ouro Pegajoso da Aranha o usuário vomita uma substancia que fica resistente como aço, sendo assim capaz de criar armas e armaduras.',
                min_level: 35,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Kumosenkyuu Suzaku',
                description: 'O usuário utiliza sua teia dourada para criar o poderoso Arco da Aranha - Divisão Horripilante, capaz de danificar o oponente a uma grande distancia.',
                min_level: 44,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            })
        ],

        juinkura: [

        ],

        no_clan: [
            new Skill({
                name: 'Dooki',
                description: 'O usuário utilizando a técnica da Motivação aprimora sua capacidades de aprendizado e percepção de batalha.',
                min_level: 1,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Noodo',
                description: 'Ao utilizar a técnica de Concentração o usuário aumenta suas habilidades evasivas e sua precisão fica mais aguçada.',
                min_level: 9,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Kenshin',
                description: 'Utilizando a técnica Dedicação, o usuário é capaz de aumentar alguns de seus atributos de resistência, tornando-o um vigoroso lutador.',
                min_level: 20,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Nintelai-ryoku',
                description: 'Com a técnica Perseverança ativa, o usúario duplica seus atributos de ataque e defesa quando sua vida está próxima do fim.',
                min_level: 35,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            }),

            new Skill({
                name: 'Kokufuku',
                description: 'Com o resultado de todo o seu trabalho e dedicação, o usuário ao utilizar a técnica Superação aumenta consideravelmente suas habilidades de combate.',
                min_level: 44,
                precision: 0,
                critical: 0,
                strength: 0,
                type: '',
                activation: 0,
                duration: 0,
                fatigue: 0,
                bonus: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                cost: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 },
                damage: { hp : 0, nin: 0, gen: 0, tai: 0, agi: 0, con: 0, str: 0, def: 0, cog: 0, intel: 0, chk: 0, stm: 0 }
            })
        ]
    };
}

var clans = seed_clan();
var skills = seed_skill();

for (var key in skills) {
    for (var i = 0; i < skills[key].length; i++) {
        skills[key][i].save(function(err) {
            if (err) {
                console.log('-Skill- ' + key + ' ---');
                console.log("ERROR: " + err);
            }
        });
    }
}

for (var key in clans) {
    var clan_skills = skills.basic.concat(skills[key]);

    for (var i = 0; i < clan_skills.length; i++) {
        clans[key].skills.push(clan_skills[i]._id);
    }

    clans[key].save(function(err) {
        if (err) {
            console.log('-Clan- ' + key + ' ---');
            console.log('ERROR: ' + err);
        }
    });
}
