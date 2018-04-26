$(window).on('load',() =>{
    $('area').on("click" , (e) =>{
        e.preventDefault();
        $("#real-world-modal").modal("show")
    })
});