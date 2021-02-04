import { Constants } from "../constants"

export default class ValidateFormControllers {

    static handleValidate(isIndividual: boolean, name: string, document: string){
        let resultValidateDocument = this.handleValidateDocument(isIndividual, document)
        let resultValidateName = this.handleValidateName(name)

        let errorName = ''
        let errorDocument = ''

        if (!resultValidateName) errorName = Constants.messageErrorRequiredField
        if (!resultValidateDocument) errorDocument = document.length === 0 ? Constants.messageErrorRequiredField :
                                                     isIndividual ? Constants.messageErrorIncorrectCPF : Constants.messageErrorIncorrectCNPJ
        return [
            resultValidateName && resultValidateDocument,
            errorName,
            errorDocument
        ]
    }

    static handleValidateDocument(isIndividual: boolean, document: string){
        let regexcpf = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/
        let regexcnpj = /^(([0-9]{2}.[0-9]{3}.[0-9]{3}\/[0-9]{4}-[0-9]{2}))$/
        if (isIndividual){
            return regexcpf.test(document)
        }else{
            return regexcnpj.test(document)
        }
    }

    static handleValidateName(name: string){
        return name !== ''
    }

}