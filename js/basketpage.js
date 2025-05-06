import { Header } from "../components/header.js";
import { Footer } from "../components/footer.js";
import * as utils from "../js/utils/productUtils.js";

window.customElements.define("site-header", Header);
window.customElements.define("site-footer", Footer);

let imgProduct = document.getElementById("imgProduct");
let nameProduct = document.getElementById("nameProduct");
let priceProduct = document.querySelector(".price__product");
let totalPrice = document.querySelectorAll(".total__price");
let tableBody = document.querySelector(".table-group-divider");
let inputs = document.querySelectorAll('.form-control')
let inputsTypeTel = document.querySelector('.type__Tel')
let inputsNationalNumber = document.querySelector('#nationalNumber')
let citySelect = document.querySelector('#city')
let townSelect = document.querySelector('#town')
let continueToPay = document.querySelector('#continueToPay')
let productBox = document.querySelector('.product__choose__box')
let informationForm = document.querySelector('.information__form')
let buyBasketHeader = document.querySelector('#buyBasketHeader')
let settlementHeader = document.querySelector('#settlementHeader')
let loading = document.querySelector('#loading')


let saveBasket = JSON.parse(localStorage.getItem("basket"));

saveBasket.forEach((element) => {
  tableBody.insertAdjacentHTML(
    "beforeend",
    `
    
                <tr class="align-baseline  product__item">
                  <td class="col-12">
                  <img id="imgProduct" class="img-fluid w-25 mx-3 img__product" src="${element.img}" alt="img">
                    <span id="nameProduct" class="text-nowrap">${element.name}</span>
                  </td>
                  <td class="text-secondary  col-12" data-label ="قیمت محصول">
                  <div>
                  <span class="price__product">${element.price}</span><span>تومان</span>
                  </div>
                  </td>
                  <td data-label ="تعداد" class="col-12">

                    <div class="btn-group btn-group-sm" dir="ltr" role="group">
                      <button type="button" class="btn btn-outline-secondary positive">+</button>
                     <button type="button" class="btn btn-primary pe-none numberproduct">${element.count}</button>
                      <button type="button" class="btn btn-outline-secondary negative">-</button>
                    </div>
                  </td>

                  <td data-label ="قیمت کل" class="text-primary fw-bold col-12">
                  <div>
                  <span class="price__total__item">${(+(element.count) * +(element.price.replace(/,/g ,""))).toLocaleString("en-US")}</span><span>تومان</span>
                  </div>
                  </td>
                  <td class="col-12"><i class="fa-solid fa-trash text-danger"></i></td>

                </tr>    
    `
  );

  totalPrice.forEach((total)=>{
    total.innerHTML =  (element.totalPrice).toLocaleString("en-US")
  })
});

// ?? کلیک روی + - و تغیر قیمت

tableBody.addEventListener('click' , (event)=>{
  
  let rowItem = event.target.closest('.product__item')
  let countProduct = rowItem.querySelector('.numberproduct')
  let priceProduct = rowItem.querySelector('.price__product')
  let priceTotalItem = rowItem.querySelector('.price__total__item')
  let totalPriceArray =[]


  // !! تبدیل قیمت واحد به عدد
  let priceProductTypeNum = +(priceProduct.innerHTML.replace(/,/g ,""))
  
  
// ?? plus

if(event.target.classList.contains('positive')){
let count = +(countProduct.innerHTML)
  count++
  countProduct.innerHTML=count  

  priceTotalItem.innerHTML = (count * priceProductTypeNum ).toLocaleString('en-US')

updateTotalPrice()
  
}

if(event.target.classList.contains('negative')){
  let count = +(countProduct.innerHTML)
  if(count>1){
    count--
    countProduct.innerHTML=count
  }
  priceTotalItem.innerHTML = (count * priceProductTypeNum ).toLocaleString('en-US')


  updateTotalPrice()

}



if(event.target.classList.contains('fa-trash')){
  let productName = rowItem.querySelector('#nameProduct').innerHTML.trim();
  let basket = JSON.parse(localStorage.getItem('basket'))
 let updatedBasket = basket.filter(item=>item.name!==productName)
  localStorage.setItem('basket' ,JSON.stringify(updatedBasket))
rowItem.remove()
updateTotalPrice()

iziToast.success({
  message: "محصول با موفقیت حذف شد.",
  timeout: 2100,
  rtl: true,
  position: "topCenter",
  close: false,
  messageColor: "#FF4C4C", // متن سبز
  backgroundColor: "#333", // پس‌زمینه طوسی تیره
  progressBarColor: "#FFFFFF", // خط زیر پیام سفید
  transitionIn: "bounceInLeft",
  theme: "dark",
});



}
})


