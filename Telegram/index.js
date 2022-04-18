//  $$$$$$$                       /$$                         /$$                 /$$$$$$$              /$$    
// | $$__  $$                     | $$                        | $$                | $$__  $$            | $$    
// | $$  \ $$ /$$$$$$   /$$$$$$  /$$$$$$   /$$   /$$  /$$$$$$ | $$$$$$$   /$$$$$$ | $$  \ $$  /$$$$$$  /$$$$$$  
// | $$$$$$$//$$__  $$ /$$__  $$|_  $$_/  | $$  | $$ /$$__  $$| $$__  $$ |____  $$| $$$$$$$  /$$__  $$|_  $$_/  
// | $$____/| $$$$$$$$| $$  \__/  | $$    | $$  | $$| $$  \__/| $$  \ $$  /$$$$$$$| $$__  $$| $$  \ $$  | $$    
// | $$     | $$_____/| $$        | $$ /$$| $$  | $$| $$      | $$  | $$ /$$__  $$| $$  \ $$| $$  | $$  | $$ /$$
// | $$     |  $$$$$$$| $$        |  $$$$/|  $$$$$$/| $$      | $$$$$$$/|  $$$$$$$| $$$$$$$/|  $$$$$$/  |  $$$$/
// |__/      \_______/|__/         \___/   \______/ |__/      |_______/  \_______/|_______/  \______/    \___/  
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// AUTHOR : MrTechX & Anabel GR| TecnoProjects Srcurity
// PROJECT : PerturbaBot (Telegram Version)
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
//-----------------[Constantes]-----------------
const { Telegraf } = require('telegraf');
const config = require("./config/config.json");
const vip = require("./config/vip.json");
const developer = require("./config/developer.json")
const bot = new Telegraf(config.token);

//----------------[Variables]----------------
var prefix = "p_";
var version = "v1.0.0";
var fecha = "12/Abril/2022";
var skull = "💀";

// Developers
var techx = developer.techx;
var anabel = developer.anabel;

// VIP users
var tania = vip.tania;
var seitan = vip.seitan;
var naye = vip.naye;
var aitor = vip.aitor;
var derik = vip.derik;

//--------------[Mensaje de Consola]--------------
console.log("PerturbaBot Online");

//----------------[Comandos Centrales]----------------
bot.start((ctx) => {
    console.log(ctx.form)
    console.log(ctx.chat)
    console.log(ctx.message)
    console.log(ctx.updateSubTypes)
    const a = "xd";

    ctx.reply('Holaa!! Bienvenid@ ' + ctx.from.first_name + ',' + ' Soy el PerturbaBot, puedes ejecutar el comando /menu para para ver el menu de comandos simple \n\nO si eres un usuario VIP escribe /SoyVip ' + skull)
});

//--------------[Definicion de usuarios]--------------
// var devs = ctx.from.username === techx || ctx.from.id === anabel;

// //--------------[COMANDOS]--------------
bot.command('version', (ctx) => {
    ctx.reply("Actualmente estoy en mi verison " + version + " que fue lanzada el " + fecha + " por TecnoProjects Security | @Mr_TechX")
});

bot.command('version_logs', (ctx) => {
    ctx.reply("REGISTRO DE MODIFICACIONES: \n\n• Comandos VIP /SoyVip \n• Funcionamiento rapido \n• Mejoras internas a nivel de codigo \n\n• " + version + " - " + fecha)
});


//---------------------[Menus]--------------------
bot.command('menu', (ctx) => {
    ctx.reply("*MI MENU DE COMANDOS ES:* \n\n• /grupos - para obtener los links a nuestros grupos de facebook \n\n• /reglas - Para ver el reglamento del grupo \n\n• /hello - Para saludar a todo el grupo \n\n• /chat_muerto - para tratar de revivir el chat con un imagen del chat muerto \n\n• /juegos - para ver el menu de comandos de juego \n\n• /creditos - Para ver los creditos del bot \n\n• /frases - Para ver la web de las frases de miembros del grupo \n\n• PROXIMAMENTE MAS COMANDOS")
});

