document.addEventListener("DOMContentLoaded", evt => {
    locationHashChanged();
    window.onhashchange = locationHashChanged;
});

function locationHashChanged() {
    if (location.hash === '#restaurants') {
        Dynamic();
        navigateTo("restaurants");
    } else if (location.hash === '#kontakt') {
        navigateTo("kontakt");
    } else {
        navigateTo("intro");
    }
}

window.onhashchange = locationHashChanged;


function navigateTo(site) {
    clearMain();
    navChange(site);
    const main = document.querySelector("main");
    const curr = document.getElementById(site + "-template");
    const clone = document.importNode(curr.content, true);
    main.appendChild(clone);
}

function clearMain() {
    $("main").empty();
}

function navChange(site) {

    $("a").removeClass("active"); //removes active from previous page
    let current = document.getElementById(site + "-nav")
    current.classList.toggle("active")
}

function Dynamic() {

    const xhr = new XMLHttpRequest();
    xhr.open("get", "/restaurants", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const url = JSON.parse(xhr.responseText);
            const targetContainer = document.querySelector(".restaurants");
            for (let i = 0; i < url.length; i++) {
                const key = url[i];

                const curr = document.querySelector(".res-temp");
                const clone = document.importNode(curr.content, true);

                clone.querySelector("img").src = key.img;
                clone.querySelector("img").alt = key.name ;
                clone.getElementById("resname").innerHTML = key.name;
                clone.getElementById("catagory").innerHTML = key.subtitle;
                clone.getElementById("address").innerHTML = key.address;
                clone.querySelector("a").innerHTML = key.urlname;
                clone.querySelector("a").href = key.url;
                clone.getElementById("tel").innerHTML = key.tel;

                targetContainer.appendChild(clone);

            }
        }
    };
    xhr.send();


}
