import { Control } from "../../../utile/control";

export class Header extends Control {
    private wrap: Control;
    private title: Control;
    private author: Control;

    constructor(parent: HTMLElement) {
        super(parent, 'header', 'header');
        this.wrap = new Control(this.node, 'div', 'header__wrap');
        this.title = new Control(this.wrap.node, 'h1', 'header__wrap__title', 'Beauty Quiz');
        this.author = new Control(this.wrap.node, 'h2', 'header__wrap__author', 'Мария Ващаева');
    }

    destroy(): void {
        super.destroy();
    }
}