bot.command('juegos', (ctx) => {
    ctx.reply("MIS COMANDOS DE JUEGO SON: \n\n• /pregunta - Para preguntarme algo que pueda responder con (si, no, tal vez) \n\n• /pregunta_h - Para aprender a usar el comando anterior \n\n• /volado - para lanzar una moneda al aire \n\n• /volado_h - Para entender el comando anterior \n\n• /pescar - Para pescar un pes random del menu \n\n• PROXIMAMENTE MAS COMANDOS PARA JUGAR")
})

//-------------------[Commands]-------------------
bot.command('grupos', (ctx) => {
    ctx.reply("Si te gusta lo paranormal puedes unirte a nuestros grupos, se que te van a gustar💀 \n\nGrupo Principal de Facebook - https://bit.ly/DrossGrupoPrincipal \n\nGrupo Secundario de Facebook - https://bit.ly/DrossGrupoSecundario \n\nServidor Discord - https://discord.gg/GuN4DEMdVn")
});

bot.command('reglas', (ctx) => {
    ctx.reply("Este grupo es creado para divertirse, con el fin de salir de la rutina y entretenerse un rato😁 \nREGLAS DEL GRUPO \n\n● Presentarse con foto, nombre, país y edad \n\n● No subir porno \n\n● No faltar al respeto a nadie \n\n● No discriminación \n\n● Prohibido el spam \n\n● En caso de una pelea entre los integrantes del grupo, si no entienden se eliminarán \n\n● Si no se presentan dentro de los 10 min serán eliminados \n\n● Prohibido subir imágenes de cualquier religión. \n\n● Prohibido el gore")

});

bot.command('hello', (ctx) => {
    console.log(ctx.form)
    console.log(ctx.chat)
    console.log(ctx.message)
    console.log(ctx.updateSubTypes)
    ctx.reply("Hola a todos " + skull + " Los saluda el PerturbaBot a todos ustedes. ")
});

bot.command('creditos', (ctx) => {
    ctx.reply("• CREDITOS DEL BOT: \n\n•  Anabel GR \n• Instagram | instagram.com/anabelguarniz \n• Telegram | @AnabelleSR \n\n•  MrTechX \n• Twitter | twitter.com/Mr__TechX \n• Instagram | instagram.com/mr.tech.x \n• GitHub | github.com/Mr-TechX \n• Telegram | @Mr_TechX \n• Reddit | reddit.com/u/Mr_TechX \n• Discord | MrTechX#6832")
});

bot.command('frases', (ctx) => {
    ctx.reply("Los miembros del grupo de DrossRotzank UnidosPorTi tienen frases para compartir con los demás, puedes verlas aqui https://PerturbaBot.mrtechx.repl.co")
})

//-----------------[Diversion]-----------------
bot.command('pregunta', (ctx) => {
    let respuesta = ["Si", "No", "Tal vez", "Obvio", "Yo digo que si", "Yo digo que no", "Probablemente"]
    var random = respuesta[Math.floor(Math.random() * respuesta.length)]
    ctx.reply(`Mi respuesta es ${random} \n\n(Si no preguntaste nada, /pregunta_h)`)
});

bot.command('pregunta_h', (ctx) => {
    ctx.reply("Agrega una pregunta que se pueda responder con *Si, No, Tal Vez*, si no es así usa \n/pregunta [Tu pregunta] \nEjemplo: \n/pregunta aprobaré el examen?")
});

bot.command('volado_h', (ctx) => {
    let imgmain = "https://github.com/PerturbaBot/PerturbaBot-Code/blob/main/img/menu.jpg?raw=true"
    ctx.replyWithPhoto(imgmain)
});

bot.command('volado', (ctx) => {
    let img1 = "https://github.com/PerturbaBot/PerturbaBot-Code/blob/main/img/moneda-cara.png?raw=true"
    let img2 = "https://github.com/PerturbaBot/PerturbaBot-Code/blob/main/img/moneda-troll.png?raw=true"
    let respuesta = [img1, img2]
    var random = respuesta[Math.floor(Math.random() * respuesta.length)]
    ctx.replyWithPhoto(`${random}`)
});

