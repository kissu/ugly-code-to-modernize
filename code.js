function CompanySearchGroup() {
  this.contacts = [];
  this.updateContactsBySearch = function (text) {
    text = text ? text : ‘’;
    var companies;
    this.contacts = [];
    return new Promise(function (resolve, reject) {
      searchCompanies({ name: new RegExp(text) }).then(function (comp) {
        companies = comp;
        searchContacts({ firstname: new RexExp(text), lastname: new RegExp(text) }).then(function (contacts) {
          this.contacts = contacts;
        });
        var companiesId = [];
        for (c = 0; c < companies.length; c++) {
          companiesId.push(companies[c].id);
        }
        searchContacts({ company: companiesId }).then(function (contacts) {
          for (c = 0; c < contacts.length; c++) {
            this.contacts.push(contacts[c]);
          };
          resolve(this.contacts);
        });
      });
    });
  }
