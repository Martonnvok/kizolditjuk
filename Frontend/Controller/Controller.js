import TevekenysegModell from "../Modell/TevekenysegModell.js";
import OsztalyView from "../View/OsztalyView.js";
import TevekenysegView from "../View/TevekenysegView.js";

class Controller{
    #modell
    constructor(){
        this.#modell = new TevekenysegModell();

        this.megjelenit();
    }

    megjelenit(){
        new TevekenysegView(this.#modell.getTevekenysegek(), $("article"), $(".tevekenysegek"));
        new OsztalyView(this.#modell.getOsztalyok, $("article"), $(".osztalyok"))
    }

}
export default Controller;