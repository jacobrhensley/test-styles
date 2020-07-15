console.log("status-tool.js")

$('#interested').click(function() {
    interested()
});

$('#learning').click(function() {
    learning()
});

$('#hobbyist').click(function() {
    hobbyist()
});


function interested() {
    $('#interested').addClass('s8');
    $('#interested').removeClass('s2');

    $('#learning').addClass('s2');
    $('#learning').removeClass('s8');

    $('#hobbyist').addClass('s2');
    $('#hobbyist').removeClass('s8');
}

function learning() {
    $('#interested').addClass('s2');
    $('#interested').removeClass('s8');

    $('#learning').addClass('s8');
    $('#learning').removeClass('s2');

    $('#hobbyist').addClass('s2');
    $('#hobbyist').removeClass('s8');
}

function hobbyist() {
    $('#interested').addClass('s2');
    $('#interested').removeClass('s8');

    $('#learning').addClass('s2');
    $('#learning').removeClass('s8');

    $('#hobbyist').addClass('s8');
    $('#hobbyist').removeClass('s2');
}