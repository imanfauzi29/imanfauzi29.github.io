const NavbarInitiator = {
    init({ navbar, valueFromTop }) {
        this._rangeFromTop = valueFromTop;
        this._scrollFromTop =
            document.body.scrollTop || document.documentElement.scrollTop;
        this._navbar = navbar;
    },

    changeBackgroundNavbarToLight() {
        const navbar = this._navbar;
        if (this.scrollFromTop > this.rangeFromTop) {
            navbar.classList.add("bg-light");
            navbar.classList.remove("bg-transparent");
        }
    }
};

export default NavbarInitiator;
