const form = document.querySelectorAll('.hidden-form__main-block');
//const success = document.querySelectorAll('.hidden-form__success');
const error = document.querySelectorAll('.hidden-form__error')

form.forEach(function(item){
    item.addEventListener('submit', function(event){
        event.preventDefault();

        const formData = $(this).serialize();

        jQuery.ajax({
            method: "POST",
            url: "mail.php",
            data: formData
        })
        .done(function(message){

            msg = JSON.parse(message);

            if(msg.status){
                item.firstElementChild.hidden = false;
            } else {
                error.forEach(function(itemis){
                    itemis.hidden = false;
                });
            };
        });
    });
});
