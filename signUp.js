// signUp.js

// Define a function to handle sign-up
const signUp = async (username, email, password) => {
    try {
      // Perform sign-up logic, e.g., sending a request to an API
      const response = await fetch('http://localhost:3001/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });
  
      if (response.ok) {
        // Sign-up successful
        const data = await response.json();
        console.log('Sign-up successful:', data);
        return true;
      } else {
        // Sign-up failed
        const errorData = await response.json();
        console.error('Sign-up failed:', errorData);
        return false;
      }
    } catch (error) {
      console.error('Error during sign-up:', error);
      return false;
    }
  };
  
  export default signUp;
  
