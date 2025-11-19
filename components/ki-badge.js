// ki-badge.js

class KiBadge extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._name = 'Employee Name'; // Default internal state and size
        this._title = 'Role/Title';   // Default internal state
    }

    // 1. Specify which attributes to observe for changes
    static get observedAttributes() {
        return ['name', 'title'];
    }

    // 2. Lifecycle method: Runs when an observed attribute changes
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'name') {
            this._name = newValue;
        }
        if (name === 'title') {
            this._title = newValue;
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
            .badge {
                display: inline-flex;
                flex-direction: column;
                padding: 15px 20px;
                border: 1px solid #ddd;
                border-left: 5px solid #007bff; /* Accent color */
                border-radius: 5px;
                background-color: #f7f7f7;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                margin: 10px;
            }
            .name {
                font-size: 1.1em;
                font-weight: 700;
                color: #333;
                margin-bottom: 5px;
            }
            .title {
                font-size: 0.9em;
                color: #555;
            }
        `;

        const template = `
            <style>${styles}</style>
            <div class="badge">
                <span class="name">${this._name}</span>
                <span class="title">${this._title}</span>
            </div>
        `;

        shadow.innerHTML = template;
    }
}

// 5. Register the component
customElements.define('ki-badge', KiBadge);
