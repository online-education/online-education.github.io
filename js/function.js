var button = document.getElementById('submit'); //getting button by elem name
var form = document.getElementById('theform') //getting form by elem name

var temp_array = []

button.addEventListener('click', (e) => {
    e.preventDefault()

    //we assume that user always enters valid value (only positive numbers) and thus omit data validation
    let users_name = document.getElementById('fullname').value || undefined;
    let users_email = document.getElementById('email').value || undefined;
    let x = document.getElementById('courses').selectedIndex;
    let course = document.getElementsByClassName('options')[x].value || undefined;
    let tel_number = document.getElementById('telnumber').value || undefined;

    let temp = {
        name: users_name,
        email: users_email,
        course: course,
        phone: tel_number
    }

    temp_array.push(temp)


    // Stores the JavaScript object as a string
    localStorage.setItem('temps', JSON.stringify(temp_array));

    console.log(localStorage.getItem('temps'))

    form.reset();
})