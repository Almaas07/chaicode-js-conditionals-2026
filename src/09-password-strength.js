/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here
  const uppercaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const lowercaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  const specialCharsArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "[", "]", "{", "}", "|", ";", ":", ",", ".", "<", ">", "?"]

  let strength = 0;
  let hasUpper = false;
  let hasLower = false;
  let hasNum = false;
  let hasSpecial = false;

  if (password === "" || typeof password !== "string") {
    return "weak";
  }

  //check
  if (password.length >= 8) {
    strength += 1;
  }

  for (let i = 0; i < password.length; i++) {
    let character = password[i];

    if (uppercaseArr.includes(character)) {
      hasUpper = true;
    }
    if (lowercaseArr.includes(character)) {
      hasLower = true;
    }
    if (numbersArr.includes(character)) {
      hasNum = true;
    }
    if (specialCharsArr.includes(character)) {
      hasSpecial = true;
    }
  }
  
  if (hasUpper) {
    strength += 1;
  }

  if (hasLower) {
    strength += 1;
  }

  if (hasNum) {
    strength += 1;
  }

  if (hasSpecial) {
    strength += 1;
  }


  //Evaluation
  if (strength <= 1) {
    return "weak";
  } else if (strength === 2 || strength === 3) {
    return "medium";
  } else if (strength === 4) {
    return "strong";
  } else {
    return "very strong";
  }
}
