jQuery(document).ready(function(){
    $('#btn_ok').click(function() {
        var r = $('#inputText').val();
        if(Math.sign(r) == -1) {
            $('.error').show();
            $('.error').text("正の数を入力してください");
        } else {
            if(r <= 255) {
                var result = $('#inputText').val();
                if(Math.sign(r - 128) == 1 || Math.sign(r - 128) == 0) {
                    $('#switch128').click();
                    r = r - 128;
                }

                if(Math.sign(r - 64) == 1 || Math.sign(r - 64) == 0) {
                    $('#switch64').click();
                    r = r - 64;
                }
    
                if(Math.sign(r - 32) == 1 || Math.sign(r - 32) == 0) {
                    $('#switch32').click();
                    r = r - 32;
                }
    
                if(Math.sign(r - 16) == 1 || Math.sign(r - 16) == 0) {
                    $('#switch16').click();
                    r = r - 16;
                }
    
                if(Math.sign(r - 8) == 1 || Math.sign(r - 8) == 0) {
                    $('#switch8').click();
                    r = r - 8;
                }
    
                if(Math.sign(r - 4) == 1 || Math.sign(r - 4) == 0) {
                    $('#switch4').click();
                    r = r - 4;
                }
    
                if(Math.sign(r - 2) == 1 || Math.sign(r - 2) == 0) {
                    $('#switch2').click();
                    r = r - 2;
                }
    
                if(Math.sign(r - 1) == 1 || Math.sign(r - 1) == 0) {
                    $('#switch1').click();
                    r = r - 1;
                }
                $('#inputText').val(result);
            } else {
                $('.error').show();
                $('.error').text("255以下の数字を入力してください");
            }
        }
    })

    $('#switch128').click(function() {
        var r = Number( $('#inputText').val() );
        if($('#switch128').prop('checked')){
            r = r + 128;
        } else {
            r = r - 128;
        }
        
        $('#inputText').val(r);
    })

    $('#switch64').click(function() {
        var r = Number( $('#inputText').val() );
        if($('#switch64').prop('checked')){
            r = r + 64;
        } else {
            r = r - 64;
        }
        $('#inputText').val(r);
    })

    $('#switch32').click(function() {
        var r = Number( $('#inputText').val() );
        if($('#switch32').prop('checked')){
            r = r + 32;
        } else {
            r = r - 32;
        }
        $('#inputText').val(r);
    })

    $('#switch16').click(function() {
        var r = Number( $('#inputText').val() );
        if($('#switch16').prop('checked')){
            r = r + 16;
        } else {
            r = r - 16;
        }
        $('#inputText').val(r);
    })

    $('#switch8').click(function() {
        var r = Number( $('#inputText').val() );
        if($('#switch8').prop('checked')){
            r = r + 8;
        } else {
            r = r - 8;
        }
        $('#inputText').val(r);
    })

    $('#switch4').click(function() {
        var r = Number( $('#inputText').val() );
        if($('#switch4').prop('checked')){
            r = r + 4;
        } else {
            r = r - 4;
        }
        $('#inputText').val(r);
    })

    $('#switch2').click(function() {
        var r = Number( $('#inputText').val() );
        if($('#switch2').prop('checked')){
            r = r + 2;
        } else {
            r = r - 2;
        }
        $('#inputText').val(r);
    })

    $('#switch1').click(function() {
        var r = Number( $('#inputText').val() );
        if($('#switch1').prop('checked')){
            r = r + 1;
        } else {
            r = r - 1;
        }
        $('#inputText').val(r);
    })

    $('#inputText').keyup(function() {
        resetAll();
        $('.error').hide();
        $('.error').text("");
    });

    $('#btn_reset').click(function() {
        resetAll();
        $('#inputText').val("");
        $('.error').hide();
        $('.error').text("");
    });

    function resetAll () {
        $('#switch128').prop('checked', false);
        $('#switch64').prop('checked', false);
        $('#switch32').prop('checked', false);
        $('#switch16').prop('checked', false);
        $('#switch8').prop('checked', false);
        $('#switch4').prop('checked', false);
        $('#switch2').prop('checked', false);
        $('#switch1').prop('checked', false);
    }
});