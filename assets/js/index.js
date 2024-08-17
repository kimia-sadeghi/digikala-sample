const ul = document.createElement('ul')
ul.style.paddingRight = '0'
 const contentCategories = document.querySelector('.content-category')
 let contentMenu = ''
 
var myDirectories=[
	{
		id:1,
		title:'موبایل',
		parentId:null
	},
	{
		id:2,
		title:'کالای دیجیتال',
		parentId:null
	},
	{
		id:3,
		title:'لوازم تحریر',
		parentId:null
	},
	{
		id:4,
		title:'برند های مختلف گوشی موبایل ',
		parentId:1
	},
	{
		id:8,
		title :'گوشی بر اساس قیمت',
		parentId:1

	},
	{
		id:5,
		title:'هندز فریی ها',
		parentId:1
	},
	{
		id:6,
		title:'دوربین عکاسی',
		parentId:2
	},
	{
		id:7,
		title:'ساعت هوشمند',
		parentId:2
	},

];


function autoMenuBuilder(){
	let categoryMenu = myDirectories.filter((el)=> {
	return el.parentId === null
}).map((el)=> {
	return el.title
})
for (let i=0 ; i< categoryMenu.length ; i ++ ) {
	let li = document.createElement('li')
	li.textContent = categoryMenu[i]
	li.classList.add('tablinks')
	ul.appendChild(li)	
	
	li.addEventListener('mouseover',()=> {
		
		

		console.log(categoryMenu[i])
		contentCategories.innerHTML="";// added by mahmoud
		let parentDiv = document.createElement('div')
			parentDiv.classList.add('content-products')
		if(categoryMenu[i] == 'موبایل'){
			let parentTitle = document.createElement('div')
			let contentTitle = document.createElement('a')
			contentTitle.setAttribute('href' ,'#')
			contentTitle.textContent ='همه ی محصولات موبایل'
			parentTitle.appendChild(contentTitle)
			contentCategories.appendChild(parentTitle)
			
			 contentMenu = myDirectories.filter((el)=> {
				return el.parentId == 1
			} ).map((el)=> {
				return el.title
			})
			for(let j =0 ; j < contentMenu.length; j++) {
				let div = document.createElement('div')
				div.textContent = contentMenu[j]
				console.log(contentMenu[j])
				parentDiv.appendChild(div)
				contentCategories.appendChild(parentDiv)
			}
			console.log(contentMenu)
		}

			
			if(categoryMenu[i] == 'کالای دیجیتال'){
				let parentTitle = document.createElement('div')
			let contentTitle = document.createElement('a')
			contentTitle.setAttribute('href' ,'#')
			contentTitle.textContent ='همه ی کالای دیجیتال'
			parentTitle.appendChild(contentTitle)
			contentCategories.appendChild(parentTitle)
				
			 contentMenu = myDirectories.filter((el)=> {
				return el.parentId == 2
			} ).map((el)=> {
				return el.title
			})

			for(let x =0 ; x < contentMenu.length; x++) {

				
				let div = document.createElement('div')
				div.textContent = contentMenu[x]
				console.log(contentMenu[x])
				parentDiv.appendChild(div)
				contentCategories.appendChild(parentDiv)
			}

			console.log(contentMenu)
		}
	})
}
document.querySelector('.products-title').appendChild(ul)
}

autoMenuBuilder()

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

