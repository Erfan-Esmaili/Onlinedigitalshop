const template = document.createElement("template");

template.innerHTML = ` 

<!-- bootstrap -->

        <div class="offcanvas offcanvas-start offcanvasProduct" data-bs-backdrop="true" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel" data-bs-backdrop="false">
        <div class="offcanvas-header d-flex justify-content-between align-items-center">
          <h5 class="offcanvas-title fw-bold" id="offcanvasWithBothOptionsLabel">سبد خرید</h5>
          <div class="d-flex align-items-center">
            <span type="button" class="m-0 fs-6 fw-bold" data-bs-dismiss="offcanvas" aria-label="Close">بستن</span>
            <button type="button" class="btn-close m-0 p-1" data-bs-dismiss="offcanvas" aria-label="Close">
            </button>
          </div>
        </div>
        <hr class="mt-0">
        <div class="offcanvas-body product__body pt-0">
        </div>

        <!-- pricesum -->
        <div class="d-flex justify-content-between align-items-center px-3">
          <h4 class="fw-bold">مجموع:</h4>
          <div>
            <h5 class="priceSum text-primary d-inline-block fw-bolder">0</h5>
            <h6 class="text-primary d-inline-block fw-bold">تومان</h6>
          </div>
        </div>
        <hr>
<div class="d-flex flex-column gap-2 px-3 pb-3">
  <button id="ViewCartBtn" class="w-100 btn btn-primary">مشاهده سبدخرید </button>
  <button class="w-100 btn btn-outline-primary bg-primary-subtle border-0">تسویه حساب</button>
</div>

      </div>

`;

class ProductOffcanvas extends HTMLElement {
  constructor() {
    super();
    // this.attachShadow({ mode: "open" });
    // this.shadowRoot.appendChild(template.content.cloneNode(true));
    document.body.insertAdjacentHTML('afterbegin', template.innerHTML);

    
  }

  connectedCallback() {
  }
}

export { ProductOffcanvas };
