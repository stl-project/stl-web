var origFill = "#ececec";
var highFill = "red";

/*
 * Taken from https://simplemaps.com/resources/svg-world
 */
var nearlyAllCountries = {
  "AF": "Afghanistan",
  "AL": "Albania",
  "DZ": "Algeria",
  "AI": "Anguilla",
  "AM": "Armenia",
  "AW": "Aruba",
  "AT": "Austria",
  "BH": "Bahrain",
  "BD": "Bangladesh",
  "BB": "Barbados",
  "BY": "Belarus",
  "BE": "Belgium",
  "BZ": "Belize",
  "BJ": "Benin",
  "BM": "Bermuda",
  "BT": "Bhutan",
  "BO": "Bolivia",
  "BA": "Bosnia and Herzegovina",
  "BW": "Botswana",
  "BR": "Brazil",
  "VG": "British Virgin Islands",
  "BN": "Brunei Darussalam",
  "BG": "Bulgaria",
  "BF": "Burkina Faso",
  "BI": "Burundi",
  "KH": "Cambodia",
  "CM": "Cameroon",
  "CF": "Central African Republic",
  "TD": "Chad",
  "CO": "Colombia",
  "CR": "Costa Rica",
  "HR": "Croatia",
  "CU": "Cuba",
  "CW": "Curaçao",
  "CZ": "Czech Republic",
  "CI": "Côte d'Ivoire",
  "KP": "Dem. Rep. Korea",
  "CD": "Democratic Republic of the Congo",
  "DJ": "Djibouti",
  "DM": "Dominica",
  "DO": "Dominican Republic",
  "EC": "Ecuador",
  "EG": "Egypt",
  "SV": "El Salvador",
  "GQ": "Equatorial Guinea",
  "ER": "Eritrea",
  "EE": "Estonia",
  "ET": "Ethiopia",
  "FI": "Finland",
  "GF": "French Guiana",
  "GA": "Gabon",
  "GE": "Georgia",
  "DE": "Germany",
  "GH": "Ghana",
  "GL": "Greenland",
  "GD": "Grenada",
  "GU": "Guam",
  "GT": "Guatemala",
  "GN": "Guinea",
  "GW": "Guinea-Bissau",
  "GY": "Guyana",
  "HT": "Haiti",
  "HN": "Honduras",
  "HU": "Hungary",
  "IS": "Iceland",
  "IN": "India",
  "IR": "Iran",
  "IQ": "Iraq",
  "IE": "Ireland",
  "IL": "Israel",
  "JM": "Jamaica",
  "JO": "Jordan",
  "KZ": "Kazakhstan",
  "KE": "Kenya",
  "XK": "Kosovo",
  "KW": "Kuwait",
  "KG": "Kyrgyzstan",
  "LA": "Lao PDR",
  "LV": "Latvia",
  "LB": "Lebanon",
  "LS": "Lesotho",
  "LR": "Liberia",
  "LY": "Libya",
  "LT": "Lithuania",
  "LU": "Luxembourg",
  "MK": "Macedonia",
  "MG": "Madagascar",
  "MW": "Malawi",
  "MV": "Maldives",
  "ML": "Mali",
  "MH": "Marshall Islands",
  "MQ": "Martinique",
  "MR": "Mauritania",
  "YT": "Mayotte",
  "MX": "Mexico",
  "MD": "Moldova",
  "MN": "Mongolia",
  "ME": "Montenegro",
  "MS": "Montserrat",
  "MA": "Morocco",
  "MZ": "Mozambique",
  "MM": "Myanmar",
  "NA": "Namibia",
  "NR": "Nauru",
  "NP": "Nepal",
  "NL": "Netherlands",
  "BQBO": "Netherlands",
  "NI": "Nicaragua",
  "NE": "Niger",
  "NG": "Nigeria",
  "PK": "Pakistan",
  "PW": "Palau",
  "PS": "Palestine",
  "PA": "Panama",
  "PY": "Paraguay",
  "PE": "Peru",
  "PL": "Poland",
  "PT": "Portugal",
  "QA": "Qatar",
  "CG": "Republic of Congo",
  "KR": "Republic of Korea",
  "RE": "Reunion",
  "RO": "Romania",
  "RW": "Rwanda",
  "BQSA": "Saba (Netherlands)",
  "LC": "Saint Lucia",
  "VC": "Saint Vincent and the Grenadines",
  "BL": "Saint-Barthélemy",
  "MF": "Saint-Martin",
  "SA": "Saudi Arabia",
  "SN": "Senegal",
  "RS": "Serbia",
  "SL": "Sierra Leone",
  "SX": "Sint Maarten",
  "SK": "Slovakia",
  "SI": "Slovenia",
  "SO": "Somalia",
  "ZA": "South Africa",
  "SS": "South Sudan",
  "ES": "Spain",
  "LK": "Sri Lanka",
  "BQSE": "St. Eustatius (Netherlands)",
  "SD": "Sudan",
  "SR": "Suriname",
  "SZ": "Swaziland",
  "SE": "Sweden",
  "CH": "Switzerland",
  "SY": "Syria",
  "TW": "Taiwan",
  "TJ": "Tajikistan",
  "TZ": "Tanzania",
  "TH": "Thailand",
  "GM": "The Gambia",
  "TL": "Timor-Leste",
  "TG": "Togo",
  "TN": "Tunisia",
  "TM": "Turkmenistan",
  "TV": "Tuvalu",
  "UG": "Uganda",
  "UA": "Ukraine",
  "AE": "United Arab Emirates",
  "UY": "Uruguay",
  "UZ": "Uzbekistan",
  "VE": "Venezuela",
  "VN": "Vietnam",
  "EH": "Western Sahara",
  "YE": "Yemen",
  "ZM": "Zambia",
  "ZW": "Zimbabwe",
  /* Extended with these */
  "NewZealand": "New Zealand",
  "PapuaNewGuinea": "Papua New Guinea",
  "RussianFederation": "Russian Federation",
  "UnitedKingdom": "United Kingdom",
  "UnitedStates": "United States"
};

