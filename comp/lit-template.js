import { LitElement, html, render, css } from "lit"

export class UnButton extends LitElement {
    static properties = {
		theme: { type: String, reflect: true },
		value: { type: String, reflect: true },
	}
    
	static styles = css`
/* independent of theme */

/* primary theme */

/* secondary theme */

/* tertiary theme */

`
    constructor() {
        super()
		this.theme = 'primary'
		this.value = 'click'
    }

	render() {
		return html`
		<button>${this.value}</button>`
	}

    
}

customElements.define('un-message-input', UnMessageInput)