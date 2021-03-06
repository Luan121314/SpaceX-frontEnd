import * as yup from 'yup';
import { UserProps } from '../interfaces';
import ValidationGeneric from './ValidationGeneric';


class UserValidation extends ValidationGeneric {

    async update(data: UserProps) {
        const scheme = yup.object().shape({
            name: yup.string().required(this.messageRequired("nome")),
            gender: yup.string().required(this.messageRequired("genero")).equals(['Masculino', 'Feminino', 'Outros'], "O campo genero deve ser preecnchido com as seguintes opções, Masculino, Feminino ou Outros"),
            about: yup.string().required(this.messageRequired("sobre")),
            github: yup.string().required(this.messageRequired("github"))
        })

        await scheme.validate(data)
    }

    async create(data: UserProps) {
        const scheme = yup.object().shape({
            name: yup.string().required(this.messageRequired("nome")),
            gender: yup.string().required(this.messageRequired("genero")).equals(['Masculino', 'Feminino', 'Outros'], "O campo genero deve ser preecnchido com as seguintes opções, Masculino, Feminino ou Outros"),
            about: yup.string().required(this.messageRequired("sobre")),
            github: yup.string().required(this.messageRequired("github"))
        })

        await scheme.validate(data)

    }


}

export default new UserValidation();