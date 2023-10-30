
import React from 'react';
import './Projects.css'; // Import the CSS file

const Projects = () => {
  return (
    <div className="project-container">
      <div className="project-card">
        <h3 className="project-title">SMS_SPAM Classification</h3>
        <p className="project-description">
          As we can see today, there are many spam messages are floating in our mobiles.so,in order to control it I have designed  a AIML algorithm  which classifies the messages whether they belong to spam or not.
        </p>
      </div>
      <div className="project-card">
        <h3 className="project-title">Hate_speech detection</h3>
        <p className="project-description">
          As we can see today, there are many hate messages are coming in all our social media accounts, by this many people may feel offended and it can hurt the people in many ways. so in order to minimize them , I have designed  a AIML algorithm which classify the comments/messages to hate speech, offensive or neither hate nor offensive.
        </p>
      </div>
      <div className="project-card">
        <h3 className="project-tittletitle">Prediction of Plant Disease through leaf Image</h3>
        <p className="project-description">
          As we can see today, there are many Instances where foodcrops get destroyed due to delay in identifying the diseases where we can reduce the chance of getting it ruined. so in order to deal with this substancial food crisis and its effects I developed an AIML algorithm which minimizes the effect of diseases on worldwide food production and Mankind by predicting it beforehand using images of leaves.
        </p>
      </div>
      <div className="project-card">
        <h3 className="project-tittletitle">Anti-theft Doormat </h3>
        <p className="project-description">
          This is a sensor which detects weather a burglary happened or not by using the sensors and help the houseowners to get to know much about their safety of their house when they are not around.
        </p>
      </div>
      <div className="project-card">
        <h3 className="project-tittletitle">Accident Alert SOS System</h3>
        <p className="project-description">
          This is a alarm based sensor which notifies to respected contact given and sends the location if there is any accident occured.
        </p>
      </div>
    </div>
  );
};

export default Projects;