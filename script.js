let colorIndicator = document.getElementById('color-indicator');
let test = document.getElementById('color-hex');
const colorPicker = new iro.ColorPicker("#color-picker", {
  width: 180, color: "#ffffff"
});
colorPicker.on('color:change', function(color){
  let hexCode = color.hexString;
  colorIndicator.style.backgroundColor = hexCode;
  test.innerHTML = hexCode;
});