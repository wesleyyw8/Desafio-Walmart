describe('Testes ! ', function() {
  it('should add a todo', function() {
    browser.get('http://localhost:3000/#/pedidos/1');

    testePedidosPage(); 
    navBarClick(0);
    testePerfilUsuarioPage();
    navBarClick(2);
    testeEnderecosEntregaPage();

    //count the number of rows and check the title page.
    function testePedidosPage(){
        var pageName =  element(by.css('.pageName')).getText();
        var todoList = element.all(by.repeater('pedido in pedidos'));
        expect(pageName).toEqual('Pedidos');
        expect(todoList.count()).toEqual(2);
    }

    //use a tempopary name age and sex. Afterwards turn it back.
    function testePerfilUsuarioPage(){
        var pageName =  element(by.css('.title')).getText();
        expect(pageName).toEqual("Perfil Do Usuario");

        doProcess("Protractor Name Test", "999", "P");
        doProcess("Wesley", "81", "M");

        function doProcess(nome, idade, sexo){
            element(by.css('[ng-click="editClient()"]')).click();
            setValuesForm(nome, idade, sexo);
            element(by.css('[ng-click="updateClient()"]')).click();
            checkValuesForm(nome, idade, sexo);
        }

        function setValuesForm(nome, idade, sexo){
            element(by.model('cliente.nome')).clear().sendKeys(nome);
            element(by.model('cliente.idade')).clear().sendKeys(idade);
            element(by.model('cliente.sexo')).clear().sendKeys(sexo);
        }
        function checkValuesForm(nome, idade, sexo){
            browser.refresh();
            var inputName =element(by.model('cliente.nome')).getAttribute('value');
            var inputIdade = element(by.model('cliente.idade')).getAttribute('value');
            var inputSexo = element(by.model('cliente.sexo')).getAttribute('value');
            inputName.then(function(result) {
                expect(nome).toEqual(result);
            });
            inputIdade.then(function(result) {
                expect(idade).toEqual(result);
            });
            inputSexo.then(function(result) {
                expect(sexo).toEqual(result);
            });
            
            /*browser.driver.sleep(1000, function(){
                var inputName = element(by.model('cliente.nome')).getAttribute('value');
                var inputIdade = element(by.model('cliente.idade')).getAttribute('value');
                var inputSexo = element(by.model('cliente.sexo')).getAttribute('value');
                expect(nome).toEqual(inputName);
                expect(idade).toEqual(inputIdade);
                expect(sexo).toEqual(inputSexo);
            });*/
        }
    }

    //count the number of rows and check the title page.
    function testeEnderecosEntregaPage(){
        var pageName =  element(by.css('.title')).getText();
        expect(pageName).toEqual("Endereços de Entrega");

        var trs = element.all(by.repeater('endereco in enderecos'));
        expect(trs.count()).toEqual(2);
    }

    function navBarClick(itemNumber){
        element.all(by.css('.nav.navbar-nav li')).then(function(items) {
            expect(items.length).toBe(3);  //3 links on the navbar
            //navBarItems = items;
            items[itemNumber].click();
        });
    }
    // browser.pause();
  });
});