const isUserLoggeIn = true;

if (isUserLoggeIn) {
}

// >,<, <= , == , != , === , && , ||

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
  console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log(`user logged in`);
}
