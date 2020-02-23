function createSprite(seletor) {

    return new Sprite(seletor);
}

class Sprite {

    constructor(seletor) {
        this._sprite = document.querySelector(seletor);
        this._current = 1;
        this._last = 9;
    }

    nextFrame() {
        if (this._hasnext()) this._setframe(`frame${this._current}`,`frame${++this._current}`);
    };

    _hasnext() {
        return this._current + 1 <= this._last;
    };

    _setframe(from, to) {
        this._sprite.classList.remove(from);
        this._sprite.classList.add(to);
    };

    reset(){
        this._setframe(`frame${this._current}`, `frame0`);
        this._current = 1;
    }

    isFinished(){
        return !this._hasnext();
    }
}