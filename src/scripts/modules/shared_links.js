export const SharedLinkFacebook = ()=>{
  let facebookWindow = window.open(
  	'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.URL), 'facebook-popup', 'height=350,width=600'
  );

  if(facebookWindow.focus) facebookWindow.focus();
}

export const SharedLinkTwitter = ()=>{
  let twitterWindow = window.open(
  	'https://twitter.com/share?url=' + encodeURIComponent(document.URL), 'twitter-popup', 'height=350,width=600'
  );

  if(twitterWindow.focus) twitterWindow.focus();
}

export const SharedLinkLinkedin = () =>{
  let linkedinWindow = window.open(
    'http://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(document.URL), 'linkedin-popup', 'height=350,width=600'
  );

  if(linkedinWindow.focus) linkedinWindow.focus();
}