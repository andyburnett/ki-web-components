// ki-guidelines.js

class KiGuidelines extends HTMLElement {
    constructor() {
        super();
        // 1. Attach a Shadow Root for style and markup encapsulation
        this.attachShadow({ mode: 'open' }); 

        // 2. Define the CSS (wrapped in a <style> tag)
        const styles = `
            .guidelines-container {
                display: flex; 
                flex-wrap: wrap; 
                gap: 20px; 
                justify-content: center; 
                max-width: 1000px; 
                margin: 0 auto; 
                padding: 15px;
                border: 1px solid #ddd;
                border-radius: 8px;
                background-color: #fff;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }

            .guideline-block {
                flex: 1; 
                min-width: 280px; 
                padding: 15px;
                background-color: #f9f9f9;
                border: 1px solid #eee;
                border-radius: 5px;
            }

            .guideline-block h2 {
                color: #333;
                border-bottom: 2px solid #007bff;
                padding-bottom: 5px;
                margin-bottom: 15px;
            }

            .guideline-block ul {
                list-style-type: disc; 
                padding-left: 20px;
                margin: 0;
            }

            .guideline-block li {
                margin-bottom: 8px;
                line-height: 1.5;
            }

            /* Media query for very small screens */
            @media (max-width: 600px) {
                .guideline-block {
                    min-width: 100%; 
                }
            }
        `;

        // 3. Define the HTML structure
        const template = `
            <style>${styles}</style>
            <div class="guidelines-container">
                <div class="guideline-block">
                    <h2>Divergent Guidelines:</h2>
                    <ul>
                        <li>Delay your judgment</li>
                        <li>Build on other ideas</li>
                        <li>Seek wild and unusual ideas</li>
                        <li>Seek Quantity</li>
                    </ul>
                </div>

                <div class="guideline-block">
                    <h2>Convergent Guidelines:</h2>
                    <ul>
                        <li>Use Affirmative Judgment</li>
                        <li>Check Objectives</li>
                        <li>Seek novelty</li>
                        <li>Improve on Options</li>
                    </ul>
                </div>
            </div>
        `;

        // 4. Inject the content into the Shadow Root
        this.shadowRoot.innerHTML = template;
    }
}

// 5. Register the component
customElements.define('ki-guidelines', KiGuidelines);
