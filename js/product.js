import { Header } from "../components/header.js";
import { Footer } from "../components/footer.js";
import { Products } from "../components/products.js";
import { ProductOffcanvas } from "../components/productoffcanvas.js";
import * as utils from "../js/utils/productUtils.js";

window.customElements.define("site-header", Header);
window.customElements.define("site-footer", Footer);
window.customElements.define("site-product", Products);
window.customElements.define("product-offcanvas", ProductOffcanvas);

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 7,
  spaceBetween: 30,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    630: {
      slidesPerView: 3,
    },
    885: {
      slidesPerView: 4,
    },
    1089: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 7,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 1200, // زمان به میلی‌ثانیه، در اینجا 2000 میلی‌ثانیه = 2 ثانیه
    disableOnInteraction: false, // ادامه پخش خودکار حتی پس از تعامل
  },
});

let $ = document;
let sliderOne = $.querySelectorAll("#slider-1");
let sliderTwo = $.querySelectorAll("#slider-2");
let displayValOne = $.querySelectorAll("#range1");
let displayValTwo = $.querySelectorAll("#range2");
let minGap = 0;
let sliderTrack = $.querySelectorAll(".slider-track");
let sliderMaxValue = $.querySelector("#slider-1").max;
let items = $.querySelectorAll("#item");
let mySelect = $.querySelectorAll("#mySelect");
let selectedOption = $.querySelectorAll("#selectedOption");
let ListLayout = $.querySelector(".list");
let smallGridLayout = $.querySelector(".fa-th");
let largeGridLayout = $.querySelector(".fa-th-large");
let productsContent = $.querySelector(".products__content");
let productTag = $.querySelectorAll("site-product");
let displayIcnos = $.querySelectorAll(".fas");
let filterBtn = $.querySelectorAll("#filterBtn");
let cancelFilterBtn = $.querySelectorAll("#canselFilterBtn");
let notFoundePage = $.querySelector(".notFoundePage");
let loading = $.querySelector(".spinner-border");

const siteProduct = $.querySelectorAll("site-product");
let imgProductOffcanvas = $.querySelector("#imgProduct");
let nameProductOffcanvas = $.querySelector("#nameProduct");
let priceProductOffcanvas = $.querySelector("#priceProduct");
let productBody = $.querySelector(".product__body");
let num1Value = null;
let num2Value = null;
let displayRangeOne = null;
let displayRangeTow = null;
let globalSlidTwo = [];
let globalSlidOne = [];

