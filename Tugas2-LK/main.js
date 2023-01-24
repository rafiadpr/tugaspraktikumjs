class Bola{
    constructor(p, r){
        this.phi = p
        this.rusuk = r
    }
    luasPermukaan = () => {
        return 4 * this.phi * this.rusuk ** 2
    }

    volume = () => {
        return 4/3 * this.phi * this.rusuk ** 3
    }
}

let bangunRuang = new Bola (3.14 , 10)

console.log ("Luas Permukaan = " + bangunRuang.luasPermukaan())
console.log ("Volume = " + bangunRuang.volume())