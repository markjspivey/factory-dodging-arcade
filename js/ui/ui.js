class UI {
    constructor() {
        this.elements = new Set();
    }

    addElement(element) {
        this.elements.add(element);
    }

    removeElement(element) {
        this.elements.delete(element);
    }

    update(deltaTime) {
        for (const element of this.elements) {
            element.update(deltaTime);
        }
    }

    render(context) {
        for (const element of this.elements) {
            element.render(context);
        }
    }
}