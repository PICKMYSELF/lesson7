module.exports = function main(email, suffixes) {
  // Write your code here
  var email_words = email.split("@");
  console.log(email_words.slice(-1) + ' ' + suffixes + email_words.slice(-1) == suffixes);
  return email_words.slice(-1) == suffixes;
};
