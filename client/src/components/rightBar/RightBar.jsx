import "./rightbar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        {/* SUGGESTIONS */}
        <div className="item">
          <span>Suggestions for You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://avatars.githubusercontent.com/u/102009651?v=4"
                alt=""
              />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://avatars.githubusercontent.com/u/102009651?v=4"
                alt=""
              />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        {/* ACTIVITY */}
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://avatars.githubusercontent.com/u/102009651?v=4"
                alt=""
              />
              <p>
                <span>Jane Doe</span> changed their cover picture.
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://avatars.githubusercontent.com/u/102009651?v=4"
                alt=""
              />
              <p>
                <span>Jane Doe</span> changed their cover picture.
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://avatars.githubusercontent.com/u/102009651?v=4"
                alt=""
              />
              <p>
                <span>Jane Doe</span> changed their cover picture.
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://avatars.githubusercontent.com/u/102009651?v=4"
                alt=""
              />
              <p>
                <span>Jane Doe</span> changed their cover picture.
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        {/* Online Friends */}
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://avatars.githubusercontent.com/u/102009651?v=4"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://avatars.githubusercontent.com/u/102009651?v=4"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://avatars.githubusercontent.com/u/102009651?v=4"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://avatars.githubusercontent.com/u/102009651?v=4"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
