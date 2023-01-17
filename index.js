const Notification = (props) => {
  const { className, imageSrc, text } = props;
  return <div className={`div ${imgSrc} ${className}`}>{text}</div>;
};

const element = (
  <div className="bg-container">
    <h1>Notifications</h1>
    <div>
      <Notification class="primary">
        <img src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" />
        <p>Information Message</p>
      </Notification>
      <Notification className="success">
        <img src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" />
        <p>Success Message</p>
      </Notification>
      <Notification className="warning">
        <img src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" />
        <p>Warning Message</p>
      </Notification>
      <Notification className="danger">
        <img src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" />
        <p>Error Message</p>
      </Notification>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
