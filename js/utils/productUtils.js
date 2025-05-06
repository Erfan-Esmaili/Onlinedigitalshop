export const getProductBody = () => document.querySelector(".product__body");
export const getPriceSum = () => document.querySelector(".priceSum");
export const getSiteHeader = () => document.querySelector("site-header");
export const getBadgeBasket = () =>
  getSiteHeader()?.shadowRoot?.querySelectorAll("#badge_basket");
export const getProductTags = () => document.querySelectorAll("site-product");
export const getOffcanvasElement = () =>
  document.querySelector(".offcanvasProduct");
export const getBsOffcanvas = () =>
  new bootstrap.Offcanvas(getOffcanvasElement());
export const getOffcanvasInstance = () =>
  bootstrap.Offcanvas.getOrCreateInstance(getOffcanvasElement());
export const getViewShoppingCart = ()=> document.querySelector('#ViewCartBtn')
export let arrayPriceProduct = [];


// !!addToBasketOffcanvas


export function addProductToBasket(
  productBody,
  priceSum,
  imgSrc,
  name,
  price,
  count = 1
) {
  let existingProduct = [
    ...productBody.querySelectorAll(".product__selected"),
  ].find((item) => {
    let productName = item.querySelector("#nameProduct").textContent.trim();
    return productName === name;
  });
  if (existingProduct) {
    // نام قبلا وجود داشته
    console.log(existingProduct);
    let numberProduct = existingProduct.querySelector(".numberproduct");
    let count = parseInt(numberProduct.textContent);
    numberProduct.textContent = count + 1;

    // اپدیت مجموع قیمت
    let priceProduct = +price.replace(/,/g, "");
    // arrayPriceProduct.push(priceProduct);
    let total = arrayPriceProduct.reduce((total, num) => total + num, 0);
    priceSum.textContent = total.toLocaleString("en-US");
  } else {
    // اگه محصول وجود نداشت اضافه کن

    productBody.insertAdjacentHTML(
      "beforeend",
      `
        <div class="product__selected">
        <div class="d-flex justify-content-between align-items-center">
        <img id="imgProduct" src="${imgSrc}" class="w-25" alt="">
        <div>
        <h5 id="nameProduct">${name}</h5>
        <span class="text-primary fw-bolder price__product" style="font-size: 18px;">${price}</span>
        <span class="d-inline-block fw-bold text-primary" style="font-size: 14px;">تومان</span>
        <div class="btn-group btn-group-sm me-3" dir="ltr" role="group">
        <button type="button" class="btn btn-outline-secondary positive">+</button>
        <button type="button" class="btn btn-primary pe-none numberproduct">${count}</button>
        <button type="button" class="btn btn-outline-secondary negative">-</button>
        </div>
        </div>
        <button class="border-0 bg-transparent">
        <i class="fa-solid fa-trash p-0 delete__product text-danger" style="font-size: small;"></i>
        </button> 
        </div>
        <hr>
        </div>
        `
    );

    let priceProduct = +price.replace(/,/g, "");
    // arrayPriceProduct.push(priceProduct);
    let total = arrayPriceProduct.reduce((total, num) => total + num, 0);
    priceSum.textContent = total.toLocaleString("en-US");
  }
}


// ?? add to basket btn & add to like & offcanvas product

export function handleProductTag(
  productTag,
  siteHeader,
  productBody,
  priceSum
){
  productTag.forEach((product) => {
    let addToBasketButtons = product.shadowRoot.querySelector(".fa-cart-plus");
    let likeProductButtons = product.shadowRoot.querySelector(".fa-heart");
    let nameText = product
      .querySelector('p[slot="name-product"]')
      .textContent.trim();
    let priceText = product.querySelector("#price").textContent.trim();
    let imgSrc = product.getAttribute("img-slider1");
    addToBasketButtons.addEventListener("click", (event) => {
      event.preventDefault();


      let showToast = false;
      let badgeBaskets =
        siteHeader.shadowRoot.querySelectorAll("#badge_basket");
      if (badgeBaskets.length > 0) {
        badgeBaskets.forEach((badge) => {
          let badgeValueBefore = Number(badge.textContent.trim()) || 0;
          let badgeValueAfter = badgeValueBefore + 1;
          badge.textContent = badgeValueAfter;

          if (badgeValueAfter > badgeValueBefore) {
            showToast = true;
          }
        });
        if (showToast) {
          iziToast.success({
            message: "کالا به سبد خرید شما اضافه شد",
            timeout: 2100,
            rtl: true,
            position: "topCenter",
            close: false,
            messageColor: "#00FF00", // متن سبز
            backgroundColor: "#333", // پس‌زمینه طوسی تیره
            progressBarColor: "#FFFFFF", // خط زیر پیام سفید
            transitionIn: "bounceInLeft",
            theme: "dark",
          });
        }
        // حالا مثل addToBasketBtn ادامه بده
        let existingProduct = [
          ...productBody.querySelectorAll(".product__selected"),
        ].find((item) => {
          let productName = item
            .querySelector("#nameProduct")
            .textContent.trim();
          return productName === nameText;
        });

        if (existingProduct) {
          let numberProductElem =
            existingProduct.querySelector(".numberproduct");
          let count = parseInt(numberProductElem.textContent);
          numberProductElem.textContent = count + 1;

          let priceNumber = +priceText.replace(/,/g, "");
          console.log(arrayPriceProduct);

          let total = arrayPriceProduct.reduce((total, num) => total + num, 0);
          priceSum.textContent = total.toLocaleString("en-US");
        } else {
          addProductToBasket(
            productBody,
            priceSum,
            imgSrc,
            nameText,
            priceText
          );
          let priceNumber = +priceText.replace(/,/g, "");

          let total = arrayPriceProduct.reduce((total, num) => total + num, 0);
          priceSum.textContent = total.toLocaleString("en-US");
        }

        getBsOffcanvas().show();
      }
      calculateSumPrice();

    });

    likeProductButtons.addEventListener("click", (event) => {
      event.preventDefault();
      let likeBadge = siteHeader.shadowRoot.querySelectorAll("#badgeLike");

      likeBadge.forEach((like) => {
        let badgeValue = Number(like.textContent.trim()) || 0;
        like.textContent = badgeValue + 1;
      });
    });
  });
}

