(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const DomBuilder = (what, where) => {
	document.querySelector(where).appendChild(what)
}

module.exports = DomBuilder
},{}],2:[function(require,module,exports){

const DomBuilder = require("./DomBuilder")





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
	cardTextInput.value = ""
	output.appendChild(cardFactory("card", text))
})

fragment.appendChild(button)

// create card component
const cardFactory = (classList, textContent) => {
	const theSection = document.createElement("section")
	theSection.classList = classList
	theSection.textContent = textContent
	return theSection
}

DomBuilder(fragment, ".output")
},{"./DomBuilder":1}]},{},[1,2]);