window.addEventListener("DOMContentLoaded", () => {
  function rangeOne(one) {
    let maxSlidTwo = Math.min(
      ...globalSlidTwo.map((slider) => parseInt(slider.value))
    );
    if (parseInt(maxSlidTwo) - parseInt(one.value) <= minGap) {
      one.value = parseInt(maxSlidTwo) - minGap;
    }
    displayRangeOne = Number(one.value).toLocaleString("en-US"); // ✅ مقدار را مستقیم تنظیم کردیم

    displayValOne.forEach((display1) => {
      display1.textContent = displayRangeOne;
    });

    fillColor();
  }

  sliderOne.forEach((one) => {
    globalSlidOne.push(one);
    one.addEventListener("input", () => rangeOne(one));
  });

  // rangeTwo

  function rangeTwo(two) {
    let maxSlidOne = Math.max(
      ...globalSlidOne.map((slider) => parseInt(slider.value))
    );

    if (parseInt(two.value) - parseInt(maxSlidOne) <= minGap) {
      two.value = parseInt(maxSlidOne) + minGap;
    }
    displayRangeTow = Number(two.value).toLocaleString("en-US");
    displayValTwo.forEach((display) => {
      display.textContent = displayRangeTow;
    });

    fillColor();
  }

  sliderTwo.forEach((two) => {
    globalSlidTwo.push(two);
    two.addEventListener("input", () => rangeTwo(two)); // اینجا تابع را فراخوانی کردیم
  });

  function fillColor() {
    let maxSlidOne = Math.max(
      ...globalSlidOne.map((slider) => parseInt(slider.value))
    );

    let maxSlidTwo = Math.min(
      ...globalSlidTwo.map((slider) => parseInt(slider.value))
    );

    let percent1 = (maxSlidOne / sliderMaxValue) * 100;
    let percent2 = (maxSlidTwo / sliderMaxValue) * 100;
    sliderTrack.forEach((slider) => {
      slider.style.backgroundImage = `linear-gradient(to left, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
    });
  }

  // filter
  items.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("rotated");
    });
  });

  mySelect.forEach((select) => {
    select.addEventListener("change", function () {
      let selectedItem = this.options[this.selectedIndex].text;

      if (this.value) {
        let liElem = document.createElement("li");
        liElem.innerHTML = selectedItem;
        let selectedList = this.parentElement.querySelector("#selectedOption");
        selectedList.appendChild(liElem);
        console.log(selectedList);
      }
      select.selectedIndex = 0;
    });
  });

  // چیدمان به صورت لیستی

  const selectListLayout = () => {
    productsContent.classList.remove("large__grid");
    productsContent.classList.remove("small__grid");
    productsContent.classList.add("list");
    productTag.forEach((product) => {
      let itemContent = product.shadowRoot.querySelector(".item_content");
      let suggestionsTxt = product.shadowRoot.querySelector(".suggestions_txt");
      let priceSlot = product.shadowRoot.querySelector(
        'slot[name="price-product"]'
      );

      itemContent.style.cssText =
        "display : flex;justify-content: center;align-items: center;";
      suggestionsTxt.style.cssText = "font-size:30px ; row-gap:1rem;";

      if (priceSlot) {
        // گرفتن عناصر واقعی داخل `slot`
        const assignedElements = priceSlot.assignedElements();

        assignedElements.forEach((element) => {
          // بررسی می‌کنیم که آیا `p` مستقیم داخل `slot` است یا داخل یک تگ دیگر
          let priceTag =
            element.tagName === "P" ? element : element.querySelector("p");

          if (priceTag) {
            priceTag.style.cssText = "font-size:26px ;font-weight: bold;"; // تغییر اندازه فونت
          }
        });
      }
    });
  };
  ListLayout.addEventListener("click", selectListLayout);

  const selectSmallGrid = () => {
    productTag.forEach((product) => {
      let itemContent = product.shadowRoot.querySelector(".item_content");
      let suggestionsTxt = product.shadowRoot.querySelector(".suggestions_txt");
      let priceSlot = product.shadowRoot.querySelector(
        'slot[name="price-product"]'
      );

      itemContent.style.cssText = "display : block";
      suggestionsTxt.style.cssText = "font-size:20px;";

      if (priceSlot) {
        // گرفتن عناصر واقعی داخل `slot`
        const assignedElements = priceSlot.assignedElements();

        assignedElements.forEach((element) => {
          // بررسی می‌کنیم که آیا `p` مستقیم داخل `slot` است یا داخل یک تگ دیگر
          let priceTag =
            element.tagName === "P" ? element : element.querySelector("p");

          if (priceTag) {
            priceTag.style.cssText = "font-size:17px;"; // تغییر اندازه فونت
          }
        });
      }
    });
    productsContent.classList.remove("list");
    productsContent.classList.remove("large__grid");
    productsContent.classList.add("small__grid");
  };
  smallGridLayout.addEventListener("click", selectSmallGrid);

  const selectLargeGrid = () => {
    productsContent.classList.remove("list");
    productsContent.classList.remove("small__grid");
    productsContent.classList.add("large__grid");
    productTag.forEach((product) => {
      let itemContent = product.shadowRoot.querySelector(".item_content");
      let suggestionsTxt = product.shadowRoot.querySelector(".suggestions_txt");
      let priceSlot = product.shadowRoot.querySelector(
        'slot[name="price-product"]'
      );

      itemContent.style.cssText = "display : block";
      suggestionsTxt.style.cssText = "font-size:22px;";

      if (priceSlot) {
        // گرفتن عناصر واقعی داخل `slot`
        const assignedElements = priceSlot.assignedElements();

        assignedElements.forEach((element) => {
          // بررسی می‌کنیم که آیا `p` مستقیم داخل `slot` است یا داخل یک تگ دیگر
          let priceTag =
            element.tagName === "P" ? element : element.querySelector("p");

          if (priceTag) {
            priceTag.style.cssText = "font-size:20px;"; // تغییر اندازه فونت
          }
        });
      }
    });
  };
  largeGridLayout.addEventListener("click", selectLargeGrid);

  // هر ایکونی که روش کلیک میشه رنگ active رو بگیره
  displayIcnos.forEach((icon) => {
    icon.addEventListener("click", () => {
      displayIcnos.forEach((icon) => {
        icon.classList.remove("active");
      });
      icon.classList.add("active");
    });
  });

  // add to basket
  const productBody = utils.getProductBody();
  const priceSum = utils.getPriceSum();
  const siteHeader = utils.getSiteHeader();
  const badgeBasket = utils.getBadgeBasket();
  const productTag = utils.getProductTags();


  utils.handleProductTag(
    productTag,
    siteHeader,
    productBody,
    priceSum,
    badgeBasket
  );
  utils.handleProductBody(productBody, priceSum, badgeBasket);

//?? viewShoppingCart & send product to basketpage

  utils.handleViewCartButton();

  // اعمال فیلتر
  let allPrices = [];

  const clickFilter = () => {

    if(loading){
      loading.style.cssText = 'display: block; z-index: 999;';
    }    
    setTimeout(() => {
      loading.style.cssText = 'display: none; z-index:-1;';
    }, 1000);

    sliderOne.forEach((one) => {
      one.addEventListener("input", () => rangeOne(one));
    });
    sliderTwo.forEach((two) => {
      two.addEventListener("input", () => rangeTwo(two));
    });
    let num1 =
      Math.max(
        ...globalSlidOne.map((slider) => Number(slider.value.replace(/,/g, "")))
      ) || 0;
    let num2 =
      Math.min(
        ...globalSlidTwo.map((slider) => Number(slider.value.replace(/,/g, "")))
      ) || 20000000;

    productTag.forEach((product) => {
      let priceSlot = product.shadowRoot.querySelector("#priceproduct");
      const assignedElements = priceSlot.assignedElements();

      assignedElements.forEach((element) => {
        let priceProduct = element.querySelector("p").innerHTML;
        allPrices.push({
          product: product,
          price: priceProduct,
        });
      });
    });

    let filteredPrices = allPrices.filter((item) => {
      let numericPrice = Number(item.price.replace(/,/g, ""));
      return numericPrice >= num1 && numericPrice <= num2;
    });

    
    allPrices.forEach((item) => {
      item.product.style.display = "none";
    });
    if (filteredPrices.length === 0) {
      notFoundePage.classList.remove("d-none");
      notFoundePage.classList.add("d-block");
    } else {
      notFoundePage.classList.remove("d-block");
      notFoundePage.classList.add("d-none");
      filteredPrices.forEach((item) => {
        item.product.style.cssText = "display : block";
      });
    }
    //close offcanvas
    let bootstrapOffcanvas = $.querySelector(".bsoffcanvas");
    if (bootstrapOffcanvas.classList.contains("show")) {
      let offcanvasInstance =
        bootstrap.Offcanvas.getInstance(bootstrapOffcanvas);
      offcanvasInstance.hide(); // بستن استاندارد با Bootstrap
    }
  };

  filterBtn.forEach((btn) => {
    btn.addEventListener('click' , ()=>{
        clickFilter() 
    })
  });
  cancelFilterBtn.forEach((cansel) => {
    cansel.addEventListener("click", () => {
      productTag.forEach((product) => {
        console.log(product);
        product.style.display = "block";
        notFoundePage.classList.remove("d-block");
        notFoundePage.classList.add("d-none");
      });
      selectedOption.forEach((item) => {
        while (item.firstChild) {
          item.removeChild(item.firstChild); // حذف همه liElem ها از ul
        }
      });
      //close offcanvas
      let bootstrapOffcanvas = $.querySelector(".bsoffcanvas");
      if (bootstrapOffcanvas.classList.contains("show")) {
        let offcanvasInstance =
          bootstrap.Offcanvas.getInstance(bootstrapOffcanvas);
        offcanvasInstance.hide(); // بستن استاندارد با Bootstrap
      }
    });
  });

  // click to product and show it to one page

  siteProduct.forEach((product) => {
    let imgContentProduct = product.shadowRoot.querySelector(".carousel-inner");
    imgContentProduct.addEventListener("click", () => {
      const img1 = product.getAttribute("img-slider1");
      const img2 = product.getAttribute("img-slider2");
      const img3 = product.getAttribute("img-slider3");
      const nameProduct = product
        .querySelector('p[slot="name-product"]')
        .textContent.trim();
      const price = product.querySelector("#price").textContent.trim();

      let productData = {
        img1,
        img2,
        img3,
        nameProduct,
        price,
      };
      localStorage.setItem("product", JSON.stringify(productData));
      console.log(productData);
      window.location.href = "selectProduct.html";
    });
  });
});
