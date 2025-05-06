const template =document.createElement('template')
template.innerHTML=`
<link rel="stylesheet" href="components/footer.css">

  <!-- bootstrap -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous"> 
  
  
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">


<footer
class="footer w-100 position-absolute start-0 border-0">
<div
  class="footer_box rounded-3 bg-white mt-4 d-flex flex-column row-gap-4 d-md-inline-grid py-0 py-md-4 ">
  <div class="right_side_footer w-100 h-100 d-flex flex-column flex-md-row justify-content-center align-items-center gap-2">
    <div class="join_jornal">
      <span>عضویت در خبرنامه
      </span>
      
    </div>
    <div class="input-group border-0">
      <input type="email" class="w-75 rounded-end-2 px-3 py-2" placeholder="آدرس ایمیل خود را وارد کنید...">
      <button class="bg-primary border-0 text-white px-2 px-sm-3 rounded-start-2">عضویت</button>
    </div>

  </div>
  <div class="left_side_footer pb-2">
    <div class="w-100 h-100 gap-1 d-flex align-items-center justify-content-center massager_content ps-2">
      <div class="icon_messager_content" style="background-color: #fd0909;">
        <i class="fab fa-youtube fs-4 d-flex justify-content-center align-items-center"></i>
      </div>
      <div class="icon_messager_content" style="background-color: #DD2A7B;">
        <i class="fab fa-instagram fs-4 d-flex justify-content-center align-items-center"></i>
      </div>
      <div class="icon_messager_content" style="background-color: #37AEE2;">
        <i class="fab fa-telegram fs-4 d-flex justify-content-center align-items-center"></i>
      </div>
      <div class="icon_messager_content" style="background-color: #1DA1F2;">
        <i class="fab fa-twitter fs-4  d-flex justify-content-center align-items-center"></i>
      </div>


    </div>
  </div>
</div>

<div class="d-flex p-0 mt-4 info_footer_box">
  <div class="address_phone p-0 w-50 d-flex me-5">
    <div class="address w-50 h-100">
      <h6>آدرس فروشگاه</h6>
      <div>
        <i class="fa-solid fa-location-dot fa-flip-horizontal" style="color: #0b5be5;"></i> <span
          class="text-secondary">تهران، خیابان
          طالقانی، خیابان موسوی، کوچه ایرانشهر، پلاک 3، ساختمان مرکزی لیون کامپیوتر (همراه با
          پارکینگ)

        </span>
        <div class="mt-2">
          <i class="fa-solid fa-signs-post" style="color: #0a64ff;"></i>
          <span class="text-secondary">کد پستی: 1583658713
          </span>
        </div>
      </div>
    </div>
    <div class="phone w-50 h-100 me-5">
      <h6>اطلاعات تماس
      </h6>
      <div style="text-wrap: nowrap;">
        <i class="fa-solid fa-phone ms-1" style="color: #1162ee;"></i><span class="text-secondary">031-3562352
        </span>
        <div class="mt-2">
          <i class="fas fa-mobile-alt ms-1" style="color: #1561e5;"></i> <span
            class="text-secondary">09132128822
          </span>
        </div>
      </div>

    </div>

  </div>

  <div class="d-flex flex-column align-items-center justify-content-center w-50 logo_footer">
    <div>
      <img class="img-fluid" src="img/logo digital.png" alt="logo ">
    </div>
    <span class="text-secondary" style="font-size: 13px;">کپی رایت – تمام حقوق این وب سایت محفوظ می باشد.
    </span>
  </div>
</div>
<div class="author_name">
  <p style="font-size: 13px; text-align: center;">ساخته شده توسط <a
      href="https://github.com/Erfan-Esmaili/Erfan-Esmaili">عرفان اسماعیلی</a>❤️</p>
</div>
</footer>


`

class Footer extends HTMLElement{
constructor(){
  super()


  this.attachShadow({mode:'open'});
  this.shadowRoot.appendChild(template.content.cloneNode(true));

}
}
export{Footer}