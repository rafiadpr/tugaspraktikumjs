class Bola {
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

class Lingkaran extends Bola {
    constructor(p, r, d){
        super (p, r)
        this.diameter = d
    }

    luas = () => {
        return this.phi * this.rusuk ** 2
    }

    keliling = () => {
        return this.phi * this.rusuk * 2
    }
}

let bangunRuang = new Lingkaran (3.14 , 10)

console.log ("Luas = " + bangunRuang.luas())
console.log ("Keliling = " + bangunRuang.keliling())
console.log ("Luas Permukaan = " + bangunRuang.luasPermukaan())
console.log ("Volume = " + bangunRuang.volume())
