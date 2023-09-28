import { Control } from '../../../../utile/control';
import { IProduct } from '../../../../types/result-types';


export class ItemCard extends Control {
    image: Control;
    title: Control;
    priceBlock: Control;
    currentPrice: Control;
    oldPrice: Control | null = null;

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
    }
}