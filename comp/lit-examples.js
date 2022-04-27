import { LitElement, html, render, css } from "lit"

export class UnLitExamples extends LitElement {
    static properties = {
		theme: { type: String, reflect: true },
		value: { type: String, reflect: true },
		items: { type: String, reflect: true },
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

	get _items() {  
		return this.items.split(' ')
	}

	render() {
		/* example of nested templates */
		return html`
			<fieldset>
				<legend ?hidden=${!this.legend}>${this.legend}</legend>
				${this._items.map(item => {
					return html`
						<input type="radio" name="group" id=${item}>
						<label for=${item}>${item}</label>${this.setAlignment()}
					`
				})}
			</fieldset>		
		`
	}

    setAlignment() {
		if (this.orientation == 'horizontal') {
			return
		}
		if (this.orientation == 'vertical') {
			return html`<br>`
		}
	}
}