//??removeProductFromList& count number ...plus or minus

export function handleProductBody(productBody, priceSum, badgeBasket) {
  productBody.addEventListener("click", (event) => {
    // remove btn
    if (event.target.classList.contains("delete__product")) {
      let parentElem = event.target.closest(".product__selected");
      if (!parentElem) return;
      let priceProduct = parentElem.querySelector(".price__product");
      if (!parentElem) return;
      let priceProductText = priceProduct.textContent.trim();
      let priceProductNumber = +priceProductText.replace(/,/g, "");
      console.log(priceSum);

      let priceSumText = priceSum.innerHTML.trim();
      let priceSumNumber = +priceSumText.replace(/,/g, "");
      let totalPrice = priceSumNumber - priceProductNumber;
      arrayPriceProduct = arrayPriceProduct.filter(
        (item) => item !== priceProductNumber
      );
      let total = arrayPriceProduct.reduce((total, num) => total + num, 0);
      priceSum.textContent = total.toLocaleString("en-US");
      parentElem.remove();

      badgeBasket.forEach((badge) => {
        badge.innerHTML = +productBody.childElementCount;
      });
    }

    // plus btn
    if (event.target.classList.contains("positive")) {
      let parentElem = event.target.closest(".product__selected");
      let priceProduct = parentElem.querySelector(".price__product");
      let priceProductText = priceProduct.textContent.trim();
      let priceProductNumber = +priceProductText.replace(/,/g, "");
      let numberProduct = parentElem.querySelector(".numberproduct");
      let typeNumber = parseInt(numberProduct.textContent);
      let count = (numberProduct.textContent = typeNumber + 1);
      // arrayPriceProduct.push(priceProductNumber);
      // let total = arrayPriceProduct.reduce((total, num) => total + num, 0);
      // priceSum.textContent = total.toLocaleString("en-US");

      calculateSumPrice();
    }
    // minus btn
    if (event.target.classList.contains("negative")) {
      let parentElem = event.target.closest(".product__selected");
      let numberProduct = parentElem.querySelector(".numberproduct");
      let priceProduct = parentElem.querySelector(".price__product");
      let priceProductText = priceProduct.textContent.trim();
      let priceProductNumber = +priceProductText.replace(/,/g, "");

      let count = parseInt(numberProduct.textContent);
      if (count > 1) {
        numberProduct.textContent = count - 1;

        arrayPriceProduct.pop(priceProductNumber);
        let total = arrayPriceProduct.reduce((total, num) => total + num, 0);
        priceSum.textContent = total.toLocaleString("en-US");
      }
    }
  });
}

// calculateSumPrice

export function calculateSumPrice() {
  let allPriceProduct = getProductBody().querySelectorAll(".price__product");
  if (allPriceProduct.length === 0) {
    getPriceSum().textContent = "0";
    arrayPriceProduct = []; 
    return
  }
  
  let lastPriceElement = allPriceProduct[allPriceProduct.length - 1];

  
  let priceText = lastPriceElement.innerHTML.trim();
  let priceNumber = +priceText.replace(/,/g, "");
  arrayPriceProduct.push(priceNumber);
  let sum = arrayPriceProduct.reduce((total, num) => total + num, 0);
  console.log(arrayPriceProduct);

  getPriceSum().textContent = sum.toLocaleString("en-US");
}

//?? viewShoppingCart & send product to basketpage
 
export function handleViewCartButton() {
  getViewShoppingCart().addEventListener('click' ,()=>{
    
    let allProducts = getProductBody().querySelectorAll('.product__selected')
    let productObject=[]

      allProducts.forEach((item)=>{
        let img = item.querySelector('img').src
        let name = item.querySelector('#nameProduct').innerHTML
        let price = item.querySelector('.price__product').innerHTML
        let countProduct = item.querySelector('.numberproduct').innerHTML
        
        productObject.push({img:img,
          name:name,
          price:price,
          count:countProduct,
       totalPrice: getPriceSum().innerHTML})
      })


      localStorage.setItem('basket' , JSON.stringify(productObject))
        console.log(productObject);
        
        
        
        setTimeout(() => {
          window.location.href="basketpage.html"
        }, 300);
        
      })
  
  
}
