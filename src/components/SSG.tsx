const SSG = async () => {
  const response = await fetch("https://catfact.ninja/fact", {
    cache: "force-cache",
  });
  const result = await response.json();
  console.log(result);

  return <div>{result.fact}</div>;
};

export default SSG;
