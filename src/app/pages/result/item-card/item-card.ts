import { Control } from '../../../../utile/control';
import { IProduct } from '../../../../types/result-types';


export class ItemCard extends Control {
    
    constructor(parent: HTMLElement, product: IProduct) {
        super(parent, 'div', 'item-card');

    }
}