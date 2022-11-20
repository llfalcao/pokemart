import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import loadingImg from "../../assets/images/loading.gif";

const PurchaseModal = () => {
  const [hidden, setHidden] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      localStorage.clear();
      window.dispatchEvent(new Event("storage"));
    }, 2000);
  }, []);

  if (hidden) return null;

  return (
    <>
      <div className="overlay" onClick={() => !loading && setHidden(true)} />
      <div className="purchase">
        {loading ? (
          <>
            <div className="loading">
              <img src={loadingImg} alt="Loading..." />
            </div>
          </>
        ) : (
          <>
            <h2>Thank you!</h2>
            <p>Your order has been registered.</p>
            <Link to="/">Back to Home</Link>
          </>
        )}
      </div>
    </>
  );
};

export default PurchaseModal;
