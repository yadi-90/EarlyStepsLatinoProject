import React, {useState} from 'react';

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
<div>
  <p>2. Is your child able to express their needs and wants verbally?</p>
  <input type="radio" id="yes-communicationSkills-2" name="communicationSkills" value="yes" onChange={e => setCommunicationSkills(e.target.value)} />
  <label htmlFor="yes-communicationSkills-2">Yes</label>
  <input type="radio" id="no-communicationSkills-2" name="communicationSkills" value="no" onChange={e => setCommunicationSkills(e.target.value)} />
  <label htmlFor="no-communicationSkills-2">No</label>
</div>
    </div>
    <div>
        <h3>Social Interaction</h3>
        <div>
        <p>3. Does your child engage in pretend play or imaginative activities?</p>
        <input type="radio" id="yes" name="socialInteraction" value="yes" onChange={e => setSocialInteraction(e.target.value)} />
    <label htmlFor="yes">Yes</label>
    <input type="radio" id="no" name="socialInteraction" value="no" onChange={e => setSocialInteraction(e.target.value)} />
    <label htmlFor="no">No</label></div>
    <div>
    <p>4. How does your child interact with peers? Are there challenges in making friends?</p>
    <input type="radio" id="yes" name="socialInteraction" value="yes" onChange={e => setSocialInteraction(e.target.value)} />
    <label htmlFor="yes">Yes</label>
    <input type="radio" id="no" name="socialInteraction" value="no" onChange={e => setSocialInteraction(e.target.value)} />
    <label htmlFor="no">No</label>
    </div>
    </div>
    <div>
        <h3>Repetitive Behavior</h3>
        <div>
        <p>5. Does your child engage in repetitive behaviors, such as hand-flapping or rocking?</p>
        <input type="radio" id="yes" name="repetitiveBehavior" value="yes" onChange={e => setRepetitiveBehavior(e.target.value)} />
    <label htmlFor="yes">Yes</label>
    <input type="radio" id="no" name="repetitiveBehavior" value="no" onChange={e => setRepetitiveBehavior(e.target.value)} />
    <label htmlFor="no">No</label></div>
    <div>
    <p>6. Are there specific routines or rituals that your child insists on maintaining?</p>
    <input type="radio" id="yes" name="repetitiveBehavior" value="yes" onChange={e => setRepetitiveBehavior(e.target.value)} />
    <label htmlFor="yes">Yes</label>
    <input type="radio" id="no" name="repetitiveBehavior" value="no" onChange={e => setRepetitiveBehavior(e.target.value)} />
    <label htmlFor="no">No</label>
    </div></div>
    <div>
        <h3>Sensory Sensitivity</h3>
        <div>
        <p>7. Does your child have sensitivities to light, sound, touch, or textures? </p>
        <input type="radio" id="yes" name="sensorySensitivity" value="yes" onChange={e => setSensorySensitivity(e.target.value)} />
    <label htmlFor="yes">Yes</label>
    <input type="radio" id="no" name="sensorySensitivity" value="no" onChange={e => setSensorySensitivity(e.target.value)} />
    <label htmlFor="no">No</label>
        </div>
        <p> 8. How does your child react to changes in their environment?</p>
        <input type="radio" id="yes" name="sensorySensitivity" value="yes" onChange={e => setSensorySensitivity(e.target.value)} />
    <label htmlFor="yes">Yes</label>
    <input type="radio" id="no" name="sensorySensitivity" value="no" onChange={e => setSensorySensitivity(e.target.value)} />
    <label htmlFor="no">No</label>
    </div>
<div>
<h3> Language Development </h3>
<div>
<p>9. Has your child's language development progressed appropriately for their age?</p>
<input type="radio" id="yes" name="languageDevelopment" value="yes" onChange={e => setLanguageDevelopment(e.target.value)} />
    <label htmlFor="yes">Yes</label>
    <input type="radio" id="no" name="languageDevelopment" value="no" onChange={e => setLanguageDevelopment(e.target.value)} />
    <label htmlFor="no">No</label>
</div>
<div>
<p>10. Does your child use and understand language appropriately for their age?</p>
<input type="radio" id="yes" name="languageDevelopment" value="yes" onChange={e => setLanguageDevelopment(e.target.value)} />
    <label htmlFor="yes">Yes</label>
    <input type="radio" id="no" name="languageDevelopment" value="no" onChange={e => setLanguageDevelopment(e.target.value)} />
    <label htmlFor="no">No</label>
    </div>
</div>
















    <button type="submit">Submit</button>
</form>
    </div>
    </div>

);
}

export default AssessmentTest;