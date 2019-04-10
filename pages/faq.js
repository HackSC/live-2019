import '../styles/stylesheet.scss'

import Head from '../components/Head'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const FAQ = () => (
  <>
    <Head title="HackSC 2019 Live - FAQ" />

    <NavBar page="faq" />

    <div className="container faq">
      <section className="section">
        <h2 className="has-text-centered title is-size-1">FAQ</h2>

        <div className="columns is-multiline">
          <div className="column is-half">
            <h3 className="is-size-4">What should I bring?</h3>
            <p>All hackers must bring a valid government ID for admission (the name on the ID must match that on your HackSC application). Definitely bring your laptop, charger, and any hackathon gear you may need for your creation. We also strongly recommend bringing a sleeping bag and toiletries for when you need to rest and wash up. One more way HackSC differs from other hackathons is that we are great at hygiene.</p>
          </div>

          <div className="column is-half">
            <h3 className="is-size-4">Will you provide food?</h3>
            <p>
              We'll cover the following meals: <br/><br/>

              <b>Friday:</b><br/>
              Dinner at 6:00 PM<br/>

              <br/>

              <b>Saturday:</b><br/>
              Breakfast at 7:00 AM<br/>
              Lunch at 12:00 PM<br/>
              Dinner at 7:00 PM<br/>

              <br/>

              <b>Sunday:</b><br/>
              Breakfast at 9:00 AM
            </p>
          </div>

          <div className="column is-half">
            <h3 className="is-size-4">What if I have a dietary restriction?</h3>
            <p>We will provide for the following dietary restrictions: Vegetarian, Vegan, Lactose Intolerant, Nut Allergy, Halal, Gluten Free, and Kosher. If you have other dietary restrictions that you didn't fill out on the confirmation of attendance form, please email us at hackers@hacksc.com.</p>
          </div>

          <div className="column is-half">
            <h3 className="is-size-4">Where will we sleep?</h3>
            <p>We have a general purpose area. We will keep this area as quiet as the space allows. Unfortunately, we are not able to provide fluffy pillows or blankets, so please try to bring your own (perhaps even just a yoga or sleeping mat).</p>
          </div>

          <div className="column is-half">
            <h3 className="is-size-4">Will there be showers?</h3>
            <p>Unfortunately there will not be showers available.</p>
          </div>

          <div className="column is-half">
            <h3 className="is-size-4">Do I need a team?</h3>
            <p>We'll have team-matching activities if you don't have a team lined up before the hackathon. We encourage you to join a team with up to 4 hackers total.</p>
          </div>

          <div className="column is-half">
            <h3 className="is-size-4">How much does it cost?</h3>
            <p>The hackathon is completely free for the admitted hackers.</p>
          </div>

          <div className="column is-half">
            <h3 className="is-size-4">Is there travel reimbursement?</h3>
            <p>Unfortunately, we cannot reimburse hackers for travel or parking costs.</p>
          </div>

          <div className="column is-half">
            <h3 className="is-size-4">When should I get there?</h3>
            <p>Hacker check in starts at 5:00 pm and ends at 10:00 pm on Friday.</p>
          </div>

          <div className="column is-half">
            <h3 className="is-size-4">What if I'm arriving late?</h3>
            <p>If you know you'll be arriving after Check-in concludes at 10pm, please send a message to the #late-arrival channel in Slack.</p>
          </div>

          <div className="column is-half">
            <h3 className="is-size-4">What if my teammates and I don't get along?</h3>
            <p>Going through this tough experience together forces you to learn how to work together through the good and the bad as a team. Sometimes apps crash and things don't work out. Sometimes you or your teammates will get tired or frustrated or grumpy. In times like these, drink some water, take a quick power nap or walk, escape to play a game, or go eat a snack. Take the type of break you need and come back a little refreshed.</p>
          </div>

          <div className="column is-half">
            <h3 className="is-size-4">What if I don't get a chance to pet the puppies?</h3>
            <p>Make sure you're there at the start of the event! We'll do our best to make sure everyone gets a chance, assuming they want to and aren't allergic to dogs. </p>
          </div>

          <div className="column is-half">
            <h3 className="is-size-4">What if someone gets injured?</h3>
            <p>
              For <b>life threatening emergencies</b> please contact contact a HackSC organizer or our MLH representative listed below.
              <br/><br/>
              For <b>non-life threatening emergencies</b> please contact contact a HackSC organizer or our MLH representative list below.
            </p>
          </div>

          <div className="column is-half">
            <h3 className="is-size-4">What if my question isn't here?</h3>
            <p>Feel free to ask any and all other questions that aren't listed here in the #askit channel in Slack.</p>
          </div>
        </div>
      </section>
    </div>

    <Footer />
  </>
)

export default FAQ
