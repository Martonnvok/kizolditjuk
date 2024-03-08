class OsztalyView {
    #adat = [];
    #divElem;

    constructor(adat, szuloElem, osztaly) {
        this.#adat = adat;
        this.#divElem = szuloElem.find(".osztalyok");
        this.#divElem.addClass(osztaly);

        this.megjelenit();
        this.tabla();
    }

    megjelenit() {
        let txt = `<form>`;
        txt += `<label for="nev">Neved:</label>
                <input type="text" id="nev" name="nev"><br><br>
                <label for="osztaly">Osztályod neve:</label>
                <input type="text" id="osztaly" name="osztaly"><br><br>
                <input type="submit" value="Küldés">`
        txt += `</form>`


        this.#divElem.append(txt);
    }

    tabla() {
        let txt = `<table>
                <tr>
                <th>Osztály</th>
                <th>Pontszámuk</th>
                </tr>
                `
        for (let index = 0; index < this.#adat.length; index++) {
            txt += `<tr>
                    <td>${this.#adat[index].osztaly}, ${this.#adat[index].osszPont}</td>`

        }
        txt += `</tr>
                </table>`
        this.#divElem.append(txt);
    }

}
export default OsztalyView;