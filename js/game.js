var TIME = new Date().getTime();
var linkCSS = "https://wormateserkanconnect.github.io/DV/custom.css?v=" + TIME;

// دالة لتحميل الأنماط
function loadStylesheet(url) {
    return new Promise((resolve, reject) => {
        var linkElement = document.createElement("link");
        linkElement.rel = "stylesheet";
        linkElement.type = "text/css";
        linkElement.href = url;
        linkElement.onload = resolve;
        linkElement.onerror = reject;
        document.head.appendChild(linkElement);
    });
}

// دالة لتحميل السكربتات
function loadScript(url, defer = true) {
    return new Promise((resolve, reject) => {
        var scriptElement = document.createElement("script");
        scriptElement.type = "text/javascript";
        scriptElement.src = url;
        scriptElement.defer = defer;
        scriptElement.onload = resolve;
        scriptElement.onerror = reject;
        document.head.appendChild(scriptElement);
    });
}

// تحميل الأنماط
loadStylesheet(linkCSS)
    .then(() => {
        return loadStylesheet("https://www.baddawi.com/FDZ/fonts/font.css");
    })
    .then(() => {
        return loadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js");
    })
    .then(() => {
        return loadStylesheet("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
    })
    .catch(error => {
        console.error("Error loading scripts or stylesheets:", error.message);
    });

// تعريف نوع البيانات
var _typeof = (function() {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        return function(obj) {
            return typeof obj;
        };
    } else {
        return function(obj) {
            if (obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype) {
                return "symbol";
            } else {
                return typeof obj;
            }
        };
    }
})();

// متغير للتحكم في تفعيل أو تعطيل شاشة التحميل
let isLoadingEnabled = true; // قم بتغيير هذه القيمة إلى false لتعطيل شاشة التحميل

// إضافة المحتوى داخل الصفحة بعد تحميل الأنماط
Promise.all([
    loadStylesheet(linkCSS),
    loadStylesheet("https://www.baddawi.com/FDZ/fonts/font.css"),
    loadStylesheet("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css")
]).then(() => {
    if (isLoadingEnabled) {
        document.documentElement.insertAdjacentHTML("beforeend", `
            <div class="fixed-background" id="loading-screen">
                <div class="loading-background"></div>
                <img src="https://i.imgur.com/sdNj43J.png" alt="server logo" class="logo">
                
                ${Array.from({ length: 12 }).map((_, i) => {
                    const angle = i / 12 * (Math.PI * 2);
                    const x = Math.cos(angle) * 120;
                    const y = Math.sin(angle) * 120;
                    return `<i class="fa-solid fa-heart heart" style="transform: translate(${x}px, ${y}px);"></i>`;
                }).join("")}

                <div class="progress-bar-container">
                    <div class="progress-bar" id="progress-bar"></div>
                </div>
            </div>
        `);
        
        window.onload = function () {
            document.getElementById("progress-bar").style.width = "100%";
            setTimeout(() => {
                document.getElementById("loading-screen").style.opacity = "0";
                setTimeout(() => {
                    document.getElementById("loading-screen").remove();
                }, 500);
            }, 6000);
        };
    }
});


var SITE_XTHOST = "https://wormateserkanconnect.github.io/DV";
window.detectLog = null;
const _wrmxt = {
  BETAisSkinCustom(skin) {
    var regex = /[a-zA-Z]/;
    return typeof skin === "string" && regex.test(skin);
  },
  testSkinCustom: function (skin) {
    if (_wrmxt.BETAisSkinCustom(skin)) {
      return 34 || 33;
    } else {
      return skin;
    }
  },
  testSkinMod: function (modValue) {
    return modValue >= 399 && modValue < 999;
  },
  testWear: function (wearValue) {
    return wearValue >= 399 && wearValue < 999;
  },
  isNumberValid: function (numberInput) {
    return numberInput !== "" && numberInput !== null && numberInput !== undefined && !isNaN(numberInput);
  },
  validInput: function (inputValue) {
    if (!_wrmxt.testSkinMod(inputValue) && !_wrmxt.BETAisSkinCustom(inputValue)) {
      return inputValue;
    }
    try {
      let skinReplaceValue = $("#inputReplaceSkin").val();
      return encodeURI(_wrmxt.isNumberValid(skinReplaceValue) ? skinReplaceValue : 35);
    } catch (error) {
      return encodeURI(35);
    }
  },
  aload: false,
  aId: 0
};
var inputReplaceSkin = localStorage.getItem("inputReplaceSkin");
var PilotoAutomatico = null;
var isPlaying = false;
var pwrups = {};
window.keyMove = 81;
var theoEvents = {
  eventoPrincipal: null,
  joystick: {
    positionMode: "L",
    checked: true,
    size: 90,
    mode: "dynamic",
    position: {
      left: "110px",
      bottom: "110px"
    },
    color: "#FF3B3B",
    pxy: 110
  }
};
var theoKzObjects = {
  FB_UserID: "",
  smoothCamera: 0.5,
  eat_animation: 0.0025,
  flag: "https://i.imgur.com/EkbSd65.png",
  PortionSize: localStorage.PotenciadorSize || 2,
  PortionAura: localStorage.PotenciadorAura || 1.2,
  PortionTransparent: 0.8,
  FoodTransparent: 0.3,
  ModeStremer: false,
  ModeStremerbatop: false,
  ModeStremermuiten: false,
  ModeStremeremoj: false,
  ModeStremerheadshot: false,
  ModeStremersaveheadshot: false,
  arrow: false,
  KeyCodeRespawn: localStorage.KeyRespawn || 82,
  KeyCodeAutoMov: localStorage.KeyAutoMov || window.keyMove,
  AbilityZ: false,
  FoodShadow: localStorage.ComidaShadow || 2,
  FoodSize: localStorage.ComidaSize || 2,
  headshot: 0,
  visibleSkin: [],
  pL: [],
  gamePad: theoEvents.joystick,
  mobile: false,
  loading: false,
  kill: 0,
  totalKills: 0,
  totalHeadshots: 0,
  adblock: false,
  CLIENTE_ADMIN: 1,
  CLIENTE_ACTIVO: 3,
  CLIENTE_INACTIVO: 4
};
saveGameLocal = localStorage.getItem("SaveGameXT");
if (saveGameLocal && saveGameLocal !== "null") {
  let t = JSON.parse(saveGameLocal);
  for (let e in t) {
    theoKzObjects[e] = t[e];
  }
}
theoKzObjects.loading = true;

const PhoneChecked = function () {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const mobile = /android|iphone|ipad|ipod|blackberry|iemobile|windows phone|opera mini|mobile/i.test(userAgent);
  theoKzObjects.mobile = mobile;
  return mobile;
};

const RechekingPhone = function () {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /android|iphone|ipad|ipod|blackberry|iemobile|windows phone|opera mini|mobile/i.test(userAgent);
};

const loadJoy = function (gamePadOptions) {
  let joystickInstance;
  try {
    console.log(gamePadOptions);
    if (!theoKzObjects.gamePad) {
      theoKzObjects.gamePad = theoEvents.joystick;
    }
    if (RechekingPhone() && (gamePadOptions || theoKzObjects.gamePad.checked)) {
      joystickInstance = nipplejs.create(theoKzObjects.gamePad);
      joystickInstance.on("move", function (event, data) {
        theoEvents.eventoPrincipal.sk = data.angle.radian <= Math.PI ? data.angle.radian * -1 : Math.PI - (data.angle.radian - Math.PI);
        console.log(data);
      });
    }
    return joystickInstance;
  } catch (error) {
    console.log(error);
  }
};
let clientes = {
  clientesVencidos: [],
  clientesActivos: []
};
let servers = {
  Api_listServer: []
};
async function loadUsers() {
  await fetch("https://www.baddawi.com/FDZ/api/users.php").then(response => response.json()).then(data => {
    if (data.success) {
      let usersList = data.Users;
      clientes.clientesActivos = usersList.filter(user => {
        return user.cliente_ID;
      });
    } else {
      clientes = {
        clientesVencidos: [],
        clientesActivos: []
      };
      alert("An error occurred while loading clients");
    }
  });
}
async function loadServers() {
  await fetch("https://www.baddawi.com/FDZ/api/server.php").then(response => response.json()).then(data => {
    if (data.success) {
      let serversList = data.servers;
      servers.Api_listServer = serversList.filter(server => {
        return server.serverUrl;
      });
    } else {
      servers = {
        Api_listServer: []
      };
      alert("An error occurred while loading the servers");
    }
  });
}
loadUsers();
loadServers();
$(".store-view-cont").append("<div id=\"idReplaceSkin\"></div>");
var StoreSkinID = $("#idReplaceSkin");
const ctx = {
  fontStyle: {
    name: new PIXI.TextStyle({
      fill: "#FFFF00",
      fontSize: 11,
      lineJoin: "round",
      stroke: "#EFFA45",
      fontFamily: "HelveticaNeueLT",
      fontWeight: "700"
    }),
    blanco: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 12,
      lineJoin: "round",
      stroke: "#FFF",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "HelveticaNeueLT",
      fontWeight: "700",
      wordWrap: true
    }),
    morado: new PIXI.TextStyle({
      align: "center",
      fill: "#FFFF00",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "HelveticaNeueLT",
      fontWeight: "700",
      wordWrap: true
    }),
    morado1: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "HelveticaNeueLT",
      fontWeight: "700",
      wordWrap: true
    }),
    amarillo: new PIXI.TextStyle({
      align: "center",
      fill: "#FFFF00",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "HelveticaNeueLT",
      fontWeight: "700",
      wordWrap: true
    }),
    amarillo1: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "HelveticaNeueLT",
      fontWeight: "700",
      wordWrap: true
    }),
    anheadshot: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 0,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "HelveticaNeueLT",
      fontWeight: "700",
      wordWrap: true
    }),
    keysColor: new PIXI.TextStyle({
      align: "center",
      fill: "#fff009",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#fff009",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontWeight: "700",
      fontFamily: "HelveticaNeueLT",
      wordWrap: true
    })
  }
};

ctx.clock = PIXI.Sprite.from("https://i.imgur.com/v6szE9c.png");
ctx.clock.width = 100;
ctx.clock.height = 100;
ctx.clock.x = -50;
ctx.clock.y = -50;
ctx.value_server = new PIXI.Text("WFC", ctx.fontStyle.name);
ctx.value_server.x = 25;
ctx.value_server.y = 0;
ctx.label_hs = new PIXI.Text("HS", ctx.fontStyle.amarillo);
ctx.value1_hs = new PIXI.Text("0", ctx.fontStyle.amarillo);
ctx.label_kill = new PIXI.Text("KL", ctx.fontStyle.morado);
ctx.value1_kill = new PIXI.Text("0", ctx.fontStyle.morado);
if (theoKzObjects.ModeStremersaveheadshot) {
  ctx.value2_hs = new PIXI.Text("", ctx.fontStyle.amarillo1);
  ctx.value2_kill = new PIXI.Text("", ctx.fontStyle.morado1);
} else {
  ctx.value2_hs = new PIXI.Text("", ctx.fontStyle.amarillo1);
  ctx.value2_kill = new PIXI.Text("", ctx.fontStyle.morado1);
}

ctx.label_hs.x = 65;
ctx.label_hs.y = 100;
ctx.label_kill.x = 15;
ctx.label_kill.y = 100;
ctx.value1_hs.x = 65;
ctx.value1_hs.y = 116;
ctx.value1_kill.x = 15;
ctx.value1_kill.y = 116;
ctx.value2_hs.x = 65;
ctx.value2_hs.y = 133;
ctx.value2_kill.x = 15;
ctx.value2_kill.y = 133;
ctx.containerCountInfo = new PIXI.Container();
ctx.containerCountInfo.x = -45;
ctx.containerCountInfo.y = -52;
ctx.containerCountInfo.addChild(ctx.value_server);
ctx.containerCountInfo.addChild(ctx.label_hs);
ctx.containerCountInfo.addChild(ctx.value1_hs);
ctx.containerCountInfo.addChild(ctx.value2_hs);
ctx.containerCountInfo.addChild(ctx.label_kill);
ctx.containerCountInfo.addChild(ctx.value1_kill);
ctx.containerCountInfo.addChild(ctx.value2_kill);
ctx.imgServerbase = PIXI.Texture.from("https://i.imgur.com/BpjEbZJ.png");
ctx.borderurl = null;
ctx.onclickServer = PIXI.Texture.from(theoKzObjects.flag); // تحديث إلى PIXI.Texture.from
ctx.containerImgS = new PIXI.Sprite(ctx.imgServerbase);
ctx.containerImgS.anchor.set(0.5);
ctx.containerImgS.x = 0;
ctx.containerImgS.y = 8;
ctx.containerImgS.width = 20;
ctx.containerImgS.height = 13;
ctx.borderImg = new PIXI.Sprite(ctx.borderurl);
ctx.borderImg.anchor.set(0.5);
ctx.borderImg.x = -2;
ctx.borderImg.y = 78;
ctx.borderImg.width = 110;
ctx.borderImg.height = 60;
ctx.setServer = function (serverName) {
  ctx.value_server.text = serverName || "WFC";
};

ctx.setCountGame = function (kills, playerScore, headshotCount, playerHeadshotCount) {
 "use strict";
  ctx.value1_hs.text = playerScore;
  ctx.value1_kill.text = kills;
  if (theoKzObjects.ModeStremersaveheadshot) {
    ctx.value2_hs.text = playerHeadshotCount;
    ctx.value2_kill.text = headshotCount;
  }
};

