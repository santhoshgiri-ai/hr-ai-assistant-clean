import os
from dotenv import load_dotenv
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from langchain_community.vectorstores import FAISS
from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain_core.prompts import PromptTemplate
from langchain_core.runnables import RunnablePassthrough
from langchain_core.output_parsers import StrOutputParser

load_dotenv()

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

PROMPT = PromptTemplate.from_template("You are an HR assistant. Answer ONLY from the provided context. If the answer is not in the context, say I don't know. Context: {context} Question: {question} Answer:")

class Query(BaseModel):
    question: str

embeddings = OpenAIEmbeddings()
vectorstore = FAISS.load_local("vectorstore", embeddings, allow_dangerous_deserialization=True)
retriever = vectorstore.as_retriever(search_kwargs={"k": 4})
llm = ChatOpenAI()
chain = ({"context": retriever, "question": RunnablePassthrough()} | PROMPT | llm | StrOutputParser())

@app.get("/")
def home():
    return {"message": "HR AI Assistant API Running"}

@app.post("/ask")
async def ask_ai(query: Query):
    answer = chain.invoke(query.question)
    return {"question": query.question, "answer": answer}