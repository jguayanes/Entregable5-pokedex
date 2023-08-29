const MovesList = ({ moves }) => {
  return (
    <main className="grid gap-4 pb-5 pt-5 sm:w-[600px]">
      <h2 className="font-bold text-xl">Movements</h2>
      <article className="flex flex-wrap gap-4">
        {moves?.map((move) => (
          <ul className="bg-gray-300 rounded-md" key={move.name}>
            {move.name}
          </ul>
        ))}
      </article>
    </main>
  );
};

export default MovesList;
