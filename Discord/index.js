//  $$$$$$$                       /$$                         /$$                 /$$$$$$$              /$$    
// | $$__  $$                     | $$                        | $$                | $$__  $$            | $$    
// | $$  \ $$ /$$$$$$   /$$$$$$  /$$$$$$   /$$   /$$  /$$$$$$ | $$$$$$$   /$$$$$$ | $$  \ $$  /$$$$$$  /$$$$$$  
// | $$$$$$$//$$__  $$ /$$__  $$|_  $$_/  | $$  | $$ /$$__  $$| $$__  $$ |____  $$| $$$$$$$  /$$__  $$|_  $$_/  
// | $$____/| $$$$$$$$| $$  \__/  | $$    | $$  | $$| $$  \__/| $$  \ $$  /$$$$$$$| $$__  $$| $$  \ $$  | $$    
// | $$     | $$_____/| $$        | $$ /$$| $$  | $$| $$      | $$  | $$ /$$__  $$| $$  \ $$| $$  | $$  | $$ /$$
// | $$     |  $$$$$$$| $$        |  $$$$/|  $$$$$$/| $$      | $$$$$$$/|  $$$$$$$| $$$$$$$/|  $$$$$$/  |  $$$$/
// |__/      \_______/|__/         \___/   \______/ |__/      |_______/  \_______/|_______/  \______/    \___/  
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// AUTHOR : MrTechX & Anabel GR | TecnoProjects Srcurity
// PROJECT : PerturbaBot (Discord Version)
// VERSION : 1.0.0
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

//----------------[ For Replit ]----------------
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));
// app.get('/', function(request, response) {
// 	response.sendFile(__dirname + '/views/index.html');
// });
// app.listen(3000, () => console.log(`v1.0.0`));

//----------------[Codigo fuente]---------------
//variables necesarias
const Discord = require("discord.js");
const BombSweeper = require("bombsweeper.js");
const ise = require("image-search-engine");
const client = new Discord.Client();
const config = require("./config/config.json");
const developer = require("./config/developer.json");
const vip = require("./config/vip.json");

// Developers
var techx = developer.techx;
var misslog4j = developer.misslog4j;
var niss = developer.niss;
var anabel = developer.anabel;

// VIP users
var tania = vip.tania;
var aitor = vip.aitor;
var naye = vip.naye;
var seitan = vip.seitan;

// Configuración
let prefix = config.prefix;
let versions = config.versions;
let logs = config.logs;

let color = 0xff0000;

//variables utiles
let fecha1 = "13/Abril/2022";
let origen = "13/Abril/2022";
let version = "v1.0.0";
let comandos_funcionando = "29 Comandos funcionan";
let skull = "💀";

//Presencia del bot
client.on('ready', () => {
    console.log('Sistema iniciado');
    client.user.setPresence({
        status: "dnd",
        activity: {
            name: "TechX | PerturbaBot",
            type: "WATCHING"
        }
    });
});

client.on('ready', () => {
    console.log("Hola, Soy PerturbaBot")
});

