describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://pokemonbattle.ru/login'); // зашли на сайт
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // ввели верную почту
         cy.get('#password').type('USER_PASSWORD'); // ввели верный пароль
         cy.get('.auth__button').click(); // нажали кнопку войти
         cy.wait(2000);
         cy.get('.header__container > .header__id').click({ force: true }); // нажали на наш аватар
         cy.get('[href="/shop"]').click();  // нажали на кнопку смена аватара
         cy.get('.available > button').first().click({ force: true }); // нажали на кнопку смена аватара, первого из возможных
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('5555555555555557'); // вводим номер карты для оплаты 
         cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
         cy.get('.k_input_date').type('1225');                           // вводим срок действия карты
         cy.get('.k_input_name').type('NAME SURNAME');                   // вводим имя владельца действия карты
         cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
         cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
         cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
         cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
        
        });
         
        })