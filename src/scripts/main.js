//reference to document when writing to the DOM
const output = document.querySelector(".output")

//document fragment to buffer adding to the DOM
const fragment = document.createDocumentFragment()

// create factory function to generate components

// create input component
const inputFieldFactory = (classList, defaultPlaceholderText, type) => {
	const inputField = document.createElement("input")
	inputField.setAttribute("type", type)
	inputField.classList = classList
	inputField.placeholder = defaultPlaceholderText
	return inputField
}


// create button component
const buttonFactory = (classList, textContent) => {
	const theButton = document.createElement("button")
	theButton.classList = classList
	theButton.textContent = textContent
	return theButton
}
const cardTextInput = inputFieldFactory("input--text", "Enter card text here", "text")

fragment.appendChild(cardTextInput)

/*
attach event listener to button
1. Get value of input field
2. Create card component with text inside
*/
const button = buttonFactory("button--submit", "Create Card")
button.addEventListener("click", function () {
	const text = cardTextInput.value
})

fragment.appendChild(button)

output.appendChild(fragment)
// create card component


