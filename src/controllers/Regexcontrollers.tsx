import { Constants } from "../constants"

export default class RegexControllers {
    static handleRegex(isIndividual: boolean, value: string, onCard?: boolean){
        let input = value
        let len = isIndividual ? 11 : 14
        input = input.replace(/\D/g, "")
        let regras = isIndividual ? this.handleRegexCPF(input.length) : this.handleRegexCNPJ(input.length)
        if (input.length > len) {
            input = input.substr(0, len)
        }
        if (onCard){
            return `${isIndividual ? Constants.showTypeDocumentIndividualCard : Constants.showTypeDocumentBusinessCard}` + input.replace(regras[0], regras[1].toString())
        }
        return input.replace(regras[0], regras[1].toString())
    }

    static handleRegexCPF(len: number) {
        let r = /(\d{3})(\d{3})(\d{3})(\d)/
        let a = "$1.$2.$3-$4"
        if (len > 0 && len < 7) {
            r = /(\d{3})(\d)/
            a = "$1.$2"
        }else if (len < 10){
            r = /(\d{3})(\d{3})(\d)/
            a = "$1.$2.$3"
        }
        return [r, a]
    }

    static handleRegexCNPJ(len: number) {
        let r = /(\d{2})(\d{3})(\d{3})(\d{4})(\d)/
        let a = "$1.$2.$3/$4-$5"
        if (len > 0 && len < 6) {
            r = /(\d{2})(\d)/
            a = "$1.$2"
        }else if (len < 9){
            r = /(\d{2})(\d{3})(\d)/
            a = "$1.$2.$3"
        }else if (len < 13){
            r = /(\d{2})(\d{3})(\d{3})(\d)/
            a = "$1.$2.$3/$4"
        }
        return [r, a]
    }
}