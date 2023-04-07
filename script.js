
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
    const sum = Math.round(weight / height);

    // condition for high bmi
    if (sum > 24){
       return output.innerHTML = `<h4>Sorry!!! Your BMI is high ☠️</h4>`
    } 
    // Condition for BMI for low
    if ( sum < 18){
        return output.innerHTML = `<h4>Sorry!!! Your BMI is very low ⚠️</h4>` 
    }
    // When nothing is enter into the input
    if (!sum){
        return output.innerHTML = `<h4>Kindly enter your body mass index into the input</h4>`
    } 
    
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
    <h1> Your Body Mass Index ${weight} (in kg) and  ${height} (in cm) is ${sum} (kgcm) <span>Normal</span></h1>
    `
    
}


