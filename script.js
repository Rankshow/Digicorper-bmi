
// fuction to get the value;
const submitButton = document.querySelector('.btn');

const bmi = []

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    calculateSum();
    
});

const calculateSum = () => {

    const height = Number(document.getElementById('height').value);
    const weight = Number(document.getElementById('weight').value);
    const error = document.getElementById('error');
    
    // BMI = mass / height
    const sum = Math.ceil(weight / height);

    if (sum > 24){
        output.textContent = "Sorry!!! you have a high BMI";
        output.style.color = "red";
    }
    output.style.color = ""
    
    // Throw error in any of the input is underfine.
    if (!height || !weight){
         error.textContent = 'Please Enter the height or weight';
         error.style.backgroundColor = 'red'
    } else{
        error.textContent = '';
        error.style.backgroundColor = ''
    }
   
    // local storage

    const bmiValue = {
      height,
      weight,
    };

    bmi.push(
        bmiValue
    )
     localStorage.setItem("DetailsValue", JSON.stringify(bmi));


    output.innerHTML = `
    <h1> The sum of the two value ${height} (in cm) and ${weight} (in kg) is ${sum} (kgcm)</h1>
    `
    
}