//?? به‌روزرسانی مجموع نهایی سبد خرید

function updateTotalPrice(){
  let totalPriceElements = document.querySelectorAll('.total__price');
  totalPriceElements.forEach(el => {
    el.innerHTML = `<div class="spinner-border text-primary spinner-border-sm" role="status"></div>`;
  });
  setTimeout(() => {
    
    let allRows = document.querySelectorAll('.product__item')
    let sum =0
    
    
    allRows.forEach((row)=>{
      let rowProduct = row.querySelectorAll('.price__total__item')      
      
      rowProduct.forEach((priceItem)=>{
        let priceTypeNum= +(priceItem.innerHTML.replace(/,/g,''))   
        sum+=priceTypeNum                    
      })
    })
    
   
    
    totalPriceElements.forEach((total)=>{
      total.innerHTML = sum.toLocaleString('en-US')
    })


    
    
  },700);
    
  }




  // ?? قسمت گرفتن مشخصات از input ها

  inputs.forEach((input)=>{
    input.addEventListener('input' ,(event)=>{
      
if(input.checkValidity()&&input.value.length>=3){
      input.classList.add('is-valid')
      input.classList.remove('is-invalid')
}else{
  input.classList.add('is-invalid')
  input.classList.remove('is-valid')
}          
if(input.value.length===0){
  input.classList.remove('is-invalid')
  input.classList.remove('is-valid')
}
    })
  })


// !! برای input type tel شماره تماس
  
  inputsTypeTel.addEventListener('input' , ()=>{
    inputsTypeTel.value = inputsTypeTel.value.replace(/\D/g, '');
    if(inputsTypeTel.checkValidity()&&inputsTypeTel.value.length===11){
      inputsTypeTel.classList.add('is-valid')
      inputsTypeTel.classList.remove('is-invalid')
}else{
  inputsTypeTel.classList.add('is-invalid')
  inputsTypeTel.classList.remove('is-valid')
}          
if(inputsTypeTel.value.length<=0){
  inputsTypeTel.classList.remove('is-invalid')
  inputsTypeTel.classList.remove('is-valid')
}
  })


  // !!کدملی
  inputsNationalNumber.addEventListener('input' , ()=>{

    inputsNationalNumber.value = inputsNationalNumber.value.replace(/\D/g, '');
    if(inputsNationalNumber.checkValidity()&&inputsNationalNumber.value.length===10){
      inputsNationalNumber.classList.add('is-valid')
      inputsNationalNumber.classList.remove('is-invalid')
}else{
  inputsNationalNumber.classList.add('is-invalid')
  inputsNationalNumber.classList.remove('is-valid')
}          
if(inputsNationalNumber.value.length<=0){
  inputsNationalNumber.classList.remove('is-invalid')
  inputsNationalNumber.classList.remove('is-valid')
}
console.log(inputsNationalNumber.checkValidity());

  })


  //?? هماهنگی استان و شهر

    citySelect.addEventListener('change' , ()=>{
      townSelect.innerHTML=''
      let defaultOption = document.createElement('option')
        defaultOption.innerHTML = 'حالا نام شهر خود را انتخاب کنید'
        defaultOption.disabled=true
        defaultOption.selected=true
        townSelect.appendChild(defaultOption);


      provinces[citySelect.value].forEach((town)=>{
        let optionElem = document.createElement('option')
          optionElem.innerHTML=town
            townSelect.appendChild(optionElem)          
      })   

    })