//inicio de bloque de comandos
client.on('message', (message) => {
//Codigo anti bules infinitos
    if (!message.content.startsWith(prefix)) return;
    if(message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    let texto = args.join(" ");
// ------------------ [No tocar ⬆⬆⬆]-----------------------------

//Comando de menu de comandos
if(message.content.startsWith(prefix + "menu")){
    message.channel.send({embed: {
        color: color,
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
        },
        Title: "Mis Comandos",
        description: "Estos son mis comandos y su descripcion actualmente",
        fields: [{
        // 1
        name: "menu",
        value: "Muestra el menu de comandos que estas viendo ahora mismo",
    },
        // 2
    {
        name: "juegos",
        value: "Para ver el menú de juegos del bot"
    },
        // 3
    {
        name: "hello",
        value: "Comando de pruebas del bot",
    },
        // 4
    {
        name: "invite",
        value: "Comando de invitacion a tu servidor"
    },
        // 5
    {
        name: "version",
        value: "Ver la version utilizada del PerturbaBot"
    },
        // 6
    {
        name: "bot_status",
        value: "Estado de los comandos del bot"
    },
        // 7
    {
        name: "server_status",
        value: "Estado actual de tu servidor de discord"
    },
        // 8
    {
        name: "developer",
        value: "Informacion de mi programador"
    },
        // 9
    {
        name: "creditos",
        value: "Para ver los creditos del Bot (uso publico)"
    },
        // 10
    {
        name: "grupos",
        value: "Para conseguir los enlaces a los otros grupos oficiales UnidosPorTi"
    },
        // 11
    {
        name: "banner",
        value: "Para mostrar la foto de perfil del bot"
    }
    ],
    timestamp: new Date(),
    footer: {
        icon_url: client.user.avatarURL(),
        text: "Comandos | PertrubaBot"
        }
    }
    });
}

if(message.content.startsWith(prefix + "juegos")){
    message.channel.send({embed: {
        color: color,
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
        },
        Title: "Mis Comandos de juego",
        description: "Estos son mis comandos de juegos y su descripcion actualmente",
        fields: [{
        // 12
        name: "impostor",
        value: "Puedes jugar con tus amigos para ver quien es el impostor, usando comando **p!impostor <etiqueta al sospechos@>**",
    },
        // 13
    {
        name: "phcomment",
        value: "Escribe un texto que simulara ser un comentario de *PornHub* con el comando **p!phcomment <el texto de tu comentario>**",
    },
        // 14
    {
        name: "buscaminas",
        value: "juega el famoso buscaminas con el comando **p!buscaminas**"
    },
        // 15
    {
        name: "8ball",
        value: "Hazme una pregunta que te pueda responder con si, no y tal vez con el comando **p!8ball <tu pregunta>**"
    },
        // 16
    {
        name: "pescar",
        value: "pesca un pez del repertorio de manera aleatoria con el comando **p!pescar**"
    },
        // 17
    {
        name: "chat_muerto",
        value: "Envia una imagen random para indicar que el chat esta muerto"
    },
        // 18
    {
        name: "volado",
        value: "Lanza una moneda al aire con las caras de Dross y El Troll"
    }
    ],
    timestamp: new Date(),
    footer: {
        icon_url: client.user.avatarURL(),
        text: "Juegos | PerturbaBot"
        }
    }
    });
}

if(message.content.startsWith(prefix + "vip")){
    message.channel.send({embed: {
        color: color,
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
        },
        Title: "Mis Comandos para VIP's",
        description: "Estos son mis comandospara usuarios VIP y su descripcion actualmente",
        fields: [{
        // 19
        name: "SoyVip",
        value: "Inicio de un VIP"
    },
        // 20
    {
        name: "admins",
        value: "Llamar a los admins para reunion o evento importante"
    },
        // 21
    {
        name: "wsp",
        value: "Para mostrar el enlace para unirse al grupo de WhatsApp"
    },
        // 22
    {
        name: "ping",
        value:"Para mencionar a todo el servidor"
    },
        // 23
    {
        name: "reglas",
        value: "Para mostrar las reglas del grupo"
    },
        // 24
    {
        name: "kill",
        value: "Para notificar a los usuarios que habra eliminacion masiva"
    }
    ],
    timestamp: new Date(),
    footer: {
        icon_url: client.user.avatarURL(),
        text: "VIP | PerturbaBot"
        }
    }
    });
}

if(message.content.startsWith(prefix + "dev")){
    message.channel.send({embed: {
        color: color,
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
        },
        Title: "Mis Comandos para desarrolladores",
        description: "Estos son mis comandos de desarrollador y su descripcion actualmente",
        fields: [{
            // 25
        name: "SoyDev",
        value: "Para iniciar a ser un developer con autorización"
    },
        // 26
    {
        name: "say",
        value: "Comando de argumentos"
    },
        // 27
    {
        name: "esay",
        value: "Comando de argumentos en embed"
    },
        // 28
    {
        name: "new_version",
        value: "Notificacion de nueva actualización al servidor de TecnoProjects en discord"
    },
        // 29
    {
        name: "logs",
        value: "Publicar los logs del bot en el servidor de UnidosPorTi"
    }
    ],
    timestamp: new Date(),
    footer: {
        icon_url: client.user.avatarURL(),
        text: "Developer | PerturbaBot"
        }
    }
    });
}

// Comandos Publicos
if(message.content.startsWith(prefix + 'hello')) {
    message.channel.send('Hola! ' + message.author.username + " Soy el PerturbaBot" + skull + " Si eres usuario VIP puedes utilizar el comando p!SoyVip en un canal privado o si eres usuario normal utiliza p!menu en el canal de comandos" + skull);
}

if(message.content.startsWith(prefix + "invite")){
    message.channel.send({embed: {
        color: color,
        description: "Invitame a tu servidor dando [click aqui](https://bit.ly/PerturbaBot-Invite) recuerda que cualquier duda o sugerencia la puedes hacer en mi [servidor de soporte](https://discord.gg/R3bgKtMsSH)"
    }
    });
}

