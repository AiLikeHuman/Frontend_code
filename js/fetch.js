const API_URL = "http://43.205.187.14";

async function loginUser(email, password) {
  try {
    const response = await fetch(`${API_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      const error = await response.json();
      console.log(error);
    }
  } catch (err) {
    console.error("에러 발생: ", err);
  }
}

async function signupUser(name, email, password) {
  try {
    const response = await fetch(`${API_URL}/api/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      const error = await response.json();
      console.log(error);
    }
  } catch (err) {
    console.error("에러 발생: ", err);
  }
}
