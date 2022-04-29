import { LitElement, html, render, css } from "lit"
import { UnButtonLight } from "./un-button-light"

export class UnDropDownLight extends LitElement {
    
 	static properties = {
		openOn: { type: String, reflect: true },
		title: { type: String, reflect: true },
		theme: { type: String, reflect: true },
		overlay: { type: Boolean, reflect: true },

	}

    constructor() {
        super()
		this.openOn = 'click'
		this.title = 'menu'
		this.theme = 'vaadin-1'
		this.overlay = false
    }

	createRenderRoot() {
		return this;
	}

	connectedCallback() {
		super.connectedCallback() 
		/* document.addEventListener('click', evt => {
			
			const dropContents = this.shadowRoot.querySelectorAll('.drop-content')

			dropContents.forEach(el => {
				// if el does not contain the point where the user clicked, remove the active class from it
				if (!el.contains(evt.target)) el.classList.remove('active')
			})
			
		}) */
	}

    // Render the UI as a function of component state
    render() {
        console.log('UnDropDown render() called')

        return html`
            ${this.tempButton()}
            <div class="drop-content">
				<div>Profile</div>
				<div>Preferences</div>
				<div>Community</div>
				<hr>
				<div>Sign Out</div>
            </div>`
    }

	tempButton() {
		switch (this.openOn) {
			case 'click':
				return html`
					<un-button-light 
						btnTxt=${this.title}
						theme=${this.theme}
						@click=${evt => this.toggleClass(evt.target, 'active', '.drop-content', 'first')}>
					</un-button-light>`
			case 'hover':
				return html`
					<un-button-light 
						btnTxt=${this.title}
						theme=${this.theme}
						@mouseover=${evt => this.addClass(evt.target, 'active', '.drop-content', 'next')}
						@click=${evt => this.rmClass(evt.target, 'active', '.drop-content', 'next')}>
					</un-button-light>`
		}
	}

    toggleClass(srcBtn, cls, destSel, selMode) {
		console.log('toggleClass() called')
		let destElements = []

		if (selMode === 'all') destElements = this.querySelectorAll(destSel)
		if (selMode === 'first') destElements.push(this.querySelector(destSel))
		if (selMode === 'next') destElements.push(this.getNextSibWithSel(srcBtn, destSel))

        destElements.forEach(el => el.classList.toggle(cls))
    }

	addClass(srcBtn, cls, destSel, selMode) {
		//console.log('addClassToSel called with: ', cls, destSel)

		let destElements = []

		if (selMode === 'all') destElements = this.querySelectorAll(destSel)
		if (selMode === 'first') destElements.push(this.querySelector(destSel))
		if (selMode === 'next') destElements.push(this.getNextSibWithSel(srcBtn, destSel))

		//console.log('desElements: ', destElements)
		destElements.forEach(el => el.classList.add(cls))
	}

	rmClass(srcBtn, cls, destSel, selMode) {
		
		let destElements = []

		if (selMode === 'all') destElements = this.querySelectorAll(destSel)
		if (selMode === 'first') destElements.push(this.querySelector(destSel))
		if (selMode === 'next') destElements.push(this.getNextSibWithSel(srcBtn, destSel))

		destElements.forEach(el => el.classList.remove(cls))
	}

    getNextSibWithSel(startEl, sel) {
        let sibling = startEl.nextElementSibling
		// If there's no selector, return the first sibling
		if (!sel) return sibling
        // If the sibling matches our selector, use it
        // If not, jump to the next sibling and continue the loop
        while (sibling) {
            if (sibling.matches(sel)) {
                //console.log('matching sibling found: ', sibling)
                return sibling
            }
            sibling = sibling.nextElementSibling
        }
    }
}

customElements.define('un-dropdown-light', UnDropDownLight)