if(message.content.startsWith(prefix + "version")){
    message.channel.send({embed: {
        color: color,
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
        },
        Title: "Version del PerturbaBot",
        description: "Mi version de codigo de bot",
        fields: [{
        name: "Version",
        value: "Actualmente estoy en mi version " + version + " que fue lanzada el " + fecha1 + " por TecnoProjects Security | MrTechX",
    },
    {
        name: "Codigo Fuente",
        value: "Puedes ver todas las versiones de mi codigo de discord que mi desarrollador amablemente dejo publico si das [CLICK AQUI](https://github.com/PerturbaBot/PerturbaBot-Code/blob/main/Discord) o puedes ver el [Codigo fuente completo](https://github.com/PerturbaBot/PerturbaBot-Code)",
    }
    ],
    timestamp: new Date(),
    footer: {
        icon_url: client.user.avatarURL(),
        text: "PerturbaBot | Version"
        }
    }
    });
}

if(message.content.startsWith(prefix + "bot_status")) {
    message.channel.send({embed: {
        color: color,
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
        },
        title: "PerturbaBot Status",
        url: "https://github.com/PerturbaBot",
        description: "Estado del Bot",
        fields: [{
            name: "El estado actual de PerturbaBot",
            value: "MrAssistant Funciona correctamente desde el " + origen,
        },
        {
            name: "Numero de comandos funcionando",
            value: comandos_funcionando,
        },
        {
            name: "Comandos en mantenimiento",
            value: "0 Comandos en mantenimiento",
        },
        {
            name: "Comandos dañados",
            value: "0 Comandos dañados",
        },
        {
            name: "Comandos en creación",
            value: "5 Comandos en creación",
        },
        {
            name: "Version de PerturbaBot",
            value: fecha1
        },
        {
            name: "Programado con:",
            value: "JavaScript, Node.js, Discord.js, json, Telegraf.js, Bombsweeper.js"
        },
        {
            name: "Autor del PerturbaBot",
            value: "MrTechX | TecnoProjects Security"
        },
    ],
    timestamp: new Date(),
    footer: {
        icon_url: client.user.avatarURL(),
        text: "PerturbaBot | TecnoProjects"
    }
    }
    });
}

if(message.content.startsWith(prefix + "server_status")) {
    var server = message.guild;
    const embed = new Discord.MessageEmbed()
        .setThumbnail(server.iconURL())
        .setAuthor(server.name, server.iconURL())
        .addField('ID', server.id, true)
        .addField('Region', server.region, true)
        .addField('Creado el', server.joinedAt.toDateString(), true)
        .addField('Dueño del Servidor', server.owner.user.tag, true)
        .addField('Miembros', server.memberCount, true)
        .setColor(color)
    message.channel.send(embed);
}

if(message.content.startsWith(prefix + "developer")){
    message.channel.send({embed: {
        color: color,
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
        },
        title: "Mi codigo fuente",
        url: "https://github.com/PerturbaBot",
        description: "Mi programador dejo mi codigo fuente libre para que veas como estoy programado y puedas crear tambien tu propio bot, de hecho mi codigo es bastante simple, si quieres una explicacion mas a fondo de como estoy prorgramado, mandale mensaje privado, su usuario de discord es (MrTechX#6832) te dejo tambien unos cuantos datos mas aqui abajo, tiene otros codigos interesantes en Github",
        fields: [{
            name: "Github",
            value: "Mi programador tiene codigos que te pueden interesar en [Github](http://bit.ly/github_techX)"
        },
        {
            name: "Twitter",
            value: "En el [Twitter](http://twitter.com/Mr__TechX) de mi programador puedes encontras cosas relacionadas a hardware, software informatica, programación, hacking, criptografia, criptomonedas, etc."
        },
        {
            name: "Instagram",
            value: "El [Instagram](https://instagram.com/mr.tech.x) de mi programador esta relacionado a lo mismo que a lo mismo que su Twitter pero con un toque mas relajado, puedes ir a seguirlo :)"
        },
        {
            name: "Discord",
            value: "Unete a el servidor de [Discord](https://discord.gg/R3bgKtMsSH) de mi programador, ahi puedes dar sugerencias para mejorarme o comandos nuevos para un mejor funcionamiento, de paso puedes convivir con mas programadores y mas gente"
        },
        {
            name: "TecnoProjects",
            value: "[TecnoProjects](https://github.com/TecnoProjects) Es una micro empreza de informatica que surge en Github, y se movera al resto del internet, esta basada en la informatica, desarrollo [web,](https://web.tecnoprojects.repl.co) programación, hacking etico, edicion de video, imagen y audio."
        },
        {
            name: "Mi programador",
            value: "Mi programador tiene como nombre publico en la mayoria de los lados MrTechX, se dedica al backend, forntend, inteligencia artificial, desarrollo de bots de discord, desarrollo de escritorio, edicion de audio, video e imagen, redes, pentestinfg, administracion de sistemas, etc. [click aqui](https://web.ulisescamacho.repl.co)"
        }
    ],
    timestamp: new Date(),
    footer: {
        icon_url: client.user.avatarURL(),
        text: "MrTechX | PerturbaBot"
    }
    }
    });
}

