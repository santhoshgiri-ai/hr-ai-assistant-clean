from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import FAISS

def create_vector_store(chunks, api_key):

    embeddings = OpenAIEmbeddings(
        openai_api_key=api_key
    )

    vector_store = FAISS.from_documents(
        chunks,
        embeddings
    )

    return vector_store


def search_documents(vector_store, query):
    #similarity_search finds top matching chunks
    #k=2 means return 2 most relevant chunks
    results = vector_store.similarity_search(query, k=2)
    return results