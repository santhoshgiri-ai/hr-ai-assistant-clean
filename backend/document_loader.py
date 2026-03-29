from langchain_community.document_loaders import TextLoader
import os

def load_documents():

    folder_path = "data"

    docs = []

    for file in os.listdir(folder_path):
        if file.endswith(".txt"):
            loader = TextLoader(os.path.join(folder_path, file))
            docs.extend(loader.load())

    return docs