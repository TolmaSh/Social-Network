import React from "react";
import s from "./User.module.scss"

export const User = () => {
    return (
        <div className={s.wrapper}>
            <img
                src="https://media.istockphoto.com/photos/indian-man-typing-on-laptop-while-working-from-home-picture-id1319763709?b=1&k=20&m=1319763709&s=170667a&w=0&h=Qi7qU2-UnrFxfnCgSJhZ0PMrB30lx2keJjAqy87Dh0E="
                alt="Man"
            />
            <div className={s.userInfo}>
                <h2>Anatoly</h2>
                <ul>
                    <li>Date of Birth: 1 august</li>
                    <li>City: Kiev</li>
                    <li>Education: IT-KAMASUTRA</li>
                    <li>Website: google.com</li>
                </ul>
            </div>
        </div>
    )

}