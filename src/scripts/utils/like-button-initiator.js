import FavoriteRestaurantIdb from "../data/favoriteRestaurant-idb";
import { buttonFavorite } from "../views/templates/templates";

const LikeButtonInitiator = {
    async init({ likeButtonContainer, restaurant }) {
        this._likeButtonContainer = likeButtonContainer;
        this._restaurant = restaurant;
        await this._renderButton();
    },

    async _renderButton() {
        const { id } = this._restaurant;

        if (await this._restaurantExists(id)) {
            this._renderLiked();
        } else {
            this._renderLike();
        }
    },

    async _restaurantExists(id) {
        const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
        return !!restaurant;
    },

    _renderLiked() {
        const icon = "<i class=\"fa fa-fw fa-heart\"></i>";
        this._likeButtonContainer.innerHTML = buttonFavorite(icon);

        const likeButton = document.querySelector("#btnFavorite");
        likeButton.addEventListener("click", async () => {
            await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
            this._renderButton();
        });
    },

    _renderLike() {
        const icon = "<i class=\"far fa-fw fa-heart\"></i>";
        this._likeButtonContainer.innerHTML = buttonFavorite(icon);

        const likeButton = document.querySelector("#btnFavorite");
        likeButton.addEventListener("click", async () => {
            await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
            this._renderButton();
        });
    }
};

export default LikeButtonInitiator;
