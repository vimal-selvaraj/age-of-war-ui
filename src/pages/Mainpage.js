import { useState } from 'react'
import Battalion from './Battalion'
import axios from 'axios'
import { Platoons } from '../utils/Platoon_map';

const initialArmy = Platoons.reduce((acc, curr) => ({ ...acc, [curr.unit]: 0 }), {});
const Mainpage = () => {
  const [easternArmy, setEasternArmy] = useState(initialArmy);
  const [westernArmy, setWesternArmy] = useState(initialArmy);
  const [battleResult, setBattleResult] = useState(null);
  const [error, setError] = useState("");

  const handleCommenceBattle = () => {
    // Validation
    if (easternArmy.length === 0 || westernArmy.length === 0 ||
      Object.values(easternArmy).some(v => !v || Number(v) <= 0) ||
      Object.values(westernArmy).some(v => !v || Number(v) <= 0)) {
      setError("❌ All platoons must have soldiers greater than 0.");
      return;
    }
    setError("");
    const myArmyStr = Object.entries(easternArmy).map(([unitClass, count]) => `${unitClass.replace(/\s+/g, '')}#${count}`).join(';');
    const opponentArmyStr = Object.entries(westernArmy).map(([unitClass, count]) => `${unitClass.replace(/\s+/g, '')}#${count}`).join(';');
    if (!error) {
      try {
        const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL || 'http://localhost:5000';
        const body = {
          myArmyStr: myArmyStr,
          opponentArmyStr: opponentArmyStr
        }
        const commence = async () => {
          const res = await axios.post(`${baseUrl}/battle/commence-battle`, body, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
          setBattleResult(res?.data);
          setEasternArmy(initialArmy);
          setWesternArmy(initialArmy);
        }
        commence()
      } catch (error) {
        setError(error?.message || 'Error occurred during battle planning');
        setEasternArmy(initialArmy);
        setWesternArmy(initialArmy);
      }
    }
  };


  return (
    <>
      <div className='header'>
        <h1>Battlefield</h1>
        <div className='battlefield__summary'>
          <p>Deploy your forces strategically. Each unit type has advantages over others, dealing double damage when properly positioned.</p>
          <p>Plan your army composition wisely!</p>
        </div>
      </div>

      <div className='battalions'>
        <Battalion type='Eastern' setArmy={setEasternArmy} />
        <div className='versus'><span>VS</span></div>
        <Battalion type='Western' setArmy={setWesternArmy} />
      </div>
      {error && <p className='error__message'>{error}</p>}
      <div className='commence__button'>
        <button onClick={handleCommenceBattle}>commence battle</button>
      </div>


      {battleResult && (
        <div className="battle-result">
          <h2>{battleResult.message}</h2>
          <p>Total Winning Arrangements: <strong>{battleResult?.data?.totalWinning || 0}</strong></p>
          {battleResult?.data !== null && battleResult?.data.arrangements.map((arr, idx) => (
            <div key={idx} className="arrangement-card">
              <h3>Arrangement {arr.arrangementNumber} - Wins: {arr.wins}/{arr.order.length}</h3>
              <p><strong>Order:</strong> {arr.order.join(" ➡ ")}</p>

              <table className="result-table">
                <thead>
                  <tr>
                    <th>Battle</th>
                    <th>Eastern Battalion(own)</th>
                    <th>Western Battalion(opponent)</th>
                    <th>Outcome</th>
                  </tr>
                </thead>
                <tbody>
                  {arr.results.map((battle, i) => (
                    <tr key={i}>
                      <td>{battle.battle}</td>
                      <td>{battle.myPlatoon}</td>
                      <td>{battle.opponentPlatoon}</td>
                      <td className={battle.outcome}>{battle.outcome}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Mainpage
