document.addEventListener("DOMContentLoaded", function(event) {
  blockstack.redirectToSignIn(redirectURI, manifestURI, ['store_write', 'publish_data'])
})
