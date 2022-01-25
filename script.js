const form = document.querySelector('form')
const ul = document.querySelector('ul')
const input = form.querySelector('input')

ul.addEventListener('click', (ev)=> {
	const li = ev.target.parentNode
	const action = ev.target.getAttribute('data-action')
	const span = li.querySelector('span')
	const value = span.innerHTML

	if(ev.target.tagName === 'BUTTON') {
		if(action === 'delete') {
			li.parentNode.removeChild(li)
		} 
		if(action === 'add') {
			span.innerHTML = value*1 + 1
		} 
		if(action === 'minus'){
			span.innerHTML = value*1  - 1
		}
	}
}, false)

form.addEventListener('submit', (ev) => {
	ev.preventDefault()
	const value = input.value
	if(isNaN(value)) {
		return alert( 'Numbers Only')  
	}
	const li = document.createElement('li')
	li.innerHTML = `
		<span>${value}</span>
		<button data-action="delete">x</button>
		<button data-action="add">+</button>
		<button data-action="minus">-</button>
	`
	ul.appendChild(li)
	input.value = ''
} ,false)