/*const body = document.querySelector('.lastest')
const session = document.createElement('div');
body.append(session);
session.textContent = 'create dove';
console.log(session);
session.style.backgroundColor = 'red';
session.style.padding = '10px';
session.style.color = '#FFF';
session.style.fontSize = '25px';
session.style.textAlign = 'CENTER';
session.style.height = '50px';
const linkGoogle = document.createElement('a');
linkGoogle.textContent = 'Googe link';
linkGoogle.setAttribute('href', 'https://www.google.com')
linkGoogle.setAttribute('target', '_blank')*/


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
    const sum = Math.floor(weight / height) ** 2 ;

    if (sum > 2.5){
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
    
    
    // function checkInput() {
        //     if (!height || !weight) {
            //         error.textContent = 'Please enter your correct height';
            //         error.style.backgroundColor = 'red';
            //     } if(height == 70 && weight == 40 ) {
                //         error.textContent = '';
                //         error.style.backgroundColor = 'green';
                //     }
                // }
                
                
                // function to calculate the sum 

