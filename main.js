const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerMenuIcon = document.querySelector(".menu");
const menuCartIcon = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const shoppingCartContainer = document.querySelector('#shopping-cart-container')
const productDetailContainer = document.getElementById('product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenuIcon.addEventListener('click',toggleMobileMenu);
menuCartIcon.addEventListener('click',toggleCartAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside)

function toggleDesktopMenu(){

    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive')    
    }

    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu(){
    
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive')    
    }

    closeProductDetailAside()

    mobileMenu.classList.toggle('inactive')
}

function toggleCartAside(){{

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive')
    
    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive')
    }

    shoppingCartContainer.classList.toggle('inactive')
    
}}


function openProductDetailAside() {

    shoppingCartContainer.classList.add('inactive')

    productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive')
}

function loadProducts(){
    const container = document.querySelector('.cards-container')
    productList.forEach((item) => {

        let productContainer = document.createElement('div')
        productContainer.classList.add('product-card')
        productContainer.innerHTML = `
            <img src="${item.image}" alt="">
            <div class="product-info">
            <div>
                <p>$${item.price}</p>
                <p>$${item.name}</p>
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
            </div>
        `
        
        const productImg = productContainer.firstElementChild
        productImg.addEventListener('click', openProductDetailAside)
        container.appendChild(productContainer)
    })
}

const productList = []

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Monitor',
    price: 320,
    image: 'https://displaysolutions.samsung.com/static/images/feature_new/monitor/g77t-pc-01.jpg'
})

productList.push({
    name: 'Nissan Versa',
    price: 22000,
    image: 'https://www.elcarrocolombiano.com/wp-content/uploads/2022/02/20220209-NISSAN-VERSA-MEJOR-AUTO-SUBCOMPACTO-POR-SU-VALOR-01.jpg'
})

loadProducts()