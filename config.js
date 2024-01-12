const fs = require("fs");
const chalk = require("chalk");


//
global.available = true;
global.autoReadAll = false;
global.antitags = true;


//auto functioner
global.autoTyping = false;                //auto tying by default off.
global.autoRecord = false;                //auto recording by default off.
global.groupevent = false;                //This is the new variable for controlling group event handling.
global.statusseen = true;                 //This is the new variable for controlling status seen.
global.autoreadgc = false;


//
global.prefa = ["#"];                                    //Default prefix here. you can change if you want.


//
global.Owner = ["2349067654525", "2348150735460"];         //If you want singal number so global.Owner = ['2349067654525'] Change into your number.
global.OwnerNumber = ["2349067654525", "2348150735460"];   //If you want singal number so global.Owner = ['2349067654525'] Change into your number.
global.ownertag = ["2349067654525"];
global.OwnerName = "Cipher";
global.BotName = "Shadow";
global.packname = "SHADOW-MD";                             //Do not change.
global.author = "By: Cipher";                               //Do not change.
global.BotSourceCode = "https://github.com/CIpher0071/A17"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/FCfSLTySyqz1c7YPJD2KSm";
module.exports = {
  SESSION_ID: (process.env.SESSION_ID || '').trim(),
};

//
global.sessionName = "session";                          //Do not change.


//
global.openAiAPI = "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";


//
global.location = "Benin city,Nigeria";
global.reactmoji = "❤️";
global.themeemoji = "💖";
global.vidmenu = { url: 'https://media.tenor.com/Jdu0Ov8X2sIAAAAC/A17-Bot.mp4' };
global.websitex = "https://github.com/Cipher0071";
global.lolhuman = "KaysaS";


//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
  jobdone: '🌸🌟 Yatta! It's all done',
  useradmin: 'Gomenasai! This command is exclusive for the Admin-sama only! 🉐✨',
  botadmin: 'Ah, this command can only be used when the Bot ascends to Admin mode! ✨🤖',
  botowner: 'This command is wielded only by the esteemed Owner-sama 😌👑',
  grouponly: 'This command can only be activated within the Group, gomenasai! Oopsie daisy! 🏞️',
  privateonly: 'This command is a secret move, only to be used in private, senpai~ Shh! 🤫',
  botonly: 'A special ability befitting the Bot, kawaii~ 🤖✨',
  waiting: '⏳ Currently undergoing processing, my dear senpai~ Chotto mattae! 🕒',
  nolink: 'Please provide me *link*, Baka!',
  error: 'An error occurd!',
  banned: 'gomen ne! you have been banned by  Owner-sama! 🚫🔒',
  bangc: 'gomen ne! This group is banned by the Owner-sama! 🚫🔒',
  nonsfw: 'gomen ne! This feature is sealed by the Owner-sama! 🚫🔒'

}

global.limitawal = {
  premium: "Infinity",
  free: 2,
  monayawal: 1000,
};

global.limitawal = {
  rakyat: "Infinity",
  free: 100,
};

global.APIs = {
  zenz: "https://zenzapis.xyz",
};
global.APIKeys = {
  "https://zenzapis.xyz": "5d1197db351b",
};
