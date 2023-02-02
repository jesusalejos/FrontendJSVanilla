const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuShoping = document.querySelector('.navbar-shopping-cart');
const productDetails = document.querySelector('.product-detail');
const isProductDetailsClosed = productDetails.classList.contains('inactive')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburger.addEventListener('click', toggleMobileMenu);
menuShoping.addEventListener('click', toggleMyProduct);


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


		mobileMenu.classList.toggle('inactive');
}

function toggleMyProduct () {

	const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
	

		if (!isMobileMenuClosed){
		mobileMenu.classList.add('inactive');
		
		}

		productDetails.classList.toggle('inactive');
		

}	
	
