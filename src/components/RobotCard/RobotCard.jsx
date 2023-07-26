import "./RobotCard.css";

const RobotCard = (robot) => {
  // console.log("props: ",robot)

//   const { first_name, last_name, email, avatar, greeting } = robot;
  const { first_name, last_name, email, avatar } = robot;

  const greeting = () => {
    alert(`Hello, I'm ${first_name} ${last_name}`);
  };

  return (
    <div className="card-container">
      <figure className="card" data-name={`${first_name} ${last_name}`}>
        <img
          src={avatar}
          className="card-img-top"
          alt={`${first_name} ${last_name}`}
        />
        <div className="card-body">
          <h2 className="card-title">{`${first_name} ${last_name}`}</h2>
          <address className="card-text">{email} </address>
        </div>
        {/* <button className="btn btn-primary" onClick={()=>greeting(first_name, last_name)}> */}
        <button className="btn btn-primary" onClick={greeting}>
          Greeting{" "}
          <span aria-label="greeting" role="img">
            {" "}
            ✋{" "}
          </span>
        </button>
      </figure>
    </div>
  );
};

export default RobotCard;
