import AssessmentTest from './AssessmentTest';
import AssessmentTestSpanish from '/AssessmentTestSpanish';
import React, {useState} from 'react';


const Assessment = () => {
    const [showAssessment, setShowAssessment] = useState(false);


  return (
    <div>
      <div className="assessmenttitle"> 
        <h3> Assessment</h3>
      </div>
      <div className="buttonsassessment">
                <div>
        <h3>English</h3>
        <button type="button" onClick={() => window.open('/AssessmentTest', '_blank')} className="assessmentbutton">Begin Assessment</button>
{/* https://stackoverflow.com/questions/30202755/react-router-open-link-in-new-tab */}
{/* i checked other resources to make sure I can have a new window open when the button is press */}
                </div>        

{/* when button is clicked it doubles everything in the assessment page need to look ovet that  */}
{/* I was able to fix that but now I am unable to get test to show up */}
                <div>
                    <h3>Español</h3>
                    <button type="button" onClick={() => window.open('/AssessmentTestSpanish', '_blank')} className="assessmentbutton">Iniciar Evaluation</button>
                </div>
                </div>
      <div>
        <br></br>
        <br></br>
        <div>
          <p>
            Thank you for taking the time to complete the Early Developmental Assessment. This assessment is designed to help you gain insights into your child's developmental milestones and identify any areas that may warrant further attention or support. Your participation is crucial in providing the best possible care for your child.
          </p>
          <h1>Instructions:</h1>
          <ol>
            <li>Prepare a Quiet Environment:Find a quiet and comfortable space where you and your child can focus without distractions.</li>
            <li>Gather Necessary Materials:Have any materials, toys, or items mentioned in the assessment readily available.</li>
            <li>Choose a Time When Your Child is Calm:Opt for a time when your child is typically calm and alert. Avoid times when they are hungry, tired, or irritable.</li>
            <li>Engage with Your Child:Encourage your child to participate in the activities outlined in the assessment. Make it a positive and engaging experience.</li>
            <li>Observe and Note Responses:Observe your child's reactions and note their responses to each activity. Your insights are valuable.</li>
            <li>Answer Honestly:Answer the assessment questions openly and honestly. Your responses help us understand your child's unique strengths and areas that may need attention.</li>
            <li>Take Your Time:There is no rush. Take the time needed to complete the assessment thoughtfully. Quality is more important than speed.</li>
            <li>Don't Stress:This assessment is not a diagnostic tool but a resource to guide discussions with healthcare professionals. No matter the outcome, remember that early intervention can make a positive impact.</li>
            <li>Seek Professional Guidance:If you have concerns or if the assessment suggests the need for further evaluation, we recommend consulting with healthcare professionals, such as pediatricians or developmental specialists.</li>
<li>Review Results Together:Once completed, take time to review the assessment results. This can be a starting point for meaningful conversations about your child's development.</li>
          </ol>
        </div>
        <div>
            <p>
            Remember, you are not alone in this journey. Your care and attention play a vital role in supporting your child's growth. If you have any questions or need assistance, feel free to reach out.
            </p>
            </div>
            <br></br>
            <br></br>

      </div>
      {showAssessment ? <AssessmentTest /> : null}
    </div>
  );
}

export default Assessment;

