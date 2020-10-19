let user = 'hello';
let site = 'josephpinder.com';

let email = document.createElement('a'); 
email.className = 'footer__email flex--middle';
email.href = `mailto:${user}@${site}\?subject=New%20Enquiry%20from%20josephpinder.com`;
email.appendChild(document.createTextNode(`${user}@${site}`))

obfuscate.parentNode.insertBefore(email, obfuscate)

