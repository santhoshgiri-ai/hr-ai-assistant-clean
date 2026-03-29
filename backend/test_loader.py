import os
os.environ["OPENAI_API_KEY"] = "Your OpenAI API Key Here"
from langchain_community.document_loaders import PyPDFLoader
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import FAISS
from langchain.text_splitter import RecursiveCharacterTextSplitter

# Load PDF
loader = PyPDFLoader("data/hr_policy.pdf")
documents = loader.load()
print("Loaded documents:", len(documents))

# 🔥 ADD THIS (VERY IMPORTANT)
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=50
)

docs = text_splitter.split_documents(documents)
print("Split docs:", len(docs))

# Create embeddings
embeddings = OpenAIEmbeddings()

# Create vector DB
vectorstore = FAISS.from_documents(docs, embeddings)

# Save
vectorstore.save_local("vectorstore")

print("Vector DB created with chunking!")