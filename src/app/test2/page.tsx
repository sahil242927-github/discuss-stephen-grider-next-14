export const revalidate = 3;

export default function Test2() {
  const rand = () => {
    return Math.floor(Math.random() * (1000 - 100) + 100);
  };

  return <div>{rand()}</div>;
}
