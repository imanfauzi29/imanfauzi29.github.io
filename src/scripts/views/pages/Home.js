import ApiService from "../../api/ApiService";
import { alertError } from "../../utils/alerts";
import { listLoading } from "../templates/skeletonLoading";
import { listRestaurant } from "../templates/templates";

const Home = {
    async render() {
        return `<div class="jumbotron">
                <div class="text-jumbotron">
                    <div>
                        <p>Welcome To Our Restaurant</p>
                        <span class="uppercase">the best food composition</span>
                    </div>
                </div>
            </div>

            <div class="mt-3" id="content">
                <h1 class="title text-center mb-2">Explore Restaurant</h1>
                <nav-bar onscroll="setScrollFromTop"></nav-bar>
                <div id="explore-restaurant" class="row"  style="justify-content: center">
                </div>
            </div>`;
    },

    async afterRender() {
        const exploreRestaurant = document.getElementById("explore-restaurant");
        exploreRestaurant.classList.add("skeleton-effect-wave");
        exploreRestaurant.innerHTML = listLoading();
        const getListRestaurant = await ApiService.getListRestaurant()
            .then((res) => res.data)
            .catch((e) => alertError(e.message));

        if (!getListRestaurant.error) {
            const html = getListRestaurant.restaurants.map(
                (item) => listRestaurant(item)
            );
            exploreRestaurant.innerHTML = html.join("");
        }
        exploreRestaurant.classList.remove("skeleton-effect-wave");
    }
};

export default Home;
