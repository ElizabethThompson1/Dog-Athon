class AuthService {
    // Example method for user login
    static login(username, password) {
      return new Promise((resolve, reject) => {
        
        setTimeout(() => {
          if (username === 'exampleuser' && password === 'password') {
            const user = {
              id: 1,
              username: 'exampleuser',
              
            };
            resolve(user);
          } else {
            reject(new Error('Invalid username or password'));
          }
        }, 1000);
      });
    }
  
    // Example method for user registration
    static register(username, email, password) {
      // Your registration logic here, such as making API requests
      // Return a promise that resolves with user data if registration is successful
      return new Promise((resolve, reject) => {
        // Example API request
        // Replace this with your actual registration logic
        setTimeout(() => {
          const newUser = {
            id: 2,
            username,
            email,
            // Add other user data as needed
          };
          resolve(newUser);
        }, 1000);
      });
    }
  }
  
  export default AuthService;