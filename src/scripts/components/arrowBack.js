class arrowBack extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="flex">
        <a href="" class="arrow-back" style="padding-top: 8rem" rel="noreferrer">
        <i class="fa fa-fw fa-arrow-left"></i> <small>Back</small>
        </a>
        <div class="title">

        </div>
        </div>
        `;
    }
}

customElements.define("arrow-back", arrowBack);