bot.command('pescar', (ctx) => {
    let respuesta = ['Felicitaciones, ' + ctx.from.first_name + ' pescaste un: 🐟', 'Felicitaciones, ' + ctx.from.first_name + ' pescaste un: 🐠', 'Felicitaciones, ' + ctx.from.first_name + ' pescaste un: 🐡', 'Felicitaciones, ' + ctx.from.first_name + ' pescaste un: 🦀', 'Felicitaciones, ' + ctx.from.first_name + ' pescaste un: 🦐', 'Felicitaciones, ' + ctx.from.first_name + ' pescaste un: 🦑', 'Felicitaciones, ' + ctx.from.first_name + ' pescaste un: 🐙']
    var random = respuesta[Math.floor(Math.random() * respuesta.length)]
    ctx.reply(`${random}`)
});



//----------------[Util/Extra]---------------
bot.command('chat_muerto', (ctx) => {
    let img1 = "https://github.com/PerturbaBot/PerturbaBot-Code/blob/main/img/chatm1.jpg?raw=true"
    let img2 = "https://github.com/PerturbaBot/PerturbaBot-Code/blob/main/img/chatm2.png?raw=true"
    let respuesta = [img1, img2]
    let respuesta2 = ["EFECTIVAMENTE CHAT MUERTO", "EL CHAT ESTA MAS QUE MUERTO"]
    var random = respuesta[Math.floor(Math.random() * respuesta.length)]
    var random2 = respuesta2[Math.floor(Math.random() * respuesta2.length)]
    ctx.reply(`${random2}`)
    ctx.replyWithPhoto(`${random}`)
});

//-----------------[Developer]-----------------
bot.command('dev_networks', (ctx) => {
    ctx.reply("Redes Sociales de mi programador: \n\nTwitter - http://bit.ly/twittechX \n\nInstagram - https://bit.ly/ig_techx \n\nDiscord Server - https://discord.gg/R3bgKtMsSH \n\nTelegram - @Mr_TechX \n\nGrupo de Telegram - https://t.me/TechX_Army \n\nGithub - bit.ly/github_techX \n\nTecnoProjects - https://github.com/TecnoProjects \n\nPortafolio - https://web.ulisescamacho.repl.co \n\nContacto - beacons.ai/ulisescamacho \n\nWeb de TecnoProjects - https://web.tecnoprojects.repl.co")
});

bot.command('pt', (ctx) => {
  ctx.reply("El portafolio web de mi programador @Mr_TechX es: \n\n· https://web.ulisescamacho.repl.co")
});

//----------------[VIP MENU]----------------
bot.command('vip', (ctx) => {
    let noVIP = "Tu no eres VIP, No trates de engañar al PerturbaBot" + skull;
    let noVIPconsole = "El usuario " + ctx.from.username + " intento hacerse pasar por un VIP " + "(" + ctx.from.first_name + ")";
        if(ctx.from.username === tania || ctx.from.username === seitan || ctx.from.username === techx || ctx.from.username === anabel || ctx.from.username === naye || ctx.from.username == aitor || ctx.from.username === derik) {
            ctx.reply("LOS COMANDOS VIP SON: \n\n• /wsp - para compartir el link del grupo de whatsApp \n\n• /SoyVip - Inicio de un VIP \n\n• /admins - para ver el listado de admins y gente influyente del grupo. \n\n• /twitch - para obtener el Twitch de Dross \n\n• /kill - Este comando avisara a los usuarios que habra eliminacion masiva \n\n• PROXIMAMENTE \n\n• Puedes enviar sugerencias para comandos VIP a @Mr_TechX");
        } 
        else {
            ctx.reply(noVIP)
            console.log(noVIPconsole)
        }
});

//----------------[VIP CMDS]----------------
bot.command('wsp', (ctx) => {
    let noVip = "Tu no eres VIP, no te puedo dar acceso a este comando";
    let noVIPconsole = "El usuario " + ctx.from.username + " intento hacerse pasar por un VIP " + "(" + ctx.from.first_name + ")";
    if(ctx.from.username === tania || ctx.from.username === seitan || ctx.from.username === techx || ctx.from.username === anabel || ctx.from.username === naye || ctx.from.username === aitor || ctx.from.username === derik) {
        ctx.reply("Este es el link del grupo de WhatsApp \nAl grupo de DrossRotzank UnidosPorTi \n\n• https://chat.whatsapp.com/Gpsrj3ukXrVALLyA9BOxS8");
    }
    else {
        ctx.reply(noVip);
        console.log(noVIPconsole);
    }
});

