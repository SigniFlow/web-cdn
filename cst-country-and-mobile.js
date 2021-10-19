var input = document.querySelectorAll(".cst-int-number");
input.forEach(myFunction);

function myFunction(item) {
  
window.intlTelInput(item, {
separateDialCode: false,
preferredCountries: ["us","gb","za","au","br" ],
formatOnDisplay: true,
nationalMode: false,
initialCountry: "auto",
    geoIpLookup: function(success) {
      // Get your api-key at https://ipdata.co/
      fetch("https://api.ipdata.co/?api-key=be5fe74fd3115642645f6c303fbe028ed1cc154feed90f02a67c7aca")
        .then(function(response) {
          if (!response.ok) return success("");
          return response.json();
        })
        .then(function(ipdata) {
          success(ipdata.country_code);
        });
    },
utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/js/utils.min.js",
});

}

function phoneFormatter(arg) {
    
        var number =  jQuery(arg).val();
        var classf = jQuery(".iti__selected-flag > div").attr("class");
        var flag = classf.slice(-2);
  
        console.log("check number: ", number);
        console.log("check classf: ", classf);
        console.log("check flag: ", flag);
        
        var formattedNumber = intlTelInputUtils.formatNumber(number, flag, intlTelInputUtils.numberFormat.INTERNATIONAL);
        $(arg).val(formattedNumber);
};

jQuery(document).ready(function() {

var inputCountry = document.querySelectorAll(".cst-country");
inputCountry.forEach(function(){
                     
jQuery(this).countrySelect({
preferredCountries: ["us","gb","za","au","br" ],
initialCountry: "auto",
    geoIpLookup: function(success) {
      // Get your api-key at https://ipdata.co/
      fetch("https://api.ipdata.co/?api-key=be5fe74fd3115642645f6c303fbe028ed1cc154feed90f02a67c7aca")
        .then(function(response) {
          if (!response.ok) return success("");
          return response.json();
        })
        .then(function(ipdata) {
          success(ipdata.country_code);
        });
    }
});                  
  
                     });
  
});
       
//jQuery(".cst-country").countrySelect({
//preferredCountries: ["us","gb","za","au","br" ],
//initialCountry: "auto",
//    geoIpLookup: function(success) {
//      // Get your api-key at https://ipdata.co/
//      fetch("https://api.ipdata.co/?api-key=be5fe74fd3115642645f6c303fbe028ed1cc154feed90f02a67c7aca")
//        .then(function(response) {
//          if (!response.ok) return success("");
//          return response.json();
//        })
//        .then(function(ipdata) {
//          success(ipdata.country_code);
//        });
//    }
//});
