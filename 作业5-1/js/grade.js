//应用if else 和 switch语句两种判断方式
//if else
function Show() {
    var score;
    var grade = document.getElementById("grade").value;
    var gradeShow = document.getElementById("gradeshow");
    if (grade == "" || grade == null || isNaN(grade) || grade > 100 || grade < 0) {
        score = "输入分数应在0-100之间，请按正确格式输入";
    } else if (grade >= 90) {
        score = "该生为一等生";
    } else if (grade >= 80) {
        score = "该生为二等生";
    } else if (grade >= 70) {
        score = "该生为三等生";
    } else if (grade >= 60) {
        score = "该生为四等生";
    } else if (grade >= 50) {
        score = "该生为五等生";
    } else if (grade >= 40) {
        score = "该生为六等生";
    } else if (grade >= 30) {
        score = "该生为七等生";
    } else if (grade >= 20) {
        score = "该生为八等生";
    } else if (grade >= 10) {
        score = "该生为九等生";
    } else if (grade >= 0) {
        score = "该生为十等生";
    } else {
        score = "请重新输入";
    }
    gradeShow.innerHTML = score;
}

//switch case
function Show() {
    var score;
    var grade = document.getElementById("grade").value;
    var gradeShow = document.getElementById("gradeshow");
    if (grade == "" || grade == null || isNaN(grade) || grade > 100 || grade < 0) {
        score = "输入分数应在0-100之间，请按正确格式输入";
    } else {
        var tempgrade = parseInt(grade);
        switch (true) {
            case (tempgrade > 90):
                score = "该生为一等生";
                break;

            case (tempgrade > 80):

                score = "该生为二等生";
                break;
            case (tempgrade > 70):

                score = "该生为三等生";
                break;
            case (tempgrade > 60):

                score = "该生为四等生";
                break;
            case 50:
                score = "该生为五等生";
                break;
            case (tempgrade > 50):

                score = "该生为六等生";
                break;
            case (tempgrade > 40):

                score = "该生为七等生";
                break;
            case (tempgrade > 30):

                score = "该生为八等生";
                break;
            case (tempgrade > 20):

                score = "该生为九等生";
                break;
            case (tempgrade > 10):

                score = "该生为九等生";
                break;
            default:
                score = "该生为十等生";
                break;
        }
    }
    gradeShow.innerHTML = score;
}
