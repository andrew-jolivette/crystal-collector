var $quota = 0;
var $rubyValue = 0;
var $diamondValue = 0;
var $topazValue = 0;
var $emeraldValue = 0;

function setGemValue() {

  function setRuby() {
    $rubyValue = Math.floor(Math.random() * 11) + 1;
    console.log('Ruby Value: ' + $rubyValue);  
  } setRuby();
  function setDiamond() {
    $diamondValue = Math.floor(Math.random() * 11) + 1;
    console.log('Diamond Value: ' + $diamondValue);
  } setDiamond();
  function setTopaz() {
    $topazValue = Math.floor(Math.random() * 11) + 1;
    console.log('Topaz Value: ' + $topazValue);
  } setTopaz();
  function setEmerald() {
    $emeraldValue = Math.floor(Math.random() * 11) + 1;
    console.log('Emerald Value: ' + $emeraldValue);
  } setEmerald();

  function checkValue() { // this function makes sure there are no duplicate values
    if ($rubyValue === $diamondValue || $rubyValue === $topazValue || $rubyValue === $emeraldValue) {
      setRuby();
      checkValue();
    }
    if ($diamondValue === $rubyValue || $diamondValue === $topazValue || $diamondValue === $emeraldValue) {
      setDiamond();
      checkValue();
    }
    if ($topazValue === $rubyValue || $topazValue === $diamondValue || $topazValue === $emeraldValue) {
      setTopaz();
      checkValue();
    }
    if ($emeraldValue === $diamondValue || $emeraldValue === $topazValue || $emeraldValue === $rubyValue) {
      setEmerald();
      checkValue();
    }
  }checkValue();

  $('#ruby').attr('gemvalue', $rubyValue);
  $('#diamond').attr('gemvalue', $diamondValue);
  $('#topaz').attr('gemvalue', $topazValue);
  $('#emerald').attr('gemvalue', $emeraldValue);
} setGemValue();

function randQuota() {
  $quota = Math.floor(Math.random() * 102) + 19;
  console.log('Quota: ' + $quota);

  $('#quota').append($quota);
} randQuota();