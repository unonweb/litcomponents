import { LitElement, html, render, css } from "lit"
import { UnDropDown } from "./un-dropdown";

export class UnMenuBar extends LitElement {
    
	static styles = css`

/* UN-MENU-BAR */

/* independent of theme */

.wrap-1 {
    display: flex;
    justify-content: space-between;
    margin-left: 5px;
    margin-right: 5px;
    align-items: center;
    border-bottom: thin solid black;
    padding: 3px;
}

#left {
    font-size: large;
}
/* theme="manu" */

:host([theme='manu']) a {
    color: black;
    margin-left: 5px;
    margin-right: 5px;
    text-decoration-line: none;
}
:host([theme='manu']) a:hover {
    color: darkblue;
}
:host([theme=manu]) a.active {
    border-bottom: thin solid darkblue;
}
`

    static properties = {
        theme: { type: String, reflect: true },
        themeDropdown: { type: String, reflect: true, attribute: 'theme-dropdown' },
        value: { type: String, reflect: true },
    }
    constructor() {
        super()
		this.value = 'click'
    }

    firstUpdated() {
        this.linkElements = this.shadowRoot.querySelectorAll('a')
    }

    render() {
        return html`
        <div class="wrap-1">
            <div id="left">
                <a href="#home">Manuel Dieterich</a>
            </div>
            <div id="right">
                <un-dropdown title="links" overlay theme=${this.themeDropdown}>
                    <div>Profile</div>
                    <div>Preferences</div>
                    <div>Community</div>
                    <hr slot="separator">
                    <div slot="last">Sign Out</div>
                </un-dropdown>
                <a href="#un-dropdown" @click=${evt => this.handleActive(evt)}>un-dropdown</a>
                <a href="#un-button" @click=${evt => this.handleActive(evt)}>un-button</a>
            </div>
        </div>
        `
    }

    handleActive(evt) {
        this.linkElements.forEach(el => el.classList.remove('active'))
        evt.target.classList.add('active')
    }

	render_slot() {
		return html`
        <div class="wrapper">
            <slot name="home"></slot>
            <slot name="item"></slot>
        </div>
        `
	}

    
}

customElements.define('un-menu-bar', UnMenuBar)