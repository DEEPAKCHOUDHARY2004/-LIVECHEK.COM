// import ReactPlayer from 'react-player'




function Vedio(Demovedio) {
    return (
        <>
            <div className="cards">
                <div className="card">
                <div class="tooltip">
                <span class="tooltiptext">Click To play</span>
              
                    <a href={Demovedio.src} target="_blank" rel="noreferrer" >
                    
                        <img src={Demovedio.pos} alt="mycard" className="card-img" />
                        </a></div> <div className="card-info">
                            <span className="card-category"></span>

                            <h3 className="card_title">{Demovedio.heading} </h3>

                            <div className="vedio_info">
                                <span className="vedio_catgory"></span>
                            </div>
</div>
                </div>
            </div>



        </>

    )

}
export default Vedio


