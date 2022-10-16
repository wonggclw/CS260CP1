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