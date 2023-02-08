import react from "react"
import PackStyle from "../landingPage/Packages.module.css"

const Packages = () => {
  return (
    <div>
      <h1 className={PackStyle.head}>Packages</h1>

      <div className={PackStyle.cardRow}>
        <div className={PackStyle.cardBody}>
          <a href="#" className={PackStyle.linPrb}>
            <div className={PackStyle.card}>
              <div>
                <img alt="travel-image" src="/images/travel.jpeg" className={PackStyle.iSize} />
              </div>
              <div className={PackStyle.cHeading}>Dubai Family Tour</div>
              <div className={PackStyle.prize}>&#36;400</div>
              <div className={PackStyle.cButton}>Book Tour</div>
            </div>
          </a>
        </div>
        <div className={PackStyle.cardBody}>
          <a href="#" className={PackStyle.linPrb}>
            <div className={PackStyle.card}>
              <div>
                <img src="/images/travel.jpeg" className={PackStyle.iSize} />
              </div>
              <div className={PackStyle.cHeading}>Dubai Family Tour</div>
              <div className={PackStyle.prize}>&#36;400</div>
              <div className={PackStyle.cButton}>Book Tour</div>
            </div>
          </a>
        </div>{" "}
        <div className={PackStyle.cardBody}>
          <a href="#" className={PackStyle.linPrb}>
            <div className={PackStyle.card}>
              <div>
                <img src="/images/travel.jpeg" className={PackStyle.iSize} />
              </div>
              <div className={PackStyle.cHeading}>Dubai Family Tour</div>
              <div className={PackStyle.prize}>&#36;400</div>
              <div className={PackStyle.cButton}>Book Tour</div>
            </div>
          </a>
        </div>{" "}
        <div className={PackStyle.cardBody}>
          <a href="#" className={PackStyle.linPrb}>
            <div className={PackStyle.card}>
              <div>
                <img src="/images/travel.jpeg" className={PackStyle.iSize} />
              </div>
              <div className={PackStyle.cHeading}>Dubai Family Tour</div>
              <div className={PackStyle.prize}>&#36;400</div>
              <div className={PackStyle.cButton}>Book Tour</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Packages
