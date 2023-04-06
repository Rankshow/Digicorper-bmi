
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
    
    // suming the two value
    const sum = Math.ceil(weight / height);
    
    if (sum > 24){
        output.innerHTML = `
        <h5> The sum of the two value ${height} (in cm) and ${weight} (in kg) is ${sum} (kgcm) <i>your bmi is very high</i> </h5>
           `
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
    <h1> The sum of the two value ${height} (in cm) and ${weight} (in kg) is ${sum} (kgcm)</h1>
    `
    
}
    
     //     }
                // }
                
                
                // function to calculate the sum 

