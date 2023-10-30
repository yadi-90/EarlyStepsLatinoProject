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
return (
<form>
    <div>
        <h1>Assessment Test</h1>
        <h3>Communication Skills</h3>
        <p> Does your child use gestures, eye contact, and facial expressions appropriately for their age?</p>
        <input type="radio" id="yes" name="communicationSkills" value="yes" onChange={e => setCommunicationSkills(e.target.value)} />
    <label htmlFor="yes">Yes</label>
    <input type="radio" id="no" name="communicationSkills" value="no" onChange={e => setCommunicationSkills(e.target.value)} />
    <label htmlFor="no">No</label>
    </div>
    <div>
        <h3>Social Interaction</h3>
        <p>Does your child engage in pretend play or imaginative activities?</p>
        <input type="radio" id="yes" name="socialInteraction" value="yes" onChange={e => setSocialInteraction(e.target.value)} />
    <label htmlFor="yes">Yes</label>
    <input type="radio" id="no" name="socialInteraction" value="no" onChange={e => setSocialInteraction(e.target.value)} />
    <label htmlFor="no">No</label>
    </div>
</form>
);
}

export default AssessmentTest;