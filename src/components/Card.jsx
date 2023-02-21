import React from 'react'
import mainStyles from './main.module.scss'
import layout from './layout.module.scss'
import Form from './Form';

const Card = () => {
    return (
     <>
     <header className={mainStyles.header}>
         <div className={layout.layout}>
             <figure className={mainStyles.logo__wrap}>
                 <img src="./logo.svg" alt=""/>
             </figure>
         </div>
     </header>
         <main className={mainStyles.main__container}>
             <div className={layout.layout}>
                 <Form />
                 <div className={mainStyles.pic__containter}>
                     <figure className={mainStyles.pic__containter_wrap}>
                         <img src="./illustration-dashboard.png" alt=""/>
                     </figure>
                 </div>
             </div>

         </main>
             <footer className={mainStyles.footer}>
                 <div className={layout.layout}>
                     <ul className={mainStyles.social__media_list}>
                         <li className={`${mainStyles.social__media_item} ${mainStyles.social__media_item__facebook}`}>
                             <a href="#" alt="logo-facebook"></a>
                         </li>
                         <li className={`${mainStyles.social__media_item} ${mainStyles.social__media_item__twitter}`}>
                             <a href="#" alt="logo-twitter"></a>
                         </li>
                         <li className={`${mainStyles.social__media_item} ${mainStyles.social__media_item__insta}`}>
                             <a href="#" alt="logo-insta"></a>
                         </li>
                     </ul>
                     <div className={mainStyles.footer__copy}>
                         &copy; Copyright Ping. All rights reserved.
                     </div>
                 </div>
         </footer>
     </>
    )
}

export default Card;