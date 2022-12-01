// To get name of signed In user
let x=localStorage.getItem("user");

if (x == null){
  document.getElementById("showEmailUser").textContent = "SIGN IN/UP";
} else {
  document.getElementById("showEmailUser").textContent = x;
}


// navbar start
var btn = document.getElementById("disappear")
function divAppear() {
  var cll = document.getElementById("shop_hover");
  cll.style.display = "grid";
  cll.style.background = "white";
}
btn.addEventListener("mouseover", divAppear);

// work on div of shop_hover =>

var cll = document.getElementById("shop_hover");
function divDisappear() {
  cll.style.display = "none";
}
cll.addEventListener("mouseleave", divDisappear);
// navbar end

// best seller
var startIndex = 0;
let prod_div = document.getElementById('products'); // DOM part
var productsData = [
  {
      name: 'RMS BEAUTY',
      desc: 'Limmited Edition Lip Veil',
      price: 22,
      image: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-elson5-843004109849-1_288x288.jpg?v=1669685798',
  },
  {
      name: 'DR. BARBARA STRUM',
      desc: 'C E Ferulic',
      price: 110,
      image: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-635494263008-1_288x288.jpg?v=1667501812'
  },
  {
      name: 'CHANTECAILLE',
      desc: 'Limmited Edition body cream',
      price: 49,
      image: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-nude-656509014057-1_288x288.jpg?v=1669755972'
  },
  {
      name: 'SKYN ICELAND',
      desc: 'Phyto Corrective Essense Mist',
      price: 70,
      image: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3337875742511-1_288x288.jpg?v=1666705152'
  },
  {
      name: 'LEGOLOGY',
      desc: 'Air-Lite Daily Lift for Legs',
      price: 65,
      image: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-6oz-5060367410008-1_525x525.jpg?v=1624638493'
  },
  {
      name: 'TOM FORD',
      desc: 'Hyaluronic Energizing Mist',
      price: 50,
      image: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-888066081870-1_525x525.jpg?v=1626725435'
  },
  {
      name: 'RMS BEAUTY',
      desc: 'Back2brow Brow Powder',
      price: 22,
      image: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-light-816248022212-1_600x600_crop_center.jpg?v=1624896973',
  },
  {
      name: 'DR. BARBARA STRUM',
      desc: 'Darker Skin Tones Discovery Kit',
      price: 110,
      image: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-lightmedium-5035832105635-1_600x600_crop_center.jpg?v=1626725428'
  },
]

/*******************************
Start first slideshow
*******************************/


function slideshowBestSellers() {
  let slide_img = document.getElementById('slide-img');
  let img = document.createElement('img');

  let best_sellers_arr = ['https://cdn.shopify.com/s/files/1/0283/0185/2747/files/earn-redeem-july-hero-des.jpg?v=1626210704',
   'https://cdn.shopify.com/s/files/1/0283/0185/2747/files/m61-cooling-eye-gel-hero-des.jpg?v=1626212604', 
   'https://cdn.shopify.com/s/files/1/0283/0185/2747/files/hp-hero-holiday-party-2022-hero-des-2_1300x.jpg?v=1668117635',
    'https://cdn.shopify.com/s/files/1/0283/0185/2747/files/suyb-fabienne-hero-des.jpg?v=1626106125'];

  img.src = best_sellers_arr[0];
  img.style.width = '100%';
  slide_img.append(img);
  let i = 1;
  setInterval(function () {
      img.src = best_sellers_arr[i % best_sellers_arr.length];
      img.style.width = '100%';
      i++;
      slide_img.append(img);
  }, 3000);

  let dots = document.getElementById('dots-slide');
  let dot_div = document.createElement('div');
  dot_div.style.display = 'inline-block';
}

slideshowBestSellers();
// END SLID ROW

function productShow(startIndex, numOfProd) {

  // console.log("startIndex first: ", startIndex)
  prod_div.innerHTML = null;

  for (var i = startIndex; i < numOfProd; i++) {

      let div = document.createElement('div'); // Div for single products 

      let img = document.createElement('img');
      img.src = productsData[i].image;

      let p_name = document.createElement('p');
      p_name.innerHTML = productsData[i].name;
      // p.style.cursor="pointer"

      let p_desc = document.createElement('p');
      p_desc.innerHTML = productsData[i].desc;

      let p_price = document.createElement('p');
      p_price.innerHTML = "$" + productsData[i].price;

      div.append(img, p_name, p_desc, p_price);
      div.style.display = 'inline-block';
      prod_div.append(div);

      // Merging of the Product page

      img.addEventListener("click", function () {
          window.location.href = product.html;
          
      });

      p_name.addEventListener("click", function () {
          window.location.href = "product.html";
      });

      p_price.addEventListener("click", function () {
          window.location.href = "product.html";
      });
  }
}

var numOfProd = 4;
productShow(0, numOfProd);
// Carousel Section Sliding 
let a = 4;
let b = 8;
var next = document.getElementById('nextSlider-btn');
next.addEventListener('click', () => {
  productShow(a, b);
  a = 0;
  b = 4
});

var prev = document.getElementById('prevSlider-btn');
prev.addEventListener('click', () => {
 
  productShow(a, b);
  a = 0;
  b = 4
});