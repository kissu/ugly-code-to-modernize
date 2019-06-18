function CompanySearchGroup() {
  this.updateContactsBySearch = (text = '') => {
    (async () => {
      try {
        const companies = await searchCompanies({ name: new RegExp(text) })
        const contacts = await searchContacts({ firstname: new RexExp(text), lastname: new RegExp(text) })
        const companiesId = []
        for (let value of companies) {
          companiesId.push(value.id)
        }
        const contacts2 = await searchContacts({ company: companiesId })
        for (let contact of contacts2) {
          this.contacts.push(contact)
        }
      } catch (error) {
        console.log(error)
      }
    })()
  }
}