if(message.content.startsWith(prefix + "creditos")){
    message.channel.send({embed: {
        color: color,
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
        },
        Title: "CREDITOS DEL BOT",
        description: "Las siguientes personas trabajaron en el codigo y pruebas del Bot",
        fields: [{
        name: "MrTechX",
        value: "MrTechX#6832 | [Twitter](https://twitter.com/Mr__TechX) | [Instagram](https://instagram.com/mr.tech.x) | [GitHub](https://github.com/Mr-TechX) | [Reddit](https://reddit.com/u/Mr_TechX)",
    },
    {
        name: "MissLog4J",
        value: "MisLog4J#1191 | *Por seguridad no mostró mas redes*",
    },
    {
        name: "Anabel GR",
        value: "  | [Instagram](https://instagram.com/anabelguarniz)"
    }
    ],
    timestamp: new Date(),
    footer: {
        icon_url: client.user.avatarURL(),
        text: "PerturbaBot | Creditos"
        }
    }
    });
}

if(message.content.startsWith(prefix + "grupos")){
    message.channel.send({embed: {
        color: color,
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
        },
        Title: "Nuestros Grupos",
        description: "Puedes unirte a nuestros grupos que son los siguientes",
        fields: [{
        name: "Facebook",
        value: "Puedes unirte a nuestro [Grupo Principal](https://bit.ly/DrossGrupoPrincipal) y a nuestro grupo de [Respaldo](https://bit.ly/DrossGrupoSecundario)",
    },
    {
        name: "Telegram",
        value: "Unete a nuestro chat en telegram dando [Clik Aqui](https://t.me/+CV8YxR6V0no0ODNh)",
    },
    {
        name: "Discord",
        value: "Unete a nuestro [servidor de discord](https://discord.gg/GuN4DEMdVn) si no estas en el, en caso de que ejecutes este comando fuera del servidor"
    }
    ],
    timestamp: new Date(),
    footer: {
        icon_url: client.user.avatarURL(),
        text: "PerturbaBot | Grupos"
        }
    }
    });
}

if(message.content.startsWith(prefix + "banner")) {
    message.delete()
    const embedDatos = new Discord.MessageEmbed() 
        .setTitle("Mi foto de perfil")
        .setAuthor(client.user.username, client.user.avatarURL())
        .setColor(color)
        .setDescription("Mira, este soy yo")
        .setFooter("PerturbaBot", client.user.avatarURL())
        .setImage(client.user.avatarURL())
        .setTimestamp()
    
    message.channel.send({ embed: embedDatos })
}

client.on("message", async (message) => {
    if(!message.content.startsWith(prefix + "buscar")) return;
    let args = message.content.split(" ").slice(1)
    if(args.length < 1) return;
    
    message.channel.send(await ise.find(args.join(" ")))
});

// Comandos de Juegos
if(message.content.startsWith(prefix + "impostor")) {
    const mencionado = message.mentions.members.first()    
    let random = [
    "No era el impostor",
    "Era el impostor"
    ]

    if(!mencionado)    
     return message.channel.send(`. 　　　。　　　　•　 　ﾟ　　。 　　.
    
    　　　.　　　 　　.　　　　　。　　 。　. 　
    
    .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•
    
    　　ﾟ　　 ${message.author.username} ${random[Math.floor(Math.random() * random.length)]} 　 。　.
    
    　　'　　　 ${Math.floor(Math.random() * 3) + 1} Impostores restantes 　 　　。
    
    　　ﾟ　　　.　　　. ,　　　　.　 .`) 
    message.channel.send(`. 　　　。　　　　•　 　ﾟ　　。 　　.
    
    　　　.　　　 　　.　　　　　。　　 。　. 　
    
    .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•
    
    　　ﾟ　　 ${mencionado.user.username} ${random[Math.floor(Math.random() * random.length)]} 　 。　.
    
    　　'　　　 ${Math.floor(Math.random() * 3) + 1} Impostores restantes 　 　　。
    
    　　ﾟ　　　.　　　. ,　　　　.　 .`)
}

