var origFill = "#ececec";
var highFill = "red";

var allCountries = ["AE","AF","AI","AL","AmericanSamoa","Angola","Argentina","AT","Australia","AW","Azerbaijan","BA","BB","BE","BF","BG","BI","BJ","BL","BM","BN","BO","BR","BW","BY","BZ","Canada","CD","CF","CG","Chile","China","CI","CM","CO","CR","CW","CZ","DE","Denmark","DJ","DZ","EC","EE","EG","EH","ER","ES","ET","FI","France","GA","GD","GE","GF","GH","GL","GM","GN","GQ","Greece","GT","GW","GY","HN","HR","HU","IN","Indonesia","IQ","IR","IS","Italy","Japan","JO","KE","KG","KH","KP","KR","KZ","LA","LK","LR","LS","LT","LV","LY","MA","Malaysia","MD","ME","MF","MG","MH","MK","ML","MM","MN","MR","MS","MV","MW","MX","MZ","NA","NE","NewZealand","NG","NI","NL","Norway","NP","NR","Oman","PA","PapuaNewGuinea","PE","Philippines","PK","PL","PT","PY","RO","RS","RussianFederation","RW","SA","Samoa","SD","SE","SI","SK","SL","SN","SO","SR","SS","SV","SX","SY","SZ","TD","TG","TH","TJ","TL","TM","TN","Tonga","Turkey","TV","TZ","UA","UG","UnitedKingdom","UnitedStates","UY","UZ","VC","VE","VG","VN","XK","YE","ZA","ZM","ZW"];

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

  $('#world-map svg').find('path').css({'fill': origFill });

  $('#map-overlay').fadeIn(300, () => {
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
            setTimeout( () => {
              $(elem).html("The Love has been Spread!");
            }, 200);
          });
        }, 1600);
      }, 300);
    })
  })
}
