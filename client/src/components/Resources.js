import React from 'react';
import './components.css'

const Resources = () => {
    return (
        <div>
            <div className='ResourcesTitle'>
            <h1>Resources</h1>
            <p>Here are some resources for you to use!</p></div>
            <div className='mainContentResources'>
                <div>
                <h2>English</h2>
                <h5>Book</h5>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbaRKoBa0seZZ6ppgt9vLeBL-fZ1fT_KuGUg&usqp=CAU" alt="Social Stories" />
                <p> <a href ="https://mcstor.library.milligan.edu/bitstream/handle/11558/2468/Gillum_Morgan_20170501.pdf?sequence=1&isAllowed=y">Social Stories</a> </p>
</div>
                <div>
                    <h2>Espanol</h2>
                    <h5>Cuento</h5>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWI3oKtBG32eaD0ajc5VaQ-DaVc9oCjV-Cg&usqp=CAU" alt="El cazo de Lorenzo" />
                    <p><a href="https://andalicante.org/enlaces/cuentos-discapacidad/el-cazo-de-lorenzo.pdf">El cazo de Lorenzo</a></p>
                </div>
            </div>
        </div>
    );
}

export default Resources;

