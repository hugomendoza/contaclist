app.service('contactList', function($firebaseArray) {
    var friends = 1;
    
    var contacts = firebase.database().ref().child("contacts");


    this.save = function (contacto) {
        if (contacto.id == null) {
            contacto.id = friends++;
            contacts.push(contacto);
        }
        else {
            for (i in contacts) {
                if (contacts[i].id == contacto.id) {
                    contacts[i] = contacto;
                }
            }
        }
    }    

    this.list = function () {
        return $firebaseArray(contacts);
    }
});