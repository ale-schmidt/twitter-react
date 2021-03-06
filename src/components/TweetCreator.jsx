import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import actions from "../redux/actions/tweetActions";
import logo from "../logo.svg";

function TweetCreator() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [tweetText, setTweetText] = useState("");
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await axios.post(
      "https://twitter-api-pi.vercel.app/api/tweets",
      {
        text: tweetText,
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      }
    );
    dispatch(actions.addTweet(response.data.tweet));
    setTweetText("");
  }

  useEffect(() => {
    const getLoggedInUserData = async () => {
      const response = await axios.get(
        "https://twitter-api-pi.vercel.app/api/users/profile",
        {
          params: {
            username: user.userName,
          },
          headers: {
            Authorization: `Bearer ${user.token}`, // esto lo agarra express-jwt.
            "Content-Type": "application/json",
          },
        }
      );
      setLoggedInUser(response.data.user);
    };
    getLoggedInUserData();
  }, []);

  return (
    <div className="row py-4">
      <div className="col-2">
        <img
          src={loggedInUser.profilePicture ? loggedInUser.profilePicture : logo}
          alt={user.userName}
          className="img-fluid rounded-circle"
          style={{ width: "50px", height: "50px", margin: "0 auto" }}
        />
      </div>
      <div className="col-10">
        <div className="row">
          <div className="col">
            <form id="submit-tweet" onSubmit={handleSubmit}>
              <div className="form-floating">
                <textarea
                  className="text-light mb-2"
                  name=""
                  id="tweet"
                  cols="50"
                  rows="2"
                  value={tweetText}
                  onChange={(e) => setTweetText(e.target.value)}
                  placeholder="Qu?? est?? pasando..."
                ></textarea>
              </div>
            </form>
          </div>
        </div>
        <div className="row d-flex justify-content-between">
          <div className="col-6">
            <ul className="d-flex align-items-center list-unstyled">
              <li>
                <i className="fas fa-trash"></i>
              </li>
              <li>
                <i className="fas fa-trash"></i>
              </li>
              <li>
                <i className="fas fa-trash"></i>
              </li>
              <li>
                <i className="fas fa-trash"></i>
              </li>
            </ul>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <button
              type="submit"
              form="submit-tweet"
              className="ms-auto tweet-btn px-3 text-light fw-bold rounded-pill"
            >
              Twittear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetCreator;
