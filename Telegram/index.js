//----------------[Codigo fuente]---------------

//-----------------[Constantes]-----------------
const { Telegraf } = require('telegraf');
const config = require("./config/config.json");
const system = require("./config/system.json");
const vip = require("./config/vip.json");
const bot = new Telegraf(config.token);

//----------------[Variables]----------------
var prefix = "p_";
var version = "v1.0.0";
var fecha = "03/Abril/2022";
var skull = "💀";

//--------------[Mensaje de Consola]--------------
console.log("PerturbaBot Online");

//----------------[Comandos Centrales]----------------
bot.start((ctx) => {
    console.log(ctx.form)
    console.log(ctx.chat)
    console.log(ctx.message)
    console.log(ctx.updateSubTypes)

    ctx.reply('Holaa!! Bienvenid@ ' + ctx.from.first_name + ',' + ' Soy el PerturbaBot, puedes ejecutar el comando /menu para para ver el menu de comandos simple \n\nO si eres un usuario VIP escribe /SoyVip ' + skull)
});

bot.command('w_version', (ctx) => {
    ctx.reply("Actualmente estoy en mi verison 1.0.9 que fue lanzada el 18/Feb/2022 por TecnoProjects Security | @Mr_TechX")
});

bot.command('w_version_logs', (ctx) => {
    ctx.reply("REGISTRO DE MODIFICACIONES: \n\n• Nuevos comandos VIP /w_SoyVip \n• Modificacion de funcionamiento rapido \n• Actualización de las /w_cryptos \n• Mejoras internas a nivel de codigo \n• Nuevo comando /w_edh para ver el grupo privado EDH \n\n• v1.0.9 - 18/Feb/2022")
});

bot.command('w_my_code', (ctx) => {
    ctx.reply("Puedes ver mi codigo fuente en el Github de mi programador, ahi puedes ver mis versiones pasadas y mi version actual en el lado del codigo https://github.com/Mr-TechX/Wall-E_Telegram")
});

//---------------------[Menus]--------------------
bot.command('menu', (ctx) => {
    ctx.reply("*MIS COMANDOS DEL GRUPO SON:* \n\n• /grupos - para obtener los links a nuestros grupos de facebook \n\n• /reglas - Para ver el reglamento del grupo \n\n• /w_hello - Para saludar a todo el grupo")
});

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
    ctx.reply("Hola a todos " + skull + " Los saluda el PerturbaBot a todos ustedes.")
});

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
    let imgmain = "https://raw.githubusercontent.com/Mr-TechX/Wall-E_Telegram/v1.0.0/img/menu.jpg"
    ctx.replyWithPhoto(imgmain)
});

bot.command('volado', (ctx) => {
    let img1 = "https://raw.githubusercontent.com/Mr-TechX/Wall-E_Telegram/v1.0.0/img/cara.png"
    let img2 = "https://raw.githubusercontent.com/Mr-TechX/Wall-E_Telegram/v1.0.0/img/cruz.png"
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
    let img1 = "link img"
    let img2 = "link img2"
    let respuesta = [img1, img2]
    var random = respuesta[Math.floor(Math.random() * respuesta.length)]
    ctx.reply("EFECTIVAMENTE CHAT MUERTO")
    ctx.replyWithPhoto(`${random}`)
});

//-----------------[Developer]-----------------
bot.command('dev_networks', (ctx) => {
    ctx.reply("Redes Sociales de mi programador: \n\nTwitter - http://bit.ly/twittechX \n\nInstagram - https://bit.ly/ig_techx \n\nDiscord Server - https://discord.gg/R3bgKtMsSH \n\nTelegram - @Mr_TechX \n\nGrupo de Telegram - https://t.me/TechX_Army \n\nGithub - bit.ly/github_techX \n\nTecnoProjects - https://github.com/TecnoProjects \n\nPortafolio - https://web.ulisescamacho.repl.co \n\nContacto - beacons.ai/ulisescamacho \n\nWeb de TecnoProjects - https://web.tecnoprojects.repl.co")
});

bot.command('pt', (ctx) => {
  ctx.reply("El portafolio web de mi programador @Mr_TechX es: \n\n· https://web.ulisescamacho.repl.co")
});



//------------------------------[Variables especiales]------------------------------
// Developers
var TechX = developer.techx;
var Anabel = developer.anabel;

// VIP users
var tania = vip.tania;
var seitan = vip.seitan;
var naye = vip.naye;
var aitor = vip.aitor; 

//----------------[VIP MENU]----------------
bot.command('vip', (ctx) => {
    let noVIP = "Tu no eres VIP, No trates de engañar al PerturbaBot" + skull;
    let noVIPconsole = "El usuario " + ctx.from.username + " intento hacerse pasar por un VIP " + "(" + ctx.from.first_name + ")";
        if(ctx.from.username === tania || ctx.from.username === seitan || ctx.from.username === TechX || ctx.from.username === Anabel || ctx.from.username === "naye" || ctx.from.username == "aitor" || ctx.from.username) {
            ctx.reply("LOS COMANDOS VIP SON: \n\n• /wsp - para compartir el link del grupo de whatsApp \n• /SoyVip - Inicio de un VIP \n• /admins - para ver el listado de admins y gente influyente del grupo. \n• / - para \n• PROXIMAMENTE \n\n• Puedes enviar sugerencias para comandos VIP a @Mr_TechX")
        } 
        else {
            ctx.reply(noVIP)
            console.log(noVIPconsole)
        }
});