var _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (input) {
  return typeof input;
} : function (value) {
  if (value && typeof Symbol == "function" && value.constructor === Symbol && value !== Symbol.prototype) {
    return "symbol";
  } else {
    return typeof value;
  }
};
var GoogleAuth;
(function () {
  try {
    console.log(function (inputString, replacements) {
      for (var index = 0; index < replacements.length; index += 2) {
        inputString = inputString.replaceAll(replacements[index], replacements[index + 1]);
      }
      return inputString;
    }("N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+. .+osYYyso+-.osyQSs6662NyW.63 yW:`+QQ+ -Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63 yW:+Ss:.-+Ss:`M-3.M` .YyySYys32`QSs.2``-Hh-32sH-66 `..3 `..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3 oS/`Sso`3 ohy6oH.3..6 -Hh. -+Qs/ N /W+62`Wo:Ss32Sso.MMmd+.3syy` .-` :Y+3+Ss//Q+3 +H`32sHhsyHho6-Hh`:S+--+S+N2+W` `+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6 Hh`So3`SsN3oHhs-sHhsoW/ `Sso:-:Q.hM-2ymmh. /Yo`3 sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3 +Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3 oYy:Q/3 `Q. -W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3 ohdh/`+So:3 .+S/`/oo:6.+s+` `+yyo`3 +yQYs: +oo..shy. -+oSo/. NN", ["W", "hhhh", "Q", "ssss", "M", "mmm", "Y", "yyy", "H", "hh", "S", "ss", "6", "      ", "3", "   ", "2", "  ", "N", "\n"]));
  } catch (error) {}
})();
window.addEventListener("load", function () {
  function checkBrowserCompatibility() {
    (function (window, document, Modernizr) {
      function isTypeOf(variable, type) {
        return (variable === undefined ? "undefined" : _typeof(variable)) === type;
      }
      function createElement() {
        if (typeof document.createElement != "function") {
          return document.createElement(arguments[0]);
        } else if (isSVG) {
          return document.createElementNS.call(document, "http://www.w3.org/2000/svg", arguments[0]);
        } else {
          return document.createElement.apply(document, arguments);
        }
      }
      var featureTests = [];
      var featureList = [];
      var Modernizr = {
        _version: "3.3.1",
        _config: {
          classPrefix: "",
          enableClasses: true,
          enableJSClass: true,
          usePrefixes: true
        },
        _q: [],
        on: function (testName, callback) {
          var self = this;
          setTimeout(function () {
            callback(self[testName]);
          }, 0);
        },
        addTest: function (testName, testFn, options) {
          featureList.push({
            name: testName,
            fn: testFn,
            options: options
          });
        },
        addAsyncTest: function (testFn) {
          featureList.push({
            name: null,
            fn: testFn
          });
        }
      };
      function ModernizrProto() {}
      ModernizrProto.prototype = Modernizr;
      ModernizrProto = new ModernizrProto();
      var supportsWebSocket = false;
      try {
        supportsWebSocket = "WebSocket" in window && window.WebSocket.CLOSING === 2;
      } catch (error) {}
      ModernizrProto.addTest("websockets", supportsWebSocket);
      var documentElement = document.documentElement;
      var isSVG = documentElement.nodeName.toLowerCase() === "svg";
      ModernizrProto.addTest("canvas", function () {
        var canvas = createElement("canvas");
        return !!canvas.getContext && !!canvas.getContext("2d");
      });
      ModernizrProto.addTest("canvastext", function () {
        return ModernizrProto.canvas !== false && typeof createElement("canvas").getContext("2d").fillText == "function";
      });
      (function () {
        var testNames;
        var feature;
        var testName;
        var testFn;
        var count;
        var testCase;
        var splitCase;
        for (var i in featureList) {
          if (featureList.hasOwnProperty(i)) {
            testNames = [];
            feature = featureList[i];
            if (feature.name && (testNames.push(feature.name.toLowerCase()), feature.options && feature.options.aliases && feature.options.aliases.length)) {
              for (testName = 0; testName < feature.options.aliases.length; testName++) {
                testNames.push(feature.options.aliases[testName].toLowerCase());
              }
            }
            testFn = isTypeOf(feature.fn, "function") ? feature.fn() : feature.fn;
            count = 0;
            for (; count < testNames.length; count++) {
              testCase = testNames[count];
              splitCase = testCase.split(".");
              if (splitCase.length === 1) {
                ModernizrProto[splitCase[0]] = testFn;
              } else {
          if (!!ModernizrProto[splitCase[0]] && !(ModernizrProto[splitCase[0]] instanceof Boolean)) {
            // بدلاً من استخدام new Boolean، نستخدم القيم البسيطة
            ModernizrProto[splitCase[0]] = Boolean(ModernizrProto[splitCase[0]]);
                }
                ModernizrProto[splitCase[0]][splitCase[1]] = testFn;
              }
              featureTests.push((testFn ? "" : "no-") + splitCase.join("-"));
            }
          }
        }
      })();
      (function (tests) {
        var className = documentElement.className;
        var classPrefix = ModernizrProto._config.classPrefix || "";
        if (isSVG) {
          className = className.baseVal;
        }
        if (ModernizrProto._config.enableJSClass) {
          var noJsClass = new RegExp("(^|\\s)" + classPrefix + "no-js(\\s|$)");
          className = className.replace(noJsClass, "$1" + classPrefix + "js$2");
        }
        if (ModernizrProto._config.enableClasses) {
          className += " " + classPrefix + tests.join(" " + classPrefix);
          if (isSVG) {
            documentElement.className.baseVal = className;
          } else {
            documentElement.className = className;
          }
        }
      })(featureTests);
      delete Modernizr.addTest;
      delete Modernizr.addAsyncTest;
      for (var i = 0; i < ModernizrProto._q.length; i++) {
        ModernizrProto._q[i]();
      }
      window.Modernizr = ModernizrProto;
    })(window, document);
    return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
  }
  function updatePowerUps(powerUpId, powerUpType, value) {
    const powerUpValues = [38, 38, 38, 120, 38, 25, 38];
    const colors = ["#FFD500", "#FFC75A", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", "#ff0999"];
    let adjustedValue = powerUpValues[powerUpType] - parseInt((value == 0.99 ? 1 : value) * powerUpValues[powerUpType] / 1);
    const textStyle = new PIXI.TextStyle({
      align: "center",
      fill: colors[powerUpType],
      fontSize: 25,
      lineJoin: "round",
      whiteSpace: "normal",
      wordWrap: true,
      fontFamily: "HelveticaNeueLT",
      fontWeight: "700"
    });
    let powerUpKey = "pwr_clock" + powerUpType;
    if (!pwrups[powerUpKey] && powerUpValues[powerUpType] === adjustedValue) {
      pwrups[powerUpKey] = new PIXI.Text(adjustedValue, textStyle);
      pwrups[powerUpKey].y = 61;
      powerUpId.Tf[powerUpType].addChild(pwrups[powerUpKey]);
    }
    if (pwrups[powerUpKey]) {
      pwrups[powerUpKey].x = adjustedValue >= 100 ? 11 : adjustedValue >= 10 ? 18 : 26;
      pwrups[powerUpKey].text = adjustedValue;
      if (adjustedValue === 0) {
        delete pwrups[powerUpKey];
      }
    }
  }
  document.getElementById("game-wrap").style.display = "block";
  if (!checkBrowserCompatibility()) {
    document.getElementById("error-view").style.display = "block";
    return;
  }
  (function () {
    function initializeApp() {
            window.anApp = appInstance; // إسناد
      return window.anApp; // إرجاع
    }
    function getCookie(cookieName) {
      const cookiePrefix = cookieName + "=";
      const cookiesArray = document.cookie.split(";");
      for (let i = 0; i < cookiesArray.length; i++) {
        let cookie = cookiesArray[i];
        while (cookie.charAt(0) === " ") {
          cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookiePrefix) === 0) {
          return cookie.substring(cookiePrefix.length, cookie.length);
        }
      }
      return "";
    }
    function setCookie(name, value, days) {
      var expiryDate = new Date();
      expiryDate.setTime(expiryDate.getTime() + days * 86400000);
      var expiresString = "expires=" + expiryDate.toUTCString();
      document.cookie = name + "=" + value + "; " + expiresString + "; path=/";
    }
    function localizeMessage(key) {
      return window.I18N_MESSAGES[key];
    }
    function getLocalizedText(messages) {
      if (messages[languageKey]) {
        return messages[languageKey];
      } else if (messages.en) {
        return messages.en;
      } else {
        return messages.x;
      }
    }
    function formatTime(seconds) {
      var secondsString = (Math.floor(seconds) % 60).toString();
      var minutesString = (Math.floor(seconds / 60) % 60).toString();
      var hoursString = (Math.floor(seconds / 3600) % 24).toString();
      var daysString = Math.floor(seconds / 86400).toString();
      var daysLabel = localizeMessage("util.time.days");
      var hoursLabel = localizeMessage("util.time.hours");
      var minutesLabel = localizeMessage("util.time.min");
      var secondsLabel = localizeMessage("util.time.sec");
      if (daysString > 0) {
        return daysString + " " + daysLabel + " " + hoursString + " " + hoursLabel + " " + minutesString + " " + minutesLabel + " " + secondsString + " " + secondsLabel;
      } else if (hoursString > 0) {
        return hoursString + " " + hoursLabel + " " + minutesString + " " + minutesLabel + " " + secondsString + " " + secondsLabel;
      } else if (minutesString > 0) {
        return minutesString + " " + minutesLabel + " " + secondsString + " " + secondsLabel;
      } else {
        return secondsString + " " + secondsLabel;
      }
    }
    function replaceHrefWithTarget(link) {
      if (link.includes("href")) {
        return link.replaceAll("href", "target=\"_black\" href");
      } else {
        return link;
      }
    }
    function loadScript(src, id, callback) {
      var script = document.createElement("script");
      var loaded = true;
      if (id) {
        script.id = id;
      }
      script.async = "async";
      script.type = "text/javascript";
      script.src = src;
      if (callback) {
        script.onload = script.onreadystatechange = function () {
          loaded = false;
          try {
            callback();
          } catch (error) {
            console.log(error);
          }
          script.onload = script.onreadystatechange = null;
        };
      }
      (document.head || document.getElementsByTagName("head")[0]).appendChild(script);
    }
    function inheritPrototype(parent, child) {
      child.prototype = Object.create(parent.prototype);
      child.prototype.constructor = child;
      child.parent = parent;
      return child;
    }
    function normalizeIndex(index) {
      index %= arrayLength;
      if (index < 0) {
        return index + arrayLength;
      } else {
        return index;
      }
    }
    function clamp(value, min, max) {
      return constrain(max, value, min);
    }
    function constrain(value, min, max) {
      if (value > max) {
        return max;
      } else if (value < min) {
        return min;
      } else if (Number.isFinite(value)) {
        return value;
      } else {
        return (min + max) * 0.5;
      }
    }
    function lerp(start, end, delta, t) {
      if (end > start) {
        return Math.min(end, start + delta * t);
      } else {
        return Math.max(end, start - delta * t);
      }
    }
    function exponentialDecay(start, end, duration, time, totalDuration) {
      return end + (start - end) * Math.pow(1 - time, duration / totalDuration);
    }
    function mix(valueA, valueB, alpha) {
      return valueA * (1 - alpha) + valueB * alpha;
    }
    function arraySplice(array, startIndex, deleteCount, items) {
      var actualStart = deleteCount;
      var actualDeleteCount = startIndex;
      var endIndex = startIndex + items;
      if (array == null) {
        throw new TypeError("this is null or not defined");
      }
      var length = array.length >>> 0;
      var relativeStart = actualStart >> 0;
      var effectiveStart = relativeStart < 0 ? Math.max(length + relativeStart, 0) : Math.min(relativeStart, length);
      var relativeDeleteCount = actualDeleteCount >> 0;
      var effectiveDeleteCount = relativeDeleteCount < 0 ? Math.max(length + relativeDeleteCount, 0) : Math.min(relativeDeleteCount, length);
      var newLength = endIndex === undefined ? length : endIndex >> 0;
      var effectiveNewLength = newLength < 0 ? Math.max(length + newLength, 0) : Math.min(newLength, length);
      var remainingLength = Math.min(effectiveNewLength - effectiveDeleteCount, length - effectiveStart);
      var step = 1;
      for (effectiveDeleteCount < effectiveStart && effectiveStart < effectiveDeleteCount + remainingLength && (step = -1, effectiveDeleteCount += remainingLength - 1, effectiveStart += remainingLength - 1); remainingLength > 0;) {
        if (effectiveDeleteCount in array) {
          array[effectiveStart] = array[effectiveDeleteCount];
        } else {
          delete array[effectiveStart];
        }
        effectiveDeleteCount += step;
        effectiveStart += step;
        remainingLength--;
      }
      return array;
    }
    function getCanvasContext(canvas) {
      return canvas.getContext("2d");
    }
    function removeFromParent(element) {
      if (element.parent != null) {
        element.parent.removeChild(element);
      }
    }
    function randomElement(array) {
      return array[parseInt(Math.random() * array.length)];
    }
    function generateRandomString() {
      return Math.random().toString(36).substring(2, 15);
    }
    function hslColor(hue, saturation, lightness) {
      var adjustedSaturation = (1 - Math.abs(lightness * 2 - 1)) * saturation;
      var adjustedLightness = adjustedSaturation * (1 - Math.abs(hue / 60 % 2 - 1));
      var middleLightness = lightness - adjustedSaturation / 2;
      if (hue >= 0 && hue < 60) {
        return [middleLightness + adjustedSaturation, middleLightness + adjustedLightness, middleLightness + 0];
      } else if (hue >= 60 && hue < 120) {
        return [middleLightness + adjustedLightness, middleLightness + adjustedSaturation, middleLightness + 0];
      } else if (hue >= 120 && hue < 180) {
        return [middleLightness + 0, middleLightness + adjustedSaturation, middleLightness + adjustedLightness];
      } else if (hue >= 180 && hue < 240) {
        return [middleLightness + 0, middleLightness + adjustedLightness, middleLightness + adjustedSaturation];
      } else if (hue >= 240 && hue < 300) {
        return [middleLightness + adjustedLightness, middleLightness + 0, middleLightness + adjustedSaturation];
      } else {
        return [middleLightness + adjustedSaturation, middleLightness + 0, middleLightness + adjustedLightness];
      }
    }
    function initializeAdBlocker() {
      function displayAdBlockerMessages() {
        let adBlockStatus = theoKzObjects.adblock ? 1 : 5;
        $("#adbl-1").text(localizeMessage("index.game.antiadblocker.msg1"));
        $("#adbl-2").text(localizeMessage("index.game.antiadblocker.msg2"));
        $("#adbl-3").text(localizeMessage("index.game.antiadblocker.msg3"));
        $("#adbl-4").text(localizeMessage("index.game.antiadblocker.msg4").replace("{0}", 10));
        $("#adbl-continue span").text(localizeMessage("index.game.antiadblocker.continue"));
        $("#adbl-continue").hide();
        $("#" + adBlockContainerId).fadeIn(500);
        var remainingTime = adBlockStatus;
        for (var i = 0; i < adBlockStatus; i++) {
          setTimeout(function () {
            remainingTime--;
            $("#adbl-4").text(localizeMessage("index.game.antiadblocker.msg4").replace("{0}", remainingTime));
            if (remainingTime === 0) {
              console.log("aipAABC");
              try {
                ga("send", "event", "antiadblocker", window.runtimeHash + "_complete");
              } catch (error) {}
              $("#adbl-continue").fadeIn(200);
            }
          }, (i + 1) * 1000);
        }
      }
      var adPlayerInitialized = false;
      function adPlayerCallback() {}
      var adBlockController = {};
      var adBlockContainerId = "JDHnkHtYwyXyVgG9";
      $("#adbl-continue").click(function () {
        $("#" + adBlockContainerId).fadeOut(500);
        adPlayerCallback(false);
      });
      adBlockController.a = function (callback) {
        adPlayerCallback = callback;
        if (!adPlayerInitialized) {
          try {
            aiptag.cmd.player.push(function () {
              aiptag.adplayer = new aipPlayer({
                AD_WIDTH: 960,
                AD_HEIGHT: 540,
                AD_FULLSCREEN: true,
                AD_CENTERPLAYER: false,
                LOADING_TEXT: "loading advertisement",
                PREROLL_ELEM: function () {
                  return document.getElementById("1eaom01c3pxu9wd3");
                },
                AIP_COMPLETE: function (data) {
                  console.log("AdPlayer Complete");
                  adPlayerCallback(true);
                  $("#1eaom01c3pxu9wd3").hide();
                  $("#" + adBlockContainerId).hide();
                  try {
                    ga("send", "event", "preroll", window.runtimeHash + "_complete");
                  } catch (error) {}
                },
                AIP_REMOVE: function () {}
              });
            });
            adPlayerInitialized = true;
          } catch (error) {}
        }
      };
      adBlockController.b = function () {
        if (aiptag.adplayer !== undefined) {
          console.log("AdPlayer Started");
          try {
            ga("send", "event", "preroll", window.runtimeHash + "_request");
          } catch (error) {}
          displayAdBlockerMessages();
        } else {
          console.log("AdBlocker Alert");
          try {
            ga("send", "event", "antiadblocker", window.runtimeHash + "_start");
          } catch (error) {}
          displayAdBlockerMessages();
        }
      };
      return adBlockController;
    }
    function createBannerManager(bannerId, displayTagId) {
      var bannerElement = $("#" + bannerId);
      var displayTag = displayTagId;
      var bannerManager = {};
      var isDisplayed = false;
      bannerManager.a = function () {
        if (!isDisplayed) {
          bannerElement.empty();
          bannerElement.append("<div id='" + displayTag + "'></div>");
          try {
            try {
              ga("send", "event", "banner", window.runtimeHash + "_display");
            } catch (error) {}
            aiptag.cmd.display.push(function () {
              aipDisplayTag.display(displayTag);
            });
            isDisplayed = true;
          } catch (error) {}
        }
      };
      bannerManager.c = function () {
        try {
          try {
            ga("send", "event", "banner", window.runtimeHash + "_refresh");
          } catch (error) {}
          aiptag.cmd.display.push(function () {
            aipDisplayTag.display(displayTag);
          });
        } catch (error) {}
      };
      return bannerManager;
    }
    function _0x4f9dac() {
      function setUserId(userId) {
        var uniqueId = userId + Math.floor(Math.random() * 65535) * 37;
        setCookie(cookieData.d, uniqueId, 30);
      }
      function getUserId() {
        return parseInt(getCookie(cookieData.d)) % 37;
      }
      return function () {
        var userId = getUserId();
if (userId < 0 || userId >= appConfig.e) {
    console.log("init1 pSC: " + userId);
    if (userId < 0 || userId >= appConfig.e) {
        userId = Math.max(0, appConfig.e - 2);
        console.log("init2 pSC: " + userId);
    }
}
        var appInstance = {};
        appInstance = appInstance;
        appInstance.f = appConfig;
        appInstance.g = false;
        appInstance.i = Date.now();
        appInstance.j = 0;
        appInstance.k = 0;
        appInstance.l = null;
        appInstance.m = geoLocation;
        appInstance.n = languageKey;
        appInstance.o = null;
        appInstance.p = null;
        appInstance.q = null;
        appInstance.r = null;
        appInstance.s = null;
        appInstance.t = null;
        appInstance.u = null;
        try {
          if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
              if (position.coords !== undefined) {
                var coords = position.coords;
                if (coords.latitude !== undefined && coords.longitude !== undefined) {
                  appInstance.l = position;
                }
              }
            }, function (error) {});
          }
        } catch (error) {}
        appInstance.v = function () {
          appInstance.p = new Player();
          appInstance.q = new Action();
          appInstance.r = new Renderer();
          appInstance.s = new Scene();
          appInstance.t = new Transition();
          appInstance.u = new User();
          appInstance.o = new Options();
          appInstance.o.z = new SubOptions(appInstance.o);
          appInstance.a();
        };
        appInstance.a = function () {
          try {
            ga("send", "event", "app", window.runtimeHash + "_init");
          } catch (error) {}
          appInstance.o.A = function () {
            appInstance.o.B();
          };
          appInstance.o.C = function () {
            var audioState = appInstance.s.F.D();
            try {
              ga("send", "event", "game", window.runtimeHash + "_start", audioState);
            } catch (error) {}
            appInstance.r.G(Renderer.AudioState.H);
            appInstance.s.I(appInstance.s.H.J());
          };
          appInstance.o.B = function () {
            try {
              ga("send", "event", "game", window.runtimeHash + "_end");
            } catch (error) {}
            if ($("body").height() >= 430) {
              appInstance.f.K.c();
            }
            appInstance.p.L();
            (function () {
              var position = Math.floor(appInstance.o.N.M);
              var otherData = appInstance.o.O;
              if (appInstance.u.P()) {
                appInstance.u.Q(function () {
                  appInstance.R(position, otherData);
                });
              } else {
                appInstance.R(position, otherData);
              }
            })();
          };
          appInstance.o.S = function (callback) {
            callback(appInstance.s.H.T(), appInstance.s.H.U());
          };
          appInstance.u.V(function () {
            if (appInstance.p.W) {
              appInstance.r.G(Renderer.AudioState.F);
              appInstance.s.I(appInstance.s.F);
            }
            if (appInstance.u.P()) {
              try {
                var userId = appInstance.u.X();
                ga("set", "userId", userId);
              } catch (error) {}
            }
            if (appInstance.Y() && appInstance.u.P() && !appInstance.u.Z()) {
              appInstance.$(false, false);
              appInstance.s.aa._(new CustomSkin());
            } else {
              appInstance.ba(true);
            }
          });
          appInstance.p.ca(function () {
            appInstance.r.G(Renderer.AudioState.F);
            appInstance.s.I(appInstance.s.F);
          });
          appInstance.q.a(function () {
            appInstance.o.a();
            appInstance.r.a();
            appInstance.s.a();
            appInstance.t.a();
            appInstance.p.a();
            appInstance.u.a();
            if (appInstance.Y() && !appInstance.Z()) {
              appInstance.s.aa._(new CustomSkin());
            } else {
              appInstance.ba(true);
            }
          });
        };
        appInstance.da = function (value) {
          if (appInstance.u.P()) {
            var userId = appInstance.u.ea();
            $.get(apiUrl + "/pub/wuid/" + userId + "/consent/change?value=" + encodeURI(value), function (response) {});
          }
        };
        appInstance.fa = function (callback) {
          var userId = appInstance.u.ea();
          var audioState = appInstance.s.F.D();
          var skinData = appInstance.s.F.ga();
          var skinId = appInstance.t.ha(itemIds.ia);
          var eyesId = appInstance.t.ha(itemIds.ja);
          var mouthId = appInstance.t.ha(itemIds.ka);
          var glassesId = appInstance.t.ha(itemIds.la);
          var hatId = appInstance.t.ha(itemIds.ma);
          var positionValue = 0;
          if (appInstance.l != null) {
            var latitude = appInstance.l.coords.latitude;
            var longitude = appInstance.l.coords.longitude;
            positionValue = Math.max(0, Math.min(32767, (latitude + 90) / 180 * 32768)) << 1 | 1 | Math.max(0, Math.min(65535, (longitude + 180) / 360 * 65536)) << 16;
          }
          _wrmxt.testSkinCustom(skinId);
          let formattedSkinData = "x" + (skinId > 9999 ? "0000" : skinId.toString().padStart(4, 0)) + (hatId > 999 ? "000" : hatId.toString().padStart(3, 0)) + (eyesId > 999 ? "000" : eyesId.toString().padStart(3, 0)) + (mouthId > 999 ? "000" : mouthId.toString().padStart(3, 0));
          skinData = (skinData.length >= 32 ? skinData.substr(0, 16) : skinData.substr(0, 16).padEnd(16, "x")) + formattedSkinData;
          skinData = skinData.trim();
          console.log(skinData);
          var requestUrl = apiUrl + "/pub/wuid/" + userId + "/start?gameMode=" + encodeURI(audioState) + "&gh=" + positionValue + "&nickname=" + encodeURI(skinData) + "&skinId=" + _wrmxt.validInput(skinId) + "&eyesId=" + encodeURI(eyesId) + "&mouthId=" + encodeURI(mouthId) + "&glassesId=" + encodeURI(glassesId) + "&hatId=" + encodeURI(hatId);
          console.log("urlRequest: " + requestUrl);
          $.get(requestUrl, function (response) {
            var serverUrl = response.server_url;
            callback(serverUrl);
          });
        };
        appInstance.na = function () {
          userId++;
          console.log("start pSC: " + userId);
          if (!appInstance.f.oa && userId >= appInstance.f.e) {
            appInstance.s.I(appInstance.s.pa);
            appInstance.r.G(Renderer.AudioState.qa);
            appInstance.f.ra.b();
          } else {
            setUserId(userId);
            appInstance.sa();
          }
        };
        appInstance.sa = function (callback) {
          if (appInstance.o.ta()) {
            appInstance.s.I(appInstance.s.ua);
            appInstance.r.G(Renderer.AudioState.ua);
            var audioState = appInstance.s.F.D();
            setCookie(cookieData.va, audioState, 30);
            console.log("save gm: " + audioState);
            var skinName = appInstance.s.xa.wa();
            setCookie(cookieData.ya, skinName, 30);
            console.log("save sPN: " + skinName);
            if (appInstance.u.P()) {
              appInstance.fa(function (serverUrl) {
                hoisinhnhanh = callback ? callback : serverUrl;
                appInstance.o.za(window.server_url || serverUrl, appInstance.u.ea());
              });
            } else {
              var skinId = appInstance.s.F.ga();
              setCookie(cookieData.Aa, skinId, 30);
              var itemId = appInstance.t.ha(itemIds.ia);
              setCookie(cookieData.Ba, itemId, 30);
              appInstance.fa(function (serverUrl) {
                hoisinhnhanh = callback ? callback : serverUrl;
                appInstance.o.Ca(serverUrl, skinId, itemId);
              });
            }
          }
        };
        appInstance.R = function (param1, param2) {
          var skinId = appInstance.s.F.ga();
          appInstance.s.H.Da(param1, param2, skinId);
          appInstance.r.G(Renderer.AudioState.Ea);
          appInstance.s.I(appInstance.s.H.Fa());
        };
        appInstance.Ga = function () {
          if (!appInstance.Ha()) {
            return appInstance.t.Ia();
          }
          var cookieValue = parseInt(getCookie(cookieData.Ba));
          if (cookieValue != null && appInstance.t.Ja(cookieValue, itemIds.ia)) {
            return cookieValue;
          } else {
            return appInstance.t.Ia();
          }
        };
        appInstance.Ka = function (value) {
          setCookie(cookieData.La, !!value, 1800);
        };
        appInstance.Ha = function () {
          return getCookie(cookieData.La) === "true";
        };
        appInstance.ba = function (value) {
          if (value != appInstance.g) {
            appInstance.g = value;
            var consentData = consentData || {};
            consentData.consented = value;
            consentData.gdprConsent = value;
            appInstance.f.Ma.a();
            appInstance.f.K.a();
            appInstance.f.ra.a(function (response) {
              if (response) {
                setUserId(userId = 0);
              }
              appInstance.sa();
            });
          }
        };
        appInstance.$ = function (value, callback) {
          setCookie(cookieData.Na, value ? "true" : "false");
          if (callback) {
            appInstance.da(value);
          }
          appInstance.ba(value);
        };
        appInstance.Z = function () {
          switch (getCookie(cookieData.Na)) {
            case "true":
              return true;
            default:
              return false;
          }
        };
        appInstance.Y = function () {
          try {
            return !!window.isIPInEEA || appInstance.l != null && !!DataReader.Oa(appInstance.l.coords.latitude, appInstance.l.coords.longitude);
          } catch (error) {
            return true;
          }
        };
        appInstance.Pa = function () {
          appInstance.j = Date.now();
          appInstance.k = appInstance.j - appInstance.i;
          appInstance.o.Qa(appInstance.j, appInstance.k);
          appInstance.s.Qa(appInstance.j, appInstance.k);
          appInstance.i = appInstance.j;
        };
        appInstance.Ra = function () {
          appInstance.s.Ra();
        };
        return appInstance;
      }();
    }
    function Options() {
      var options = {
        Wa: 30,
        Xa: new Float32Array(100),
        Ya: 0,
        Za: 0,
        $a: 0,
        _a: 0,
        ab: 0,
        bb: 0,
        cb: 0,
        db: null,
        eb: 300,
        C: function () {},
        B: function () {},
        S: function () {},
        A: function () {},
        fb: new SomeClass(),
        z: null,
        N: null,
        gb: {},
        hb: {},
        ib: 12.5,
        jb: 40,
        kb: 1,
        lb: -1,
        mb: 1,
        nb: 1,
        ob: -1,
        pb: -1,
        qb: 1,
        rb: 1,
        sb: -1,
        O: 500,
        tb: 500
      };
      options.fb.ub = 500;
      options.N = new AnotherClass(options.fb);
      options.a = function () {
        options.N.vb(initializeApp().s.H.wb);
        setInterval(function () {
          options.S(function (arg1, arg2) {
            options.xb(arg1, arg2);
          });
        }, 10);
      };
      options.yb = function (val1, val2, val3, val4) {
        options.lb = val1;
        options.mb = val2;
        options.nb = val3;
        options.ob = val4;
        options.zb();
      };
      options.Ab = function (size) {
        options.kb = size;
        options.zb();
      };
      options.zb = function () {
        options.pb = options.lb - options.kb;
        options.qb = options.mb + options.kb;
        options.rb = options.nb - options.kb;
        options.sb = options.ob + options.kb;
      };
      options.Qa = function (arg1, deltaTime) {
        options.$a += deltaTime;
        options.Za -= options.Ya * 0.2 * deltaTime;
        options.z.Bb();
        if (options.db != null && (options.cb === 2 || options.cb === 3)) {
          options.Cb(arg1, deltaTime);
          options.jb = 4 + options.ib * options.N.Db;
        }
        var timeElapsed = 1000 / Math.max(1, deltaTime);
        var sum = 0;
        var index = 0;
        for (; index < options.Xa.length - 1; index++) {
          sum = sum + options.Xa[index];
          options.Xa[index] = options.Xa[index + 1];
        }
        options.Xa[options.Xa.length - 1] = timeElapsed;
        options.Wa = (sum + timeElapsed) / options.Xa.length;
      };
      options.Eb = function (x, y) {
        return x > options.pb && x < options.qb && y > options.rb && y < options.sb;
      };
      options.Cb = function (arg1, arg2) {
        var adjustedSample = options.$a + options.Za;
        var ratio = (adjustedSample - options._a) / (options.ab - options._a);
        options.N.Fb(arg1, arg2);
        options.N.Gb(arg1, arg2, ratio, options.Eb);
        var maxDb = 0;
        var item;
        for (item in options.hb) {
          var sample = options.hb[item];
          sample.Fb(arg1, arg2);
          sample.Gb(arg1, arg2, ratio, options.Eb);
          if (sample.Hb && sample.Db > maxDb) {
            maxDb = sample.Db;
          }
if (!sample.Ib && (sample.Jb < 0.005 || !sample.Hb)) {
    if (!sample.Ib && (sample.Jb < 0.005 || !sample.Hb)) {
        sample.Kb();
        delete options.hb[sample.Mb.Lb];
    }
}
        }
        options.Ab(maxDb * 3);
        var anotherItem;
        for (anotherItem in options.gb) {
          var secondarySample = options.gb[anotherItem];
          secondarySample.Fb(arg1, arg2);
          secondarySample.Gb(arg1, arg2, options.Eb);
          if (secondarySample.Nb && (secondarySample.Jb < 0.005 || !options.Eb(secondarySample.Ob, secondarySample.Pb))) {
            secondarySample.Kb();
            delete options.gb[secondarySample.Mb.Lb];
          }
        }
      };
      options.Qb = function (param1, param2) {
        if (options.cb === 1) {
          options.cb = 2;
          options.C();
        }
        var currentTime = initializeApp().j;
        options.bb = param1;
        if (param1 === 0) {
          options._a = currentTime - 95;
          options.ab = currentTime;
          options.$a = options._a;
          options.Za = 0;
        } else {
          options._a = options.ab;
          options.ab = options.ab + param2;
        }
        var adjustedSample = options.$a + options.Za;
        options.Ya = (adjustedSample - options._a) / (options.ab - options._a);
      };
      options.Rb = function () {
        if (options.cb === 1 || options.cb === 2) {
          options.cb = 3;
          var tempDb = options.db;
          setTimeout(function () {
            if (options.cb === 3) {
              options.cb = 0;
            }
            if (tempDb != null && tempDb === options.db) {
              options.db.close();
              options.db = null;
            }
          }, 5000);
          options.B();
        }
      };
      options.ta = function () {
        return options.cb !== 2 && (options.cb = 1, options.z.Sb(), options.gb = {}, options.hb = {}, options.N.Tb(), options.db != null && (options.db.close(), options.db = null), true);
      };
      options.Ub = function () {
        options.db = null;
        options.z.Sb();
        if (options.cb !== 3) {
          options.A();
        }
        options.cb = 0;
      };
      options.za = function (url, data) {
        options.Vb(url, function () {
          var dataLength = Math.min(2048, data.length);
          var buffer = new ArrayBuffer(6 + dataLength * 2);
          var dataView = new DataView(buffer);
          var offset = 0;
          dataView.setInt8(offset, 129);
          offset = offset + 1;
          dataView.setInt16(offset, 2800);
          offset = offset + 2;
          dataView.setInt8(offset, 1);
          offset = offset + 1;
          dataView.setInt16(offset, dataLength);
          offset = offset + 2;
          var i = 0;
          for (; i < dataLength; i++) {
            dataView.setInt16(offset, data.charCodeAt(i));
            offset = offset + 2;
          }
          options.Wb(buffer);
        });
      };
      options.Ca = function (url, data, id) {
        options.Vb(url, function () {
          var dataLength = Math.min(32, data.length);
          var buffer = new ArrayBuffer(7 + dataLength * 2);
          var dataView = new DataView(buffer);
          var offset = 0;
          dataView.setInt8(offset, 129);
          offset = offset + 1;
          dataView.setInt16(offset, 2800);
          offset = offset + 2;
          dataView.setInt8(offset, 0);
          offset = offset + 1;
          dataView.setInt16(offset, id);
          offset = offset + 2;
          dataView.setInt8(offset, dataLength);
          offset++;
          var i = 0;
          for (; i < dataLength; i++) {
            dataView.setInt16(offset, data.charCodeAt(i));
            offset = offset + 2;
          }
          options.Wb(buffer);
        });
      };
      options.Wb = function (buffer) {
        try {
          if (options.db != null && options.db.readyState === WebSocket.OPEN) {
            options.db.send(buffer);
          }
        } catch (error) {
          console.log("Socket send error: " + error);
          options.Ub();
        }
      };
      options.xb = function (arg1, arg2) {
        var flag = arg2 ? 128 : 0;
        var normalizedValue = normalizeIndex(arg1) / arrayLength * 128 & 127;
        var combinedValue = (flag | normalizedValue) & 255;
        if (options.eb !== combinedValue) {
          var byteArray = new ArrayBuffer(1);
          new DataView(byteArray).setInt8(0, combinedValue);
          options.Wb(byteArray);
          options.eb = combinedValue;
        }
      };
      options.Vb = function (url, callback) {
        let joyLoader = loadJoy(!theoKzObjects.mobile);
        var websocket = options.db = new WebSocket(url);
        websocket.binaryType = "arraybuffer";
        window.onOpen = websocket.onopen = function () {
          updateGameData("open");
          if (options.db === websocket) {
            console.log("Socket opened");
            callback();
          }
          isPlaying = true;
        };
        window.onclose = websocket.onclose = function () {
          updateGameData("closed");
          _wrmxt.aload = true;
          if (options.db === websocket) {
            console.log("Socket closed");
            options.Ub();
          }
          isPlaying = true;
          if (joyLoader) {
            joyLoader.destroy();
          }
        };
        websocket.onerror = function (error) {
          if (options.db === websocket) {
            console.log("Socket error");
            options.Ub();
          }
          isPlaying = false;
          if (joyLoader) {
            joyLoader.destroy();
          }
        };
        websocket.onmessage = function (message) {
          if (options.db === websocket) {
            options.z.Xb(message.data);
          }
        };
      };
      return options;
    }
    var logoUrl = "https://wormate.io/images/linelogo-xmas2022.png";
    var guestAvatarUrl = "/images/guest-avatar-xmas2022.png";
    var isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var apiUrl = "https://gateway.wormate.io";
    var resourcesUrl = "https://resources.wormate.io";
    var languageKey = window.I18N_LANG;
languageKey = languageKey || "en"; // تعيين القيمة الافتراضية إذا كانت غير موجودة
var geoLocation;
switch (languageKey) {
    case "uk":
        geoLocation = "uk_UA";
        break;
    case "de":
        geoLocation = "de_DE";
        break;
    case "fr":
        geoLocation = "fr_FR";
        break;
    case "ru":
        geoLocation = "ru_RU";
        break;
    case "es":
        geoLocation = "es_ES";
        break;
    default:
        geoLocation = "en_US";
}
    moment.locale(geoLocation);
    var isInitialized = false;
    var appInstance = undefined;
    var pixiProperties = function () {
      var pixiLibrary = {
        Yb: eval("PIXI")
      };
      var blendModes = pixiLibrary.Yb.BLEND_MODES;
      var wrapModes = pixiLibrary.Yb.WRAP_MODES;
      return {
        Zb: pixiLibrary.Yb.Container,
        $b: pixiLibrary.Yb.BaseTexture,
        _b: pixiLibrary.Yb.Texture,
        ac: pixiLibrary.Yb.Renderer,
        bc: pixiLibrary.Yb.Graphics,
        cc: pixiLibrary.Yb.Shader,
        dc: pixiLibrary.Yb.Rectangle,
        ec: pixiLibrary.Yb.Sprite,
        fc: pixiLibrary.Yb.Text,
        gc: pixiLibrary.Yb.Geometry,
        hc: pixiLibrary.Yb.Mesh,
        ic: {
          jc: blendModes.ADD
        },
        kc: {
          lc: wrapModes.REPEAT
        }
      };
    }();
    var arrayLength = Math.PI * 2;
    (function () {
      var getString = "Z2V0";
      var equals = "=";
      var getInteger = getString + "SW50";
      var getFloat = getString + "RmxvYXQ";
      var base64Array = [atob(getInteger + "OA=="), atob(getInteger + "MTY" + equals), atob(getInteger + "MzI" + equals), atob(getFloat + "zMg=="), atob(getFloat + "2NA==")];
      DataView.prototype.mc = function (index) {
        return this[base64Array[0]](index);
      };
      DataView.prototype.nc = function (index) {
        return this[base64Array[1]](index);
      };
      DataView.prototype.oc = function (index) {
        return this[base64Array[2]](index);
      };
      DataView.prototype.pc = function (index) {
        return this[base64Array[3]](index);
      };
      DataView.prototype.qc = function (index) {
        return this[base64Array[4]](index);
      };
    })();
    var Velocity = function () {
      function VelocityConstructor(speed) {
        this.rc = speed;
        this.sc = false;
        this.tc = 1;
      }
      VelocityConstructor.VELOCITY_TYPE = 0;
      VelocityConstructor.FLEXIBLE_TYPE = 1;
      VelocityConstructor.MAGNETIC_TYPE = 2;
      VelocityConstructor.ZOOM_TYPE = 6;
      VelocityConstructor.X2_TYPE = 3;
      VelocityConstructor.X5_TYPE = 4;
      VelocityConstructor.X10_TYPE = 5;
      return VelocityConstructor;
    }();
    var Player = function () {
      function PlayerConstructor() {
        this.uc = [];
        this.vc = {};
        this.wc = null;
        this.xc = ResourceManager.yc();
      }
      function forEach(obj, callback) {
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            callback(key, obj[key]);
          }
        }
      }
      PlayerConstructor.prototype.a = function () {
        this.L();
      };
      PlayerConstructor.prototype.W = function () {
        return this.wc != null;
      };
      PlayerConstructor.prototype.zc = function () {
        if (this.wc != null) {
          return this.wc.revision;
        } else {
          return -1;
        }
      };
      PlayerConstructor.prototype.Ac = function () {
        return this.wc;
      };
      PlayerConstructor.prototype.L = function () {
        var self = this;
        $.get(resourcesUrl + "/dynamic/assets/revision.json", function (revision) {
          if (revision > self.zc()) {
            self.Bc();
          }
        });
      };
      PlayerConstructor.prototype.Bc = function () {
        var self = this;
        $.get(resourcesUrl + "/dynamic/assets/registry.json", function (registry) {
          if (registry.revision > self.zc()) {
            self.Cc(registry);
          }
        });
      };
      PlayerConstructor.prototype.ca = function (callback) {
        this.uc.push(callback);
      };
      PlayerConstructor.prototype.Dc = function () {
        return this.xc;
      };
      PlayerConstructor.prototype.Ec = function () {
        for (var i = 0; i < this.uc.length; i++) {
          this.uc[i]();
        }
      };
      PlayerConstructor.prototype.Fc = function (resource, textureDict) {
        if (!(resource.revision <= this.zc())) {
          var newTextureDict = textureDict;
          forEach(this.vc, function (key, texture) {
            var newTexture = newTextureDict[key];
            if (newTexture == null || texture.Gc !== newTexture.Gc) {
              print("disposing prev texture: " + key + " at " + texture.Gc);
              texture.Hc.destroy();
            }
          });
          this.vc = newTextureDict;
          this.wc = resource;
          this.xc = ResourceManager.Ic(this.wc, this.vc);
          this.Ec();
        }
      };
      PlayerConstructor.prototype.Cc = function (resource) {
        var textureDict = {};
        (function (textureDict, callback) {
          for (var key in textureDict) {
            if (textureDict.hasOwnProperty(key)) {
              callback(key, textureDict[key]);
            }
          }
        })(resource.textureDict, function (key, textureData) {
          var texturePath = textureData.custom ? textureData.relativePath : resourcesUrl + textureData.relativePath;
          try {
            textureDict[key] = new SomeDataClass(texturePath, pixiProperties.$b.from(textureData.file || texturePath));
          } catch (e) {
            console.log(texturePath);
          }
        });
        this.Fc(resource, textureDict);
      };
      return PlayerConstructor;
    }();
    var ResourceManager = function () {
      function ResourceManagerConstructor() {
        this.Jc = null;
        this.Kc = null;
        this.Lc = null;
        this.Mc = null;
        this.Nc = null;
        this.Oc = null;
        this.Pc = null;
        this.Qc = null;
        this.Rc = null;
        this.Sc = null;
        this.Tc = null;
        this.Uc = null;
        this.Vc = null;
        this.Wc = null;
        this.Xc = null;
        this.Yc = null;
      }
      function forEach(obj, callback) {
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            callback(key, obj[key]);
          }
        }
      }
      ResourceManagerConstructor.yc = function () {
        var instance = new ResourceManager();
        instance.Jc = {};
        instance.Kc = {
          Zc: null,
          $c: null
        };
        instance.Lc = {};
        instance.Mc = {
          Zc: null
        };
        instance.Nc = {};
        instance.Oc = {
          _c: "#FFFFFF",
          Zc: [],
          $c: []
        };
        instance.Pc = {};
        instance.Qc = {
          ad: {},
          bd: instance.Oc,
          cd: instance.Kc
        };
        instance.Rc = {};
        instance.Sc = {
          Zc: []
        };
        instance.Tc = {};
        instance.Uc = {
          Zc: []
        };
        instance.Vc = {};
        instance.Wc = {
          Zc: []
        };
        instance.Xc = {};
        instance.Yc = {
          Zc: []
        };
        return instance;
      };
      ResourceManagerConstructor.Ic = function (resource, textureDict) {
        var instance = new ResourceManager();
        var colorDict = {};
        forEach(resource.colorDict, function (key, value) {
          colorDict[key] = value;
        });
        var regionDict = {};
        forEach(resource.regionDict, function (key, value) {
          regionDict[key] = new SkinProperty(textureDict[value.texture].Hc, value.x, value.y, value.w, value.h, value.px, value.py, value.pw, value.ph);
        });
        instance.Nc = {};
        for (var i = 0; i < resource.skinArrayDict.length; i++) {
          var skinData = resource.skinArrayDict[i];
          instance.Nc[skinData.id] = new ResourceManager.WormSkinData("#" + colorDict[skinData.prime], skinData.base.map(function (base) {
            return regionDict[base];
          }), skinData.glow.map(function (glow) {
            return regionDict[glow];
          }));
        }
        var unknownSkin = resource.skinUnknown;
        instance.Oc = new ResourceManager.WormSkinData("#" + colorDict[unknownSkin.prime], unknownSkin.base.map(function (base) {
          return regionDict[base];
        }), unknownSkin.glow.map(function (glow) {
          return regionDict[glow];
        }));
        instance.Rc = {};
        forEach(resource.eyesDict, function (key, value) {
          key = parseInt(key);
          instance.Rc[key] = new ResourceManager.WearSkinData(value.base.map(function (base) {
            return regionDict[base.region];
          }));
        });
        instance.Sc = new ResourceManager.WearSkinData(resource.eyesUnknown.base.map(function (base) {
          return regionDict[base.region];
        }));
        instance.Tc = {};
        forEach(resource.mouthDict, function (key, value) {
          key = parseInt(key);
          instance.Tc[key] = new ResourceManager.WearSkinData(value.base.map(function (base) {
            return regionDict[base.region];
          }));
        });
        instance.Uc = new ResourceManager.WearSkinData(resource.mouthUnknown.base.map(function (base) {
          return regionDict[base.region];
        }));
        instance.Vc = {};
        forEach(resource.glassesDict, function (key, value) {
          key = parseInt(key);
          instance.Vc[key] = new ResourceManager.WearSkinData(value.base.map(function (base) {
            return regionDict[base.region];
          }));
        });
        instance.Wc = new ResourceManager.WearSkinData(resource.glassesUnknown.base.map(function (base) {
          return regionDict[base.region];
        }));
        instance.Xc = {};
        forEach(resource.hatDict, function (key, value) {
          key = parseInt(key);
          instance.Xc[key] = new ResourceManager.WearSkinData(value.base.map(function (base) {
            return regionDict[base.region];
          }));
        });
        instance.Yc = new ResourceManager.WearSkinData(resource.hatUnknown.base.map(function (base) {
          return regionDict[base.region];
        }));
        instance.Jc = {};
        forEach(resource.portionDict, function (key, value) {
          key = parseInt(key);
          instance.Jc[key] = new ResourceManager.PortionSkinData(regionDict[value.base], regionDict[value.glow]);
        });
        var unknownPortion = resource.portionUnknown;
        instance.Kc = new ResourceManager.PortionSkinData(regionDict[unknownPortion.base], regionDict[unknownPortion.glow]);
        instance.Lc = {};
        forEach(resource.abilityDict, function (key, value) {
          key = parseInt(key);
          instance.Lc[key] = new ResourceManager.AbilitySkinData(regionDict[value.base]);
        });
        var unknownAbility = resource.abilityUnknown;
        instance.Mc = new ResourceManager.AbilitySkinData(regionDict[unknownAbility.base]);
        instance.Pc = {};
        forEach(resource.teamDict, function (key, value) {
          key = parseInt(key);
          instance.Pc[key] = new ResourceManager.TeamSkinData(value.name, new ResourceManager.WormSkinData("#" + colorDict[value.skin.prime], [], value.skin.glow.map(function (glow) {
            return regionDict[glow];
          })), new ResourceManager.PortionSkinData([], regionDict[value.portion.glow]));
        });
        instance.Qc = new ResourceManager.TeamSkinData({}, instance.Oc, instance.Kc);
        return instance;
      };
      ResourceManagerConstructor.prototype.dd = function (id) {
        var wormSkin = this.Nc[id];
        return wormSkin || this.Oc;
      };
      ResourceManagerConstructor.prototype.ed = function (id) {
        var team = this.Pc[id];
        return team || this.Qc;
      };
      ResourceManagerConstructor.prototype.fd = function (id) {
        var wearSkin = this.Rc[id];
        return wearSkin || this.Sc;
      };
      ResourceManagerConstructor.prototype.gd = function (id) {
        var portionSkin = this.Tc[id];
        return portionSkin || this.Uc;
      };
      ResourceManagerConstructor.prototype.hd = function (id) {
        var abilitySkin = this.Vc[id];
        return abilitySkin || this.Wc;
      };
      ResourceManagerConstructor.prototype.jd = function (id) {
        var hatSkin = this.Xc[id];
        return hatSkin || this.Yc;
      };
      ResourceManagerConstructor.prototype.kd = function (id) {
        var wormSkin = this.Jc[id];
        return wormSkin || this.Kc;
      };
      ResourceManagerConstructor.prototype.ld = function (id) {
        var instanceData = this.Lc[id];
        return instanceData || this.Mc;
      };
      ResourceManagerConstructor.TeamSkinData = function () {
        function TeamSkinData(name, wormSkin, portionSkin) {
          this.ad = name;
          this.bd = wormSkin;
          this.cd = portionSkin;
        }
        return TeamSkinData;
      }();
      ResourceManagerConstructor.WormSkinData = function () {
        function WormSkinData(color, baseData, glowData) {
          this._c = color;
          this.Zc = baseData;
          this.$c = glowData;
        }
        return WormSkinData;
      }();
      ResourceManagerConstructor.WearSkinData = function () {
        function WearSkinData(baseData) {
          this.Zc = baseData;
        }
        return WearSkinData;
      }();
      ResourceManagerConstructor.PortionSkinData = function () {
        function PortionSkinData(base, glow) {
          this.Zc = base;
          this.$c = glow;
        }
        return PortionSkinData;
      }();
      ResourceManagerConstructor.AbilitySkinData = function () {
        function AbilitySkinData(base) {
          this.Zc = base;
        }
        return AbilitySkinData;
      }();
      return ResourceManagerConstructor;
    }();
    var Renderer = function () {
      function RendererConstructor() {
        this.md = Renderer.AudioState.ua;
        this.nd = false;
        this.od = false;
        this.pd = null;
        this.qd = null;
      }
      RendererConstructor.prototype.a = function () {};
      RendererConstructor.prototype.rd = function (isMuted) {
        this.od = isMuted;
      };
      RendererConstructor.prototype.G = function (audioState) {
        this.md = audioState;
        this.sd();
      };
      RendererConstructor.prototype.td = function (isPlaying) {
        this.nd = isPlaying;
        this.sd();
      };
      RendererConstructor.prototype.sd = function () {};
      RendererConstructor.prototype.ud = function (audioList, index) {
        if (!initializeApp().p.W) {
          return null;
        }
        var audioElement = audioList[index];
        if (audioElement == null || audioElement.length == 0) {
          return null;
        } else {
          return audioElement[Math.floor(Math.random() * audioElement.length)].cloneNode();
        }
      };
      RendererConstructor.prototype.vd = function (audioName, volume, duration) {
        if (this.od && !(duration <= 0)) {
          var audioElement = this.ud(audioName, volume);
          if (audioElement != null) {
            audioElement.volume = Math.min(1, duration);
            audioElement.play();
          }
        }
      };
      RendererConstructor.prototype.wd = function (audioName, volume) {
        if (this.md.xd) {
          this.vd(app.q.yd, audioName, volume);
        }
      };
      RendererConstructor.prototype.zd = function (audioName, volume) {
        if (this.md.Ad) {
          this.vd(app.q.Bd, audioName, volume);
        }
      };
      RendererConstructor.prototype.Cd = function () {};
      RendererConstructor.prototype.Dd = function () {};
      RendererConstructor.prototype.Ed = function () {};
      RendererConstructor.prototype.Fd = function () {};
      RendererConstructor.prototype.Gd = function () {};
      RendererConstructor.prototype.Hd = function () {};
      RendererConstructor.prototype.Id = function (param1, param2, param3) {};
      RendererConstructor.prototype.Jd = function (param) {};
      RendererConstructor.prototype.Kd = function (param) {};
      RendererConstructor.prototype.Ld = function (param) {};
      RendererConstructor.prototype.Md = function (param) {};
      RendererConstructor.prototype.Nd = function (param) {};
      RendererConstructor.prototype.Od = function (param) {};
      RendererConstructor.prototype.Pd = function (param) {};
      RendererConstructor.prototype.Qd = function (param) {};
      RendererConstructor.prototype.Rd = function (param) {};
      RendererConstructor.prototype.Sd = function (param) {};
      RendererConstructor.prototype.Td = function (param) {};
      RendererConstructor.prototype.Ud = function (param) {};
      RendererConstructor.prototype.Vd = function (param) {};
      RendererConstructor.prototype.Wd = function (_0x1e44ff) {};
      RendererConstructor.prototype.Xd = function (param1, param2) {};
      RendererConstructor.prototype.Yd = function (param) {};
      RendererConstructor.prototype.Zd = function (param1, param2, param3) {};
      (function () {
        function AudioController(audioFile) {
          this.$d = new Audio(audioFile, 0.5);
          this.$d._d.loop = true;
          this.ae = false;
        }
        AudioController.prototype.be = function (shouldPlay) {
          if (shouldPlay) {
            this.b();
          } else {
            this.ce();
          }
        };
        AudioController.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.$d.de = 0;
            this.$d.ee(1500, 100);
          }
        };
        AudioController.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            this.$d.fe(1500, 100);
          }
        };
      })();
      (function () {
        function EffectController(effectsArray) {
          this.ge = effectsArray.map(function (effect) {
            return new Audio(effect, 0.4);
          });
          shuffleArray(this.ge, 0, this.ge.length);
          this.he = null;
          this.ie = 0;
          this.ae = false;
          this.je = 10000;
        }
        function shuffleArray(array, start, end) {
          for (var i = end - 1; i > start; i--) {
            var randomIndex = start + Math.floor(Math.random() * (i - start + 1));
            var temp = array[i];
            array[i] = array[randomIndex];
            array[randomIndex] = temp;
          }
        }
        EffectController.prototype.be = function (isActive) {
          if (isActive) {
            this.b();
          } else {
            this.ce();
          }
        };
        EffectController.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.ke(1500);
          }
        };
        EffectController.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            if (this.he != null) {
              this.he.fe(800, 50);
            }
          }
        };
        EffectController.prototype.ke = function (duration) {
          if (this.ae) {
            if (this.he == null) {
              this.he = this.le();
            }
            if (this.he._d.currentTime + this.je / 1000 > this.he._d.duration) {
              this.he = this.le();
              this.he._d.currentTime = 0;
            }
            console.log("Current track '" + this.he._d.src + "', change in (ms) " + ((this.he._d.duration - this.he._d.currentTime) * 1000 - this.je));
            this.he.de = 0;
            this.he.ee(duration, 100);
            var remainingTime = (this.he._d.duration - this.he._d.currentTime) * 1000 - this.je;
            var self = this;
            var timeoutId = setTimeout(function () {
              if (self.ae && timeoutId == self.ie) {
                self.he.fe(self.je, 100);
                self.he = self.le();
                self.he._d.currentTime = 0;
                self.ke(self.je);
              }
            }, remainingTime);
            this.ie = timeoutId;
          }
        };
        EffectController.prototype.le = function () {
          var nextEffect = this.ge[0];
          var middleIndex = Math.max(1, this.ge.length / 2);
          shuffleArray(this.ge, middleIndex, this.ge.length);
          this.ge.push(this.ge.shift());
          return nextEffect;
        };
      })();
      var Audio = function () {
        function AudioController(audioElement, volume) {
          this._d = audioElement;
          this.me = volume;
          this.de = 0;
          audioElement.volume = 0;
          this.ne = 0;
          this.oe = false;
        }
        AudioController.prototype.ee = function (duration, interval) {
          console.log("fade IN " + this._d.src);
          this.pe(true, duration, interval);
        };
        AudioController.prototype.fe = function (duration, interval) {
          console.log("fade OUT " + this._d.src);
          this.pe(false, duration, interval);
        };
        AudioController.prototype.pe = function (fadeIn, duration, interval) {
          if (this.oe) {
            clearInterval(this.ne);
          }
          var self = this;
          var step = 1 / (duration / interval);
          var fadeInterval = setInterval(function () {
            if (self.oe && fadeInterval != self.ne) {
              clearInterval(fadeInterval);
              return;
            }
            if (fadeIn) {
              self.de = Math.min(1, self.de + step);
              self._d.volume = self.de * self.me;
              if (self.de >= 1) {
                self.oe = false;
                clearInterval(fadeInterval);
              }
            } else {
              self.de = Math.max(0, self.de - step);
              self._d.volume = self.de * self.me;
              if (self.de <= 0) {
                self._d.pause();
                self.oe = false;
                clearInterval(fadeInterval);
              }
            }
          }, interval);
          this.oe = true;
          this.ne = fadeInterval;
          this._d.play();
        };
        return AudioController;
      }();
      RendererConstructor.AudioState = {
        ua: {
          qe: false,
          re: false,
          Ad: true,
          xd: false
        },
        F: {
          qe: false,
          re: true,
          Ad: true,
          xd: false
        },
        H: {
          qe: true,
          re: false,
          Ad: false,
          xd: true
        },
        Ea: {
          qe: false,
          re: false,
          Ad: true,
          xd: false
        },
        qa: {
          qe: false,
          re: false,
          Ad: false,
          xd: false
        }
      };
      return RendererConstructor;
    }();
    var RendererInstance = function () {
      function RendererConstructor(app) {
        this.se = app;
        this.te = app.get()[0];
        this.ue = new pixiProperties.ac({
          view: this.te,
          backgroundColor: backgroundColor,
          antialias: true
        });
        this.ve = new pixiProperties.Zb();
        this.ve.sortableChildren = true;
        this.we = [];
        this.xe = [];
        this.ye = [];
        this.a();
      }
      var backgroundColor = 0;
      function randomInRange(min, max) {
        return min + Math.random(max - min);
      }
      function cosineWave(value) {
        if (value >= 0) {
          return Math.cos(value % arrayLength);
        } else {
          return Math.cos(value % arrayLength + arrayLength);
        }
      }
      function sineWave(value) {
        if (value >= 0) {
          return Math.sin(value % arrayLength);
        } else {
          return Math.sin(value % arrayLength + arrayLength);
        }
      }
      var shapes = [{
        ze: randomInRange(0, arrayLength),
        Ae: randomInRange(0, arrayLength),
        Be: randomInRange(0.1, 0.5),
        Ce: 1,
        De: 2,
        Ee: 16737962
      }, {
        ze: randomInRange(0, arrayLength),
        Ae: randomInRange(0, arrayLength),
        Be: randomInRange(0.1, 0.5),
        Ce: 1.5,
        De: 1.5,
        Ee: 16746632
      }, {
        ze: randomInRange(0, arrayLength),
        Ae: randomInRange(0, arrayLength),
        Be: randomInRange(0.1, 0.5),
        Ce: 2,
        De: 1,
        Ee: 16755302
      }, {
        ze: randomInRange(0, arrayLength),
        Ae: randomInRange(0, arrayLength),
        Be: randomInRange(0.1, 0.5),
        Ce: 3,
        De: 2,
        Ee: 11206502
      }, {
        ze: randomInRange(0, arrayLength),
        Ae: randomInRange(0, arrayLength),
        Be: randomInRange(0.1, 0.5),
        Ce: 2.5,
        De: 2.5,
        Ee: 8978312
      }, {
        ze: randomInRange(0, arrayLength),
        Ae: randomInRange(0, arrayLength),
        Be: randomInRange(0.1, 0.5),
        Ce: 2,
        De: 3,
        Ee: 6750122
      }, {
        ze: randomInRange(0, arrayLength),
        Ae: randomInRange(0, arrayLength),
        Be: randomInRange(0.1, 0.5),
        Ce: 5,
        De: 4,
        Ee: 6728447
      }, {
        ze: randomInRange(0, arrayLength),
        Ae: randomInRange(0, arrayLength),
        Be: randomInRange(0.1, 0.5),
        Ce: 4.5,
        De: 4.5,
        Ee: 8947967
      }, {
        ze: randomInRange(0, arrayLength),
        Ae: randomInRange(0, arrayLength),
        Be: randomInRange(0.1, 0.5),
        Ce: 4,
        De: 5,
        Ee: 11167487
      }];
      RendererConstructor.prototype.a = function () {
        var appInstance = initializeApp();
        this.ue.backgroundColor = backgroundColor;
        this.we = new Array(shapes.length);
        for (var i = 0; i < this.we.length; i++) {
          this.we[i] = new pixiProperties.ec();
          this.we[i].texture = appInstance.q.Fe;
          this.we[i].anchor.set(0.5);
          this.we[i].zIndex = 1;
          this.ve.addChild(this.we[i]);
        }
        this.xe = new Array(appInstance.q.Ge.length);
        for (var j = 0; j < this.xe.length; j++) {
          this.xe[j] = new pixiProperties.ec();
          this.xe[j].texture = appInstance.q.Ge[j];
          this.xe[j].anchor.set(0.5);
          this.xe[j].zIndex = 2;
          this.ve.addChild(this.xe[j]);
        }
        this.ye = new Array(this.xe.length);
        for (var k = 0; k < this.ye.length; k++) {
          this.ye[k] = {
            He: Math.random(),
            Ie: Math.random(),
            Je: Math.random(),
            Ke: Math.random()
          };
        }
        this.Ra();
      };
      RendererConstructor.sc = false;
      RendererConstructor.Le = function (state) {
        RendererConstructor.sc = state;
      };
      RendererConstructor.prototype.Ra = function () {
        var devicePixelRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
        var width = this.se.width();
        var height = this.se.height();
        this.ue.resize(width, height);
        this.ue.resolution = devicePixelRatio;
        this.te.width = devicePixelRatio * width;
        this.te.height = devicePixelRatio * height;
        var maxDimension = Math.max(width, height) * 0.8;
        for (var i = 0; i < this.we.length; i++) {
          this.we[i].width = maxDimension;
          this.we[i].height = maxDimension;
        }
      };
      RendererConstructor.prototype.Pa = function (deltaTime, elapsedTime) {
        if (RendererConstructor.sc) {
          var timeFactor = deltaTime / 1000;
          var elapsedFactor = elapsedTime / 1000;
          var width = this.se.width();
          var height = this.se.height();
          for (var i = 0; i < this.we.length; i++) {
            var shape = shapes[i % shapes.length];
            var sprite = this.we[i];
            var xOffset = cosineWave(shape.Ce * (timeFactor * 0.08) + shape.Ae);
            var yOffset = sineWave(shape.De * (timeFactor * 0.08));
            var alphaValue = 0.2 + cosineWave(shape.Ae + shape.Be * timeFactor) * 0.2;
            sprite.tint = shape.Ee;
            sprite.alpha = alphaValue;
            sprite.position.set(width * (0.2 + (xOffset + 1) * 0.5 * 0.6), height * (0.1 + (yOffset + 1) * 0.5 * 0.8));
          }
          var scaleFactor = Math.max(width, height) * 0.05;
          for (var j = 0; j < this.xe.length; j++) {
            var particleData = this.ye[j];
            var particleSprite = this.xe[j];
            var angle = arrayLength * j / this.xe.length + particleData.He;
            particleData.Ke += particleData.Ie * elapsedFactor;
            if (particleData.Ke > 1.3) {
              particleData.He = Math.random() * arrayLength;
              particleData.Ie = (0.09 + Math.random() * 0.07) * 0.66;
              particleData.Je = 0.15 + Math.random() * 0.7;
              particleData.Ke = -0.3;
            }
            var sineValue = particleData.Je + Math.sin(Math.sin(angle + timeFactor * 0.48) * 6) * 0.03;
            var currentHeight = particleData.Ke;
            var alphaValue = constrain(Math.sin(Math.PI * currentHeight), 0.1, 1);
            var positionY = (0.4 + (1 + Math.sin(angle + timeFactor * 0.12)) * 0.5 * 1.2) * 0.5;
            var positionX = angle + particleData.Ie * 2 * timeFactor;
            particleSprite.alpha = alphaValue;
            particleSprite.position.set(width * sineValue, height * currentHeight);
            particleSprite.rotation = positionX;
            var aspectRatio = particleSprite.texture.width / particleSprite.texture.height;
            particleSprite.width = positionY * scaleFactor;
            particleSprite.height = positionY * scaleFactor * aspectRatio;
          }
          this.ue.render(this.ve, null, true);
        }
      };
      return RendererConstructor;
    }();
    var cookieData = function () {
      function CookieData() {}
      CookieData.Na = "consent_state_2";
      CookieData.ya = "showPlayerNames";
      CookieData.Me = "musicEnabled";
      CookieData.Ne = "sfxEnabled";
      CookieData.Oe = "account_type";
      CookieData.va = "gameMode";
      CookieData.Aa = "nickname";
      CookieData.Ba = "skin";
      CookieData.d = "prerollCount";
      CookieData.La = "shared";
      return CookieData;
    }();
    var DataReader = function () {
      function DataReader(arg1, arg2, dataArray) {
        var result = false;
        for (var length = dataArray.length, startIndex = 0, endIndex = length - 1; startIndex < length; endIndex = startIndex++) {
          if (dataArray[startIndex][1] > arg2 != dataArray[endIndex][1] > arg2 && arg1 < (dataArray[endIndex][0] - dataArray[startIndex][0]) * (arg2 - dataArray[startIndex][1]) / (dataArray[endIndex][1] - dataArray[startIndex][1]) + dataArray[startIndex][0]) {
            result = !result;
          }
        }
        return result;
      }
      var points = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
      return {
        Oa: function (arg1, arg2) {
          return DataReader(arg2, arg1, points);
        }
      };
    }();
    var TransitionHandler = function () {
      function TransitionHandler(arg1) {
        var formattedValue = undefined;
        formattedValue = arg1 > 0 ? "+" + Math.floor(arg1) : arg1 < 0 ? "-" + Math.floor(arg1) : "0";
        var scaleValue = Math.min(1.5, 0.5 + arg1 / 600);
        var colorValue = undefined;
        if (arg1 < 1) {
          colorValue = "0xFFFFFF";
        } else if (arg1 < 30) {
          var ratio = (arg1 - 1) / 29;
          colorValue = colorConversion((1 - ratio) * 1 + ratio * 0.96, (1 - ratio) * 1 + ratio * 0.82, (1 - ratio) * 1 + ratio * 0);
        } else if (arg1 < 300) {
          var ratio2 = (arg1 - 30) / 270;
          colorValue = colorConversion((1 - ratio2) * 0.96 + ratio2 * 0.93, (1 - ratio2) * 0.82 + ratio2 * 0.34, (1 - ratio2) * 0 + ratio2 * 0.25);
        } else if (arg1 < 700) {
          var ratio3 = (arg1 - 300) / 400;
          colorValue = colorConversion((1 - ratio3) * 0.93 + ratio3 * 0.98, (1 - ratio3) * 0.34 + ratio3 * 0, (1 - ratio3) * 0.25 + ratio3 * 0.98);
        } else {
          colorValue = colorConversion(0.98, 0, 0.98);
        }
        var randomValue = Math.random();
        var multiplier = 1 + Math.random() * 0.5;
        return new ParticleEffect(formattedValue, colorValue, true, 0.5, scaleValue, randomValue, multiplier);
      }
      function createParticleEffect(param1, param2) {
        var value1 = undefined;
        var value2 = undefined;
        if (param2) {
          value1 = 1.3;
          value2 = colorConversion(0.93, 0.34, 0.25);
        } else {
          value1 = 1.1;
          value2 = colorConversion(0.96, 0.82, 0);
        }
        return new ParticleEffect(param1, value2, true, 0.5, value1, 0.5, 0.7);
      }
      function colorConversion(value1, value2, value3) {
        return ((value1 * 255 & 255) << 16) + ((value2 * 255 & 255) << 8) + (value3 * 255 & 255);
      }
      var TransitionClass = inheritPrototype(pixiProperties.Zb, function () {
        pixiProperties.Zb.call(this);
        this.Pe = [];
        this.Qe = 0;
      });
      TransitionClass.prototype.Re = function (value) {
        this.Qe += value;
        if (this.Qe >= 1) {
          var integerValue = Math.floor(this.Qe);
          this.Qe -= integerValue;
          var particleEffect = TransitionHandler(integerValue);
          this.addChild(particleEffect);
          this.Pe.push(particleEffect);
        }
      };
      TransitionClass.prototype.Se = function (condition) {
        updateGameData("count", condition);
        if (condition) {
          if (theoKzObjects.ModeStremerheadshot) {} else {
            var audioElement = document.createElement("audio");
            audioElement.src = "https://www.baddawi.com/FDZ/sounds/headshot_sound_effect_02.mp3";
            audioElement.preload = "auto";
            audioElement.play();
          }
          
          var newParticleEffect = createParticleEffect(localizeMessage("index.game.floating.headshot")+ "🦊", true);
          this.addChild(newParticleEffect);
          this.Pe.push(newParticleEffect);
          if (newParticleEffect) {
            theoKzObjects.emoji_headshot = true;
            setTimeout(function () {
              theoKzObjects.emoji_headshot = false;
            }, 3000);
          }
        } else {
          var newParticleEffect = createParticleEffect(localizeMessage("index.game.floating.wellDone")+ "⚡", false);
          this.addChild(newParticleEffect);
          this.Pe.push(newParticleEffect);
          if (newParticleEffect) {
            theoKzObjects.emoji_kill = true;
            setTimeout(function () {
              theoKzObjects.emoji_kill = false;
            }, 3000);
          }
        }
      };
      TransitionClass.prototype.Te = function (param1, param2) {
        var appInstance = initializeApp().s.H.wb;
        var width = appInstance.ue.width / appInstance.ue.resolution;
        var height = appInstance.ue.height / appInstance.ue.resolution;
        var index = 0;
        while (index < this.Pe.length) {
          var particle = this.Pe[index];
          particle.Ue = particle.Ue + param2 / 2000 * particle.Ve;
          particle.We = particle.We + param2 / 2000 * particle.Xe;
          particle.alpha = Math.sin(Math.PI * particle.We) * 0.5;
          particle.scale.set(particle.Ue);
          particle.position.x = width * (0.25 + particle.Ye * 0.5);
          particle.position.y = particle.Ze ? height * (1 - (1 + particle.We) * 0.5) : height * (1 - (0 + particle.We) * 0.5);
          if (particle.We > 1) {
            removeFromParent(particle);
            this.Pe.splice(index, 1);
            index--;
          }
          index++;
        }
      };
      var ParticleEffect = function () {
        return inheritPrototype(pixiProperties.fc, function (text, fillColor, isVisible, alpha, fontSize, scaleX, scaleY) {
          pixiProperties.fc.call(this, text, {
            fill: fillColor,
            fontFamily: "HelveticaNeueLT",
            fontSize: 45
          });
          this.anchor.set(0.5);
          this.Ze = isVisible;
          this.Ue = alpha;
          this.Ve = fontSize;
          this.Ye = scaleX;
          this.We = 0;
          this.Xe = scaleY;
        });
      }();
      return TransitionClass;
    }();
    var SomeDataClass = function () {
      function SomeDataClass(arg1, arg2) {
        this.Gc = arg1;
        this.Hc = arg2;
      }
      return SomeDataClass;
    }();
    var constants = {
      $e: 0,
      _e: 16
    };
    var SomeClass = function () {
      function SomeClass() {
        this.af = constants.$e;
        this.bf = 0;
        this.ub = 500;
        this.cf = 4000;
        this.df = 7000;
      }
      SomeClass.TEAM_DEFAULT = 0;
      SomeClass.prototype.ef = function () {
        return this.ub * 1.02;
      };
      return SomeClass;
    }();
    var TransitionClass = function () {
      function TransitionClass(arg) {
        this.se = arg;
        this.te = arg.get()[0];
        this.ue = new pixiProperties.ac({
          view: this.te,
          backgroundColor: backgroundColor,
          antialias: true
        });
        this.ve = new pixiProperties.Zb();
        this.ve.sortableChildren = true;
        this.ff = Math.floor(Math.random() * 360);
        this.gf = 0;
        this.hf = 0;
        this.if = 15;
        this.jf = 0.5;
        this.kf = 0;
        this.lf = new _0x2d6362();
        this.mf = new pixiProperties.bc();
        this.nf = new pixiProperties.Zb();
        this.pf = new pixiProperties.Zb();
        this.pf.sortableChildren = true;
        this.qf = new pixiProperties.Zb();
        this.rf = new pixiProperties.Zb();
        this.rf.sortableChildren = true;
        this.sf = new pixiProperties.Zb();
        this.tf = new SomeClass();
        this.uf = new YetAnotherClass();
        this.vf = new DifferentClass();
        this.wf = new TransitionHandler();
        this.xf = new pixiProperties.ec();
        this.yf = {
          x: 0,
          y: -20
        };
        this.a();
      }
      var backgroundColor = 0;
      TransitionClass.prototype.a = function () {
        this.ue.backgroundColor = backgroundColor;
        this.lf.zf.zIndex = 10;
        this.ve.addChild(this.lf.zf);
        this.mf.zIndex = 20;
        this.ve.addChild(this.mf);
        this.nf.zIndex = 5000;
        this.ve.addChild(this.nf);
        this.pf.zIndex = 5100;
        this.ve.addChild(this.pf);
        this.qf.zIndex = 10000;
        this.ve.addChild(this.qf);
        this.xf.texture = initializeApp().q.Af;
        this.xf.anchor.set(0.5);
        this.xf.zIndex = 1;
        this.rf.addChild(this.xf);
        this.sf.alpha = 0.6;
        this.sf.zIndex = 2;
        this.rf.addChild(this.sf);
        this.wf.zIndex = 3;
        this.rf.addChild(this.wf);
        this.tf.alpha = 0.8;
        this.tf.zIndex = 4;
        this.rf.addChild(this.tf);
        this.uf.zIndex = 5;
        this.rf.addChild(this.uf);
        this.vf.zIndex = 6;
        this.rf.addChild(this.vf);
        this.Ra();
      };
      TransitionClass.prototype.Ra = function () {
        var devicePixelRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
        var width = this.se.width();
        var height = this.se.height();
        this.ue.resize(width, height);
        this.ue.resolution = devicePixelRatio;
        this.te.width = devicePixelRatio * width;
        this.te.height = devicePixelRatio * height;
        this.jf = Math.min(Math.min(width, height), Math.max(width, height) * 0.625);
        this.xf.position.x = width / 2;
        this.xf.position.y = height / 2;
        this.xf.width = width;
        this.xf.height = height;
        this.vf.position.x = width - 225;
        this.vf.position.y = 1;
        window.changedNf = () => this.jf = Math.min(Math.max(width, height), window.multiplier * Math.min(width, height));
        if (theoKzObjects.ModeStremer) {
          this.tf.position.x = 790;
          this.uf.position.x = 615;
          this.vf.position.x = width - 830;
        } else {
          this.tf.position.x = 60;
          this.uf.position.x = 110;
          this.vf.position.x = width - 200;
        }
        this.tf.position.y = 60;
        this.uf.position.y = 10;
        this.vf.position.y = 2;
        this.tf.addChild(ctx.clock);
        this.vf.addChild(ctx.value_server);
        this.vf.addChild(ctx.containerImgS);
        this.tf.addChild(ctx.borderImg);
        window.retundFlagError = () => {
          return ctx.containerImgS.texture = PIXI.Texture.fromImage(theoKzObjects.flag);
        };
        this.tf.addChild(ctx.containerCountInfo);
      };
      TransitionClass.prototype.Te = function (param1, param2) {
        var appInstance = initializeApp();
        this.if = 15;
        this.nf.removeChildren();
        this.pf.removeChildren();
        this.qf.removeChildren();
        this.sf.removeChildren();
        this.lf.Bf(param1.af == constants.$e ? appInstance.q.Cf : appInstance.q.Df);
        var tempDrawing = this.mf;
        tempDrawing.clear();
        tempDrawing.lineStyle(0.8, 65535);
        tempDrawing.drawCircle(0, 0, param1.ub);
        tempDrawing.endFill();
        this.vf.Ef = param2;
        this.sf.visible = param2;
      };
      TransitionClass.prototype.Pa = function (param1, param2) {
        if (!(this.ue.width <= 5)) {
          var appInstance = initializeApp();
          var width = appInstance.o.N;
          var widthRatio = this.ue.width / this.ue.resolution;
          var heightRatio = this.ue.height / this.ue.resolution;
          this.if = lerp(this.if, appInstance.o.jb, param2, 0.002);
          var ratioFactor = this.jf / this.if;
          var velocityType = appInstance.o.N.Ff[Velocity.ZOOM_TYPE];
          var isZoomed = velocityType != null && velocityType.sc;
          this.kf = clamp(0, 1, this.kf + param2 / 1000 * ((isZoomed ? 1 : 0) * 0.1 - this.kf));
          this.xf.alpha = this.kf;
          this.ff = this.ff + param2 * 0.01;
          if (this.ff > 360) {
            this.ff = this.ff % 360;
          }
          this.gf = Math.sin(param1 / 1200 * 2 * Math.PI);
          var _0x36bc7c = width.Gf();
          this.yf.x = exponentialDecay(this.yf.x, _0x36bc7c.x, param2, theoKzObjects.smoothCamera, 33.333);
          this.yf.y = exponentialDecay(this.yf.y, _0x36bc7c.y, param2, 0.5, 33.333);
          var currentVelocity = widthRatio / ratioFactor / 2;
          var currentHeight = heightRatio / ratioFactor / 2;
          appInstance.o.yb(this.yf.x - currentVelocity * 1.3, this.yf.x + currentVelocity * 1.3, this.yf.y - currentHeight * 1.3, this.yf.y + currentHeight * 1.3);
          this.lf.Te(this.yf.x, this.yf.y, currentVelocity * 2, currentHeight * 2);
          var maxDistance = appInstance.o.fb.ub;
          this.ve.scale.x = ratioFactor;
          this.ve.scale.y = ratioFactor;
          this.ve.position.x = widthRatio / 2 - this.yf.x * ratioFactor;
          this.ve.position.y = heightRatio / 2 - this.yf.y * ratioFactor;
          var distance = Math.hypot(_0x36bc7c.x, _0x36bc7c.y);
          if (distance > maxDistance - 10) {
            this.hf = clamp(0, 1, 1 + (distance - maxDistance) / 10);
            var angleX = Math.cos(this.ff * arrayLength / 360) * (1 - this.hf) + this.hf * 1;
            var angleY = Math.sin(this.ff * arrayLength / 360) * (1 - this.hf);
            var calculatedAngle = (Math.atan2(angleY, angleX) + arrayLength) % arrayLength * 360 / arrayLength;
            var alphaValue = this.hf * (0.5 + this.gf * 0.5);
            var colorValue = hslColor(Math.floor(calculatedAngle), 1, 0.75 - this.hf * 0.25);
            this.lf.Hf(colorValue[0], colorValue[1], colorValue[2], 0.1 + alphaValue * 0.2);
          } else {
            this.hf = 0;
            var defaultColor = hslColor(Math.floor(this.ff), 1, 0.75);
            this.lf.Hf(defaultColor[0], defaultColor[1], defaultColor[2], 0.1);
          }
          var i = 0;
          for (; i < this.sf.children.length; i++) {
            var child = this.sf.children[i];
            child.position.x = widthRatio / 2 - (this.yf.x - child.If.x) * ratioFactor;
            child.position.y = heightRatio / 2 - (this.yf.y - child.If.y) * ratioFactor;
          }
          this.tf.Jf.position.x = _0x36bc7c.x / maxDistance * this.tf.Kf;
          this.tf.Jf.position.y = _0x36bc7c.y / maxDistance * this.tf.Kf;
          this.uf.Qa(param1);
          this.wf.Te(param1, param2);
          this.ue.render(this.ve, null, true);
          this.ue.render(this.rf, null, false);
        }
      };
      TransitionClass.prototype.Lf = function (param1, param2) {
        param2.Of.Nf.Mf().zIndex = (param1 + 2147483648) / 4294967296 * 5000;
        this.nf.addChild(param2.Of.Pf.Mf());
        this.pf.addChild(param2.Of.Nf.Mf());
      };
      TransitionClass.prototype.Qf = function (param1, param2, param3) {
        param2.Rf.zIndex = initializeApp().o.fb.bf ? 0 : 10 + (param1 + 32768) / 65536 * 5000;
        this.qf.addChild(param2.Rf);
        if (param1 != initializeApp().o.fb.bf) {
          this.sf.addChild(param3);
        }
      };
      var SomeClass = function () {
        return inheritPrototype(pixiProperties.Zb, function () {
          pixiProperties.Zb.call(this);
          this.Kf = 40;
          this.Sf = new pixiProperties.ec();
          this.Sf.anchor.set(0.5);
          this.Jf = new pixiProperties.bc();
          var tempShape = new pixiProperties.bc();
          tempShape.beginFill("black", 0.4);
          tempShape.drawCircle(0, 0, this.Kf);
          tempShape.endFill();
          tempShape.lineStyle(2, 16777215);
          tempShape.drawCircle(0, 0, this.Kf);
          tempShape.moveTo(0, -this.Kf);
          tempShape.lineTo(0, +this.Kf);
          tempShape.moveTo(-this.Kf, 0);
          tempShape.lineTo(+this.Kf, 0);
          tempShape.endFill();
          this.Sf.alpha = 0.55;
          this.Jf.zIndex = 2;
          this.Jf.alpha = 0.9;
          this.Jf.beginFill(16711680);
          this.Jf.drawCircle(0, 0, this.Kf * 0.12);
          this.Jf.endFill();
          this.Jf.lineStyle(1, "black");
          this.Jf.drawCircle(0, 0, this.Kf * 0.12);
          this.Jf.endFill();
          this.addChild(tempShape);
          this.addChild(this.Sf);
          this.addChild(this.Jf);
        });
      }();
      var YetAnotherClass = function () {
        var Class = inheritPrototype(pixiProperties.Zb, function () {
          pixiProperties.Zb.call(this);
          this.Tf = {};
        });
        Class.prototype.Qa = function (param) {
          var alpha = 0.5 + Math.cos(arrayLength * (param / 1000 / 1.6)) * 0.5;
          var key;
          for (key in this.Tf) {
            var item = this.Tf[key];
            var value = item.Uf;
            item.alpha = 1 - value + value * alpha;
          }
        };
        Class.prototype.Te = function (data) {
          var key;
          for (key in this.Tf) {
            if (data[key] == null || !data[key].sc) {
              removeFromParent(this.Tf[key]);
              delete this.Tf[key];
            }
          }
          var index = 0;
          var key;
          for (key in data) {
            var item = data[key];
            if (item.sc) {
              var child = this.Tf[key];
              if (!child) {
                var texture = initializeApp().p.Dc().ld(item.rc).Zc;
                child = new ChildClass();
                child.texture = texture.Hc;
                child.width = 35;
                child.height = 35;
                this.Tf[key] = child;
                this.addChild(child);
              }
              updatePowerUps(this, key, item.tc);
              child.Uf = item.tc;
              if (theoKzObjects.ModeStremer) {
                child.position.x = index + 225;
              } else {
                child.position.x = index;
              }
              index = index + 40;
            }
          }
        };
        var ChildClass = function () {
          return inheritPrototype(pixiProperties.ec, function () {
            pixiProperties.ec.call(this);
            this.Uf = 0;
          });
        }();
        return Class;
      }();
      var DifferentClass = function () {
        var Class = inheritPrototype(pixiProperties.Zb, function () {
          pixiProperties.Zb.call(this);
          this.Ef = true;
          this.Vf = 12;
          this.Wf = 9;
          this.Pe = [];
          var i = 0;
          for (; i < 14; i++) {
            this.Xf();
          }
        });
        Class.prototype.Te = function (data) {
          var appInstance = initializeApp();
          var isActive = appInstance.o.fb.af == constants._e;
          var index = 0;
          var _0x2f970f = 0;
          if (_0x2f970f >= this.Pe.length) {
            this.Xf();
          }
          this.Pe[_0x2f970f].Yf(5, "white");
          this.Pe[_0x2f970f].Zf("", localizeMessage(""), "( " + appInstance.o.tb + " online )");
          this.Pe[_0x2f970f].position.y = index;
          index = index + this.Vf;
          _0x2f970f = _0x2f970f + 1;
          if (data.$f.length > 0) {
            index = index + this.Wf;
          }
          var i = 0;
          for (; i < data.$f.length; i++) {
            var item = data.$f[i];
            var details = appInstance.p.Dc().ed(item._f);
            if (_0x2f970f >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[_0x2f970f].Yf(0.8, details.bd._c);
            this.Pe[_0x2f970f].Zf("" + (i + 1), getLocalizedText(details.ad), "" + Math.floor(item.M));
            this.Pe[_0x2f970f].position.y = index;
            index = index + this.Vf;
            _0x2f970f = _0x2f970f + 1;
          }
          if (data.ag.length > 0) {
            index = index + this.Wf;
          }
          var i = 0;
          for (; i < data.ag.length; i++) {
            var item = data.ag[i];
            var isCurrent = appInstance.o.fb.bf == item.bg;
            var color = undefined;
            var text = undefined;
            if (isCurrent) {
              color = "yellow";
              text = appInstance.o.N.Mb.ad;
            } else {
              var _0x2bb504 = appInstance.o.hb[item.bg];
              if (_0x2bb504 != null) {
                color = isActive ? appInstance.p.Dc().ed(_0x2bb504.Mb.cg).bd._c : appInstance.p.Dc().dd(_0x2bb504.Mb.dg)._c;
                text = this.Ef ? _0x2bb504.Mb.ad : "---";
              } else {
                color = "blue";
                text = "?";
              }
            }
            if (isCurrent) {
              index = index + this.Wf;
            }
            if (_0x2f970f >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[_0x2f970f].Yf(isCurrent ? 1 : 0.8, color);
            var _0x1762c5 = Math.floor(item.M);
            _0x1762c5.dotFormat();
            this.Pe[_0x2f970f].Zf("" + (i + 1), text, "" + _0x1762c5.dotFormat());
            this.Pe[_0x2f970f].position.y = index;
            index = index + this.Vf;
            _0x2f970f = _0x2f970f + 1;
            if (isCurrent) {
              index = index + this.Wf;
            }
          }
          if (appInstance.o.O > data.ag.length) {
            index = index + this.Wf;
            if (_0x2f970f >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[_0x2f970f].Yf(2, "white");
            window.tuNewScore = Math.floor(appInstance.o.N.M);
            window.tuNewScore.dotFormat();
            this.Pe[_0x2f970f].Zf("" + appInstance.o.O, appInstance.o.N.Mb.ad, "" + window.tuNewScore.dotFormat());
            this.Pe[_0x2f970f].position.y = index;
            index = index + this.Vf;
            _0x2f970f = _0x2f970f + 1;
            index = index + this.Wf;
          }
          while (this.Pe.length > _0x2f970f) {
            removeFromParent(this.Pe.pop());
          }
        };
        Class.prototype.Xf = function () {
          var child = new ChildInstance();
          child.position.y = 0;
          if (this.Pe.length > 0) {
            child.position.y = this.Pe[this.Pe.length - 1].position.y + this.Vf;
          }
          this.Pe.push(child);
          this.addChild(child);
        };
        var ChildInstance = function () {
          var Instance = inheritPrototype(pixiProperties.Zb, function () {
            pixiProperties.Zb.call(this);
            this.eg = new pixiProperties.fc("", {
              fontFamily: "HelveticaNeueLT",
              fontSize: 11,
              fill: "white",
              fontWeight: "700"
            });
            this.eg.anchor.x = 1;
            this.eg.position.x = -5;
            this.addChild(this.eg);
            this.fg = new pixiProperties.fc("", {
              fontFamily: "HelveticaNeueLT",
              fontSize: 11,
              fill: "white",
              fontWeight: "700"
            });
            this.fg.anchor.x = 0;
            this.fg.position.x = 4;
            this.addChild(this.fg);
            this.gg = new pixiProperties.fc("", {
              fontFamily: "HelveticaNeueLT",
              fontSize: 11,
              fill: "white",
              fontWeight: "700"
            });
            this.gg.anchor.x = 1;
            this.gg.position.x = 200;
            this.addChild(this.gg);
          });
          Instance.prototype.Zf = function (param1, param2, param3) {
            this.eg.text = param1;
            this.gg.text = param3;
            var param2 = param2;
            this.fg.text = param2;
            const regex = /x.*$/;
            while (this.fg.width > 110) {
              param2 = param2.replace(regex, ".");
              if (this.fg.width > 110) {
                param2 = param2.substring(0, param2.length - 1);
              }
              this.fg.text = param2;
            }
          };
          Instance.prototype.Yf = function (alpha, color) {
            this.eg.alpha = alpha;
            this.eg.style.fill = color;
            this.fg.alpha = alpha;
            this.fg.style.fill = color;
            this.gg.alpha = alpha;
            this.gg.style.fill = color;
          };
          return Instance;
        }();
        return Class;
      }();
      return TransitionClass;
    }();
    var SubOptions = function () {
      function SubOptions(arg) {
        this.o = arg;
        this.hg = [];
        this.ig = 0;
      }
      SubOptions.prototype.Xb = function (data) {
        this.hg.push(new DataView(data));
      };
      SubOptions.prototype.Sb = function () {
        this.hg = [];
        this.ig = 0;
      };
      SubOptions.prototype.Bb = function () {
        for (var i = 0; i < 10; i++) {
          if (this.hg.length === 0) {
            return;
          }
          var view = this.hg.shift();
          try {
            this.jg(view);
          } catch (error) {
            console.log("DataReader error: " + error);
            throw error;
          }
        }
      };
      SubOptions.prototype.jg = function (dataView) {
        switch (dataView.mc(0) & 255) {
          case 0:
            this.kg(dataView, 1);
            return;
          case 1:
            this.lg(dataView, 1);
            return;
          case 2:
            this.mg(dataView, 1);
            return;
          case 3:
            this.ng(dataView, 1);
            return;
          case 4:
            this.og(dataView, 1);
            return;
          case 5:
            this.pg(dataView, 1);
            return;
        }
      };
      SubOptions.prototype.kg = function (dataView, index) {
        console.log("sgp1");
        this.o.fb.af = dataView.mc(index);
        index = index + 1;
        var value = dataView.nc(index);
        index = index + 2;
        this.o.fb.bf = value;
        this.o.N.Mb.Lb = value;
        this.o.fb.ub = dataView.pc(index);
        index = index + 4;
        this.o.fb.cf = dataView.pc(index);
        index = index + 4;
        this.o.fb.df = dataView.pc(index);
        index = index + 4;
        initializeApp().s.H.wb.Te(this.o.fb, initializeApp().s.xa.wa());
        console.log("sgp2");
        return index;
      };
SubOptions.prototype.lg = function (dataView, index) {
    var currentIndex = this.ig++;
    var value = dataView.nc(index);
    index += 2;
    var count = undefined;

    count = this.qg(dataView, index);
    index += this.rg(count);
    for (let i = 0; i < count; i++) { // استخدم let هنا
        index = this.sg(dataView, index);
    }

    count = this.qg(dataView, index);
    index += this.rg(count);
    for (let i = 0; i < count; i++) { // استخدم let هنا
        index = this.tg(dataView, index);
    }

    count = this.qg(dataView, index);
    index += this.rg(count);
    for (let i = 0; i < count; i++) { // استخدم let هنا
        index = this.ug(dataView, index);
    }

    count = this.qg(dataView, index);
    index += this.rg(count);
    for (let i = 0; i < count; i++) { // استخدم let هنا
        index = this.vg(dataView, index);
    }

    count = this.qg(dataView, index);
    index += this.rg(count);
    for (let i = 0; i < count; i++) { // استخدم let هنا
        index = this.wg(dataView, index);
    }

    count = this.qg(dataView, index);
    index += this.rg(count);
    for (let i = 0; i < count; i++) { // استخدم let هنا
        index = this.xg(dataView, index);
    }

    count = this.qg(dataView, index);
    index += this.rg(count);
    for (let i = 0; i < count; i++) { // استخدم let هنا
        index = this.yg(dataView, index);
    }

    count = this.qg(dataView, index);
    index += this.rg(count);
    for (let i = 0; i < count; i++) { // استخدم let هنا
        index = this.zg(dataView, index);
    }

    if (currentIndex > 0) {
        index = this.Ag(dataView, index);
    }
    this.o.Qb(currentIndex, value);
    return index;
};
      SubOptions.prototype.vg = function (dataView, index) {
        var config = new AnotherClass.Config();
        config.Lb = dataView.nc(index);
        index = index + 2;
        config.cg = this.o.fb.af == constants._e ? dataView.mc(index++) : SomeClass.TEAM_DEFAULT;
        config.dg = dataView.nc(index);
        let _0x1ef0f5 = index;
        index = index + 2;
        config.Bg = dataView.nc(index);
        let _0x4b94db = index;
        index = index + 2;
        config.Cg = dataView.nc(index);
        let _0x141cd2 = index;
        index = index + 2;
        config.Dg = dataView.nc(index);
        let _0x48f3bb = index;
        index = index + 2;
        config.Eg = dataView.nc(index);
        let _0x4137ce = index;
        index = index + 2;
        var length = dataView.mc(index);
        index = index + 1;
        var name = "";
        var i = 0;
        for (; i < length; i++) {
          name = name + String.fromCharCode(dataView.nc(index));
          index = index + 2;
        }
        if (index > 210) {
          for (let skin in this.o.hb) {
            var skinValue = this.o.hb[skin].Mb.dg;
            if ([0, 1, 2, 3, 6, 32, 33, 34, 35, 8].includes(skinValue)) {
              var randomValue = Math.floor(Math.random() * 401) + 1000;
              this.o.hb[skin].Mb.dg = randomValue;
            }
            if (/^(.+?)[a-zA-Z1-9@]+_+\d+(.+)/.test(this.o.hb[skin].Mb.ad)) {
              const skinValue = this.o.hb[skin].Mb.dg;
              if ([0, 1, 2, 3, 6, 32, 33, 34, 35, 8].includes(skinValue)) {
                const randomValue = Math.floor(Math.random() * 401) + 1000;
                this.o.hb[skin].Mb.dg = randomValue;
              }
            }
            if (/^(.{16})(\x\d{13})$/.test(this.o.hb[skin].Mb.ad)) {
              console.log("nombre: " + this.o.hb[skin].Mb.ad);
              var extracted = this.o.hb[skin].Mb.ad.substr(-13);
              console.log("elimina spacios: " + extracted);
              SubOptions = extracted.substr(0, 4);
              console.log("primeros digitos: " + SubOptions);
              let secondPart = extracted.substr(4, 3);
              console.log("segundos digitos: " + secondPart);
              let thirdPart = extracted.substr(7, 3);
              console.log("tercer digitos: " + thirdPart);
              let mouthId = extracted.substr(10, 3);
              console.log("mouthId_A: " + mouthId);
              if (SubOptions !== "0000" && theoKzObjects.visibleSkin.indexOf(parseInt(SubOptions)) !== -1) {
                this.o.hb[skin].Mb.dg = parseInt(SubOptions);
              }
              if (secondPart !== "000") {
                this.o.hb[skin].Mb.Eg = parseInt(secondPart);
              }
              if (thirdPart !== "000") {
                this.o.hb[skin].Mb.Bg = parseInt(thirdPart);
              }
              if (mouthId !== "000") {
                this.o.hb[skin].Mb.Cg = parseInt(mouthId);
              }
            }
          }
        }
        if (window.anApp.o.N.Mb.Lb === config.Lb) {
          config.dg = theoKzObjects.PropertyManager.rh;
          config.Bg = theoKzObjects.PropertyManager.sh;
          config.Cg = theoKzObjects.PropertyManager.th;
          config.Dg = theoKzObjects.PropertyManager.uh;
          config.Eg = theoKzObjects.PropertyManager.vh;
          dataView.setInt16(_0x1ef0f5, config.dg);
          dataView.setInt16(_0x4b94db, config.Bg);
          dataView.setInt16(_0x141cd2, config.Cg);
          dataView.setInt16(_0x48f3bb, config.Dg);
          dataView.setInt16(_0x4137ce, config.Eg);
          _wrmxt.aload = true;
          _wrmxt.aId = _0x1ef0f5;
        }
        config.ad = name;
        if (this.o.fb.bf === config.Lb) {
          this.o.N.Fg(config);
          config.Mb = config.Lb;
          config.bd = config.ad;
        } else {
          var currentSkin = this.o.hb[config.Lb];
          if (currentSkin != null) {
            currentSkin.Kb();
          }
          var newInstance = new AnotherClass(this.o.fb);
          newInstance.vb(initializeApp().s.H.wb);
          this.o.hb[config.Lb] = newInstance;
          newInstance.Fg(config);
        }
        return index;
      };
      SubOptions.prototype.wg = function (dataView, index) {
        var id = dataView.nc(index);
        index += 2;
        var type = dataView.mc(index);
        index++;
        var hasCondition = !!(type & 1);
        var hasAnotherCondition = !!(type & 2);
        var specificId = 0;
        if (hasCondition) {
          specificId = dataView.nc(index);
          index += 2;
        }
        var target = this.Gg(id);
        if (target === undefined) {
          return index;
        }
        target.Ib = false;
        if (!target.Hb) {
          return index;
        }
        var targetId = this.Gg(id);
        if (hasCondition && targetId !== undefined && targetId.Hb) {
          if (specificId === this.o.fb.bf) {
            var currentPosition = this.o.N.Gf();
            var distance = target.Hg(currentPosition.x, currentPosition.y);
            Math.max(0, 1 - distance.distance / (this.o.jb * 0.5));
            if (distance.distance < this.o.jb * 0.5) {
              initializeApp().s.H.wb.wf.Se(hasAnotherCondition);
            }
          } else if (id === this.o.fb.bf) ;else {
            var currentPosition = this.o.N.Gf();
            var distance = target.Hg(currentPosition.x, currentPosition.y);
            Math.max(0, 1 - distance.distance / (this.o.jb * 0.5));
          }
        } else if (id === this.o.fb.bf) ;else {
          var currentPosition = this.o.N.Gf();
          var distance = target.Hg(currentPosition.x, currentPosition.y);
          Math.max(0, 1 - distance.distance / (this.o.jb * 0.5));
        }
        return index;
      };
      SubOptions.prototype.zg = function (dataView, index) {
        var id = dataView.nc(index);
        index += 2;
        var target = id === this.o.fb.bf ? null : this.o.hb[id];
        var type = dataView.mc(index);
        index += 1;
        var hasFlag = !!(type & 1);
        if (type & 2) {
          var specificValue = dataView.pc(index);
          index += 4;
          if (target) {
            target.Ig(specificValue);
          }
        }
        var firstValue = this.Jg(dataView.mc(index++), dataView.mc(index++), dataView.mc(index++));
        var secondValue = this.Jg(dataView.mc(index++), dataView.mc(index++), dataView.mc(index++));
        if (target) {
          target.Kg(firstValue, secondValue, hasFlag);
          var currentPosition = this.o.N.Gf();
          var targetPosition = target.Gf();
          var distance = Math.max(0, 1 - Math.hypot(currentPosition.x - targetPosition.x, currentPosition.y - targetPosition.y) / (this.o.jb * 0.5));
          initializeApp().r.Zd(distance, id, hasFlag);
        }
        var length = this.qg(dataView, index);
        index += this.rg(length);
        if (target) {
          for (var key in target.Ff) {
            var item = target.Ff[key];
            if (item) {
              item.sc = false;
            }
          }
        }
        for (var i = 0; i < length; i++) {
          var value1 = dataView.mc(index);
          index++;
          var value2 = dataView.mc(index);
          index++;
          if (target) {
            var specificTarget = target.Ff[value1];
            specificTarget ||= target.Ff[value1] = new Velocity(value1);
            specificTarget.sc = true;
            specificTarget.tc = Math.min(1, Math.max(0, value2 / 100));
          }
        }
        return index;
      };
      SubOptions.prototype.Ag = function (dataView, index) {
        var currentData = this.o.N;
        var id = dataView.mc(index);
        index += 1;
        var hasFlag1 = !!(id & 1);
        var hasFlag2 = !!(id & 2);
        var hasFlag3 = !!(id & 4);
        if (hasFlag2) {
          var change = currentData.M;
          currentData.Ig(dataView.pc(index));
          index += 4;
          change = currentData.M - change;
          if (change > 0) {
            initializeApp().s.H.wb.wf.Re(change);
          }
        }
        if (hasFlag3) {
          this.o.ib = dataView.pc(index);
          index += 4;
        }
        var firstValue = this.Jg(dataView.mc(index++), dataView.mc(index++), dataView.mc(index++));
        var secondValue = this.Jg(dataView.mc(index++), dataView.mc(index++), dataView.mc(index++));
        currentData.Kg(firstValue, secondValue, hasFlag1);
        initializeApp().r.Zd(0.5, this.o.fb.bf, hasFlag1);
        var length = this.qg(dataView, index);
        index += this.rg(length);
        for (var key in currentData.Ff) {
          var item = currentData.Ff[key];
          if (item) {
            item.sc = false;
          }
        }
        for (var i = 0; i < length; i++) {
          var value1 = dataView.mc(index);
          index++;
          var value2 = dataView.mc(index);
          index++;
          var target = currentData.Ff[value1];
          if (!target) {
            target = new Velocity(value1);
            currentData.Ff[value1] = target;
          }
          target.sc = true;
          target.tc = Math.min(1, Math.max(0, value2 / 100));
        }
        initializeApp().s.H.wb.uf.Te(currentData.Ff);
      };
      SubOptions.prototype.xg = function (dataView, index) {
        var instance = this;
        var dataValue = dataView.nc(index);
        index += 2;
        var parsedData = this.Gg(dataValue);
        var additionalValue = dataView.pc(index);
        index += 4;
        var resultsArray = [];
        for (var i in parsedData.Ff) {
          if (i == 0) {
            resultsArray.push("velocidad");
            $(".v0").fadeIn();
          } else if (i == 1) {
            resultsArray.push("movimiento");
            $(".v1").fadeIn();
          } else if (i == 2) {
            resultsArray.push("iman");
            $(".v2").fadeIn();
          } else if (i == 3) {
            resultsArray.push("comidax2");
            $(".v3").fadeIn();
          } else if (i == 4) {
            resultsArray.push("comidax5");
            $(".v4").fadeIn();
          } else if (i == 5) {
            resultsArray.push("comidax10");
            $(".v5").fadeIn();
          } else if (i == 6) {
            resultsArray.push("zoom");
            $(".v6").fadeIn();
          } else {
            console.log("comiste otro potenciador");
          }
        }
        window.nombres2 = resultsArray;
        $(".Worm_cerca").text(" : " + parsedData.Mb.ad);
        if (parsedData.Mb.ad) {
          setTimeout(function () {
            $(".pwrups").fadeOut();
          }, 3000);
        } else {}
        var additionalData = this.qg(dataView, index);
        index += this.rg(additionalData);
        if (parsedData) {
          parsedData.Ig(additionalValue);
          parsedData.Lg(function () {
            return instance.Jg(dataView.mc(index++), dataView.mc(index++), dataView.mc(index++));
          }, additionalData);
          parsedData.Mg(true);
          var currentPos = this.o.N.Gf();
          var targetPos = parsedData.Gf();
          var distanceFactor = Math.max(0, 1 - Math.hypot(currentPos.x - targetPos.x, currentPos.y - targetPos.y) / (this.o.jb * 0.5));
          initializeApp().r.Xd(distanceFactor, dataValue);
        } else {
          index += additionalData * 6;
        }
        return index;
      };
      SubOptions.prototype.yg = function (dataView, index) {
        var dataValue = dataView.nc(index);
        index += 2;
        var objectData = this.o.hb[dataValue];
        var resultsArray = [];
        if (objectData && objectData.Ib) {
          objectData.Mg(false);
        }
        initializeApp().r.Yd(dataValue);
        return index;
      };
      SubOptions.prototype.sg = function (dataView, index) {
        var config = new Config.Config();
        config.Lb = dataView.oc(index);
        index += 4;
        config.cg = this.o.fb.af === constants._e ? dataView.mc(index++) : SomeClass.TEAM_DEFAULT;
        config.Ng = this.Jg(dataView.mc(index++), dataView.mc(index++), dataView.mc(index++));
        config.dg = dataView.mc(index++);
        var existingObject = this.o.gb[config.Lb];
        if (existingObject != null) {
          existingObject.Kb();
        }
        var newInstance = new Config(config, initializeApp().s.H.wb);
        newInstance.Og(this.Pg(config.Lb), this.Qg(config.Lb), true);
        this.o.gb[config.Lb] = newInstance;
        return index;
      };
      SubOptions.prototype.tg = function (dataView, index) {
        var indexValue = dataView.oc(index);
        index += 4;
        var object = this.o.gb[indexValue];
        if (object) {
          object.Rg = 0;
          object.Sg = object.Sg * 1.5;
          object.Nb = true;
        }
        return index;
      };
      SubOptions.prototype.ug = function (dataView, index) {
        var indexValue = dataView.oc(index);
        index += 4;
        var additionalValue = dataView.nc(index);
        index += 2;
        var object = this.o.gb[indexValue];
        if (object) {
          object.Rg = 0;
          object.Sg = object.Sg * 0.1;
          object.Nb = true;
          var parsedValue = this.Gg(additionalValue);
          if (parsedValue && parsedValue.Hb) {
            this.o.fb.bf;
            var position = parsedValue.Gf();
            object.Og(position.x, position.y, false);
          }
        }
        return index;
      };
      var valuesArray = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
      SubOptions.prototype.mg = function (dataView) {
        var context = initializeApp().q.Ug.Tg;
        var imageData = context.getImageData(0, 0, 80, 80);
        var currentValue = valuesArray[0];
        var limitValue = 80 - currentValue;
        var rowIndex = 0;
        for (var i = 0; i < 628; i++) {
          var dataByte = dataView.mc(1 + i);
          for (var j = 0; j < 8; j++) {
            var isSet = (dataByte >> j & 1) != 0;
            var pixelIndex = (currentValue + rowIndex * 80) * 4;
            if (isSet) {
              imageData.data[pixelIndex] = 255;
              imageData.data[pixelIndex + 1] = 255;
              imageData.data[pixelIndex + 2] = 255;
              imageData.data[pixelIndex + 3] = 255;
            } else {
              imageData.data[pixelIndex + 3] = 0;
            }
            if (++currentValue >= limitValue && ++rowIndex < 80) {
              currentValue = valuesArray[rowIndex];
              limitValue = 80 - currentValue;
            }
          }
        }
        context.putImageData(imageData, 0, 0);
        var textureObject = initializeApp().s.H.wb.tf.Sf;
        textureObject.texture = initializeApp().q.Ug.Hc;
        textureObject.texture.update();
      };
      SubOptions.prototype.og = function (dataView, index) {
        var errorCode = dataView.oc(index);
        index += 4;
        console.log("Wormy Error: " + errorCode);
      };
      SubOptions.prototype.pg = function (dataView, index) {
        console.log("g.o");
        this.o.Rb();
      };
      SubOptions.prototype.ng = function (dataView, index) {
        this.o.tb = dataView.nc(index);
        index += 2;
        this.o.O = dataView.nc(index);
        index += 2;
        var config = new DataHandler();
        config.ag = [];
        if (theoKzObjects.ModeStremerbatop) {
          for (var count = dataView.mc(index++), i = 7; i < count; i++) {
            var value = dataView.nc(index);
            index += 2;
            var additionalValue = dataView.pc(index);
            index += 4;
            config.ag.push(DataHandler.Vg(value, additionalValue));
          }
        } else {
          for (let count = dataView.mc(index++), i = 0; i < count; i++) {
            var value = dataView.nc(index);
            index += 2;
            var additionalValue = dataView.pc(index);
            index += 4;
            config.ag.push(DataHandler.Vg(value, additionalValue));
          }
        }
        config.$f = [];
        if (this.o.fb.af === constants._e) {
          for (let count = dataView.mc(index++), i = 0; i < count; i++) {
            var value = dataView.mc(index);
            index += 1;
            var additionalValue = dataView.pc(index);
            index += 4;
            config.$f.push(DataHandler.Wg(value, additionalValue));
          }
        }
        initializeApp().s.H.wb.vf.Te(config);
      };
      SubOptions.prototype.Gg = function (inputValue) {
        if (inputValue === this.o.fb.bf) {
          return this.o.N;
        } else {
          return this.o.hb[inputValue];
        }
      };
      SubOptions.prototype.Jg = function (value1, value2, value3) {
        return (((value3 & 255 | value2 << 8 & 65280 | value1 << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
      };
      SubOptions.prototype.Pg = function (inputValue) {
        return ((inputValue & 65535) / 32768 - 1) * this.o.fb.ef();
      };
      SubOptions.prototype.Qg = function (inputValue) {
        return ((inputValue >> 16 & 65535) / 32768 - 1) * this.o.fb.ef();
      };
      SubOptions.prototype.qg = function (dataView, index) {
        var firstByte = dataView.mc(index);
        if ((firstByte & 128) == 0) {
          return firstByte;
        }
        var secondByte = dataView.mc(index + 1);
        if ((secondByte & 128) == 0) {
          return secondByte | firstByte << 7 & 16256;
        }
        var thirdByte = dataView.mc(index + 2);
        if ((thirdByte & 128) == 0) {
          return thirdByte | secondByte << 7 & 16256 | firstByte << 14 & 2080768;
        }
        var fourthByte = dataView.mc(index + 3);
        if ((fourthByte & 128) == 0) {
          return fourthByte | thirdByte << 7 & 16256 | secondByte << 14 & 2080768 | firstByte << 21 & 266338304;
        } else {
          return undefined;
        }
      };
      SubOptions.prototype.rg = function (value) {
        if (value < 128) {
          return 1;
        } else if (value < 16384) {
          return 2;
        } else if (value < 2097152) {
          return 3;
        } else if (value < 268435456) {
          return 4;
        } else {
          return undefined;
        }
      };
      return SubOptions;
    }();
    var ExampleClass = function () {
      function MyClass(value) {
        this.Xg = value;
      }
      MyClass.Yg = function () {
        return new ExampleClass(null);
      };
      MyClass.Zg = function (value) {
        return new ExampleClass(value);
      };
      MyClass.prototype.$g = function () {
        return this.Xg;
      };
      MyClass.prototype._g = function () {
        return this.Xg != null;
      };
      MyClass.prototype.ah = function (callback) {
        if (this.Xg != null) {
          callback(this.Xg);
        }
      };
      return MyClass;
    }();
    var Config = function () {
      function Configuration(data, additionalData) {
        this.Mb = data;
        this.bh = data.dg >= 80;
        this.Ob = 0;
        this.Pb = 0;
        this.ch = 0;
        this.dh = 0;
        this.Sg = this.bh ? 1 : data.Ng;
        this.Rg = 1;
        this.Nb = false;
        this.eh = 0;
        this.fh = 0;
        this.Jb = 1;
        this.Ae = Math.PI * 2 * Math.random();
        this.gh = new GraphicsHandler();
        this.gh.hh(initializeApp().o.fb.af, this.Mb.cg === SomeClass.TEAM_DEFAULT ? null : initializeApp().p.Dc().ed(this.Mb.cg), initializeApp().p.Dc().kd(this.Mb.dg));
        additionalData.Lf(data.Lb, this.gh);
      }
      Configuration.prototype.Kb = function () {
        this.gh.Of.Pf.ih();
        this.gh.Of.Nf.ih();
      };
      Configuration.prototype.Og = function (value1, value2, update) {
        this.Ob = value1;
        this.Pb = value2;
        if (update) {
          this.ch = value1;
          this.dh = value2;
        }
      };
      Configuration.prototype.Fb = function (value1, value2) {
        var minScale = Math.min(0.5, this.Sg * 1);
        var maxScale = Math.min(2.5, this.Sg * 1.5);
        this.eh = lerp(this.eh, minScale, value2, 0.0025);
        this.fh = lerp(this.fh, maxScale, value2, 0.0025);
        this.Jb = lerp(this.Jb, this.Rg, value2, 0.0025);
      };
      Configuration.prototype.Gb = function (value1, value2, value3) {
        this.ch = lerp(this.ch, this.Ob, value2, theoKzObjects.eat_animation);
        this.dh = lerp(this.dh, this.Pb, value2, 0.0025);
        this.gh.Te(this, value1, value2, value3);
      };
      Configuration.Config = function () {
        function ConfigData() {
          this.Lb = 0;
          this.cg = SomeClass.TEAM_DEFAULT;
          this.Ng = 0;
          this.dg = 0;
        }
        return ConfigData;
      }();
      return Configuration;
    }();
    var GraphicsHandler = function () {
      function Handler() {
        this.Of = new GraphicsContainer(new GraphicsObject(), new GraphicsObject());
        this.Of.Pf.jh.blendMode = pixiProperties.ic.jc;
        this.Of.Pf.jh.zIndex = zIndex1;
        this.Of.Nf.jh.zIndex = zIndex2;
      }
      var zIndex2 = 500;
      var zIndex1 = 100;
      Handler.prototype.hh = function (param1, param2, param3) {
        var texture = param3.Zc;
        if (texture != null) {
          this.Of.Nf.kh(texture);
        }
        var sprite = param1 == constants._e && param2 != null ? param2.cd.$c : param3.$c;
        if (sprite != null) {
          this.Of.Pf.kh(sprite);
        }
      };
      Handler.prototype.Te = function (config, value1, value2, conditionFunc) {
        if (!conditionFunc(config.ch, config.dh)) {
          this.Of.lh();
          return;
        }
        var scale = config.fh * (1 + Math.cos(config.Ae + value1 / 200) * 0.3);
        if (config.bh) {
          this.Of.mh(config.ch, config.dh, theoKzObjects.PortionSize * config.eh, config.Jb * 1, theoKzObjects.PortionAura * scale, theoKzObjects.PortionTransparent * config.Jb);
        } else {
          this.Of.mh(config.ch, config.dh, theoKzObjects.FoodSize * config.eh, config.Jb * 1, theoKzObjects.FoodShadow * scale, theoKzObjects.FoodTransparent * config.Jb);
        }
      };
      var GraphicsContainer = function () {
        function Container(graphics1, graphics2) {
          this.Nf = graphics1;
          this.Pf = graphics2;
        }
        Container.prototype.mh = function (x, y, width, height, shadow, transparency) {
          this.Nf.Mg(true);
          this.Nf.nh(x, y);
          this.Nf.oh(width);
          this.Nf.qh(height);
          this.Pf.Mg(true);
          this.Pf.nh(x, y);
          this.Pf.oh(shadow);
          this.Pf.qh(transparency);
        };
        Container.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        return Container;
      }();
      return Handler;
    }();
    var Transition = function () {
      function TransitionHandler() {
        this.rh = 0;
        this.sh = 0;
        this.th = 0;
        this.uh = 0;
        this.vh = 0;
        this.wh = [];
      }
      function getSkinData(skinId, itemType) {
        if (!initializeApp().p.W()) {
          return null;
        }
        var skinData = initializeApp().p.Ac();
        if (itemType === itemIds.ia) {
          var index = findIndex(skinData.skinArrayDict, skinId);
          if (index < 0) {
            return null;
          } else {
            return skinData.skinArrayDict[index];
          }
        }
        switch (itemType) {
          case itemIds.ja:
            return skinData.eyesDict[skinId];
          case itemIds.ka:
            return skinData.mouthDict[skinId];
          case itemIds.la:
            return skinData.glassesDict[skinId];
          case itemIds.ma:
            return skinData.hatDict[skinId];
        }
        return null;
      }
      function findIndex(array, id) {
        for (var i = 0; i < array.length; i++) {
          if (array[i].id == id) {
            return i;
          }
        }
        return -1;
      }
      TransitionHandler.prototype.a = function () {};
      TransitionHandler.prototype.ha = function (itemId) {
        if (!theoKzObjects.loading) {
          theoKzObjects.PropertyManager = this;
          localStorage.setItem("SaveGameXT", JSON.stringify(theoKzObjects));
        }
        switch (itemId) {
          case itemIds.ia:
            return this.rh;
          case itemIds.ja:
            return this.sh;
          case itemIds.ka:
            return this.th;
          case itemIds.la:
            return this.uh;
          case itemIds.ma:
            return this.vh;
        }
        return 0;
      };
      TransitionHandler.prototype.xh = function (callback) {
        this.wh.push(callback);
        this.yh();
      };
      TransitionHandler.prototype.Ia = function () {
        if (!initializeApp().p.W()) {
          return randomElement([32, 33, 34, 35]);
        }
        for (var skinData = initializeApp().p.Ac(), filteredSkins = [], i = 0; i < skinData.skinArrayDict.length; i++) {
          var skin = skinData.skinArrayDict[i];
          if (this.Ja(skin.id, itemIds.ia)) {
            filteredSkins.push(skin);
          }
        }
        if (filteredSkins.length === 0) {
          return 0;
        } else {
          return filteredSkins[parseInt(filteredSkins.length * Math.random())].id;
        }
      };
      TransitionHandler.prototype.zh = function () {
        if (initializeApp().p.W) {
          var skinArray = initializeApp().p.Ac().skinArrayDict;
          var index = findIndex(skinArray, this.rh);
          if (!(index < 0)) {
            for (var i = index + 1; i < skinArray.length; i++) {
              if (this.Ja(skinArray[i].id, itemIds.ia)) {
                this.rh = skinArray[i].id;
                this.yh();
                return;
              }
            }
            for (var i = 0; i < index; i++) {
              if (this.Ja(skinArray[i].id, itemIds.ia)) {
                this.rh = skinArray[i].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      TransitionHandler.prototype.Ah = function () {
        if (initializeApp().p.W) {
          var skinArray = initializeApp().p.Ac().skinArrayDict;
          var index = findIndex(skinArray, this.rh);
          if (!(index < 0)) {
            for (var i = index - 1; i >= 0; i--) {
              if (this.Ja(skinArray[i].id, itemIds.ia)) {
                this.rh = skinArray[i].id;
                this.yh();
                return;
              }
            }
            for (var i = skinArray.length - 1; i > index; i--) {
              if (this.Ja(skinArray[i].id, itemIds.ia)) {
                this.rh = skinArray[i].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      TransitionHandler.prototype.Bh = function (itemId, itemType) {
        if (!initializeApp().p.W() || this.Ja(itemId, itemType)) {
          switch (itemType) {
            case itemIds.ia:
              if (this.rh != itemId) {
                this.rh = itemId;
                this.yh();
              }
              return;
            case itemIds.ja:
              if (this.sh != itemId) {
                this.sh = itemId;
                this.yh();
              }
              return;
            case itemIds.ka:
              if (this.th != itemId) {
                this.th = itemId;
                this.yh();
              }
              return;
            case itemIds.la:
              if (this.uh != itemId) {
                this.uh = itemId;
                this.yh();
              }
              return;
            case itemIds.ma:
              if (this.vh != itemId) {
                this.vh = itemId;
                this.yh();
              }
              return;
          }
        }
      };
      TransitionHandler.prototype.Ja = function (itemId, itemType) {
        var itemData = getSkinData(itemId, itemType);
        return itemData != null && (initializeApp().u.P() ? itemData.price == 0 && !itemData.nonbuyable || initializeApp().u.Ch(itemId, itemType) : itemData.guest);
      };
      TransitionHandler.prototype.yh = function () {
        for (var i = 0; i < this.wh.length; i++) {
          this.wh[i]();
        }
      };
      return TransitionHandler;
    }();
    var itemIds = function () {
      function ItemIds() {}
      ItemIds.ia = "SKIN";
      ItemIds.ja = "EYES";
      ItemIds.ka = "MOUTH";
      ItemIds.la = "GLASSES";
      ItemIds.ma = "HAT";
      return ItemIds;
    }();
    var SkinProperty = function () {
      function SkinProperty(param1, param2, param3, param4, param5, param6, param7, param8, param9) {
        this.Hc = new pixiProperties._b(param1, new pixiProperties.dc(param2, param3, param4, param5));
        this.Dh = param2;
        this.Eh = param3;
        this.Fh = param4;
        this.Gh = param5;
        this.Hh = param6 || (param8 || param4) / 2;
        this.Ih = param7 || (param9 || param5) / 2;
        this.Jh = param8 || param4;
        this.Kh = param9 || param5;
        this.Lh = 0.5 - (this.Hh - this.Jh * 0.5) / this.Fh;
        this.Mh = 0.5 - (this.Ih - this.Kh * 0.5) / this.Gh;
        this.Nh = this.Fh / this.Jh;
        this.Oh = this.Gh / this.Kh;
      }
      return SkinProperty;
    }();
    var Action = function () {
      function ActionHandler() {
        this.fn_o = createImage;
        this.Fe = new pixiProperties._b(pixiProperties.$b.from("/images/bg-obstacle.png"));
        var confettiImage = pixiProperties.$b.from("/images/confetti-xmas2022.png");
        this.Ge = [new pixiProperties._b(confettiImage, new pixiProperties.dc(0, 0, 128, 128)), new pixiProperties._b(confettiImage, new pixiProperties.dc(0, 0, 128, 128)), new pixiProperties._b(confettiImage, new pixiProperties.dc(0, 0, 128, 128)), new pixiProperties._b(confettiImage, new pixiProperties.dc(0, 0, 128, 128)), new pixiProperties._b(confettiImage, new pixiProperties.dc(0, 0, 128, 128)), new pixiProperties._b(confettiImage, new pixiProperties.dc(0, 0, 128, 128)), new pixiProperties._b(confettiImage, new pixiProperties.dc(0, 0, 128, 128)), new pixiProperties._b(confettiImage, new pixiProperties.dc(0, 0, 128, 128)), new pixiProperties._b(confettiImage, new pixiProperties.dc(0, 0, 128, 128)), new pixiProperties._b(confettiImage, new pixiProperties.dc(0, 0, 128, 128)), new pixiProperties._b(confettiImage, new pixiProperties.dc(0, 0, 128, 128)), new pixiProperties._b(confettiImage, new pixiProperties.dc(0, 0, 128, 128)), new pixiProperties._b(confettiImage, new pixiProperties.dc(0, 0, 128, 128)), new pixiProperties._b(confettiImage, new pixiProperties.dc(0, 0, 128, 128)), new pixiProperties._b(confettiImage, new pixiProperties.dc(0, 0, 128, 128)), new pixiProperties._b(confettiImage, new pixiProperties.dc(0, 0, 128, 128))];
        this.Cf = new pixiProperties._b(createImage());
        this.Df = new pixiProperties._b(function () {
          var background = pixiProperties.$b.from("/images/bg-pattern-pow2-TEAM2.png");
          background.wrapMode = pixiProperties.kc.lc;
          return background;
        }());
        this.Af = new pixiProperties._b(pixiProperties.$b.from("/images/lens.png"));
        var abilityImage = pixiProperties.$b.from("/images/wear-ability.png");
        var emojiKillImage = pixiProperties.$b.from("https://i.imgur.com/EDt862t.png");
        var emojiHeadshotImage = pixiProperties.$b.from("https://i.imgur.com/U5sTlhC.png");
        var mobileGuideImage = pixiProperties.$b.from("https://i.imgur.com/ub4ed3R.png");
        this.Id_mobileguia = new SkinProperty(mobileGuideImage, 0, 0, 87, 74, 350, 63, 128, 128);
        this.emoji_headshot = new SkinProperty(emojiKillImage, 0, 0, 256, 256, 170.5, -163.5, 128, 128);
        this.emoji_kill = new SkinProperty(emojiHeadshotImage, 0, 0, 256, 256, 170.5, -163.5, 128, 128);
        this.Ph = new SkinProperty(abilityImage, 158, 86, 67, 124, 148, 63.5, 128, 128);
        if (theoKzObjects.ModeStremermuiten) {
          this.Qh = new SkinProperty(abilityImage, 158, 4, 87, 74, 203, 63.5, 128, 128);
        } else {}
        this.Rh = new SkinProperty(abilityImage, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
        this.Ug = function () {
          var canvas = window.document.createElement("canvas");
          canvas.width = 80;
          canvas.height = 80;
          return {
            te: canvas,
            Tg: canvas.getContext("2d"),
            Hc: new pixiProperties._b(pixiProperties.$b.from(canvas))
          };
        }();
        this.Bd = {};
        this.yd = {};
        this.Sh = [];
        this.Th = null;
      }
      function createImage(imageUrl) {
        var texture = pixiProperties.$b.from(imageUrl || "https://i.imgur.com/8ubx4RA.png");
        texture.wrapMode = pixiProperties.kc.lc;
        return texture;
      }
      ActionHandler.prototype.a = function (callback) {
        function onLoadComplete() {
          if (--pendingCount == 0) {
            callback();
          }
        }
        var pendingCount = 4;
        this.Bd = {};
        onLoadComplete();
        this.yd = {};
        onLoadComplete();
        this.Sh = [];
        onLoadComplete();
        this.Th = null;
        onLoadComplete();
      };
      return ActionHandler;
    }();
    var Scene = function () {
      function SceneHandler() {
        this.H = new Handler1();
        this.F = new Handler2();
        this.Uh = new Handler3();
        this.Vh = new Handler4();
        this.Wh = new Handler5();
        this.Xh = new Handler6();
        this.Yh = new Handler7();
        this.Zh = new Handler8();
        this.xa = new Handler9();
        this.$h = new Handler10();
        this._h = new Handler11();
        this.ai = new Handler12();
        this.aa = new Handler13();
        this.ua = new Handler14();
        this.pa = new Handler15();
        this.bi = [];
        this.ci = null;
      }
      function moveToFront(array, index) {
        if (index != 0) {
          var temp = array[index];
          arraySplice(array, 0, 1, index);
          array[0] = temp;
        }
      }
      function removeAtIndex(array, index) {
        if (index != array.length + 1) {
          var temp = array[index];
          arraySplice(array, index + 1, index, array.length - index - 1);
          array[array.length - 1] = temp;
        }
      }
      function findIndex(array, value) {
        for (var i = 0; i < array.length; i++) {
          if (array[i] == value) {
            return i;
          }
        }
        return -1;
      }
      SceneHandler.prototype.a = function () {
        this.bi = [this.H, this.F, this.Uh, this.Vh, this.Wh, this.Xh, this.Yh, this.Zh, this.xa, this.$h, this._h, this.ai, this.aa, this.ua, this.pa];
        for (var i = 0; i < this.bi.length; i++) {
          this.bi[i].a();
        }
        this.ci = new RendererInstance(UIHandler.di);
      };
      SceneHandler.prototype.Qa = function (param1, param2) {
        for (var i = this.bi.length - 1; i >= 0; i--) {
          this.bi[i].Pa(param1, param2);
        }
        if (this.bi[0] != this.H && this.bi[0] != this.pa && this.ci != null) {
          this.ci.Pa(param1, param2);
        }
      };
      SceneHandler.prototype.Ra = function () {
        for (var i = this.bi.length - 1; i >= 0; i--) {
          this.bi[i].Ra();
        }
        if (this.ci != null) {
          this.ci.Ra();
        }
      };
      SceneHandler.prototype.I = function (value) {
        var index = findIndex(this.bi, value);
        if (!(index < 0)) {
          this.bi[0].ei();
          moveToFront(this.bi, index);
          this.fi();
        }
      };
      SceneHandler.prototype.gi = function () {
        this.bi[0].ei();
        do {
          removeAtIndex(this.bi, 0);
        } while (this.bi[0].rc != 1);
        this.fi();
      };
      SceneHandler.prototype.fi = function () {
        var frontItem = this.bi[0];
        frontItem.ii();
        frontItem.ji();
        this.ki();
      };
      SceneHandler.prototype.li = function () {
        return this.bi.length != 0 && this.bi[0].rc == 1 && this.aa.mi();
      };
      SceneHandler.prototype.ki = function () {
        if (this.li()) {
          this.I(this.aa);
        }
      };
      return SceneHandler;
    }();
    var DataHandler = function () {
      function DataManager() {
        this.ag = [];
        this.$f = [];
      }
      DataManager.Vg = function (bgValue, param) {
        return {
          bg: bgValue,
          M: param
        };
      };
      DataManager.Wg = function (value, param) {
        return {
          _f: value,
          M: param
        };
      };
      return DataManager;
    }();
    var User = function () {
      function User() {
        this.ni = [];
        this.oi = [];
        this.pi = [];
        this.qi = false;
        this.ri = defaultUser;
        this.si = {};
        this.ti = null;
      }
      var defaultUser = "guest";
      User.prototype.a = function () {
        this.vi();
      };
      User.prototype.X = function () {
        if (this.qi) {
          return this.si.userId;
        } else {
          return "";
        }
      };
      User.prototype.wi = function () {
        if (this.qi) {
          return this.si.username;
        } else {
          return "";
        }
      };
      User.prototype.ga = function () {
        if (this.qi) {
          return this.si.nickname;
        } else {
          return "";
        }
      };
      User.prototype.xi = function () {
        if (this.qi) {
          return this.si.avatarUrl;
        } else {
          return guestAvatarUrl;
        }
      };
      User.prototype.yi = function () {
        return this.qi && this.si.isBuyer;
      };
      User.prototype.Z = function () {
        return this.qi && this.si.isConsentGiven;
      };
      User.prototype.zi = function () {
        if (this.qi) {
          return this.si.coins;
        } else {
          return 0;
        }
      };
      User.prototype.Ai = function () {
        if (this.qi) {
          return this.si.level;
        } else {
          return 1;
        }
      };
      User.prototype.Bi = function () {
        if (this.qi) {
          return this.si.expOnLevel;
        } else {
          return 0;
        }
      };
      User.prototype.Ci = function () {
        if (this.qi) {
          return this.si.expToNext;
        } else {
          return 50;
        }
      };
      User.prototype.Di = function () {
        if (this.qi) {
          return this.si.skinId;
        } else {
          return 0;
        }
      };
      User.prototype.Ei = function () {
        if (this.qi) {
          return this.si.eyesId;
        } else {
          return 0;
        }
      };
      User.prototype.Fi = function () {
        if (this.qi) {
          return this.si.mouthId;
        } else {
          return 0;
        }
      };
      User.prototype.Gi = function () {
        if (this.qi) {
          return this.si.glassesId;
        } else {
          return 0;
        }
      };
      User.prototype.Hi = function () {
        if (this.qi) {
          return this.si.hatId;
        } else {
          return 0;
        }
      };
      User.prototype.Ii = function () {
        if (this.qi) {
          return this.si.highScore;
        } else {
          return 0;
        }
      };
      User.prototype.Ji = function () {
        if (this.qi) {
          return this.si.bestSurvivalTimeSec;
        } else {
          return 0;
        }
      };
      User.prototype.Ki = function () {
        if (this.qi) {
          return this.si.kills;
        } else {
          return 0;
        }
      };
      User.prototype.Li = function () {
        if (this.qi) {
          return this.si.headShots;
        } else {
          return 0;
        }
      };
      User.prototype.Mi = function () {
        if (this.qi) {
          return this.si.sessionsPlayed;
        } else {
          return 0;
        }
      };
      User.prototype.Ni = function () {
        if (this.qi) {
          return this.si.totalPlayTimeSec;
        } else {
          return 0;
        }
      };
      User.prototype.Oi = function () {
        if (this.qi) {
          return this.si.regDate;
        } else {
          return {};
        }
      };
      User.prototype.V = function (callback) {
        this.ni.push(callback);
        callback();
      };
      User.prototype.Pi = function (callback) {
        this.oi.push(callback);
        callback();
      };
      User.prototype.Qi = function (callback) {
        this.pi.push(callback);
      };
      User.prototype.Ch = function (propertyId, propertyType) {
        var propertyList = this.si.propertyList.concat(theoKzObjects.pL || []);
        if (!propertyList) {
          return false;
        }
        for (var i = 0; i < propertyList.length; i++) {
          var property = propertyList[i];
          if (property.id == propertyId && property.type === propertyType) {
            return true;
          }
        }
        return false;
      };
      User.prototype.P = function () {
        return this.qi;
      };
      User.prototype.ea = function () {
        return this.ri;
      };
      User.prototype.Q = function (callback) {
        var self = this;
        if (this.qi) {
          this.Ri(function (userData) {
            if (userData) {
              var previousCoins = self.zi();
              var previousLevel = self.Ai();
              self.si = userData;
              updateUserData(self.si);
              self.Si();
              var currentCoins = self.zi();
              var currentLevel = self.Ai();
              if (currentLevel > 1 && currentLevel != previousLevel) {
                initializeApp().s.aa.Ti(new LevelUpEvent(currentLevel));
              }
              var coinsEarned = currentCoins - previousCoins;
              if (coinsEarned >= 20) {
                initializeApp().s.aa.Ti(new CoinEarnedEvent(coinsEarned));
              }
            }
            if (callback) {
              callback();
            }
          });
        }
      };
      User.prototype.Ri = function (callback) {
        $.get(apiUrl + "/pub/wuid/" + this.ri + "/getUserData", function (response) {
          callback(response.user_data);
        });
      };
      User.prototype.Ui = function (propertyId, propertyType, callback) {
        var self = this;
        $.get(apiUrl + "/pub/wuid/" + this.ri + "/buyProperty?id=" + propertyId + "&type=" + propertyType, function (response) {
          if (response.code == 1200) {
            self.Q(callback);
          } else {
            callback();
          }
        }).fail(function () {
          callback();
        });
      };
      User.prototype.Vi = function () {
        var self = this;
        this.Wi();
        if (typeof FB == "undefined") {
          this.Xi();
          return;
        }
        FB.getLoginStatus(function (response) {
          if (response.status === "connected") {
            if (response.authResponse && response.authResponse.accessToken) {
              self.Yi("facebook", "fb_" + response.authResponse.accessToken);
            } else {
              self.Xi();
            }
            return;
          }
          FB.login(function (response) {
            if (response.status === "connected" && response.authResponse && response.authResponse.accessToken) {
              self.Yi("facebook", "fb_" + response.authResponse.accessToken);
            } else {
              self.Xi();
            }
          });
        });
      };
      User.prototype.Zi = function () {
        var self = this;
        this.Wi();
        if (GoogleAuth === undefined) {
          this.Xi();
          return;
        }
        console.log("gsi:l");
        GoogleAuth.then(function () {
          console.log("gsi:then");
          if (GoogleAuth.isSignedIn.get()) {
            console.log("gsi:sil");
            var currentUser = GoogleAuth.currentUser.get();
            self.Yi("google", "gg_" + currentUser.getAuthResponse().id_token);
            return;
          }
          GoogleAuth.signIn().then(function (response) {
            if (response.error !== undefined) {
              console.log("gsi:e: " + response.error);
              self.Xi();
              return;
            } else if (response.isSignedIn()) {
              console.log("gsi:s");
              self.Yi("google", "gg_" + response.getAuthResponse().id_token);
              return;
            } else {
              console.log("gsi:c");
              self.Xi();
              return;
            }
          });
        });
      };
      User.prototype.Wi = function () {
        console.log("iSI: " + this.qi);
        var previousUserId = this.ri;
        var previousProvider = this.ti;
        this.qi = false;
        this.ri = defaultUser;
        this.si = {};
        this.ti = null;
        setCookie(cookieData.Oe, "", 60);
        switch (previousProvider) {
          case "facebook":
            this.$i();
            break;
          case "google":
            this._i();
        }
        if (previousUserId !== this.ri) {
          this.aj();
        } else {
          this.Si();
        }
      };
      User.prototype.bj = function () {
        console.log("dA");
        if (this.qi) {
          $.get(apiUrl + "/pub/wuid/" + this.ri + "/deleteAccount", function (response) {
            if (response.code === 1200) {
              console.log("dA: OK");
            } else {
              console.log("dA: NO");
            }
          }).fail(function () {
            console.log("dA: FAIL");
          });
        }
      };
      User.prototype.vi = function () {
        console.log("rs");
        var provider = getCookie(cookieData.Oe);
        var self = this;
        if (provider == "facebook") {
          console.log("rs:fb");
          (function checkFB() {
            if (typeof FB != "undefined") {
              self.Vi();
            } else {
              setTimeout(checkFB, 100);
            }
          })();
        } else if (provider == "google") {
          console.log("rs:gg");
          (function checkGoogle() {
            if (GoogleAuth !== undefined) {
              self.Zi();
            } else {
              setTimeout(checkGoogle, 100);
            }
          })();
        } else {
          console.log("rs:lo");
          this.Wi();
        }
      };
      User.prototype.aj = function () {
        var i = 0;
        for (; i < this.ni.length; i++) {
          this.ni[i]();
        }
        this.Si();
      };
      User.prototype.Si = function () {
        var i = 0;
        for (; i < this.oi.length; i++) {
          this.oi[i]();
        }
        var callbacks = this.pi;
        this.pi = [];
        var j = 0;
        for (; j < callbacks.length; j++) {
          callbacks[j]();
        }
      };
      User.prototype.Yi = function (provider, token) {
        var self = this;
        var attempts = 0;
        var storedToken = localStorage.getItem("token__gg");
        if (storedToken) {
          console.log("Using the stored token:", storedToken);
          $.get(apiUrl + "/pub/wuid/" + storedToken + "/login", function (response) {
            if (response && response.code === 1485 && response.error === "expired_token") {
              attempts++;
              console.log("auto login attempt:", attempts);
              $("#login-view").html("<h2>Auto Login Google Dziri Gaming Connect : " + attempts + "</h2>");
              fetchNewToken();
            } else {
              handleLoginResponse(response);
            }
          }).fail(function () {
            fetchNewToken();
          });
        } else {
          fetchNewToken();
        }
        function fetchNewToken() {
          console.log("Fetching a new token...");
          $.get(apiUrl + "/pub/wuid/" + token + "/login", function (response) {
            if (response && response.code === 1485 && response.error === "expired_token") {
              attempts++;
              console.log("auto login attempt:", attempts);
              $("#login-view").html("<h2>Auto Login Google Dziri Gaming Connect : " + attempts + "</h2>");
              fetchNewToken();
            } else {
              handleLoginResponse(response);
            }
          }).fail(function () {
            self.Xi();
          });
        }
        function handleLoginResponse(response) {
          if (response && response.user_data) {
            updateUserData(response.user_data);
            var previousUserId = this.ri;
            self.qi = true;
            self.ri = token;
            self.si = response.user_data;
            theoKzObjects.FB_UserID = response.user_data.userId;
            self.ti = provider;
            setCookie(cookieData.Oe, self.ti, 60);
            handleUserData();
            for (var i = 0; i < clientes.clientesActivos.length; i++) {
              var clienteName = clientes.clientesActivos[i].cliente_NOMBRE;
              var clienteId = clientes.clientesActivos[i].cliente_ID;
              var visibleSkin1 = clientes.clientesActivos[i].Client_VisibleSkin;
              var visibleSkin2 = clientes.clientesActivos[i].Client_VisibleSkin1;
              var visibleSkin3 = clientes.clientesActivos[i].Client_VisibleSkin2;
              var visibleSkin4 = clientes.clientesActivos[i].Client_VisibleSkin3;
              var visibleSkin5 = clientes.clientesActivos[i].Client_VisibleSkin4;
              var visibleSkin6 = clientes.clientesActivos[i].Client_VisibleSkin5;
              var visibleSkin7 = clientes.clientesActivos[i].Client_VisibleSkin6;
              var visibleSkin8 = clientes.clientesActivos[i].Client_VisibleSkin7;
              var visibleSkin9 = clientes.clientesActivos[i].Client_VisibleSkin8;
              var visibleSkin10 = clientes.clientesActivos[i].Client_VisibleSkin9;
              var visibleSkin11 = clientes.clientesActivos[i].Client_VisibleSkin10;
              var visibleSkin12 = clientes.clientesActivos[i].Client_VisibleSkin11;
              var visibleSkin13 = clientes.clientesActivos[i].Client_VisibleSkin12;
              var visibleSkin14 = clientes.clientesActivos[i].Client_VisibleSkin13;
              var visibleSkin15 = clientes.clientesActivos[i].Client_VisibleSkin14;
              var visibleSkin16 = clientes.clientesActivos[i].Client_VisibleSkin15;
              var visibleSkin17 = clientes.clientesActivos[i].Client_VisibleSkin16;
              var visibleSkin18 = clientes.clientesActivos[i].Client_VisibleSkin17;
              var visibleSkin19 = clientes.clientesActivos[i].Client_VisibleSkin18;
              var visibleSkin20 = clientes.clientesActivos[i].Client_VisibleSkin19;
              var visibleSkin21 = clientes.clientesActivos[i].Client_VisibleSkin20;
              var clientAccessKey = clientes.clientesActivos[i].Client_KeyAccecs;
			       // var clientDateStarted = clientes.clientesActivos[i].cliente_DateStarted;
              var clientDateExpired = clientes.clientesActivos[i].cliente_DateExpired;
              if (theoKzObjects.FB_UserID == 0) {} else if (theoKzObjects.FB_UserID == clienteId) {
                $("#mm-line-top").append("<div class='het-han'> انتهاء الصلاحية : " + clientDateExpired + "</div>");
                notifyExpiration();
                handleClientData();
              } else {}
            }
            theoKzObjects.loading = false;
            if (previousUserId !== token) {
              self.aj();
            } else {
              self.Si();
            }
            localStorage.setItem("token__gg", token);
          } else {
            self.Xi();
          }
        }
      };
      User.prototype.Xi = function () {
        this.Wi();
      };
      User.prototype.$i = function () {
        console.log("lo:fb");
        FB.logout(function () {});
      };
      User.prototype._i = function () {
        console.log("lo:gg");
        GoogleAuth.signOut();
      };
      return User;
    }();
    //	في غلط
    var _0x2d6362 = function () {
      function DataHandler() {
        this.cj = {};
        this.cj[uniform1] = [1, 0.5, 0.25, 0.5];
        this.cj[uniform2] = pixiProperties._b.WHITE;
        this.cj[uniform3] = [0, 0];
        this.cj[uniform4] = [0, 0];
        var shader = pixiProperties.cc.from(vertexShader, fragmentShader, this.cj);
        this.zf = new pixiProperties.hc(attributeData, shader);
      }
      var uniform1 = "a1_" + generateRandomString();
      var uniform2 = "a2_" + generateRandomString();
      var translationMatrix = "translationMatrix";
      var projectionMatrix = "projectionMatrix";
      var uniform1 = "u3_" + generateRandomString();
      var uniform2 = "u4_" + generateRandomString();
      var uniform3 = "u5_" + generateRandomString();
      var uniform4 = "u6_" + generateRandomString();
      var uniqueVar1 = "v1_" + generateRandomString();
      var attributeData = new pixiProperties.gc().addAttribute(uniform1, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(uniform2, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
      var vertexShader = "precision mediump float;attribute vec2 " + uniform1 + ";attribute vec2 " + uniform2 + ";uniform mat3 " + translationMatrix + ";uniform mat3 " + projectionMatrix + ";varying vec2 " + uniqueVar1 + ";void main(){" + uniqueVar1 + "=" + uniform2 + ";gl_Position=vec4((" + projectionMatrix + "*" + translationMatrix + "*vec3(" + uniform1 + ",1.0)).xy,0.0,1.0);}";
      var fragmentShader = "precision highp float;varying vec2 " + uniqueVar1 + ";uniform vec4 " + uniform1 + ";uniform sampler2D " + uniform2 + ";uniform vec2 " + uniform3 + ";uniform vec2 " + uniform4 + ";void main(){vec2 coord=" + uniqueVar1 + "*" + uniform3 + "+" + uniform4 + ";vec4 v_color_mix=" + uniform1 + ";gl_FragColor=texture2D(" + uniform2 + ",coord)*0.3+v_color_mix.a*vec4(v_color_mix.rgb,0.0);}";
      DataHandler.prototype.Hf = function (value1, value2, value3, value4) {
        var colorMix = this.cj[uniform1];
        colorMix[0] = value1;
        colorMix[1] = value2;
        colorMix[2] = value3;
        colorMix[3] = value4;
      };
      DataHandler.prototype.Bf = function (value) {
        this.cj[uniform2] = value;
      };
      DataHandler.prototype.Te = function (x, y, scaleX, scaleY) {
        this.zf.position.x = x;
        this.zf.position.y = y;
        this.zf.scale.x = scaleX;
        this.zf.scale.y = scaleY;
        var scaleValues = this.cj[uniform3];
        scaleValues[0] = scaleX * 0.2520615384615385;
        scaleValues[1] = scaleY * 0.4357063736263738;
        var translateValues = this.cj[uniform4];
        translateValues[0] = x * 0.2520615384615385;
        translateValues[1] = y * 0.4357063736263738;
      };
      return DataHandler;
    }();
    var GraphicsObject = function () {
      function GraphicsElement() {
        this.jh = new pixiProperties.ec();
        this.dj = 0;
        this.ej = 0;
      }
      GraphicsElement.prototype.kh = function (graphics) {
        if (graphics && graphics.Hc) {
          this.jh.texture = graphics.Hc;
          this.jh.anchor.set(graphics.Lh, graphics.Mh);
          this.dj = graphics.Nh;
          this.ej = graphics.Oh;
        }
      };
      GraphicsElement.prototype.oh = function (size) {
        this.jh.width = size * this.dj;
        this.jh.height = size * this.ej;
      };
      GraphicsElement.prototype.fj = function (rotation) {
        this.jh.rotation = rotation;
      };
      GraphicsElement.prototype.nh = function (x, y) {
        this.jh.position.set(x, y);
      };
      GraphicsElement.prototype.Mg = function (visible) {
        this.jh.visible = visible;
      };
      GraphicsElement.prototype.gj = function () {
        return this.jh.visible;
      };
      GraphicsElement.prototype.qh = function (alpha) {
        this.jh.alpha = alpha;
      };
      GraphicsElement.prototype.Mf = function () {
        return this.jh;
      };
      GraphicsElement.prototype.ih = function () {
        removeFromParent(this.jh);
      };
      return GraphicsElement;
    }();
    var AnotherClass = function () {
      function AnotherClass(param) {
        this.fb = param;
        this.Mb = new AnotherClass.Config();
        this.Hb = false;
        this.Ib = true;
        this.hj = false;
        this.Db = 0;
        this.ij = 0;
        this.Jb = 1;
        this.jj = 0;
        this.M = 0;
        this.Ff = {};
        this.kj = 0;
        this.lj = new Float32Array(arraySize * 2);
        this.mj = new Float32Array(arraySize * 2);
        this.nj = new Float32Array(arraySize * 2);
        this.oj = null;
        this.pj = null;
        this.qj = null;
        this.Tb();
      }
      var arraySize = 200;
      AnotherClass.prototype.Kb = function () {
        if (this.pj != null) {
          removeFromParent(this.pj.Rf);
        }
        if (this.qj != null) {
          removeFromParent(this.qj);
        }
      };
      AnotherClass.prototype.Tb = function () {
        this.Ig(0.25);
        this.Mb.ad = "";
        this.Ib = true;
        this.Ff = {};
        this.Mg(false);
      };
      AnotherClass.prototype.Fg = function (data) {
        this.Mb = data;
        this.rj(this.Hb);
      };
      AnotherClass.prototype.Mg = function (visible) {
        var previousVisibility = this.Hb;
        this.Hb = visible;
        this.rj(previousVisibility);
      };
      AnotherClass.prototype.Ig = function (value) {
        this.M = value * 50;
        var adjustedValue = value;
        if (value > this.fb.cf) {
          adjustedValue = Math.atan((value - this.fb.cf) / this.fb.df) * this.fb.df + this.fb.cf;
        }
        var sqrtValue = Math.sqrt(Math.pow(adjustedValue * 5, 0.707106781186548) * 4 + 25);
        var clampedValue = Math.min(arraySize, Math.max(3, (sqrtValue - 5) * 5 + 1));
        var previousCount = this.kj;
        this.Db = (5 + sqrtValue * 0.9) * 0.025;
        this.kj = Math.floor(clampedValue);
        this.ij = clampedValue - this.kj;
        if (previousCount > 0 && previousCount < this.kj) {
          var previousX = this.lj[previousCount * 2 - 2];
          var previousY = this.lj[previousCount * 2 - 1];
          var currentX = this.mj[previousCount * 2 - 2];
          var currentY = this.mj[previousCount * 2 - 1];
          var nextX = this.nj[previousCount * 2 - 2];
          var nextY = this.nj[previousCount * 2 - 1];
          for (var i = previousCount; i < this.kj; i++) {
            this.lj[i * 2] = previousX;
            this.lj[i * 2 + 1] = previousY;
            this.mj[i * 2] = currentX;
            this.mj[i * 2 + 1] = currentY;
            this.nj[i * 2] = nextX;
            this.nj[i * 2 + 1] = nextY;
          }
        }
      };
      AnotherClass.prototype.Lg = function (randomFunc, count) {
        this.kj = count;
        for (var i = 0; i < this.kj; i++) {
          this.lj[i * 2] = this.mj[i * 2] = this.nj[i * 2] = randomFunc();
          this.lj[i * 2 + 1] = this.mj[i * 2 + 1] = this.nj[i * 2 + 1] = randomFunc();
        }
      };
      AnotherClass.prototype.Kg = function (xCoord, yCoord, zValue) {
        this.hj = zValue;
        for (var i = 0; i < this.kj; i++) {
          this.lj[i * 2] = this.mj[i * 2];
          this.lj[i * 2 + 1] = this.mj[i * 2 + 1];
        }
        var deltaX = xCoord - this.mj[0];
        var deltaY = yCoord - this.mj[1];
        this.sj(deltaX, deltaY, this.kj, this.mj);
      };
      AnotherClass.prototype.sj = function (deltaX, deltaY, length, data) {
        var distance = Math.hypot(deltaX, deltaY);
        if (!(distance <= 0)) {
          var previousX = data[0];
          var previousY = undefined;
          data[0] += deltaX;
          var currentY = data[1];
          var previousY2 = undefined;
          data[1] += deltaY;
          var factor = this.Db / (this.Db + distance);
          var adjustment = 1 - factor * 2;
          for (var i = 1, _0x22c13c = length - 1; i < _0x22c13c; i++) {
            previousY = data[i * 2];
            data[i * 2] = data[i * 2 - 2] * adjustment + (previousY + previousX) * factor;
            previousX = previousY;
            previousY2 = data[i * 2 + 1];
            data[i * 2 + 1] = data[i * 2 - 1] * adjustment + (previousY2 + currentY) * factor;
            currentY = previousY2;
          }
          factor = this.ij * this.Db / (this.ij * this.Db + distance);
          adjustment = 1 - factor * 2;
          data[length * 2 - 2] = data[length * 2 - 4] * adjustment + (data[length * 2 - 2] + previousX) * factor;
          data[length * 2 - 1] = data[length * 2 - 3] * adjustment + (data[length * 2 - 1] + currentY) * factor;
        }
      };
      AnotherClass.prototype.Gf = function () {
        return {
          x: this.nj[0],
          y: this.nj[1]
        };
      };
      AnotherClass.prototype.Hg = function (x, y) {
        var closestDistance = 1000000;
        var closestX = x;
        var closestY = y;
        for (var i = 0; i < this.kj; i++) {
          var pointX = this.nj[i * 2];
          var pointY = this.nj[i * 2 + 1];
          var distance = Math.hypot(x - pointX, y - pointY);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestX = pointX;
            closestY = pointY;
          }
        }
        return {
          x: closestX,
          y: closestY,
          distance: closestDistance
        };
      };
      AnotherClass.prototype.vb = function (value) {
        this.oj = value;
      };
      AnotherClass.prototype.Fb = function (time, delta) {
        this.Jb = lerp(this.Jb, this.Ib ? this.hj ? 0.9 + Math.cos(time / 400 * Math.PI) * 0.1 : 1 : 0, delta, 1 / 800);
        this.jj = lerp(this.jj, this.Ib ? this.hj ? 1 : 0 : 1, delta, 0.0025);
        if (this.pj != null) {
          this.pj.Rf.alpha = this.Jb;
        }
        if (this.qj != null) {
          this.qj.alpha = this.Jb;
        }
      };
      AnotherClass.prototype.Gb = function (param1, param2, param3, param4) {
        if (this.Hb && this.Ib) {
          var factor = Math.pow(0.11112, param2 / 95);
          for (var i = 0; i < this.kj; i++) {
            var mixedX = mix(this.lj[i * 2], this.mj[i * 2], param3);
            var mixedY = mix(this.lj[i * 2 + 1], this.mj[i * 2 + 1], param3);
            this.nj[i * 2] = mix(mixedX, this.nj[i * 2], factor);
            this.nj[i * 2 + 1] = mix(mixedY, this.nj[i * 2 + 1], factor);
          }
        }
        if (this.pj != null && this.Hb) {
          this.pj.tj(this, param1, param2, param4);
        }
        if (this.qj != null) {
          this.qj.If.x = this.nj[0];
          this.qj.If.y = this.nj[1] - this.Db * 3;
        }
      };
      AnotherClass.prototype.rj = function (flag) {
        if (this.Hb) {
          if (!flag) {
            this.uj();
          }
        } else {
          if (this.pj != null) {
            removeFromParent(this.pj.Rf);
          }
          if (this.qj != null) {
            removeFromParent(this.qj);
          }
        }
      };
      AnotherClass.prototype.uj = function () {
        var app = initializeApp();
        if (this.pj == null) {
          this.pj = new _0x50b0ee();
        } else {
          removeFromParent(this.pj.Rf);
        }
        this.pj.hh(app.o.fb.af, app.p.Dc().ed(this.Mb.cg), app.p.Dc().dd(this.Mb.dg), app.p.Dc().fd(this.Mb.Bg), app.p.Dc().gd(this.Mb.Cg), app.p.Dc().hd(this.Mb.Dg), app.p.Dc().jd(this.Mb.Eg));
        if (this.qj == null) {
          this.qj = new _0x49a102("");
          this.qj.style.fontFamily = "HelveticaNeueLT";
          this.qj.anchor.set(0.5);
        } else {
          removeFromParent(this.qj);
        }
        this.qj.style.fontSize = 15;
        this.qj.style.fill = app.p.Dc().dd(this.Mb.dg)._c;
        this.qj.text = this.Mb.ad;
        this.oj.Qf(this.Mb.Lb, this.pj, this.qj);
      };
      AnotherClass.Config = function () {
        function _0x19942b() {
          this.Lb = 0;
          this.cg = SomeClass.TEAM_DEFAULT;
          this.dg = 0;
          this.Bg = 0;
          this.Cg = 0;
          this.Dg = 0;
          this.Eg = 0;
          this.ad = "";
        }
        return _0x19942b;
      }();
      return AnotherClass;
    }();
    var _0x49a102 = function () {
      return inheritPrototype(pixiProperties.fc, function (_0x469e82, _0x9145ee, _0x3b791b) {
        pixiProperties.fc.call(this, _0x469e82, _0x9145ee, _0x3b791b);
        this.If = {
          x: 0,
          y: 0
        };
      });
    }();
    // في غلط
    var _0x50b0ee = function () {
      function MainClass() {
        this.Rf = new pixiProperties.Zb();
        this.Rf.sortableChildren = true;
        this.vj = new InternalClass();
        this.vj.zIndex = smallValue * ((largeValue + 1) * 2 + 1 + 3);
        this.wj = 0;
        this.xj = new Array(largeValue);
        this.xj[0] = this.yj(0, new GraphicsObject(), new GraphicsObject());
        for (var i = 1; i < largeValue; i++) {
          this.xj[i] = this.yj(i, new GraphicsObject(), new GraphicsObject());
        }
        this.zj = 0;
        this.Aj = 0;
        this.Bj = 0;
      }
      var smallValue = 0.001;
      var largeValue = 797;
      var angleAdjustment = Math.PI * 0.1;
      var negativeAdjustment = -0.06640625;
      var positiveAdjustment = 0.84375;
      var anotherAdjustment = 0.2578125;
      var thirdAdjustment = -0.03515625;
      var fourthAdjustment = -0.0625;
      var fifthAdjustment = 0.5625;
      var combinedAdjustment1 = negativeAdjustment * 3 + positiveAdjustment;
      var combinedAdjustment2 = anotherAdjustment - negativeAdjustment * 3;
      var combinedAdjustment3 = negativeAdjustment + thirdAdjustment;
      var constantValue1 = 0.375;
      var constantValue2 = 0.75;
      var combinedAdjustment4 = fourthAdjustment + fourthAdjustment;
      var combinedAdjustment5 = thirdAdjustment * 3 + anotherAdjustment;
      var combinedAdjustment6 = positiveAdjustment - thirdAdjustment * 3;
      var combinedAdjustment7 = thirdAdjustment + negativeAdjustment;
      MainClass.prototype.yj = function (index, obj1, obj2) {
        var instance = new InstanceClass(obj1, obj2);
        obj1.jh.zIndex = smallValue * ((largeValue - index) * 2 + 1 + 3);
        obj2.jh.zIndex = smallValue * ((largeValue - index) * 2 - 2 + 3);
        return instance;
      };
      MainClass.prototype.hh = function (param1, param2, param3, param4, param5, param6, param7) {
        var arrayValue = param3.Zc;
        var referenceValue = param1 == constants._e ? param2.bd.$c : param3.$c;
        if (arrayValue.length > 0 && referenceValue.length > 0) {
          for (var i = 0; i < this.xj.length; i++) {
            this.xj[i].Nf.kh(arrayValue[i % arrayValue.length]);
            this.xj[i].Pf.kh(referenceValue[i % referenceValue.length]);
          }
        }
        this.vj.hh(param4, param5, param6, param7);
      };
      var InternalClass = function () {
        var InnerClass = inheritPrototype(pixiProperties.Zb, function () {
          pixiProperties.Zb.call(this);
          this.sortableChildren = true;
          this.Cj = [];
          this.Dj = [];
          this.Ej = [];
          this.Fj = [];
          this.Gj = new pixiProperties.Zb();
          this.Hj = [];
          for (var i = 0; i < 4; i++) {
            var graphic = new GraphicsObject();
            graphic.kh(initializeApp().q.Ph);
            this.Gj.addChild(graphic.jh);
            this.Hj.push(graphic);
          }
          this.Gj.zIndex = 0.0011;
          this.addChild(this.Gj);
          this.Ij();
          this.Jj = new GraphicsObject();
          this.Jj.kh(initializeApp().q.Qh);
          this.Jj.jh.zIndex = 0.001;
          this.addChild(this.Jj.jh);
          this.Kj();
          this.xEmojiType_headshot = new GraphicsObject();
          this.xEmojiType_headshot.kh(initializeApp().q.emoji_headshot);
          this.xEmojiType_headshot.jh.zIndex = 0.001;
          this.addChild(this.xEmojiType_headshot.jh);
          this.xzs();
          this.xEmojiType_kill = new GraphicsObject();
          this.xEmojiType_kill.kh(initializeApp().q.emoji_kill);
          this.xEmojiType_kill.jh.zIndex = 0.001;
          this.addChild(this.xEmojiType_kill.jh);
          this.zas();
          this.guia_mobile = new GraphicsObject();
          this.guia_mobile.kh(initializeApp().q.Id_mobileguia);
          this.guia_mobile.jh.zIndex = 0.001;
          this.addChild(this.guia_mobile.jh);
        });
        InnerClass.prototype.hh = function (param1, param2, param3, param4) {
          this.Lj(0.002, this.Cj, param1.Zc);
          this.Lj(0.003, this.Dj, param2.Zc);
          this.Lj(0.004, this.Fj, param4.Zc);
          this.Lj(0.005, this.Ej, param3.Zc);
        };
        InnerClass.prototype.Lj = function (value, targetArray, sourceArray) {
          while (sourceArray.length > targetArray.length) {
            var graphic = new GraphicsObject();
            targetArray.push(graphic);
            this.addChild(graphic.Mf());
          }
          while (sourceArray.length < targetArray.length) {
            targetArray.pop().ih();
          }
          var adjustment = value;
          for (var i = 0; i < sourceArray.length; i++) {
            adjustment += 0.0001;
            var item = targetArray[i];
            item.kh(sourceArray[i]);
            item.jh.zIndex = adjustment;
          }
        };
        InnerClass.prototype.mh = function (x, y, rotation, angle) {
          this.visible = true;
          this.position.set(x, y);
          this.rotation = angle;
          for (var i = 0; i < this.Cj.length; i++) {
            this.Cj[i].oh(rotation);
          }
          for (var i = 0; i < this.Dj.length; i++) {
            this.Dj[i].oh(rotation);
          }
          for (var i = 0; i < this.Ej.length; i++) {
            this.Ej[i].oh(rotation);
          }
          for (var i = 0; i < this.Fj.length; i++) {
            this.Fj[i].oh(rotation);
          }
        };
        InnerClass.prototype.lh = function () {
          this.visible = false;
        };
        InnerClass.prototype.Mj = function (param1, param2, param3, param4) {
          this.Gj.visible = true;
          var adjustedValue = param3 / 1000;
          var factor = 1 / this.Hj.length;
          for (var i = 0; i < this.Hj.length; i++) {
            var opacity = 1 - (adjustedValue + factor * i) % 1;
            this.Hj[i].jh.alpha = 1 - opacity;
            this.Hj[i].oh(param2 * (0.5 + opacity * 4.5));
          }
        };
        InnerClass.prototype.Ij = function () {
          this.Gj.visible = false;
        };
        InnerClass.prototype.Nj = function (param1, param2, param3, param4) {
          this.Jj.jh.visible = true;
          this.Jj.jh.alpha = lerp(this.Jj.jh.alpha, param1.hj ? 0.9 : 0.2, param4, 0.0025);
          this.Jj.oh(param2);
        };
        InnerClass.prototype.Kj = function () {
          this.Jj.jh.visible = false;
        };
        InnerClass.prototype.xzs = function () {
          this.xEmojiType_headshot.jh.visible = false;
        };
        InnerClass.prototype.zas = function () {
          this.xEmojiType_kill.jh.visible = false;
        };
        InnerClass.prototype.Rx = function (param1, param2, param3, param4) {
          this.guia_mobile.jh.visible = true;
          this.guia_mobile.oh(param2);
        };
        InnerClass.prototype.Njh = function (param1, param2, param3, param4) {
          this.xEmojiType_headshot.jh.visible = true;
          this.xEmojiType_headshot.oh(param2);
        };
        InnerClass.prototype.Njk = function (param1, param2, param3, param4) {
          this.xEmojiType_kill.jh.visible = true;
          this.xEmojiType_kill.oh(param2);
        };
        return InnerClass;
      }();
      MainClass.prototype.Oj = function (value) {
        return this.Aj + this.Bj * Math.sin(value * angleAdjustment - this.zj);
      };
      MainClass.prototype.tj = function (object, value1, value2, func) {
        var adjustedValue = object.Db * 2;
        var coordinates = object.nj;
        var length = object.kj;
        var calculatedValue = length * 4 - 3;
        var tempValue = calculatedValue;
        this.zj = value1 / 400 * Math.PI;
        this.Aj = adjustedValue * 1.5;
        this.Bj = adjustedValue * 0.15 * object.jj;
        var currentCoordX = undefined;
        var coordX = undefined;
        var nextCoordX = undefined;
        var prevCoordX = undefined;
        var currentCoordY = undefined;
        var coordY = undefined;
        var nextCoordY = undefined;
        var prevCoordY = undefined;
        coordX = coordinates[0];
        coordY = coordinates[1];
        if (func(coordX, coordY)) {
          nextCoordX = coordinates[2];
          nextCoordY = coordinates[3];
          prevCoordX = coordinates[4];
          prevCoordY = coordinates[5];
          var angle = Math.atan2(prevCoordY + coordY * 2 - nextCoordY * 3, prevCoordX + coordX * 2 - nextCoordX * 3);
          this.vj.mh(coordX, coordY, adjustedValue, angle);
          this.xj[0].mh(coordX, coordY, adjustedValue, this.Oj(0), angle);
          this.xj[1].mh(combinedAdjustment1 * coordX + combinedAdjustment2 * nextCoordX + combinedAdjustment3 * prevCoordX, combinedAdjustment1 * coordY + combinedAdjustment2 * nextCoordY + combinedAdjustment3 * prevCoordY, adjustedValue, this.Oj(1), InstanceClass.angleBetween(this.xj[0], this.xj[2]));
          this.xj[2].mh(constantValue1 * coordX + constantValue2 * nextCoordX + combinedAdjustment4 * prevCoordX, constantValue1 * coordY + constantValue2 * nextCoordY + combinedAdjustment4 * prevCoordY, adjustedValue, this.Oj(2), InstanceClass.angleBetween(this.xj[1], this.xj[3]));
          this.xj[3].mh(combinedAdjustment5 * coordX + combinedAdjustment6 * nextCoordX + combinedAdjustment7 * prevCoordX, combinedAdjustment5 * coordY + combinedAdjustment6 * nextCoordY + combinedAdjustment7 * prevCoordY, adjustedValue, this.Oj(3), InstanceClass.angleBetween(this.xj[2], this.xj[4]));
        } else {
          this.vj.lh();
          this.xj[0].lh();
          this.xj[1].lh();
          this.xj[2].lh();
          this.xj[3].lh();
        }
        var tempCounter = 4;
        for (var i = 2, end = length * 2 - 4; i < end; i += 2) {
          coordX = coordinates[i];
          coordY = coordinates[i + 1];
          if (func(coordX, coordY)) {
            currentCoordX = coordinates[i - 2];
            currentCoordY = coordinates[i - 1];
            nextCoordX = coordinates[i + 2];
            nextCoordY = coordinates[i + 3];
            prevCoordX = coordinates[i + 4];
            prevCoordY = coordinates[i + 5];
            this.xj[tempCounter].mh(coordX, coordY, adjustedValue, this.Oj(tempCounter), InstanceClass.angleBetween(this.xj[tempCounter - 1], this.xj[tempCounter + 1]));
            tempCounter++;
            this.xj[tempCounter].mh(negativeAdjustment * currentCoordX + positiveAdjustment * coordX + anotherAdjustment * nextCoordX + thirdAdjustment * prevCoordX, negativeAdjustment * currentCoordY + positiveAdjustment * coordY + anotherAdjustment * nextCoordY + thirdAdjustment * prevCoordY, adjustedValue, this.Oj(tempCounter), InstanceClass.angleBetween(this.xj[tempCounter - 1], this.xj[tempCounter + 1]));
            tempCounter++;
            this.xj[tempCounter].mh(fourthAdjustment * currentCoordX + fifthAdjustment * coordX + fifthAdjustment * nextCoordX + fourthAdjustment * prevCoordX, fourthAdjustment * currentCoordY + fifthAdjustment * coordY + fifthAdjustment * nextCoordY + fourthAdjustment * prevCoordY, adjustedValue, this.Oj(tempCounter), InstanceClass.angleBetween(this.xj[tempCounter - 1], this.xj[tempCounter + 1]));
            tempCounter++;
            this.xj[tempCounter].mh(thirdAdjustment * currentCoordX + anotherAdjustment * coordX + positiveAdjustment * nextCoordX + negativeAdjustment * prevCoordX, thirdAdjustment * currentCoordY + anotherAdjustment * coordY + positiveAdjustment * nextCoordY + negativeAdjustment * prevCoordY, adjustedValue, this.Oj(tempCounter), InstanceClass.angleBetween(this.xj[tempCounter - 1], this.xj[tempCounter + 1]));
            tempCounter++;
          } else {
            this.xj[tempCounter].lh();
            tempCounter++;
            this.xj[tempCounter].lh();
            tempCounter++;
            this.xj[tempCounter].lh();
            tempCounter++;
            this.xj[tempCounter].lh();
            tempCounter++;
          }
        }
        coordX = coordinates[length * 2 - 4];
        coordY = coordinates[length * 2 - 3];
        if (func(coordX, coordY)) {
          currentCoordX = coordinates[length * 2 - 6];
          currentCoordY = coordinates[length * 2 - 5];
          nextCoordX = coordinates[length * 2 - 2];
          nextCoordY = coordinates[length * 2 - 1];
          this.xj[calculatedValue - 5].mh(coordX, coordY, adjustedValue, this.Oj(calculatedValue - 5), InstanceClass.angleBetween(this.xj[calculatedValue - 6], this.xj[calculatedValue - 4]));
          this.xj[calculatedValue - 4].mh(combinedAdjustment7 * currentCoordX + combinedAdjustment6 * coordX + combinedAdjustment5 * nextCoordX, combinedAdjustment7 * currentCoordY + combinedAdjustment6 * coordY + combinedAdjustment5 * nextCoordY, adjustedValue, this.Oj(calculatedValue - 4), InstanceClass.angleBetween(this.xj[calculatedValue - 5], this.xj[calculatedValue - 3]));
          this.xj[calculatedValue - 3].mh(combinedAdjustment4 * currentCoordX + constantValue2 * coordX + constantValue1 * nextCoordX, combinedAdjustment4 * currentCoordY + constantValue2 * coordY + constantValue1 * nextCoordY, adjustedValue, this.Oj(calculatedValue - 3), InstanceClass.angleBetween(this.xj[calculatedValue - 4], this.xj[calculatedValue - 2]));
          this.xj[calculatedValue - 2].mh(combinedAdjustment3 * currentCoordX + combinedAdjustment2 * coordX + combinedAdjustment1 * nextCoordX, combinedAdjustment3 * currentCoordY + combinedAdjustment2 * coordY + combinedAdjustment1 * nextCoordY, adjustedValue, this.Oj(calculatedValue - 2), InstanceClass.angleBetween(this.xj[calculatedValue - 3], this.xj[calculatedValue - 1]));
          this.xj[calculatedValue - 1].mh(nextCoordX, nextCoordY, adjustedValue, this.Oj(calculatedValue - 1), InstanceClass.angleBetween(this.xj[calculatedValue - 2], this.xj[calculatedValue - 1]));
        } else {
          this.xj[calculatedValue - 5].lh();
          this.xj[calculatedValue - 4].lh();
          this.xj[calculatedValue - 3].lh();
          this.xj[calculatedValue - 2].lh();
          this.xj[calculatedValue - 1].lh();
        }
        if (this.wj == 0 && tempValue > 0) {
          this.Rf.addChild(this.vj);
        }
        if (this.wj > 0 && tempValue == 0) {
          removeFromParent(this.vj);
        }
        while (this.wj < tempValue) {
          this.Rf.addChild(this.xj[this.wj].Nf.Mf());
          this.Rf.addChild(this.xj[this.wj].Pf.Mf());
          this.wj += 1;
        }
        while (this.wj > tempValue) {
          this.wj -= 1;
          this.xj[this.wj].Pf.ih();
          this.xj[this.wj].Nf.ih();
        }
        var velocityMagnetic = object.Ff[Velocity.MAGNETIC_TYPE];
        if (this.xj[0].gj() && velocityMagnetic != null && velocityMagnetic.sc) {
          this.vj.Mj(object, adjustedValue, value1, value2);
        } else {
          this.vj.Ij();
        }
        var velocityType = object.Ff[Velocity.VELOCITY_TYPE];
        if (this.xj[0].gj() && velocityType != null && velocityType.sc) {
          this.vj.Nj(object, adjustedValue, value1, value2);
        } else {
          this.vj.Kj();
        }
        if (theoKzObjects.ModeStremeremoj) {} else {
          if (theoKzObjects.emoji_headshot && object && object.Mb && object.Mb.Mb) {
            this.vj.Njh(object, adjustedValue, value1, value2);
          } else {
            this.vj.xzs();
          }
          if (theoKzObjects.emoji_kill && object && object.Mb && object.Mb.Mb) {
            this.vj.Njk(object, adjustedValue, value1, value2);
          } else {
            this.vj.zas();
          }
        }
        if (theoKzObjects.mobile && theoKzObjects.arrow && object && object.Mb && object.Mb.Mb) {
          this.vj.Rx(object, adjustedValue, value1, value2);
        }
      };
      var InstanceClass = function () {
        function InternalInstance(obj1, obj2) {
          this.Nf = obj1;
          this.Nf.Mg(false);
          this.Pf = obj2;
          this.Pf.Mg(false);
        }
        InternalInstance.prototype.mh = function (x, y, rotation, angle1, angle2) {
          this.Nf.Mg(true);
          this.Nf.nh(x, y);
          this.Nf.oh(rotation);
          this.Nf.fj(angle2);
          this.Pf.Mg(true);
          this.Pf.nh(x, y);
          this.Pf.oh(angle1);
          this.Pf.fj(angle2);
        };
        InternalInstance.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        InternalInstance.prototype.gj = function () {
          return this.Nf.gj();
        };
        InternalInstance.angleBetween = function (instance1, instance2) {
          return Math.atan2(instance1.Nf.jh.position.y - instance2.Nf.jh.position.y, instance1.Nf.jh.position.x - instance2.Nf.jh.position.x);
        };
        return InternalInstance;
      }();
      return MainClass;
    }();
    var ViewHandler = function () {
      function ViewHandler(mainView) {
        this.se = mainView;
        this.te = mainView.get()[0];
        this.ue = new pixiProperties.ac({
          view: this.te,
          transparent: true
        });
        this.sc = false;
        this.Pj = new _0x50b0ee();
        this.Pj.Rf.addChild(this.Pj.vj);
        this.Qj = 0;
        this.Rj = 0;
        this.Ng = 1;
        this.rh = 0;
        this.sh = 0;
        this.th = 0;
        this.uh = 0;
        this.vh = 0;
        this.Sj = false;
        this.Tj = false;
        this.Uj = false;
        this.Vj = false;
        this.Wj = false;
        this.Xj = false;
        this.Yj = false;
        this.Zj = false;
        this.$j = false;
        this._j = false;
        this.Ra();
        this.Fb();
        var handlerInstance = this;
        initializeApp().p.ca(function () {
          if (initializeApp().p.W()) {
            handlerInstance.Fb();
          }
        });
      }
      ViewHandler.prototype.Fb = function () {
        var appInstance = initializeApp();
        this.Pj.hh(constants.$e, null, appInstance.p.Dc().dd(this.rh), appInstance.p.Dc().fd(this.sh), appInstance.p.Dc().gd(this.th), appInstance.p.Dc().hd(this.uh), appInstance.p.Dc().jd(this.vh));
      };
      ViewHandler.prototype.Le = function (value) {
        this.sc = value;
      };
      ViewHandler.prototype.ak = function (param1, param2, param3) {
        this.rh = param1;
        this.Sj = param2;
        this.Xj = param3;
        this.Fb();
      };
      ViewHandler.prototype.bk = function (param1, param2, param3) {
        this.sh = param1;
        this.Tj = param2;
        this.Yj = param3;
        this.Fb();
      };
      ViewHandler.prototype.ck = function (param1, param2, param3) {
        this.th = param1;
        this.Uj = param2;
        this.Zj = param3;
        this.Fb();
      };
      ViewHandler.prototype.dk = function (param1, param2, param3) {
        this.uh = param1;
        this.Vj = param2;
        this.$j = param3;
        this.Fb();
      };
      ViewHandler.prototype.ek = function (param1, param2, param3) {
        this.vh = param1;
        this.Wj = param2;
        this._j = param3;
        this.Fb();
      };
      ViewHandler.prototype.Ra = function () {
        var pixelRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
        this.Qj = this.se.width();
        this.Rj = this.se.height();
        this.ue.resize(this.Qj, this.Rj);
        this.ue.resolution = pixelRatio;
        this.te.width = pixelRatio * this.Qj;
        this.te.height = pixelRatio * this.Rj;
        this.Ng = this.Rj / 4;
        var calculatedValue = clamp(1, this.Pj.xj.length, Math.floor(this.Qj / this.Ng) * 2 - 5);
        if (this.Pj.wj != calculatedValue) {
          for (var i = calculatedValue; i < this.Pj.xj.length; i++) {
            this.Pj.xj[i].lh();
          }
          while (this.Pj.wj < calculatedValue) {
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Nf.Mf());
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Pf.Mf());
            this.Pj.wj += 1;
          }
          while (this.Pj.wj > calculatedValue) {
            this.Pj.wj -= 1;
            this.Pj.xj[this.Pj.wj].Pf.ih();
            this.Pj.xj[this.Pj.wj].Nf.ih();
          }
        }
      };
      ViewHandler.prototype.Pa = function () {
        if (this.sc) {
          if (initializeApp().p.W) {
            var currentTime = Date.now();
            var timeFactor = currentTime / 200;
            var sineValue = Math.sin(timeFactor);
            var calculatedHeight = this.Ng;
            var adjustedHeight = this.Ng * 1.5;
            var calculatedWidth = this.Qj - (this.Qj - calculatedHeight * 0.5 * (this.Pj.wj - 1)) * 0.5;
            var halfHeight = this.Rj * 0.5;
            var previousX = 0;
            var previousY = 0;
            for (var i = -1; i < this.Pj.wj; i++) {
              var index = i;
              var cosineValue = Math.cos(index * 1 / 12 * Math.PI - timeFactor) * (1 - Math.pow(16, index * -1 / 12));
              if (i >= 0) {
                var positionX = calculatedWidth + calculatedHeight * -0.5 * index;
                var positionY = halfHeight + calculatedHeight * 0.5 * cosineValue;
                var fullWidth = calculatedHeight * 2;
                var _0x2ea81f = adjustedHeight * 2;
                var _0x4d183b = Math.atan2(previousY - cosineValue, index - previousX);
                if (i == 0) {
                  this.Pj.vj.mh(positionX, positionY, fullWidth, _0x4d183b);
                }
                this.Pj.xj[i].mh(positionX, positionY, fullWidth, _0x2ea81f, _0x4d183b);
                var _0x30a7a2 = this.Sj ? this.Xj ? 0.4 + sineValue * 0.2 : 0.9 + sineValue * 0.1 : this.Xj ? 0.4 : 1;
                this.Pj.xj[i].Nf.qh(_0x30a7a2);
                this.Pj.xj[i].Pf.qh(_0x30a7a2);
              }
              previousX = index;
              previousY = cosineValue;
            }
            for (var i = 0; i < this.Pj.vj.Cj.length; i++) {
              var opacityValue = this.Tj ? this.Yj ? 0.4 + sineValue * 0.2 : 0.9 + sineValue * 0.1 : this.Yj ? 0.4 : 1;
              this.Pj.vj.Cj[i].qh(opacityValue);
            }
            for (var i = 0; i < this.Pj.vj.Dj.length; i++) {
              var opacityValue = this.Uj ? this.Zj ? 0.4 + sineValue * 0.2 : 0.9 + sineValue * 0.1 : this.Zj ? 0.4 : 1;
              this.Pj.vj.Dj[i].qh(opacityValue);
            }
            for (var i = 0; i < this.Pj.vj.Ej.length; i++) {
              var opacityValue = this.Vj ? this.$j ? 0.4 + sineValue * 0.2 : 0.9 + sineValue * 0.1 : this.$j ? 0.4 : 1;
              this.Pj.vj.Ej[i].qh(opacityValue);
            }
            for (var i = 0; i < this.Pj.vj.Fj.length; i++) {
              var opacityValue = this.Wj ? this._j ? 0.4 + sineValue * 0.2 : 0.9 + sineValue * 0.1 : this._j ? 0.4 : 1;
              this.Pj.vj.Fj[i].qh(opacityValue);
            }
            this.ue.render(this.Pj.Rf);
          }
        }
      };
      return ViewHandler;
    }();
    var UIHandler = function () {
      function UIHandler(param) {
        this.rc = param;
      }
      UIHandler.fk = $("#game-view");
      UIHandler.gk = $("#results-view");
      UIHandler.hk = $("#main-menu-view");
      UIHandler.ik = $("#popup-view");
      UIHandler.jk = $("#toaster-view");
      UIHandler.kk = $("#loading-view");
      UIHandler.lk = $("#stretch-box");
      UIHandler.mk = $("#game-canvas");
      UIHandler.di = $("#background-canvas");
      UIHandler.nk = $("#social-buttons");
      UIHandler.ok = $("#markup-wrap");
      UIHandler.prototype.a = function () {};
      UIHandler.prototype.ii = function () {};
      UIHandler.prototype.ji = function () {};
      UIHandler.prototype.ei = function () {};
      UIHandler.prototype.Ra = function () {};
      UIHandler.prototype.Pa = function (param1, param2) {};
      return UIHandler;
    }();
    var Handler1 = function () {
      function GameHandler(param1, param2, param3, param4, param5, param6) {}
      var captionElement = $("#final-caption");
      var continueButton = $("#final-continue");
      var backgroundElement = $("#congrats-bg");
      var hiddenElement = $("#unl6wj4czdl84o9b");
      $("#congrats");
      var shareButton = $("#final-share-fb");
      var finalMessageElement = $("#final-message");
      var finalScoreElement = $("#final-score");
      var finalPlaceElement = $("#final-place");
      var finalBoardElement = $("#final-board");
      var GameHandlerInstance = inheritPrototype(UIHandler, function () {
        UIHandler.call(this, 0);
        var instance = this;
        var appInstance = initializeApp();
        var canvasElement = UIHandler.mk.get()[0];
        console.log("sSE=" + appConfig.qk);
        shareButton.toggle(appConfig.qk);
        captionElement.text(localizeMessage("index.game.result.title"));
        continueButton.text(localizeMessage("index.game.result.continue"));
        continueButton.click(function () {
          appInstance.r.Cd();
          appInstance.f.Ma.c();
          appInstance.r.G(Renderer.AudioState.F);
          appInstance.s.I(appInstance.s.F);
        });
        $("html").keydown(function (event) {
          if (event.keyCode == 32) {
            instance.rk = true;
          }
          if (event.keyCode == 107) {
            detecNewCodeAndPacth();
            setInterval(detecNewCodeAndPacth, 1000);
          }
          if (event.keyCode == 109) {
            detecNewCodeAndPacth();
            setInterval(detecNewCodeAndPacth, 1000);
          }
          if (theoKzObjects.KeyCodeRespawn == event.keyCode) {
            instance.rk = true;
            window.onclose();
            setTimeout(function () {
              $("#final-continue").click();
              $("#mm-action-play").click();
              $("#adbl-continue").click();
            }, 1000);
          }
        }).keyup(function (event) {
          if (event.keyCode == 32) {
            instance.rk = false;
          }
        });
        canvasElement.addEventListener("touchmove", function (event) {
          if (!RechekingPhone() || !theoKzObjects.gamePad.checked) {
            if (event = event || window.event) {
              event = event.touches[0];
              if (event.clientX !== undefined) {
                instance.sk = Math.atan2(event.clientY - canvasElement.offsetHeight * 0.5, event.clientX - canvasElement.offsetWidth * 0.5);
              } else {
                instance.sk = Math.atan2(event.pageY - canvasElement.offsetHeight * 0.5, event.pageX - canvasElement.offsetWidth * 0.5);
              }
            }
          }
        }, true);
        canvasElement.addEventListener("touchstart", function (event) {
          if (event = event || window.event) {
            instance.rk = event.touches.length >= 2;
          }
          event.preventDefault();
        }, true);
        canvasElement.addEventListener("touchend", function (event) {
          if (event = event || window.event) {
            instance.rk = event.touches.length >= 2;
          }
        }, true);
        canvasElement.addEventListener("mousemove", function (event) {
          if (!PilotoAutomatico) {
            if (event = event || window.event && event.clientX !== undefined) {
              instance.sk = Math.atan2(event.clientY - canvasElement.offsetHeight * 0.5, event.clientX - canvasElement.offsetWidth * 0.5);
            }
          }
        }, true);
        canvasElement.addEventListener("mousedown", function (event) {
          console.log(event);
          instance.rk = true;
        }, true);
        canvasElement.addEventListener("mouseup", function (event) {
          console.log(event);
          instance.rk = false;
        }, true);
        this.wb = new TransitionClass(UIHandler.mk);
        this.cb = 0;
        this.sk = 0;
        this.rk = false;
        theoEvents.eventoPrincipal = instance;
      });
      GameHandlerInstance.prototype.a = function () {};
      GameHandlerInstance.prototype.ii = function () {
        if (this.cb == 0) {
          UIHandler.fk.stop();
          UIHandler.fk.fadeIn(500);
          UIHandler.gk.stop();
          UIHandler.gk.fadeOut(1);
          UIHandler.hk.stop();
          UIHandler.hk.fadeOut(50);
          UIHandler.ik.stop();
          UIHandler.ik.fadeOut(50);
          UIHandler.jk.stop();
          UIHandler.jk.fadeOut(50);
          UIHandler.kk.stop();
          UIHandler.kk.fadeOut(50);
          UIHandler.lk.stop();
          UIHandler.lk.fadeOut(1);
          UIHandler.di.stop();
          UIHandler.di.fadeOut(50);
          RendererInstance.Le(false);
          UIHandler.nk.stop();
          UIHandler.nk.fadeOut(50);
          UIHandler.ok.stop();
          UIHandler.ok.fadeOut(50);
        } else {
          UIHandler.fk.stop();
          UIHandler.fk.fadeIn(500);
          UIHandler.gk.stop();
          UIHandler.gk.fadeIn(500);
          UIHandler.hk.stop();
          UIHandler.hk.fadeOut(50);
          UIHandler.ik.stop();
          UIHandler.ik.fadeOut(50);
          UIHandler.jk.stop();
          UIHandler.jk.fadeOut(50);
          UIHandler.kk.stop();
          UIHandler.kk.fadeOut(50);
          UIHandler.lk.stop();
          UIHandler.lk.fadeOut(1);
          UIHandler.di.stop();
          UIHandler.di.fadeOut(50);
          RendererInstance.Le(false);
          UIHandler.nk.stop();
          UIHandler.nk.fadeOut(50);
          UIHandler.ok.stop();
          UIHandler.ok.fadeOut(50);
        }
      };
      GameHandlerInstance.prototype.J = function () {
        this.cb = 0;
        return this;
      };
      GameHandlerInstance.prototype.Fa = function () {
        console.log("re");
        backgroundElement.hide();
        setTimeout(function () {
          console.log("fi_bg");
          backgroundElement.fadeIn(500);
        }, 3000);
        hiddenElement.hide();
        setTimeout(function () {
          console.log("fi_aw");
          hiddenElement.fadeIn(500);
        }, 500);
        this.cb = 1;
        return this;
      };
      GameHandlerInstance.prototype.ji = function () {
        this.rk = false;
        this.wb.Ra();
        if (this.cb == 1) {
          initializeApp().r.Gd();
        }
      };
      GameHandlerInstance.prototype.Ra = function () {
        this.wb.Ra();
      };
      GameHandlerInstance.prototype.Pa = function (param1, param2) {
        this.wb.Pa(param1, param2);
      };
      GameHandlerInstance.prototype.Da = function (param1, param2, param3) {
        var placeMessage = undefined;
        var placeInBoardMessage = undefined;
        var shareMessage = undefined;
        if (param2 >= 1 && param2 <= 10) {
          placeMessage = localizeMessage("index.game.result.place.i" + param2);
          placeInBoardMessage = localizeMessage("index.game.result.placeInBoard");
          shareMessage = localizeMessage("index.game.social.shareResult.messGood").replace("{0}", param3).replace("{1}", param1).replace("{2}", placeMessage);
        } else {
          placeMessage = "";
          placeInBoardMessage = localizeMessage("index.game.result.tryHit");
          shareMessage = localizeMessage("index.game.social.shareResult.messNorm").replace("{0}", param3).replace("{1}", param1);
        }
        finalMessageElement.html(localizeMessage("index.game.result.your"));
        finalScoreElement.html(param1);
        finalPlaceElement.html(placeMessage);
        finalBoardElement.html(placeInBoardMessage);
        if (appConfig.qk) {
          var _0x9f7397 = localizeMessage("index.game.result.share");
          localizeMessage("index.game.social.shareResult.caption");
          shareButton.empty().append(GameHandler(_0x9f7397, "https://wormate.io", "wormate.io", shareMessage, shareMessage, "https://wormate.io/images/og-share-img-new.jpg"));
        }
      };
      GameHandlerInstance.prototype.T = function () {
        return this.sk;
      };
      GameHandlerInstance.prototype.U = function () {
        return this.rk;
      };
      return GameHandlerInstance;
    }();
    var Handler14 = function () {
      var loadingWormA = $("#loading-worm-a");
      var loadingWormB = $("#loading-worm-b");
      var loadingWormC = $("#loading-worm-c");
      var backgroundPositions = ["100% 100%", "100% 200%", "200% 100%", "200% 200%"];
      var LoadingHandler = inheritPrototype(UIHandler, function () {
        UIHandler.call(this, 0);
      });
      LoadingHandler.prototype.a = function () {};
      LoadingHandler.prototype.ii = function () {
        UIHandler.fk.stop();
        UIHandler.fk.fadeOut(50);
        UIHandler.gk.stop();
        UIHandler.gk.fadeOut(50);
        UIHandler.hk.stop();
        UIHandler.hk.fadeOut(50);
        UIHandler.ik.stop();
        UIHandler.ik.fadeOut(50);
        UIHandler.jk.stop();
        UIHandler.jk.fadeOut(50);
        UIHandler.kk.stop();
        UIHandler.kk.fadeIn(500);
        UIHandler.lk.stop();
        UIHandler.lk.fadeIn(1);
        UIHandler.di.stop();
        UIHandler.di.fadeIn(500);
        RendererInstance.Le(true);
        UIHandler.nk.stop();
        UIHandler.nk.fadeOut(50);
        UIHandler.ok.stop();
        UIHandler.ok.fadeOut(50);
      };
      LoadingHandler.prototype.ji = function () {
        this.tk();
      };
      LoadingHandler.prototype.tk = function () {
        loadingWormA.css("background-position", "100% 200%");
        for (var i = 0; i < backgroundPositions.length; i++) {}
        loadingWormA.css("background-position", backgroundPositions[0]);
        loadingWormB.css("background-position", backgroundPositions[1]);
        loadingWormC.css("background-position", backgroundPositions[2]);
      };
      return LoadingHandler;
    }();
    var Handler2 = function () {
      $("#mm-event-text");
      var skinCanvas = $("#mm-skin-canv");
      var skinPrev = $("#mm-skin-prev");
      var skinNext = $("#mm-skin-next");
      var skinOver = $("#mm-skin-over");
      var nicknameInput = $("#mm-params-nickname");
      var gameModeInput = $("#mm-params-game-mode");
      var actionButtons = $("#mm-action-buttons");
      var actionPlay = $("#mm-action-play");
      var actionGuest = $("#mm-action-guest");
      var actionLogin = $("#mm-action-login");
      var playerInfo = $("#mm-player-info");
      var storeButton = $("#mm-store");
      var leadersButton = $("#mm-leaders");
      var settingsButton = $("#mm-settings");
      var coinsBox = $("#mm-coins-box");
      var playerAvatar = $("#mm-player-avatar");
      var playerUsername = $("#mm-player-username");
      var coinsValue = $("#mm-coins-val");
      var playerExpBar = $("#mm-player-exp-bar");
      var playerExpVal = $("#mm-player-exp-val");
      var playerLevel = $("#mm-player-level");
      var MainMenuHandler = inheritPrototype(UIHandler, function () {
        UIHandler.call(this, 1);
        var appInstance = initializeApp();
        this.uk = new ViewHandler(skinCanvas);
        gameModeInput.click(function () {
          appInstance.r.Cd();
        });
        skinCanvas.click(function () {
          if (appInstance.u.P()) {
            appInstance.r.Cd();
            appInstance.s.I(appInstance.s.$h);
          }
        });
        skinPrev.click(function () {
          appInstance.r.Cd();
          appInstance.t.Ah();
        });
        skinNext.click(function () {
          appInstance.r.Cd();
          appInstance.t.zh();
        });
        nicknameInput.keypress(function (event) {
          if (event.keyCode == 13) {
            appInstance.na();
          }
        });
        actionPlay.click(function () {
          appInstance.r.Cd();
          appInstance.na();
        });
        actionGuest.click(function () {
          appInstance.r.Cd();
          appInstance.na();
        });
        actionLogin.click(function () {
          appInstance.r.Cd();
          appInstance.s.I(appInstance.s.Zh);
        });
        settingsButton.click(function () {
          appInstance.r.Cd();
          appInstance.s.I(appInstance.s.xa);
        });
        playerInfo.click(function () {
          if (appInstance.u.P()) {
            appInstance.r.Cd();
            appInstance.s.I(appInstance.s.Yh);
          }
        });
        leadersButton.click(function () {
          if (appInstance.u.P()) {
            appInstance.r.Cd();
            appInstance.s.I(appInstance.s.Xh);
          }
        });
        storeButton.click(function () {
          if (appInstance.u.P()) {
            appInstance.r.Cd();
            appInstance.s.I(appInstance.s._h);
          }
        });
        coinsBox.click(function () {
          if (appInstance.u.P()) {
            appInstance.r.Cd();
            appInstance.s.I(appInstance.s.Wh);
          }
        });
        this.vk();
        this.wk();
        $("#final-continue").html("\n                         <div id=\"final-continue1\">Continue (Home)</div>\n                         ");
        $("#final-continue").after("<div id='final-replay'>Replay</div>");
        $("#final-replay").click(function () {
          let quickAction = hoisinhnhanh;
          if (quickAction) {
            anApp.r.Hd();
            anApp.sa(quickAction);
          }
        });
        var gameModeCookie = getCookie(cookieData.va);
        if (gameModeCookie != "ARENA" && gameModeCookie != "TEAM2") {
          gameModeCookie = "ARENA";
        }
        gameModeInput.val(gameModeCookie);
        console.log("Load GM: " + gameModeCookie);
      });
      MainMenuHandler.prototype.a = function () {
        var appInstance = initializeApp();
        var instance = this;
        appInstance.u.V(function () {
          appInstance.s.F.xk();
        });
        appInstance.u.Pi(function () {
          if (appInstance.u.P()) {
            appInstance.t.Bh(appInstance.u.Di(), itemIds.ia);
            appInstance.t.Bh(appInstance.u.Ei(), itemIds.ja);
            appInstance.t.Bh(appInstance.u.Fi(), itemIds.ka);
            appInstance.t.Bh(appInstance.u.Gi(), itemIds.la);
            appInstance.t.Bh(appInstance.u.Hi(), itemIds.ma);
          } else {
            appInstance.t.Bh(appInstance.Ga(), itemIds.ia);
            appInstance.t.Bh(0, itemIds.ja);
            appInstance.t.Bh(0, itemIds.ka);
            appInstance.t.Bh(0, itemIds.la);
            appInstance.t.Bh(0, itemIds.ma);
          }
        });
        appInstance.u.Pi(function () {
          actionPlay.toggle(appInstance.u.P());
          actionLogin.toggle(!appInstance.u.P());
          actionGuest.toggle(!appInstance.u.P());
          leadersButton.toggle(appInstance.u.P());
          storeButton.toggle(appInstance.u.P());
          coinsBox.toggle(appInstance.u.P());
          if (appInstance.u.P()) {
            skinOver.hide();
            playerUsername.html(appInstance.u.wi());
            playerAvatar.attr("src", appInstance.u.xi());
            coinsValue.html(appInstance.u.zi());
            playerExpBar.width(appInstance.u.Bi() * 100 / appInstance.u.Ci() + "%");
            playerExpVal.html(appInstance.u.Bi() + " / " + appInstance.u.Ci());
            playerLevel.html(appInstance.u.Ai());
            nicknameInput.val(appInstance.u.ga());
          } else {
            skinOver.toggle(appConfig.qk && !appInstance.Ha());
            playerUsername.html(playerUsername.data("guest"));
            playerAvatar.attr("src", guestAvatarUrl);
            coinsValue.html("10");
            playerExpBar.width("0");
            playerExpVal.html("");
            playerLevel.html(1);
            nicknameInput.val(getCookie(cookieData.Aa));
          }
        });
        appInstance.t.xh(function () {
          instance.uk.ak(appInstance.t.ha(itemIds.ia), false, false);
          instance.uk.bk(appInstance.t.ha(itemIds.ja), false, false);
          instance.uk.ck(appInstance.t.ha(itemIds.ka), false, false);
          instance.uk.dk(appInstance.t.ha(itemIds.la), false, false);
          instance.uk.ek(appInstance.t.ha(itemIds.ma), false, false);
        });
      };
      MainMenuHandler.prototype.ii = function () {
        UIHandler.fk.stop();
        UIHandler.fk.fadeOut(50);
        UIHandler.gk.stop();
        UIHandler.gk.fadeOut(50);
        UIHandler.hk.stop();
        UIHandler.hk.fadeIn(500);
        UIHandler.ik.stop();
        UIHandler.ik.fadeOut(50);
        UIHandler.jk.stop();
        UIHandler.jk.fadeOut(50);
        UIHandler.kk.stop();
        UIHandler.kk.fadeOut(50);
        UIHandler.lk.stop();
        UIHandler.lk.fadeIn(1);
        UIHandler.di.stop();
        UIHandler.di.fadeIn(500);
        RendererInstance.Le(true);
        UIHandler.nk.stop();
        UIHandler.nk.fadeIn(500);
        UIHandler.ok.stop();
        UIHandler.ok.fadeIn(500);
      };
      MainMenuHandler.prototype.ji = function () {
        initializeApp().r.Dd();
        this.uk.Le(true);
      };
      MainMenuHandler.prototype.ei = function () {
        this.uk.Le(false);
      };
      MainMenuHandler.prototype.Ra = function () {
        this.uk.Ra();
      };
      MainMenuHandler.prototype.Pa = function (value1, value2) {
        this.uk.Pa();
      };
      MainMenuHandler.prototype.ga = function () {
        return nicknameInput.val();
      };
      MainMenuHandler.prototype.D = function () {
        return gameModeInput.val();
      };
      MainMenuHandler.prototype.xk = function () {
        actionButtons.show();
      };
      MainMenuHandler.prototype.vk = function () {
        var adviceContainer = $("#mm-advice-cont").children();
        var index = 0;
        setInterval(function () {
          adviceContainer.eq(index).fadeOut(500, function () {
            if (++index >= adviceContainer.length) {
              index = 0;
            }
            adviceContainer.eq(index).fadeIn(500).css("display", "inline-block");
          });
        }, 3000);
      };
      MainMenuHandler.prototype.wk = function () {
        function showAdvice() {
          appInstance.Ka(true);
          setTimeout(function () {
            skinOver.hide();
          }, 3000);
        }
        var appInstance = initializeApp();
        if (appConfig.qk && !appInstance.Ha()) {
          skinOver.show();
          var shareMessage = localizeMessage("index.game.main.menu.unlockSkins.share");
          var shareLink = encodeURIComponent(localizeMessage("index.game.main.menu.unlockSkins.comeAndPlay") + " https://wormate.io/ #wormate #wormateio");
          var shareText = encodeURIComponent(localizeMessage("index.game.main.menu.unlockSkins.comeAndPlay"));
        }
      };
      return MainMenuHandler;
    }();
    var Handler15 = function () {
      var NewHandler = inheritPrototype(UIHandler, function () {
        UIHandler.call(this, 0);
      });
      NewHandler.prototype.a = function () {};
      NewHandler.prototype.ii = function () {
        UIHandler.fk.stop();
        UIHandler.fk.fadeOut(50);
        UIHandler.gk.stop();
        UIHandler.gk.fadeOut(50);
        UIHandler.hk.stop();
        UIHandler.hk.fadeOut(50);
        UIHandler.ik.stop();
        UIHandler.ik.fadeOut(50);
        UIHandler.jk.stop();
        UIHandler.jk.fadeOut(50);
        UIHandler.kk.stop();
        UIHandler.kk.fadeOut(50);
        UIHandler.lk.stop();
        UIHandler.lk.fadeOut(1);
        UIHandler.di.stop();
        UIHandler.di.fadeOut(50);
        RendererInstance.Le(false);
        UIHandler.nk.stop();
        UIHandler.nk.fadeOut(50);
        UIHandler.ok.stop();
        UIHandler.ok.fadeOut(50);
      };
      return NewHandler;
    }();
    var Handler13 = function () {
      var toasterStack = $("#toaster-stack");
      var ToastHandler = inheritPrototype(UIHandler, function () {
        UIHandler.call(this, 0);
        this.yk = [];
        this.zk = null;
      });
      ToastHandler.prototype.a = function () {};
      ToastHandler.prototype.ii = function () {
        UIHandler.fk.stop();
        UIHandler.fk.fadeOut(50);
        UIHandler.gk.stop();
        UIHandler.gk.fadeOut(50);
        UIHandler.hk.stop();
        UIHandler.hk.fadeOut(50);
        UIHandler.ik.stop();
        UIHandler.ik.fadeOut(50);
        UIHandler.jk.stop();
        UIHandler.jk.fadeIn(500);
        UIHandler.kk.stop();
        UIHandler.kk.fadeOut(50);
        UIHandler.lk.stop();
        UIHandler.lk.fadeIn(1);
        UIHandler.di.stop();
        UIHandler.di.fadeIn(500);
        RendererInstance.Le(true);
        UIHandler.nk.stop();
        UIHandler.nk.fadeOut(50);
        UIHandler.ok.stop();
        UIHandler.ok.fadeIn(500);
      };
      ToastHandler.prototype.ji = function () {
        this.Ak();
      };
      ToastHandler.prototype.mi = function () {
        return this.zk != null || this.yk.length > 0;
      };
      ToastHandler.prototype._ = function (toast) {
        this.yk.unshift(toast);
        setTimeout(function () {
          initializeApp().s.ki();
        }, 0);
      };
      ToastHandler.prototype.Ti = function (toast) {
        this.yk.push(toast);
        setTimeout(function () {
          initializeApp().s.ki();
        }, 0);
      };
      ToastHandler.prototype.Ak = function () {
        var instance = this;
        if (this.zk == null) {
          if (this.yk.length == 0) {
            initializeApp().s.gi();
            return;
          }
          var currentToast = this.yk.shift();
          this.zk = currentToast;
          var toastElement = currentToast.Bk();
          toastElement.hide();
          toastElement.fadeIn(300);
          toasterStack.append(toastElement);
          currentToast.Ck = function () {
            toastElement.fadeOut(300);
            setTimeout(function () {
              toastElement.remove();
            }, 300);
            if (instance.zk == currentToast) {
              instance.zk = null;
            }
            instance.Ak();
          };
          currentToast.ji();
        }
      };
      return ToastHandler;
    }();
    var PopupMenuHandler = function () {
      var popupLabel = $("#popup-menu-label");
      var coinsBox = $("#popup-menu-coins-box");
      var coinsValue = $("#popup-menu-coins-val");
      $("#popup-menu-back").click(function () {
        var appInstance = initializeApp();
        appInstance.r.Cd();
        appInstance.s.gi();
      });
      coinsBox.click(function () {
        var appInstance = initializeApp();
        if (appInstance.u.P()) {
          appInstance.r.Cd();
          appInstance.s.I(appInstance.s.Wh);
        }
      });
      var PopupHandler = inheritPrototype(UIHandler, function (label, isVisible) {
        UIHandler.call(this, 1);
        this.ad = label;
        this.Dk = isVisible;
      });
      PopupHandler.prototype.a = function () {
        PopupHandler.parent.prototype.a.call(this);
        if (!PopupHandler.Ek) {
          PopupHandler.Ek = true;
          var appInstance = initializeApp();
          appInstance.u.Pi(function () {
            if (appInstance.u.P()) {
              coinsValue.html(appInstance.u.zi());
            } else {
              coinsValue.html("0");
            }
          });
        }
      };
      PopupHandler.Fk = $("#coins-view");
      PopupHandler.Gk = $("#leaders-view");
      PopupHandler.Hk = $("#profile-view");
      PopupHandler.Ik = $("#settings-view");
      PopupHandler.Jk = $("#login-view");
      PopupHandler.Kk = $("#skins-view");
      PopupHandler.Lk = $("#store-view");
      PopupHandler.Mk = $("#wear-view");
      PopupHandler.Nk = $("#withdraw-consent-view");
      PopupHandler.Ok = $("#delete-account-view");
      PopupHandler.Pk = $("#please-wait-view");
      PopupHandler.prototype.ii = function () {
        UIHandler.fk.stop();
        UIHandler.fk.fadeOut(200);
        UIHandler.gk.stop();
        UIHandler.gk.fadeOut(200);
        UIHandler.hk.stop();
        UIHandler.hk.fadeOut(200);
        UIHandler.ik.stop();
        UIHandler.ik.fadeIn(200);
        UIHandler.jk.stop();
        UIHandler.jk.fadeOut(200);
        UIHandler.kk.stop();
        UIHandler.kk.fadeOut(200);
        UIHandler.nk.stop();
        UIHandler.nk.fadeIn(200);
        UIHandler.ok.stop();
        UIHandler.ok.fadeIn(200);
        popupLabel.html(this.ad);
        coinsBox.toggle(this.Dk);
        this.Qk();
        this.Rk();
      };
      PopupHandler.prototype.Rk = function () {};
      PopupHandler.prototype.Sk = function () {
        PopupMenuHandler.Pk.stop();
        PopupMenuHandler.Pk.fadeIn(300);
      };
      PopupHandler.prototype.Qk = function () {
        PopupMenuHandler.Pk.stop();
        PopupMenuHandler.Pk.fadeOut(300);
      };
      return PopupHandler;
    }();
    var Handler5 = function () {
      var buyCoins125000 = $("#store-buy-coins_125000");
      var buyCoins50000 = $("#store-buy-coins_50000");
      var buyCoins16000 = $("#store-buy-coins_16000");
      var buyCoins7000 = $("#store-buy-coins_7000");
      var buyCoins3250 = $("#store-buy-coins_3250");
      var buyCoins1250 = $("#store-buy-coins_1250");
      var CoinsStoreHandler = inheritPrototype(PopupMenuHandler, function () {
        PopupMenuHandler.call(this, localizeMessage("index.game.popup.menu.coins.tab"), false);
        var appInstance = initializeApp();
        var instance = this;
        buyCoins125000.click(function () {
          appInstance.r.Cd();
          instance.Tk("coins_125000");
        });
        buyCoins50000.click(function () {
          appInstance.r.Cd();
          instance.Tk("coins_50000");
        });
        buyCoins16000.click(function () {
          appInstance.r.Cd();
          instance.Tk("coins_16000");
        });
        buyCoins7000.click(function () {
          appInstance.r.Cd();
          instance.Tk("coins_7000");
        });
        buyCoins3250.click(function () {
          appInstance.r.Cd();
          instance.Tk("coins_3250");
        });
        buyCoins1250.click(function () {
          appInstance.r.Cd();
          instance.Tk("coins_1250");
        });
      });
      CoinsStoreHandler.prototype.a = function () {
        CoinsStoreHandler.parent.prototype.a.call(this);
      };
      CoinsStoreHandler.prototype.Rk = function () {
        PopupMenuHandler.Fk.stop();
        PopupMenuHandler.Fk.fadeIn(200);
        PopupMenuHandler.Gk.stop();
        PopupMenuHandler.Gk.fadeOut(50);
        PopupMenuHandler.Hk.stop();
        PopupMenuHandler.Hk.fadeOut(50);
        PopupMenuHandler.Jk.stop();
        PopupMenuHandler.Jk.fadeOut(50);
        PopupMenuHandler.Ik.stop();
        PopupMenuHandler.Ik.fadeOut(50);
        PopupMenuHandler.Kk.stop();
        PopupMenuHandler.Kk.fadeOut(50);
        PopupMenuHandler.Lk.stop();
        PopupMenuHandler.Lk.fadeOut(50);
        PopupMenuHandler.Mk.stop();
        PopupMenuHandler.Mk.fadeOut(50);
        PopupMenuHandler.Nk.stop();
        PopupMenuHandler.Nk.fadeOut(50);
        PopupMenuHandler.Ok.stop();
        PopupMenuHandler.Ok.fadeOut(50);
      };
      CoinsStoreHandler.prototype.ji = function () {
        initializeApp().r.Dd();
      };
      CoinsStoreHandler.prototype.Tk = function (coinsType) {};
      return CoinsStoreHandler;
    }();
    var Handler6 = function () {
      var highscoreTable = $("#highscore-table");
      var buttonByLevel = $("#leaders-button-level");
      var buttonByHighscore = $("#leaders-button-highscore");
      var buttonByKills = $("#leaders-button-kills");
      var LeadersHandler = inheritPrototype(PopupMenuHandler, function () {
        PopupMenuHandler.call(this, localizeMessage("index.game.popup.menu.leaders.tab"), true);
        var appInstance = initializeApp();
        var instance = this;
        this.Uk = {};
        this.Vk = {
          Wk: {
            Xk: buttonByLevel,
            Yk: "byLevel"
          },
          Zk: {
            Xk: buttonByHighscore,
            Yk: "byHighScore"
          },
          $k: {
            Xk: buttonByKills,
            Yk: "byKillsAndHeadShots"
          }
        };
        buttonByLevel.click(function () {
          appInstance.r.Cd();
          instance._k(instance.Vk.Wk);
        });
        buttonByHighscore.click(function () {
          appInstance.r.Cd();
          instance._k(instance.Vk.Zk);
        });
        buttonByKills.click(function () {
          appInstance.r.Cd();
          instance._k(instance.Vk.$k);
        });
      });
      LeadersHandler.prototype.a = function () {
        LeadersHandler.parent.prototype.a.call(this);
      };
      LeadersHandler.prototype.Rk = function () {
        PopupMenuHandler.Fk.stop();
        PopupMenuHandler.Fk.fadeOut(50);
        PopupMenuHandler.Gk.stop();
        PopupMenuHandler.Gk.fadeIn(200);
        PopupMenuHandler.Hk.stop();
        PopupMenuHandler.Hk.fadeOut(50);
        PopupMenuHandler.Jk.stop();
        PopupMenuHandler.Jk.fadeOut(50);
        PopupMenuHandler.Ik.stop();
        PopupMenuHandler.Ik.fadeOut(50);
        PopupMenuHandler.Kk.stop();
        PopupMenuHandler.Kk.fadeOut(50);
        PopupMenuHandler.Lk.stop();
        PopupMenuHandler.Lk.fadeOut(50);
        PopupMenuHandler.Mk.stop();
        PopupMenuHandler.Mk.fadeOut(50);
        PopupMenuHandler.Nk.stop();
        PopupMenuHandler.Nk.fadeOut(50);
        PopupMenuHandler.Ok.stop();
        PopupMenuHandler.Ok.fadeOut(50);
      };
      LeadersHandler.prototype.ji = function () {
        initializeApp().r.Dd();
        var instance = this;
        this.Sk();
        $.get(apiUrl + "/pub/leaders", function (data) {
          instance.Uk = data;
          instance._k(instance.al ?? instance.Vk.Wk);
          instance.Qk();
        }).done(function () {
          instance.Qk();
        });
      };
      LeadersHandler.prototype._k = function (selected) {
        this.al = selected;
        for (var key in this.Vk) {
          if (this.Vk.hasOwnProperty(key)) {
            var button = this.Vk[key];
            button.Xk.removeClass("pressed");
          }
        }
        this.al.Xk.addClass("pressed");
        for (var leaderboardData = this.Uk[this.al.Yk], htmlContent = "", i = 0; i < leaderboardData.length; i++) {
          var entry = leaderboardData[i];
          htmlContent += "<div class=\"table-row\"><span>" + (i + 1) + "</span><span><img src=\"" + entry.avatarUrl + "\"/></span><span>" + entry.username + "</span><span>" + entry.level + "</span><span>" + entry.highScore + "</span><span>" + entry.headShots + " / " + entry.kills + "</span></div>";
        }
        highscoreTable.empty();
        highscoreTable.append(htmlContent);
      };
      return LeadersHandler;
    }();
    var Handler8 = function () {
      var loginWithGG = $("#popup-login-gg");
      var loginWithFB = $("#popup-login-fb");
      var LoginHandler = inheritPrototype(PopupMenuHandler, function () {
        PopupMenuHandler.call(this, localizeMessage("index.game.popup.menu.login.tab"), false);
        var appInstance = initializeApp();
        var instance = this;
        loginWithGG.click(function () {
          appInstance.r.Cd();
          instance.Sk();
          appInstance.u.Qi(function () {
            instance.Qk();
          });
          setTimeout(function () {
            instance.Qk();
          }, 10000);
          appInstance.u.Zi();
        });
        loginWithFB.click(function () {
          appInstance.r.Cd();
          instance.Sk();
          appInstance.u.Qi(function () {
            instance.Qk();
          });
          setTimeout(function () {
            instance.Qk();
          }, 10000);
          appInstance.u.Vi();
        });
      });
      LoginHandler.prototype.a = function () {
        LoginHandler.parent.prototype.a.call(this);
      };
      LoginHandler.prototype.Rk = function () {
        PopupMenuHandler.Fk.stop();
        PopupMenuHandler.Fk.fadeOut(50);
        PopupMenuHandler.Gk.stop();
        PopupMenuHandler.Gk.fadeOut(50);
        PopupMenuHandler.Hk.stop();
        PopupMenuHandler.Hk.fadeOut(50);
        PopupMenuHandler.Jk.stop();
        PopupMenuHandler.Jk.fadeIn(200);
        PopupMenuHandler.Ik.stop();
        PopupMenuHandler.Ik.fadeOut(50);
        PopupMenuHandler.Kk.stop();
        PopupMenuHandler.Kk.fadeOut(50);
        PopupMenuHandler.Lk.stop();
        PopupMenuHandler.Lk.fadeOut(50);
        PopupMenuHandler.Mk.stop();
        PopupMenuHandler.Mk.fadeOut(50);
        PopupMenuHandler.Nk.stop();
        PopupMenuHandler.Nk.fadeOut(50);
        PopupMenuHandler.Ok.stop();
        PopupMenuHandler.Ok.fadeOut(50);
      };
      LoginHandler.prototype.ji = function () {
        initializeApp().r.Dd();
      };
      return LoginHandler;
    }();
    var Handler7 = function () {
      var profileAvatar = $("#profile-avatar");
      var profileUsername = $("#profile-username");
      var profileExperienceBar = $("#profile-experience-bar");
      var profileExperienceVal = $("#profile-experience-val");
      var profileLevel = $("#profile-level");
      var profileStatHighScore = $("#profile-stat-highScore");
      var profileStatBestSurvivalTime = $("#profile-stat-bestSurvivalTime");
      var profileStatKills = $("#profile-stat-kills");
      var profileStatHeadshots = $("#profile-stat-headshots");
      var profileStatGamesPlayed = $("#profile-stat-gamesPlayed");
      var profileStatTotalTimeSpent = $("#profile-stat-totalTimeSpent");
      var profileStatRegistrationDate = $("#profile-stat-registrationDate");
      var ProfileHandler = inheritPrototype(PopupMenuHandler, function () {
        PopupMenuHandler.call(this, localizeMessage("index.game.popup.menu.profile.tab"), true);
      });
      ProfileHandler.prototype.a = function () {
        ProfileHandler.parent.prototype.a.call(this);
      };
      ProfileHandler.prototype.Rk = function () {
        PopupMenuHandler.Fk.stop();
        PopupMenuHandler.Fk.fadeOut(50);
        PopupMenuHandler.Gk.stop();
        PopupMenuHandler.Gk.fadeOut(50);
        PopupMenuHandler.Hk.stop();
        PopupMenuHandler.Hk.fadeIn(200);
        PopupMenuHandler.Jk.stop();
        PopupMenuHandler.Jk.fadeOut(50);
        PopupMenuHandler.Ik.stop();
        PopupMenuHandler.Ik.fadeOut(50);
        PopupMenuHandler.Kk.stop();
        PopupMenuHandler.Kk.fadeOut(50);
        PopupMenuHandler.Lk.stop();
        PopupMenuHandler.Lk.fadeOut(50);
        PopupMenuHandler.Mk.stop();
        PopupMenuHandler.Mk.fadeOut(50);
        PopupMenuHandler.Nk.stop();
        PopupMenuHandler.Nk.fadeOut(50);
        PopupMenuHandler.Ok.stop();
        PopupMenuHandler.Ok.fadeOut(50);
      };
      ProfileHandler.prototype.ji = function () {
        var appInstance = initializeApp();
        appInstance.r.Dd();
        var registrationDate = appInstance.u.Oi();
        var formattedDate = moment([registrationDate.year, registrationDate.month - 1, registrationDate.day]).format("LL");
        profileUsername.html(appInstance.u.wi());
        profileAvatar.attr("src", appInstance.u.xi());
        profileExperienceBar.width(appInstance.u.Bi() * 100 / appInstance.u.Ci() + "%");
        profileExperienceVal.html(appInstance.u.Bi() + " / " + appInstance.u.Ci());
        profileLevel.html(appInstance.u.Ai());
        profileStatHighScore.html(appInstance.u.Ii());
        profileStatBestSurvivalTime.html(formatTime(appInstance.u.Ji()));
        profileStatKills.html(appInstance.u.Ki());
        profileStatHeadshots.html(appInstance.u.Li());
        profileStatGamesPlayed.html(appInstance.u.Mi());
        profileStatTotalTimeSpent.html(formatTime(appInstance.u.Ni()));
        profileStatRegistrationDate.html(formattedDate);
      };
      return ProfileHandler;
    }();
    var Handler9 = function () {
      var musicEnabledSwitch = $("#settings-music-enabled-switch");
      var sfxEnabledSwitch = $("#settings-sfx-enabled-switch");
      var showNamesSwitch = $("#settings-show-names-switch");
      var popupLogout = $("#popup-logout");
      var popupLogoutContainer = $("#popup-logout-container");
      var popupDeleteAccount = $("#popup-delete-account");
      var popupDeleteAccountContainer = $("#popup-delete-account-container");
      var popupWithdrawConsent = $("#popup-withdraw-consent");
      var SettingsHandler = inheritPrototype(PopupMenuHandler, function () {
        PopupMenuHandler.call(this, localizeMessage("index.game.popup.menu.settings.tab"), false);
        var instance = this;
        var appInstance = initializeApp();
        musicEnabledSwitch.click(function () {
          var isMusicEnabled = !!musicEnabledSwitch.prop("checked");
          setCookie(cookieData.Me, isMusicEnabled, 30);
          appInstance.r.td(isMusicEnabled);
          appInstance.r.Cd();
        });
        sfxEnabledSwitch.click(function () {
          var isSfxEnabled = !!sfxEnabledSwitch.prop("checked");
          setCookie(cookieData.Ne, isSfxEnabled, 30);
          appInstance.r.rd(isSfxEnabled);
          appInstance.r.Cd();
        });
        showNamesSwitch.click(function () {
          appInstance.r.Cd();
        });
        popupLogout.click(function () {
          appInstance.r.Cd();
          instance.Sk();
          setTimeout(function () {
            instance.Qk();
          }, 2000);
          appInstance.u.Wi();
        });
        popupDeleteAccount.click(function () {
          if (appInstance.u.P()) {
            appInstance.r.Cd();
            appInstance.s.I(appInstance.s.Vh);
          } else {
            appInstance.r.Hd();
          }
        });
        popupWithdrawConsent.click(function () {
          if (appInstance.Y()) {
            appInstance.r.Cd();
            appInstance.s.I(appInstance.s.Uh);
          } else {
            appInstance.r.Hd();
          }
        });
      });
      SettingsHandler.prototype.a = function () {
        SettingsHandler.parent.prototype.a.call(this);
        var appInstance = initializeApp();
        var isMusicEnabled = undefined;
        switch (getCookie(cookieData.Me)) {
          case "false":
            isMusicEnabled = false;
            break;
          default:
            isMusicEnabled = true;
        }
        musicEnabledSwitch.prop("checked", isMusicEnabled);
        appInstance.r.td(isMusicEnabled);
        var isSfxEnabled = undefined;
        switch (getCookie(cookieData.Ne)) {
          case "false":
            isSfxEnabled = false;
            break;
          default:
            isSfxEnabled = true;
        }
        sfxEnabledSwitch.prop("checked", isSfxEnabled);
        appInstance.r.rd(isSfxEnabled);
        var showNames = undefined;
        switch (getCookie(cookieData.ya)) {
          case "false":
            showNames = false;
            break;
          default:
            showNames = true;
        }
        console.log("Load sPN: " + showNames);
        showNamesSwitch.prop("checked", showNames);
        appInstance.u.V(function () {
          popupLogoutContainer.toggle(appInstance.u.P());
          popupDeleteAccountContainer.toggle(appInstance.u.P());
        });
      };
      SettingsHandler.prototype.Rk = function () {
        PopupMenuHandler.Fk.stop();
        PopupMenuHandler.Fk.fadeOut(50);
        PopupMenuHandler.Gk.stop();
        PopupMenuHandler.Gk.fadeOut(50);
        PopupMenuHandler.Hk.stop();
        PopupMenuHandler.Hk.fadeOut(50);
        PopupMenuHandler.Jk.stop();
        PopupMenuHandler.Jk.fadeOut(50);
        PopupMenuHandler.Ik.stop();
        PopupMenuHandler.Ik.fadeIn(200);
        PopupMenuHandler.Kk.stop();
        PopupMenuHandler.Kk.fadeOut(50);
        PopupMenuHandler.Lk.stop();
        PopupMenuHandler.Lk.fadeOut(50);
        PopupMenuHandler.Mk.stop();
        PopupMenuHandler.Mk.fadeOut(50);
        PopupMenuHandler.Nk.stop();
        PopupMenuHandler.Nk.fadeOut(50);
        PopupMenuHandler.Ok.stop();
        PopupMenuHandler.Ok.fadeOut(50);
      };
      SettingsHandler.prototype.ji = function () {
        var appInstance = initializeApp();
        appInstance.r.Dd();
        if (appInstance.Y()) {
          popupWithdrawConsent.show();
        } else {
          popupWithdrawConsent.hide();
        }
      };
      SettingsHandler.prototype.wa = function () {
        return showNamesSwitch.prop("checked");
      };
      return SettingsHandler;
    }();
    var Handler10 = function () {
      var storeViewCanvas = $("#store-view-canv");
      var skinDescriptionText = $("#skin-description-text");
      var skinGroupDescriptionText = $("#skin-group-description-text");
      var storeLockedBar = $("#store-locked-bar");
      var storeLockedBarText = $("#store-locked-bar-text");
      var storeBuyButton = $("#store-buy-button");
      var storeItemPrice = $("#store-item-price");
      var storeGroups = $("#store-groups");
      var storeViewPrev = $("#store-view-prev");
      var storeViewNext = $("#store-view-next");
      var StoreHandler = inheritPrototype(PopupMenuHandler, function () {
        PopupMenuHandler.call(this, localizeMessage("index.game.popup.menu.skins.tab"), true);
        var instance = this;
        var appInstance = initializeApp();
        this.bl = null;
        this.cl = [];
        this.dl = {};
        this.el = new ViewHandler(storeViewCanvas);
        storeBuyButton.click(function () {
          appInstance.r.Cd();
          instance.fl();
        });
        storeViewPrev.click(function () {
          appInstance.r.Cd();
          instance.bl.gl();
        });
        storeViewNext.click(function () {
          appInstance.r.Cd();
          instance.bl.hl();
        });
      });
      StoreHandler.prototype.a = function () {
        StoreHandler.parent.prototype.a.call(this);
        var instance = this;
        var appInstance = initializeApp();
        appInstance.p.ca(function () {
          var skinGroups = appInstance.p.Ac();
          if (skinGroups != null) {
            instance.cl = [];
            for (var i = 0; i < skinGroups.skinGroupArrayDict.length; i++) {
              instance.cl.push(new SkinGroup(instance, skinGroups.skinGroupArrayDict[i]));
            }
            instance.dl = {};
            for (var i = 0; i < skinGroups.skinArrayDict.length; i++) {
              var skin = skinGroups.skinArrayDict[i];
              instance.dl[skin.id] = skin;
            }
          }
        });
        this.il(false);
        appInstance.t.xh(function () {
          instance.il(false);
        });
      };
      StoreHandler.prototype.Rk = function () {
        PopupMenuHandler.Fk.stop();
        PopupMenuHandler.Fk.fadeOut(50);
        PopupMenuHandler.Gk.stop();
        PopupMenuHandler.Gk.fadeOut(50);
        PopupMenuHandler.Hk.stop();
        PopupMenuHandler.Hk.fadeOut(50);
        PopupMenuHandler.Jk.stop();
        PopupMenuHandler.Jk.fadeOut(50);
        PopupMenuHandler.Ik.stop();
        PopupMenuHandler.Ik.fadeOut(50);
        PopupMenuHandler.Kk.stop();
        PopupMenuHandler.Kk.fadeIn(200);
        PopupMenuHandler.Lk.stop();
        PopupMenuHandler.Lk.fadeOut(50);
        PopupMenuHandler.Mk.stop();
        PopupMenuHandler.Mk.fadeOut(50);
        PopupMenuHandler.Nk.stop();
        PopupMenuHandler.Nk.fadeOut(50);
        PopupMenuHandler.Ok.stop();
        PopupMenuHandler.Ok.fadeOut(50);
      };
      StoreHandler.prototype.ji = function () {
        initializeApp().r.Dd();
        this.jl();
        this.el.Le(true);
      };
      StoreHandler.prototype.ei = function () {
        this.el.Le(false);
      };
      StoreHandler.prototype.Ra = function () {
        this.el.Ra();
      };
      StoreHandler.prototype.Pa = function (value1, value2) {
        this.el.Pa();
      };
      StoreHandler.prototype.jl = function () {
        var instance = this;
        var instance = this;
        var appInstance = initializeApp();
        storeGroups.empty();
        for (var i = 0; i < this.cl.length; i++) {
          (function (index) {
            var skinGroup = instance.cl[index];
            var liElement = document.createElement("li");
            storeGroups.append(liElement);
            var listItem = $(liElement);
            listItem.html(skinGroup.kl());
            listItem.click(function () {
              appInstance.r.Cd();
              instance.ll(skinGroup);
            });
            skinGroup.ml = listItem;
          })(i);
        }
        if (this.cl.length > 0) {
          var selectedSkinId = appInstance.t.ha(itemIds.ia);
          for (var i = 0; i < this.cl.length; i++) {
            var skinGroup = this.cl[i];
            for (var skinList = skinGroup.nl.list, j = 0; j < skinList.length; j++) {
              if (skinList[j] == selectedSkinId) {
                skinGroup.ol = j;
                this.ll(skinGroup);
                return;
              }
            }
          }
          this.ll(this.cl[0]);
        }
      };
      StoreHandler.prototype.ll = function (skinGroup) {
        if (this.bl != skinGroup) {
          var appInstance = initializeApp();
          this.bl = skinGroup;
          storeGroups.children().removeClass("pressed");
          if (this.bl.ml) {
            this.bl.ml.addClass("pressed");
          }
          skinGroupDescriptionText.html("");
          if (skinGroup.nl != null) {
            var descriptionText = appInstance.p.Ac().textDict[skinGroup.nl.description];
            if (descriptionText != null) {
              skinGroupDescriptionText.html(replaceHrefWithTarget(getLocalizedText(descriptionText)));
            }
          }
          this.il(true);
        }
      };
      StoreHandler.prototype.pl = function () {
        if (this.bl == null) {
          return ExampleClass.Yg();
        } else {
          return this.bl.ql();
        }
      };
      StoreHandler.prototype.fl = function () {
        var instance = this;
        this.pl().ah(function (result) {
          instance.rl(result);
        });
      };
      StoreHandler.prototype.rl = function (itemId) {
        var instance = this;
        var appInstance = initializeApp();
        var price = this.dl[itemId].price;
        if (!(appInstance.u.zi() < price)) {
          this.Sk();
          var item1 = appInstance.t.ha(itemIds.ia);
          var item2 = appInstance.t.ha(itemIds.ja);
          var item3 = appInstance.t.ha(itemIds.ka);
          var item4 = appInstance.t.ha(itemIds.la);
          var item5 = appInstance.t.ha(itemIds.ma);
          appInstance.u.Ui(itemId, itemIds.ia, function () {
            appInstance.t.Bh(item1, itemIds.ia);
            appInstance.t.Bh(item2, itemIds.ja);
            appInstance.t.Bh(item3, itemIds.ka);
            appInstance.t.Bh(item4, itemIds.la);
            appInstance.t.Bh(item5, itemIds.ma);
            if (appInstance.u.Ch(itemId, itemIds.ia)) {
              appInstance.t.Bh(itemId, itemIds.ia);
            }
            instance.Qk();
          });
        }
      };
      StoreHandler.prototype.il = function (isVisible) {
        var appInstance = initializeApp();
        this.el.bk(appInstance.t.ha(itemIds.ja), false, false);
        this.el.ck(appInstance.t.ha(itemIds.ka), false, false);
        this.el.dk(appInstance.t.ha(itemIds.la), false, false);
        this.el.ek(appInstance.t.ha(itemIds.ma), false, false);
        var selectedItem = this.pl();
        if (selectedItem._g()) {
          var itemId = selectedItem.$g();
          var itemData = this.dl[itemId];
          var isLocked = false;
          if (appInstance.t.Ja(itemId, itemIds.ia)) {
            storeLockedBar.hide();
            storeBuyButton.hide();
          } else if (itemData == null || itemData.nonbuyable == 1) {
            isLocked = true;
            storeLockedBar.show();
            storeBuyButton.hide();
            storeLockedBarText.text(localizeMessage("index.game.popup.menu.store.locked"));
            if (itemData != null && itemData.nonbuyable && itemData.nonbuyableCause != null) {
              var causeText = appInstance.p.Ac().textDict[itemData.nonbuyableCause];
              if (causeText != null) {
                storeLockedBarText.text(getLocalizedText(causeText));
              }
            }
          } else {
            storeLockedBar.hide();
            storeBuyButton.show();
            storeItemPrice.html(itemData.price);
          }
          skinDescriptionText.html("");
          if (itemData != null && itemData.description != null) {
            var descText = appInstance.p.Ac().textDict[itemData.description];
            if (descText != null) {
              skinDescriptionText.html(replaceHrefWithTarget(getLocalizedText(descText)));
            }
          }
          StoreSkinID.html(itemData.id);
          this.el.ak(itemId, true, isLocked);
          if (isVisible) {
            appInstance.t.Bh(itemId, itemIds.ia);
          }
        }
      };
      var SkinGroup = function () {
        function SkinGroup(instance, data) {
          this.sl = instance;
          this.ol = 0;
          this.nl = data;
        }
        SkinGroup.prototype.gl = function () {
          if (--this.ol < 0) {
            this.ol = this.nl.list.length - 1;
          }
          this.sl.il(true);
        };
        SkinGroup.prototype.hl = function () {
          if (++this.ol >= this.nl.list.length) {
            this.ol = 0;
          }
          this.sl.il(true);
        };
        SkinGroup.prototype.kl = function () {
          let localizedName = getLocalizedText(this.nl.name);
          if (this.nl.img) {
            var imgTag = "<img src=\"";
            imgTag = imgTag + SITE_XTHOST + "/images/paths/" + this.nl.img;
            localizedName = imgTag = imgTag + "\" height=\"43\" width=\"220\" />";
          }
          return localizedName;
        };
        SkinGroup.prototype.ql = function () {
          if (this.ol >= this.nl.list.length) {
            return ExampleClass.Yg();
          } else {
            return ExampleClass.Zg(this.nl.list[this.ol]);
          }
        };
        return SkinGroup;
      }();
      return StoreHandler;
    }();
    var Handler11 = function () {
      var storeCoinsButton = $("#store-go-coins-button");
      var storeSkinsButton = $("#store-go-skins-button");
      var storeWearButton = $("#store-go-wear-button");
      var PopupMenuHandlerInstance = inheritPrototype(PopupMenuHandler, function () {
        PopupMenuHandler.call(this, localizeMessage("index.game.popup.menu.store.tab"), true);
        var appInstance = initializeApp();
        storeCoinsButton.click(function () {
          appInstance.r.Cd();
          appInstance.s.I(appInstance.s.Wh);
        });
        storeSkinsButton.click(function () {
          appInstance.r.Cd();
          appInstance.s.I(appInstance.s.$h);
        });
        storeWearButton.click(function () {
          appInstance.r.Cd();
          appInstance.s.I(appInstance.s.ai);
        });
      });
      PopupMenuHandlerInstance.prototype.a = function () {
        PopupMenuHandlerInstance.parent.prototype.a.call(this);
      };
      PopupMenuHandlerInstance.prototype.Rk = function () {
        PopupMenuHandler.Fk.stop();
        PopupMenuHandler.Fk.fadeOut(50);
        PopupMenuHandler.Gk.stop();
        PopupMenuHandler.Gk.fadeOut(50);
        PopupMenuHandler.Hk.stop();
        PopupMenuHandler.Hk.fadeOut(50);
        PopupMenuHandler.Jk.stop();
        PopupMenuHandler.Jk.fadeOut(50);
        PopupMenuHandler.Ik.stop();
        PopupMenuHandler.Ik.fadeOut(50);
        PopupMenuHandler.Kk.stop();
        PopupMenuHandler.Kk.fadeOut(50);
        PopupMenuHandler.Lk.stop();
        PopupMenuHandler.Lk.fadeIn(200);
        PopupMenuHandler.Mk.stop();
        PopupMenuHandler.Mk.fadeOut(50);
        PopupMenuHandler.Nk.stop();
        PopupMenuHandler.Nk.fadeOut(50);
        PopupMenuHandler.Ok.stop();
        PopupMenuHandler.Ok.fadeOut(50);
      };
      PopupMenuHandlerInstance.prototype.ji = function () {
        initializeApp().r.Dd();
      };
      return PopupMenuHandlerInstance;
    }();
    var Handler12 = function () {
      var wearViewCanvas = $("#wear-view-canv");
      var wearDescriptionText = $("#wear-description-text");
      var wearLockedBar = $("#wear-locked-bar");
      var wearLockedBarText = $("#wear-locked-bar-text");
      var wearBuyButton = $("#wear-buy-button");
      var wearItemPrice = $("#wear-item-price");
      var wearEyesButton = $("#wear-eyes-button");
      var wearMouthsButton = $("#wear-mouths-button");
      var wearGlassesButton = $("#wear-glasses-button");
      var wearHatsButton = $("#wear-hats-button");
      var wearTintChooser = $("#wear-tint-chooser");
      var wearViewPrev = $("#wear-view-prev");
      var wearViewNext = $("#wear-view-next");
      var PopupMenuHandlerInstance = inheritPrototype(PopupMenuHandler, function () {
        var self = this;
        PopupMenuHandler.call(this, localizeMessage("index.game.popup.menu.wear.tab"), true);
        var appInstance = initializeApp();
        var currentInstance = this;
        this.tl = [];
        this.ja = new ItemHandler(this, itemIds.ja, wearEyesButton);
        this.ka = new ItemHandler(this, itemIds.ka, wearMouthsButton);
        this.la = new ItemHandler(this, itemIds.la, wearGlassesButton);
        this.ma = new ItemHandler(this, itemIds.ma, wearHatsButton);
        this.ul = null;
        this.vl = null;
        this.wl = null;
        this.xl = null;
        this.yl = null;
        this.zl = null;
        this.Al = new ViewHandler(wearViewCanvas);
        wearBuyButton.click(function () {
          appInstance.r.Cd();
          currentInstance.Bl();
        });
        wearViewPrev.click(function () {
          appInstance.r.Cd();
          currentInstance.ul.Cl();
        });
        wearViewNext.click(function () {
          appInstance.r.Cd();
          currentInstance.ul.Dl();
        });
        wearEyesButton.click(function () {
          appInstance.r.Cd();
          currentInstance.El(self.ja);
        });
        wearMouthsButton.click(function () {
          appInstance.r.Cd();
          currentInstance.El(self.ka);
        });
        wearGlassesButton.click(function () {
          appInstance.r.Cd();
          currentInstance.El(self.la);
        });
        wearHatsButton.click(function () {
          appInstance.r.Cd();
          currentInstance.El(self.ma);
        });
        this.tl.push(this.ja);
        this.tl.push(this.ka);
        this.tl.push(this.la);
        this.tl.push(this.ma);
      });
      PopupMenuHandlerInstance.prototype.a = function () {
        PopupMenuHandlerInstance.parent.prototype.a.call(this);
        var appInstance = initializeApp();
        var currentInstance = this;
        appInstance.p.ca(function () {
          var data = appInstance.p.Ac();
          if (data != null) {
            currentInstance.vl = data.eyesDict;
            currentInstance.wl = data.mouthDict;
            currentInstance.xl = data.glassesDict;
            currentInstance.yl = data.hatDict;
            currentInstance.zl = data.colorDict;
            currentInstance.ja.Fl(data.eyesVariantArray);
            currentInstance.ja.Gl(currentInstance.vl);
            currentInstance.ka.Fl(data.mouthVariantArray);
            currentInstance.ka.Gl(currentInstance.wl);
            currentInstance.la.Fl(data.glassesVariantArray);
            currentInstance.la.Gl(currentInstance.xl);
            currentInstance.ma.Fl(data.hatVariantArray);
            currentInstance.ma.Gl(currentInstance.yl);
          }
        });
        this.il(false);
        appInstance.t.xh(function () {
          currentInstance.il(false);
        });
      };
      PopupMenuHandlerInstance.prototype.Rk = function () {
        PopupMenuHandler.Fk.stop();
        PopupMenuHandler.Fk.fadeOut(50);
        PopupMenuHandler.Gk.stop();
        PopupMenuHandler.Gk.fadeOut(50);
        PopupMenuHandler.Hk.stop();
        PopupMenuHandler.Hk.fadeOut(50);
        PopupMenuHandler.Jk.stop();
        PopupMenuHandler.Jk.fadeOut(50);
        PopupMenuHandler.Ik.stop();
        PopupMenuHandler.Ik.fadeOut(50);
        PopupMenuHandler.Kk.stop();
        PopupMenuHandler.Kk.fadeOut(50);
        PopupMenuHandler.Lk.stop();
        PopupMenuHandler.Lk.fadeOut(50);
        PopupMenuHandler.Mk.stop();
        PopupMenuHandler.Mk.fadeIn(200);
        PopupMenuHandler.Nk.stop();
        PopupMenuHandler.Nk.fadeOut(50);
        PopupMenuHandler.Ok.stop();
        PopupMenuHandler.Ok.fadeOut(50);
      };
      PopupMenuHandlerInstance.prototype.ji = function () {
        initializeApp().r.Dd();
        this.El(this.ul ?? this.ja);
        this.Al.Le(true);
      };
      PopupMenuHandlerInstance.prototype.ei = function () {
        this.Al.Le(false);
      };
      PopupMenuHandlerInstance.prototype.Ra = function () {
        this.Al.Ra();
      };
      PopupMenuHandlerInstance.prototype.Pa = function (param1, param2) {
        this.Al.Pa();
      };
      PopupMenuHandlerInstance.prototype.El = function (item) {
        this.ul = item;
        for (var i = 0; i < this.tl.length; i++) {
          this.tl[i].Xk.removeClass("pressed");
        }
        this.ul.Xk.addClass("pressed");
        this.ul.ii();
      };
      PopupMenuHandlerInstance.prototype.Hl = function () {
        if (this.ul == null) {
          return ExampleClass.Yg();
        } else {
          return ExampleClass.Zg({
            Lb: this.ul.ql(),
            rc: this.ul.rc
          });
        }
      };
      PopupMenuHandlerInstance.prototype.Bl = function () {
        var currentInstance = this;
        this.Hl().ah(function (data) {
          currentInstance.Ui(data.Lb, data.rc);
        });
      };
PopupMenuHandlerInstance.prototype.Ui = function (itemIndex, itemType) {
    var currentInstance = this;
    var appInstance = initializeApp();
    var price; // إزالة التعريف إلى undefined
    switch (itemType) {
        case itemIds.ja:
            price = this.vl[itemIndex].price;
            break;
        case itemIds.ka:
            price = this.wl[itemIndex].price;
            break;
        case itemIds.la:
            price = this.xl[itemIndex].price;
            break;
        case itemIds.ma:
            price = this.yl[itemIndex].price;
            break;
        default:
            return;
    }
    if (!(appInstance.u.zi() < price)) {
        this.Sk();
        var itemData1 = appInstance.t.ha(itemIds.ia);
        var itemData2 = appInstance.t.ha(itemIds.ja);
        var itemData3 = appInstance.t.ha(itemIds.ka);
        var itemData4 = appInstance.t.ha(itemIds.la);
        var itemData5 = appInstance.t.ha(itemIds.ma);
        appInstance.u.Ui(itemIndex, itemType, function () {
            appInstance.t.Bh(itemData1, itemIds.ia);
            appInstance.t.Bh(itemData2, itemIds.ja);
            appInstance.t.Bh(itemData3, itemIds.ka);
            appInstance.t.Bh(itemData4, itemIds.la);
            appInstance.t.Bh(itemData5, itemIds.ma);
            if (appInstance.u.Ch(itemIndex, itemType)) {
                appInstance.t.Bh(itemIndex, itemType);
            }
            currentInstance.Qk();
        });
    }
};
      PopupMenuHandlerInstance.prototype.Il = function (index, itemType) {
        switch (itemType) {
          case itemIds.ja:
            return this.vl[index];
          case itemIds.ka:
            return this.wl[index];
          case itemIds.la:
            return this.xl[index];
          case itemIds.ma:
            return this.yl[index];
        }
        return null;
      };
      PopupMenuHandlerInstance.prototype.il = function (flag) {
        var appInstance = initializeApp();
        this.Al.ak(appInstance.t.ha(itemIds.ia), false, false);
        this.Al.bk(appInstance.t.ha(itemIds.ja), false, false);
        this.Al.ck(appInstance.t.ha(itemIds.ka), false, false);
        this.Al.dk(appInstance.t.ha(itemIds.la), false, false);
        this.Al.ek(appInstance.t.ha(itemIds.ma), false, false);
        var itemDetails = this.Hl();
        if (itemDetails._g()) {
          var itemInfo = itemDetails.$g();
          var itemAttributes = this.Il(itemInfo.Lb, itemInfo.rc);
          var nonBuyable = false;
          if (appInstance.t.Ja(itemInfo.Lb, itemInfo.rc)) {
            wearLockedBar.hide();
            wearBuyButton.hide();
          } else if (itemAttributes == null || itemAttributes.nonbuyable == 1) {
            nonBuyable = true;
            wearLockedBar.show();
            wearBuyButton.hide();
            wearLockedBarText.text(localizeMessage("index.game.popup.menu.store.locked"));
            if (itemAttributes != null && itemAttributes.nonbuyable && itemAttributes.nonbuyableCause != null) {
              var lockMessage = appInstance.p.Ac().textDict[itemAttributes.nonbuyableCause];
              if (lockMessage != null) {
                wearLockedBarText.text(getLocalizedText(lockMessage));
              }
            }
          } else {
            wearLockedBar.hide();
            wearBuyButton.show();
            wearItemPrice.html(itemAttributes.price);
          }
          wearDescriptionText.html("");
          if (itemAttributes != null && itemAttributes.description != null) {
            var descriptionText = appInstance.p.Ac().textDict[itemAttributes.description];
            if (descriptionText != null) {
              wearDescriptionText.html(replaceHrefWithTarget(getLocalizedText(descriptionText)));
            }
          }
          switch (itemInfo.rc) {
            case itemIds.ja:
              this.Al.bk(itemInfo.Lb, true, nonBuyable);
              break;
            case itemIds.ka:
              this.Al.ck(itemInfo.Lb, true, nonBuyable);
              break;
            case itemIds.la:
              this.Al.dk(itemInfo.Lb, true, nonBuyable);
              break;
            case itemIds.ma:
              this.Al.ek(itemInfo.Lb, true, nonBuyable);
          }
          if (flag) {
            appInstance.t.Bh(itemInfo.Lb, itemInfo.rc);
          }
        }
      };
      var ItemHandler = function () {
        function ItemHandler(instance, itemType, itemElement) {
          this.sl = instance;
          this.rc = itemType;
          this.Xk = itemElement;
          this.Jl = {};
          this.Kl = [[]];
          this.Ll = -10;
          this.Ml = -10;
        }
        ItemHandler.prototype.Fl = function (array) {
          this.Kl = array;
        };
        ItemHandler.prototype.Gl = function (data) {
          this.Jl = data;
        };
        ItemHandler.prototype.ii = function () {
          var appInstance = initializeApp();
          var itemData = appInstance.t.ha(this.rc);
          for (var i = 0; i < this.Kl.length; i++) {
            for (var j = 0; j < this.Kl[i].length; j++) {
              if (this.Kl[i][j] == itemData) {
                this.Nl(i);
                this.Ol(j);
                return;
              }
            }
          }
          this.Nl(0);
          this.Ol(0);
        };
        ItemHandler.prototype.Cl = function () {
          var newIndex = this.Ll - 1;
          if (newIndex < 0) {
            newIndex = this.Kl.length - 1;
          }
          this.Nl(newIndex);
          this.Ol(this.Ml % this.Kl[newIndex].length);
        };
        ItemHandler.prototype.Dl = function () {
          var newIndex = this.Ll + 1;
          if (newIndex >= this.Kl.length) {
            newIndex = 0;
          }
          this.Nl(newIndex);
          this.Ol(this.Ml % this.Kl[newIndex].length);
        };
        ItemHandler.prototype.Nl = function (index) {
          var self = this;
          if (!(index < 0) && !(index >= this.Kl.length)) {
            this.Ll = index;
            wearTintChooser.empty();
            var items = this.Kl[this.Ll];
            if (items.length > 1) {
              for (var i = 0; i < items.length; i++) {
                (function (itemIndex) {
                  var itemID = items[itemIndex];
                  var itemProperties = self.Jl[itemID];
                  var itemColor = "#" + self.sl.zl[itemProperties.prime];
                  var itemDiv = $("<div style=\"border-color:" + itemColor + "\"></div>");
                  itemDiv.click(function () {
                    initializeApp().r.Cd();
                    self.Ol(itemIndex);
                  });
                  wearTintChooser.append(itemDiv);
                })(i);
              }
            }
          }
        };
ItemHandler.prototype.Ol = function (_0x3c8376) {
    if (_0x3c8376 >= 0 && _0x3c8376 < this.Kl[this.Ll].length) {
        this.Ml = _0x3c8376;
        wearTintChooser.children().css("background-color", "transparent");
        var _0x443d91 = wearTintChooser.children(":nth-child(" + (1 + _0x3c8376) + ")");
        _0x443d91.css("background-color", _0x443d91.css("border-color"));
        this.sl.il(true);
    }
};
        ItemHandler.prototype.ql = function () {
          return this.Kl[this.Ll][this.Ml];
        };
        return ItemHandler;
      }();
      return PopupMenuHandlerInstance;
    }();
    var Handler3 = function () {
      var withdrawConsentYesButton = $("#withdraw-consent-yes");
      var withdrawConsentNoButton = $("#withdraw-consent-no");
      var WithdrawConsentHandler = inheritPrototype(PopupMenuHandler, function () {
        PopupMenuHandler.call(this, localizeMessage("index.game.popup.menu.consent.tab"), false);
        var appInstance = initializeApp();
        withdrawConsentYesButton.click(function () {
          appInstance.r.Cd();
          if (appInstance.Y()) {
            appInstance.s.I(appInstance.s.F);
            appInstance.$(false, true);
            appInstance.s.aa._(new CustomSkin());
          } else {
            appInstance.s.gi();
          }
        });
        withdrawConsentNoButton.click(function () {
          appInstance.r.Cd();
          appInstance.s.gi();
        });
      });
      WithdrawConsentHandler.prototype.a = function () {
        WithdrawConsentHandler.parent.prototype.a.call(this);
      };
      WithdrawConsentHandler.prototype.Rk = function () {
        PopupMenuHandler.Fk.stop();
        PopupMenuHandler.Fk.fadeOut(50);
        PopupMenuHandler.Gk.stop();
        PopupMenuHandler.Gk.fadeOut(50);
        PopupMenuHandler.Hk.stop();
        PopupMenuHandler.Hk.fadeOut(50);
        PopupMenuHandler.Jk.stop();
        PopupMenuHandler.Jk.fadeOut(50);
        PopupMenuHandler.Ik.stop();
        PopupMenuHandler.Ik.fadeOut(50);
        PopupMenuHandler.Kk.stop();
        PopupMenuHandler.Kk.fadeOut(50);
        PopupMenuHandler.Lk.stop();
        PopupMenuHandler.Lk.fadeOut(50);
        PopupMenuHandler.Mk.stop();
        PopupMenuHandler.Mk.fadeOut(50);
        PopupMenuHandler.Nk.stop();
        PopupMenuHandler.Nk.fadeIn(200);
        PopupMenuHandler.Ok.stop();
        PopupMenuHandler.Ok.fadeOut(50);
      };
      WithdrawConsentHandler.prototype.ji = function () {
        initializeApp().r.Dd();
      };
      return WithdrawConsentHandler;
    }();
    var Handler4 = function () {
      var deleteAccountTimer = $("#delete-account-timer");
      var deleteAccountYesButton = $("#delete-account-yes");
      var deleteAccountNoButton = $("#delete-account-no");
      var DeleteAccountHandler = inheritPrototype(PopupMenuHandler, function () {
        PopupMenuHandler.call(this, localizeMessage("index.game.popup.menu.delete.tab"), false);
        var appInstance = initializeApp();
        deleteAccountYesButton.click(function () {
          appInstance.r.Cd();
          if (appInstance.u.P()) {
            appInstance.u.bj();
            appInstance.u.Wi();
          } else {
            appInstance.s.gi();
          }
        });
        deleteAccountNoButton.click(function () {
          appInstance.r.Cd();
          appInstance.s.gi();
        });
        this.Pl = [];
      });
      DeleteAccountHandler.prototype.a = function () {
        DeleteAccountHandler.parent.prototype.a.call(this);
      };
      DeleteAccountHandler.prototype.Rk = function () {
        PopupMenuHandler.Fk.stop();
        PopupMenuHandler.Fk.fadeOut(50);
        PopupMenuHandler.Gk.stop();
        PopupMenuHandler.Gk.fadeOut(50);
        PopupMenuHandler.Hk.stop();
        PopupMenuHandler.Hk.fadeOut(50);
        PopupMenuHandler.Jk.stop();
        PopupMenuHandler.Jk.fadeOut(50);
        PopupMenuHandler.Ik.stop();
        PopupMenuHandler.Ik.fadeOut(50);
        PopupMenuHandler.Kk.stop();
        PopupMenuHandler.Kk.fadeOut(50);
        PopupMenuHandler.Lk.stop();
        PopupMenuHandler.Lk.fadeOut(50);
        PopupMenuHandler.Mk.stop();
        PopupMenuHandler.Mk.fadeOut(50);
        PopupMenuHandler.Nk.stop();
        PopupMenuHandler.Nk.fadeOut(50);
        PopupMenuHandler.Ok.stop();
        PopupMenuHandler.Ok.fadeIn(200);
      };
      DeleteAccountHandler.prototype.ji = function () {
        initializeApp().r.Hd();
        deleteAccountYesButton.stop();
        deleteAccountYesButton.hide();
        deleteAccountTimer.stop();
        deleteAccountTimer.show();
        deleteAccountTimer.text(".. 10 ..");
        this.Ql();
        this.Rl(function () {
          deleteAccountTimer.text(".. 9 ..");
        }, 1000);
        this.Rl(function () {
          deleteAccountTimer.text(".. 8 ..");
        }, 2000);
        this.Rl(function () {
          deleteAccountTimer.text(".. 7 ..");
        }, 3000);
        this.Rl(function () {
          deleteAccountTimer.text(".. 6 ..");
        }, 4000);
        this.Rl(function () {
          deleteAccountTimer.text(".. 5 ..");
        }, 5000);
        this.Rl(function () {
          deleteAccountTimer.text(".. 4 ..");
        }, 6000);
        this.Rl(function () {
          deleteAccountTimer.text(".. 3 ..");
        }, 7000);
        this.Rl(function () {
          deleteAccountTimer.text(".. 2 ..");
        }, 8000);
        this.Rl(function () {
          deleteAccountTimer.text(".. 1 ..");
        }, 9000);
        this.Rl(function () {
          deleteAccountTimer.hide();
          deleteAccountYesButton.fadeIn(300);
        }, 10000);
      };
      DeleteAccountHandler.prototype.Rl = function (callback, delay) {
        var timeoutId = setTimeout(callback, delay);
        this.Pl.push(timeoutId);
      };
      DeleteAccountHandler.prototype.Ql = function () {
        for (var i = 0; i < this.Pl.length; i++) {
          clearTimeout(this.Pl[i]);
        }
        this.Pl = [];
      };
      return DeleteAccountHandler;
    }();
    var BaseHandler = function () {
      function BaseClass() {
        this.Ck = function () {};
      }
      BaseClass.prototype.Bk = function () {};
      BaseClass.prototype.ji = function () {};
      return BaseClass;
    }();
    var CoinEarnedEvent = function () {
      var CoinEarnedHandler = inheritPrototype(BaseHandler, function (amount) {
        BaseHandler.call(this);
        var uniqueId = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + uniqueId + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + amount + "</div>    <div class=\"toaster-coins-close\">" + localizeMessage("index.game.toaster.continue") + "</div></div>");
        var self = this;
        this.Sl.find(".toaster-coins-close").click(function () {
          initializeApp().r.Cd();
          self.Ck();
        });
      });
      CoinEarnedHandler.prototype.Bk = function () {
        return this.Sl;
      };
      CoinEarnedHandler.prototype.ji = function () {
        initializeApp().r.Fd();
      };
      return CoinEarnedHandler;
    }();
    var LevelUpEvent = function () {
      var LevelUpHandler = inheritPrototype(BaseHandler, function (level) {
        BaseHandler.call(this);
        var uniqueId = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + uniqueId + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + level + "</div>    <div class=\"toaster-levelup-text\">" + localizeMessage("index.game.toaster.levelup") + "</div>    <div class=\"toaster-levelup-close\">" + localizeMessage("index.game.toaster.continue") + "</div></div>");
        var self = this;
        this.Sl.find(".toaster-levelup-close").click(function () {
          initializeApp().r.Cd();
          self.Ck();
        });
      });
      LevelUpHandler.prototype.Bk = function () {
        return this.Sl;
      };
      LevelUpHandler.prototype.ji = function () {
        initializeApp().r.Ed();
      };
      return LevelUpHandler;
    }();
    var CustomSkin = function () {
      var CustomSkinHandler = inheritPrototype(BaseHandler, function () {
        BaseHandler.call(this);
        var self = this;
        var appInstance = initializeApp();
        var uniqueId = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $(`
    <div id="${uniqueId}" class="toaster toaster-consent-accepted">
        <img class="toaster-consent-accepted-logo" src="${logoUrl}" alt="Wormate.io logo"/>
        <div class="toaster-consent-accepted-container">
            <span class="toaster-consent-accepted-text">
                ${localizeMessage("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>")}
            </span>
            <a class="toaster-consent-accepted-link" href="/privacy-policy">
                ${localizeMessage("index.game.toaster.consent.link")}
            </a>
        </div>
        <div class="toaster-consent-close">
            ${localizeMessage("index.game.toaster.consent.iAccept")}
        </div>
    </div>
`);
        this.Tl = this.Sl.find(".toaster-consent-close");
        this.Tl.hide();
        this.Tl.click(function () {
          appInstance.r.Cd();
          if (appInstance.Y()) {
            appInstance.$(true, true);
          }
          self.Ck();
        });
      });
      CustomSkinHandler.prototype.Bk = function () {
        return this.Sl;
      };
      CustomSkinHandler.prototype.ji = function () {
        var self = this;
        var appInstance = initializeApp();
        if (appInstance.Y() && !appInstance.Z()) {
          appInstance.r.Hd();
          setTimeout(function () {
            self.Tl.fadeIn(300);
          }, 2000);
        } else {
          setTimeout(function () {
            self.Ck();
          }, 0);
        }
      };
      return CustomSkinHandler;
    }();
    var appConfigData = {};
    appConfigData.main = {
      Ma: createBannerManager("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      K: createBannerManager("ltmolilci1iurq1i", "wormate-io_970x250"),
      ra: initializeAdBlocker(),
      e: 4,
      oa: false,
      qk: true
    };
    appConfigData.miniclip = {
      Ma: createBannerManager("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      K: createBannerManager("ltmolilci1iurq1i", "wormate-io_970x250"),
      ra: initializeAdBlocker(),
      e: 4,
      oa: false,
      qk: false
    };
appConfig = appConfig || appConfigData.main; // استبدل ||= بـ = || 

var appConfig = appConfigData[window.ENV];
appConfig = appConfig || appConfigData.main; // استبدل ||= بـ = || 

$(function () {
    FastClick.attach(document.body);
});
    addEventListener("contextmenu", function (event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    });
    loadScript("//connect.facebook.net/" + geoLocation + "/sdk.js", "facebook-jssdk", function () {
      FB.init({
        appId: "861926850619051",
        cookie: true,
        xfbml: true,
        status: true,
        version: "v8.0"
      });
    });
    loadScript("//apis.google.com/js/api:client.js", null, function () {
      gapi.load("auth2", function () {
        GoogleAuth = gapi.auth2.init({
          client_id: "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com"
        });
      });
    });
    appInstance = _0x4f9dac();
    appInstance.v();
    if (PhoneChecked()) {
      loadScript("https://www.baddawi.com/FDZ/js/custom-game.js", "mobileconfig", function () {
        setupJoyConfig();
      });
    }
    let setupJoyConfig = function () {
              $("#game-canvas").after(`
            <div id='zoom-container'>
                <div id='zoom-out'>
                    <i class="fas fa-search-minus"></i> -  <!-- أيقونة الزوم للخلف -->
                </div>
                <div id='zoom-in'>
                    <i class="fas fa-search-plus"></i> +  <!-- أيقونة الزوم للأمام -->
                </div>
            </div>
        `);
    };
    window.addEventListener("keydown", function (event) {
      console.log("event.keyCode " + event.keyCode);
      event = event.which || event.keyCode || 0;
      if (event !== 113 && window.keyMove !== event || !isPlaying || PilotoAutomatico) {
        clearInterval(PilotoAutomatico);
        PilotoAutomatico = null;
      } else {
        let primaryEventIndex = theoEvents.eventoPrincipal.sk = 0;
        event = window.tuNewScore;
        PilotoAutomatico = setInterval(function () {
          let skValue = parseFloat(theoEvents.eventoPrincipal.sk);
          theoEvents.eventoPrincipal.sk = (skValue >= Math.PI ? -skValue : skValue) + (primaryEventIndex === 20 ? 0 : Math.PI / 20);
          primaryEventIndex++;
        }, 120 + (event >= 100000 ? 5 : event >= 10000 ? 10 : 0));
      }
      localStorage.setItem("SaveGameXT", JSON.stringify(theoKzObjects));
    }, false);
    let cursorOptions = [{
      nombre: "chuot 1",
      url: "https://i.imgur.com/SjFtyqp.png"
    }, {
      nombre: "chuot 2",
      url: "https://i.imgur.com/4QC2Exd.png"
    }, {
      nombre: "chuot 3",
      url: "https://i.imgur.com/PfdBkc2.png"
    }, {
      nombre: "chuot 4",
      url: "https://i.imgur.com/vD4zoMk.png"
    }, {
      nombre: "chuot 5",
      url: "https://i.imgur.com/n4N79UI.png"
    }, {
      nombre: "arrow",
      url: "https://cdn.custom-cursor.com/db/234/32/arrow2291.png"
    }, {
      nombre: "Superman",
      url: "https://cdn.custom-cursor.com/db/cursor/32/Superman_Cursor.png"
    }, {
      nombre: "Kratos",
      url: "https://cdn.custom-cursor.com/128/assets/pointers/32/GOW_Kratos_Pointer.png"
    }, {
      nombre: "Pusheen_Ca",
      url: "https://cdn.custom-cursor.com/db/cursor/32/Pusheen_Cat_Cursor.png"
    }, {
      nombre: "lipstick",
      url: "https://cdn.custom-cursor.com/db/15214/32/sailor-moon-fish-eye-and-lipstick-cursor.png"
    }, {
      nombre: "AKM",
      url: "https://cdn.custom-cursor.com/db/cursor/32/PUBG_AKM_Cursor.png"
    }, {
      nombre: "Cherries_Pointer",
      url: "https://cdn.custom-cursor.com/db/pointer/32/Cherries_Pointer.png"
    }, {
      nombre: "Tom_and_JerryCurso",
      url: "https://cdn.custom-cursor.com/db/cursor/32/Tom_and_JerryCursor.png"
    }, {
      nombre: "JerryPointer",
      url: "https://cdn.custom-cursor.com/db/pointer/32/Tom_and_JerryPointer.png"
    }];
    let backgroundOptions = [{
      nombre: "Default",
      url: "https://i.imgur.com/8ubx4RA.png"
    }, {
      nombre: "Schwarze Background",
      url: "https://i.imgur.com/3cxXwZ6.png"
    }, {
      nombre: "light blue",
      url: "https://i.imgur.com/dWtJFIx.png"
    }, {
      nombre: "woman",
      url: "https://i.imgur.com/19YALRi.png"
    }, {
      nombre: "Navidad",
      url: "https://i.imgur.com/qAO9LgC.png"
    }, {
      nombre: "Mal3ab",
      url: "https://i.imgur.com/MlCgOma.png"
    }, {
      nombre: "Galaxy_Star",
      url: "https://i.imgur.com/yayb9Ru.png"
    }, {
      nombre: "Desert",
      url: "https://asserts.wormworld.io/backgrounds/bkgnd7.png"
    }];
	
    theoKzObjects.loading = true;
    var htmlContent = "";
    htmlContent += "</div>";
    htmlContent += "</div>";
    htmlContent += "</div>";
    htmlContent += "<div id=\"wormcerca\">";
    htmlContent += "<img class=\"pwrups v0\" style=\"display: none;\" src=\"https://i.imgur.com/M1LFPpp.png\">";
    htmlContent += "<img class=\"pwrups v1\" style=\"display: none;\" src=\"https://i.imgur.com/z162iYa.png\">";
    htmlContent += "<img class=\"pwrups v2\" style=\"display: none;\" src=\"https://i.imgur.com/kXlF32q.png\">";
    htmlContent += "<img class=\"pwrups v3\" style=\"display: none;\" src=\"https://i.imgur.com/kJ6oz7e.png\">";
    htmlContent += "<img class=\"pwrups v4\" style=\"display: none;\" src=\"https://i.imgur.com/l3ds43O.png\">";
    htmlContent += "<img class=\"pwrups v5\" style=\"display: none;\" src=\"https://i.imgur.com/FqA56k6.png\">";
    htmlContent += "<img class=\"pwrups v6\" style=\"display: none;\" src=\"https://i.imgur.com/mSCZeEp.png\">";
    htmlContent += "</div>";
    htmlContent += "<img class=\"worm_1\" src=\"https://i.imgur.com/iekrYYm.png\"><span class=\"Worm_cerca\"></span>";
    htmlContent += "\n      \n         <div style=\"display:none\" id=\"zoom-container\">\n            <div id=\"zoom-out\">-</div>\n            <div id=\"zoom-in\">+</div>\n         </div>\n         <div class=\"worm_3\">x.<span id=\"zoom-percentage\"></span></div>\n         <div class=\"worm_2\">\n            <button id=\"settingBtn\"><i class=\"fa fa-solid fa-gear\"></i></button>\n            <div id=\"settingContent\">\n                \n                <div class=\"container1\">\n                    <span class=\"settings_span\">تدور بسرعة: </span>\n                    <input id=\"smoothCamera\" class=\"range\" type=\"range\" min=\"0.3\" max=\"0.6\" value=\"" + theoKzObjects.smoothCamera + "\" step=\"0.1\" onmousemove=\"smoothCameraValue.value=value\" />\n                </div>\n                \n                <div class=\"container1\">\n                    <span class=\"settings_span\">تعزيزات القوة - الحجم: </span>\n                    <input id=\"PortionSize\" class=\"range\" type=\"range\" min=\"1\" max=\"6\" value=\"" + theoKzObjects.PortionSize + "\" step=\"1\" onmousemove=\"rangevalue1.value=value\" />\n                </div>\n                \n                <div class=\"container1\">\n                    <span class=\"settings_span\">تعزيزات القوة - الهالة: </span>\n                    <input id=\"PortionAura\" class=\"range\" type=\"range\" min=\"1.2\" max=\"3.2\" value=\"" + theoKzObjects.PortionAura + "\" step=\"0.2\" onmousemove=\"PortionAuravalue.value=value\" />\n                </div>\n                \n                <div class=\"container1\">\n                    <span class=\"settings_span\">حجم الطعام: </span>\n                    <input id=\"FoodSize\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"" + theoKzObjects.FoodSize + "\" step=\"0.5\" onmousemove=\"rangevalue2.value=value\" />\n                </div>\n                <div class=\"container1\">\n                    <span class=\"settings_span\">ظل الطعام: </span>\n                    <input id=\"FoodShadow\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"" + theoKzObjects.FoodShadow + "\" step=\"0.5\" onmousemove=\"FoodShadowvalue.value=value\" />\n                </div>\n            </div>\n         </div>\n";
    $("#game-view").append(htmlContent);
    function updateUserData(userData) {
      if (theoKzObjects.PropertyManager) {
        userData.skinId = theoKzObjects.PropertyManager.rh;
        userData.eyesId = theoKzObjects.PropertyManager.sh;
        userData.mouthId = theoKzObjects.PropertyManager.th;
        userData.glassesId = theoKzObjects.PropertyManager.uh;
        userData.hatId = theoKzObjects.PropertyManager.vh;
      }
    }
    function handleUserData() {
      $("#mm-event-text").replaceWith("<div class=\"text-FDZ\">جيش الأفناك قوة الروح لا تنتهي</div>");
      var settingButton = document.getElementById("settingBtn");
      var settingContent = document.getElementById("settingContent");
      settingButton.addEventListener("click", function () {
        var computedStyle = window.getComputedStyle(settingContent);
        var displayValue = computedStyle.getPropertyValue("display");
        if (displayValue === "none") {
          settingContent.style.display = "block";
        } else {
          settingContent.style.display = "none";
        }
      });
      $("#PortionSize").on("input", function () {
        theoKzObjects.PortionSize = $(this).val();
        localStorage.PotenciadorSize = theoKzObjects.PortionSize;
      });
      $("#PortionAura").on("input", function () {
        theoKzObjects.PortionAura = $(this).val();
        localStorage.PotenciadorAura = theoKzObjects.PortionAura;
      });
      $("#smoothCamera").on("input", function () {
        theoKzObjects.smoothCamera = $(this).val();
        localStorage.smoothCamera = theoKzObjects.smoothCamera;
      });
      $("#FoodSize").on("input", function () {
        theoKzObjects.FoodSize = $(this).val();
        localStorage.ComidaSize = theoKzObjects.FoodSize;
      });
      $("#FoodShadow").on("input", function () {
        theoKzObjects.FoodShadow = $(this).val();
        localStorage.ComidaShadow = theoKzObjects.FoodShadow;
      });
      $("#mm-advice-cont").html(`
    <div style="display: grid !important; grid-template-columns: 1fr 1fr; gap: 8.5px;">
        <input type="button" value="F.SCREEN" class="fullscreen_button">
        <input type="button" value="RESPAWN" id="hoisinh" class="fullscreen_respawn">
    </div>
`);
$(".mm-merchant-cont").html(`
    <div style="display: flex; justify-content: center; align-items: center; margin-top: 8px">
        <a href="https://www.tiktok.com/@dzirigaming2" target="_blank" style="margin-right: 10px;">
            <img class="merchant-logo" src="https://www.baddawi.com/FDZ/images/FDZ-logo.png" alt="FDZ" width="155">
        </a>
        <a href="https://www.tiktok.com/@dzirigaming1" target="_blank">
            <img class="merchant-logo" src="https://www.baddawi.com/FDZ/images/FDZ-logo.png" alt="FDZ" width="155">
        </a>
    </div>
`);
      $(document).ready(function () {
        $(".fullscreen_button").on("click", function () {
          if (document.fullScreenElement && document.fullScreenElement !== null || !document.mozFullScreen && !document.webkitIsFullScreen) {
            if (document.documentElement.requestFullScreen) {
              document.documentElement.requestFullScreen();
            } else if (document.documentElement.mozRequestFullScreen) {
              document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
              document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
          } else if (document.cancelFullScreen) {
            document.cancelFullScreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          }
        });
      });
      $("#hoisinh").click(function () {
        let hoisinhnhanhValue = hoisinhnhanh;
        if (hoisinhnhanhValue) {
          anApp.r.Hd();
          anApp.sa(hoisinhnhanhValue);
        }
      });
      $(".mm-merchant").replaceWith("");
	  
	  

    $(".description-text").replaceWith(`
<div class="description-text">
    <div class="Dziri-Gaming-Connect">
        <img src="https://i.imgur.com/aSBRjrv.png" width="20" align="center" alt=""> Dziri Gaming Connect
    </div>
    <div class="description-text-hiep">

        <ul style="margin-top: 5px;" class="ui-tabs-nav">
            <li class="ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active">
                <a><span class="flag br" value="https://i.imgur.com/DL1EzGm.png"></span></a>
            </li>
            <li class="ui-tabs-tab ui-tab ui-tab-inactive1">
                <a><span class="flag mx" value="https://i.imgur.com/zh80c5B.png"></span></a>
            </li>
            <li class="ui-tabs-tab ui-tab ui-tab-inactive2">
                <a><span class="flag us" value="https://i.imgur.com/NC4wYiE.png"></span></a>
            </li>
            <li class="ui-tabs-tab ui-tab ui-tab-inactive3">
                <a><span class="flag ca" value="https://i.imgur.com/0RkQwnf.png"></span></a>
            </li>
            <li class="ui-tabs-tab ui-tab ui-tab-inactive4">
                <a><span class="flag de" value="https://i.imgur.com/98gEM58.png"></span></a>
            </li>
            <li class="ui-tabs-tab ui-tab ui-tab-inactive5">
                <a><span class="flag fr" value="https://i.imgur.com/us0CCyv.png"></span></a>
            </li>
            <li class="ui-tabs-tab ui-tab ui-tab-inactive6">
                <a><span class="flag sg" value="https://i.imgur.com/3GBrDqp.png"></span></a>
            </li>
            <li class="ui-tabs-tab ui-tab ui-tab-inactive7">
                <a><span class="flag jp" value="https://i.imgur.com/QGGi2S0.png"></span></a>
            </li>
            <li class="ui-tabs-tab ui-tab ui-tab-inactive8">
                <a><span class="flag au" value="https://i.imgur.com/FtjKIF8.png"></span></a>
            </li>
            <li class="ui-tabs-tab ui-tab ui-tab-inactive9">
                <a><span class="flag gb" value="https://i.imgur.com/dfJnlGL.png"></span></a>
            </li>
        </ul>
		
        <div class="gachngang"></div>
        <div class="servers-container">
            <div class="servers-peru"></div>
            <div class="servers-mexico" style="display: none;"></div>
            <div class="servers-eeuu" style="display: none;"></div>
            <div class="servers-canada" style="display: none;"></div>
            <div class="servers-germania" style="display: none;"></div>
            <div class="servers-francia" style="display: none;"></div>
            <div class="servers-singapur" style="display: none;"></div>
            <div class="servers-japon" style="display: none;"></div>
            <div class="servers-australia" style="display: none;"></div>
            <div class="servers-granbretana" style="display: none;"></div>
        </div>
    </div>
</div>
    `);


      $(".ui-tab").on("click", account);
      $(".flag").click(function () {
        let flagValue = $(this).attr("value");
        theoKzObjects.flag = flagValue;
        ctx.containerImgS.texture = ctx.onclickServer;
        retundFlagError();
        console.log(flagValue);
      });
      for (a = 0; a < servers.Api_listServer.length; a++) {
        var serverUrl = servers.Api_listServer[a].serverUrl;
        var serverName = servers.Api_listServer[a].name;
        var serverRegion = servers.Api_listServer[a].region;
        let serverElement = document.createElement("p");
        serverElement.value = serverUrl;
        serverElement.innerHTML = serverName;
        if (serverRegion == "peru") {
          $(".servers-peru").prepend(serverElement);
        } else if (serverRegion == "mexico") {
          $(".servers-mexico").prepend(serverElement);
        } else if (serverRegion == "eeuu") {
          $(".servers-eeuu").prepend(serverElement);
        } else if (serverRegion == "canada") {
          $(".servers-canada").prepend(serverElement);
        } else if (serverRegion == "germania") {
          $(".servers-germania").prepend(serverElement);
        } else if (serverRegion == "francia") {
          $(".servers-francia").prepend(serverElement);
        } else if (serverRegion == "singapur") {
          $(".servers-singapur").prepend(serverElement);
        } else if (serverRegion == "japon") {
          $(".servers-japon").prepend(serverElement);
        } else if (serverRegion == "australia") {
          $(".servers-australia").prepend(serverElement);
        } else if (serverRegion == "granbretana") {
          $(".servers-granbretana").prepend(serverElement);
        }
        $(serverElement).attr("id", serverRegion);
        $(serverElement).attr("class", "selectSala");
        $(serverElement).attr("value", serverName);
        $(serverElement).click(function () {
          ctx.setServer($(this).text());
          let serverValue = $(this).val();
          ctx.containerImgS.texture = ctx.onclickServer;
          retundFlagError();
          window.server_url = serverValue;
          $("#mm-action-play").click();
          $("#adbl-continue").click();
        });
      }
    }
    function handleClientData() {
      $("#getskin").on("click", function () {
        for (var i = 0; i < clientes.clientesActivos.length; i++) {
          var clientName = clientes.clientesActivos[i].cliente_NOMBRE;
          var clientId = clientes.clientesActivos[i].cliente_ID;
          var visibleSkin1 = clientes.clientesActivos[i].Client_VisibleSkin;
          var visibleSkin2 = clientes.clientesActivos[i].Client_VisibleSkin1;
          var visibleSkin3 = clientes.clientesActivos[i].Client_VisibleSkin2;
          var visibleSkin4 = clientes.clientesActivos[i].Client_VisibleSkin3;
          var visibleSkin5 = clientes.clientesActivos[i].Client_VisibleSkin4;
          var visibleSkin6 = clientes.clientesActivos[i].Client_VisibleSkin5;
          var visibleSkin7 = clientes.clientesActivos[i].Client_VisibleSkin6;
          var visibleSkin8 = clientes.clientesActivos[i].Client_VisibleSkin7;
          var visibleSkin9 = clientes.clientesActivos[i].Client_VisibleSkin8;
          var visibleSkin10 = clientes.clientesActivos[i].Client_VisibleSkin9;
          var visibleSkin11 = clientes.clientesActivos[i].Client_VisibleSkin10;
          var visibleSkin12 = clientes.clientesActivos[i].Client_VisibleSkin11;
          var visibleSkin13 = clientes.clientesActivos[i].Client_VisibleSkin12;
          var visibleSkin14 = clientes.clientesActivos[i].Client_VisibleSkin13;
          var visibleSkin15 = clientes.clientesActivos[i].Client_VisibleSkin14;
          var visibleSkin16 = clientes.clientesActivos[i].Client_VisibleSkin15;
          var visibleSkin17 = clientes.clientesActivos[i].Client_VisibleSkin16;
          var visibleSkin18 = clientes.clientesActivos[i].Client_VisibleSkin17;
          var visibleSkin19 = clientes.clientesActivos[i].Client_VisibleSkin18;
          var visibleSkin20 = clientes.clientesActivos[i].Client_VisibleSkin19;
          var visibleSkin21 = clientes.clientesActivos[i].Client_VisibleSkin20;
          var clientAccessKey = clientes.clientesActivos[i].Client_KeyAccecs;
          if (theoKzObjects.FB_UserID == 0) {} else if (theoKzObjects.FB_UserID == clientId) {
            if (clientAccessKey == "XTPRIVATESKIN") {
              for (let j = 0; j < theoKzObjects.idSkin.length; j++) {
                const skin = theoKzObjects.idSkin[j];
                if (skin.id == visibleSkin1 || skin.id == visibleSkin2 || skin.id == visibleSkin3 || skin.id == visibleSkin4 || skin.id == visibleSkin5 || skin.id == visibleSkin6 || skin.id == visibleSkin7 || skin.id == visibleSkin8 || skin.id == visibleSkin9 || skin.id == visibleSkin10 || skin.id == visibleSkin11 || skin.id == visibleSkin12 || skin.id == visibleSkin13 || skin.id == visibleSkin14 || skin.id == visibleSkin15 || skin.id == visibleSkin16 || skin.id == visibleSkin17 || skin.id == visibleSkin18 || skin.id == visibleSkin19 || skin.id == visibleSkin20 || skin.id == visibleSkin21) {
                  skin.nonbuyable = false;
                }
              }
            } else {}
          } else {}
        }
      });
    }
 function notifyExpiration() {
      theoKzObjects.adblock = true;
$("#mm-store").after(`
<div id="mm-store" class="store">
    <div class="settings-button" onclick="openPopup()">الإعدادات</div>
</div>

<div id="popup" class="popup">
    <!-- رأس الـ Popup -->
    <div class="popup-header">
        <!-- زر أغلق -->
        <button class="close-button" onclick="closePopup()">أغلق</button>
        
        <!-- عرض ID المستخدم -->
        <div class="user-id-display">
            <span>${theoKzObjects.FB_UserID}</span>
        </div>

        <!-- زر نسخ ID -->
        <button class="copy-button" onclick="navigator.clipboard.writeText('${theoKzObjects.FB_UserID}').then(()=> alert('تم نسخ ID ${theoKzObjects.FB_UserID}!'));">نسخ ID</button>
    </div>

    <div id="kich-hoat">
        <div class="settings-row">
            <div class="settings-lineZoom">
                <span class="settings-labelZoom">تناول سريع :</span>
                <input class="settings-switchZoom" id="settings-Abilityzoom-switch" type="checkbox"/>
                <label for="settings-Abilityzoom-switch"></label>
            </div>
            <div class="settings-lineZoom">
                <span class="settings-labelZoom">وضع البث :</span>
                <input class="settings-switchZoom" id="settings-stremingmode-switch" type="checkbox"/>
                <label for="settings-stremingmode-switch"></label>
            </div>
        </div>

        <div class="settings-row">
            <div class="settings-lineZoom">
                <span class="settings-labelZoom">مجموع القتل :</span>
                <input class="settings-switchZoom" id="settings-stremingmodesaveheadshot-switch" type="checkbox"/>
                <label for="settings-stremingmodesaveheadshot-switch"></label>
            </div>
            <div class="settings-lineZoom">
                <span class="settings-labelZoom">أفضل 3 نقاط :</span>
                <input class="settings-switchZoom" id="settings-stremingmodebatop-switch" type="checkbox"/>
                <label for="settings-stremingmodebatop-switch"></label>
            </div>
        </div>

        <div class="settings-row">
            <div class="settings-lineZoom">
                <span class="settings-labelZoom">سهم السرعة <img class="icon" src="https://i.imgur.com/lkx3fEA.png" alt="Turn on"/> :</span>
                <input class="settings-switchZoom" id="settings-stremingmodemuiten-switch" type="checkbox"/>
                <label for="settings-stremingmodemuiten-switch"></label>
            </div>
            <div class="settings-lineZoom">
                <span class="settings-labelZoom">إيقاف الإيموجي :</span>
                <input class="settings-switchZoom" id="settings-stremingmodeemoj-switch" type="checkbox"/>
                <label for="settings-stremingmodeemoj-switch"></label>
            </div>
        </div>

        <div class="settings-row">
            <div class="settings-lineZoom">
                <span class="settings-labelZoom">إيقاف الأصوات :</span>
                <input class="settings-switchZoom" id="settings-stremingmodeheadshot-switch" type="checkbox"/>
                <label for="settings-stremingmodeheadshot-switch"></label>
            </div>
<div class="settings-lineZoom">
    <span class="settings-labelZoom">تصنيع السكنات  :</span>
    <a href="https://www.baddawi.com/FDZ/SKIN/" target="_blank">
        <i class="fa-solid fa-link red-icon"></i>
    </a>
</div>
        </div>
    </div>

    <div class="container">
        <div class="left-column">
            <div class="spancursor">اختر المؤشر</div>
            <div class="cursor-container">
                <div id="default-cursor-btn">
                    <img class="img" alt="Imgur-Upload" src="https://i.imgur.com/rI522o3.png">
                </div>
            </div>
        </div>
        <div class="right-column">
            <div class="spancursor-right">اختر الخلفية</div>
            <div class="background-container"></div>
        </div>
    </div>

<div class="container">
    <div class="list1">
        مفاتيح <i class="fa-solid fa-q red-icon"></i> تدور تلقائيًا
    </div>
    <div class="list2">
        مفاتيح <i class="fa-solid fa-r red-icon"></i> إحياء سريع
    </div>
</div>
</div>

<div id="overlay"></div> <!-- إضافة overlay -->
`);


      $("#loa831pibur0w4gv").replaceWith(`
    
    <div style="margin: 0;" id="loa831pibur0w4gv">
        <div class="label" id="titleSetings">Notification</div>
        <div class="FDZ-Team">
            <img src="https://www.baddawi.com/FDZ/images/FDZ-Team.png" alt="FDZ" />
            <!-- Button to redirect to Discord -->
            <button id="buy-premium">
                Discord
            </button>
        </div>
		<div class="centered-text">Released in 29-03-2025</div>
    </div>
`);
      $("#buy-premium").on("click", function () {
        window.open("https://discord.gg/5rDvPrEy", "_blank");
      });
      $("#mm-coins-box").replaceWith(`
        <div id="mm-coins-box" style="margin: 0;">
            <button 
                id="getskin" 
                class="unlock-button" 
                style="width: 140px; height: 45px; float: right; border-radius: 10px; border: solid #fac 2px; display: none;">
                Unlock Skins
            </button>
        </div>
      `);
      $("#markup-footer");
      window.multiplier = 0.625;
      window.zoomLevel = 5;
      function increaseZoom() {
        window.zoomLevel++;
        window.multiplier *= 0.8;
        changedNf();
        updateZoomDisplay();
      }
      function decreaseZoom() {
        if (window.zoomLevel > 0) {
          window.zoomLevel--;
          window.multiplier /= 0.8;
          changedNf();
          updateZoomDisplay();
        }
      }
      function updateZoomDisplay() {
        var zoomPercentage = Math.round(window.multiplier / 0.625 * 100);
        zoomPercentage = Math.min(100, zoomPercentage);
        var zoomDisplay = document.getElementById("zoom-percentage");
        zoomDisplay.textContent = zoomPercentage + "%";
      }
      document.getElementById("zoom-in").addEventListener("touchstart", increaseZoom);
      document.getElementById("zoom-out").addEventListener("touchstart", decreaseZoom);
      window.addEventListener('wheel', event => {
      // event.preventDefault(); // قم بتعليق هذه السطر مؤقتًا
  if (event.deltaY < 0) {
    increaseZoom();
  } else {
    decreaseZoom();
  }
}, { passive: false }); // تأكد من إغلاق القوس هنا
      $("#settings-Abilityzoom-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          theoKzObjects.eat_animation = 1;
          localStorage.setItem("mySwitch", "on");
        } else {
          console.log("I'm not checked");
          theoKzObjects.eat_animation = 0.0025;
          localStorage.setItem("mySwitch", "off");
        }
      });
      $(document).ready(function () {
        var switchState = localStorage.getItem("mySwitch");
        if (switchState === "on") {
          $("#settings-Abilityzoom-switch").prop("checked", true);
          theoKzObjects.eat_animation = 1;
        } else {
          $("#settings-Abilityzoom-switch").prop("checked", false);
          theoKzObjects.eat_animation = 0.0025;
        }
      });
      $("#settings-stremingmode-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          theoKzObjects.ModeStremer = true;
          localStorage.setItem("ModeStremer", "true");
        } else {
          console.log("I'm not checked");
          theoKzObjects.ModeStremer = false;
          localStorage.setItem("ModeStremer", "false");
        }
      });
      $(document).ready(function () {
        var streamingMode = localStorage.getItem("ModeStremer");
        if (streamingMode === "true") {
          theoKzObjects.ModeStremer = true;
          $("#settings-stremingmode-switch").prop("checked", true);
        } else {
          theoKzObjects.ModeStremer = false;
          $("#settings-stremingmode-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodebatop-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          theoKzObjects.ModeStremerbatop = true;
          localStorage.setItem("ModeStremerbatop", "true");
        } else {
          console.log("I'm not checked");
          theoKzObjects.ModeStremerbatop = false;
          localStorage.setItem("ModeStremerbatop", "false");
        }
      });
      $(document).ready(function () {
        var batopMode = localStorage.getItem("ModeStremerbatop");
        if (batopMode === "true") {
          theoKzObjects.ModeStremerbatop = true;
          $("#settings-stremingmodebatop-switch").prop("checked", true);
        } else {
          theoKzObjects.ModeStremerbatop = false;
          $("#settings-stremingmodebatop-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodemuiten-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          theoKzObjects.ModeStremermuiten = true;
          localStorage.setItem("ModeStremermuiten", "true");
        } else {
          console.log("I'm not checked");
          theoKzObjects.ModeStremermuiten = false;
          localStorage.setItem("ModeStremermuiten", "false");
        }
        location.reload();
      });
      $(document).ready(function () {
        // تحقق مما إذا كان هناك قيمة مخزنة في localStorage
        var muitenMode = localStorage.getItem("ModeStremermuiten");
        if (muitenMode === "true") {
          theoKzObjects.ModeStremermuiten = true;
          $("#settings-stremingmodemuiten-switch").prop("checked", true);
        } else {
          // تعيين الوضع الافتراضي إلى true إذا لم تكن هناك قيمة مخزنة
          theoKzObjects.ModeStremermuiten = true; // اجعل الوضع الافتراضي مفعلًا
          $("#settings-stremingmodemuiten-switch").prop("checked", true);
          localStorage.setItem("ModeStremermuiten", "true"); // احفظ القيمة في localStorage
        }
      });
      $("#settings-stremingmodemuiten-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          theoKzObjects.ModeStremermuiten = true;
          localStorage.setItem("ModeStremermuiten", "true");
        } else {
          console.log("I'm not checked");
          theoKzObjects.ModeStremermuiten = false;
          localStorage.setItem("ModeStremermuiten", "false");
        }
        location.reload();
      });
      $(document).ready(function () {
        var emojMode = localStorage.getItem("ModeStremeremoj");
        if (emojMode === "true") {
          theoKzObjects.ModeStremeremoj = true;
          $("#settings-stremingmodeemoj-switch").prop("checked", true);
        } else {
          theoKzObjects.ModeStremeremoj = false;
          $("#settings-stremingmodeemoj-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodeheadshot-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          theoKzObjects.ModeStremerheadshot = true;
          localStorage.setItem("ModeStremerheadshot", "true");
        } else {
          console.log("I'm not checked");
          theoKzObjects.ModeStremerheadshot = false;
          localStorage.setItem("ModeStremerheadshot", "false");
        }
      });
      $(document).ready(function () {
        var _0x4dffbc = localStorage.getItem("ModeStremerheadshot");
        if (_0x4dffbc === "true") {
          theoKzObjects.ModeStremerheadshot = true;
          $("#settings-stremingmodeheadshot-switch").prop("checked", true);
        } else {
          theoKzObjects.ModeStremerheadshot = false;
          $("#settings-stremingmodeheadshot-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodeheadshot-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          theoKzObjects.ModeStremerheadshot = true;
          localStorage.setItem("ModeStremerheadshot", "true");
        } else {
          console.log("I'm not checked");
          theoKzObjects.ModeStremerheadshot = false;
          localStorage.setItem("ModeStremerheadshot", "false");
        }
      });
      $(document).ready(function () {
        var headshotMode = localStorage.getItem("ModeStremerheadshot");
        if (headshotMode === "true") {
          theoKzObjects.ModeStremerheadshot = true;
          $("#settings-stremingmodeheadshot-switch").prop("checked", true);
        } else {
          theoKzObjects.ModeStremerheadshot = false;
          $("#settings-stremingmodeheadshot-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodesaveheadshot-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          theoKzObjects.ModeStremersaveheadshot = true;
          localStorage.setItem("ModeStremersaveheadshot", "true");
        } else {
          console.log("I'm not checked");
          theoKzObjects.ModeStremersaveheadshot = false;
          localStorage.setItem("ModeStremersaveheadshot", "false");
        }
        location.reload();
      });
      $(document).ready(function () {
        var saveHeadshotMode = localStorage.getItem("ModeStremersaveheadshot");
        if (saveHeadshotMode === "true") {
          theoKzObjects.ModeStremersaveheadshot = true;
          $("#settings-stremingmodesaveheadshot-switch").prop("checked", true);
        } else {
          theoKzObjects.ModeStremersaveheadshot = false;
          $("#settings-stremingmodesaveheadshot-switch").prop("checked", false);
        }
      });
      $("#settings-arrowmobile-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          theoKzObjects.arrow = false;
        } else {
          console.log("I'm not checked");
          theoKzObjects.arrow = true;
        }
      });
      $("#PortionSize").on("input", function () {
        theoKzObjects.PortionSize = $(this).val();
        localStorage.PotenciadorSize = theoKzObjects.PortionSize;
      });
      $("#PortionAura").on("input", function () {
        theoKzObjects.PortionAura = $(this).val();
        localStorage.PotenciadorAura = theoKzObjects.PortionAura;
      });
      $("#smoothCamera").on("input", function () {
        theoKzObjects.smoothCamera = $(this).val();
        localStorage.smoothCamera = theoKzObjects.smoothCamera;
      });
      $("#FoodSize").on("input", function () {
        theoKzObjects.FoodSize = $(this).val();
        localStorage.ComidaSize = theoKzObjects.FoodSize;
      });
      $("#FoodShadow").on("input", function () {
        theoKzObjects.FoodShadow = $(this).val();
        localStorage.ComidaShadow = theoKzObjects.FoodShadow;
      });
// إعداد خيارات المؤشر
for (let a = 0; a < cursorOptions.length; a++) {
    const cursorUrl = cursorOptions[a].url; // استخدام const
    const cursorName = cursorOptions[a].nombre; // استخدام const
    let cursorImage = document.createElement("img");
    cursorImage.src = cursorUrl;

    // تعيين الخصائص للصورة
    $(cursorImage).attr("class", "cursor");

    // تعيين حدث النقر على صورة المؤشر
    $(cursorImage).click(function () {
        const selectedCursor = $(this).attr("src");
        localStorage.cursorSeleccionado = selectedCursor;

        // تحقق من وجود قيمة قبل التعيين
        if (selectedCursor) {
            $("#game-cont, #game-canvas, body").css({
                cursor: "url(" + selectedCursor + "), default"
            });
        }
    });

    // إضافة الصورة إلى الحاوية باستخدام prepend
    $(".cursor-container").prepend(cursorImage);
}

// حدث النقر لإعادة تعيين المؤشر الافتراضي
$("#default-cursor-btn").click(function () {
    delete localStorage.cursorSeleccionado;
    $("#game-cont, #game-canvas, body").css("cursor", "default");
});

// تعيين المؤشر عند تحميل الصفحة
if (localStorage.cursorSeleccionado) {
    $("#game-cont, #game-canvas, body").css({
        cursor: "url(" + localStorage.cursorSeleccionado + "), default"
    });
} else {
    // تعيين المؤشر الافتراضي إذا لم يكن هناك مؤشر محدد
    $("#game-cont, #game-canvas, body").css("cursor", "default");
}
for (let a = 0; a < backgroundOptions.length; a++) { // استخدام let بدلاً من var
    const backgroundUrl = backgroundOptions[a].url; // استخدام const
    const backgroundName = backgroundOptions[a].nombre; // استخدام const

    // إنشاء عنصر الصورة
    let backgroundImage = document.createElement("img");
    backgroundImage.src = backgroundUrl;

    // تعيين الخصائص للصورة
    $(backgroundImage).attr({
        class: "background",
        value: backgroundName
    });

    // تنسيق الصورة
    $(backgroundImage).css({
        width: '23%', // تعيين عرض الصورة
        margin: '1%', // تعيين هامش لتجنب التداخل
        borderRadius: '5px', // لجعل الزوايا دائرية
        cursor: 'pointer' // تغيير المؤشر عند المرور فوق الصورة
    });

    // إضافة حدث النقر
    $(backgroundImage).click(function () {
        const selectedBackground = $(this).attr("src");
        const backgroundValue = $(this).attr("value");
        backgroundIMG = selectedBackground;
        localStorage.fondoSeleccionado = backgroundIMG;

        // إظهار تنبيه عند اختيار الخلفية
        alert("You selected the background: " + backgroundValue);

        // تعيين الخلفية في التطبيق
        appInstance.q.Cf = new pixiProperties._b(appInstance.q.fn_o(selectedBackground));
    });

    // إضافة الصورة إلى الحاوية باستخدام prepend
    $(".background-container").prepend(backgroundImage);
}
      $(".background-container").prepend("");
      appInstance.q.Cf = new pixiProperties._b(appInstance.q.fn_o(localStorage.fondoSeleccionado));
    }
    function updateDescription() {
      $(".description-text").replaceWith("<div class=\"description-text\">");
      $(".description-text").prepend("<p id='title'>Dziri Gaming Connect</p>");
      $("#title").after(`
    <div id="idwormworld" style="text-align: center">
        <div class='logo'>
            <img src='https://www.baddawi.com/FDZ/images/icon.png' alt='Logo'/>
        </div>
`);
    }
    function updateGameData(action, value) {
      let updateFunction = function (killCount, headshotCount, totalKills, totalHeadshots) {
        ctx.setCountGame(killCount, headshotCount, totalKills, totalHeadshots);
      };
      if (action === "count") {
        theoKzObjects.kill = (theoKzObjects.kill || 0) + (value ? 0 : 1);
        theoKzObjects.headshot = (theoKzObjects.headshot || 0) + (value ? 1 : 0);
        theoKzObjects.totalKills = theoKzObjects.totalKills + (value ? 0 : 1);
        theoKzObjects.totalHeadshots = theoKzObjects.totalHeadshots + (value ? 1 : 0);
        updateFunction(theoKzObjects.kill, theoKzObjects.headshot, theoKzObjects.totalKills, theoKzObjects.totalHeadshots);
      }
      if (action === "open") {
        theoKzObjects.kill = 0;
        theoKzObjects.headshot = 0;
        $("#contadorKill_12").show();
        updateFunction(theoKzObjects.kill, theoKzObjects.headshot, theoKzObjects.totalKills, theoKzObjects.totalHeadshots);
      }
      if (action === "closed") {
        pwrups = {};
      }
      if (action === "cerrar") {
        theoKzObjects.kill = 0;
        theoKzObjects.headshot = 0;
        theoKzObjects.totalKills = 0;
        theoKzObjects.totalHeadshots = 0;
      }
    }
    if (!Number.prototype.dotFormat) {
      Number.prototype.dotFormat = function () {
        return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      };
    }
    if (!Number.prototype.dotFormatSelect2) {
      Number.prototype.dotFormatSelect2 = function () {
        return this.toString().substr(3, 2);
      };
    }
    setTimeout(function () {
      var forbiddenWords = ["fuck you", "fuck", "كس", "نايك", "انيك", "شرموطة", "اختك", "منيوكة", "Israel", "إسرائيل", "زبي"];
      const nicknameInput = document.getElementById("mm-params-nickname");
      const nicknameValue = nicknameInput.value;
      const xIndex = nicknameValue.indexOf("x");
      if (xIndex !== -1) {
        const trimmedNickname = nicknameValue.substring(0, xIndex);
        nicknameInput.value = trimmedNickname;
      }
      $("#mm-action-play").on("click", function () {
        var nickname = $("#mm-params-nickname").val();
        var containsForbiddenWord = forbiddenWords.some(function (word) {
          return nickname.toLowerCase().includes(word.toLowerCase());
        });
        if (containsForbiddenWord) {
          $("#mm-params-nickname").val("I Love FDZ");
        }
      });
      $(document).ready(function () {
        $("#getskin").click();
      });
      $("#final-share-fb").css("display", "none");
      $("#unl6wj4czdl84o9b").css("display", "none");
      $("#mm-menu-cont").css("display", "block");
      $("#mm-bottom-buttons").css("display", "block");
      $("#mm-player-info").css("display", "block");
      $("#relojHelp").css("position", "absolute");
      $("#relojHelp").css("top", "12px");
      $("#relojHelp").css("left", "5px");
      $("#delete-account-view").css("display", "none");
    }, 3000);
    var requestAnimationFrameLoop = function requestAnimationFrameLoop() {
      requestAnimationFrame(requestAnimationFrameLoop);
      initializeApp().Pa();
    };
    requestAnimationFrameLoop();
    function adjustLayout() {
      var bodyWidth = bodyElement.width();
      var bodyHeight = bodyElement.height();
      var stretchBoxWidth = stretchBoxElement.outerWidth();
      var stretchBoxHeight = stretchBoxElement.outerHeight();
      var headerHeight = headerElement.outerHeight();
      var footerHeight = footerElement.outerHeight();
      var zoomLevel = Math.min(1, Math.min((bodyHeight - footerHeight - headerHeight) / stretchBoxHeight, bodyWidth / stretchBoxWidth));
      var transformValue = "translate(-50%, -50%) scale(" + zoomLevel + ")";
      stretchBoxElement.css({
        "-webkit-transform": transformValue,
        "-moz-transform": transformValue,
        "-ms-transform": transformValue,
        "-o-transform": transformValue,
        transform: transformValue
      });
      initializeApp().Ra();
      window.scrollTo(0, 1);
    }
    var bodyElement = $("body");
    var stretchBoxElement = $("#stretch-box");
    var headerElement = $("#markup-header");
    var footerElement = $("#markup-footer");
    adjustLayout();
    $(window).resize(adjustLayout);
  })();
  window.anApp.p.Bc = function () {
    var appInstance = window.anApp.p;
    var registryData = {};
    $.get("https://resources.wormate.io/dynamic/assets/registry.json", function (response) {
      registryData = response;
      $.ajax({
        url: "https://www.baddawi.com/FDZ/api/skin.php",
        method: "GET",
        dataType: "json",
        success: function (skinData) {
          theoKzObjects.visibleSkin = skinData.visibleSkin;
          delete skinData.visibleSkin;
          for (let key in skinData) {
            if (key !== "propertyList") {
              if (Array.isArray(skinData[key])) {
                response[key] = response[key].concat(skinData[key]);
              } else {
                response[key] = {
                  ...response[key],
                  ...skinData[key]
                };
              }
            }
          }
          theoKzObjects.pL = skinData.propertyList;
          theoKzObjects.idSkin = skinData.skinArrayDict;
          appInstance.Cc(response);
        },
        error: function (request, textStatus, errorThrown) {
          console.error(errorThrown);
          appInstance.Cc(registryData);
        }
      });
    });
  };
  $("#background-canvas").replaceWith(`
    <canvas id="background-canvas"></canvas>
`);
  $("#popup-login-gg").html(`
    <div class="settings-line" id="popup-login-gg1">Login via Google</div>
`);
  $("#social-buttons").replaceWith("");
  $("#markup-footer");
});
if (!sessionStorage.getItem("visited")) {
  sessionStorage.setItem("visited", "true");
  location.reload(true);
}
function openPopup() {
  var popup = document.getElementById("popup");
  var overlay = document.getElementById("overlay");
  if (popup && overlay) {
    popup.style.display = "block";
    overlay.style.display = "block";
  }
}
function closePopup() {
  var popup = document.getElementById("popup");
  var overlay = document.getElementById("overlay");
  if (popup && overlay) {
    popup.style.display = "none";
    overlay.style.display = "none";
  }
}
function account() {
  $(".mx").on("click", function () {
    $(".servers-mexico").fadeIn(500);
    $("#addflag").attr("class", "flag mx");
    $(".ui-tab-inactive1").attr("class", "ui-tab-active ui-tab-inactive1");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-peru").fadeOut(100);
    $(".servers-eeuu").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".br").on("click", function () {
    $(".servers-mexico").fadeOut(100);
    $(".servers-eeuu").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
    $(".ui-tab-inactive0").attr("class", "ui-tab-active ui-tab-inactive0");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-peru").fadeIn(500);
    $("#addflag").attr("class", "flag br");
  });
  $(".us").on("click", function () {
    $(".servers-eeuu").fadeIn(500);
    $("#addflag").attr("class", "flag us");
    $(".ui-tab-inactive2").attr("class", "ui-tab-active ui-tab-inactive2");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".ca").on("click", function () {
    $(".servers-canada").fadeIn(500);
    $("#addflag").attr("class", "flag ca");
    $(".ui-tab-inactive3").attr("class", "ui-tab-active ui-tab-inactive3");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(500);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".de").on("click", function () {
    $(".servers-germania").fadeIn(500);
    $("#addflag").attr("class", "flag de");
    $(".ui-tab-inactive4").attr("class", "ui-tab-active ui-tab-inactive4");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(500);
    $(".servers-canada").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".fr").on("click", function () {
    $(".servers-francia").fadeIn(500);
    $("#addflag").attr("class", "flag fr");
    $(".ui-tab-inactive5").attr("class", "ui-tab-active ui-tab-inactive5");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".sg").on("click", function () {
    $(".servers-singapur").fadeIn(500);
    $("#addflag").attr("class", "flag sg");
    $(".ui-tab-inactive6").attr("class", "ui-tab-active ui-tab-inactive6");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".jp").on("click", function () {
    $(".servers-japon").fadeIn(500);
    $("#addflag").attr("class", "flag jp");
    $(".ui-tab-inactive7").attr("class", "ui-tab-active ui-tab-inactive7");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".au").on("click", function () {
    $(".servers-australia").fadeIn(500);
    $("#addflag").attr("class", "flag au");
    $(".ui-tab-inactive8").attr("class", "ui-tab-active ui-tab-inactive8");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".gb").on("click", function () {
    $(".servers-granbretana").fadeIn(500);
    $("#addflag").attr("class", "flag gb");
    $(".ui-tab-inactive9").attr("class", "ui-tab-active ui-tab-inactive9");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
  });
}
getPresedKey = function (event) {
  var keyPressed = "";
  if (event.keyCode == 9) {
    keyPressed += "TAB";
  } else if (event.keyCode == 13) {
    keyPressed += "ENTER";
  } else if (event.keyCode == 16) {
    keyPressed += "SHIFT";
  } else {
    keyPressed += String.fromCharCode(event.keyCode);
  }
  return keyPressed;
};
getStringKey = function (keyCode) {
  var keyString = "";
  if (keyCode == 9) {
    keyString += "TAB";
  } else if (keyCode == 13) {
    keyString += "ENTER";
  } else if (keyCode == 16) {
    keyString += "SHIFT";
  } else if (keyCode == 32) {
    keyString += "SPACE";
  } else if (keyCode == 27) {
    keyString += "ESC";
  } else {
    keyString += String.fromCharCode(keyCode);
  }
  return keyString;
};
isValidHotkey = function (event) {
  if (event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode == 9 || event.keyCode == 13 || event.keyCode == 16 || event.keyCode == 32 || event.keyCode == 27) {
    return true;
  } else {
    return false;
  }
};
console.log("FDZ - Version 1.0.5 Released in 2025");
