var origFill = "#ececec";
var highFill = "red";

var allCountries = ["AE","AF","AI","AL","Angola","Argentina","AT","Australia","Azerbaijan","BA","BE","BF","BG","BL","BM","BN","BO","BR","BW","BY","Canada","CD","CF","CG","Chile","China","CI","CM","CO","CZ","DE","Denmark","DZ","EC","EE","EG","ER","ES","ET","FI","France","GA","GE","GH","GL","GN","Greece","HR","HU","IN","Indonesia","IQ","IR","IS","Italy","Japan","JO","KE","KG","KH","KP","KR","KZ","LA","LK","LR","LS","LT","LV","LY","MA","Malaysia","MD","ME","MF","MG","MH","MK","ML","MM","MN","MR","MS","MV","MW","MX","MZ","NA","NE","NewZealand","NG","NL","Norway","NP","NR","Oman","PapuaNewGuinea","PE","Philippines","PK","PL","PT","PY","RO","RS","RussianFederation","SA","Samoa","SD","SE","SI","SK","SN","SO","SS","SX","SY","SZ","TD","TH","TJ","TL","TM","TN","Tonga","Turkey","TV","TZ","UA","UG","UnitedKingdom","UnitedStates","UY","UZ","VE","VG","VN","XK","YE","ZA","ZM","ZW"];

var hiCountry = undefined

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
