class Bapak {
  constructor(name, karakter, pendidikan) {
    this.name = name;
    this.karakterName = karakter;
    this._pendidikan = pendidikan;
  }

  karakter() {
    return `Karakter bapak adalah ${this.karakterName}`;
  }
  pendidikan() {
    return `Pendidikan bapaknya adalah ${this._pendidikan}`;
  }
}

class Anak extends Bapak {
  constructor(name, karakterAnak, usia) {
    super(name, karakterAnak);
    this.usia = usia;
  }

  karakter() {
    return `${this.name} ${super.karakter()} usianya ${this.usia}`;
  }
}

const anakManusia = new Anak("Lili", "Lucu", "TK", 21).karakter();
console.log(anakManusia.karakter());
