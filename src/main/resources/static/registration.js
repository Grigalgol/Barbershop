const form = document.querySelector("form");
eField = form.querySelector(".email"),
    eInput = eField.querySelector("input"),

    pField = form.querySelector(".password"),
    pInput = pField.querySelector("input"),

    fnameField = form.querySelector(".firstName"),
    fnameInput = fnameField.querySelector("input"),

    lnameField = form.querySelector(".lastName"),
    lnameInput = lnameField.querySelector("input"),
    phoneField = form.querySelector(".phoneNumber"),
    phoneInput = phoneField.querySelector("input");

form.onsubmit = (e) => {
    e.preventDefault(); // предотвращение отправки формы
    // если адрес электронной почты и пароль пустые, добавим в него класс встряхивания, иначе вызовем указанную функцию
    (eInput.value == "") ? eField.classList.add("shake", "error"): checkEmail();
    (pInput.value == "") ? pField.classList.add("shake", "error"): checkPass();
    (lnameInput.value == "") ? lnameField.classList.add("shake", "error"): checklName();
    (fnameInput.value == "") ? fnameField.classList.add("shake", "error"): checkfName();
    (phoneInput.value == "") ? phoneField.classList.add("shake", "error"): checkPhone();
    setTimeout(() => { // удаляем класс встряхивания через 500 мс
        eField.classList.remove("shake");
        pField.classList.remove("shake");
        lnameField.classList.remove("shake");
        fnameField.classList.remove("shake");
        phoneField.classList.remove("shake");
    }, 500);
    eInput.onkeyup = () => {
        checkEmail();
    } // вызов функции checkEmail при вводе электронной почты
    pInput.onkeyup = () => {
        checkPass();
    } // вызов функции checkPassword при вводе пароля

    lnameInput.onkeyup = () => {
        checklName();
    } // вызов функции checklName() при вводе фамилии

    fnameInput.onkeyup = () => {
        checkfName();
    } // вызов функции checkfName() при вводе имени

    phoneInput.onkeyup = () => {
        checkPhone();
    } // вызов функции checkPhone()при вводе телефона


    function checkEmail() {
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // шаблон для проверки электронной почты
        if (!eInput.value.match(pattern)) { // если шаблон не совпадает, добавляем ошибку и удаляем допустимый класс
            eField.classList.add("error");
            eField.classList.remove("valid");
            let errorTxt = eField.querySelector(".error-txt");
            // если значение адреса электронной почты не пустое, то введите действительный адрес электронной почты,  Электронный адрес не может быть пустым
            (eInput.value != "") ? errorTxt.innerText = "Напишите правильный email": errorTxt.innerText = "Неправильный email";
        } else { // если шаблон совпадает, то удаляем ошибку и добавляем допустимый класс
            eField.classList.remove("error");
            eField.classList.add("valid");
        }
    }

    function checkPass() {
        if (pInput.value == "") { // если пуст, добавляем ошибку и удаляем допустимый класс
            pField.classList.add("error");
            pField.classList.remove("valid");
        } else { // если не пуст, то удаляем ошибку и добавляем допустимый класс
            pField.classList.remove("error");
            pField.classList.add("valid");
        }
    }

    function checklName() {
        if (lnameInput.value == "") { // если пуст, добавляем ошибку и удаляем допустимый класс
            lnameField.classList.add("error");
            lnameField.classList.remove("valid");
        } else { // если не пуст, то удаляем ошибку и добавляем допустимый класс
            lnameField.classList.remove("error");
            lnameField.classList.add("valid");
        }
    }

    function checkfName() {
        if (fnameInput.value == "") { // если пуст, добавляем ошибку и удаляем допустимый класс
            fnameField.classList.add("error");
            fnameField.classList.remove("valid");
        } else { // если не пуст, то удаляем ошибку и добавляем допустимый класс
            fnameField.classList.remove("error");
            fnameField.classList.add("valid");
        }
    }

    function checkPhone() {
        if (phoneInput.value == "") { // если пуст, добавляем ошибку и удаляем допустимый класс
            phoneField.classList.add("error");
            phoneField.classList.remove("valid");
        } else { // если не пуст, то удаляем ошибку и добавляем допустимый класс
            phoneField.classList.remove("error");
            phoneField.classList.add("valid");
        }
    }
    // если eField и pField не содержат класса ошибки, это означает, что пользователь правильно заполнил данные
    if (!eField.classList.contains("error") && !pField.classList.contains("error") && !lnameField.classList.contains("error") && !fnameField.classList.contains("error") && !phoneField.classList.contains("error")) {
        window.location.href = form.getAttribute("action"); // перенаправляем пользователя на указанный URL, который находится внутри атрибута действия тега формы
    }
}