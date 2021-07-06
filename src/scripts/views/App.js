import routes from "../routes/routes";
import UrlParser from "../routes/url-parser";
import DrawerInitiator from "../utils/drawer-initiator";

class App {
    constructor({ button, overlay, drawer, content, footer }) {
        this._button = button;
        this._drawer = drawer;
        this._content = content;
        this._overlay = overlay;
        this._footer = footer;

        this._initialAppShell();
        this._createFooter();
    }

    _initialAppShell() {
        DrawerInitiator.init({
            button: this._button,
            overlay: this._overlay,
            drawer: this._drawer,
            content: this._content
        });
    }

    // eslint-disable-next-line class-methods-use-this
    _createFooter() {
        const footer = document.getElementById("text-footer");
        const date = new Date().getFullYear();
        const footerText = `Copyright &copy; ${date} | Let's Eat`;
        footer.innerHTML = footerText;
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._content.innerHTML = await page.render();
        await page.afterRender();
    }
}

export default App;
