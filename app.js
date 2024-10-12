const fetchAdvice = async () => {
  try {
    
    const res = await fetch("https://api.adviceslip.com/advice");

    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await res.json();

    const titleElement = document.querySelector(".title");
    const adviceTextElement = document.querySelector(".advice-text");

    titleElement.textContent = `Advice #${data.slip.id}`;
    adviceTextElement.textContent = `"${data.slip.advice}"`;
  } catch (error) {

    console.error('Failed to fetch advice:', error);
    document.querySelector(".advice-text").textContent = "Could not fetch advice. Please try again.";
  }
};

fetchAdvice();
