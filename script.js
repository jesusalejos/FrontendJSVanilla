const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuShoping = document.querySelector('.navbar-shopping-cart');
const productDetails = document.querySelector('#shopping-cart-container');
const isProductDetailsClosed = productDetails.classList.contains('inactive')
const cardsContainer = document.querySelector('.cards-container');
const productAside = document.getElementById('product-detail');
const isproductAsideClosed = productAside.classList.contains('inactive');
const productDetailClose = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburger.addEventListener('click', toggleMobileMenu);
menuShoping.addEventListener('click', toggleMyProduct);
productDetailClose.addEventListener('click', closeProductDetail);


function toggleDesktopMenu (){
	const isProductDetailsClosed = productDetails.classList.contains('inactive')

		if (!isProductDetailsClosed) {
		productDetails.classList.add('inactive');
	}


		

	desktopMenu.classList.toggle('inactive');
}



function toggleMobileMenu () {
const isProductDetailsClosed = productDetails.classList.contains('inactive')



	if (!isProductDetailsClosed) {
		productDetails.classList.add('inactive');
	}

closeProductDetail()


		mobileMenu.classList.toggle('inactive');
}

function toggleMyProduct () {

	const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
	

	

		if (!isMobileMenuClosed){
		mobileMenu.classList.add('inactive');
		
		
		}

		closeProductDetail()

		productDetails.classList.toggle('inactive');

}	

function openProductDetail() {
	productAside.classList.remove('inactive');
	productDetails.classList.add('inactive');

}

function closeProductDetail() {
	productAside.classList.add('inactive');

}
	
const productList = [];

productList.push({
	name: "Bike",
	price: 120,
	image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})


productList.push({
	name: "Screen",
	price: 220,
	image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})


productList.push({
	name: "Computer",
	price: 620,
	image: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

})

/*<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info"> 
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
*/

function renderProducts(arr) {

	for (product of arr){
	const productCard = document.createElement('div');
	productCard.classList.add('product-card');

	const productImg = document.createElement('img');
	productImg.setAttribute('src',product.image);
	productImg.setAttribute('alt',"No-carga-imagen")
	productImg.addEventListener('click', openProductDetail)

	const productInfo = document.createElement('div');
	productInfo.classList.add('product-info');

	const productInfoDiv = document.createElement('div');
	const productInfoPrice = document.createElement('p');
	productInfoPrice.innerText = '$' + product.price;
	const productInfoName = document.createElement('p');
	productInfoName.innerText = product.name;

	productInfoDiv.append(productInfoPrice,productInfoName);

	const productInfoFigure = document.createElement('figure');
	const productImgCard = document.createElement('img');
	productImgCard.setAttribute('src',"./icons/bt_add_to_cart.svg");

	productInfoFigure.appendChild(productImgCard);

	productInfo.append(productInfoDiv, productInfoFigure);

	productCard.append(productImg, productInfo);

	cardsContainer.append(productCard);

	}

}

renderProducts(productList);