bot.command('SoyVip', (ctx) => {
    if(ctx.from.username === tania || ctx.from.username === seitan || ctx.from.username === techx || ctx.from.username === anabel || ctx.from.username === naye || ctx.from.username === aitor || ctx.from.username === derik) {
            ctx.reply("Hola! " + ctx.from.first_name + " " + skull + " Eres un usuario VIP, asi que tienes acceso a la mayoria de comandos, puedes mostrar informacion confidencial del grupo asi que ten cuidado \n\nUsa /vip para ver los comandos VIP");
            console.log("Ahora " + ctx.from.first_name + " Es un usuario VIP");
        }
        else{
            ctx.reply("Tu no eres VIP, No trates de engañar al PerturbaBot" + skull);
            console.log(`El usuario ${ctx.from.username} intento hacerse pasar por un VIP (${ctx.from.first_name})`);
        }
});

bot.command('admins', (ctx) => {
    let noVip = "Tu no eres VIP, no te puedo dar acceso a este comando";
    let noVIPconsole = "El usuario " + ctx.from.username + " intento hacerse pasar por un VIP " + "(" + ctx.from.first_name + ")";
        if(ctx.from.username === tania || ctx.from.username === seitan || ctx.from.username === techx || ctx.from.username === anabel || ctx.from.username === naye || ctx.from.username === aitor || ctx.from.username === derik) {
            ctx.reply("Los usuairios VIP son los siguientes \n\n• @" + vip.tania + "\n• @" + vip.seitan + "\n• @" + vip.naye + "\n• @" + developer.techx);
        }
        else {
            ctx.reply(noVip);
            console.log(noVIPconsole);
        }
});

bot.command('twitch', (ctx) => {
    let noVip = "Tu no eres VIP, no te puedo dar acceso a este comando";
    let noVIPconsole = "El usuario " + ctx.from.username + " intento hacerse pasar por un VIP " + "(" + ctx.from.first_name + ")";
        if(ctx.from.username === tania || ctx.from.username === seitan || ctx.from.username === techx || ctx.from.username === anabel || ctx.from.username === naye || ctx.from.username === aitor || ctx.from.username === derik) {
            ctx.reply("Twitch de el señor DrossRotzank \n\n• https://twitch.tv/thedrossrotzank");
        }
        else {
            ctx.reply(noVip);
            console.log(noVIPconsole);
        }
});

bot.command('kill', (ctx) => {
    let noVip = "Tu no eres VIP, no te puedo dar acceso a este comando y no creo que quieras ver este comando en accion" + skull;
    let noVIPconsole = "El usuario " + ctx.from.username + " intento hacerse pasar por un VIP " + "(" + ctx.from.first_name + ")";
        if(ctx.from.username === tania || ctx.from.username === seitan || ctx.from.username === techx || ctx.from.username === anabel || ctx.from.username === naye || ctx.from.username === aitor || ctx.from.username === derik) {
            ctx.reply("A continucion se iniciara una eliminacion masiva de miembros del grupo" + skull);
        }
        else {
            ctx.reply(noVip);
            console.log(noVIPconsole);
        }
});



//|++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|
//|----------------------------------------------[AREA DEVELOPER]----------------------------------------------|
//|++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|

//----------------[DEV MENU]----------------
bot.command('dev', (ctx) => {
    let noVIP = "Tu no eres DEVELOPER, No trates de engañar al PerturbaBot" + skull;
    let noVIPconsole = "El usuario " + ctx.from.username + " intento hacerse pasar por un DEVELOPER " + "(" + ctx.from.first_name + ")";
        if(ctx.from.username === techx || ctx.from.username === anabel) {
            ctx.reply("LOS COMANDOS DEV SON: \n\n• /report - para ver a donde reportar un bug o falla. \n• /SoyDev - Inicio y reconocimiento de un Dev. \n• /devs - para ver el listado de developers que hicieron y testearon mi funcionalidad. \n• /code - para ver mi codigo en GitHub. \n• /logs - para ver las novedades a nivel de programacion y testing. \n• /test - para ver las cosas que hay por testear. \n• /bugs - para ver los bugs actuales que reparar. \n• PROXIMAMENTE.")
        } 
        else {
            ctx.reply(noVIP)
            console.log(noVIPconsole)
        }
});

