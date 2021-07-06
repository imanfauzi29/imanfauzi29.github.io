import "skeleton-elements/skeleton-elements.css";

const listLoading = () => `
        <div class="column-lg-3 column-md-4 column-sm-6 mb-2 flex" style="justify-content: center">
            <span class="skeleton-block" style="border-radius: 10px;height: 452px; width:300px"></span>
        </div>
        <div class="column-lg-3 column-md-4 column-sm-6 mb-2 flex" style="justify-content: center">
            <span class="skeleton-block" style="border-radius: 10px;height: 452px; width:300px"></span>
        </div>
        <div class="column-lg-3 column-md-4 column-sm-6 mb-2 flex" style="justify-content: center">
            <span class="skeleton-block" style="border-radius: 10px;height: 452px; width:300px"></span>
        </div>
        <div class="column-lg-3 column-md-4 column-sm-6 mb-2 flex" style="justify-content: center">
            <span class="skeleton-block" style="border-radius: 10px;height: 452px; width:300px"></span>
        </div>
        <div class="column-lg-3 column-md-4 column-sm-6 mb-2 flex" style="justify-content: center">
            <span class="skeleton-block" style="border-radius: 10px;height: 452px; width:300px"></span>
        </div>
        <div class="column-lg-3 column-md-4 column-sm-6 mb-2 flex" style="justify-content: center">
            <span class="skeleton-block" style="border-radius: 10px;height: 452px; width:300px"></span>
        </div>
        <div class="column-lg-3 column-md-4 column-sm-6 mb-2 flex" style="justify-content: center">
            <span class="skeleton-block" style="border-radius: 10px;height: 452px; width:300px"></span>
        </div>
        <div class="column-lg-3 column-md-4 column-sm-6 mb-2 flex" style="justify-content: center">
            <span class="skeleton-block" style="border-radius: 10px;height: 452px; width:300px"></span>
        </div>
`;

const titleDescriptionLoading = () => `
    <div class="row" id="dataRestaurant">
        <div class="column-md-4 relative" id="image-left">
            <div class="skeleton-block img-left" style="height: 520px; width: 381px; border-radius: 10px"></div>
        </div>
        <div class="column-md-8" id="data-right">
            <h1 class="skeleton-text text-primary">restaurant name</h1>
            <div class="space-between flex w-100">
                <div class="ratings text-warning flex">
                    <span class="skeleton-text text-dark font-bold secondary-font ml-1">4.5</span>
                </div>
                <div class="address">
                    <small class="skeleton-text">address of restaurant</small>
                </div>
            </div>
            <hr class="mt-1 mb-1" />
            <div class="description">
                <h3 class="skeleton-text">Description: </h3>
                <p class="skeleton-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div id="menus" class="mt-2">
                <div class="row">
                    <div class="column-md-6 pl-0">
                        <h3 class="skeleton-text">List of Food</h3>
                        <p class="skeleton-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                    </div>
                    <div class="column-md-6 pl-0">
                        <h3 class="skeleton-text">List of Drink</h3>
                        <p class="skeleton-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                    </div>
                </div>
            </div>
            <div class="category mt-2">
                <h3 class="skeleton-text">Category: </h3>
                <div class="flex">
                    <div class="category-list flex mt-1">
                        <p class="skeleton-block" style="width: 100px;height:30px;border-radius:50px"></p>
                        <p class="skeleton-block ml-1" style="width: 100px;height:30px;border-radius:50px"></p>
                        <p class="skeleton-block ml-1" style="width: 100px;height:30px;border-radius:50px"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

const setReviewLoading = () => `
<div class="column-lg-3 column-md-4 column-sm-6 mt-1 mb-1 flex" style="justify-content: center">
    <div class="card">
        <h4 class="skeleton-text">customer name</h4>
        <small class="skeleton-text">23 juni 2000</small>
        <div class="card-body skeleton-text" style="font-size: 14px;">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </div>
    </div>
</div>
<div class="column-lg-3 column-md-4 column-sm-6 mt-1 mb-1 flex" style="justify-content: center">
    <div class="card">
        <h4 class="skeleton-text">customer name</h4>
        <small class="skeleton-text">23 juni 2000</small>
        <div class="card-body skeleton-text" style="font-size: 14px;">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </div>
    </div>
</div>
<div class="column-lg-3 column-md-4 column-sm-6 mt-1 mb-1 flex" style="justify-content: center">
    <div class="card">
        <h4 class="skeleton-text">customer name</h4>
        <small class="skeleton-text">23 juni 2000</small>
        <div class="card-body skeleton-text" style="font-size: 14px;">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </div>
    </div>
</div>
<div class="column-lg-3 column-md-4 column-sm-6 mt-1 mb-1 flex" style="justify-content: center">
    <div class="card">
        <h4 class="skeleton-text">customer name</h4>
        <small class="skeleton-text">23 juni 2000</small>
        <div class="card-body skeleton-text" style="font-size: 14px;">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </div>
    </div>
</div>
    `;

export { titleDescriptionLoading, setReviewLoading, listLoading };
