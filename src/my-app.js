// Element is the same as Polymer.Element in 2.x
// Modules give you the freedom to rename the members that you import
import { Element as PolymerElement }
    from '../node_modules/@polymer/polymer/polymer-element.js';

// Added "export" to export the MyApp symbol from the module
export class MyApp extends PolymerElement {

    // Define a string template instead of a `<template>` element.
    static get template() {
        return `
        <style>
        
        @keyframes move {
            0% { opacity: 0; }
            90% { 
                opacity: 1; 
                transform: scale(0.1) rotate(45deg);}
            100% { 
                opacity: 0; 
                transform: scale(0.04) rotate(90deg);
            }
        }

        .text {
            color: white; 
            font-size: 18px; 
            font-family: trebuchet ms;
            text-align: center;
        }

        .container {
            border-radius: 16px; 
            position:relative;
        }

        img {
            position:absolute; 
            top:0; 
            left:0; 
            width: 200px;
        }

        img.animate {
            animation-name: move;
            animation-duration: 2s;
            animation-fill-mode: forwards;
        }

        </style>
        <div class="text">Hello [[name]]</div>
        <div class="container">
        <img src="img/web-components.svg">
        <img src="img/polymer.svg" class="animate">
        </div>`
    }

    constructor() {
        super();
        this.name = '3.0 preview';
    }

    // properties, observers, etc. are identical to 2.x
    static get properties() {
        name: {
            Type: String
        }
    }
}

customElements.define('my-app', MyApp);