var mobileFriendlyCountries = ["AE","AF","Angola","Argentina","AT","Australia","Azerbaijan","BF","BG","BM","BN","BO","BR","BW","BY","Canada","CD","CF","CG","Chile","China","CI","CM","CO","CZ","DE","Denmark","DZ","EC","EG","ER","ES","ET","FI","France","GA","GE","GH","GL","GN","Greece","HR","HU","IN","Indonesia","IQ","IR","IS","Italy","Japan","JO","KE","KG","KH","KP","KR","KZ","LA","LK","LR","LS","LT","LV","LY","MA","Malaysia","MF","MG","MH","MK","ML","MM","MN","MR","MS","MV","MW","MX","MZ","NA","NE","NewZealand","NG","Norway","NP","Oman","PapuaNewGuinea","PE","Philippines","PK","PL","PT","PY","RO","RS","RussianFederation","SA","SD","SE","SK","SN","SO","SS","SX","SY","SZ","TD","TH","TJ","TL","TM","TN","Tonga","Turkey","TV","TZ","UA","UG","UnitedKingdom","UnitedStates","UY","UZ","VE","VN","YE","ZA","ZM","ZW"];

var hiCountry = undefined

function highlightCountry() {
  if ( hiCountry != undefined ) {
    $('#world-map svg').find('.'+hiCountry).css({'fill': origFill });
  }

  hiCountry = mobileFriendlyCountries[
    Math.floor( Math.random() * mobileFriendlyCountries.length)
  ];

  $('#world-map svg').find('.'+hiCountry).css({'fill': highFill});
}

function doCountryHighlight(cnt,cb) {
  if ( cnt == 0 ) {
    cb()
  } else {
    highlightCountry();
    setTimeout( () => { doCountryHighlight(cnt-1,cb) }, 200);
  }
}

function doPulsingHeart(cnt,cb) {
  if ( cnt == 0 ) {
    cb()
  } else {
    if ( $('#pulsing-heart').height() == 25 ) {
      $('#pulsing-heart').height(30)
    } else {
      $('#pulsing-heart').height(25)
    }
    setTimeout( () => { doPulsingHeart(cnt-1,cb) }, 200);
  }
}


function doIt(elem) {
  $(elem).html("<img src='/f/loader.svg'/>");
  $(elem).removeAttr('href');
  $(elem).addClass('disabled');
  $(elem).removeClass('shadow rounded btn btn-lg btn-outline-success');
  $(elem).addClass('btn btn-lg btn-outline-success');

  $('#world-map svg').find('path').css({'fill': origFill });

  $('#map-overlay').fadeIn(300, () => {
    doCountryHighlight(30, () => {

      $('#dest-country').fadeOut( 200, () => {
        if ( hiCountry in nearlyAllCountries ) {
          $('#dest-country').html(nearlyAllCountries[hiCountry] + "!").fadeIn(200);
        } else {
          $('#dest-country').html(hiCountry  + "!").fadeIn(200);
        }
      });

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
              $(elem).html("The <img id='pulsing-heart' style='height: 25px;' src='/f/logo-no-bg.svg'/> has been Spread!");

              setTimeout( () => {
                $('#pulsing-heart').animate({"height": 35}, 800, "swing", () => {
                  $('#pulsing-heart').animate({"height": 25}, 800);
                });
              }, 200);

            }, 200);
          });
        }, 1600);
      }, 300);
    })
  })
}
