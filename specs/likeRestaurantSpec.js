import FavoriteRestaurantIdb from "../src/scripts/data/favoriteRestaurant-idb";
import LikeButtonInitiator from "../src/scripts/utils/like-button-initiator";

const addLikeButtonContainer = () => {
    document.body.innerHTML = "<div id=\"likeBtnContainer\"></div>";
};

describe("liking restaurant", () => {
    beforeEach(async () => {
        addLikeButtonContainer();
        await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    });

    afterEach(async () => {
        await FavoriteRestaurantIdb.deleteRestaurant(1);
    });

    it("should show the like button when the movie has not been liked before", async () => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector("#likeBtnContainer"),
            restaurant: {
                id: 1,
            }
        });
    });

    it("should have a restaurant in indexed DB", async () => {
        const idx = await FavoriteRestaurantIdb.getRestaurant(1);

        expect(idx).toEqual({ id: 1 });
    });
});
