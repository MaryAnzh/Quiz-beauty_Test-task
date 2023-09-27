import { Control } from '../../../utile/control';

export class Catalog extends Control {
    constructor(parent: HTMLElement) {
        super(parent, 'div', 'catalog');
    }

    destroy(): void {
        super.destroy();
    }
}