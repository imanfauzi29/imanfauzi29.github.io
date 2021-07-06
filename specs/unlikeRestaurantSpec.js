import LikeButtonInitiator from "../src/scripts/utils/like-button-initiator";
import FavoriteRestaurantIdb from "../src/scripts/data/favoriteRestaurant-idb";

const addLikeButtonContainer = () => {
    document.body.innerHTML = "<div id=\"likeBtnContainer\"></div>";
};

describe("Unliking a restaurant", () => {
    beforeEach(async () => {
        addLikeButtonContainer();
        await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    });

    afterEach(async () => {
        await FavoriteRestaurantIdb.deleteRestaurant(1);
    });

    it("should display unlike widget when the movie has been liked", async () => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector("#likeBtnContainer"),
            restaurant: {
                id: 1,
            },
        });

        expect(document.querySelector("i[class=\"fa fa-fw fa-heart\"]"))
            .toBeTruthy();
    });

    it("should not display like widget when the movie has been liked", async () => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector("#likeBtnContainer"),
            restaurant: {
                id: 1,
            },
        });

        expect(document.querySelector("i[class=\"far fa-fw fa-heart\"]"))
            .toBeFalsy();
    });

    it("should be able to remove liked movie from the list", async () => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector("#likeBtnContainer"),
            restaurant: {
                id: 1,
            },
        });

        document.querySelector("#btnFavorite").dispatchEvent(new Event("click"));

        expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
    });

    it("should not throw error if the unliked movie is not in the list", async () => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector("#likeBtnContainer"),
            restaurant: {
                id: 1,
            },
        });

        await FavoriteRestaurantIdb.deleteRestaurant(1);

        document.querySelector("#btnFavorite").dispatchEvent(new Event("click"));

        expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
    });
});