if (message.content.startsWith(prefix + "phcomment")) {
    message.delete()
    let txt = args.join('%20');
    if (!txt) return message.channel.send("EROR | Debes insertar un mensaje para tu comentario, ejemplo: ```p!phcomment Holaaa```")
    let autor = message.author;    
    let attachment = new Discord.MessageAttachment(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${message.author.displayAvatarURL()}&text=${txt}&username=${autor.username}&raw=1`,'logo.png')    
    message.channel.send(attachment)
}

if (message.content.startsWith(prefix + "buscaminas")) {
    const emojis = {
        0: "||:zero:||",
        1: "||:one:||",
        2: "||:two:||",
        3: "||:three:||",
        4: "||:four:||",
        5: "||:five:||",
        6: "||:six:||",
        7: "||:seven:||",
        8: "||:eight:||",
        '*': "||:bomb:||"
    };
    let filas = 10;
    let cols = 10;
    const bombsweeper = new BombSweeper(filas, cols);
    let bombas = 20;
    bombsweeper.PlaceBombs(bombas);
    let tablero = bombsweeper.board;
    for (let j = 0; j<10; j++){
        for (let i = 0; i<10; i++){
         tablero[i][j] = emojis[tablero[i][j]];
        }
       }
    message.channel.send(tablero);
}

if(message.content.startsWith(prefix + "8ball")) {
    if (!texto) return message.channel.send("Hazme una pregunta que se pueda responder con **Si/No** ejemplo: ```p!8ball algun dia sere moderador?```")
    let respuesta = ["Si", "No", "Tal vez", "Obvio", "Yo digo que si", "Yo digo que no", "Probablemente"]
    var random = respuesta[Math.floor(Math.random() * respuesta.length)]
    message.channel.send({embed: {
        color: color,
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
        },
        title: "8-Ball",
        fields: [{
            name: "Tu Pregunta",
            value: `${args.join(" ")}`,
          },
          {
            name: "Mi respuesta",
            value: `${random}`,
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL(),
          text: "PerturbaBot | 8Ball"
        }
      }
});
}

if(message.content.startsWith(prefix + "pescar")) {
    let respuesta = ['Felicitaciones, **' + message.author.username + '** pescaste un: :tropical_fish:', 'Felicitaciones, **' + message.author.username + '** pescaste un: :fish:', 'Felicitaciones, **' + message.author.username + '** pescaste un: :blowfish:']
        var random = respuesta[Math.floor(Math.random() * respuesta.length)]
        message.channel.send({embed: {
            color: color,
            description: `${random}`,
        }
        });
}

if(message.content.startsWith(prefix + "chat_muerto")) {
    message.delete()
    let respuesta = ['https://github.com/PerturbaBot/PerturbaBot-Code/blob/main/img/chatm1.jpg?raw=true', 'https://github.com/PerturbaBot/PerturbaBot-Code/blob/main/img/chatm2.png?raw=true']
    var random = respuesta[Math.floor(Math.random() * respuesta.length)]
    const embedDatos = new Discord.MessageEmbed()
        .setTitle("PerturbaBot")
        .setAuthor(client.user.username, client.user.avatarURL())
        .setColor(color)
        .setDescription("Efectivamente, el chat esta mas que muerto")
        .setFooter("PerturbaBot", client.user.avatarURL())
        .setImage(`${random}`)
        .setTimestamp()
    
    message.channel.send({ embed: embedDatos })
}

if(message.content.startsWith(prefix + "volado")) {
    message.delete()
    let respuesta = ['https://github.com/PerturbaBot/PerturbaBot-Code/blob/main/img/moneda-cara.png?raw=true', 'https://github.com/PerturbaBot/PerturbaBot-Code/blob/main/img/moneda-troll.png?raw=true']
    var random = respuesta[Math.floor(Math.random() * respuesta.length)]
    const embedDatos = new Discord.MessageEmbed()
        .setTitle("PerturbaBot")
        .setAuthor(client.user.username, client.user.avatarURL())
        .setColor(color)
        .setFooter("PerturbaBot", client.user.avatarURL())
        .setImage(`${random}`)
        .setTimestamp()
    
    message.channel.send({ embed: embedDatos })
}

// Comandos VIP
if(message.content.startsWith(prefix + "SoyVip")) {
    let id = message.author.id;
    let noVip = "Tu no eres VIP, no te puedo dar acceso a este comando";
    let noVIPconsole = "El usuario " + message.author.username + " intento hacerse pasar por un VIP " + "(" + message.author.id + ")";
    if(id === tania || id === seitan || id === naye || id === aitor || id === niss || id === misslog4j || id === anabel || id === techx) {
        message.delete();
        console.log(message.author.username + " Ahora es un ususario VIP");
        message.channel.send({embed: {
            color: color,
            description: "Hola! " + message.author.username + " " + skull + " Eres un usuario VIP, asi que tienes acceso a la mayoria de comandos, puedes mostrar informacion confidencial del grupo asi que ten cuidado \n\nUsa p!vip para ver los comandos VIP",
        }
        });
    }
    else {
        message.delete();
        console.log(noVIPconsole);
        message.channel.send({embed: {
            color: color,
            description: noVip,
        }
        });
    }
}

if(message.content.startsWith(prefix + "admins")) {
    let id = message.author.id;
    let noVip = "Tu no eres VIP, no puedes mencionar a los admins";
    let noVIPconsole = "El usuario " + message.author.username + " intento hacerse pasar por un VIP " + "(" + message.author.id + ")";
    if(id === tania || id === seitan || id === naye || id === aitor || id === niss || id === misslog4j || id === anabel || id === techx) {
        message.delete();
        console.log(message.author.username + " Menciono a el Staff");
        message.channel.send({embed: {
            color: color,
            description: "Hola! " + message.author.username + " " + skull + " Etiquetare a los administradores y moderadores a continuacion \n\n @💫TANIA ESTRELLA FUGAZ @🖥️SOPORTE @😎Administración @👀MODERADOR ",
        }
        });
    }
    else {
        message.delete();
        console.log(noVIPconsole);
        message.channel.send({embed: {
            color: color,
            description: noVip,
        }
        });
    }
}

if(message.content.startsWith(prefix + "wsp")) {
    let id = message.author.id;
    let noVip = "Tu no eres VIP, por seguridad no te puedo dar el enlace";
    let noVIPconsole = "El usuario " + message.author.username + " intento hacerse pasar por un VIP " + "(" + message.author.id + ")";
    if(id === tania || id === seitan || id === naye || id === aitor || id === niss || id === misslog4j || id === anabel || id === techx) {
        message.delete();
        console.log(message.author.username + " Tiene ahora el link a whatsapp");
        message.channel.send({embed: {
            color: color,
            description: "Hola! " + message.author.username + " " + skull + " Este es el link para unirte al grupo de whatsApp de **UnidosPorTi** \n\n• https://chat.whatsapp.com/Gpsrj3ukXrVALLyA9BOxS8",
        }
        });
    }
    else {
        message.delete();
        console.log(noVIPconsole);
        message.channel.send({embed: {
            color: color,
            description: noVip,
        }
        });
    }
}

if(message.content.startsWith(prefix + "ping")) {
    let id = message.author.id;
    let noVip = "Tu no eres VIP, por seguridad no puedes mecionar a todo el servidor";
    let noVIPconsole = "El usuario " + message.author.username + " intento hacerse pasar por un VIP " + "(" + message.author.id + ")";
    if(id === tania || id === seitan || id === naye || id === aitor || id === niss || id === misslog4j || id === anabel || id === techx) {
        message.delete();
        console.log(message.author.username + " Hizo ping a todo el server");
        message.channel.send({embed: {
            color: color,
            description: "Hey @everyone un VIP tiene un mensaje para todos ustedes.",
        }
        });
    }
    else {
        message.delete();
        console.log(noVIPconsole);
        message.channel.send({embed: {
            color: color,
            description: noVip,
        }
        });
    }
}

if(message.content.startsWith(prefix + "reglas")) {
    let id = message.author.id;
    let noVip = "Para evitar el spam de comandos largos, solo los VIP pueden ejecutar este comando";
    let noVIPconsole = "El usuario " + message.author.username + " intento hacerse pasar por un VIP " + "(" + message.author.id + ")";
    if(id === tania || id === seitan || id === naye || id === aitor || id === niss || id === misslog4j || id === anabel || id === techx) {
        message.delete();
        console.log(message.author.username + " Mostro las reglas al server");
        message.channel.send({embed: {
            color: color,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL()
            },
            Title: "Las reglas basicas del servidor",
            description: "Estas son las reglas basicas de convivencia en este servidor, no las rompas o podrias meterte en problemas",
            fields: [{
            name: "Presentación",
            value: "● Presentarse con foto, nombre, país y edad en el canal correspondiente"
        },
        {
            name: "Contenido NSFW",
            value: "● No subir pornografia en ningun canal"
        },
        {
            name: "Faltas de respeto",
            value: "● No faltar al respeto a nadie del grupo en general"
        },
        {
            name: "Discriminación",
            value: "● No discriminación, la discriminacion sera castigada con la expulsión definitiva"
        },
        {
            name: "SPAM",
            value: "● Prohibido el spam de cualquier tipo"
        },
        {
            name: "Peleas",
            value: "● En caso de una pelea entre los integrantes del grupo, si no entienden se eliminarán."
        },
        {
            name: "Tiempo de presentación",
            value: "● Si no se presentan dentro de los 10 min serán eliminados."
        },
        {
            name: "Contenido religioso",
            value: "● Prohibido subir imágenes de cualquier religión, para evitar las peleas."
        },
        {
            name: "Gore",
            value: "● Prohibido el gore (contenido violento y explicito)."
        },
        {
            name: "NOTA:",
            value: "Si rompes alguna de las reglas anteriores seras sancionado segun el impacto de la regla."
        }
        ],
        timestamp: new Date(),
        footer: {
            icon_url: client.user.avatarURL(),
            text: "Reglas | PerturbaBot"
            }
        }
        });
    }
    else {
        message.delete();
        console.log(noVIPconsole);
        message.channel.send({embed: {
            color: color,
            description: noVip,
        }
        });
    }
}

if(message.content.startsWith(prefix + "kill")) {
    let id = message.author.id;
    let noVip = "Tu no eres VIP, no puedes notificar sobre eliminaciones";
    let noVIPconsole = "El usuario " + message.author.username + " intento hacerse pasar por un VIP " + "(" + message.author.id + ")";
    if(id === tania || id === seitan || id === naye || id === aitor || id === niss || id === misslog4j || id === anabel || id === techx) {
        message.delete();
        console.log(message.author.username + " Inicio una eliminacion masiva");
        message.channel.send({embed: {
            color: color,
            description: "Hey alto todos, A continuacion comenzará una eliminación masiva de usuarios del servidor por distintos motivos, tranquilo si no haz hecho nada malo y eres activo en el servidor no te pasará nada" + skull,
        }
        });
    }
    else {
        message.delete();
        console.log(noVIPconsole);
        message.channel.send({embed: {
            color: color,
            description: noVip,
        }
        });
    }
}

// Comandos Developer
if(message.content.startsWith(prefix + "SoyDev")) {
    let id = message.author.id;
    let noDev = "Tu no eres parte del equipo de desarrollo, no te puedo dar acceso a este comando";
    let noDEVconsole = "El usuario " + message.author.username + " intento hacerse pasar por un Desarrollador " + "(" + message.author.id + ")";
    if(id === niss || id === misslog4j || id === anabel || id === techx) {
        message.delete();
        console.log(message.author.username + " Ahora es parte del equipo de desarrollo.");
        message.channel.send({embed: {
            color: color,
            description: "Hola!! " + message.author.username + " " + skull + " Eres un usuario del equipo de desarrollo, eres miembro de las variables developer y tienes acceso a absolutamente todas las funciones de mi codigo, espero te agrade ser parte del equipo \n\nUsa p!dev para ver los comandos para Developers",
        }
        });
    }
    else {
        message.delete();
        console.log(noDEVconsole);
        message.channel.send({embed: {
            color: color,
            description: noDev,
        }
        });
    }
}

if(message.content.startsWith(prefix + "say")) {
    let id = message.author.id;
    let noDev = "Tu no eres parte del equipo de desarrollo, no te puedo dar acceso a este comando";
    let noDEVconsole = "El usuario " + message.author.username + " intento hacerse pasar por un Desarrollador " + "(" + message.author.id + ")";
    if (id === techx || id === misslog4j || id === niss || id === anabel) {
    if(!texto) return message.channel.send(`Error al ingresar texto`);
    message.delete()
    message.channel.send(texto);
    }
    else {
        message.delete();
        console.log(noDEVconsole);
        message.channel.send({embed: {
            color: color,
            description: noDev,
        }
        });
    }
}

if(message.content.startsWith(prefix + "esay")){
    let id = message.author.id;
    let noDev = "Tu no eres parte del equipo de desarrollo, no te puedo dar acceso a este comando";
    let noDEVconsole = "El usuario " + message.author.username + " intento hacerse pasar por un Desarrollador " + "(" + message.author.id + ")";
    if (id === techx || id === misslog4j || id === niss || id === anabel) {
    if(!texto) return message.channel.send(`Error al ingresar texto`);
    message.delete()
    message.channel.send({embed: {
        color: color,
        description: texto,
    }
    });
    }
    else {
        message.delete();
        console.log(noDEVconsole);
        message.channel.send({embed: {
            color: color,
            description: noDev,
        }
        });
    }
}

if(message.content.startsWith(prefix + "new_version")) {
    let id = message.author.id;
    let noDev = "Tu no eres parte del equipo de desarrollo, no te puedo dar acceso a este comando";
    let noDEVconsole = "El usuario " + message.author.username + " intento hacerse pasar por un Desarrollador " + "(" + message.author.id + ")";
    if (id === techx || id === anabel || id === misslog4j || id === niss) {
    message.channel.send({embed: {
        color: color,
        description: "Notificacion de actualizacion enviada al servidor **TecnoProjects Security**",
    }
    });
    const channel = client.channels.cache.get(versions)
    if(!channel) return;
    if(channel.type !== 'text') return;
    if(!channel.permissionsFor(client.user.id).has('SEND_MESSSAGES')) return;
        channel.send('@everyone');
        channel.send({embed: {
            color: color,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL()
            },
            Title: "Primera Acutualizacion | Lanzmiento",
                description: "Hola soy el PerturbaBot y acabo de ser actualizado ```Ejecuta el comando p!menu para ver el menú de comandos de la ultima actualización```",
                    fields: [{
                        name: version,
                        value: "Lanzamiento del bot, cualquier duda o error, reportar en [REPORT](https://discord.gg/R3bgKtMsSH)",
                    },
                    {
                        name: "Nuevos comandos",
                        value: comandos_funcionando,
                    },
                    {
                        name: "Comandos Actualizados",
                        value: "0",
                    },
                    {
                        name: "Especificación de actualización de comandos",
                        value: "Lanzamiento del bot"
                    }
                    ],
                    timestamp: new Date(),
                        footer: {
                            icon_url: client.user.avatarURL(),
                            text: "PerturbaBot | " + version
                        }
        }
        });
    }
    else {
        message.delete();
        console.log(noDEVconsole);
        message.channel.send({embed: {
            color: color,
            description: noDev,
        }
        });
    }
}

if(message.content.startsWith(prefix + "logs")) {
    let id = message.author.id;
    let noDev = "Tu no eres parte del equipo de desarrollo, no te puedo dar acceso a este comando";
    let noDEVconsole = "El usuario " + message.author.username + " intento hacerse pasar por un Desarrollador " + "(" + message.author.id + ")";
    if (id === techx || id === anabel || id === misslog4j || id === niss) {
    message.channel.send({embed: {
        color: color,
        description: "Notificacion de actualizacion enviada al canal de logs del servidor ** Unidos Por Ti**",
    }
    });
    const channel = client.channels.cache.get(logs)
    if(!channel) return;
    if(channel.type !== 'text') return;
    if(!channel.permissionsFor(client.user.id).has('SEND_MESSSAGES')) return;
        channel.send('@everyone');
        channel.send({embed: {
            color: color,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL()
            },
            Title: "Primera Acutualizacion | Lanzmiento",
                description: "Hola soy el PerturbaBot y acabo de ser actualizado ```Ejecuta el comando p!menu para ver el menú de comandos de la ultima actualización```",
                    fields: [{
                        name: version,
                        value: "Lanzamiento del bot, cualquier duda o error, reportar en [REPORT](https://discord.gg/R3bgKtMsSH)",
                    },
                    {
                        name: "Nuevos comandos",
                        value: comandos_funcionando,
                    },
                    {
                        name: "Comandos Actualizados",
                        value: "0",
                    },
                    {
                        name: "Especificación de actualización de comandos",
                        value: "Lanzamiento del bot"
                    }
                    ],
                    timestamp: new Date(),
                        footer: {
                            icon_url: client.user.avatarURL(),
                            text: "PerturbaBot | " + version
                        }
        }
        });
    }
    else {
        message.delete();
        console.log(noDEVconsole);
        message.channel.send({embed: {
            color: color,
            description: noDev,
        }
        });
    }
}

//-------------------[Fin del codigo]---------------------
});
//Codigo para iniciar el bot
client.login(config.token);