//----------------[DEV CMDS]----------------
bot.command('SoyDev', (ctx) => {
    if(ctx.from.username === techx || ctx.from.username === anabel) {
            ctx.reply("Holaa!! " + ctx.from.first_name + " Eres un usuario del equipo de desarrollo, eres miembro de las variables developer y tienes acceso a absolutamente todas las funciones de mi codigo, espero te agrade ser parte del equipo \n\nUsa /dev para ver los comandos para Developers");
            console.log("Ahora " + ctx.from.first_name + " Es miembro del equipo de desarrollo de PerturbaBot");
        }
        else{
            ctx.reply("No engañes al PerturbaBot, tu no eres parte del equipo de desarrollo " + skull);
            console.log(`El usuario ${ctx.from.username} intento hacerse pasar por un Developer (${ctx.from.first_name})`);
        }
});

bot.command('report', (ctx) => {
    if(ctx.from.username === techx || ctx.from.username === anabel) {
        ctx.reply("Puedes reportas las fallas que encuentres con @Mr_TechX aqui en Telegram o en nuestro servidor oficial de discord https://discord.gg/R3bgKtMsSH " + skull);
        console.log('Fue encontrado un nuevo error o bug que tal vez sea reportado pronto.');
    }
    else{
        ctx.reply("No engañes al PerturbaBot, tu no eres parte del equipo de desarrollo, pero si encontraste un bug reportalo en el grupo oficial de DrossRotzank UnidosPorTi /grupos " + skull);
        console.log(`El usuario ${ctx.from.username} intento hacerse pasar por un Developer (${ctx.from.first_name})`);
    }
});

bot.command('devs', (ctx) => {
    if(ctx.from.username === techx || ctx.from.username === anabel) {
        ctx.reply("*Mis desarrolladores y testers son:* \n\n• @AnabelleSR - Prueba las funciones de codigo y reporta fallos de funcionalidad \n\n• @Mr_TechX - Programador y escritor del codigo de funcionalidad del bot.");
    }
    else {
        ctx.reply("Por serguridad no te puedo decir todos los miembros del equipo de desarrollo a menos que me sea permitido, pero puedes comunicarte con @Mr_TechX para reportar o sugerir algo.");
    }
});

bot.command('code', (ctx) => {
    if(ctx.from.username === techx || ctx.from.username === anabel) {
        ctx.reply("Puedes ver mi codigo fuente para revisarlo en busca de errores o sugerir modificaciones, solo visita mi GitHub https://github.com/PerturbaBot/PerturbaBot-Code/blob/main/Telegram/index.js o revisa el repositorio completo aqui https://github.com/PerturbaBot")
    }
    else {
        ctx.reply("Por seguridad no te puedo mostrar mi codigo fuente, pero si estas interesado realmente, habla con @Mr_TechX")
    }
});

bot.command('logs', (ctx) => {
    if(ctx.from.username === techx || ctx.from.username === anabel) {
        ctx.reply("Los logs de esta version son: \n• Lanzamiento de la web /frases \n• Comandos para usuarios VIP \n • Comandos internos para equipo de desarrollo \n • Comandos simples de diversion \n • Menú de comandos simple \n\n • MAS MEJORAS PROXIMAMENTE \nMrTechX | PerturbaBot - v1.0.0")
    }
    else {
        ctx.reply("Por medidas de precaucion anti spam, no puedes ejecutar este comando, dile a un desarrollador que lo ejecute por ti, el desarrollador principal es @Mr_TechX")
    }
});

bot.command('test', (ctx) => {
    if(ctx.from.username === techx || ctx.from.username === anabel) {
        ctx.reply("Elementos por Testear: \n\n • Comandos VIP \n • Comandos dev \n • Compatibilidad de usuarios \n• Nota: Confirmar que los usuarios VIP y DEV tengan nombre de usuario, de lo contrario ponerse nombre de usuario para facilitar el uso del bot")
    }
    else {
        ctx.reply("No creo que sea necesario que veas los elemenos por testear, ya que no formas parte del equipo de desarrollo y testing")
    }
});

