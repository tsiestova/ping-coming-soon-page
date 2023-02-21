import React from 'react'
import formStyles from './form.module.scss'
import layout from './layout.module.scss'

const Form = () => {
    return (
            <div className={formStyles.form__wrap}>
                <div className={layout.layout}>
                    <div className={formStyles.form__wrap_heading}>
                        We are launching <span>soon!</span>
                    </div>
                    <div className={formStyles.form__wrap_description}>
                        Subscribe and get notified
                    </div>
                    <form action="#" className={formStyles.form}>
                        <div className={formStyles.form__container}>
                            <div className={formStyles.input__wrap}>
                                <input
                                    type="email"
                                    placeholder="Your email address…"
                                />
                            </div>
                            <span className={formStyles.error__message}>Please provide a valid email address</span>
                        </div>
                            <button type="button" className={formStyles.btn}>Notify Me</button>
                    </form>
                </div>
        </div>
    )
}

export default Form;