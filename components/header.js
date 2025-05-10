const template = document.createElement("template");
template.innerHTML = ` 


  <!-- bootstrap -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous"> 


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
crossorigin="anonymous" referrerpolicy="no-referrer" />

<link rel="stylesheet" href="components/header.css">
  

<!-- col menu -->

    
  <div id="col_menu" class="col-lg-1 p-0 position-fixed h-100 d-none d-lg-flex flex-lg-column align-items-lg-center">
    <div class="menu position-absolute z-3">
      <div class="menu_3_line">
        <div class="menu_3_line_content overflow-hidden">
          <h6 class="text-white m-0 d-flex justify-content-center align-items-center w-100 h-100 d-none">همه دسته
            بندی ها</h6>
        </div>
      </div>

      <nav class="menu_content overflow-hidden">
        <ul class="menu_box p-0">
          <li class="item_menu">
            <a href="#">
              <?xml version="1.0" encoding="UTF-8"?> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M4 3C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3H4ZM4 5H20V16H4V5Z"
                  fill="black"></path>
                <path
                  d="M1 19C0.447715 19 0 19.4477 0 20C0 20.5523 0.447715 21 1 21H23C23.5523 21 24 20.5523 24 20C24 19.4477 23.5523 19 23 19H1Z"
                  fill="black"></path>
              </svg>
              <span>لپتاپ و تبلت</span>
            </a>
            <i class="fa-solid fa-chevron-left fa-xs"></i>

            <!-- submenu -->
            <div class="subMenu_content">
              <div class="subMenu_ul_content w-100">
                <ul class="ul_box d-flex align-items-start justify-content-center px-3 py-2">
                  <li><a href="product.html">لپتاپ ها</a></li>
                  <li><a href="product.html">اپل مک بوک</a></li>
                  <li><a href="product.html">اپل تجاری</a></li>
                  <li><a href="product.html">اولترا بوک</a></li>
                  <li><a href="product.html">لپتاپ گیمینگ</a></li>
                </ul>
                <hr class="w-75 mx-auto my-0 text-secondary">
              </div>
              <div class="subMenu_ul_content w-100">
                <ul class="ul_box d-flex align-items-start justify-content-center px-3 py-2">
                  <li><a href="product.html">تبلت ها</a></li>
                  <li><a href="product.html">ای پد اپل</a></li>
                  <li><a href="product.html">تبلت های اندروید</a></li>
                  <li><a href="product.html">تبلت های ویندوز</a></li>
                  <li><a href="product.html">تبلت های گیمینگ</a></li>
                </ul>
                <hr class="w-75 mx-auto my-0 text-secondary">
              </div>
              <div class="subMenu_ul_content w-100">
                <ul class="ul_box d-flex align-items-start justify-content-center px-3 py-2">
                  <li><a href="product.html">کامپیوتر ها</a></li>
                  <li><a href="product.html">سیستم های گیمینگ</a></li>
                  <li><a href="product.html">سیستم های اداری</a></li>
                  <li><a href="product.html">سیستم های دانشجویی</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li class="item_menu">
            <a href="product.html">
              <?xml version="1.0" encoding="UTF-8"?> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24"
                viewBox="0 0 25 24" fill="none">
                <path
                  d="M13.6665 6C13.6665 5.44772 13.2188 5 12.6665 5C12.1142 5 11.6665 5.44772 11.6665 6V8C11.6665 8.55228 12.1142 9 12.6665 9C13.2188 9 13.6665 8.55228 13.6665 8V6Z"
                  fill="black"></path>
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M12.6665 1C8.80051 1 5.6665 4.13401 5.6665 8V16C5.6665 19.866 8.80051 23 12.6665 23C16.5325 23 19.6665 19.866 19.6665 16V8C19.6665 4.13401 16.5325 1 12.6665 1ZM7.6665 8C7.6665 5.23858 9.90508 3 12.6665 3C15.4279 3 17.6665 5.23858 17.6665 8V16C17.6665 18.7614 15.4279 21 12.6665 21C9.90508 21 7.6665 18.7614 7.6665 16V8Z"
                  fill="black"></path>
              </svg>
              <span>کامپیوتر و تجهیزات اداری</span>
            </a>

            <i class="fa-solid fa-chevron-left fa-xs"></i>

            <!-- submenu -->
            <div class="subMenu_content">
              <div class="subMenu_ul_content w-100">
                <ul class="ul_box d-flex align-items-start justify-content-center px-3 py-2">
                  <li><a href="product.html">مانیتور ها</a></li>
                  <li><a href="product.html">مانیتور 2K</a></li>
                  <li><a href="product.html">مانیتور 4K</a></li>
                  <li><a href="product.html">مانیتور خمیده</a></li>
                  <li><a href="product.html">مانیتور گیم</a></li>
                </ul>
                <hr class="w-75 mx-auto my-0 text-secondary">
              </div>
              <div class="subMenu_ul_content w-100">
                <ul class="ul_box d-flex align-items-start justify-content-center px-3 py-2">
                  <li><a href="product.html">پرینتر و اسکنر</a></li>
                  <li><a href="product.html">پرینتر کنن</a></li>
                  <li><a href="product.html">اسکنر سه بعدی</a></li>
                  <li><a href="product.html">پرینتر لیزری</a></li>
                  <li><a href="product.html">اسکنر</a></li>
                </ul>
                <hr class="w-75 mx-auto my-0 text-secondary">
              </div>
              <div class="subMenu_ul_content w-100">
                <ul class="ul_box d-flex align-items-start justify-content-center px-3 py-2">
                  <li><a href="product.html">لوازم جانبی کامپیوتر</a></li>
                  <li><a href="product.html">موس</a></li>
                  <li><a href="product.html">کیس</a></li>
                  <li><a href="product.html">کیبورد</a></li>
                </ul>
              </div>
            </div>

          </li>
          <li class="item_menu">
            <a href="product.html">
              <?xml version="1.0" encoding="UTF-8"?> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24"
                viewBox="0 0 25 24" fill="none">
                <path
                  d="M9.3335 2C9.3335 1.44772 8.88578 1 8.3335 1C7.78121 1 7.3335 1.44772 7.3335 2V3C7.3335 3.55228 7.78121 4 8.3335 4C8.88578 4 9.3335 3.55228 9.3335 3V2Z"
                  fill="black"></path>
                <path
                  d="M13.3335 2C13.3335 1.44772 12.8858 1 12.3335 1C11.7812 1 11.3335 1.44772 11.3335 2V3C11.3335 3.55228 11.7812 4 12.3335 4C12.8858 4 13.3335 3.55228 13.3335 3V2Z"
                  fill="black"></path>
                <path
                  d="M17.3335 2C17.3335 1.44772 16.8858 1 16.3335 1C15.7812 1 15.3335 1.44772 15.3335 2V3C15.3335 3.55228 15.7812 4 16.3335 4C16.8858 4 17.3335 3.55228 17.3335 3V2Z"
                  fill="black"></path>
                <path
                  d="M2.3335 7C1.78121 7 1.3335 7.44772 1.3335 8C1.3335 8.55228 1.78121 9 2.3335 9H3.3335C3.88578 9 4.3335 8.55228 4.3335 8C4.3335 7.44772 3.88578 7 3.3335 7H2.3335Z"
                  fill="black"></path>
                <path
                  d="M21.3335 7C20.7812 7 20.3335 7.44772 20.3335 8C20.3335 8.55228 20.7812 9 21.3335 9H22.3335C22.8858 9 23.3335 8.55228 23.3335 8C23.3335 7.44772 22.8858 7 22.3335 7H21.3335Z"
                  fill="black"></path>
                <path
                  d="M2.3335 11C1.78121 11 1.3335 11.4477 1.3335 12C1.3335 12.5523 1.78121 13 2.3335 13H3.3335C3.88578 13 4.3335 12.5523 4.3335 12C4.3335 11.4477 3.88578 11 3.3335 11H2.3335Z"
                  fill="black"></path>
                <path
                  d="M21.3335 11C20.7812 11 20.3335 11.4477 20.3335 12C20.3335 12.5523 20.7812 13 21.3335 13H22.3335C22.8858 13 23.3335 12.5523 23.3335 12C23.3335 11.4477 22.8858 11 22.3335 11H21.3335Z"
                  fill="black"></path>
                <path
                  d="M2.3335 15C1.78121 15 1.3335 15.4477 1.3335 16C1.3335 16.5523 1.78121 17 2.3335 17H3.3335C3.88578 17 4.3335 16.5523 4.3335 16C4.3335 15.4477 3.88578 15 3.3335 15H2.3335Z"
                  fill="black"></path>
                <path
                  d="M21.3335 15C20.7812 15 20.3335 15.4477 20.3335 16C20.3335 16.5523 20.7812 17 21.3335 17H22.3335C22.8858 17 23.3335 16.5523 23.3335 16C23.3335 15.4477 22.8858 15 22.3335 15H21.3335Z"
                  fill="black"></path>
                <path
                  d="M9.3335 21C9.3335 20.4477 8.88578 20 8.3335 20C7.78121 20 7.3335 20.4477 7.3335 21V22C7.3335 22.5523 7.78121 23 8.3335 23C8.88578 23 9.3335 22.5523 9.3335 22V21Z"
                  fill="black"></path>
                <path
                  d="M13.3335 21C13.3335 20.4477 12.8858 20 12.3335 20C11.7812 20 11.3335 20.4477 11.3335 21V22C11.3335 22.5523 11.7812 23 12.3335 23C12.8858 23 13.3335 22.5523 13.3335 22V21Z"
                  fill="black"></path>
                <path
                  d="M17.3335 21C17.3335 20.4477 16.8858 20 16.3335 20C15.7812 20 15.3335 20.4477 15.3335 21V22C15.3335 22.5523 15.7812 23 16.3335 23C16.8858 23 17.3335 22.5523 17.3335 22V21Z"
                  fill="black"></path>
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M7.3335 5C6.22893 5 5.3335 5.89543 5.3335 7V17C5.3335 18.1046 6.22893 19 7.3335 19H17.3335C18.4381 19 19.3335 18.1046 19.3335 17V7C19.3335 5.89543 18.4381 5 17.3335 5H7.3335ZM7.3335 7H17.3335V17H7.3335V7Z"
                  fill="black"></path>
              </svg>
              <span>سخت افزار و تجهیزات شبکه</span>
            </a>

            <i class="fa-solid fa-chevron-left fa-xs"></i>

            </a>


            <!-- submenu -->
            <div class="subMenu_content">
              <div class="subMenu_ul_content w-100">
                <ul class="ul_box d-flex align-items-start justify-content-center px-3 py-2">
                  <li><a href="product.html">سخت افزار کامپیوتر</a></li>
                  <li><a href="product.html">کیس</a></li>
                  <li><a href="product.html">رم</a></li>
                  <li><a href="product.html">مادربورد</a></li>
                  <li><a href="product.html">مانیتور</a></li>
                </ul>
                <hr class="w-75 mx-auto my-0 text-secondary">
              </div>
              <div class="subMenu_ul_content w-100">
                <ul class="ul_box d-flex align-items-start justify-content-center px-3 py-2">
                  <li><a href="product.html">خنک کننده و فن</a></li>
                  <li><a href="product.html">فن سه بعدی</a></li>
                  <li><a href="product.html">خنک کننده برقی</a></li>
                  <li><a href="product.html">CPU FAN</a></li>
                  <li><a href="product.html">فن</a></li>
                </ul>
                <hr class="w-75 mx-auto my-0 text-secondary">
              </div>
              <div class="subMenu_ul_content w-100">
                <ul class="ul_box d-flex align-items-start justify-content-center px-3 py-2">
                  <li><a href="product.html">سایر سخت افزارها</a></li>
                  <li><a href="product.html">CABLE</a></li>
                  <li><a href="product.html">FAN</a></li>
                  <li><a href="product.html">MOUSE</a></li>
                </ul>
              </div>
            </div>


          </li>
          <li class="item_menu">
            <a href="product.html">
              <?xml version="1.0" encoding="UTF-8"?> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none">
                <path
                  d="M10.5 19C10.5 18.4477 10.9477 18 11.5 18H12.5C13.0523 18 13.5 18.4477 13.5 19C13.5 19.5523 13.0523 20 12.5 20H11.5C10.9477 20 10.5 19.5523 10.5 19Z"
                  fill="black"></path>
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M5 3C5 1.89543 5.89543 1 7 1H17C18.1046 1 19 1.89543 19 3V21C19 22.1046 18.1046 23 17 23H7C5.89543 23 5 22.1046 5 21V3ZM17 3L7 3V21H17V3Z"
                  fill="black"></path>
              </svg>
              <span>گوشی هوشمند</span>
            </a>


            </a>
          </li>
          <li class="item_menu">
            <a href="product.html">
              <?xml version="1.0" encoding="UTF-8"?> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none">
                <path
                  d="M6.99991 7.00002C7.55219 7.00002 7.99991 7.44774 7.99991 8.00002V9.00002H8.99991C9.55219 9.00002 9.99991 9.44774 9.99991 10C9.99991 10.5523 9.55219 11 8.99991 11H7.99991V12C7.99991 12.5523 7.55219 13 6.99991 13C6.44762 13 5.99991 12.5523 5.99991 12V11H4.99991C4.44762 11 3.99991 10.5523 3.99991 10C3.99991 9.44774 4.44762 9.00002 4.99991 9.00002H5.99991V8.00002C5.99991 7.44774 6.44762 7.00002 6.99991 7.00002Z"
                  fill="black"></path>
                <path
                  d="M15.9999 8.00002C15.9999 7.44774 16.4476 7.00002 16.9999 7.00002C17.5522 7.00002 17.9999 7.44774 17.9999 8.00002C17.9999 8.55231 17.5522 9.00002 16.9999 9.00002C16.4476 9.00002 15.9999 8.55231 15.9999 8.00002Z"
                  fill="black"></path>
                <path
                  d="M16.9999 11C16.4476 11 15.9999 11.4477 15.9999 12C15.9999 12.5523 16.4476 13 16.9999 13C17.5522 13 17.9999 12.5523 17.9999 12C17.9999 11.4477 17.5522 11 16.9999 11Z"
                  fill="black"></path>
                <path
                  d="M13.9999 10C13.9999 9.44774 14.4476 9.00002 14.9999 9.00002C15.5522 9.00002 15.9999 9.44774 15.9999 10C15.9999 10.5523 15.5522 11 14.9999 11C14.4476 11 13.9999 10.5523 13.9999 10Z"
                  fill="black"></path>
                <path
                  d="M18.9999 9.00002C18.4476 9.00002 17.9999 9.44774 17.9999 10C17.9999 10.5523 18.4476 11 18.9999 11C19.5522 11 19.9999 10.5523 19.9999 10C19.9999 9.44774 19.5522 9.00002 18.9999 9.00002Z"
                  fill="black"></path>
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M5.52718 3.33743C6.51513 3.09044 7.55302 3.1303 8.51912 3.45233L9.54638 3.79475C9.95425 3.93071 10.3814 4.00002 10.8113 4.00002H13.1885C13.6184 4.00002 14.0456 3.93071 14.4534 3.79475L15.4807 3.45233C16.4468 3.1303 17.4847 3.09044 18.4726 3.33743C20.5408 3.85446 22.1052 5.54904 22.4557 7.65183L23.7493 15.4137C23.9511 16.6246 23.5557 17.8584 22.6877 18.7264C21.2033 20.2109 18.7965 20.2109 17.3121 18.7264L15.7573 17.1716C15.0071 16.4214 13.9897 16 12.9288 16H11.071C10.0101 16 8.99269 16.4214 8.24255 17.1716L6.68771 18.7264C5.20328 20.2109 2.79654 20.2109 1.3121 18.7264C0.444074 17.8584 0.048684 16.6246 0.250497 15.4137L1.54415 7.65183C1.89461 5.54904 3.45904 3.85446 5.52718 3.33743ZM7.88666 5.3497C7.28141 5.14795 6.63119 5.12298 6.01225 5.27771C4.71659 5.60163 3.7365 6.66326 3.51693 7.98063L2.22328 15.7425C2.12766 16.3163 2.31501 16.9009 2.72632 17.3122C3.4297 18.0156 4.57011 18.0156 5.2735 17.3122L6.82833 15.7574C7.95355 14.6322 9.47968 14 11.071 14H12.9288C14.5201 14 16.0463 14.6322 17.1715 15.7574L18.7263 17.3122C19.4297 18.0156 20.5701 18.0156 21.2735 17.3122C21.6848 16.9009 21.8722 16.3163 21.7765 15.7425L20.4829 7.98063C20.2633 6.66326 19.2832 5.60163 17.9876 5.27771C17.3686 5.12298 16.7184 5.14795 16.1132 5.3497L15.0859 5.69212C14.4741 5.89605 13.8334 6.00002 13.1885 6.00002H10.8113C10.1664 6.00002 9.52573 5.89605 8.91393 5.69212L7.88666 5.3497Z"
                  fill="black"></path>
              </svg>
              <span>تجهیزات گیمینگ</span>
            </a>


            </a>
          </li>
          <li class="item_menu">
            <a href="product.html">
              <?xml version="1.0" encoding="UTF-8"?> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24"
                viewBox="0 0 25 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M8.3335 13C8.3335 10.2386 10.5721 8 13.3335 8C16.0949 8 18.3335 10.2386 18.3335 13C18.3335 15.7614 16.0949 18 13.3335 18C10.5721 18 8.3335 15.7614 8.3335 13ZM13.3335 10C11.6766 10 10.3335 11.3431 10.3335 13C10.3335 14.6569 11.6766 16 13.3335 16C14.9904 16 16.3335 14.6569 16.3335 13C16.3335 11.3431 14.9904 10 13.3335 10Z"
                  fill="black"></path>
                <path
                  d="M6.3335 11C6.88578 11 7.3335 10.5523 7.3335 10C7.3335 9.44772 6.88578 9 6.3335 9C5.78121 9 5.3335 9.44772 5.3335 10C5.3335 10.5523 5.78121 11 6.3335 11Z"
                  fill="black"></path>
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M8.90771 4.3359C9.46411 3.5013 10.4008 3 11.4039 3H15.2631C16.2662 3 17.2029 3.5013 17.7593 4.3359L18.5718 5.5547C18.7573 5.8329 19.0695 6 19.4039 6H21.3335C22.4381 6 23.3335 6.89543 23.3335 8V19C23.3335 20.1046 22.4381 21 21.3335 21H3.3335C2.22893 21 1.3335 20.1046 1.3335 19V8C1.3335 6.89543 2.22893 6 3.3335 6H7.26313C7.59748 6 7.90971 5.8329 8.09518 5.5547L8.90771 4.3359ZM11.4039 5C11.0695 5 10.7573 5.1671 10.5718 5.4453L9.75928 6.6641C9.20288 7.4987 8.26619 8 7.26313 8H3.3335V19H21.3335V8H19.4039C18.4008 8 17.4641 7.4987 16.9077 6.6641L16.0952 5.4453C15.9097 5.1671 15.5975 5 15.2631 5H11.4039Z"
                  fill="black"></path>
              </svg>
              <span>تصویر و فیلم برداری</span>
            </a>


            </a>
          </li>
          <li class="item_menu">
            <a href="product.html">
              <?xml version="1.0" encoding="UTF-8"?> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 4C6.44772 4 6 4.44772 6 5C6 5.55228 6.44772 6 7 6H11C11.5523 6 12 5.55228 12 5C12 4.44772 11.5523 4 11 4H7Z"
                  fill="black"></path>
                <path
                  d="M16 4C15.4477 4 15 4.44772 15 5C15 5.55228 15.4477 6 16 6H17C17.5523 6 18 5.55228 18 5C18 4.44772 17.5523 4 17 4H16Z"
                  fill="black"></path>
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M12 8C8.68629 8 6 10.6863 6 14C6 17.3137 8.68629 20 12 20C15.3137 20 18 17.3137 18 14C18 10.6863 15.3137 8 12 8ZM8 14C8 11.7909 9.79086 10 12 10C14.2091 10 16 11.7909 16 14C16 16.2091 14.2091 18 12 18C9.79086 18 8 16.2091 8 14Z"
                  fill="black"></path>
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M5 1C3.89543 1 3 1.89543 3 3V21C3 22.1046 3.89543 23 5 23H19C20.1046 23 21 22.1046 21 21V3C21 1.89543 20.1046 1 19 1H5ZM5 3L19 3V21H5V3Z"
                  fill="black"></path>
              </svg>
              <span>لوازم خانگی</span>
            </a>


            </a>
          </li>
        </ul>
      </nav>



    </div>

  </div>
  <!-- menu -->

<div id="all_content" class="col-lg-11 p-0 mt-xl-3 position-absolute top-0 start-0 bottom-0">
<!--row menu width<998 -->
  <div class="row_menu_responsive container-fluid position-fixed bottom-0 start-0 end-0  m-0 d-lg-none">

    <ul class="navbar row-cols-4 p-0 d-flex flex-row-reverse align-items-center justify-content-center m-0 h-100">
      <li class="row_menu_resp_item">
        <button id="navbarTogglerBtn" class="navbarTogglerBtn navbar-toggler border-0 m-0" type="button"
          data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <span>منو</span>
      </li>

      <li class="row_menu_resp_item">

        <i class="fas fa-shopping-basket basket__box">
          <span id="badge_basket" class="badge_icon position-absolute translate-middle bg-primary border-0 rounded-pill">0

        </i>
        <span>سبدخرید</span>
        </a>

      </li>

      <li class="row_menu_resp_item">

        <i class="far fa-heart">

          <span id="badgeLike" class="badge_icon position-absolute translate-middle bg-primary border-0 rounded-pill">0

            <span class="visually-hidden">New alerts</span>
          </span>
        </i>
        <span>علاقه مندی</span>
        </a>

      </li>

      <li class="row_menu_resp_item">

        <i class="fa fa-random">
          <span class="badge_icon position-absolute translate-middle bg-primary border-0 rounded-pill">3

        </i>
        <span>مقایسه</span>
        </a>

      </li>

    </ul>
  </div>


<div class="header col-lg-11 row p-0 m-0">

  <!-- header responsive -->

  <nav class="navbar bg-body-tertiary fixed-top d-lg-none">
    <div class="container-fluid border-bottom py-2 px-1 d-flex align-items-baseline justify-content-between text-nowrap">
      <button id="navbarTogglerBtn" class="navbarTogglerBtn navbar-toggler border-0 m-0 ps-0 pe-1" type="button"
        data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div>
        <img class="img-fluid" src="img/mega-electronics-logo.svg" alt="logo">
      </div>

      <div id="usericoncontent">
      
<a href="#" class="text-decoration-none navbar-toggler border-0 m-0 px-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span id="name_user" class="fs-6 text-black"></span>
              <i class="far fa-user ms-1 fw-bold bg-primary rounded-circle p-2  fs-6"></i>  
            </a>

      </div>

    </div>
    <div class="w-100 search_box_content d-flex justify-content-center align-items-center">
      <div
        class="search_box_responsive border rounded rounded-5 pe-3 position-relative bg-white d-flex justify-content-center align-items-center gap-3  py-1">
        <input type="text" placeholder="جستجوی محصولات..."
          class="rounded rounded-5 p-1 border-0 border-opacity-25 bg-transparent">

        <button class="search_icon ms-1 mt-0 border-0">
          <i class="fas fa-search text-white d-flex align-items-center justify-content-center"></i>
        </button>
      </div>
    </div>
  </nav>
  <div class="offcanvas offcanvas-start p-0 offcanvas" tabindex="-1" id="offcanvasNavbar"
    aria-labelledby="offcanvasNavbarLabel">
    <!-- login page -->

    <div class="container login_page">
      <div class="offcanvas-header">
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
            </button>
      <h5 class="offcanvas-title" id="offcanvasNavbarLabel">ورود/ثبت نام</h5>
      </div>
      <hr class="m-0">

      <div class="offcanvas-body d-flex flex-column gap-4">
        <div class="d-flex flex-column gap-2">
          <span class="fs-6">نام کاربری<span class="text-danger">*</span></span>
          <input id="username" type="text" class="border rounded border-2 py-2 border-secondary-subtle">
        </div>
        <div class="d-flex flex-column gap-2">
          <span class="fs-6">رمز عبور<span class="text-danger">*</span></span>
          <div class="border rounded border-2 py-2 border-secondary-subtle d-flex align-items-center justify-content-around">
          <input id="password" type="password" class="border-0 w-75 h-100">
          <i class="fa-solid fa-eye float-start"></i>
          </div>
        </div>
        <div class="w-100 d-flex flex-column gap-3">
          <button id="enterBtn" class="bg-primary text-white border-0 py-2 rounded w-100" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">ورود</button>
          <div>
            <input type="checkbox" id="checkbox">
            <label for="checkbox">مرا به خاطر بسپار</label>
          </div>

          <p class="m-0">
            <a href="#" class="text-decoration-none"> رمز عبور را فراموش کرده اید؟</a>
          </p>
        </div>
      </div>

      <div class="d-flex flex-column justify-content-center align-items-center">
        <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
        <svg width="90px" height="90px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 18L17 18M17 18L14 18M17 18V15M17 18V21M11 21H4C4 17.134 7.13401 14 11 14C11.695 14 12.3663 14.1013 13 14.2899M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z"
            stroke="#eeeded" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

        <p class="fw-bold">هنوز حساب کاربری ندارید؟!</p>
        <a id="create_Account" href="register.html" class="text-decoration-none">ایجاد حساب کاربری</a>
      </div>




    </div>
    <!-- offcanvas_header -->
<div class="w-100 h-100 offcanvas_content">
    <div id="headerMenu&Sort" class="offcanvas-header d-lg-none p-0 d-flex">


      <!-- دسته بندی -->
      <div id="sortOffcanvas"
        class="title_nav_toggler w-50 h-100 d-flex justify-content-center align-items-center fw-bolder select_title_nav_toggler p-3">
        دسته بندی</div>

      <!-- منو -->
      <div id="menuOffcanvas" class="title_nav_toggler w-50 h-100 d-flex justify-content-center align-items-center fw-bolder disable_title_nav_toggler p-3">
        منو</div>




      </li>
    </div>
    <div class="offcanvas-body">
      <ul id="sortContent" class="navbar-nav justify-content-end flex-grow-1 pe-3 sort_right_nav_toggle d-block d-lg-none">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="product.html">

            <?xml version="1.0" encoding="UTF-8"?> <svg xmlns="http://www.w3.org/2000/svg" width="24"
              height="24" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M4 3C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3H4ZM4 5H20V16H4V5Z"
                fill="black"></path>
              <path
                d="M1 19C0.447715 19 0 19.4477 0 20C0 20.5523 0.447715 21 1 21H23C23.5523 21 24 20.5523 24 20C24 19.4477 23.5523 19 23 19H1Z"
                fill="black"></path>
            </svg>
            <span>لپتاپ و تبلت</span>
          </a>
        </li>
        <hr>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="product.html">
            <?xml version="1.0" encoding="UTF-8"?> <svg xmlns="http://www.w3.org/2000/svg" width="25"
              height="24" viewBox="0 0 25 24" fill="none">
              <path
                d="M13.6665 6C13.6665 5.44772 13.2188 5 12.6665 5C12.1142 5 11.6665 5.44772 11.6665 6V8C11.6665 8.55228 12.1142 9 12.6665 9C13.2188 9 13.6665 8.55228 13.6665 8V6Z"
                fill="black"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M12.6665 1C8.80051 1 5.6665 4.13401 5.6665 8V16C5.6665 19.866 8.80051 23 12.6665 23C16.5325 23 19.6665 19.866 19.6665 16V8C19.6665 4.13401 16.5325 1 12.6665 1ZM7.6665 8C7.6665 5.23858 9.90508 3 12.6665 3C15.4279 3 17.6665 5.23858 17.6665 8V16C17.6665 18.7614 15.4279 21 12.6665 21C9.90508 21 7.6665 18.7614 7.6665 16V8Z"
                fill="black"></path>
            </svg>
            <span>کامپیوتر و تجهیزات اداری</span>


          </a>
        </li>
        <hr>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="product.html">
            <?xml version="1.0" encoding="UTF-8"?> <svg xmlns="http://www.w3.org/2000/svg" width="25"
              height="24" viewBox="0 0 25 24" fill="none">
              <path
                d="M9.3335 2C9.3335 1.44772 8.88578 1 8.3335 1C7.78121 1 7.3335 1.44772 7.3335 2V3C7.3335 3.55228 7.78121 4 8.3335 4C8.88578 4 9.3335 3.55228 9.3335 3V2Z"
                fill="black"></path>
              <path
                d="M13.3335 2C13.3335 1.44772 12.8858 1 12.3335 1C11.7812 1 11.3335 1.44772 11.3335 2V3C11.3335 3.55228 11.7812 4 12.3335 4C12.8858 4 13.3335 3.55228 13.3335 3V2Z"
                fill="black"></path>
              <path
                d="M17.3335 2C17.3335 1.44772 16.8858 1 16.3335 1C15.7812 1 15.3335 1.44772 15.3335 2V3C15.3335 3.55228 15.7812 4 16.3335 4C16.8858 4 17.3335 3.55228 17.3335 3V2Z"
                fill="black"></path>
              <path
                d="M2.3335 7C1.78121 7 1.3335 7.44772 1.3335 8C1.3335 8.55228 1.78121 9 2.3335 9H3.3335C3.88578 9 4.3335 8.55228 4.3335 8C4.3335 7.44772 3.88578 7 3.3335 7H2.3335Z"
                fill="black"></path>
              <path
                d="M21.3335 7C20.7812 7 20.3335 7.44772 20.3335 8C20.3335 8.55228 20.7812 9 21.3335 9H22.3335C22.8858 9 23.3335 8.55228 23.3335 8C23.3335 7.44772 22.8858 7 22.3335 7H21.3335Z"
                fill="black"></path>
              <path
                d="M2.3335 11C1.78121 11 1.3335 11.4477 1.3335 12C1.3335 12.5523 1.78121 13 2.3335 13H3.3335C3.88578 13 4.3335 12.5523 4.3335 12C4.3335 11.4477 3.88578 11 3.3335 11H2.3335Z"
                fill="black"></path>
              <path
                d="M21.3335 11C20.7812 11 20.3335 11.4477 20.3335 12C20.3335 12.5523 20.7812 13 21.3335 13H22.3335C22.8858 13 23.3335 12.5523 23.3335 12C23.3335 11.4477 22.8858 11 22.3335 11H21.3335Z"
                fill="black"></path>
              <path
                d="M2.3335 15C1.78121 15 1.3335 15.4477 1.3335 16C1.3335 16.5523 1.78121 17 2.3335 17H3.3335C3.88578 17 4.3335 16.5523 4.3335 16C4.3335 15.4477 3.88578 15 3.3335 15H2.3335Z"
                fill="black"></path>
              <path
                d="M21.3335 15C20.7812 15 20.3335 15.4477 20.3335 16C20.3335 16.5523 20.7812 17 21.3335 17H22.3335C22.8858 17 23.3335 16.5523 23.3335 16C23.3335 15.4477 22.8858 15 22.3335 15H21.3335Z"
                fill="black"></path>
              <path
                d="M9.3335 21C9.3335 20.4477 8.88578 20 8.3335 20C7.78121 20 7.3335 20.4477 7.3335 21V22C7.3335 22.5523 7.78121 23 8.3335 23C8.88578 23 9.3335 22.5523 9.3335 22V21Z"
                fill="black"></path>
              <path
                d="M13.3335 21C13.3335 20.4477 12.8858 20 12.3335 20C11.7812 20 11.3335 20.4477 11.3335 21V22C11.3335 22.5523 11.7812 23 12.3335 23C12.8858 23 13.3335 22.5523 13.3335 22V21Z"
                fill="black"></path>
              <path
                d="M17.3335 21C17.3335 20.4477 16.8858 20 16.3335 20C15.7812 20 15.3335 20.4477 15.3335 21V22C15.3335 22.5523 15.7812 23 16.3335 23C16.8858 23 17.3335 22.5523 17.3335 22V21Z"
                fill="black"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M7.3335 5C6.22893 5 5.3335 5.89543 5.3335 7V17C5.3335 18.1046 6.22893 19 7.3335 19H17.3335C18.4381 19 19.3335 18.1046 19.3335 17V7C19.3335 5.89543 18.4381 5 17.3335 5H7.3335ZM7.3335 7H17.3335V17H7.3335V7Z"
                fill="black"></path>
            </svg>
            <span>سخت افزار و تجهیزات شبکه</span>



          </a>
        </li>
        <hr>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="product.html">
            <?xml version="1.0" encoding="UTF-8"?> <svg xmlns="http://www.w3.org/2000/svg" width="24"
              height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M10.5 19C10.5 18.4477 10.9477 18 11.5 18H12.5C13.0523 18 13.5 18.4477 13.5 19C13.5 19.5523 13.0523 20 12.5 20H11.5C10.9477 20 10.5 19.5523 10.5 19Z"
                fill="black"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M5 3C5 1.89543 5.89543 1 7 1H17C18.1046 1 19 1.89543 19 3V21C19 22.1046 18.1046 23 17 23H7C5.89543 23 5 22.1046 5 21V3ZM17 3L7 3V21H17V3Z"
                fill="black"></path>
            </svg>
            <span>گوشی هوشمند</span>

          </a>
        </li>
        <hr>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="product.html">
            <?xml version="1.0" encoding="UTF-8"?> <svg xmlns="http://www.w3.org/2000/svg" width="24"
              height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M6.99991 7.00002C7.55219 7.00002 7.99991 7.44774 7.99991 8.00002V9.00002H8.99991C9.55219 9.00002 9.99991 9.44774 9.99991 10C9.99991 10.5523 9.55219 11 8.99991 11H7.99991V12C7.99991 12.5523 7.55219 13 6.99991 13C6.44762 13 5.99991 12.5523 5.99991 12V11H4.99991C4.44762 11 3.99991 10.5523 3.99991 10C3.99991 9.44774 4.44762 9.00002 4.99991 9.00002H5.99991V8.00002C5.99991 7.44774 6.44762 7.00002 6.99991 7.00002Z"
                fill="black"></path>
              <path
                d="M15.9999 8.00002C15.9999 7.44774 16.4476 7.00002 16.9999 7.00002C17.5522 7.00002 17.9999 7.44774 17.9999 8.00002C17.9999 8.55231 17.5522 9.00002 16.9999 9.00002C16.4476 9.00002 15.9999 8.55231 15.9999 8.00002Z"
                fill="black"></path>
              <path
                d="M16.9999 11C16.4476 11 15.9999 11.4477 15.9999 12C15.9999 12.5523 16.4476 13 16.9999 13C17.5522 13 17.9999 12.5523 17.9999 12C17.9999 11.4477 17.5522 11 16.9999 11Z"
                fill="black"></path>
              <path
                d="M13.9999 10C13.9999 9.44774 14.4476 9.00002 14.9999 9.00002C15.5522 9.00002 15.9999 9.44774 15.9999 10C15.9999 10.5523 15.5522 11 14.9999 11C14.4476 11 13.9999 10.5523 13.9999 10Z"
                fill="black"></path>
              <path
                d="M18.9999 9.00002C18.4476 9.00002 17.9999 9.44774 17.9999 10C17.9999 10.5523 18.4476 11 18.9999 11C19.5522 11 19.9999 10.5523 19.9999 10C19.9999 9.44774 19.5522 9.00002 18.9999 9.00002Z"
                fill="black"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M5.52718 3.33743C6.51513 3.09044 7.55302 3.1303 8.51912 3.45233L9.54638 3.79475C9.95425 3.93071 10.3814 4.00002 10.8113 4.00002H13.1885C13.6184 4.00002 14.0456 3.93071 14.4534 3.79475L15.4807 3.45233C16.4468 3.1303 17.4847 3.09044 18.4726 3.33743C20.5408 3.85446 22.1052 5.54904 22.4557 7.65183L23.7493 15.4137C23.9511 16.6246 23.5557 17.8584 22.6877 18.7264C21.2033 20.2109 18.7965 20.2109 17.3121 18.7264L15.7573 17.1716C15.0071 16.4214 13.9897 16 12.9288 16H11.071C10.0101 16 8.99269 16.4214 8.24255 17.1716L6.68771 18.7264C5.20328 20.2109 2.79654 20.2109 1.3121 18.7264C0.444074 17.8584 0.048684 16.6246 0.250497 15.4137L1.54415 7.65183C1.89461 5.54904 3.45904 3.85446 5.52718 3.33743ZM7.88666 5.3497C7.28141 5.14795 6.63119 5.12298 6.01225 5.27771C4.71659 5.60163 3.7365 6.66326 3.51693 7.98063L2.22328 15.7425C2.12766 16.3163 2.31501 16.9009 2.72632 17.3122C3.4297 18.0156 4.57011 18.0156 5.2735 17.3122L6.82833 15.7574C7.95355 14.6322 9.47968 14 11.071 14H12.9288C14.5201 14 16.0463 14.6322 17.1715 15.7574L18.7263 17.3122C19.4297 18.0156 20.5701 18.0156 21.2735 17.3122C21.6848 16.9009 21.8722 16.3163 21.7765 15.7425L20.4829 7.98063C20.2633 6.66326 19.2832 5.60163 17.9876 5.27771C17.3686 5.12298 16.7184 5.14795 16.1132 5.3497L15.0859 5.69212C14.4741 5.89605 13.8334 6.00002 13.1885 6.00002H10.8113C10.1664 6.00002 9.52573 5.89605 8.91393 5.69212L7.88666 5.3497Z"
                fill="black"></path>
            </svg>
            <span>تجهیزات گیمینگ</span>

          </a>
        </li>
        <hr>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="product.html">

            <?xml version="1.0" encoding="UTF-8"?> <svg xmlns="http://www.w3.org/2000/svg" width="24"
              height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 4C6.44772 4 6 4.44772 6 5C6 5.55228 6.44772 6 7 6H11C11.5523 6 12 5.55228 12 5C12 4.44772 11.5523 4 11 4H7Z"
                fill="black"></path>
              <path
                d="M16 4C15.4477 4 15 4.44772 15 5C15 5.55228 15.4477 6 16 6H17C17.5523 6 18 5.55228 18 5C18 4.44772 17.5523 4 17 4H16Z"
                fill="black"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M12 8C8.68629 8 6 10.6863 6 14C6 17.3137 8.68629 20 12 20C15.3137 20 18 17.3137 18 14C18 10.6863 15.3137 8 12 8ZM8 14C8 11.7909 9.79086 10 12 10C14.2091 10 16 11.7909 16 14C16 16.2091 14.2091 18 12 18C9.79086 18 8 16.2091 8 14Z"
                fill="black"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M5 1C3.89543 1 3 1.89543 3 3V21C3 22.1046 3.89543 23 5 23H19C20.1046 23 21 22.1046 21 21V3C21 1.89543 20.1046 1 19 1H5ZM5 3L19 3V21H5V3Z"
                fill="black"></path>
            </svg>
            <span>لوازم خانگی</span>


          </a>
        </li>
        <hr>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="product.html">

            <?xml version="1.0" encoding="UTF-8"?> <svg xmlns="http://www.w3.org/2000/svg" width="25"
              height="24" viewBox="0 0 25 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M8.3335 13C8.3335 10.2386 10.5721 8 13.3335 8C16.0949 8 18.3335 10.2386 18.3335 13C18.3335 15.7614 16.0949 18 13.3335 18C10.5721 18 8.3335 15.7614 8.3335 13ZM13.3335 10C11.6766 10 10.3335 11.3431 10.3335 13C10.3335 14.6569 11.6766 16 13.3335 16C14.9904 16 16.3335 14.6569 16.3335 13C16.3335 11.3431 14.9904 10 13.3335 10Z"
                fill="black"></path>
              <path
                d="M6.3335 11C6.88578 11 7.3335 10.5523 7.3335 10C7.3335 9.44772 6.88578 9 6.3335 9C5.78121 9 5.3335 9.44772 5.3335 10C5.3335 10.5523 5.78121 11 6.3335 11Z"
                fill="black"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M8.90771 4.3359C9.46411 3.5013 10.4008 3 11.4039 3H15.2631C16.2662 3 17.2029 3.5013 17.7593 4.3359L18.5718 5.5547C18.7573 5.8329 19.0695 6 19.4039 6H21.3335C22.4381 6 23.3335 6.89543 23.3335 8V19C23.3335 20.1046 22.4381 21 21.3335 21H3.3335C2.22893 21 1.3335 20.1046 1.3335 19V8C1.3335 6.89543 2.22893 6 3.3335 6H7.26313C7.59748 6 7.90971 5.8329 8.09518 5.5547L8.90771 4.3359ZM11.4039 5C11.0695 5 10.7573 5.1671 10.5718 5.4453L9.75928 6.6641C9.20288 7.4987 8.26619 8 7.26313 8H3.3335V19H21.3335V8H19.4039C18.4008 8 17.4641 7.4987 16.9077 6.6641L16.0952 5.4453C15.9097 5.1671 15.5975 5 15.2631 5H11.4039Z"
                fill="black"></path>
            </svg>
            <span>تصویر و فیلم برداری</span>


          </a>
        </li>
      </ul>

      <ul id="menuContent"
        class="navbar-nav justify-content-end flex-grow-1 pe-3 menu_left_nav_toggle d-none">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">
            <span>بنر های تبلیغاتی</span>
          </a>
        </li>
        <hr>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            <span>فروشگاه های ما</span>
          </a>
        </li>
        <hr>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            <span><i class="far fa-heart"></i> لیست علاقه مندی ها </span>
          </a>
        </li>
        <hr>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            <span><i class="fas fa-exchange-alt"></i> مقایسه </span>
          </a>
        </li>
        <hr>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            <span> تحویل و مرجوعی </span>
          </a>
        </li>
        <hr>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            <span>راه های ارتباطی</span>
          </a>
        </li>


      </ul>
    </div>
  </div>
</div>



  <!-- add to basket & product selected -->
  
  <!-- end header responsive -->

  <div class="d-none d-lg-block p-0">
    <!-- session search input & logo -->
    <div class="header_box row-cols-auto p-0">
      <!-- logo -->
      <div class="logo_header">

        <a href="#">
          <img src="img/mega-electronics-logo.png" alt="logo">
        </a>
      </div>
      <!-- search input -->
      <div class="w-50 d-flex justify-content-center align-items-center">

        <div class="search_box border rounded rounded-5 px-3 gap-3 w-100 position-relative">
          <input type="text" placeholder="جستجوی محصولات..."
            class="rounded rounded-5 p-1 border-0 border-opacity-25">

          <button class="search_icon border-0 bg-transparent ms-0">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
      <div style="width: 30%;" class="d-flex justify-content-end column-gap-4 me-3">

        <div class="travel_support_content w-50">
          <!-- support in header -->

          <div class="support_box">
            <div class="support_logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <g clip-path="url(#clip0_10122_52416)">
                  <path
                    d="M4.81815 18.5599C5.37836 18.5599 5.8325 18.1058 5.8325 17.5456C5.8325 16.9854 5.37836 16.5313 4.81815 16.5313C4.25794 16.5313 3.8038 16.9854 3.8038 17.5456C3.8038 18.1058 4.25794 18.5599 4.81815 18.5599Z"
                    fill="#333333"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M11.7132 0.562359C12.463 -0.187453 13.6787 -0.187453 14.4285 0.562359L17.5537 3.68753C18.643 4.77688 18.643 6.54306 17.5537 7.63241L16.6571 8.52898L23.471 15.3429L24.3676 14.4463C25.4569 13.357 27.2231 13.357 28.3125 14.4463L31.4376 17.5715C32.1875 18.3213 32.1875 19.537 31.4376 20.2868C28.6711 23.0534 24.3264 23.28 21.3013 20.9666V25.1532C21.3013 26.6938 20.0524 27.9427 18.5118 27.9427H17.6006L17.1862 29.8074C16.8604 31.2736 14.9743 31.6977 14.0522 30.5121L12.0537 27.9427H2.78946C1.24888 27.9427 0 26.6938 0 25.1532V15.5169C0 13.9763 1.24888 12.7275 2.78946 12.7275H12.9658L11.7132 11.4748C8.69982 8.46144 8.69981 3.57576 11.7132 0.562359ZM14.4873 14.249L19.7798 19.5414V25.1532C19.7798 25.8535 19.2121 26.4211 18.5118 26.4211H16.9903C16.6338 26.4211 16.325 26.6688 16.2477 27.0169L15.7009 29.4773C15.6544 29.6868 15.3849 29.7474 15.2532 29.578L13.0263 26.7148C12.8821 26.5295 12.6605 26.4211 12.4258 26.4211H2.78946C2.08919 26.4211 1.52152 25.8535 1.52152 25.1532V15.5169C1.52152 14.8166 2.08919 14.249 2.78946 14.249H14.4873ZM13.3526 1.63824C13.197 1.48262 12.9447 1.48262 12.7891 1.63824C10.3699 4.05744 10.3699 7.97975 12.7891 10.399L21.601 19.2109C24.0202 21.6301 27.9426 21.6301 30.3618 19.2109C30.5174 19.0553 30.5174 18.803 30.3618 18.6474L27.2366 15.5222C26.7414 15.027 25.9386 15.027 25.4435 15.5222L24.009 16.9567C23.7119 17.2538 23.2302 17.2538 22.9331 16.9567L15.0433 9.06692C14.7462 8.76982 14.7462 8.28814 15.0433 7.99104L16.4778 6.55654C16.973 6.06138 16.973 5.25857 16.4778 4.76341L13.3526 1.63824Z"
                    fill="#333333"></path>
                </g>
                <defs>
                  <clipPath id="svg-6483">
                    <rect width="32" height="32" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div class="support_txt">
              <span>پشتیبانی</span>
              <span>989138036135+</span>
            </div>
          </div>
        </div>

        <!-- travel in header -->

        <div class="travel_box w-50">
          <div class="travel_logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <g clip-path="url(#clip0_10122_52282)">
                <path
                  d="M22.5876 2.23814C22.7504 1.8519 22.5692 1.40686 22.1829 1.24413C20.9104 0.707956 19.4943 0.193345 17.9911 0.0059111C17.5752 -0.0459477 17.196 0.24917 17.1441 0.665075C17.0923 1.08098 17.3874 1.46018 17.8033 1.51204C19.0967 1.67331 20.3593 2.12275 21.5936 2.64283C21.9798 2.80557 22.4249 2.62438 22.5876 2.23814Z"
                  fill="#333333"></path>
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M5.75493 16C5.75493 21.6495 10.3505 26.2451 16 26.2451C21.6494 26.2451 26.245 21.6495 26.245 16C26.245 10.3571 21.656 5.69176 16 5.69176C10.344 5.69176 5.75493 10.3571 5.75493 16ZM13.2516 7.65981C10.0149 8.75219 7.60987 11.7144 7.30536 15.2411H11.4582C11.5317 12.8434 11.9507 10.6479 12.6114 8.98107C12.8009 8.503 13.0143 8.05814 13.2516 7.65981ZM12.9767 15.2411C13.0499 12.9997 13.4434 11.001 14.0224 9.54032C14.345 8.72625 14.7104 8.11707 15.0776 7.72406C15.4438 7.33203 15.756 7.20955 16 7.20955C16.2439 7.20955 16.5562 7.33203 16.9224 7.72406C17.2895 8.11707 17.6549 8.72625 17.9775 9.54032C18.5565 11.001 18.95 12.9997 19.0232 15.2411H12.9767ZM11.4582 16.7589H7.30543C7.60979 20.2738 10.0078 23.2002 13.242 24.2806C13.0088 23.8908 12.7989 23.4563 12.6123 22.9896C11.9508 21.336 11.5317 19.1541 11.4582 16.7589ZM18.7579 24.2806C21.9921 23.2002 24.3901 20.2738 24.6945 16.7589H20.5417C20.4682 19.1541 20.0491 21.336 19.3877 22.9896C19.201 23.4563 18.9911 23.8908 18.7579 24.2806ZM19.0232 16.7589C18.95 18.9973 18.5565 20.9807 17.9784 22.4259C17.6563 23.2313 17.2916 23.8322 16.9256 24.2193C16.561 24.6048 16.248 24.7273 16 24.7273C15.752 24.7273 15.4389 24.6048 15.0744 24.2193C14.7083 23.8322 14.3437 23.2313 14.0215 22.4259C13.4434 20.9807 13.05 18.9973 12.9768 16.7589H19.0232ZM20.5417 15.2411H24.6946C24.3901 11.7144 21.985 8.75219 18.7483 7.65981C18.9857 8.05815 19.1991 8.503 19.3885 8.98107C20.0492 10.6479 20.4683 12.8434 20.5417 15.2411Z"
                  fill="#333333"></path>
                <path
                  d="M28.6977 6.30483C28.9512 6.63855 28.8862 7.11464 28.5525 7.36821C28.2188 7.62177 27.7427 7.5568 27.4891 7.22307C26.694 6.17652 25.7603 5.24285 24.7137 4.44769C24.38 4.19413 24.315 3.71804 24.5685 3.38431C24.8221 3.05058 25.2982 2.98559 25.6319 3.23915C26.788 4.11749 27.8193 5.14881 28.6977 6.30483Z"
                  fill="#333333"></path>
                <path
                  d="M31.3348 14.8558C31.7507 14.804 32.0459 14.4248 31.994 14.0089C31.8055 12.4962 31.221 11.008 30.6926 9.75378C30.5299 9.36754 30.0849 9.18635 29.6986 9.34908C29.3124 9.51181 29.1312 9.95684 29.2939 10.3431C29.8218 11.5959 30.3279 12.9127 30.4879 14.1966C30.5397 14.6125 30.9189 14.9077 31.3348 14.8558Z"
                  fill="#333333"></path>
                <path
                  d="M16 32C7.19837 32 0 24.8016 0 16C0 11.7905 1.67904 7.91831 4.35243 5.0593H3.53315C3.11403 5.0593 2.77426 4.71953 2.77426 4.3004C2.77426 3.88128 3.11403 3.54151 3.53315 3.54151H6.26086C6.67998 3.54151 7.01975 3.88128 7.01975 4.3004V6.93888C7.01975 7.358 6.67998 7.69777 6.26086 7.69777C5.84173 7.69777 5.50197 7.358 5.50197 6.93888V6.05225C3.05332 8.64925 1.51779 12.1757 1.51779 16C1.51779 23.9634 8.03662 30.4822 16 30.4822C23.3591 30.4822 29.602 24.9085 30.488 17.8034C30.5398 17.3875 30.919 17.0923 31.3349 17.1442C31.7508 17.1961 32.0459 17.5753 31.9941 17.9912C31.0128 25.8601 24.1208 32 16 32Z"
                  fill="#333333"></path>
                <path
                  d="M9.41225 2.23813C9.57498 2.62437 10.02 2.80556 10.4063 2.64283C11.6407 2.12274 12.9031 1.67331 14.1966 1.51204C14.6125 1.46018 14.9076 1.08098 14.8557 0.665075C14.8039 0.24917 14.4247 -0.0459477 14.0088 0.0059111C12.5056 0.193345 11.0895 0.70796 9.81695 1.24412C9.43071 1.40685 9.24951 1.85189 9.41225 2.23813Z"
                  fill="#333333"></path>
              </g>
              <defs>
                <clipPath id="svg-2623">
                  <rect width="32" height="32" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="travel_txt">
            <span>حمل و نقل رایگان</span>
            <span>برای تهران و شهرستان</span>
          </div>

        </div>

      </div>



    </div>

    <!-- row menu -->
    <div class="row_menu mt-xl-3 p-2">
      <div class="all_items_box my-1">

        <div class="content bg-body rounded rounded-pill px-3 py-1">
          <a href="#">

            <div class="icon mx-1 overflow-hidden">
            </div>
          </a>
          <span class="ms-1"><a href="#" class="text-black text-decoration-none">همه دسته ها</a></span>
        </div>
      </div>
      <nav class="nav_row_menu">
        <ul class="nav nav-pills">
          <li><a href="index.html" class="active px-3">
              صفحه اصلی
            </a></li>
          <li><a href="product.html" class="px-3">
              محصولات
            </a></li>
          <li><a href="#" class="px-3">
              فروشگاه ها
            </a></li>
          <li><a href="#" class="px-3">
              تماس با ما
            </a></li>
          <li><a href="#" class="px-3">
              تحویل کالا
            </a></li>
        </ul>
      </nav>

      <div class="left_group_row_menu">



        <div class="icons_like_exchange">

          <button class="bg-white d-flex justify-content-center align-items-center rounded-pill border-0 position-relative">

            <abbr class="text-decoration-none" title="لیست علاقه مندی ها">
              <a href="#">
                <i class="far fa-heart d-flex fs-5">
                  <span id="badgeLike"
                    class="badge position-absolute top-0 end-50 translate-middle p-1 bg-primary border border-light rounded-pill">0

                    <span class="visually-hidden">New alerts</span>
                  </span>
                  <span class="visually-hidden">New alerts</span>
                  </span>
                </i>
              </a>
            </abbr>
          </button>
        </div>

        <div class="basket_money basket__box rounded rounded-pill position-relative">

          <div class="rounded rounded-circle">
            <a href="#">
              <i class="fas fa-shopping-cart"></i>
            </a>
          </div>

          <span id="badge_basket"
            class="position-absolute translate-middle text-white bg-black border border-light rounded-circle">0
          </span>
        </div>

        <!-- login-->

          <div class="login_box">

          <abbr title="حساب کاربری" class="text-decoration-none">
            <a href="#" class="bg-white text-black d-flex gap-1 flex-nowrap justify-content-center align-items-center rounded-pill navbar-toggler border-0 m-0" type="button" data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span id="name_user" class="fs-6">ورود / ثبت نام</span>
              <i class="far fa-user fs-5 me-1"></i>  
            </a>
          </abbr>
        </div>

      </div>


    </div>
  </div>
</div>


</div>

`;

