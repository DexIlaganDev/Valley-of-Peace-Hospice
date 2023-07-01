
import FormContact from '../FormContact'

import './dialogcontact.styles.scss'

type DCProps = {
    toggle : boolean
    toggleModal : () => void
}

const DialogContact = ({toggle=false, toggleModal} : DCProps) => {


    return (
        <dialog open={toggle}>
            <article>
                <header className='dialog-header' style={{marginBottom : '1rem'}}>
                    <a onClick={toggleModal} href="#close" aria-label="Close" className="close"></a>
                    <h5>Send us a message</h5>
                </header>
                <FormContact />
            </article>
        </dialog>
    )
}

export default DialogContact