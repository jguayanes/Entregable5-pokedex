import BarProgressStat from "./BarProgressStat";

const StatBarList = ({ stats }) => {
  return (
    <section className="">
      <h2 className="text-2xl font-bold">Stats</h2>
      <section>
        {stats?.map((stat) => (
          <BarProgressStat key={stat.name} stat={stat} />
        ))}
      </section>
    </section>
  );
};

export default StatBarList;
