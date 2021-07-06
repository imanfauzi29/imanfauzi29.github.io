const DrawerInitiator = {
    init({ button, overlay, drawer, content }) {
        button.addEventListener("click", (evt) => {
            this._toggleDrawer(evt, button, drawer, overlay);
        });

        content.addEventListener("click", (evt) => {
            this._closeDrawer(evt, drawer);
        });
    },

    _toggleDrawer(evt, button, drawer, overlay) {
        evt.stopPropagation();
        button.classList.toggle("active");
        drawer.classList.toggle("show");
        overlay.classList.toggle("show");
    },

    _closeDrawer(evt, drawer) {
        evt.stopPropagation();
        drawer.classList.remove("open");
    }
};

export default DrawerInitiator;
