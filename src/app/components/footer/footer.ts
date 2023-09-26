import { Control } from "../../../utile/control";

type LinkType = {
    name: string,
    url: string,
    icon: string,
}

export class Footer extends Control {
    private wrap: Control;
    private copyWrite: Control;
    private myLinks: Control;
    private linkItem: Control;
    private linkItems: LinkType[] = [
        {
            name: 'gitHub',
            url: 'https://github.com/MaryAnzh',
            icon: ''
        },
        {
            name: 'linkedin',
            url: 'https://www.linkedin.com/in/maryia-vashchayeva-511313240/',
            icon: ''
        },
    ]

    constructor(parent: HTMLElement) {
        super(parent, 'footer', 'footer');
        this.wrap = new Control(this.node, 'div', 'footer__wrap');
        this.copyWrite = new Control(this.wrap.node, 'p', 'footer__wrap__copywrite', '©2023, Minsk');
        this.myLinks = new Control(this.wrap.node, 'ul', 'footer__wrap__links');
        this.linkItems.forEach(({ name, url, icon }) => {
            const link = new Control(this.myLinks.node, 'li', 'footer__wrap__links__item');
            const a = new Control(link.node,
                'a',
                'footer__wrap__links__item__link',
                name,
                [{ name: 'href', value: url },
                { name: 'target', value: '_blank' },
                { name: 'rel', value: 'noreferrer' }]);
        });

    }

    destroy(): void {
        super.destroy();
    }
}