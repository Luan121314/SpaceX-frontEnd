import * as yup from 'yup';
import { NoticeProps } from '../interfaces';
import ValidationGeneric from './ValidationGeneric';



interface UpdateNoticeProps extends NoticeProps {
    id: string
}

class NoticeValidation extends ValidationGeneric {
    constructor() {
        super()
    }

    async update(data: UpdateNoticeProps) {
        const scheme = yup.object().shape({
            id: yup.string().required(),
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