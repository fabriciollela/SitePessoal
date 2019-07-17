$('#btn-edit, #btn-save,#btn-cancel').click(function () {
    $('#btn-cancel').toggle(300);
    $('#btn-save').toggle(300);
    $('#btn-edit').toggle(300);

    $('#nome, #sobrenome, #profissao, #resumo').prop('disabled', function (i, v) {
        return !v;
    });


});

