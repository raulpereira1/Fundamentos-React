import React from 'react' 
import DiretaFilho from './DiretaFilho'
export default props => {
    return (
        <div>
            <DiretaFilho nome='Raul' idade={24} nerd={true} />
            <DiretaFilho nome='Carla' idade={19} nerd={false} />
            <DiretaFilho nome='Valentin' idade={200} nerd={true} />
            <DiretaFilho nome='Victoria' idade={24} nerd={false} />
        </div>
    )
}