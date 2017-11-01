let markdown = require('gitbook-markdown');

function processTour(block) {
    let blocks = block.blocks.filter(block => !block.name.startsWith('end')).map(block => {
        if (!block.kwargs.title) {
            throw new Error('block requires an argument title');
        }
        if (!block.kwargs.description) {
            throw new Error('block requires an argument description');
        }
        let title = markdown.page(block.kwargs.title).content;
        let description = markdown.page(block.kwargs.description).content;

        return `
        <div class="block">
            <div class="annotations_wrapper1">
                <div class="annotations_wrapper2">
                    <div class="annotations">
                        <div class="short">
                            ${title}
                        </div>
                        <div class="long">
                            ${description}
                        </div>
                    </div>
                    <div class="connector"><div>&nbsp;</div></div>
                </div>
            </div>
            <div>${block.body.replace(/^\n*/mg, '').replace(/\n*$/mg, '')}</div>
        </div>
        `;
    });

    return `
    <div class="jumobotron annotated_blueprint">
        <div class="code_scroller">
            <div class="code_viewer">
                ${blocks.join("\n")}
            </div>
        </div>
    </div>
    `;
}

module.exports = {
    book: {
        assets: './assets',
        css: [
            'style.css'
        ]
    },

    blocks: {
        tour: {
            blocks: ['block', 'endblock'],
            process: function (block) {
                return processTour(block);
            }
        }
    }
};
