import netlifyIdentity from 'netlify-identity-widget';


if (typeof window !== 'undefined') {
    console.log('init netlify')
    window.netlifyIdentity = netlifyIdentity;
    netlifyIdentity.init();
}

export {netlifyIdentity};
