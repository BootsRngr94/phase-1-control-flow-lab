function scuberGreetingForFeet(someNumber){
  let response = 'This one is on me!';
  if (someNumber <= 400){
    return response;
  } else if (someNumber >= 400 && someNumber <= 2000){
    let response = 'That will be twenty bucks.';
    return response;
  } else if (2000 < someNumber && someNumber <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}

function ternaryCheckCity(aCity){
  return aCity === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tips){
  switch (tips) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}