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
  SESSION_ID: (process.env.SESSION_ID || '7b226e6f6973654b6579223a7b2270726976617465223a7b2274797065223a22427566666572222c2264617461223a22414d324744647a6c416c6c342b5547646855714e79424f744e6a4374747a736d734f43334d6b42774b32453d227d2c227075626c6963223a7b2274797065223a22427566666572222c2264617461223a22517979716a434b7a356a6e646471464965504d565a3252596e32474232792b476d33415a5a507a6f4e42303d227d7d2c227369676e65644964656e746974794b6579223a7b2270726976617465223a7b2274797065223a22427566666572222c2264617461223a227947357363746942695a783473432b4b6a5352464b6f7a694f423775583631616c49746a6f332f3576556f3d227d2c227075626c6963223a7b2274797065223a22427566666572222c2264617461223a227a5532656e3131786862784148764d37644159354c656e466567317754516e6a784f496576492b6a4b6a383d227d7d2c227369676e65645072654b6579223a7b226b657950616972223a7b2270726976617465223a7b2274797065223a22427566666572222c2264617461223a224d4a775174474b723032776a484b714c426c426f654d59634b58534647314971673043546736344679474d3d227d2c227075626c6963223a7b2274797065223a22427566666572222c2264617461223a22505258722b4934365a592f794c327465417446695079712f336951694f53307a644d5339656439396a6a593d227d7d2c227369676e6174757265223a7b2274797065223a22427566666572222c2264617461223a22663366685935583550503156614f75714e6f71676965616648785256426731472f4b45334a3848587553646933563850557878504462585052794a6f4d61427643467848695947364b716b3876653234496f395241773d3d227d2c226b65794964223a317d2c22726567697374726174696f6e4964223a32322c226164765365637265744b6579223a22422b4a555261584a465234666f6f634f763838576b55734d6466365a59766d31492f526f52506e78526f303d222c2270726f636573736564486973746f72794d65737361676573223a5b5d2c226e6578745072654b65794964223a33312c226669727374556e75706c6f616465645072654b65794964223a33312c226163636f756e7453796e63436f756e746572223a302c226163636f756e7453657474696e6773223a7b22756e617263686976654368617473223a66616c73657d2c226163636f756e74223a7b2264657461696c73223a2243504471724e4148454a4461686130474743733d222c226163636f756e745369676e61747572654b6579223a2253536d2f35536e7036674336796d50767a43534244674a6d4e7543684d7a586356736975323357783451413d222c226163636f756e745369676e6174757265223a22724e52426f775856735a426969763139696b756869506256737949747679373430324675376f6d4b6358464d56306a524964497237713739597935636156504839437941446945382f4f38687a65304f4a414b4b42513d3d222c226465766963655369676e6174757265223a2255344b4e67574a486b46474b2b3568525a4a694e444f4333543066426a57534a39714c53305a73716c4f69776130516e647071767458573651433750344a6e72416361533577674879437951634755454235684e42673d3d227d2c226d65223a7b226964223a22323334393036373635343532353a353540732e77686174736170702e6e6574222c226e616d65223a22f09d9488f09d94acf09d94b0f09d94b1f09d94a2f09d94aff09d94a6f09d94a0227d2c227369676e616c4964656e746974696573223a5b7b226964656e746966696572223a7b226e616d65223a22323334393036373635343532353a353540732e77686174736170702e6e6574222c226465766963654964223a307d2c226964656e7469666965724b6579223a7b2274797065223a22427566666572222c2264617461223a2242556b70762b557036656f417573706a3738776b675134435a6a62676f544d31334662497274743173654541227d7d5d2c22706c6174666f726d223a22736d6261222c226c6173744163636f756e7453796e6354696d657374616d70223a313730353037383033357d').trim(),
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
  jobdone: '🌸🌟 Yatta! Its all done',
  useradmin: 'Gomenasai! This command is exclusive for the Admin-sama only! 🉐✨',
  botadmin: 'Ah, this command can only be used when the Bot ascends to Admin mode! ✨🤖',
  botowner: 'This command is wielded only by the esteemed Owner-sama 😌👑',
  grouponly: 'This command can only be activated within the Group, gomenasai! 🏞️',
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
