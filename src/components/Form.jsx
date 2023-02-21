import React, {useRef, useEffect, useState} from 'react'
import formStyles from './form.module.scss'
import layout from './layout.module.scss'

const isValidEmail = (value) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    return regex.test(value);
}

const Form = () => {

    const inputRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [userValue, setUserValue] = useState("");

    const handleSubmit =(e) => {
        e.preventDefault();

        setIsSubmitting(true);

        const value = inputRef.current.value;
        if (!(isValidEmail(value))) {
            return;
        }

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userValue: value,
            }),
        })
            .then((data) => {
                setUserValue("");
                setIsSubmitting(false);
            })

            .catch((e) => {
                console.log(e);
            });

    }

    const handleInput = () => {
        const value = inputRef.current.value;
        setUserValue(value);

    }

    return (
            <div className={formStyles.form__wrap}>
                <div className={layout.layout}>
                    <div className={formStyles.form__wrap_heading}>
                        We are launching <span>soon!</span>
                    </div>
                    <div className={formStyles.form__wrap_description}>
                        Subscribe and get notified
                    </div>
                    <form
                        action="#"
                          className={
                              (!isValidEmail(userValue)
                              &&
                                  isSubmitting)
                                  ?
                                  `${formStyles.form} + ${formStyles.error}` :
                                  formStyles.form
                          }
                        noValidate
                        onSubmit={(e) => {
                            handleSubmit(e)
                        }}

                    >
                        <div className={formStyles.form__container}>
                            <div className={formStyles.input__wrap}>
                                <input
                                    type="email"
                                    placeholder="Your email address…"
                                    ref={inputRef}
                                    onInput={handleInput}
                                    value={userValue}
                                />
                            </div>
                            <span className={formStyles.error__message}>Please provide a valid email address</span>
                        </div>
                            <button
                                type="button"
                                className={formStyles.btn}
                            >
                                Notify Me
                            </button>
                    </form>
                </div>
        </div>
    )
}

export default Form;