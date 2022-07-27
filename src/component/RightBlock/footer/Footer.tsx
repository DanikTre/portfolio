import React from "react";
import s from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={s.footer}>
      <div>
        <h2>Danik Trepachko</h2>
      </div>
      <div className={s.href}>
        <a href="https://www.linkedin.com/in/daniktre">Linkedin</a>
        <a href="https://github.com/DanikTre">GitHub</a>
        <a href="https://t.me/daniktre">Telegram</a>
        <a href="">Instagram</a>
        <a href="">Vkontakte</a>
      </div>
    </div>
  );
};
