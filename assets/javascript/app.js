var $quota = 0;
var $rubyValue = 0;
var $diamondValue = 0;
var $topazValue = 0;
var $emeraldValue = 0;
var $totalValue = 0;
var wins = 0;
var losses = 0;

function setGemValue() { //this sets the gem values individually and uniquely

  function setRuby() { //set to a value between 1 - 12
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

function randQuota() { //generates a random quota between 19 - 120
  $quota = Math.floor(Math.random() * 102) + 19;
  console.log('Quota: ' + $quota);

  $('#quota').html('Quota Goal: ' + $quota);
} randQuota();

function scoreBoard () {
  $('#wins').html(`Wins: ${wins}`);
  $('#losses').html(`Losses: ${losses}`);
} scoreBoard();

function gameReset() {
  randQuota();
  setGemValue();
  $totalValue = 0;
  $('#gemValue').hide();
}

function checkWin() {
  if ($totalValue === $quota) {
    wins++;
    // maybe add a custom win toast popup?
    scoreBoard();
    gameReset();
  } else if ($totalValue > $quota) {
    losses++
    // maybe add a custom loss toast popup?
    scoreBoard();
    gameReset();
  }
}

$(document).on('click','#ruby', function valueUpdate() {
  $totalValue = $totalValue + $rubyValue;
  $('#gemValue').html($totalValue);
  $('#gemValue').show();
  checkWin();
});
$(document).on('click','#diamond', function valueUpdate() {
  $totalValue = $totalValue + $diamondValue;
  $('#gemValue').html($totalValue);
  $('#gemValue').show();
  checkWin();
});
$(document).on('click','#topaz', function valueUpdate() {
  $totalValue = $totalValue + $topazValue;
  $('#gemValue').html($totalValue);
  $('#gemValue').show();
  checkWin();
});
$(document).on('click','#emerald', function valueUpdate() {
  $totalValue = $totalValue + $emeraldValue;
  $('#gemValue').html($totalValue);
  $('#gemValue').show();
  checkWin();
});