"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
        this._nom = _nom;
        this._prix = _prix;
    }
    Object.defineProperty(Sejour.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "prix", {
        get: function () {
            return this._prix;
        },
        enumerable: false,
        configurable: true
    });
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._sejours = [];
        this._sejours.push(new Sejour("Atlantide", 2000));
        this._sejours.push(new Sejour("Enfer", -150));
        this._sejours.push(new Sejour("Mickeyville", 150));
    }
    SejourService.prototype.findByNom = function (nom) {
        for (var _i = 0, _a = this._sejours; _i < _a.length; _i++) {
            var sejour = _a[_i];
            if (sejour.nom == nom) {
                return sejour;
            }
        }
        return null;
    };
    return SejourService;
}());
var service = new SejourService();
console.log(service.findByNom("Atlantide"));
