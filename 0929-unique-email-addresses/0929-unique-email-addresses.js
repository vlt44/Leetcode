/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  let emailSet = new Set();

  for (let i = 0; i < emails.length; i++) {
    let [local, domain] = emails[i].split("@");
    local = local.replace(/\./g, "").split("+");
    
    let uniqueEmail = local[0] + "@" + domain;
    emailSet.add(uniqueEmail); 
  }
  
    return emailSet.size;
};