bot.command('bugs', (ctx) => {
    if(ctx.from.username === techx || ctx.from.username === anabel) {
        ctx.reply("Los bugs por reparar actualmente son: \n\n• Comandos Dev que no responden a las ordenes \n• Comandos VIP que no responden a todos los VIP \n• Compatibilidad de usuarios \n\n• Esperamos no encontrar mas")
    }
    else {
        ctx.reply("No creo que sea necesario que veas los bugs de mi codigo ya que no formas parte del equipo de soporte y desarrollo")
    }
});

//-----------------[Soporte]----------------
bot.command('post', (ctx) => {
    if(ctx.from.username === techx) {
        ctx.reply("Lanzamiento de PerturbaBot: \n• Hola Soy PerturbaBot, Un Bot MultiPlataforma que funciona tanto en Telegram como en Discord, cuento con una pagina web que puedes ver con el comando /frases , Tengo comandos especiales para algunos usuarios, si crees pertenecer a uno de los grupos especiales, prueba suerte con los comandos /SoyVip y /SoyDev \n\n• Puedes contactarte con @" + techx + " Para resolver cualquier duda que tengas sobre PerturbaBot")
    }
    else {
        ctx.reply("Por motivos de prevenir el spam de comandos, tu no tienes permiso de ejecutar este comando, lo siento" + skull)
    }
});

bot.command('status', (ctx) => {
    ctx.reply("PerturbaBot is Online now" + skull)
});

bot.on('text', ctx => {
    if(ctx.chat.type == 'private'){
        ctx.reply('Podrias ejecutar un comando? puedes ver la lista de comandos ejecutando /b_menu ' + skull)
}});

bot.on('sticker', ctx => {
    if(ctx.chat.type == 'private'){
        ctx.reply('Me encantan los stickers, ya veo que a ti tambien' + skull)
}});

bot.on('photo', ctx => {
if(ctx.chat.type == 'private'){
    ctx.reply('Aun no estoy programado para poder ver fotos o imagenes' + skull)
}});

bot.on('audio', ctx => {
if(ctx.chat.type == 'private'){
    ctx.reply('Aun no estoy programado para escuchar audios, una disculpa' + skull)
}});

bot.on('voice', ctx => {
if(ctx.chat.type == 'private'){
    ctx.reply('Aún no estoy listo para escuchar tu voz, se paciente, se que te va a encantar' + skull)
}});

bot.on('video', ctx => {
if(ctx.chat.type == 'private'){
    ctx.reply('Aún está en proceso mi función para ver tus perturbadores videos' + skull)
}});

//----------------[Lanzamiento]----------------
bot.launch();

//----------------[Commnents]------------------
//Tania estrella fugaz les dice cualquier sueño
//que tengas si crees en él se hará realidad.

//---------------------------------------------
//Anabel GR dice: ""

//---------------------------------------------
//MrTechX dice "El mayor riesgo es no correr
//riesgos y que no hay preguntas tontas, solo
//tontos que no preguntan, no tengan miedo :)"

//---------------------------------------------
//MissLog4J dice "Si te cansas, aprende a
//descansar, pero no a renunciar"

//---------------------------------------------
//Aitor García dice "Sé tu mismo, y serás quién
//querias ser"

//---------------------------------------------
//Naye dice "Si pudiéramos mirar el corazón del
//otro, percibir lo que siente y saber por qué
//hace lo que hace, se acabarían los prejuicios. 
//Pd. + amor y - guerra."

//---------------------------------------------
//Adan dice: Cuando vez la peor cara del mundo
//te das cuenta que las personas son buenas o
//malas según lo que valgas para ellos, así que
//sin importar lo que te digan de alguien,
//júsgalo solamente por como es contigo

//---------------------------------------------
//Aitor dice: La muerte está tan segura de
//vencernos al final de la recta, que nos dá toda
//una vida de ventaja..

//---------------------------------------------
//Lina dice: Tómatela leve que la vida se hace
//cada dia ✌🏻😎

//---------------------------------------------
//Derik dice: La vida es maravillosa si no se
//le tiene miedo

////////////////////////////////////////////////
//Tania dice: los quiero mucho y les mando un
//fuerte abrazo cósmico estelar 🌟💫 junto con
//polvo de estrellas mágico, para que sonrían
//siempre 😊
