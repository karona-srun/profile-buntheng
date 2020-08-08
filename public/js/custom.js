$('document').ready(function() {

    $('.alert').show().delay(4000).slideUp();

    $('.summernote').summernote({
        height: 300, // set editor height
        minHeight: null, // set minimum height of editor
        maxHeight: null, // set maximum height of editor
        focus: true // set focus to editable area after initializing summernote
    });
})

function previewFile(input) {
    var file = $("input[type=file]").get(0).files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function() {
            $("#previewImg").attr("src", reader.result);
        }
        reader.readAsDataURL(file);
    }
}