//----------------[VIP CMDS]----------------
bot.command('SoyVip', (ctx) => {
    if(ctx.from.username === "daniela_ortiz_UwU" || ctx.from.username === "Bryan_ILC" || ctx.from.username === "ElpeinadoJR16" || ctx.from.username === "Mr_TechX" || ctx.from.id == "1594638516") {
            ctx.reply("Holii " + ctx.from.first_name + " Eres un usuario VIP, eres mas importante para mi que todos los demás usuarios, tienes comandos que solo los VIP pueden usar, felicidades, me agradas y al parecer a mi programador también, tkm💛, Toma awita :) \n\nUsa /w_vip para ver los comandos VIP");
            console.log("Ahora " + ctx.from.first_name + " Es un usuario VIP");
        }
        else{
            ctx.reply("Mentiroso, tu no eres VIP, no puedes engañar un Bot😎, Bye putito🖕🏻");
            console.log(`El usuario ${ctx.from.username} intento hacerse pasar por un VIP (${ctx.from.first_name})`);
        }
});



//|++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|
//|----------------------------------------------[AREA DEVELOPER]----------------------------------------------|
//|++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|

//----------------[DEV MENU]----------------
bot.command('dev', (ctx) => {
    let noVIP = "Tu no eres DEVELOPER, No trates de engañar al PerturbaBot" + skull;
    let noVIPconsole = "El usuario " + ctx.from.username + " intento hacerse pasar por un DEVELOPER " + "(" + ctx.from.first_name + ")";
        if(ctx.from.username === TechX || ctx.from.username === Anabel) {
            ctx.reply("LOS COMANDOS DEV SON: \n\n• /report - para ver a donde reportar un bug o falla. \n• /SoyDev - Inicio y reconocimiento de un Dev. \n• /devs - para ver el listado de developers que hicieron y testearon mi funcionalidad. \n• /code - para ver mi codigo en GitHub. \n• /logs - para ver las novedades a nivel de programacion y testing. \n• /test - para ver las cosas que hay por testear. \n• /bugs - para ver los bugs actuales que reparar. \n• PROXIMAMENTE.")
        } 
        else {
            ctx.reply(noVIP)
            console.log(noVIPconsole)
        }
});

//----------------[DEV CMDS]----------------
bot.command('SoyDev', (ctx) => {
    if(ctx.from.username === TechX || ctx.from.username === Anabel) {
            ctx.reply("Holaa!! " + ctx.from.first_name + " Eres un usuario del equipo de desarrollo, eres miembro de las variables developer y tienes acceso a absolutamente todas las funciones de mi codigo, espero te agrade ser parte del equipo \n\nUsa /dev para ver los comandos para Developers");
            console.log("Ahora " + ctx.from.first_name + " Es miembro del equipo de desarrollo de PerturbaBot");
        }
        else{
            ctx.reply("No engañes al PerturbaBot, tu no eres parte del equipo de desarrollo " + skull);
            console.log(`El usuario ${ctx.from.username} intento hacerse pasar por un Developer (${ctx.from.first_name})`);
        }
});

bot.command('report', (ctx) => {
    if(ctx.from.username === TechX || ctx.from.username === Anabel) {
        ctx.reply("Puedes reportas las fallas que encuentres con @Mr_TechX aqui en Telegram o en nuestro servidor oficial de discord https://discord.gg/R3bgKtMsSH " + skull);
        console.log('Fue encontrado un nuevo error o bug que tal vez sea reportado pronto.');
    }
    else{
        ctx.reply("No engañes al PerturbaBot, tu no eres parte del equipo de desarrollo, pero si encontraste un bug reportalo en el grupo oficial de DrossRotzank UnidosPorTi /grupos " + skull);
        console.log(`El usuario ${ctx.from.username} intento hacerse pasar por un Developer (${ctx.from.first_name})`);
    }
});

bot.command('devs', (ctx) => {
    if(ctx.from.username === TechX || ctx.from.username === Anabel) {
        ctx.reply("*Mis desarrolladores y testers son:* \n\n• Anabel GR - Prueba las funciones de codigo y reporta fallos de funcionalidad \n\n• @Mr_TechX - Programador y escritor del codigo de funcionalidad del bot.");
    }
    else {
        ctx.reply("Por serguridad no te puedo decir todos los miembros del equipo de desarrollo a menos que me sea permitido, pero puedes comunicarte con @Mr_TechX para reportar o sugerir algo.");
    }
});

bot.command('code', (ctx) => {
    if(ctx.from.username === TechX || ctx.from.username === Anabel) {
        ctx.reply("Puedes ver mi codigo fuente para revisarlo en busca de errores o sugerir modificaciones, solo visita mi GitHub https://github.com/PerturbaBot")
    }
})

//-----------------[Soporte]----------------
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
//MrTechX dice "El mayor riesgo es no correr
//riesgos y que no hay preguntas tontas, solo
//tontos que no preguntan, no tengan miedo :)"

//---------------------------------------------
//MissLog4J dice "Si te cansas, aprende a
//descansar, pero no a renunciar"

//---------------------------------------------
//
