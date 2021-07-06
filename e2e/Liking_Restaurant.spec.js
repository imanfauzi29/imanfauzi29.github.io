const assert = require("assert");

Feature("Liking Restaurant");

Before(({ I }) => {
    I.amOnPage("/#/favorite");
});

// check restaurant di /#/favorite
Scenario("Showing empty liked restaurant", ({ I }) => {
    I.seeElement("#favoriteList");
    I.see("List favorite tidak tersedia", ".wrap strong");
});

Scenario("Liking one restaurant", async ({ I }) => {
    I.see("List favorite tidak tersedia", ".wrap strong");
    I.seeElement("#favoriteList");

    I.amOnPage("/");
    I.seeElement("#content");
    I.see("Explore Restaurant", "#content h1");

    I.seeElement("#content a");
    const firstRestaurant = locate("#content a").first();
    const firstRestaurantTitle = await I.grabTextFrom(".info h2.title");
    I.click(firstRestaurant);

    I.seeElement("#likeBtnContainer .icon-action");
    I.click("#likeBtnContainer .icon-action");

    I.amOnPage("/#/favorite");
    I.seeElement("#favoriteList");
    I.seeElement("#favoriteList a");
    const likedRestaurantTitle = await I.grabTextFrom("#favoriteList .card h2");

    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario("Like then Unlike One Restaurant", async ({ I }) => {
    I.see("List favorite tidak tersedia", ".wrap strong");
    I.seeElement("#favoriteList");

    I.amOnPage("/");
    I.seeElement("#content");
    I.see("Explore Restaurant", "#content h1");

    I.seeElement("#content a");
    let firstRestaurant = locate("#content a").first();
    const firstRestaurantTitle = await I.grabTextFrom(".info h2.title");
    I.click(firstRestaurant);

    I.seeElement("#likeBtnContainer .icon-action");
    I.click("#likeBtnContainer .icon-action");

    I.amOnPage("/#/favorite");
    I.seeElement("#favoriteList");
    I.seeElement("#favoriteList a");
    const likedRestaurantTitle = await I.grabTextFrom("#favoriteList .card h2");

    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

    // unlike restaurant
    firstRestaurant = locate("#favorite a").first();
    I.click(firstRestaurantTitle);

    I.seeElement("#likeBtnContainer .icon-action");
    I.click("#likeBtnContainer .icon-action");

    I.amOnPage("/#/favorite");
    I.seeElement("#favoriteList");
    I.see("List favorite tidak tersedia", ".wrap strong");
});

Scenario("Customer Review", async ({ I }) => {
    I.amOnPage("/");
    I.seeElement("#content");
    I.see("Explore Restaurant", "#content h1");

    I.seeElement("#content a");
    let firstRestaurant = locate("#content a").first();
    I.click(firstRestaurant);

    I.seeElement("#addNewReview");
    const addNewTitle = await I.grabTextFrom("#addNewReview h2");
    assert.strictEqual(addNewTitle, " Add Review ");

    I.seeElement("#submit_review");
    I.fillField("reviewName", "testing e2e");
    I.fillField("reviewText", "Lagi coba testing e2e");
    I.click("Submit", ".btn-submit");

    I.waitForElement(".swal2-modal", 1);

    I.seeElement("#swal2-title");
    I.see("Success add review", ".swal2-title");
    I.seeElement(".swal2-actions");

    I.click("OK", ".swal2-confirm");
})