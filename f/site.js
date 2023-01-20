var origFill = "#ececec";
var highFill = "red";

var allCountries = ["AE","AF","AI","AL","AM","AmericanSamoa","Angola","AntiguaandBarbuda","Argentina","AT","Australia","AW","Azerbaijan","BA","Bahamas","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQBO","BQSA","BQSE","BR","BT","BW","BY","BZ","Canada","CanaryIslandsSpain","CapeVerde","CaymanIslands","CD","CF","CG","CH","Chile","China","CI","CM","CO","Comoros","CR","CU","CW","Cyprus","CZ","DE","Denmark","DJ","DM","DO","DZ","EC","EE","EG","EH","ER","ES","ET","FaeroeIslands","FalklandIslands","FederatedStatesofMicronesia","FI","Fiji","France","FrenchPolynesia","GA","GD","GE","GF","GH","GL","GM","GN","GQ","Greece","GT","GU","Guadeloupe","GW","GY","HN","HR","HT","HU","IE","IL","IN","Indonesia","IQ","IR","IS","Italy","Japan","JM","JO","KE","KG","KH","KP","KR","KW","KZ","LA","LB","LC","LK","LR","LS","LT","LU","LV","LY","MA","Malaysia","Malta","Mauritius","MD","ME","MF","MG","MH","MK","ML","MM","MN","MQ","MR","MS","MV","MW","MX","MZ","NA","NE","NewCaledonia","NewZealand","NG","NI","NL","NorthernMarianaIslands","Norway","NP","NR","Oman","PA","PapuaNewGuinea","PE","Philippines","PK","PL","PS","PT","PuertoRico","PW","PY","QA","RE","RO","RS","RussianFederation","RW","SA","SaintKittsandNevis","Samoa","SãoToméandPrincipe","SD","SE","Seychelles","SI","SK","SL","SN","SO","SolomonIslands","SR","SS","SV","SX","SY","SZ","TD","TG","TH","TJ","TL","TM","TN","Tonga","TrinidadandTobago","Turkey","TurksandCaicosIslands","TV","TW","TZ","UA","UG","UnitedKingdom","UnitedStates","UnitedStatesVirginIslands","UY","UZ","Vanuatu","VC","VE","VG","VN","XK","YE","YT","ZA","ZM","ZW"];

var hiCountry = undefined;

function highlightCountry() {
  if ( hiCountry != undefined ) {
    $('#world-map svg').find('.'+hiCountry).css({'fill': origFill });
  }
  hiCountry = allCountries[Math.floor( Math.random() * allCountries.length)];
  $('#world-map svg').find('.'+hiCountry).css({'fill': highFill});
}

function doCountryHighlight(cnt,cb) {
  if ( cnt == 0 ) {
    // $('#world-map svg').find('.'+hiCountry).css({'fill': origFill });
    cb()
  } else {
    highlightCountry();
    setTimeout( () => { doCountryHighlight(cnt-1,cb) }, 200);
  }
}


function doIt(elem) {
  $(elem).html("<img src='/f/loader.svg'/>");
  $(elem).addClass('disabled');
  $(elem).removeAttr('href');

  $('#map-overlay').fadeIn(300);

  $('#world-map svg').find('path').css({'fill': origFill });

  doCountryHighlight(30, () => {
    setTimeout( function() {
      var tCnt = 0;
      var intVal = setInterval( () => {
        if ( tCnt == 0 ){
          tCnt = 1;
          $('#world-map svg').find('.'+hiCountry).css({'fill': origFill});
        } else {
          tCnt = 0;
          $('#world-map svg').find('.'+hiCountry).css({'fill': highFill});
        }
      }, 150);

      setTimeout( () => {
        clearInterval(intVal);
        $('#map-overlay').fadeOut(500, () => {
          $(elem).html("The Love has been Spread!");
        });
      }, 1600);
    }, 300);
  })
}
