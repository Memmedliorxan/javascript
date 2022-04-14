let hours = new Date().getHours();

function Mode() {

    if (hours > 6 && hours < 18) {
        document.body.style.backgroundColor = 'green';

    } else if (hours > 15 && hours < 3) {

        document.body.style.backgroundColor = "grey";

    }



}
Mode();
