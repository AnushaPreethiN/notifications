const Notification = (props) => {
const containerClassName = {`notification-container ${className}`}

  return (
    <div className={containerClassName}>
      <img className="icon" src={iconUrl} />
      <p className="message">{message}</p>
    </div>
  )
}
};

const element = (
  <div className="bg-container">
    <h1>Notifications</h1>
    <div>
      <div class="primary">
        <img src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" />
        <p className="message">Information Message</p>
      </div>
      <div className="success">
        <img src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" />
        <p className="message">Success Message</p>
      </div>
      <div className="warning">
        <img src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" />
        <p className="message">Warning Message</p>
      </div>
      <div className="danger">
        <img src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" />
        <p className="message">Error Message</p>
      </div>
    </div>
  </div>
