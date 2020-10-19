// let user = 'hello';
// let site = 'josephpinder.com';

// let email = document.createElement('a'); 
// email.className = 'footer__email flex--middle';
// email.href = `mailto:${user}@${site}\?subject=New%20Enquiry%20from%20josephpinder.com`;
// email.appendChild(document.createTextNode(`${user}@${site}`))

// obfuscate.parentNode.insertBefore(email, obfuscate)


let obfuscate = document.querySelectorAll('[obfuscate]');

for (let i = 0; i < obfuscate.length; i++) {
  // Get Email
  let local = obfuscate[i].getAttribute('data-local')
  let domain = obfuscate[i].getAttribute('data-domain')
  
  // Get Phone Number
  let country = obfuscate[i].getAttribute('data-country')
  let area = obfuscate[i].getAttribute('data-area')
  let prefix = obfuscate[i].getAttribute('data-prefix')
  let line = obfuscate[i].getAttribute('data-line')
  
  // Check if it's a phone number
  if (obfuscate[i].hasAttribute('data-country')) {
    
    // If it is, let's put out a phone number
    let tel = document.createElement('a');
    tel.className = 'tel';
    tel.href = `tel:+${country}${area}${prefix}${line}`;
    tel.appendChild(document.createTextNode(`(${area}) ${prefix}-${line}`));
    
    obfuscate[i].parentNode.insertBefore(tel, obfuscate[i]);
  
  } else {
    
    // Otherwise, we'll default to emails
    let email = document.createElement('a'); 
    email.className = 'mail';
    email.href = `mailto:${local}@${domain}`;
    email.appendChild(document.createTextNode(`${local}@${domain}`))
    
    obfuscate[i].parentNode.insertBefore(email, obfuscate[i]);
    
  }

}    