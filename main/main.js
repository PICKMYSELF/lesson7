module.exports = function main(email, suffixes) {
  // Write your code here
  var email_words = email.split("@");
  return email_words.slice(-1) === suffixes;
};
