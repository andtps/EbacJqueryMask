$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000', {
      placeholder: '(00) 00000-0000'
    });
  
    $('#cep').mask('00000-000', {
      placeholder: '00000-000'
    });

    $('#CPF').mask('000.000.000-00',{
      placeholder:'000.000.000-00'
    });

    $('form').validate({
      rules: {
        nome: {
            required: true
        },
        email: {
            required: true
        },
        telefone: {
            required: true
        },
        CPF: {
            required: true
        },
        cep: {
            required: true
        },
        endereço: {
            required: true
        },
        numero: {
            required: true
        },
        bairro: {
            required: true
        }

      }
    })
  
   })