import ApiService from "../../api/ApiService";

const listRestaurant = (item) => `
<div class="column-lg-3 column-md-4 column-sm-6 mb-2 flex" style="justify-content: center">
    <a href="#/detail/${item.id}" rel="noreferrer">
        <div class="card custom-card">
            <img
                class="lazyload"
                src="${ApiService.getRestaurantPicture("medium", item.pictureId)}"
                alt="${item.name}"
            />
            <div class="card-body">
                <div class="flex space-between">
                    <div class="info">
                        <h2 class="title">${item.name}</h2>
                        <span>${item.city}</span>
                    </div>
                    <div class="rating">
                        <small>Review</small>
                        <p>${item.rating}</p>
                    </div>
                </div>
                <div class="description">
                    ${item.description.length > 300 ? `${item.description.substr(0, 300)}...` : item.description}  
                </div>
            </div>
        </div>
    </a>
</div>`;

const buttonFavorite = (icon) => `
    <div class="wrapper_content_fav mb-5" id="btnFavorite">
            <div class="wrapper_inner flex">
                <div class="icon-action">
                    <div class="icon">
                    ${icon}
                    </div>
                </div>
            </div>
        </div>`;

const setReview = (
    restaurant
) => `<div class="column-lg-3 column-md-4 column-sm-6 mt-1 mb-1 flex" style="justify-content: center">
<div class="card">
    <h3>${restaurant.name}</h3>
    <small>${restaurant.date}</small>
    <div class="card-body" style="font-size: 14px;">
        ${restaurant.review}
    </div>
</div>
</div>`;

const titleDescription = (
    restaurants
) => `<h1 class="text-primary">${restaurants.name}</h1>
<div class="space-between flex w-100">
    <div class="ratings text-warning flex">
    <rating-star rating="${restaurants.rating}"></rating-star>
        <span class="text-dark font-bold secondary-font ml-1">${restaurants.rating}</span>
    </div>
    <div class="address">
        <small>${restaurants.address}</small>
    </div>
</div>
<hr class="mt-1 mb-1" />
<div class="description">
    <h2>Description: </h2>
    <p>${restaurants.description}</p>
</div>
<div id="menus" class="mt-2"></div>
<div class="category mt-2"></div>
`;

const detailCategory = (category) => `<h2>Category: </h2>
<div class="flex">
    <div class="category-list flex mt-1">
        ${category.join(" ")}
    </div>
</div>`;

const menus = ({ foods, drinks }) => `
<div class="row">
    <div class="column-md-6 pl-0">
        <h2>List of Food</h2>
        <p>${foods}</p>
    </div>
    <div class="column-md-6 pl-0">
        <h2>List of Drink</h2>
        <p>${drinks}</p>
    </div>
</div>
`;

const noListRestaurant = (list) => `
    <div class="container flex justify-content-center align-items-center">
        <div class="wrap">
        <picture>
            <source media="(max-width: 600px)" srcset="/images/undraw_empty_xct9-small.png">
            <img src="/images/undraw_empty_xct9-large.png" class="mx-auto" width="186px" height="186px" alt="not found">
        </picture>
            <strong>${list} tidak tersedia</strong>
        </div>
    </div>
`;

export {
    buttonFavorite,
    setReview,
    titleDescription,
    detailCategory,
    menus,
    listRestaurant,
    noListRestaurant
};
