const StatList = ({ stats }) => {
  return (
    <ul className="grid gap-2 grid-cols-3 text-xs p-2">
      {stats?.map((stat) => (
        <li key={stat.name}>
          <h4 className="capitalize">{stat.name}</h4>
          <span className="font-bold line-clamp-1">{stat.value}</span>
        </li>
      ))}
    </ul>
  );
};

export default StatList;
