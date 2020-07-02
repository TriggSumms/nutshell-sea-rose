import API from "./eventsProvider.js"
import makeEventHTML from "./eventsDOM.js"

//render the HTML code into the queried field

const eventContainer = document.querySelector(".postedEvents__Selection");
//Getting the data from the json then activating my event listeners such as delete
const makeEventList = () => {
    eventContainer.innerHTML = "";
    API.getAllEvents()
        .then((eventArray) => {
           const allEvents = eventArray.map(item => {
                const htmlComponent = `<p>${item.title}</p>`
                return htmlComponent;
           });
            //const firstEvent = eventArray.find(item => {
                
               // eventContainer.innerHTML += makeEventHTML(item);
            //});
            eventArray.sort((a, b) => {
                if (a.date > b.date) return -1;
                if (a.date < b.date) return -1;
                return 0;
            });
           eventArray.forEach(item => {
               eventContainer.innerHTML += makeEventHTML(item);
            });

        })
}


export default makeEventList;