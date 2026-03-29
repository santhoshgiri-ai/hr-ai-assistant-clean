const Loader = () => {
  return (
    <div className="flex items-center space-x-2 text-gray-500 text-sm my-2">
      <span>🤖 AI is typing</span>
      <span className="animate-bounce">.</span>
      <span className="animate-bounce delay-150">.</span>
      <span className="animate-bounce delay-300">.</span>
    </div>
  );
};

export default Loader;