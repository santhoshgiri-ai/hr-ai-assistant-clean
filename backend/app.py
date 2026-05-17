import os
from dotenv import load_dotenv
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from langchain_community.vectorstores import FAISS
from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain.chains.retrieval_qa.base import RetrievalQA
from langchain.prompts import PromptTemplate

load_dotenv()

app = FastAPI()

app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

prompt_template = "You are an HR assistant. Answer ONLY from the provided context. If the answer is not in the context, say I don't know. Context: {context} Question: {question} Answer:"

PROMPT = PromptTemplate(template=prompt_template, input_variables=["context", "question"])

class Query(BaseModel):
    question: str

embeddings = OpenAIEmbeddings()

vectorstore = FAISS.load_local("vectorstore", embeddings, allow_dangerous_deserialization=True)

llm = ChatOpenAI()

qa_chain = RetrievalQA.from_chain_type(llm=llm, retriever=vectorstore.as_retriever(search_kwargs={"k": 4}), chain_type="stuff", chain_type_kwargs={"prompt": PROMPT})

@app.get("/")
def home():
    return {"message": "HR AI Assistant API Running"}

@app.post("/ask")
async def ask_ai(query: Query):
    response = qa_chain.invoke({"query": query.question})
    return {"question": query.question, "answer": response["result"]}
