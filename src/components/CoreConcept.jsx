export default function CoreConcept(props) {
  // Function to handle redirection
  const navigateTo = (url) => {
    window.location.href = url;
  };

  return (
    <li>
      <img id="CoreConcept" src={props.image} alt="..." />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div id="tab-content-two">
        <span>Purchase</span>

        <button className="active" onClick={() => navigateTo(props.escrowLink)}>
          Escrowed - Tebex
        </button>

        <button className="active" onClick={() => navigateTo(props.opensourceLink)}>
          Open Source - Tebex
        </button>
      </div>
    </li>
  );
}
