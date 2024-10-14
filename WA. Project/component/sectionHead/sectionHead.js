const template = document.createElement('template')

template.innerHTML = `
                    <link rel="stylesheet" href="component/sectionHead/sectionHead.css">
                    <div class="section-head">
                        <h3 class="section-head__title"></h3>
                        <p class="section-head__caption"></p>
                        <span class="section-head__line"></span>
                    </div>`

class SectionHead extends HTMLElement {
    constructor () {
        super()
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    connectedCallback() {
        this.shadowRoot.querySelector('h3').innerHTML = this.getAttribute('title')
        this.shadowRoot.querySelector('p').innerHTML = this.getAttribute('caption')
    }
    static observedAttributes () {
        return ['title', 'caption']
    }
}
export {SectionHead}