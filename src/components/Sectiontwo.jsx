 import myImage from './images/Booy.JPG'; 

export function Sectiontwo() {
    function generateheart() {


    }


    return (
        <section className="hpd-message "  >

            <div className="happy">Happy</div>
            <div className="valentines">Valentines</div>
            <div className="day">Day My Love!</div>
            <img src={myImage} alt="Descriptive Alt Text" style={{ width: '600px', height: 'auto' }} />
        </section>
    )
}