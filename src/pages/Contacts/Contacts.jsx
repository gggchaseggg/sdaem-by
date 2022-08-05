import React from "react";
import ContactForm from "../../components/ContactPage/ContactForm/ContactForm";
import ContactList from "../../components/ContactPage/ContactList/ContactList";
import style from "./Contacts.module.scss";
import { useDispatch } from "react-redux";
import { setActivePage } from "../../Redux/Reducers/activePageReducer";
import AlertIcon from "../../components/SvgIcons/AlertIcon";

export default function Contacts() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setActivePage(4));
  }, []);

  return (
    <>
      <div className={style.background}>
        <div className={style.cityMap}>
          <div className={style.container}>
            <div className={style.info}>
              <h1 className={style.title}>Контакты</h1>
              <p className={style.wishes}>
                Если у Вас есть пожелания, предложения или претензии по
                организации работы сайта мы всегда рады услышать Ваше мнение.
              </p>
              <div className={style.contactList}>
                <ContactList />
              </div>
              <p className={style.IP}>
                ИП Шушкевич Андрей Викторович <br />
                УНП 192602485 Минским горисполкомом 10.02.2016
              </p>
              <div className={style.alert}>
                <AlertIcon fillColor={"#5039BD"} className={style.alertImg} />
                <p className={style.text}>
                  Администрация сайта не владеет информацией о наличии свободных
                  квартир
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
