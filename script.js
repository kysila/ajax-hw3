function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookies(name, value, options = {}) {
    document.cookie = `${name}=${value}`;
}

const btn = document.querySelector('.btn-cookies');

btn.addEventListener('click', (e) => {
    setCookies('experiment', 'novalue', {
        'max-age': 300
    });

    let user = getCookie('new-user');
    if (user === undefined) {
        setCookies('new-user', 'true');
    } else {
        setCookies('new-user', 'false');
    }
    console.log(document.cookie);

});





