const rules = {
    //ÁLTALÁNOS SZABÁLYOK
    "n1": {
        "rule": "1.) IC részlegben, ha OOC dolgot írsz tartalmaznia kell a (( )) jelet!",
      "penalty": "Büntetés: 20 büntetőpont",
    },
  
    "n2": {
      "rule": "2.) Tilos a dupla, tripla hozzászólás!",
      "penalty": "Büntetés: 40 büntetőpont.",
    },
  
    "n3": {
      "rule": "A játékostársaknak kötelező megadni a tiszteletet. Tilos a felhasználók sértegetése, zaklatása, továbbá a frakciók rossz színben való feltüntetése. (Alpári, fenyegető, agresszív, trágár, sértő hangnemű hozzászólások)",
      "penalty": "Büntetés: 40-100 büntetőpont + hozzászólás törlése.",
    },
  
    "n4": {
      "rule": "4.) Tilos a politikai, vallási érzelmek, etnikai nézetek, nemi hovatartozással és rasszizmussal kapcsolatos dolgok népszerűsítése, minősítése.",
      "penalty": "Büntetés: 100 büntetőpont - akár örökös kitiltás",
    },
  
    "n5": {
      "rule": "5.) Tilos pornográf/felnőtt kategóriás képek, videók elhelyezése.\n↳ (Felnőtt tartalomhoz, kivégzések és egyéb horrorisztikus dolgok kapcsolódnak. Amennyiben ilyet tüntetsz fel mindenképp tedd spoilerbe, és jelezd, hogy 18+-os tartalom!)",
      "penalty": "Büntetés: 100 büntetőpont - akár örökös kitiltás.",
    },
    
    "n6": {
      "rule": "6.) Tilos más szervert szidni, hirdetni!",
      "penalty": "Büntetés: Örökös kitiltás.",
    },
  
    "n7": {
      "rule": "7.) A felhasználók személyes jogainak sértése tilos!",
      "penalty": "Büntetés: Örökös kitiltás.",
    },
  
    "n8": {
      "rule": "8.) A mondandód mindig érthetően fogalmazd meg (kulturált, kerek mondatokban), ne utcai, szleng stílusban, és legyen közérthető!",
      "penalty": "Büntetés: 30 büntetőpont + iromány szerkesztése.",
    },
  
    "n9": {
      "rule": "9.) A hozzászólásodnak legyen értelme, ha nincs és nem kapcsolódik a témához OFF-nak fogjuk tekinteni!",
      "penalty": "Büntetés: 50 büntetőpont.",
    },
  
    "n10": {
      "rule": "10.) Kötelező az egy szónál hosszabb hozzászólás!",
      "penalty": "Büntetés: 30 büntetőpont.",
    },
  
    "n11": {
      "rule": "11.) Ahol MINTA található, ott köteles vagy azt használni! A topik címére is figyelj oda, azt is megfelelően add meg!",
      "penalty": "Büntetés: 30 büntetőpont.",
    },
  
    "n12": {
      "rule": "12.) Hozzászólásba TILOS csak képet, videót berakni\n↳ (Kivételt képeznek az élménykép részlegek)",
      "penalty": "Büntetés: 40 büntetőpont.",
    },
  
    "n13": {
      "rule": "13.) TILOS fölöslegesen és értelmetlenül bejelenteni egy hozzászólást.\n↳ (Azért mert egy vicces/számodra nem tetsző reakciót kaptál az nem elég ok, hogy jelentsd a felhasználót!)",
      "penalty": "Büntetés: 40 büntetőpont.",
    },
  
    "n14": {
      "rule": "14.) TILOS a hirdető részlegben fegyvert és illegális tárgyakat hirdetni.",
      "penalty": "Büntetés: 50 büntetőpont + téma zárása.",
    },
  
    "n15": {
      "rule": "15.) Frakciók jelentkezési lapjához/jelentéséhez csak az adott frakció tagjai szólhatnak hozzá.",
      "penalty": "Büntetés: 30 büntetőpont.",
    },
  
    "n16": {
      "rule": "16.) Tilos a hozzászólások vadászata.\n↳ (Rövid időn belül sok hozzászólás szerzése, általában a legtöbbjük értelmetlen, levehető belőle, hogy az illető nem olvasta el a témát.)",
      "penalty": "Büntetés: 100 büntetőpont. Sorozatos szabályszegés esetén az abból keletkezett hozzászólások száma levonásra kerül.",
    },
  
    "n17": {
      "rule": "17.) Tilos az OOC kereskedelem megkísérlése/véghezvitele!",
      "penalty": "Büntetés: Örökös kitiltás.",
    },
  
    "n18": {
      "rule": "18.) Tilos több felhasználói fiókot regisztrálni!\n↳ (Elfelejtett jelszó esetén, egyeztess egy globális moderátorral!)",
      "penalty": "Büntetés: Örökös kitiltás.",
    },
  
    "n19": {
      "rule": "19.) A fórum teljes területén tilos a spamelés. (Tilos ötnél több hangulatjel használata egy hozzászólásban, de az iromány hossza felülbírálhatja ezt!)",
      "penalty": "Büntetés: 20 büntetőpont, téma szerkesztés.",
    },
  
    "n20": {
      "rule": "20.) Tilos a kábítószer, szerencsejáték, és más tiltott szerek használatának népszerűsítése.",
      "penalty": "Büntetés: 50 büntetőpont - örökös kitiltás.",
    },
    "n21": {
      "rule": "21.) Tilos pornográf, illetve egyéb felnőtt kategóriás képek, videók elhelyezése!\n↳ (Felnőtt tartalomhoz, kivégzések és egyéb horrorisztikus dolgok kapcsolódnak. Amennyiben ilyet tüntetsz fel mindenképp tedd spoilerbe, és jelezd, hogy 18+-os tartalom!)",
      "penalty": "Büntetés: 100 büntetőpont - örökös kitiltás.",
    },
  
    "n22": {
      "rule": "22.) A fórumon kötelező feltüntetni az IG nevedet. Legalább egy szerveren lévő karaktered nevét kell feltüntenti a profilodon. A megfelelő részlegbe csak akkor írhatsz, ha az ahhoz tartozó karaktered neve meg van adva.\n↳ (Pl: Ha V3 részlegbe akarsz írni akkor köteles vagy a V3 karakterneved feltüntetni.)",
      "penalty": "Örökös kitiltás míg nincs feltüntetve a neved, keress fel egy globális moderátort!",
    },
    "n23": {
      "rule": "23.) A felhasználói profil megjegyzéseknél kötelező az egy szónál hosszabb hozzászólás!",
      "penalty": "Büntetés: 30 büntetőpont.",
    },
    "n24": {
      "rule": "24.) A fórum profilképed, borítóképed nem tartalmazhat +18-as tartalmat, illetve nem használható játékosok lejáratására.",
      "penalty": "1 hét kitiltás +  profilkép/borítókép eltávolítása.",
    },
    "n25": {
      "rule": "25.) Bizonyíték hiányában ne nyiss panaszt!",
      "penalty": "Felszólítás bizonyíték csatolására, ha ez nem történik meg 24 órán belül, 40 büntetőpont, téma zárása.",
    },
    "n26": {
      "rule": "26.) A bizonyíték képet tilos szerkeszteni, azt eredeti állapotban kell beadni!",
      "penalty": "Felszólítás bizonyíték csatolására, ha ez nem történik meg 24 órán belül, 40 büntetőpont, téma zárása.",
    },
    "n27": {
      "rule": "27.) A panaszhoz kizárólag a bíráló szerver adminisztrátor, panasz tevő, vádlott írhat hozzá!\n↳ (Leader, szemtanú, TS-en jelenlévők, IC családtag nem tartozik bele a jelenlévő fogalmába, csak, ha jelen voltál és meg vagy említve a panaszban, illetve ha admin kéri, hogy írj hozzá.)",
      "penalty": "Büntetés: 100 büntetőpont.",
    },
    "n28": {
      "rule": "28.)  Unban kérelemhez kizárólag a bíráló adminisztrátor, illetve magát a kérelmet megíró személy szólhat hozzá!\n↳ (Leader, haver, TS-en jelenlévők, IC családtag nem szólhat hozzá az unban kérelemhez, kivéve ha admin kéri!)",
      "penalty": "Büntetés: 100 büntetőpont.",
    },
    "n29": {
      "rule": "29.)   Hetente csak egy UB (unban) kérelmet lehet írni.\n↳ (Az unban kérelem lezárásától számított egy hét múlva nyitható új kérelem.)",
      "penalty": "Büntetés: 7-14 nap kitiltás.",
    }
}