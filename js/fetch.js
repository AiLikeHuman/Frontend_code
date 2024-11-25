const API_URL = "http://13.234.16.41";

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

async function signupUser(email, password) {
  try {
    const response = await fetch(`${API_URL}/api/signup`, {
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