class Header extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    let nameUser = this.shadowRoot.querySelectorAll("#name_user");
    let userIconResponsive = this.shadowRoot.querySelector("#usericoncontent");
    let navbarTogglerBtn =
      this.shadowRoot.querySelectorAll("#navbarTogglerBtn");
    let headerMenuSort = this.shadowRoot.getElementById("headerMenu&Sort");
    let loginPage = this.shadowRoot.querySelector(".login_page");
    let sortOffcanvas = this.shadowRoot.querySelector("#sortOffcanvas");
    let menuOffcanvas = this.shadowRoot.querySelector("#menuOffcanvas");
    let sortContent = this.shadowRoot.querySelector("#sortContent");
    let menuContent = this.shadowRoot.querySelector("#menuContent");
    let offcanvasContentLeftMenu =
      this.shadowRoot.querySelector(".offcanvas_content");
    let usernameInput = this.shadowRoot.querySelector("#username");
    let passwordInput = this.shadowRoot.querySelector("#password");
    let enterBtn = this.shadowRoot.querySelector("#enterBtn");
    let badgeBasket = this.shadowRoot.querySelectorAll("#badge_basket");
    let likeProduct = this.shadowRoot.querySelectorAll(".fa-heart");
    let badgeLike = this.shadowRoot.querySelectorAll("#badgeLike");
    let content = this.shadowRoot.querySelector(".content");
    let colMenu = this.shadowRoot.querySelector("#col_menu");
    let showPassword = this.shadowRoot.querySelector(".fa-eye");
    let allLiElemHeader = this.shadowRoot.querySelectorAll(".nav-pills li");
    let basketHeadereBox = this.shadowRoot.querySelectorAll('.basket__box');
    let flag = true;

    // active Bootstrap
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";

    script.onload = () => {
      console.log("Bootstrap loaded!");

      // مدیریت دستی Offcanvas
      const offcanvasEl = this.shadowRoot.getElementById("offcanvasNavbar");
      const offcanvas = new bootstrap.Offcanvas(offcanvasEl);

      // مدیریت کلیک روی دکمه‌ها
      this.shadowRoot
        .querySelectorAll('[data-bs-toggle="offcanvas"]')
        .forEach((btn) => {
          btn.addEventListener("click", (e) => {
            e.preventDefault();
            offcanvas.toggle();
          });

            
        });
 //!! دکمه بستن دستی (چون data-bs-dismiss در Shadow DOM کار نمی‌کنه)
 const closeBtn = this.shadowRoot.querySelector('.btn-close');
 if (closeBtn) {
   closeBtn.addEventListener("click", () => {
     offcanvas.hide();
   });
 }



      // مدیریت تغییر محتوا در Offcanvas
      const handleOffcanvasContent = (showSort = true) => {
        sortContent.classList.toggle("d-none", !showSort);
        menuContent.classList.toggle("d-none", showSort);
        sortOffcanvas.classList.toggle("select_title_nav_toggler", showSort);
        menuOffcanvas.classList.toggle("select_title_nav_toggler", !showSort);
      };

      sortOffcanvas.addEventListener("click", () =>
        handleOffcanvasContent(true)
      );
      menuOffcanvas.addEventListener("click", () =>
        handleOffcanvasContent(false)
      );
    };

    script.onerror = () => console.error("Bootstrap failed to load");
    this.shadowRoot.appendChild(script);
    document.addEventListener("click", (event) => {
      if (event.target.matches('[data-bs-toggle="offcanvas"]')) {
        const target = event.target.getAttribute("data-bs-target");
        const offcanvas = document.querySelector(target);
        if (offcanvas) {
          new bootstrap.Offcanvas(offcanvas).toggle();
        }
      }
    });

    window.addEventListener("DOMContentLoaded", () => {
      if (localStorage.getItem("username")) {
        nameUser.forEach((name) => {
          name.innerHTML = localStorage.getItem("username");
        });
      }
    });

    


    // کلیک کردن روی ایکون های سه خط و یوزر جهت نمایش منو کشویی سمت چپ در ریسپانسیو
    navbarTogglerBtn.forEach((btns) => {
      btns.addEventListener("click", () => {
        offcanvasContentLeftMenu.classList.remove("d-none");
        loginPage.classList.add("d-none");
        headerMenuSort.classList.add("d-block");
      });
    });

    userIconResponsive.addEventListener("click", () => {
      offcanvasContentLeftMenu.classList.remove("d-none");
      loginPage.classList.remove("d-none");
      headerMenuSort.classList.add("d-block");
      console.log("asd");
    });

    // نمایش محتواهای داخل منو کشویی سمت چپ
    sortOffcanvas.addEventListener("click", (event) => {
      menuOffcanvas.classList.remove("select_title_nav_toggler");
      menuOffcanvas.classList.add("disable_title_nav_toggler");
      sortOffcanvas.classList.add("select_title_nav_toggler");
      sortOffcanvas.classList.remove("disable_title_nav_toggler");
      sortContent.classList.remove("d-none");
      menuContent.classList.add("d-none");
    });

    menuOffcanvas.addEventListener("click", (event) => {
      sortOffcanvas.classList.remove("select_title_nav_toggler");
      sortOffcanvas.classList.add("disable_title_nav_toggler");
      event.target.classList.remove("disable_title_nav_toggler");
      event.target.classList.add("select_title_nav_toggler");
      sortContent.classList.add("d-none");
      menuContent.classList.remove("d-none");
    });

    userIconResponsive.addEventListener("click", () => {
      offcanvasContentLeftMenu.classList.add("d-none");
    });

    // گرفتن مشخصات کاربر از اینپوت ها
    enterBtn.addEventListener("click", () => {
      if (usernameInput.value.length >= 3 && passwordInput.value.length >= 4) {
        nameUser.forEach((user) => {
          user.innerHTML = usernameInput.value;
          localStorage.setItem('username' ,usernameInput.value )
        });
        iziToast.success({
          message: "ورود با موفقیت انجام شد",
          timeout: 2000,
          rtl: false,
          position: "topCenter",
          close: false,
          messageColor: "#00FF00", // متن سبز
          backgroundColor: "#333", // پس‌زمینه طوسی تیره
          progressBarColor: "#FFFFFF", // خط زیر پیام سفید
          transitionIn: "bounceInLeft",
          theme: "dark",
        });
        showPassword.className = "fa-solid fa-eye";
        hidePasswordInfo();
        usernameInput.value = "";
        passwordInput.value = "";
      } else {
        iziToast.error({
          title: "توجه",
          message:
            "پسورد باید بیشتر از 4 و نام کاربری باید بیشتر از 3 کاراکتر باشد",
          position: "topCenter",
          transitionInMobile: "fadeInRight",
          rtl: true,
          progressBarColor: "#b90f0f",
          close: false,
          timeout: 3100,
        });
        showPassword.className = "fa-solid fa-eye";
        hidePasswordInfo();
        usernameInput.value = "";
        passwordInput.value = "";
      }
    });

    // انیمیشن برای منوی سمت چپ
    document.addEventListener("DOMContentLoaded", () => {
      content.addEventListener("click", function () {
        colMenu.style.animation = "maxWidth 0.3s forwards";
      });
    });

    colMenu.addEventListener("mouseenter", () => {
      colMenu.style.animation = "maxWidth 0.3s forwards";
    });

    colMenu.addEventListener("mouseleave", () => {
      colMenu.style.animation = "minWidth 0.3s forwards";
    });

    // show & hide password
    function showPasswordInfo() {
      passwordInput.setAttribute("type", "text");
      showPassword.className = "fa-solid fa-eye-slash";
    }
    function hidePasswordInfo() {
      passwordInput.setAttribute("type", "password");
      showPassword.className = "fa-solid fa-eye float-start";
    }

    showPassword.addEventListener("click", () => {
      // showPassword.classList.toggle('<i class="fa-solid fa-eye-slash"></i>')
      if (flag) {
        // <i class="fa-solid fa-eye float-start"></i>
        showPassword.classList.toggle("fa-solid", "fa-eye-slash");
        showPasswordInfo();
        flag = false;
      } else {
        hidePasswordInfo();
        flag = true;
      }
    });

    //!!هماهنگی کلاس active با اون li که روش کلیک میشه add active class to li elem header

    allLiElemHeader.forEach((liElem) => {
      liElem.addEventListener("click", (event) => {

        
        allLiElemHeader.forEach((li)=>{
          // const aTag = li.querySelector('a')
          // aTag.classList.remove('active')
          let getLink= event.target.getAttribute('href') 
          localStorage.setItem("activeLiEelm", getLink);
        });
          
      });
    });
        
    let savedLink = localStorage.getItem("activeLiEelm")||window.location.pathname.split('/').pop()

    allLiElemHeader.forEach((li)=>{
      let aElem = li.querySelector('a')
      let aHref = aElem.getAttribute('href')
      

      
      if(aHref===savedLink){
        aElem.classList.add('active')    
        console.log(aElem);
              
      }else{
        aElem.classList.remove('active')
      }
      
    })
        
            
          
    
    // basket box

    
    basketHeadereBox.forEach((basket=>{
      basket.addEventListener('click',()=>{
        const offcanvasElement = document.querySelector(".offcanvasProduct");
        const bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);
        let productBody =offcanvasElement.querySelector('.product__body');
        console.log(productBody.childElementCount);
        
        bsOffcanvas.show();
        
    })
      }))




  }
}

export { Header };
