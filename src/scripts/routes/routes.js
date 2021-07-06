import Home from "../views/pages/Home";
import Detail from "../views/pages/Detail";
import Favorite from "../views/pages/favorite";

const routes = {
    "/": Home,
    "/detail/:id": Detail,
    "/favorite": Favorite
};

export default routes;
