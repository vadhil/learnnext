import axios from "axios";
import styles from '../../styles/Home.module.css'

const CoinList = ({coinData}) => {
    console.log(coinData);

    return <div>
        {coinData.coins.map((coin)=>{
            return <div className={styles.flex}>
            <img src={coin.icon} alt="" />
            <h1>{coin.id}</h1>
            <h3>{coin.price}</h3>
            </div>
        })}
    </div>
}

export const getStaticProps = async (params) => {
    const id = params.id;
  const data = await axios.get(" https://api.coinstats.app/public/v1/coins?skip=0 ")

  return {
    props: {
        coinData : data.data,
    }
  }
}
export default CoinList;