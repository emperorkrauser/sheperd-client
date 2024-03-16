import { Link } from 'react-router-dom';
export const Nav = () => {
  return (
    <>
      <Link to="/btc">
        <h4>Bitcoin</h4>
      </Link>
      <Link to="/eth">
        <h4>Ethereum</h4>
      </Link>
      <Link to="/doge">
        <h4>Dogecoin</h4>
      </Link>
    </>
  );
};
