export default class Genero {
    private genero: string
    constructor (genero: string) {
        this.genero = genero
    }

    public get getGenero(): string {
        return this.genero
    }
}