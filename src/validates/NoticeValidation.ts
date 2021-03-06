import * as yup from 'yup';
import { NoticeProps } from '../interfaces';
import ValidationGeneric from './ValidationGeneric';




class NoticeValidation extends ValidationGeneric {
    constructor() {
        super()
    }

    async update(data: NoticeProps) {
        const scheme = yup.object().shape({
            title: yup.string().required(this.messageRequired("titulo")),
            headline: yup.string().required(this.messageRequired("manchete")),
            notice: yup.string().required(this.messageRequired("noticia"))
        })

        await scheme.validate(data)
    }

    async create(data: NoticeProps) {
        const scheme = yup.object().shape({
            title: yup.string().required(this.messageRequired("titulo")),
            headline: yup.string().required(this.messageRequired("manchete")),
            notice: yup.string().required(this.messageRequired("noticia"))
        })
        await scheme.validate(data)

    }


}

export default new NoticeValidation();