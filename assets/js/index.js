const ul = document.createElement('ul')
ul.style.paddingRight = '0'

const subItems = ['موبایل', 'کالای دیجیتال' , ' لوازم تحریر','خانه و آشپزخانه','آرایشی و بهداشتی' ]

for (let i=0 ; i< subItems.length ; i ++ ) {
	let li = document.createElement('li')
	li.textContent = subItems[i]
	li.classList.add('tablinks')
	ul.appendChild(li)	

	li.addEventListener('click' , function() {
		console.log('hi li')
	})
}
document.querySelector('.products-title').appendChild(ul)

const mobileCategories = [
	{
		title : 'برندهای مختلف گوشی موبایل',
		link :'#brand',
		content : ['ایفون' , 'سامسونگ ' , 'شیامی']

	},
	{
		title : 'گوشی بر اساس قیمت',
		link :'#base-price',
		content : ['ارزان قیمت' , 'قسطی']

	},
	{
		title : 'لوازم جانبی موبایل' ,
		link :'#accessories',
		content : ['شارژ گوشی' , 'قاب گوشی' , 'گلس گوشی'] 
	}
]

const mobilesCate = document.querySelector('.mobile-category')

function names() {
	mobileCategories.map((el) => {
	let divCategory = document.createElement('div')
	let catTitle = document.createElement('a')
	
	let subContent = el.content
	let listContent = document.createElement('div')
	catTitle.textContent = el.title
	catTitle.setAttribute('href' , el.link)
	catTitle.classList.add ('title')

	for (let i=0 ; i< subContent.length ; i ++ ) {
		let content = document.createElement('a')
		content.textContent = subContent[i]
		content.setAttribute('href' , el.link)
		content.classList.add('sub-content')

		
	listContent.appendChild(content)	
	console.log(listContent)
}

	divCategory.appendChild(catTitle)
	divCategory.appendChild(listContent)
	mobilesCate.appendChild(divCategory)


})

}

names()

// const names = mobileCategories.map((el) => {
// 	let divCategory = document.createElement('div')
// 	let catTitle = document.createElement('a')
// 	catTitle.textContent = el.title
// 	catTitle.setAttribute('href' , el.link)
// 	catTitle.classList.add ('title')



// 	divCategory.appendChild(catTitle)
// 	// divCategory.appendChild(content)
// 	mobilesCate.appendChild(divCategory)

// 	return catTitle
// })



// const names = mobileCategories.forEach((el) => {
// 	let catTitle = document.createElement('a')
// 	catTitle.textContent = el.title
// 	catTitle.setAttribute('href' , el.link)
// 	catTitle.classList.add ('title')
// 	mobilesCate.appendChild(catTitle)

// 	return catTitle
// })


// function openContents(evt , kala) {
// 	var i , tabcontent, tablinks

// 	tabcontent = document.querySelector('.tabcontent')

// 	for (i =0; i< tabcontent.length; i++) {
// 		tabcontent[i].style.display = 'none'
// 	}

// 	tablinks = document.querySelector('.tablinks')
// 	for (i =0 ; i <tablinks.length ; i++) {
// 		tablinks[i].className = tablinks[i].className.replace(" active", "");
// 	}

// 	document.getElementById(kala).style.display = 'block'
// 	evt.currentTarget.className += " active";
// }



document.addEventListener('DOMContentLoaded' , function() {
	
	const productCategories = document.querySelector('.product-categories')
	const submenu = document.querySelector('.sub-menu')
	const subItems = document.querySelector('.sub-items')
	const overlab = document.querySelector('.overlab')
	productCategories.addEventListener ('mouseover' , function() {
			submenu.style.display = 'flex'
			overlab.style.display = 'block'
	})

	productCategories.addEventListener ('mouseout' , function() {
			submenu.style.display = 'none'
	})
	submenu.addEventListener ('mouseover' , function() {
			submenu.style.display = 'flex'
	})
	// subItems.querySelector('li:first-child').classList.add('hover')
	submenu.addEventListener ('mouseout' , function() {
			submenu.style.display = 'none'
			overlab.style.display = 'none'
			// subItems.querySelector('li:first-child').classList.remove('hover')
	})
})

