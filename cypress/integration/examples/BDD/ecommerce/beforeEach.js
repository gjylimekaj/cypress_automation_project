beforeEach(function(){
    // runs once before all tests
    cy.fixture('example').then(function(data){
        this.data = data
    })
})