import ApiService from "../api/ApiService";
import { setReview } from "../views/templates/templates";
import { alertError, alertSuccess } from "./alerts";

const reviewInitiator = {
    init({ data }) {
        this._data = data;

        this._addReview();
    },

    async _addReview() {
        await ApiService.addReview(this._data).then((res) => {
            if (res.status !== 200) return alertError(res.message);

            alertSuccess({
                title: "Success add review",
                message: "Review success added!"
            });
            this._renderReview(res.data.customerReviews);
            return true;
        });
    },

    _renderReview(data) {
        const listReview = document.querySelector(
            "#cust-review .customer-list"
        );
        const reviews = data.map((review) => setReview(review));
        listReview.innerHTML = reviews.join("");

        const form = document.getElementById("submit_review");
        form.reset();
    }
};

export default reviewInitiator;
