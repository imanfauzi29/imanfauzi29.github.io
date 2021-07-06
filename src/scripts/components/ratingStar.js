const template = document.createElement("template");
template.innerHTML = `
<div class="rating-stars">
    <i class="rating-star far fa-fw fa-star"></i>
    <i class="rating-star far fa-fw fa-star"></i>
    <i class="rating-star far fa-fw fa-star"></i>
    <i class="rating-star far fa-fw fa-star"></i>
    <i class="rating-star far fa-fw fa-star"></i>
</div>
`;

class ratingStar extends HTMLElement {
    constructor() {
        super();
        this.appendChild(template.content);
        const star = [...this.getElementsByClassName("rating-star")];
        this.ratings(star);
    }

    get rating() {
        return this.getAttribute("rating");
    }

    ratings(stars) {
        const active = "rating-star fa fa-fw fa-star";
        const inactive = "rating-star far fa-fw fa-star";
        let rating = Math.round(this.rating / 2) - 1;

        // eslint-disable-next-line array-callback-return
        stars.map((item) => {
            if (item.className === inactive) {
                for (rating; rating >= 0; --rating) {
                    // eslint-disable-next-line no-param-reassign
                    stars[rating].className = active;
                }
            }
        });
    }
}

customElements.define("rating-star", ratingStar);
