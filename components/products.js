const template = document.createElement('template')

template.innerHTML=`
<!-- bootstrap -->
  
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous"> 

  <!-- font-awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
crossorigin="anonymous" referrerpolicy="no-referrer" />


<link rel="stylesheet" href="components/products.css">

          <div class=" bg-white rounded-3 position-relative item_content pb-3 pb-xl-0">
            <div class="menu_auto border-0 rounded-2">
              <abbr title="افزودن به سبدخرید">
                <a href="#">
                  <i class="fa-solid fa-cart-plus text-black"></i>
                  
                </a>
              </abbr>
              <abbr title="مشاهده سریع">
                <a href="#">
                  <i class="fab fa-searchengin text-black">
                  </i>
                </a>
              </abbr>
              <abbr title="افزودن به علاقه مندی ها">
                <a href="#">
                  <i class="far fa-heart text-black">
                  </i>
                </a>
              </abbr>
            </div>
            <div class="suggestions_img w-100 rounded-2 p-2"><a href="#" class="position-relative">

                <span class="position-absolute top-0 end-0 z-3 mt-3 px-2 badge rounded-pill bg-danger">
                  ویژه
                  <span class="visually-hidden">unread messages</span>
                </span>
                <span class="position-absolute top-0 end-0 z-3 mt-3 me-5 px-2 badge rounded-pill bg-success">
                  جدید
                  <span class="visually-hidden">unread messages</span>
                </span>
                <!--  -->
                <div id="carouselExampleIndicators" class="carousel slide w-100" data-bs-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item" data-bs-interval="3000">
                      <img src="" class="d-block w-100 img1" alt="img">
                    </div>
                    <div class="carousel-item active" data-bs-interval="3000">
                      <img src="" class="d-block w-100 img2" alt="img">
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                      <img src="" class="d-block w-100 img3" alt="img">
                    </div>
                  </div>
                </div>
                <!--  -->
              </a>
            </div>
            <div class="suggestions_txt w-100">
              <slot name="name-product" class="slot"></slot>

<slot name='type'></slot>
              
              <div class="mt-1 span_content">
                <span class="d-inline-block">کد محصول:
                </span>
                <span class="text-secondary d-inline-block">30985</span>
              </div>
                            <slot name='price-product' id="priceproduct"></slot>


            </div>


          </div>


`



class Products extends HTMLElement{
  constructor(){
    super();

    this.attachShadow({mode:"open"})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
  connectedCallback() {
 // بررسی و لود صحیح Bootstrap
 if (!window.bootstrap) {
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
  script.onload = () => {
      console.log("✅ Bootstrap loaded!");
      this.initCarousel();
  };
  document.body.appendChild(script);
} else {
  console.log("✅ Bootstrap already loaded!");
  this.initCarousel();
}

let imgSlider1 = this.shadowRoot.querySelector('.img1')
let imgSlider2 = this.shadowRoot.querySelector('.img2')
let imgSlider3 = this.shadowRoot.querySelector('.img3')
imgSlider1.src = this.getAttribute('img-slider1')
imgSlider2.src = this.getAttribute('img-slider2')
imgSlider3.src = this.getAttribute('img-slider3')





}
static observedAttributes(){
  return['img-slider1' , 'img-slider2' ,'img-slider3']
}



initCarousel() {
setTimeout(() => {
  const carouselElement = this.shadowRoot.querySelector("#carouselExampleIndicators");
  if (carouselElement) {
      new window.bootstrap.Carousel(carouselElement, {
          interval: 2000,
          ride: "carousel",
      });
      console.log("✅ Carousel initialized successfully!");
  } else {
      console.log("❌ Carousel not found inside shadowRoot!");
  }
}, 500); 

}}

export {Products}