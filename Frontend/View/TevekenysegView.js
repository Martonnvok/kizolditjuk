class TevekenysegView {

    #adat = [];
    #divElem;
    #pontElem

    constructor(adat, szuloElem, osztaly) {
        this.#adat = adat;
        this.#divElem = szuloElem.find(".tevekenysegek");
        this.#pontElem = szuloElem.find(".pontok");
        this.#divElem.addClass(osztaly);
        
        this.megjelenit();
        this.pontSzerzes();
    }

    megjelenit() {
        let txt = `<ul>`;
        for (let index = 0; index < this.#adat.length; index++) {
            txt += `<li> ${this.#adat[index].tevekenyseg} (${this.#adat[index].pont} pont) <div class = "pont">✔</div> </li>`;
        }
        txt += `</ul>`
        this.#divElem.append(txt);
    }

    pontSzerzes() {
        $(".pont").click(function () {
            var pontszam = parseInt($(".pontszam").text());
            pontszam += 1;
            $(".pontszam").text(pontszam)
            
        });
        let txt = `<p>Összpontszám: </p><div class = "pontszam">0</div>`;
        
        this.#pontElem.append(txt);
        
    }



}
export default TevekenysegView;