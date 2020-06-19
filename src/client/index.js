import { checkForUrl } from './js/urlChecker'
import { nplRequest } from './js/nplRequest'
import { handleSubmit } from './js/formHandler'
import { 
    displayResult,
    sendMessage,
    disableBtn,
    enableBtn
} from './js/updateUI'


import './styles/resets.scss'
import './styles/base.scss'
import './styles/header.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/table.scss'
import './styles/message.scss'


export {
    handleSubmit,
    checkForUrl,
    nplRequest,
    displayResult,
    sendMessage,
    disableBtn,
    enableBtn
}
