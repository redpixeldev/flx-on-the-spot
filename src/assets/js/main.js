import Alpine from "alpinejs";

Alpine.store("mobileMenu", {
	isOpen: false,

	toggle() {
		this.isOpen = !this.isOpen;
	},

	close() {
		this.isOpen = false;
	},
});

window.Alpine = Alpine;

Alpine.start();
