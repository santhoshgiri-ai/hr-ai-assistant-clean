# 🚀 HR AI Assistant (RAG-Based Chat Application)

## 📌 Overview  
The **HR AI Assistant** is a Generative AI-powered chatbot that answers employee queries using company policy documents with high accuracy.

Unlike traditional chatbots, this system uses **Retrieval-Augmented Generation (RAG)** to provide **context-aware, reliable, and hallucination-free responses**.

---

## 💡 Problem Statement  
Employees often depend on HR teams for repetitive queries like:
- Notice period  
- Leave policies  
- Benefits and compensation  

Traditional chatbots often provide inaccurate or generic answers.

---

## 🚀 Solution  
This application leverages **RAG architecture** to:
✔️ Retrieve relevant information from HR documents  
✔️ Inject context into LLM prompts  
✔️ Generate accurate, grounded responses  

## 🧠 Architecture Diagram  
    ┌──────────────┐
    │   User Query │
    └──────┬───────┘
           ↓
    ┌──────────────┐
    │  FastAPI API │
    └──────┬───────┘
           ↓
    ┌──────────────┐
    │  LangChain   │
    │  Processing  │
    └──────┬───────┘
           ↓
    ┌──────────────┐
    │  Embeddings  │
    │ (OpenAI API) │
    └──────┬───────┘
           ↓
    ┌──────────────┐
    │ FAISS Vector │
    │   Database   │
    └──────┬───────┘
           ↓
    ┌──────────────┐
    │ Context      │
    │ Retrieval    │
    └──────┬───────┘
           ↓
    ┌──────────────┐
    │ OpenAI LLM   │
    └──────┬───────┘
           ↓
    ┌──────────────┐
    │  Response    │
    └──────────────┘

### 🛠️ Tech Stack  

### 🔹 Frontend  
- React.js  
- Tailwind CSS  

### 🔹 Backend  
- FastAPI  

### 🔹 AI Layer  
- LangChain  
- OpenAI API  

### 🔹 Vector Database  
- FAISS  

## ✨ Key Features  

- 💬 Real-time AI chat interface  
- 📄 Document-based question answering  
- ⚡ Fast semantic search using embeddings  
- 🎯 Context-aware responses (reduced hallucination)  
- 🔄 End-to-end full-stack implementation  

## 📸 UI Preview  
![HR AI Assistant UI](https://github.com/user-attachments/assets/ed3e5cd2-7419-4974-8a19-ec7833e92068)

## ▶️ How to Run Locally  

### 1️⃣ Clone Repo  git clone https://github.com/santhoshgiri-ai/hr-ai-assistant-clean.git

cd hr-ai-assistant-clean

### 2️⃣ Backend Setup  
cd backend
pip install -r requirements.txt
python -m uvicorn app:app --reload

### 3️⃣ Frontend Setup  
cd frontend
npm install
npm run dev

## 🧠 Design & Key Concepts  

This project implements a **RAG (Retrieval-Augmented Generation)** architecture:

- Documents are converted into embeddings using OpenAI  
- Stored in FAISS for efficient semantic search  
- User query → converted to vector  
- Relevant chunks retrieved from FAISS  
- Context passed to LLM  
- LLM generates accurate, grounded response  

### ✅ Why this approach?
- Reduces hallucination  
- Improves accuracy  
- Scalable for enterprise use cases  

## 🚀 Deployment Guide  

### Frontend  
- Deploy using Vercel / Netlify  

### Backend  
- Deploy using Render / Railway  

### Steps  
1. Push code to GitHub  
2. Connect repo to hosting platform  
3. Add OpenAI API Key as environment variable  
4. Deploy  

## 🔮 Future Improvements  

- Chat history & memory  
- Multi-user support  
- Role-based access  
- Production deployment  

## 👨‍💻 Author  

**Santosh Mukkapally**  
Senior Frontend Developer | React | Angular | Node.js | Generative AI  

⭐ If you found this useful, please give it a star!
