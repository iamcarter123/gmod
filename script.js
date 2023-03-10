//------------- Cookiemanager -------------\\
function setCookie(name,value,days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function delCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

//------------- Username handling -------------\\
if(getCookie("username") == null) {
  $("#nousername").removeClass("visually-hidden")
  $("#usernamec").removeClass("visually-hidden")
  $("#submitusername").removeClass("visually-hidden")
}

$("#submitusername").on("click", function() {
  setCookie("username", $("#usernamec").val(), "1200");
  location.reload();
})

//------------- Template loader -------------\\

const username = getCookie("username");
const textarea = $("#textarea_changetemplate");
const input = $("#szoveg");
const copybutton = $("#copyinput");

$(document).ready(function() {
      $.ajax({
      url: "assets/api.php",
      type: "POST",
      data: {
        action: "gettemplate",
        username: username,
      },
      success: function(resp) {
        if(resp == "notemplate") {
          textarea.val("[" + "QUOTE" + "]" + "[" + "CENTER" + "]%message [" + "COLOR=rgb(147, 101, 184)]@%username[/COLOR][/CENTER" + "]" +"[/QUOTE]");
        } else {
          textarea.val(resp)
        }
      }
    })
});

//------------- Template change -------------\\

$("#save_templatechange").on("click", function() {
  $.ajax({
    url: "assets/api.php",
    type: "POST",
    data: {
      action: "changetemplate",
      username: username,
      template: $("#textarea_changetemplate").val(),
    },
    success: function(resp) {
      if(resp == 1) {
        alertify.success("Sikeresen m??dos??tottad a mint??t!");
      } else {
        alertify.error("Valami hiba t??rt??nt!");
      }
    }
  })
})

//------------- Components (Copy to clipboard, set button color) -------------\\

function ctc(text) {
    var sampleTextarea = document.createElement("textarea");
    document.body.appendChild(sampleTextarea);
    sampleTextarea.value = text; //save main text in it
    sampleTextarea.select(); //select textarea contenrs
    document.execCommand("copy");
    document.body.removeChild(sampleTextarea);
}

function sbc(button, color1, color2, aftertext) { //setbuttoncolor, ha r??nyom v??ltoztatta meg egy adott sz??nre
  $("button#" + button).removeClass(color1).addClass(color2).text("Kim??solva!")
  setTimeout(function () {
    $("button#" + button).removeClass(color2).addClass(color1).text(aftertext)
  }, 3000)
}

//------------- Buttons -------------\\

$("button#copyinput").on("click", function() {

  if(!input.val()) return alertify.error("Ne hagyd ??resen a mez??t!")

  $.ajax({
    url: "assets/api.php",
    type: "POST",
    data: {
      action: "gettemplate",
      username: username,
    },
    success: function(resp) {
      if(resp == "notemplate") {
        var resp = "[" + "QUOTE" + "]" + "[" + "CENTER" + "]%message [" + "COLOR=rgb(147, 101, 184)]@" + username + "[/COLOR][/CENTER" + "]" +"[/QUOTE]";
      }
      var def1 = resp.replace("%message", input.val())
      var def = def1.replace("%username", username)
      ctc(def)
      alertify.success("Sikeresen kim??soltad a GMOD textet.")
      sbc("copyinput", "btn-primary", "btn-success", "M??sol??s")
    }
  })

})

$("button#igname").on("click", function () {
  input.val("Profilodon jelenleg nem az aktu??lis IG neved van megadva, ennek jav??t??s??ra 12 ??r??d van.");
  copybutton.click();
})

$("button#noigname").on("click", function () {
  ctc("4.) A f??rumon k??telez?? felt??ntetni az IG nevedet. A megfelel?? r??szlegbe csak akkor ??rhatsz, ha az ahhoz tartoz?? karaktered neve meg van adva. Keress fel egy Glob??lis Moder??tort TS-en vagy Discordon. (V2) @" + username);
  sbc("noigname", "btn-primary", "btn-success", "Nincs IG n??v (banhoz)");
})

$("button#copyminta").on("click", function() {
  input.val("Cs????, k??rlek nyisd ??jra a topicot a megfelel?? mint??val, ezt z??rom/helyezem.\r\n[URL='https://forum.see-game.com/threads/minta-helyes-hasznalata.360/]'Seg??ts??g a minta haszn??lat??hoz[/URL]\r\n[URL='https://forum.see-game.com/threads/orfk-jelentkezes-minta.17627/']Minta[/URL]\r\n[SPOILER='Szab??lyzati pont']\r\n[SIZE=4][COLOR=rgb(97, 189, 109)][B]14.)[/B][/COLOR] [I]Ahol van MINTA ott k??teles vagy azt haszn??lni! A topik c??m??re is figyelj oda, azt is megfelel??en add meg! A BB k??dol??s szint??gy a minta r??sze, ennek hi??ny??ban is figyelmeztet??st lehet kapni!\r\n[COLOR=rgb(97, 189, 109)][B]B??ntet??s:[/B][/COLOR] [/I][COLOR=rgb(209, 72, 65)][B][I]30 [/I][/B][I][B]b??ntet??pont[/B][/I][B][I].[/I][/B][/COLOR][/SIZE][/SPOILER]");
  input.val("asasdasd")
  copybutton.click();
})

$("#rules").on("change", function() {
  input.val(rules[$(this).val()].rule + "\n"+rules[$(this).val()].penalty)
  copybutton.click();
})

//------------- Version controll -------------\\

fetch('ver.gmod')
  .then(response => response.text())
  .then(text => $("#ver").html(text))