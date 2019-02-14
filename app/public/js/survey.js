const validate = function () {
    let valid = true;
    if (!$('#employeeName').val() || !$('#employeeImg').val()) {
        valid = false;
    } else if (!$('#q1').val() || !$('#q2').val() || !$('#q3').val() || !$('#q4').val() || !$('#q5').val() || !$('#q6').val() || !$('#q7').val() || !$('#q8').val() || !$('#q9').val() || !$('#q10').val()) {
        valid = false;
    }
    return valid;
};


const surveyResults = function (event) {
    event.preventDefault();
    if (validate()) {
        const newName = $('#employeeName').val();
        const newImg = $('#employeeImg').val();
        const newScores = [];
        for (i = 1; i < 11; i++) {
            score = $(`#q${i}`).val();
            newScores.push(score);
            $(`#q${i}`).val('');
        };
        const newSurvey = {
            name: newName,
            photo: newImg,
            scores: newScores
        };
        $('#employeeName').val('');
        $('#employeeImg').val('');
        $('#invalid').removeClass('d-block');
        $.ajax({
            url: '/api/employees',
            method: 'POST',
            data: newSurvey
        }).then(function (response) {
            $("#empPic").attr('src', response.photo);
            $("#empName").text(response.name);
            $("#matchEmp").modal('toggle');
        });
    } else {
        $('#invalid').addClass('d-block');
    }
};

$('#submitSurvey').on('click', surveyResults);