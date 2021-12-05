import React from "react";
import banner from "../../assets/social-banner.jpg";
import Accordion from "./Accordion/Accordion";
import s from "./Main.module.scss"

function Main() {
    return (
        <main className={s.main}>

            <div className={s.content}>
                <img src={banner} alt="banner"/>
                <div>
                    <Accordion titleValue={"Hello, Anatoliy"} accordionNum={1} collapsed={true}/>
                    <Accordion titleValue={"Hello, Sergey"} accordionNum={2} collapsed={false}/>
                </div>
            </div>
        </main>
    );
}

export default Main;