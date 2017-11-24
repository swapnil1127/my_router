$(document).on('click', '.update', function(){
    $sapid = $("#sapid").val();
    $host_name = $("#host-name").val();
    $loop_back = $("#loop-back").val();
    $mac_address = $("#mac-address").val();
    if($sapid == '' || $host_name == '' || $loop_back == '' || $mac_address == ''){
        alert('Please fill all values');
    }else{
        $id = $('#router-id').val()
        $.ajax({
            url:'update/' + $id,
            type:'POST',
            data:{
                sapid:$sapid,
                host_name:$host_name,
                loopback:$loop_back,
                mac_address:$mac_address,
                csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
            },
            success:function(){
                window.location = '/';
                alert('Updated!');
            }

        });

    }

});