// !! استان ها با شهرستان ها
  const provinces = {
    "آذربایجان شرقی": ["تبریز", "مراغه", "مرند", "میانه"],
    "آذربایجان غربی": ["ارومیه", "خوی", "مهاباد", "بوکان"],
    "اردبیل": ["اردبیل", "مشگین‌شهر", "خلخال"],
    "اصفهان": ["اصفهان", "کاشان", "خمینی‌شهر", "نجف‌آباد"],
    "البرز": ["کرج", "نظرآباد", "طالقان"],
    "ایلام": ["ایلام", "دهلران", "مهران"],
    "بوشهر": ["بوشهر", "دشتستان", "کنگان", "جم"],
    "تهران": ["تهران", "اسلامشهر", "ری", "پردیس"],
    "چهارمحال و بختیاری": ["شهرکرد", "بروجن", "فارسان"],
    "خراسان جنوبی": ["بیرجند", "قائن", "فردوس"],
    "خراسان رضوی": ["مشهد", "نیشابور", "تربت حیدریه", "سبزوار"],
    "خراسان شمالی": ["بجنورد", "شیروان", "اسفراین"],
    "خوزستان": ["اهواز", "آبادان", "خرمشهر", "دزفول", "ایذه"],
    "زنجان": ["زنجان", "ابهر", "خرمدره"],
    "سمنان": ["سمنان", "شاهرود", "دامغان"],
    "سیستان و بلوچستان": ["زاهدان", "ایرانشهر", "چابهار", "خاش"],
    "فارس": ["شیراز", "مرودشت", "لار", "جهرم", "فسا"],
    "قزوین": ["قزوین", "الوند", "تاکستان"],
    "قم": ["قم"],
    "کردستان": ["سنندج", "سقز", "بیجار", "مریوان"],
    "کرمان": ["کرمان", "رفسنجان", "جیرفت", "سیرجان"],
    "کرمانشاه": ["کرمانشاه", "اسلام‌آباد غرب", "پاوه"],
    "کهگیلویه و بویراحمد": ["یاسوج", "دهدشت", "چرام"],
    "گلستان": ["گرگان", "گنبد کاووس", "علی‌آباد", "آق‌قلا"],
    "گیلان": ["رشت", "لاهیجان", "انزلی", "آستانه"],
    "لرستان": ["خرم‌آباد", "بروجرد", "دورود", "الیگودرز"],
    "مازندران": ["ساری", "بابل", "آمل", "قائم‌شهر", "نوشهر"],
    "مرکزی": ["اراک", "ساوه", "خمین"],
    "هرمزگان": ["بندرعباس", "قشم", "بندر لنگه", "میناب"],
    "همدان": ["همدان", "ملایر", "نهاوند"],
    "یزد": ["یزد", "میبد", "اردکان"]
  };
  

  // ??دکمه ادامه تسویه حساب

function settlementHandel(){ 
  productBox.classList.add('d-none')
  loading.classList.remove('d-none')
  setTimeout(() => {
  loading.classList.add('d-none')
  informationForm.classList.remove('d-none')
}, 1000);
  buyBasketHeader.classList.remove('text-white')
  settlementHeader.classList.add('text-white')
}
  
  continueToPay.addEventListener('click' , settlementHandel)
  settlementHeader.addEventListener('click' , settlementHandel)


  buyBasketHeader.addEventListener('click' , (event)=>{
    event.preventDefault()
    loading.classList.remove('d-none')
    setTimeout(() => {
      loading.classList.add('d-none')
      productBox.classList.remove('d-none')
}, 1000);
informationForm.classList.add('d-none')
    buyBasketHeader.classList.add('text-white')
  settlementHeader.classList.remove('text-white')

  })