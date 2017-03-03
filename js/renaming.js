$('.foo input[name*="Earthquake"]').attr('name', function(_, name){
    return name.replace('Earthquake', 'Erdbeben')
})
