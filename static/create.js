$(document).ready(function(){
    if($('#result') != null){
        Read();
    }
    $('#create').click(function(){
        $sapid = $('#sapid').val()
        $host_name = $('#host-name').val()
        $loopback = $('#loop-back').val()
        $mac_address = $('#mac-address').val()

        if( $sapid == '' || $host_name == '' || $loopback == '' || $mac_address == ''){
            alert("Please enter value in all fields")
        }else{
            $.ajax({
                url:'create',
                type:'POST',
                data:{
                    'sapid':$sapid,
                    'host_name':$host_name,
                    'loopback':$loopback,
                    'mac_address':$mac_address,
                    csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
                },
                success:function(){
                    Read();
                    $('#sapid').val('')
                    $('#host-name').val('')
                    $('#loop-back').val('')
                    $('#mac-address').val('')
                }
            });
        }
    });
});

$(document).on('click', '.delete',function(){
    $id = $(this).attr('name')
    $.ajax({
        url:'delete/' + $id,
        type:'POST',
        data:{
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
        },
        success:function(){
            Read();
            alert('Deleted!');
        }
    });

});

$(document).on('click', '.edit', function(){
    $id = $(this).attr('name');
    window.location = "edit/" + $id;
});

var Read = function(){
    $.ajax({
        url:'read',
        type:'POST',
        async:false,
        data:{
            res:1,
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
        },
        success:function(response){
            $('#result').html(response);
        }
    })

}
