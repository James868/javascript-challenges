/*
  Title:
    Hide email addresses to protect from unauthorized user

  Description:
    Write a JavaScript function to hide email addresses to protect from unauthorized user.

  Example:
    console.log(protect_email("robin_singh@example.com")); // -> "robin...@example.com"

  Link:
    https://www.w3resource.com/javascript-exercises/javascript-string-exercise-6.php
*/

function protectEmail(email) {
  const [x, y] = email.split("@");
  return `${x.slice(0, 3)}...@${y}`;
}