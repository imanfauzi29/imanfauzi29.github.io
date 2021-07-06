import ApiService from "../../api/ApiService";
import UrlParser from "../../routes/url-parser";
import LikeButtonInitiator from "../../utils/like-button-initiator";
import reviewInitiator from "../../utils/review-initiator";
import {
    setReviewLoading,
    titleDescriptionLoading
} from "../templates/skeletonLoading";
import {
    detailCategory,
    menus,
    setReview,
    titleDescription
} from "../templates/templates";
import "skeleton-elements/skeleton-elements.css";

const Detail = {
    async render() {
        return `
        <div class="container" style="padding-top: 8rem" id="content">
        <div class="row" id="dataRestaurant">
        <div class="column-md-4 relative" id="image-left">
        </div>
        <div class="column-md-8" id="data-right"></div>
        </div>
        <div class="row mt-5 mb-5" style="width:100%" id="cust-review">
                <div class="column-md-12 relative">
                    <h2 class="text-center text-primary"><i class="fas fa-quote-left"></i> Customer Review <i class="fas fa-quote-right"></i></h2>
                    <div class="toggle_show">
                        <div class="row mt-1 customer-list p-1 custom-scrollbar"></div>
                    </div>
                    <button class="button-toggle-show" aria-label="expand"><i class="fa fa-fw fa-chevron-down"></i><button>
                </div>
            </div>
            <div id="addNewReview">
            <h2 class="title"><i class="fas fa-quote-left"></i> Add Review <i class="fas fa-quote-right"></i></h2>
                <form id="submit_review">
                    <div class="form-input">
                        <label>
                        Name
                        <input type="text" name="reviewName" id="name" minLength="3" data-error="error_name" />
                        </label>
                        <small class="error-feedback" id="error_name"></small>
                    </div>
                    <div class="form-input">
                        <label>
                        Review
                        <textarea id="text" name="reviewText" rows="8" minLength="5" data-error="error_review"></textarea>
                        </label>
                        <small class="error-feedback" id="error_review"></small>
                    </div>
                    <button class="btn-submit" type="submit" aria-label="submit">Submit</button>
                </form>
            </div>
        </div>
        <div id="likeBtnContainer">
        </div>
        `;
    },

    async afterRender() {
        const content = document.getElementById("dataRestaurant");
        const review = document.querySelector("#cust-review .customer-list");

        content.classList.add("skeleton-effect-wave");
        content.innerHTML = titleDescriptionLoading();

        review.classList.add("skeleton-effect-wave");
        review.innerHTML = setReviewLoading();

        const { id } = UrlParser.parseActiveUrlWithoutCombiner();
        const getRestaurantById = await ApiService.getDetailRestaurant(id)
            .then((res) => res.data)
            .catch((e) => e.message);

        const { pictureId, name, customerReviews } =
            getRestaurantById.restaurant;

        this.setImage(pictureId, name);
        this.setData(getRestaurantById.restaurant);
        this.setReview(customerReviews);

        content.classList.remove("skeleton-effect-wave");
        review.classList.remove("skeleton-effect-wave");

        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector("#likeBtnContainer"),
            restaurant: getRestaurantById.restaurant
        });

        this.submitReview(getRestaurantById.restaurant.id);

        // button toggle review
        const btnToggleReview = document.querySelector(".button-toggle-show");
        btnToggleReview.addEventListener("click", () => {
            const toggleContainer = document.querySelector(".toggle_show");
            toggleContainer.classList.toggle("show");
        });
    },

    setImage(pictureId, name) {
        const image = document.getElementById("image-left");
        const getImage = ApiService.getRestaurantPicture("medium", pictureId);
        image.innerHTML = `<img src="${getImage}" class="skeleton-block" style="width: 100%;object-fit: cover;height: 100%;border-radius: 10px" alt="${name}">`;
    },

    setData(restaurants) {
        const data = document.getElementById("data-right");
        data.innerHTML = titleDescription(restaurants);

        const category = document.querySelector(".category");
        const categoryData = restaurants.categories.map(
            (ctr) => `<div class="category_list-item">${ctr.name}</div>`
        );
        category.innerHTML = detailCategory(categoryData);

        let { drinks, foods } = restaurants.menus;

        const menu = document.querySelector("#menus");
        drinks = drinks.map((drink) => drink.name).join(", ");
        foods = foods.map((food) => food.name).join(", ");
        menu.innerHTML = menus({ foods, drinks });
    },

    setReview(restaurants) {
        const data = document.querySelector("#cust-review .customer-list");
        const review = restaurants.map((restaurant) => setReview(restaurant));
        data.innerHTML = review.join("");
    },

    submitReview(id) {
        const form = document.getElementById("submit_review");
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            const { reviewName, reviewText } = form.elements;
            const name = reviewName.value;
            const review = reviewText.value;
            const data = { id, name, review };

            reviewInitiator.init({ data });
        });
    }
};

export default Detail;
