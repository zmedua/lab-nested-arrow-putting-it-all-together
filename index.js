function createLoginTracker(userInfo) 
{
let attemptCount = 0;  
    
  return function (password) 
    { if (attemptCount >= 3) {
        
        return "Account locked due to too many failed login attempts";
    }
      if (password === userInfo.password) 
      { attemptCount = 0; 
        return "Login successful";
    
      } 
    else 
    {attemptCount++;
      return `Attempt ${attemptCount}: Login failed`; 

    }
    }
  
};



module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};