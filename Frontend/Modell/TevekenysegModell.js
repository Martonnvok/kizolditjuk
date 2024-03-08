import { tevekenysegek, osztalyok } from "./adatLeiro.js";
class TevekenysegModell{

    #tevekenysegek = [];
    #osztalyok = []

    constructor(){
        this.#tevekenysegek = tevekenysegek;
        this.#osztalyok = osztalyok;
    }

    getTevekenysegek(){
        return [...this.#tevekenysegek]
    }

    getOsztalyok(){
        return [...this.#osztalyok]
    }

}
export default TevekenysegModell;