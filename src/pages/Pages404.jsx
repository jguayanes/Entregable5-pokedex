import { Link } from "react-router-dom";

const Pages404 = () => {
  return (
    <div className="text-center">
      <img src="/images/preview.gif" alt="" />
      <Link className="bg-green-700 rounded-md" to="/">
        Go to home
      </Link>
    </div>
  );
};

export default Pages404;
