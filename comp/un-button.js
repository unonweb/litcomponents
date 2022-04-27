import { LitElement, html, render, css } from "lit"

export class UnButton extends LitElement {
    
	static styles = css`
/* UN-BUTTON */

/* independent of theme */
button {
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 5px;
    border: none;
}
button:active {
    transition-property: background-color;
    transition-duration: 0.1s;
    transition-timing-function: ease-out;
}
button:focus {
  outline: 2px solid #006af5ab;
  outline-offset: 1px;
}

/* vaadin-1 */

:host([theme='vaadin-1'])
button {
	background-color: #006af5;
  	color: white;
	font-size: medium;
  	font-weight: bold;
}
:host([theme='vaadin-1'])
button:hover {
  background-color: #0064e7;
  color: #f1f1f1;
}
:host([theme='vaadin-1'])
button:active {
	background-color: #006af5b3;
}

/* vaadin-2 */

:host([theme='vaadin-2'])
button {
	font-size: medium;
	background-color: #e7e7e7;
	color: #005fdb;
}
:host([theme='vaadin-2'])
button:hover {
  background-color: #e3e3e3;
}
:host([theme='vaadin-2'])
button:active {
    background-color: #006af526;
}

/* vaadin-3 */

:host([theme='vaadin-3']) 
button {
  font-size: small;
  background-color: #fff0;
  color: #005fdb;
}
:host([theme='vaadin-3']) 
button:hover {
  background-color: #e3e3e342;
}
:host([theme='vaadin-3'])
button:active {
  background-color: #006af526;
}
`

	static properties = {
		theme: { type: String, reflect: true },
		btnTxt: { type: String, reflect: true },
	}

    constructor() {
        super()
		this.theme = 'vaadin-1'
		this.btnTxt = 'click'
    }

	render() {
		console.log('render() called')
		return html`
		<button>${this.btnTxt}</button>`
	}

    
}

customElements.define('un-button', UnButton)