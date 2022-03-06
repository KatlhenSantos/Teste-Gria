///<reference types="cypress"/>
describe('Gria', () =>{
    it('Pesquisar por cargo', () => {

        //Acessando o site
        cy.visit('https://www.gria.io/oportunidades')

        //Pesquisando vagas por estado/cidade
        //Caso não haja vaga no estado especifico volta ao inicio
        cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('Operador de caixa');
        cy.wait(1000);
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('Amazonas');
        cy.wait(1000);
        cy.get('.jss112 > .MuiSvgIcon-root').click();
        cy.wait(1000);
        cy.get('.jss113 > .MuiSvgIcon-root').click();
        cy.wait(2000);

        //Pesquisando vagas por estado/cidade
        //Caso haja vaga no estado especifico é direcionado a pagina de login
        cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('Operador de caixa');
        cy.wait(1000);
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('Rio de Janeiro');
        cy.wait(1000);
        cy.get('.jss112 > .MuiSvgIcon-root').click();
        cy.wait(1000);
        cy.get('.jss323').click();
        cy.visit('https://www.gria.io/Operador%20de%20Caixa/0fa8d92b-9a8f-4836-bb7a-0a67c2cfc9d9')
        cy.wait(1000);
        cy.get('.jss76 > #apply-external-id > .MuiButton-label').click()
        cy.wait(2000);
  
      
       /*//usuário ainda não cadastrado no sistema
        cy.get('.jss167 > .MuiButton-label').click()
        cy.wait(1000);
        cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('katlhensantos@hotmail.com');
        cy.wait(1000);
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('12345DB@');
        cy.wait(1000);
        cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type('12345DB@');
        cy.wait(1000);
        cy.get('.jss228').click()
        cy.wait(1000);
        cy.get('.jss229').click()
        cy.wait(2000);*/

       //Usuário com cadastro
        cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('katlhensantos@hotmail.com');
        cy.wait(1000);
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('12345DB@');
        cy.wait(1000);
        cy.get('.jss194').click();
       // cy.visit('https://www.gria.io/__/#/tests/integration/teste.spec.js')
       cy.get('.jss250 > .MuiBox-root > :nth-child(2) > .MuiButton-label').click();
       cy.wait(1000);
       cy.get('.Mui-selected > .MuiTab-wrapper').click();
       cy.wait(2000);
       cy.get(':nth-child(2) > .MuiCard-root > .MuiPaper-root > .MuiAccordionSummary-root').click();
       cy.wait(2000);
       cy.get(':nth-child(1) > .MuiGrid-grid-sm-5 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Anonimus');
       cy.wait(1000);
       cy.get(':nth-child(1) > .MuiGrid-grid-sm-7 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Teste');
       cy.wait(1000);
       cy.get(':nth-child(2) > .MuiGrid-grid-sm-5 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('53469524033');
       cy.wait(1000);
       cy.get('#birthDate').type('30/08/2000');
       cy.wait(1000);
    
       //Cadatastro dos dados do usuário
    cy.get(':nth-child(2) > .MuiGrid-grid-sm-12 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiAutocomplete-popupIndicator > .MuiIconButton-label > .MuiSvgIcon-root').click();
    cy.wait(1000);
    cy.get('#genre').type('Feminino');
    cy.wait(1000);
    cy.get('#genre').click();
    cy.get(':nth-child(3) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('3333333333');
    cy.wait(1000);
    cy.get(':nth-child(3) > :nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('97925963214');
    cy.wait(1000);
    cy.get(':nth-child(4) > .MuiGrid-grid-md-2 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Estágio');
    cy.wait(1000);
    cy.get(':nth-child(4) > .MuiGrid-grid-md-6 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('QA');
    cy.wait(1000);
    //cy.get('#load-cv-id > .MuiButton-label > span').click();
    cy.get('#abstract').type('Todo dia é um aprendizado');
    cy.wait(1000);
    cy.get('.MuiGrid-grid-sm-3 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('69058115');
    cy.wait(1000);
    cy.get('.MuiGrid-grid-sm-2 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('630');
    cy.get('#save-continue-button-id').click();
    })
    });


