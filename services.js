contactsApp.service('ContactService', function(){
    this.contact = null;
    this.getContactsData = function(){
         var contactsData = [
            {
                "firstName": "Cox",
                "lastName": "Carney",
                "company": "Enormo",
                "contactId": "cox-carney"
            },
            {
                "firstName": "Lorraine",
                "lastName": "Wise",
                "company": "Comveyer",
                "contactId": "lorraine-wise"
            },
            {
                "firstName": "Nancy",
                "lastName": "Waters",
                "company": "Fuelton",
                "contactId": "nancy-waters"
            }
         ];
        
        return contactsData;
    };
       
});