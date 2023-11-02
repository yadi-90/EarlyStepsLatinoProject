import React, {useState} from 'react';
import Form from './form';

const AssessmentTest = () => {

const [communicationSkills, setCommunicationSkills] = useState(0);  
const [socialInteraction, setSocialInteraction] = useState(0);
const [repetitiveBehavior, setRepetitiveBehavior] = useState(0);
const [sensorySensitivity, setSensorySensitivity] = useState(0);
const [languageDevelopment, setLanguageDevelopment] = useState(0);
const [ResponsetoEmotions, setResponsetoEmotions] = useState(0);
const [EyeContact, setEyeContact] = useState(0);
const [PlaySkills, setPlaySkills] = useState(0);
const [Adapability, setAdapability] = useState(0);
const [JointAttention, setJointAttention] = useState(0);
const [Empathy, setEmpathy] = useState(0);
const [SpeechDevelopment, setSpeechDevelopment] = useState(0);
const [MotorSkills, setMotorSkills] = useState(0);
const [AttentionSpan, setAttentionSpan] = useState(0);
const [ResponsetoEnviorment, setResponsetoEnviorment] = useState(0);
const [SocialImagination, setSocialImagination] = useState(0);
const [SleepPatterns, setSleepPatterns] = useState(0);
const [EmotionalRegulation, setEmotionalRegulation] = useState(0);
const [SelfAwareness, setSelfAwareness] = useState(0);
const [InterestandFocus, setInterestandFocus] = useState(0);

const handleSubmit = (event) => {
    event.preventDefault();
  
    const yesAnswers = [
      communicationSkills,
      socialInteraction,
      repetitiveBehavior,
      sensorySensitivity,
      languageDevelopment,
      ResponsetoEmotions,
      EyeContact,
      PlaySkills,
      Adapability,
      JointAttention,
      Empathy,
      SpeechDevelopment,
      MotorSkills,
      AttentionSpan,
      ResponsetoEnviorment,
      SocialImagination,
      SleepPatterns,
      EmotionalRegulation,
      SelfAwareness,
      InterestandFocus,
    ].filter(answer => answer === 'yes').length;
  
    if (yesAnswers >= 0 && yesAnswers <= 5) {
      window.alert('Low likelihood of significant developmental concerns.');
    } else if (yesAnswers > 5 && yesAnswers <= 10) {
      window.alert('Some areas of concern; further evaluation may be warranted.');
    } else if (yesAnswers > 10 && yesAnswers <= 20) {
      window.alert('Significant areas of concern; professional evaluation and intervention recommended.');
    } else {
      window.alert('Invalid number of answers');
    }
  };

return (
    <div>
        <Form />
        <div className="pagemainsettingassessment">
<form onSubmit={handleSubmit} >
    <div>
        <h1>Assessment Test</h1>
       
        <h3>Communication Skills</h3> 
        <div>
  <p>1. Does your child use gestures, eye contact, and facial expressions appropriately for their age?</p>
  <input type="radio" id="yes-communicationSkills-1" name="communicationSkills" value="yes" onChange={e => setCommunicationSkills(e.target.value)} />
  <label htmlFor="yes-communicationSkills-1">Yes</label>
  <input type="radio" id="no-communicationSkills-1" name="communicationSkills" value="no" onChange={e => setCommunicationSkills(e.target.value)} />
  <label htmlFor="no-communicationSkills-1">No</label>
</div>
    </div>
    <div>
        <h3>Social Interaction</h3>
        <div>
        <p>2. Does your child engage in pretend play or imaginative activities?</p>
        <input type="radio" id="yes" name="socialInteraction" value="yes" onChange={e => setSocialInteraction(e.target.value)} />
    <label htmlFor="yes">Yes</label>
    <input type="radio" id="no" name="socialInteraction" value="no" onChange={e => setSocialInteraction(e.target.value)} />
    <label htmlFor="no">No</label></div>
    </div>
    <div>
        <h3>Repetitive Behavior</h3>
        <div>
        <p>3. Does your child engage in repetitive behaviors, such as hand-flapping or rocking?</p>
        <input type="radio" id="yes" name="repetitiveBehavior" value="yes" onChange={e => setRepetitiveBehavior(e.target.value)} />
    <label htmlFor="yes">Yes</label>
    <input type="radio" id="no" name="repetitiveBehavior" value="no" onChange={e => setRepetitiveBehavior(e.target.value)} />
    <label htmlFor="no">No</label></div>
  </div>
    <div>
        <h3>Sensory Sensitivity</h3>
        <div>
        <p>4. Does your child have sensitivities to light, sound, touch, or textures? </p>
        <input type="radio" id="yes" name="sensorySensitivity" value="yes" onChange={e => setSensorySensitivity(e.target.value)} />
    <label htmlFor="yes">Yes</label>
    <input type="radio" id="no" name="sensorySensitivity" value="no" onChange={e => setSensorySensitivity(e.target.value)} />
    <label htmlFor="no">No</label>
        </div> </div>
<div>
<h3> Language Development </h3>
<div>
<p>5. Has your child's language development progressed appropriately for their age?</p>
<input type="radio" id="yes" name="ResponsetoEmotions" value="yes" onChange={e => setLanguageDevelopment(e.target.value)} />
    <label htmlFor="yes">Yes</label>
    <input type="radio" id="no" name="ResponsetoEmotions" value="no" onChange={e => setLanguageDevelopment(e.target.value)} />
    <label htmlFor="no">No</label>
</div>
</div>
<div>
    <h3>Response to Emotions</h3>
    <div>
<p>How does your child respond to different emotions, both their own and others'?</p>
<input type="radio" id="yes" name="languageDevelopment" value="yes" onChange={e => setResponsetoEmotions(e.target.value)} />
    <label htmlFor="yes">Yes</label>
    <input type="radio" id="no" name="languageDevelopment" value="no" onChange={e => setResponsetoEmotions(e.target.value)} />
    <label htmlFor="no">No</label>
    </div>
</div>
<div>
<h3>Eye Contact:</h3>
    <div>
    <p>Does your child make appropriate eye contact during conversations?</p>  
    <input type="radio" id="yes" name="EyeContact" value="yes" onChange={e => setEyeContact(e.target.value)} />
    <label htmlFor="yes">Yes</label>
    <input type="radio" id="no" name="EyeContact" value="no" onChange={e => setEyeContact(e.target.value)} />
    <label htmlFor="no">No</label>
    </div>
</div>
<div>
<h3>PlaySkills</h3>
    <div>
    <p>Does your child play with other children?</p>  
    <input type="radio" id="yes" name="PlaySkills" value="yes" onChange={e => setPlaySkills(e.target.value)} />
    <label htmlFor="yes">Yes</label>
    <input type="radio" id="no" name="PlaySkills" value="no" onChange={e => setPlaySkills(e.target.value)} />
    <label htmlFor="no">No</label>
    </div>
</div>
<div>
<h3>Adaptability:</h3>
    <div>
    <p>Does your child adapt to changes in routine or unexpected events?</p>  
    <input type="radio" id="yes" name="Adaptability" value="yes" onChange={e => setAdapability(e.target.value)} />
    <label htmlFor="yes">Yes</label>
    <input type="radio" id="no" name="Adaptability" value="no" onChange={e => setAdapability(e.target.value)} />
    <label htmlFor="no">No</label>
    </div>
</div>
<div>
<h3>Joint Attention:</h3>
    <div>
    <p>Does your child share attention with others, such as pointing to objects of interest?</p> 
    <input type="radio" id="yes" name="JointAttention" value="yes" onChange={e => setJointAttention(e.target.value)} />
    <label htmlFor="yes">Yes</label>
    <input type="radio" id="no" name="JointAttention" value="no" onChange={e => setJointAttention(e.target.value)} />
    <label htmlFor="no">No</label> 
    </div>
</div>
<div>
<h3>Empathy:</h3>
    <div>
    <p>Does your child demonstrate empathy or understanding of others' feelings?</p>  
    <input type="radio" id="yes" name="Empathy" value="yes" onChange={e => setEmpathy(e.target.value)} />
    <label htmlFor="yes">Yes</label>
    <input type="radio" id="no" name="Empathy" value="no" onChange={e => setEmpathy(e.target.value)} />
    <label htmlFor="no">No</label>  
    </div>
</div>
<div>
<h3>Speech Development:</h3>
    <div>
    <p>Have there been any concerns regarding the development of speech sounds or articulation?</p>
    <input type="radio" id="yes" name="SpeechDevelopment" value="yes" onChange={e => setSpeechDevelopment(e.target.value)} />
    <label htmlFor="yes">Yes</label>
    <input type="radio" id="no" name="SpeechDevelopment" value="no" onChange={e => setSpeechDevelopment(e.target.value)} />
    <label htmlFor="no">No</label>  
    </div>
</div>
<div>
<h3>Motor Skills:</h3>
    <div>
    <p>Are your child's gross and fine motor skills developing?</p>
    <input type="radio" id="yes" name="MotorSkills" value="yes" onChange={e => setMotorSkills(e.target.value)} />
    <label htmlFor="yes">Yes</label>
    <input type="radio" id="no" name="MotorSkills" value="no" onChange={e => setMotorSkills(e.target.value)} />
    <label htmlFor="no">No</label>     
    </div>
</div>
<div>
<h3>Attention Span:</h3>
    <div>
    <p>Does your child focus on a specific task or activity</p>  
    <input type="radio" id="yes" name="AttentionSpan" value="yes" onChange={e => setAttentionSpan(e.target.value)} />
    <label htmlFor="yes">Yes</label>
    <input type="radio" id="no" name="AttentionSpan" value="no" onChange={e => setAttentionSpan(e.target.value)} />
    <label htmlFor="no">No</label>     
    </div>
</div>
<div>
    <h3>Response to Environment:</h3>
    <div>
    <p>Does your child respond to sensory stimuli in their environment?</p>  
    <input type="radio" id="yes" name="ResponsetoEnvironment" value="yes" onChange={e => setResponsetoEnviorment(e.target.value)} />
    <label htmlFor="yes">Yes</label>
    <input type="radio" id="no" name="ResponsetoEnvironment" value="no" onChange={e => setResponsetoEnviorment(e.target.value)} />
    <label htmlFor="no">No</label>    
    </div>
</div>
<div>
    <h3>Social Imagination:</h3>
    <div>
    <p>Does your child engage in imaginative play or create elaborate scenarios?</p>    
    <input type="radio" id="yes" name="SocialImagination" value="yes" onChange={e => setSocialImagination(e.target.value)} />
    <label htmlFor="yes">Yes</label>
    <input type="radio" id="no" name="SocialImagination" value="no" onChange={e => setSocialImagination(e.target.value)} />
    <label htmlFor="no">No</label> 
    </div>
</div>
<div>
<h3>Sleep Patterns:</h3>
    <div>
    <p>Does your child experience night-time restlessness or insomnia?</p>  
    <input type="radio" id="yes" name="SleepPatterns" value="yes" onChange={e => setSleepPatterns(e.target.value)} />
    <label htmlFor="yes">Yes</label>
    <input type="radio" id="no" name="SleepPatterns" value="no" onChange={e => setSleepPatterns(e.target.value)} />
    <label htmlFor="no">No</label>   
    </div>
</div>
<div>
<h3>Emotional Regulation:</h3>
    <div>
    <p>Does your child regulate their emotions, especially in challenging situations?</p> 
    <input type="radio" id="yes" name="EmotionalRegulation" value="yes" onChange={e => setEmotionalRegulation(e.target.value)} />
    <label htmlFor="yes">Yes</label>
    <input type="radio" id="no" name="EmotionalRegulation" value="no" onChange={e => setEmotionalRegulation(e.target.value)} />
    <label htmlFor="no">No</label>   
    </div>
</div>
<div>
<h3>Self-Awareness:</h3>
    <div>
    <p>Does your child have difficulty recognizing or expressing personal needs, such as hunger or discomfort?</p>   
    <input type="radio" id="yes" name="SelfAwareness" value="yes" onChange={e => setSelfAwareness(e.target.value)} />
    <label htmlFor="yes">Yes</label>
    <input type="radio" id="no" name="SelfAwareness" value="no" onChange={e => setSelfAwareness(e.target.value)} />
    <label htmlFor="no">No</label>  
    </div>
</div>
<div>
<h3>Interest and Focus:</h3>
    <div>
    <p>Are your child's primary interests limited in range, with a strong resistance to exploring new activities, and is their focus on these interests intense?</p> 
    <input type="radio" id="yes" name="InterestandFocus" value="yes" onChange={e => setInterestandFocus(e.target.value)} />
    <label htmlFor="yes">Yes</label>
    <input type="radio" id="no" name="InterestandFocus" value="no" onChange={e => setInterestandFocus(e.target.value)} />
    <label htmlFor="no">No</label>    
    </div>
</div>
    <button  className="AssessmentButton" type="submit">Submit</button>
</form>
    </div>
    </div>

);
}

export default AssessmentTest;