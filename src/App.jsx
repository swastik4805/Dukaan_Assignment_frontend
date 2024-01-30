
import './App.css'
import { RevenueCard } from './coomponents/RevenueCard'
import { MainRevenueCard } from './coomponents/MainRevenueCard'
import { Appbar } from './coomponents/Appbar'
import { ButtonPair } from './coomponents/ButtonPair'
import { SecondSearch } from './coomponents/SecondSearch'
import { Table } from './coomponents/Table'

function App() {

  return (
    <>
      <Appbar></Appbar>
      
      <div className=' pl-4 pt-8 pb-8'>
        <svg width="91" height="16" viewBox="0 0 91 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.94 1.32C11.86 1.32 14.94 4.42 14.94 8.32C14.94 12.2 11.86 15.28 7.94 15.28C4.02 15.28 0.96 12.2 0.96 8.32C0.96 4.42 4.02 1.32 7.94 1.32ZM7.94 13.26C10.66 13.26 12.78 11.14 12.78 8.32C12.78 5.48 10.66 3.34 7.94 3.34C5.24 3.34 3.12 5.48 3.12 8.32C3.12 11.14 5.24 13.26 7.94 13.26ZM24.6589 5.06H26.9189L22.6389 15H20.4189L16.1589 5.06H18.4189L21.5389 12.52L24.6589 5.06ZM37.7145 9.82V10.54H29.6745C29.8745 12.38 31.2145 13.48 32.6745 13.48C33.7745 13.48 34.8945 13.16 35.5945 11.76L37.4545 12.16C36.6345 14.24 34.8745 15.28 32.6745 15.28C29.9745 15.28 27.6145 13.2 27.6145 10.06C27.6145 6.9 29.9545 4.8 32.7545 4.8C35.4145 4.8 37.6145 6.84 37.7145 9.82ZM32.7545 6.64C31.4745 6.64 30.0545 7.46 29.7345 9.06H35.5945C35.2745 7.44 34.1145 6.64 32.7545 6.64ZM45.8775 4.96C46.1175 4.96 46.3175 4.96 46.5775 5.04L46.4375 7.04C46.2775 7.02 46.0375 7.02 45.8575 7.02C43.3375 7.02 42.0975 8.78 42.0975 11.5V15H40.0175V5.08H42.0975V7.2C42.8975 5.88 44.1575 4.96 45.8775 4.96ZM55.6159 5.06H57.8759L53.5959 15H51.3759L47.1159 5.06H49.3759L52.4959 12.52L55.6159 5.06ZM60.9245 0.799999C61.6845 0.799999 62.2445 1.4 62.2445 2.1C62.2445 2.84 61.6845 3.38 60.9245 3.38C60.1445 3.38 59.5845 2.84 59.5845 2.1C59.5845 1.4 60.1445 0.799999 60.9245 0.799999ZM61.9645 5.08V15H59.8845V5.08H61.9645ZM74.5114 9.82V10.54H66.4714C66.6714 12.38 68.0114 13.48 69.4714 13.48C70.5714 13.48 71.6914 13.16 72.3914 11.76L74.2514 12.16C73.4314 14.24 71.6714 15.28 69.4714 15.28C66.7714 15.28 64.4114 13.2 64.4114 10.06C64.4114 6.9 66.7514 4.8 69.5514 4.8C72.2114 4.8 74.4114 6.84 74.5114 9.82ZM69.5514 6.64C68.2714 6.64 66.8514 7.46 66.5314 9.06H72.3914C72.0714 7.44 70.9114 6.64 69.5514 6.64ZM88.3563 5.08H90.4363L87.1163 15.04H85.2163L82.9363 8.36L80.6563 15.04H78.7563L75.4363 5.08H77.5163L79.7763 11.98L82.1163 5.08H83.7563L86.0963 11.98L88.3563 5.08Z" fill="#1A181E"/>
        </svg>
      </div>

      <div className='grid grid-cols-3'>
        <MainRevenueCard title={"Next Payout  ?"}
          amount={"Rs. 2,313.23"}
          orderCount={"13 order(s)"}
          nextPaymentDate={"Today: 4:00PM"}
        ></MainRevenueCard>
        
        <RevenueCard title={"Amount pending"}
          amount={"Rs. 92,312.20"}
          orderCount={"13 order(s)"}
        ></RevenueCard>

        <RevenueCard title={"Amount pending"}
          amount={"Rs. 92,312.20"}
          orderCount={"13 order(s)"}
        ></RevenueCard>
      </div>

      <div className="flex p-4 font-semibold text-xl pt-8">
            <div>
                <button>Transactions</button>
            </div>
            <div className="pl-4"> | </div>
            <div className="pl-4">
                <button>This Month</button>
            </div>
        </div>
      
      <ButtonPair></ButtonPair>

      <SecondSearch></SecondSearch>

      <Table></Table>
      
    </>
  ) 
}

export default App
