Template.halo.Nama = function () {
    return Session.get('nama');
};
Template.halo.events({
    'click #btnSubmit': function (e) {
        e.preventDefault();
        Session.set('nama', $('#inpNama').val());
    }

});