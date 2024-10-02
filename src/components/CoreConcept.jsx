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
        {(props.escrowLink || props.opensourceLink) && <span>Purchase</span>}
        
        {props.escrowLink && (
          <button className="active" onClick={() => navigateTo(props.escrowLink)}>
            Escrowed - Tebex
          </button>
        )}
        {props.opensourceLink && (
          <button className="active" onClick={() => navigateTo(props.opensourceLink)}>
            Open Source - Tebex
          </button>
        )}

        {props.githubLink && <span>Download</span>}
        
        {props.githubLink && (
          <button className="active" onClick={() => navigateTo(props.githubLink)}>
            Github Link
          </button>
        )}

        {props.comingSoon && (
          <button className="deactivate" disabled>
            Coming Soon
          </button>
        )}
      </div>
    </li>
  );
}
