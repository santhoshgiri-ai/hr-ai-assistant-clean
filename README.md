# 🤖 HR AI Assistant (RAG-based Chatbot)

An AI-powered HR assistant that answers employee queries using company policy documents.

Built using **React + FastAPI + LangChain + FAISS + OpenAI**

---

## 🚀 Features

* 💬 Chat-based UI (like ChatGPT)
* 📄 Answers from HR Policy PDF (RAG)
* ⚡ Fast responses using FAISS vector search
* 🎨 Modern UI with Tailwind CSS
* ⌨️ Enter key support + typing UX

---

## 🧠 Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS

### Backend

* FastAPI
* LangChain
* FAISS (Vector DB)
* OpenAI (LLM)

---

## 📂 Project Structure

```
hr-ai-assistant/
│
├── backend/
│   ├── app.py
│   ├── test_loader.py
│   ├── data/
│   │   └── hr_policy.pdf
│   └── vectorstore/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── services/
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repo

```
git clone https://github.com/santhoshgiri-ai/hr-ai-assistant-clean.git
cd hr-ai-assistant
```

---

### 2️⃣ Backend Setup

```
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

---

### 3️⃣ Add OpenAI Key

Create `.env` file:

```
OPENAI_API_KEY=your_api_key_here
```

---

### 4️⃣ Create Vector DB

```
python test_loader.py
```

---

### 5️⃣ Run Backend

```
python -m uvicorn app:app --reload
```

---

### 6️⃣ Frontend Setup

```
cd frontend
npm install
npm run dev
```

---

## 🧪 Usage

Open:

```
http://localhost:5173
```

Ask questions like:

* What is notice period?
* Explain leave policy
* Working hours?

---

## 🧠 How It Works (RAG)

1. Load HR PDF
2. Split into chunks
3. Convert to embeddings
4. Store in FAISS
5. Retrieve relevant chunks
6. Generate answer using OpenAI

---

## 🔥 Example

**Question:**

> What is notice period?

**Answer:**

> Employees must serve a notice period of 60 days before leaving the organization.

---

## 🚀 Future Improvements

* Streaming responses
* Chat history
* Authentication
* Multi-document support
* Deployment (Vercel + Render)

---

## 👨‍💻 Author

Santosh

---

## ⭐ If you like this project, give it a star!
