describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка сущ-ния кнопки забыли пароль
         cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
         cy.get('#loginButton').click(); // нажали на кнопку войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // появилась информация об успешной авториз.
         cy.get('#messageHeader').should('be.visible'); // эту информацию видно пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик закрытия поля об авториз. видно польз.
         })

     it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').click(); // нажали на кнопку забыли пароль
        cy.get('#mailForgot').type('iamvvuek@yandex.ru'); // ввели верную почту
        cy.get('#restoreEmailButton').click(); // нажали на кнопку отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // появилась информация об успешной отправке пароля
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик закрытия поля виден пользователю

     })

     it('Неверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка сущ-ния кнопки забыли пароль
        cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
        cy.get('#pass').type('Loveqastudio1'); // ввели неверный пароль
        cy.get('#loginButton').click(); // нажали на кнопку войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // появилась информация об неуспешной авториз.
        cy.get('#messageHeader').should('be.visible'); // эту информацию видно пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик закрытия поля об авториз. видно польз.
        })

        it('Верный пароль и неверный логин', function () {
            cy.visit('https://login.qa.studio/'); // зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка сущ-ния кнопки забыли пароль
            cy.get('#mail').type('german@dolnikov.com'); // ввели неверный логин
            cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
            cy.get('#loginButton').click(); // нажали на кнопку войти
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); // появилась информация об неуспешной авториз.
            cy.get('#messageHeader').should('be.visible'); // эту информацию видно пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик закрытия поля об авториз. видно польз.
            })

            it('Негативный кейс валидации', function () {
                cy.visit('https://login.qa.studio/'); // зашли на сайт
                cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка сущ-ния кнопки забыли пароль
                cy.get('#mail').type('germandolnikov.ru'); // ввели верный логин без @
                cy.get('#pass').type('Loveqastudio1'); // ввели неверный пароль
                cy.get('#loginButton').click(); // нажали на кнопку войти
                cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // появилась информация об неуспешной авториз.
                cy.get('#messageHeader').should('be.visible'); // эту информацию видно пользователю
                cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик закрытия поля об авториз. видно польз.
                })

                it('Верный пароль и верный логин, но с разным регистром', function () {
                    cy.visit('https://login.qa.studio/'); // зашли на сайт
                    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка сущ-ния кнопки забыли пароль
                    cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели верный логин с плавающим регистром
                    cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
                    cy.get('#loginButton').click(); // нажали на кнопку войти
                    cy.get('#messageHeader').contains('Авторизация прошла успешно'); // появилась информация об успешной авториз.
                    cy.get('#messageHeader').should('be.visible'); // эту информацию видно пользователю
                    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик закрытия поля об авториз. видно польз.
                    })
 
    })
