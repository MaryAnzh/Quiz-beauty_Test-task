import { Control } from '../../../../utile/control';
import { IProduct } from '../../../../types/result-types';

export class ItemCard extends Control {
    image: Control;
    title: Control;
    priceBlock: Control;
    currentPrice: Control;
    oldPrice: Control | null = null;
    iconWrap: Control;
    isItemSelect = false;

    constructor(parent: HTMLElement, product: IProduct) {
        super(parent, 'div', 'item-card');
        this.image = new Control(this.node, 'img', 'item-card__img', null, [
            { name: 'alt', value: product.title },
            { name: 'src', value: product.image }]
        );
        this.title = new Control(this.node, 'h4', 'item-card__title', product.title);
        this.priceBlock = new Control(this.node, 'p', 'item-card__prices-block');
        if (product.oldPrice) {
            const text = product.oldPrice;
            this.oldPrice = new Control(this.priceBlock.node, 'span', 'item-card__prices-block__old', text.toString());
        }
        this.currentPrice = new Control(this.priceBlock.node, 'span', 'item-card__prices-block__current', `${product.price.toString()}руб.`);
        this.iconWrap = new Control(this.node, 'div', 'item-card__icon');

        this.iconWrap.node.innerHTML = `
        <svg  class="heart-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
           x="0px" y="0px" viewBox="0 0 32 32" xml:space="preserve">
           <path d="M27.8,6.1
            c-0.7-0.7-1.5-1.2-2.4-1.6C24.5,4.2,23.6,4,22.6,4c-1,0-1.9,0.2-2.8,0.6c-0.9,0.4-1.7,0.9-2.4,1.6L16,7.6l-1.4-1.4
            C13.2,4.8,11.3,4,9.4,4C7.5,4,5.6,4.8,4.2,6.1s-2.1,3.2-2.1,5.2c0,1.9,0.8,3.8,2.1,5.2l1.4,1.4L16,28.3l10.4-10.4l1.4-1.4
            c0.7-0.7,1.2-1.5,1.6-2.4c0.4-0.9,0.6-1.8,0.6-2.8s-0.2-1.9-0.6-2.8C29,7.6,28.5,6.8,27.8,6.1z"/>
        </svg>`
        this.iconWrap.node.onclick = (e) => this.selectItem(e);
    }

    selectItem = (e: Event) => {
        this.isItemSelect = !this.isItemSelect;
        const elem = <HTMLElement>e.target;
        const svg = <SVGAElement>elem.children[0];

        if (this.isItemSelect) {
            svg.style.fill = '#4885A6';
            return;
        }
        svg.style.fill = 'none';
    }
}