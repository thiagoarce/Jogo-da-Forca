function createSprite(seletor) {

    return new Sprite(seletor)
}

class Sprite {

    constructor(seletor) {
        this._sprite = $(seletor)
        this._current = 0
        this._last = 9
    }

    nextframe() {
        if (this._hasnext()) this._setframe(`frame${this._current}`,`frame${++this._current}`)
    };

    _hasnext() {
        return this._current + 1 <= this._last
    };

    _setframe(from, to) {
        this._sprite[0].classList.remove(from)
        this._sprite[0].classList.add(to)
    };
}