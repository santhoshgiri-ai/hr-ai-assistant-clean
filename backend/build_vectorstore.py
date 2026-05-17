import os
from dotenv import load_dotenv
from document_loader import load_documents
from text_splitter import split_documents
from vector_store import create_vector_store

load_dotenv()

api_key = os.getenv("OPENAI_API_KEY")

print("Step 1: Loading documents...")
docs = load_documents()

print("Step 2: Splitting into chunks...")
chunks = split_documents(docs)

print("Step 3: Creating vectorstore...")
vs = create_vector_store(chunks, api_key)

vs.save_local("vectorstore")
print("SUCCESS! vectorstore folder created.")