"use strict";
// NO USAR: import Alpine from 'alpinejs'
var money = 1000;
document.addEventListener('alpine:init', () => {
    Alpine.data('mnpg', () => ({
        cash: "💵$:" + money
    }));
});
// --- Cordova Initialization ---
document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    // Alpine.js is already initialized by its own event listener,
    // so you can now safely use Cordova plugins or APIs.
}
