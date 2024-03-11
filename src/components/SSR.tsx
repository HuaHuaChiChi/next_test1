const SSR = async () => {
  const response = await fetch("https://catfact.ninja/fact", {
    cache: "no-cache",
  });
  const result = await response.json();
  return <div>{result.fact}</div>;
};

export default SSR;
