const Notification = props => {
 const containerClassName = {`notification-container ${className}`}

  return (
    <div className={containerClassName}>
      <img className="icon" src={iconUrl} />
      <p className="message">{message}</p>
    </div>
  )
}
}

const element = (
  <div className="bg-container">
    <h1>Notifications</h1>
    <div>
      <Notification className="danger"/>
        <img src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" />
        <p className="message">Information Message</p>
      </div>
     <Notification className="danger"/>
        <img src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" />
        <p className="message">Success Message</p>
      </div>
      <Notification className="danger"/>
        <img src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" />
        <p className="message">Warning Message</p>
      <Notification className="danger"/>
        <img src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" />
        <p className="message">Error Message</p>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
