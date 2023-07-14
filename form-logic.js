var regex = /^([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)$/;
var input1 = $('#inlineFormInputName');
var input2 = $('#inlineFormInputName2');
var errIcon1 = $('#error-icon');
var errIcon2 = $('#error-icon2');
var errMsg1 = $('#error-msg');
var errMsg2 = $('#error-msg2');
var btn1 = $('#submit-btn');
var btn2 = $('#submit-btn2');

function showError(errorIconID, errorMsgID, btnID, inputID) {
    errorIconID.css('display', 'inline');
    inputID.css('margin-top', '-36px');
    errorMsgID.css('display', 'inline');
    btnID.css('margin-top', '-25px');
}

function hideError(errorIconID, errorMsgID, btnID, inputID) {
    errorIconID.css('display', 'none');
    inputID.css('margin-top', '0px');
    errorMsgID.css('display', 'none');
    btnID.css('margin-top', '0px');
}

function submitBTN(inputID, btnID) {
    inputID.on('input', function() {
        if ((regex.test(inputID.val()) == true)) {
            btnID.css('opacity', '1');
        }
        else {
            btnID.css('opacity', '0.7');
        }
    });
}

function logic(inputID, errorIconID, errorMsgID, btnID) {
    inputID.on('blur', function() {
        if ((inputID.val() == '') || (regex.test(inputID.val()) == false)) {
            inputID.css('border-color', 'red');
            showError(errorIconID, errorMsgID, btnID, inputID);
            inputID.on('focusin', function() {
                inputID.css('box-shadow', '0 0 0 0.25rem rgba(255, 0, 0, 0.2)');
                inputID.on('input', function() {
                    if (regex.test(inputID.val()) == true) {
                        inputID.css('border-color', '#86b7fe');
                        inputID.css('box-shadow', '0 0 0 0.25rem rgba(13, 110, 253, 0.25)');
                        hideError(errorIconID, errorMsgID, btnID, inputID);
                    }
                    else if (regex.test(inputID.val()) == false) {
                        inputID.css('border-color', 'red');
                        inputID.css('box-shadow', '0 0 0 0.25rem rgba(255, 0, 0, 0.2)');
                        showError(errorIconID, errorMsgID, btnID, inputID);
                    }
                });
            });
            inputID.on('focusout', function() {
                inputID.css('box-shadow', 'none');
            });
        }
        else {
            inputID.on('focusin', function() {
                inputID.css('box-shadow', '0 0 0 0.25rem rgba(13, 110, 253, 0.25)');
            });
        }
    });
}

logic(input1, errIcon1, errMsg1, btn1);
submitBTN(input1, btn1);

logic(input2, errIcon2, errMsg2, btn2);
submitBTN(input2, btn2);