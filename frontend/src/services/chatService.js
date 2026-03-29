const API_URL = "http://127.0.0.1:8000";

// export const askAI = async (message) => {
//   try {
//     const response = await fetch(`${API_URL}/ask`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ 
//         question: message,
//       }),
//     //   body: JSON.stringify({ query: question }),
//     });

//     const data = await response.json();
//     return data.answer;
//   } catch (error) {
//     console.error("Error:", error);
//     return "Something went wrong!";
//   }
// };

export const askAI = async (message) => {
  const res = await fetch("http://127.0.0.1:8000/ask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      question: message,
    }),
  });

  const data = await res.json();

  return data.answer; 
};