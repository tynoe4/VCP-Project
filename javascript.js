// Function to navigate between stages
function goToStage(stageNumber) {
    const stages = document.querySelectorAll('.stage');
    stages.forEach((stage) => stage.classList.remove('active'));
    document.getElementById(`stage${stageNumber}`).classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    //stage 1:user Type selection
    document.getElementById('userTypeForm').addEventListener('submit', (e) =>{
        e.preventDefault();
        const userType = document.querySelector('input[name="userType"]:checked').value;
        if(userType==='doctor'){
            goToStage(1.5); //go to doctor details stage
        }else{
            goToStage(2); //proceed to name input for patient
        }
    });
    //Stage:Doctor Details Form Submission
    document.getElementById('doctorDetailsForm').addEventListener('submit', (e) =>{
        e.preventDefault();
        goToStage(2);
    }); 
});

    // Stage 2: Name Input
    document.getElementById('nameForm').addEventListener('submit', (e) => {
        e.preventDefault();
        goToStage(3);
    });

    // Stage 3: National ID Validation
    document.getElementById('idForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const nationalID = document.getElementById('nationalID').value;
        const idPattern = /^\d{2}-\d{7}[A-Z]\d{2}$/; // Zimbabwe ID format
        if (!idPattern.test(nationalID)) {
            alert('Invalid National ID format. Use format: 63-2105565V42');
        } else {
            goToStage(4);
        }
    });

    // Stage 4: Gender Selection
    document.getElementById('genderForm').addEventListener('submit', (e) => {
        e.preventDefault();
        goToStage(5);
    });

    // Stage 5: Contact Information
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        goToStage(6);
    });

    // Stage 6: City Selection
    document.getElementById('cityForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const city = document.getElementById('city').value;
        if (!city) {
            alert('Please select a valid city.');
        } else {
            goToStage(7);
        }
    });

    // Stage 7: Password Validation
document.getElementById('passwordForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Password requirements: At least 8 characters, 1 capital letter, and 1 number
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!passwordPattern.test(password)) {
        alert('Password must be at least 8 characters long, include one capital letter, and at least one  number.');
        return; // Stop form submission
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return; // Stop form submission
    }

    displayReview();
    goToStage(8);
});



// Display Review Details
function displayReview() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const nationalID = document.getElementById('nationalID').value;
    const gender = document.getElementById('gender').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value || 'N/A';
    const city = document.getElementById('city').value;

    const reviewHTML = `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>National ID:</strong> ${nationalID}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>City/Town:</strong> ${city}</p>
    `;
    document.getElementById('reviewDetails').innerHTML = reviewHTML;
}


// Final Submission
function submitForm() {
    alert('Registration Successful! Thank you for joining Sahwira.');
    window.location.href = 'login.html'; // Redirect to the login page
}

