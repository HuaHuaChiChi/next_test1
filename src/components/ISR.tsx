const ISR = async () => {
  const response = await fetch("https://catfact.ninja/fact", {
    next: {
      revalidate: 5,
    },
  });
  const result = await response.json();
  return <div>{result.fact}</div>;
};

export default ISR;
