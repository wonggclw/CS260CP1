let colorIndicator = document.getElementById('color-indicator');
let test = document.getElementById('userColor');
const colorPicker = new iro.ColorPicker("#color-picker", {
  width: 180, color: "#ffffff"
});
colorPicker.on('color:change', function(color){
  let hexCode = color.hexString;
  hexCode = hexCode.slice(1);
  colorIndicator.style.backgroundColor = hexCode;
  test.value = hexCode;
});

document.getElementById("colorSubmit").addEventListener("click", function(event) {
        event.preventDefault();
        const value = document.getElementById("userColor").value;
        if (value === "")
        return;
        console.log(value);
        
        const urlOne = "https://www.thecolorapi.com/scheme?hex=" + value + "&mode=monochrome";
        fetch(urlOne)
          .then(function(response){
            return response.json();
          }).then(function(json){
            console.log(json);
            let results = "";
            results += '<h2>Your monochromatic color scheme: </h2>'
            results += '<img src = "' + json.image.bare + '" style="transform:rotate(-90deg);"/>';
            results += '<div class = "container full-width">'
            for(let i = 0; i < json.colors.length; i++){
                results += '<p>' + json.colors[i].hex.clean + '</p>'
            }
            results += '</div>';
            document.getElementById("colorScheme").innerHTML = results;
            
            
        const urlTwo = "https://www.thecolorapi.com/scheme?hex=" + value + "&mode=analogic";
        fetch(urlTwo)
            .then(function(response){
                return response.json();
            }).then(function(json){
                let results = "";
                results += '<h2>Your analogous color scheme: </h2>'
                results += '<img src = "' + json.image.bare + '" style="transform:rotate(-90deg);"/>';
                results += '<div class = "container full-width">'
                for(let i = 0; i < json.colors.length; i++){
                    results += '<p>' + json.colors[i].hex.clean + '</p>'
                }
                results += '</div>';
                document.getElementById("colorScheme").innerHTML += results;
            })
          const urlThree = "https://www.thecolorapi.com/scheme?hex=" + value + "&mode=triad&count=3";
        fetch(urlThree)
            .then(function(response){
                return response.json();
            }).then(function(json){
                let results = "";
                results += '<h2>Your tradic color scheme: </h2>'
                results += '<img src = "' + json.image.bare + '" style="transform:rotate(-90deg);"/>';
                results += '<div class = "container full-width">'
                for(let i = 0; i < json.colors.length; i++){
                    results += '<p>' + json.colors[i].hex.clean + '</p>'
                }
                results += '</div>';
                document.getElementById("colorScheme").innerHTML += results;
            })
          
          });
  });