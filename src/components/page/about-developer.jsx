import React from "react";
import Avatar from "../../assets/myPhoto.jpg";

const AboutDeveloper = () => {
  return (
    <div className="container p-3">
      <div className="card p-3">

        <h3>Информация о разработчике</h3>

        <div className="d-flex align-items-start flex-column flex-md-row">
          <div className="d-flex justify-content-center w-100 mb-3">
            <img
              src={Avatar}
              className="object-fit-contain  "
              alt="Аватар"
              style={{ width: "250px" }}
            />
          </div>

          <div className="d-flex flex-column ms-3">
            <span>
              <strong>Фамилия:</strong> Салимов
            </span>
            <span>
              <strong>Имя:</strong> Руслан
            </span>
            <span>
              <strong>Отчество:</strong> Альбертович
            </span>
            <span>
              <strong>Город:</strong> Санкт-Петербург
            </span>
            <span>
              <strong>Телефон:</strong> +7 (931) 530-25-07
            </span>
            <span>
              <strong>Telegram:</strong> @Rogooo
            </span>
            <span>
              <strong>E-mail:</strong> salimov.rent@mail.ru
            </span>
            <span>
              <strong>Профиль на GitHub:</strong> https://github.com/Salimov-dev
            </span>
            <span>
              <strong>Основной стек:</strong> JS, React, TypeScript, Bootstrap,
              Material UI, Scss/Sass, Redux toolkit, Axios, Git
            </span>
            <span>
              <strong>Дополнительный стек:</strong> NodeJS, Express.js, Docker,
              MongoDb, Firebase, Figma, Photoshop.
            </span>
            <span>
              <strong>Английский:</strong> Технический английский - могу читать
              документацию и общаться в письме.
            </span>
            <span>
              <strong>О себе:</strong> Регулярно интересуюсь новыми технологиями
              в профессиональной сфере. Изучаю современные библиотеки, работаю
              над пет-проектами и расширяю свой стек. Быстро и легко вливаюсь в
              новые команды. Имею высокие коммуникативные навыки, открыто и
              эффективно общаюсь. В работе стараюсь приносить пользу компании,
              принимаю активное участие в разработке.
            </span>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AboutDeveloper;
