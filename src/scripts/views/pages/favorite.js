import FavoriteRestaurantIdb from "../../data/favoriteRestaurant-idb";
import { listRestaurant, noListRestaurant } from "../templates/templates";

const Favorite = {
    async render() {
        return `
            <div id="favoriteList" class="container" style="padding-top: 130px;">
                <h1 class="text-primary text-center">Favorite Restaurant</h1>
                <div class="row" style="min-height: 60vh">
                </div>
            </div>
        `;
    },

    async afterRender() {
        const favoritedRestaurant = await FavoriteRestaurantIdb.getAllRestaurants();
        const renderFavorite = document.querySelector("#favoriteList .row");
        const html = Object.keys(favoritedRestaurant).length > 0 ? favoritedRestaurant.map((favorite) => listRestaurant(favorite)) : [noListRestaurant("List favorite")];
        console.log(html);
        renderFavorite.innerHTML = html.join("");
    }
};

export default Favorite;
