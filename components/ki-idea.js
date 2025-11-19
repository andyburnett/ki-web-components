// ki-idea.js

class KiIdea extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._text = 'Your idea here...'; // Default internal state
    }

    // 1. Specify which attributes to observe for changes
    static get observedAttributes() {
        return ['text'];
    }

    // 2. Lifecycle method: Runs when an observed attribute changes
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'text') {
            this._text = newValue;
        }
        this.render();
    }

    // 3. Lifecycle method: Called when the element is first inserted into the DOM
    connectedCallback() {
        this.render();
    }

    // 4. The rendering function (combines HTML, CSS, and dynamic data)
    render() {
        const shadow = this.shadowRoot;
        if (!shadow) return;

        const styles = `
            .idea-note {
                position: relative;
                width: 200px;
                height: 200px;
                background: #ffc; /* Post-it yellow */
                padding: 20px;
                font-family: 'Comic Sans MS', cursive, sans-serif;
                font-size: 1.2em;
                box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
                overflow: hidden; /* Hide the part of the corner that goes outside */
            }

            .idea-note::after {
                content: '';
                position: absolute;
                bottom: 0;
                right: 0;
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 0 0 40px 40px; /* Creates the triangle */
                border-color: transparent transparent #fff transparent; /* White folded corner */
                box-shadow: -2px -2px 5px rgba(0,0,0,0.2);
            }

            .text {
                white-space: pre-wrap; /* Respects newlines and spaces */
            }
        `;

        const template = `
            <style>${styles}</style>
            <div class="idea-note">
                <span class="text">${this._text}</span>
            </div>
        `;

        shadow.innerHTML = template;
    }
}

// 5. Register the component
customElements.define('ki-idea', KiIdea);
