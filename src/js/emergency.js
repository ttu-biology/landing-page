/* set this to true or false to show emergency message across webpages */
const showEmergencyMessage = true;

const displayEmergencyMessage = (showEmergencyMessage) => {
  const emergencyBanner = document.querySelector(".emergency-banner");

  if (showEmergencyMessage) {
    const header = document.createElement("h4");
    const shortMessage = document.createElement("h4");
    const message = document.createElement("p");

    /* The text and HTML in these items may be altered to show a distinct emergency message */
    header.innerText = "COVID-19 Update from the Department of Biological Science";
    shortMessage.innerText = "We're Open for Learning!";

    message.innerHTML = `
      As Summer 1 starts this June 1st, TTU has moved in to its 
      <a href="http://www.depts.ttu.edu/hr/documents/TTUPhasedReturntoCampusesGuidancePhaseIII.pdf" target="_blank">Phase III</a> response to COVID-19.
      These policies are aligned with 
      <a href="https://www.whitehouse.gov/openingamerica/" target="_blank">national</a>,
      <a href="https://www.dshs.state.tx.us/coronavirus/opentexas.aspx" target="_blank">state</a>, and 
      <a href="https://ci.lubbock.tx.us/storage/images/HofQ6feQg1jHzS1GIlwgZ6gdPn2xAzqhYfIbNZ8H.pdf" target="_blank">city</a> guidance designed to limit 
      the spread of the virus. 
      <a href="http://www.depts.ttu.edu/biology/resources/covid-19/" target="_blank">What does this mean for you?</a>
    `;

    /* ************************************************************************* */

    const elements = [header, shortMessage, message];
    for(const elem of elements){
      emergencyBanner.appendChild(elem);
    }
  } else {
    emergencyBanner.remove();
  }
}

if( document.readyState !== 'loading' ){
  displayEmergencyMessage(showEmergencyMessage);
} else {
  document.addEventListener('DOMContentLoaded', (e) => {
    displayEmergencyMessage(showEmergencyMessage);
  });
}
