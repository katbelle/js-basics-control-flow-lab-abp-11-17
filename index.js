function scuberGreetingForFeet () {
  let feet;
  if (feet <= 400){
    feet = 'This one is on me!';
} else if (feet > 2000){
  feet = "I will glady take your thirty bucks."
} else {
  feet = "No can do.";
}
return feet
}

function ternaryCheckCity (city) {
return city === 'NYC'? 'Ok, sounds good.':'No go.';
}

function switchOnCharmFromTip (tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
      default:
      return 'Bye.';
      break;

  }
}
