import Card from '../components/Card'
import { Platoons } from '../utils/Platoon_map'
import './Battalion.css'
const Battalion = ({ type, setArmy }) => {
    const handleSoldierChange = (unit, value) => {
        setArmy(prev => ({
            ...prev,
            [unit]: value
        }));
    };

    return (
        <>
            <div className='battalion__wrapper'>
                <div>
                    <h1>{type} Battalion</h1>
                    <div className='cards'>
                        {
                            Platoons.map((item, index) => (
                                <Card
                                    key={index}
                                    icon={item.icon}
                                    name={item.unit}
                                    description={item.description}
                                    onSoldierChange={handleSoldierChange}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Battalion
