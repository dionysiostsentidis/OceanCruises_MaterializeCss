const scrollsp = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scrollsp, {});
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});
//Showcase Slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000
});
const autocompl = document.querySelector('.autocomplete');
M.Autocomplete.init(autocompl, {
    data: {
        "Greece": null,
        "Italy": null,
        "France": null,
        "Bahames": null,
        "Cyprus": null,
    }
});
const materbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materbox, {});