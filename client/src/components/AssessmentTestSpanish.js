import React, {useState} from 'react';

const AssessmentTestSpanish = () => {

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
        <h1>Prueba de Evaluación</h1>
       
        <h3>Habilidades de Comunicación:</h3> 
        <div>
  <p>1. ¿Utiliza su hijo gestos, contacto visual y expresiones faciales de manera apropiada para su edad?</p>
  <input type="radio" id="yes-communicationSkills-1" name="communicationSkills" value="yes" onChange={e => setCommunicationSkills(e.target.value)} />
  <label htmlFor="yes-communicationSkills-1">Si</label>
  <input type="radio" id="no-communicationSkills-1" name="communicationSkills" value="no" onChange={e => setCommunicationSkills(e.target.value)} />
  <label htmlFor="no-communicationSkills-1">No</label>
</div>
    </div>
    <div>
        <h3>Interacción Social:</h3>
        <div>
        <p>2. ¿Participa su hijo en juegos de fantasía o actividades imaginativas?</p>
        <input type="radio" id="yes" name="socialInteraction" value="yes" onChange={e => setSocialInteraction(e.target.value)} />
    <label htmlFor="yes">Si</label>
    <input type="radio" id="no" name="socialInteraction" value="no" onChange={e => setSocialInteraction(e.target.value)} />
    <label htmlFor="no">No</label></div>
    </div>
    <div>
        <h3>Comportamiento Repetitivo:</h3>
        <div>
        <p>3. ¿Se involucra su hijo en comportamientos repetitivos, como agitar las manos o balancearse?</p>
        <input type="radio" id="yes" name="repetitiveBehavior" value="yes" onChange={e => setRepetitiveBehavior(e.target.value)} />
    <label htmlFor="yes">Si</label>
    <input type="radio" id="no" name="repetitiveBehavior" value="no" onChange={e => setRepetitiveBehavior(e.target.value)} />
    <label htmlFor="no">No</label></div>
  </div>
    <div>
        <h3>Sensibilidad Sensorial:</h3>
        <div>
        <p>4. ¿Su hijo tiene sensibilidades a la luz, sonidos, tacto o texturas? </p>
        <input type="radio" id="yes" name="sensorySensitivity" value="yes" onChange={e => setSensorySensitivity(e.target.value)} />
    <label htmlFor="yes">Si</label>
    <input type="radio" id="no" name="sensorySensitivity" value="no" onChange={e => setSensorySensitivity(e.target.value)} />
    <label htmlFor="no">No</label>
        </div> </div>
<div>
<h3> Desarrollo del Lenguaje: </h3>
<div>
<p>5. ¿Ha progresado el desarrollo del lenguaje de su hijo de manera apropiada para su edad?</p>
<input type="radio" id="yes" name="ResponsetoEmotions" value="yes" onChange={e => setLanguageDevelopment(e.target.value)} />
    <label htmlFor="yes">Si</label>
    <input type="radio" id="no" name="ResponsetoEmotions" value="no" onChange={e => setLanguageDevelopment(e.target.value)} />
    <label htmlFor="no">No</label>
</div>
</div>
<div>
    <h3>Respuesta a Emociones:</h3>
    <div>
<p> 6. ¿Cómo responde su hijo a diferentes emociones, tanto las suyas como las de los demás?</p>
<input type="radio" id="yes" name="languageDevelopment" value="yes" onChange={e => setResponsetoEmotions(e.target.value)} />
    <label htmlFor="yes">Si</label>
    <input type="radio" id="no" name="languageDevelopment" value="no" onChange={e => setResponsetoEmotions(e.target.value)} />
    <label htmlFor="no">No</label>
    </div>
</div>
<div>
<h3>Contacto Visual:</h3>
    <div>
    <p>7. ¿Hace su hijo contacto visual apropiado durante las conversaciones?</p>  
    <input type="radio" id="yes" name="EyeContact" value="yes" onChange={e => setEyeContact(e.target.value)} />
    <label htmlFor="yes">Si</label>
    <input type="radio" id="no" name="EyeContact" value="no" onChange={e => setEyeContact(e.target.value)} />
    <label htmlFor="no">No</label>
    </div>
</div>
<div>
<h3>Habilidades de Juego</h3>
    <div>
    <p>8. ¿Juega su hijo con otros niños?</p>  
    <input type="radio" id="yes" name="PlaySkills" value="yes" onChange={e => setPlaySkills(e.target.value)} />
    <label htmlFor="yes">Si</label>
    <input type="radio" id="no" name="PlaySkills" value="no" onChange={e => setPlaySkills(e.target.value)} />
    <label htmlFor="no">No</label>
    </div>
</div>
<div>
<h3>Adaptabilidad:</h3>
    <div>
    <p>9. ¿Se adapta su hijo a cambios en la rutina o eventos inesperados?</p>  
    <input type="radio" id="yes" name="Adaptability" value="yes" onChange={e => setAdapability(e.target.value)} />
    <label htmlFor="yes">Si</label>
    <input type="radio" id="no" name="Adaptability" value="no" onChange={e => setAdapability(e.target.value)} />
    <label htmlFor="no">No</label>
    </div>
</div>
<div>
<h3>Atención Conjunta:</h3>
    <div>
    <p> 10. ¿Comparte su hijo la atención con otros, como señalar objetos de interés?</p> 
    <input type="radio" id="yes" name="JointAttention" value="yes" onChange={e => setJointAttention(e.target.value)} />
    <label htmlFor="yes">Si</label>
    <input type="radio" id="no" name="JointAttention" value="no" onChange={e => setJointAttention(e.target.value)} />
    <label htmlFor="no">No</label> 
    </div>
</div>
<div>
<h3>Empatía:</h3>
    <div>
    <p> 11. ¿Demuestra su hijo empatía o comprensión de los sentimientos de los demás?</p>  
    <input type="radio" id="yes" name="Empathy" value="yes" onChange={e => setEmpathy(e.target.value)} />
    <label htmlFor="yes">Si</label>
    <input type="radio" id="no" name="Empathy" value="no" onChange={e => setEmpathy(e.target.value)} />
    <label htmlFor="no">No</label>  
    </div>
</div>
<div>
<h3>Desarrollo del Habla:</h3>
    <div>
    <p> 12. ¿Ha habido preocupaciones sobre el desarrollo de los sonidos del habla o la articulación de su hijo?</p>
    <input type="radio" id="yes" name="SpeechDevelopment" value="yes" onChange={e => setSpeechDevelopment(e.target.value)} />
    <label htmlFor="yes">Si</label>
    <input type="radio" id="no" name="SpeechDevelopment" value="no" onChange={e => setSpeechDevelopment(e.target.value)} />
    <label htmlFor="no">No</label>  
    </div>
</div>
<div>
<h3>Habilidades Motoras:</h3>
    <div>
    <p> 13. ¿Se están desarrollando las habilidades motoras gruesas y finas de su hijo?</p>
    <input type="radio" id="yes" name="MotorSkills" value="yes" onChange={e => setMotorSkills(e.target.value)} />
    <label htmlFor="yes">Si</label>
    <input type="radio" id="no" name="MotorSkills" value="no" onChange={e => setMotorSkills(e.target.value)} />
    <label htmlFor="no">No</label>     
    </div>
</div>
<div>
<h3>Duración de la Atención:</h3>
    <div>
    <p> 14. ¿Se enfoca su hijo en una tarea o actividad específica?</p>  
    <input type="radio" id="yes" name="AttentionSpan" value="yes" onChange={e => setAttentionSpan(e.target.value)} />
    <label htmlFor="yes">Si</label>
    <input type="radio" id="no" name="AttentionSpan" value="no" onChange={e => setAttentionSpan(e.target.value)} />
    <label htmlFor="no">No</label>     
    </div>
</div>
<div>
    <h3>Respuesta al Entorno:</h3>
    <div>
    <p> 15. ¿Responde su hijo a estímulos sensoriales en su entorno?</p>  
    <input type="radio" id="yes" name="ResponsetoEnvironment" value="yes" onChange={e => setResponsetoEnviorment(e.target.value)} />
    <label htmlFor="yes">Si</label>
    <input type="radio" id="no" name="ResponsetoEnvironment" value="no" onChange={e => setResponsetoEnviorment(e.target.value)} />
    <label htmlFor="no">No</label>    
    </div>
</div>
<div>
    <h3>Imaginación Social:</h3>
    <div>
    <p> 16. ¿Participa su hijo en juegos imaginativos o crea escenarios elaborados?</p>    
    <input type="radio" id="yes" name="SocialImagination" value="yes" onChange={e => setSocialImagination(e.target.value)} />
    <label htmlFor="yes">Si</label>
    <input type="radio" id="no" name="SocialImagination" value="no" onChange={e => setSocialImagination(e.target.value)} />
    <label htmlFor="no">No</label> 
    </div>
</div>
<div>
<h3>Patrones de Sueño:</h3>
    <div>
    <p> 17. ¿Experimenta su hijo inquietud nocturna o insomnio?</p>  
    <input type="radio" id="yes" name="SleepPatterns" value="yes" onChange={e => setSleepPatterns(e.target.value)} />
    <label htmlFor="yes">Si</label>
    <input type="radio" id="no" name="SleepPatterns" value="no" onChange={e => setSleepPatterns(e.target.value)} />
    <label htmlFor="no">No</label>   
    </div>
</div>
<div>
<h3>Regulación Emocional:</h3>
    <div>
    <p> 18. ¿Regula su hijo sus emociones, especialmente en situaciones desafiantes?</p> 
    <input type="radio" id="yes" name="EmotionalRegulation" value="yes" onChange={e => setEmotionalRegulation(e.target.value)} />
    <label htmlFor="yes">Si</label>
    <input type="radio" id="no" name="EmotionalRegulation" value="no" onChange={e => setEmotionalRegulation(e.target.value)} />
    <label htmlFor="no">No</label>   
    </div>
</div>
<div>
<h3>Autoconciencia:</h3>
    <div>
    <p> 19. ¿Tiene su hijo dificultades para reconocer o expresar necesidades personales, como hambre o incomodidad?</p>   
    <input type="radio" id="yes" name="SelfAwareness" value="yes" onChange={e => setSelfAwareness(e.target.value)} />
    <label htmlFor="yes">Si</label>
    <input type="radio" id="no" name="SelfAwareness" value="no" onChange={e => setSelfAwareness(e.target.value)} />
    <label htmlFor="no">No</label>  
    </div>
</div>
<div>
<h3>Interés y Enfoque:</h3>
    <div>
    <p> 20. ¿Los intereses principales de su hijo tienen un rango limitado, con una fuerte resistencia a explorar nuevas actividades, y es intensa su concentración en estos intereses?</p> 
    <input type="radio" id="yes" name="InterestandFocus" value="yes" onChange={e => setInterestandFocus(e.target.value)} />
    <label htmlFor="yes">Si</label>
    <input type="radio" id="no" name="InterestandFocus" value="no" onChange={e => setInterestandFocus(e.target.value)} />
    <label htmlFor="no">No</label>    
    </div>
</div>















    <button type="submit">Submit</button>
</form>
    </div>
    </div>

);
}


export default AssessmentTestSpanish;