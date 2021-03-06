
const { html } = require('../../utils/misc')
const author = require('./author')

module.exports = (post) => 
    html`
        <a class="post-preview" 
                href="${post.meta.href || `/blog/${post.slug}`}" 
                target="${post.meta.href ? '_blank' : ''}" 
                rel="${post.meta.href ? 'external' : ''}"
                aria-label="${post.meta.title}" 
                itemscope 
                itemtype="http://schema.org/Article">
        
            <span itemProp="headline">
                ${post.meta.title}
            </span>

            &nbsp;
            &nbsp;

            ${post.wordCount ? 
                html`<span class="read-length">
                        ${Math.max(Math.round(post.wordCount / 200), 1)} minute read
                        <span style="display:none" itemProp="wordCount">${post.wordCount}</span>
                    </span>`
            : ''}

            ${post.meta.href ?
                html`
                    <span class="external-site">
                        ${/\/\/([a-z0-9\-]+\.[a-z]+)\//i.exec(post.meta.href)[1]}
                    </span>
                `
            : ''}

            <div class="flex-spacer"></div>

            ${author()}

            <time datetime="${post.meta.date}" itemProp="datePublished">
                ${post.meta.date}
            </time>
        </a>
    `