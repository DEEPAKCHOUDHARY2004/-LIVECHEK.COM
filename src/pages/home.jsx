import React from "react"
import "/Users/livechek/livechek123/src/css/style.css"

import "/Users/livechek/livechek123/src/inc/bootstrap/css/bootstrap.min.css"
import "/Users/livechek/livechek123/src/inc/bootstrap/fonts/glyphicons-halflings-regular.eot"
import "/Users/livechek/livechek123/src/inc/bootstrap/fonts/glyphicons-halflings-regular.svg"
import "/Users/livechek/livechek123/src/inc/bootstrap/fonts/glyphicons-halflings-regular.ttf"
import "/Users/livechek/livechek123/src/inc/bootstrap/fonts/glyphicons-halflings-regular.woff"
import "/Users/livechek/livechek123/src/inc/bootstrap/fonts/glyphicons-halflings-regular.woff2"
import "/Users/livechek/livechek123/src/inc/font-awesome/css/font-awesome.min.css"
import "/Users/livechek/livechek123/src/inc/owl-carousel/css/grabbing.png"
import "/Users/livechek/livechek123/src/css/mobile.css"
import "/Users/livechek/livechek123/src/inc/animations/css/animate.min.css"






class home extends React.Component {

    render() {
        const img = {
            Image: "/Users/livechek/livechek123/src/img/livecheklogo.png"

        }



        return (
            <body data-spy="scroll" data-target="#main-navbar">



                <div class="body">


                    <header id="header" class="header-main">

                        <nav id="main-navbar" class="navbar navbar-default navbar-fixed-top" role="navigation">

                            <div class="container">


                                <div class="navbar-header">
                                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                        <span class="sr-only">Toggle navigation</span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                    </button>
                                    <a class="navbar-brand page-scroll" href="index.html">livechek</a>
                                </div>


                                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    <ul class="nav navbar-nav navbar-right">
                                        <li><a class="page-scroll" href="body">Home</a></li>
                                        <li><a class="page-scroll" href="#about-section">About</a></li>
                                        <li><a class="page-scroll" href="#services-section">Services</a></li>
                                        <li><a class="page-scroll" href="#portfolio-section">Demovedio</a></li>
                                        <li><a class="page-scroll" href="#team-section">Team</a></li>
                                        <li><a class="page-scroll" href="#prices-section">Prices</a></li>
                                        <li><a class="page-scroll" href="#contact-section">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>

                    </header>
                    <section id="text-carousel-intro-section" class="parallax" data-stellar-background-ratio="0.5">

                        <div class="container">
                            <div class="caption text-center text-white" data-stellar-ratio="0.7">

                                <div id="owl-intro-text" class="owl-carousel">
                                    <div class="item">
                                        <h1>LiveChek Pvt Ltd </h1>
                                        <p>Let's make the web beautiful together</p>
                                        <div class="extra-space-l"></div>
                                        {// <a  rel="dd" class="btn btn-blank" href="https://creativemarket.com/Themetorium"  role="button">View More!</a>
                                        }

                                    </div>
                                    <div class="item">
                                        <h1>
                                            <br />



                                            <br />LiveChek Pvt Ltd </h1>
                                        <p>To the greatest Journey</p>
                                        <div class="extra-space-l"></div>
                                        <a rel="dd" class="btn btn-blank" href="#portfolio-section" role="button">Demovedio</a>

                                    </div>
                                    <br />
                                    <br />
                                    <div class="item">
                                        <h1>{//LiveChekInspections
                                        }
                                        </h1>
                                        <p>{//One Page Responsive Theme
                                        }</p>
                                        <div class="extra-space-l"></div>
                                        {//  <a  rel="dd" class="btn btn-blank" href="https://creativemarket.com/Themetorium"  role="button">View More!</a>
                                        }

                                    </div>
                                </div>

                            </div>
                        </div>

                    </section>

                    <section id="about-section" class="page bg-style1">

                        <div class="page-header-wrapper">
                            <div class="container">
                                <div class="page-header text-center wow fadeInUp" data-wow-delay="0.3s">
                                    <h2>About</h2>
                                    <div class="devider"></div>
                                    <p class="subtitle">little information</p>
                                </div>
                            </div>
                        </div>
                        <div className="about-text">
                            <p><center><strong> <b>LiveChek</b> </strong>is a startup founded by successful entrepreneurs and professionals with substantial experience in running large successful companies in the technology sector.<br />The team is focused on the Insurance sector and has built a platform to automate many of the backend Insurance processes that will help Insurance Companies reduce costs,<br /> improve speed and enhance client experience. The system is currently being used commercially by 13 out of India’s 20 leading General Insurance Companies.</center></p></div>
                        {/*
            <div class="rotate-box-1-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-sm-6">
                            <a href="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1527960669566-f882ba85a4c6%3Fixid%3DMnwxMjA3fDB8MHxzZWFyY2h8MXx8YXdlc29tZSUyMHBpY3xlbnwwfHwwfHw%253D%26ixlib%3Drb-1.2.1%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fawesome-pic&tbnid=yJ-Yn0O7oe2zVM&vet=12ahUKEwiunsqdx_7yAhXahUsFHX-LCjMQMygAegUIARC2AQ..i&docid=xC580t-18M2WhM&w=1000&h=667&q=pic&ved=2ahUKEwiunsqdx_7yAhXahUsFHX-LCjMQMygAegUIARC2AQ" class="rotate-box-1 square-icon wow zoomIn" data-wow-delay="0">
                                <span class="rotate-box-icon"><i class="fa fa-users"></i></span>
                                <div class="rotate-box-info">
                                    <h4>Who We Are?</h4>
                                    <p>Lorem ipsum dolor sit amet set, consectetur utes anet adipisicing elit, sed do eiusmod tempor incidist.</p>
                                </div>
                            </a>
                        </div>

                        <div class="col-md-3 col-sm-6">
                            <a href="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1527960669566-f882ba85a4c6%3Fixid%3DMnwxMjA3fDB8MHxzZWFyY2h8MXx8YXdlc29tZSUyMHBpY3xlbnwwfHwwfHw%253D%26ixlib%3Drb-1.2.1%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fawesome-pic&tbnid=yJ-Yn0O7oe2zVM&vet=12ahUKEwiunsqdx_7yAhXahUsFHX-LCjMQMygAegUIARC2AQ..i&docid=xC580t-18M2WhM&w=1000&h=667&q=pic&ved=2ahUKEwiunsqdx_7yAhXahUsFHX-LCjMQMygAegUIARC2AQ" class="rotate-box-1 square-icon wow zoomIn" data-wow-delay="0.2s">
                                <span class="rotate-box-icon"><i class="fa fa-diamond"></i></span>
                                <div class="rotate-box-info">
                                    <h4>What We Do?</h4>
                                    <p>Lorem ipsum dolor sit amet set, consectetur utes anet adipisicing elit, sed do eiusmod tempor incidist.</p>
                                </div>
                            </a>
                        </div>

                        <div class="col-md-3 col-sm-6">
                            <a href="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1527960669566-f882ba85a4c6%3Fixid%3DMnwxMjA3fDB8MHxzZWFyY2h8MXx8YXdlc29tZSUyMHBpY3xlbnwwfHwwfHw%253D%26ixlib%3Drb-1.2.1%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fawesome-pic&tbnid=yJ-Yn0O7oe2zVM&vet=12ahUKEwiunsqdx_7yAhXahUsFHX-LCjMQMygAegUIARC2AQ..i&docid=xC580t-18M2WhM&w=1000&h=667&q=pic&ved=2ahUKEwiunsqdx_7yAhXahUsFHX-LCjMQMygAegUIARC2AQ" class="rotate-box-1 square-icon wow zoomIn" data-wow-delay="0.4s">
                                <span class="rotate-box-icon"><i class="fa fa-heart"></i></span>
                                <div class="rotate-box-info">
                                    <h4>Why We Do It?</h4>
                                    <p>Lorem ipsum dolor sit amet set, consectetur utes anet adipisicing elit, sed do eiusmod tempor incidist.</p>
                                </div>
                            </a>
                        </div>

                        <div class="col-md-3 col-sm-6">
                            <a href="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1527960669566-f882ba85a4c6%3Fixid%3DMnwxMjA3fDB8MHxzZWFyY2h8MXx8YXdlc29tZSUyMHBpY3xlbnwwfHwwfHw%253D%26ixlib%3Drb-1.2.1%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fawesome-pic&tbnid=yJ-Yn0O7oe2zVM&vet=12ahUKEwiunsqdx_7yAhXahUsFHX-LCjMQMygAegUIARC2AQ..i&docid=xC580t-18M2WhM&w=1000&h=667&q=pic&ved=2ahUKEwiunsqdx_7yAhXahUsFHX-LCjMQMygAegUIARC2AQ" class="rotate-box-1 square-icon wow zoomIn" data-wow-delay="0.6s">
                                <span class="rotate-box-icon"><i class="fa fa-clock-o"></i></span>
                                <div class="rotate-box-info">
                                    <h4>Since When?</h4>
                                    <p>Lorem ipsum dolor sit amet set, consectetur utes anet adipisicing elit, sed do eiusmod tempor incidist.</p>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
*/}
                        <div class="extra-space-l"></div>

                        <div class="page-header-wrapper">
                            <div class="container">
                                <div class="page-header text-center wow fadeInUp" data-wow-delay="0.3s">
                                    <h4>Our Skills</h4>
                                </div>
                            </div>
                        </div>

                        <div class="our-skills">
                            <div class="container">
                                <div class="row">

                                    <div class="col-sm-6">
                                        <div class="skill-bar wow slideInLeft" data-wow-delay="0.2s">
                                            <div class="progress-lebel">
                                                <h6>cpmpleate inspection </h6>
                                            </div>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" >
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <div class="skill-bar wow slideInRight" data-wow-delay="0.2s">
                                            <div class="progress-lebel">
                                                <h6>WordPress</h6>
                                            </div>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" >
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <div class="skill-bar wow slideInLeft" data-wow-delay="0.4s">
                                            <div class="progress-lebel">
                                                <h6>Html & Css</h6>
                                            </div>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" >
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <div class="skill-bar wow slideInRight" data-wow-delay="0.4s">
                                            <div class="progress-lebel">
                                                <h6>Javascript</h6>
                                            </div>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" >
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </section>


                    <section id="services-section" class="page text-center">

                        <div class="page-header-wrapper">
                            <div class="container">
                                <div class="page-header text-center wow fadeInDown" data-wow-delay="0.4s">
                                    <h2>Services</h2>
                                    <div class="devider"></div>
                                    <p class="subtitle">what we really know how</p>
                                </div>
                            </div>
                        </div>


                        <div class="rotate-box-2-wrapper">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-3 col-sm-6">
                                        <a href="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1527960669566-f882ba85a4c6%3Fixid%3DMnwxMjA3fDB8MHxzZWFyY2h8MXx8YXdlc29tZSUyMHBpY3xlbnwwfHwwfHw%253D%26ixlib%3Drb-1.2.1%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fawesome-pic&tbnid=yJ-Yn0O7oe2zVM&vet=12ahUKEwiunsqdx_7yAhXahUsFHX-LCjMQMygAegUIARC2AQ..i&docid=xC580t-18M2WhM&w=1000&h=667&q=pic&ved=2ahUKEwiunsqdx_7yAhXahUsFHX-LCjMQMygAegUIARC2AQ" class="rotate-box-2 square-icon text-center wow zoomIn" data-wow-delay="0">
                                            <span class="rotate-box-icon"><i class="fa fa-mobile"></i></span>
                                            <div class="rotate-box-info">
                                                <h4>App Development</h4>
                                                <p>Lorem ipsum dolor sit amet set, consectetur utes anet adipisicing elit, sed do eiusmod tempor incidist.</p>
                                            </div>
                                        </a>
                                    </div>

                                    <div class="col-md-3 col-sm-6">
                                        <a href="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1527960669566-f882ba85a4c6%3Fixid%3DMnwxMjA3fDB8MHxzZWFyY2h8MXx8YXdlc29tZSUyMHBpY3xlbnwwfHwwfHw%253D%26ixlib%3Drb-1.2.1%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fawesome-pic&tbnid=yJ-Yn0O7oe2zVM&vet=12ahUKEwiunsqdx_7yAhXahUsFHX-LCjMQMygAegUIARC2AQ..i&docid=xC580t-18M2WhM&w=1000&h=667&q=pic&ved=2ahUKEwiunsqdx_7yAhXahUsFHX-LCjMQMygAegUIARC2AQ" class="rotate-box-2 square-icon text-center wow zoomIn" data-wow-delay="0.2s">
                                            <span class="rotate-box-icon"><i class="fa fa-pie-chart"></i></span>
                                            <div class="rotate-box-info">
                                                <h4>Ui Design</h4>
                                                <p>Lorem ipsum dolor sit amet set, consectetur utes anet adipisicing elit, sed do eiusmod tempor incidist.</p>
                                            </div>
                                        </a>
                                    </div>

                                    <div class="col-md-3 col-sm-6">
                                        <a href="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1527960669566-f882ba85a4c6%3Fixid%3DMnwxMjA3fDB8MHxzZWFyY2h8MXx8YXdlc29tZSUyMHBpY3xlbnwwfHwwfHw%253D%26ixlib%3Drb-1.2.1%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fawesome-pic&tbnid=yJ-Yn0O7oe2zVM&vet=12ahUKEwiunsqdx_7yAhXahUsFHX-LCjMQMygAegUIARC2AQ..i&docid=xC580t-18M2WhM&w=1000&h=667&q=pic&ved=2ahUKEwiunsqdx_7yAhXahUsFHX-LCjMQMygAegUIARC2AQ" class="rotate-box-2 square-icon text-center wow zoomIn" data-wow-delay="0.4s">
                                            <span class="rotate-box-icon"><i class="fa fa-cloud"></i></span>
                                            <div class="rotate-box-info">
                                                <h4>Cloud Hosting</h4>
                                                <p>Lorem ipsum dolor sit amet set, consectetur utes anet adipisicing elit, sed do eiusmod tempor incidist.</p>
                                            </div>
                                        </a>
                                    </div>

                                    <div class="col-md-3 col-sm-6">
                                        <a href="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1527960669566-f882ba85a4c6%3Fixid%3DMnwxMjA3fDB8MHxzZWFyY2h8MXx8YXdlc29tZSUyMHBpY3xlbnwwfHwwfHw%253D%26ixlib%3Drb-1.2.1%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fawesome-pic&tbnid=yJ-Yn0O7oe2zVM&vet=12ahUKEwiunsqdx_7yAhXahUsFHX-LCjMQMygAegUIARC2AQ..i&docid=xC580t-18M2WhM&w=1000&h=667&q=pic&ved=2ahUKEwiunsqdx_7yAhXahUsFHX-LCjMQMygAegUIARC2AQ" class="rotate-box-2 square-icon text-center wow zoomIn" data-wow-delay="0.6s">
                                            <span class="rotate-box-icon"><i class="fa fa-pencil"></i></span>
                                            <div class="rotate-box-info">
                                                <h4>Coding Pen</h4>
                                                <p>Lorem ipsum dolor sit amet set, consectetur utes anet adipisicing elit, sed do eiusmod tempor incidist.</p>
                                            </div>
                                        </a>
                                    </div>

                                </div>
                            </div>


                        </div>

                    </section>
                    <section id="testimonial-section">
                        <div id="testimonial-trigger" class="testimonial text-white parallax" data-stellar-background-ratio="0.5">
                            <div class="cover"></div>

                            <div class="page-header-wrapper">
                                <div class="container">
                                    <div class="page-header text-center wow fadeInDown" data-wow-delay="0.4s">
                                        <h2>Reviews</h2>
                                        <div class="devider"></div>
                                        <p class="subtitle">What people say about us</p>
                                    </div>
                                </div>
                            </div>

                            <div class="container">
                                <div class="testimonial-inner center-block text-center">
                                    <div id="owl-testimonial" class="owl-carousel">
                                        <div class="item">
                                            <blockquote>
                                                <p>"This was my first experience with that team and outperformed my expectation! They know there stuff and I highly recommend them! A+++".</p>
                                                <footer><cite title="Source Title">Daryl Hodgeman</cite></footer>
                                            </blockquote>
                                        </div>
                                        <div class="item">
                                            <blockquote>
                                                <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua."</p>
                                                <footer><cite title="Source Title">John Doe</cite></footer>
                                            </blockquote>
                                        </div>
                                        <div class="item">
                                            <blockquote>
                                                <p>"Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                                    proident, sunt in culpa qui officia deserunt mollit".</p>
                                                <footer><cite title="Source Title">John Doe</cite></footer>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>





                    <section id="portfolio-section" class="page bg-style1">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="portfolio">
                                        <div class="page-header-wrapper">
                                            <div class="container">
                                                <div class="page-header text-center wow fadeInDown" data-wow-delay="0.4s">
                                                    <h2>Demovedio</h2>
                                                    <div class="devider"></div>
                                                    <p class="subtitle">What we are proud of</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="portfoloi_content_area" >
                                            {  /*   <div class="portfolio_menu" id="filters">
                                            <ul>
                                                <li class="active_prot_menu"><a href="#porfolio_menu" data-filter="*">all</a></li>
                                                <li><a href="#porfolio_menu" data-filter=".websites">websites</a></li>
                                                <li><a href="#porfolio_menu" data-filter=".webDesign" >web design</a></li>
                                                <li><a href="#porfolio_menu" data-filter=".appsDevelopment">apps development</a></li>
                                                <li><a href="#porfolio_menu" data-filter=".GraphicDesign">graphic design</a></li>
                                                <li><a href="#porfolio_menu" data-filter=".responsive">responsive</a></li>
                                            </ul>
</div>*/}

                                            <div class="portfolio_content">
                                                <div class="row" id="portfolio">
                                                    <div class="col-xs-12 col-sm-4 appsDevelopment">
                                                        <div class="portfolio_single_content">
                                                            <div>
                                                                <a href="https://youtu.be/FifuT0eA3-I" >LIVECHEK PIT ENGLISH</a>
                                                                <span>LiveChek PIT english</span>
                                                            </div>

                                                            <img src={require('/Users/livechek/livechek123/src/pages/Demovedio/LiveChek   PIT -(English)    .gif').default} alt="img" />


                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12 col-sm-4 GraphicDesign">
                                                        <div class="portfolio_single_content">
                                                            <img src={require('/Users/livechek/livechek123/src/pages/Demovedio/Agent Inspection Panel .gif').default} alt="img" />
                                                            <div>
                                                                <a href="https://youtu.be/-gEvZRvSarg" rel="noreferrer" target="_blank">Agent Inspection Panel (AIP)</a>
                                                                <span> - How to do the pre-inspection of vehicle </span>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12 col-sm-4 responsive">
                                                        <div class="portfolio_single_content">
                                                            <img src={require('/Users/livechek/livechek123/src/pages/Demovedio/LiveChek - How to Create Request from the Portal .gif').default} alt="img" />
                                                            <div>
                                                                <a href="https://youtu.be/-fveOjkwpbU">LiveChek - How to Create Request from the Portal</a>

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-xs-12 col-sm-4 webDesign websites">
                                                        <div class="portfolio_single_content">
                                                            <img src={require('/Users/livechek/livechek123/src/pages/Demovedio/LiveChek - How to create the App user .gif').default} alt="img" />
                                                            <div>
                                                                <a href="https://youtu.be/poKVhSsY2UQ">LiveChek - How to create the App user</a>
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12 col-sm-4 appsDevelopment websites">
                                                        <div class="portfolio_single_content">
                                                            <img src={require('/Users/livechek/livechek123/src/pages/Demovedio/LiveChek - VCS Portal.gif').default} alt="img" />
                                                            <div>
                                                                <a href="https://youtu.be/BNm_lLBcGLs">LiveChek - VCS Portal</a>
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12 col-sm-4 GraphicDesign">
                                                        <div class="portfolio_single_content">
                                                            <img src={require('/Users/livechek/livechek123/src/pages/Demovedio/LiveChek AIP Demo-(Hindi) .gif').default} alt="img" />
                                                            <div>
                                                                <a href="https://youtu.be/x-KGmZYtM2A">LiveChek Hindi</a>
                                                                <span>LiveChek Demo Hindi</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12 col-sm-4 responsive">
                                                        <div class="portfolio_single_content">
                                                            <img src={require('/Users/livechek/livechek123/src/pages/Demovedio/LiveChek AIP Demo.gif').default} alt="img" />
                                                            <div>
                                                                <a href="https://youtu.be/GAbhF-B-duo">LiveChek AIP Demo</a>
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12 col-sm-4 GraphicDesign">
                                                        <div class="portfolio_single_content">
                                                            <img src={require('/Users/livechek/livechek123/src/pages/Demovedio/LiveChek AIP Kannada Car.gif').default} alt="img" />
                                                            <div>
                                                                <a href="https://youtu.be/Ucv3gLaG9bc">LiveChek AIP Kannada Car</a>
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12 col-sm-4 websites">
                                                        <div class="portfolio_single_content">
                                                            <img src={require('/Users/livechek/livechek123/src/pages/Demovedio/LiveChek AIP Malayalam Car .gif').default} alt="img" />
                                                            <div>
                                                                <a href="https://youtu.be/uU3mcVg4XHo">LiveChek AIP Malayalam Car</a>
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12 col-sm-4 websites">
                                                        <div class="portfolio_single_content">
                                                            <img src={require('/Users/livechek/livechek123/src/pages/Demovedio/LiveChek AIP Marathi Car.gif').default} alt="img" />
                                                            <div>
                                                                <a href="https://youtu.be/Q0myXwuSK8I">LiveChek AIP Marathi Car</a>
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12 col-sm-4 websites">
                                                        <div class="portfolio_single_content">
                                                            <img src={require('/Users/livechek/livechek123/src/pages/Demovedio/LiveChek AIP Tamil Car.gif').default} alt="img" />
                                                            <div>
                                                                <a href="https://youtu.be/U-FSCHy-XpE">LiveChek AIP Tamil Car</a>
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12 col-sm-4 websites">
                                                        <div class="portfolio_single_content">
                                                            <img src={require('/Users/livechek/livechek123/src/pages/Demovedio/LiveChek AIP Telugu Car.gif').default} alt="img" />
                                                            <div>
                                                                <a href="https://youtu.be/91SkIDHAGEQ">LiveChek AIP Telugu Car</a>
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12 col-sm-4 websites">
                                                        <div class="portfolio_single_content">
                                                            <img src={require('/Users/livechek/livechek123/src/pages/Demovedio/LiveChek PIT - Pre-Inspection Toolkit for Client to do the pre-inspection of vehicle .gif').default} alt="img" />
                                                            <div>
                                                                <a href="https://youtu.be/Qjr3OHk21Ak">PIT - Pre-Inspection Toolkit for Client to do the<br /> pre-inspection of vehicle</a>
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12 col-sm-4 websites">
                                                        <div class="portfolio_single_content">
                                                            <img src={require('/Users/livechek/livechek123/src/pages/Demovedio/LIVECHEK PIT -(Hindi) .gif').default} alt="img" />
                                                            <div>
                                                                <a href="https://youtu.be/SkV9rl84YME">
                                                                    LIVECHEK PIT HINDI</a>
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12 col-sm-4 websites">
                                                        <div class="portfolio_single_content">
                                                            <img src={require('/Users/livechek/livechek123/src/pages/Demovedio/LiveChek Pre-inspection App - English.gif').default} alt="img" />
                                                            <div>
                                                                <a href="https://youtu.be/raXjlLsUBHk">LiveChek Pre-inspection App - Hindi</a>
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                    </div>




                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="counter-section">
                        <div id="counter-up-trigger" class="counter-up text-white parallax" data-stellar-background-ratio="0.5" >
                            <div class="cover"></div>

                            <div class="page-header-wrapper">
                                <div class="container">
                                    <div class="page-header text-center wow fadeInDown" data-wow-delay="0.4s">
                                        <h2>Some Fun Facts</h2>
                                        <div class="devider"></div>
                                        <p class="subtitle">Before anyone is not told</p>
                                    </div>
                                </div>
                            </div>

                            <div class="container">

                                <div class="row">

                                    <div class="fact text-center col-md-3 col-sm-6">
                                        <div class="fact-inner">
                                            <i class="fa fa-users fa-3x"></i>
                                            <div class="extra-space-l"></div>
                                            <span class="counter">6666</span>
                                            <p class="lead">Clients Worked With</p>
                                        </div>
                                    </div>

                                    <div class="fact text-center col-md-3 col-sm-6">
                                        <div class="fact-inner">
                                            <i class="fa fa-leaf fa-3x"></i>
                                            <div class="extra-space-l"></div>
                                            <span class="counter">800</span>
                                            <p class="lead">Completed Projects</p>
                                        </div>
                                    </div>

                                    <div class="fact text-center col-md-3 col-sm-6">
                                        <div class="fact-inner">
                                            <i class="fa fa-trophy fa-3x"></i>
                                            <div class="extra-space-l"></div>
                                            <span class="counter">55</span>
                                            <p class="lead">Winning Awards</p>
                                        </div>
                                    </div>

                                    <div class="fact last text-center col-md-3 col-sm-6">
                                        <div class="fact-inner">
                                            <i class="fa fa-coffee fa-3x"></i>
                                            <div class="extra-space-l"></div>
                                            <span class="counter">1100</span>
                                            <p class="lead">Cups of coffee drinking</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>





                    <section id="team-section" class="page">

                        <div class="page-header-wrapper">
                            <div class="container">
                                <div class="page-header text-center wow fadeInDown" data-wow-delay="0.4s">
                                    <h2>Our Team</h2>
                                    <div class="devider"></div>
                                    <p class="subtitle">Meat our experts</p>
                                </div>
                            </div>
                        </div>

                        <div class="container">
                            <div class="row">
                                <div class="team-items">
                                    <div class="col-md-2">
                                        <div class="team-container wow bounceIn" data-wow-delay="0.2s">
                                            <div class="team-item">
                                                <div class="team-triangle">
                                                    <div class="content">

                                                        <img className="team1" src={require('/Users/livechek/livechek123/src/img/team/118465388_3200892113292830_3272796302556928576_n.jpeg').default} alt="ni9lesh" />


                                                        <div class="team-hover text-center">
                                                            <a href="https://wa.me/917678208283" rel="noreferrer" target="_blank" alt="contyect with watsapp number">
                                                                <i class="fa fa-male"></i> </a>
                                                            <p>Head Manage Nilesh Chandrakar</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="team-container wow bounceIn" data-wow-delay="0.3s">
                                            <div class="team-item">
                                                <div class="team-triangle">
                                                    <div class="content">
                                                        <img className="team1" src={require('/Users/livechek/livechek123/src/img/team/118465388_3200892113292830_3272796302556928576_n.jpeg').default} alt="ni9lesh" />
                                                        <div class="team-hover text-center">
                                                            <i class="fa fa-female"></i>
                                                            <p>Jane Doe</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="team-container wow bounceIn" data-wow-delay="0.4s">
                                            <div class="team-item">
                                                <div class="team-triangle">
                                                    <div class="content">
                                                        <img className="team1" src={require('/Users/livechek/livechek123/src/img/team/118465388_3200892113292830_3272796302556928576_n.jpeg').default} alt="ni9lesh" />
                                                        <div class="team-hover text-center">
                                                            <i class="fa fa-male"></i>
                                                            <p>John Doe</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="col-md-2">
                                        <div class="team-container wow bounceIn" data-wow-delay="0.5s">
                                            <div class="team-item">
                                                <div class="team-triangle">
                                                    <div class="content">
                                                        <img className="team1" src={require('/Users/livechek/livechek123/src/img/team/118465388_3200892113292830_3272796302556928576_n.jpeg').default} alt="ni9lesh" />
                                                        <div class="team-hover text-center">
                                                            <i class="fa fa-male"></i>
                                                            <p>John Doe</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="team-container wow bounceIn" data-wow-delay="0.6s">
                                            <div class="team-item">
                                                <div class="team-triangle">
                                                    <div class="content">
                                                        <img className="team1" src={require('/Users/livechek/livechek123/src/img/team/118465388_3200892113292830_3272796302556928576_n.jpeg').default} alt="ni9lesh" />
                                                        <div class="team-hover text-center">
                                                            <i class="fa fa-male"></i>
                                                            <p>John Doe</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="team-container wow bounceIn" data-wow-delay="0.7s">
                                            <div class="team-item">
                                                <div class="team-triangle">
                                                    <div class="content">
                                                        <img className="team1" src={require('/Users/livechek/livechek123/src/img/team/118465388_3200892113292830_3272796302556928576_n.jpeg').default} alt="ni9lesh" />
                                                        <div class="team-hover text-center">
                                                            <i class="fa fa-male"></i>
                                                            <p>John Doe</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="team-container wow bounceIn" data-wow-delay="0.8s">
                                            <div class="team-item">
                                                <div class="team-triangle">
                                                    <div class="content">
                                                        <img className="team1" src={require('/Users/livechek/livechek123/src/img/team/118465388_3200892113292830_3272796302556928576_n.jpeg').default} alt="ni9lesh" />
                                                        <div class="team-hover text-center">
                                                            <i class="fa fa-female"></i>
                                                            <p>Jane Doe</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </div>

                    </section>






                    <section id="partners-section">

                        <div class="page-header-wrapper">
                            <div class="container">
                                <div class="page-header text-center wow fadeInDown" data-wow-delay="0.4s">
                                    <h2>Our Partners</h2>
                                    <div class="devider"></div>
                                    <p class="subtitle">Those who trust us</p>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div id="owl-partners" class="owl-carousel">
                                <img className="img-owlpartners" src={require('/Users/livechek/livechek123/src/img/partners/iffco-tokio-logo-english.png').default} alt="img" />
                                <img className="img-owlpartners" src={require('/Users/livechek/livechek123/src/img/partners/download.png').default} alt="img" />
                                <img className="img-owlpartners" src={require('/Users/livechek/livechek123/src/img/partners/navi_svg_logo.svg').default} alt="img" style={{ height: "autoHeight", width: "250px" }} />
                                <img className="img-owlpartners" src={require('/Users/livechek/livechek123/src/img/partners/fiture general.png').default} alt="img" style={{ height: "autoHeight", width: "240px" }} />
                                <img className="img-owlpartners" src={require('/Users/livechek/livechek123/src/img/partners/hdf ergo.png').default} alt="img" />
                                <img className="img-owlpartners" src={require('/Users/livechek/livechek123/src/img/partners/icici lombard.jpeg').default} alt="img" />
                                <img className="img-owlpartners" src={require('/Users/livechek/livechek123/src/img/partners/oreantel .png').default} alt="img" style={{ height: "autoHeight", width: "240px" }} />
                                <img className="img-owlpartners" src={require('/Users/livechek/livechek123/src/img/partners/universal sompo.jpeg').default} alt="img" />
                                <img className="img-owlpartners" src={require('/Users/livechek/livechek123/src/img/partners/magmahdi.png').default} alt="img" style={{ height: "autoHeight", width: "240px" }} />
                                <img className="img-owlpartners" src={require('/Users/livechek/livechek123/src/img/partners/tata aig insurance.jpeg').default} alt="img" />

                            </div>
                        </div>
                    </section>






                    <section id="prices-section" class="page">


                        <div class="page-header-wrapper">
                            <div class="container">
                                <div class="page-header text-center wow fadeInDown" data-wow-delay="0.4s">
                                    <h2>Prices</h2>
                                    <div class="devider"></div>
                                    <p class="subtitle">That how much</p>
                                </div>
                            </div>
                        </div>


                        <div class="extra-space-l"></div>


                        <div class="prices">
                            <div class="container">
                                <div class="row">

                                    <div class="price-box col-sm-6 col-md-3 wow flipInY" data-wow-delay="0.3s">
                                        <div class="panel panel-default">
                                            <div class="panel-heading text-center">
                                                <i class="fa fa-plug fa-2x"></i>
                                                <h3>Basic</h3>
                                            </div>
                                            <div class="panel-body text-center">
                                                <p class="lead"><strong>$49</strong></p>
                                            </div>
                                            <ul class="list-group text-center">
                                                <li class="list-group-item">Personal Use</li>
                                                <li class="list-group-item">3 projects</li>
                                                <li class="list-group-item">1 GB Disk</li>
                                                <li class="list-group-item">Custom Domain</li>
                                                <li class="list-group-item">24/7 Support</li>
                                            </ul>
                                            <div class="panel-footer text-center">
                                                <a class="btn btn-default" href="#contact-section">Contact Us </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="price-box col-sm-6 col-md-3 wow flipInY" data-wow-delay="0.5s">
                                        <div class="panel panel-default">
                                            <div class="panel-heading text-center">
                                                <i class="fa fa-cog fa-2x"></i>
                                                <h3>Advanced</h3>
                                            </div>
                                            <div class="panel-body text-center">
                                                <p class="lead"><strong>$99</strong></p>
                                            </div>
                                            <ul class="list-group text-center">
                                                <li class="list-group-item">Personal Use</li>
                                                <li class="list-group-item">5 projects</li>
                                                <li class="list-group-item">5 GB Disk</li>
                                                <li class="list-group-item">Custom Domain</li>
                                                <li class="list-group-item">24/7 Support</li>
                                            </ul>
                                            <div class="panel-footer text-center">
                                                <a class="btn btn-default" href="#contact-section">Contact Us </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="price-box col-sm-6 price-box-featured col-md-3 wow flipInY" data-wow-delay="0.7s">
                                        <div class="panel panel-default">
                                            <div class="panel-heading text-center">
                                                <i class="fa fa-star fa-2x"></i>
                                                <h3>Professional</h3>
                                            </div>
                                            <div class="panel-body text-center">
                                                <p class="lead"><strong>$149</strong></p>
                                            </div>
                                            <ul class="list-group text-center">
                                                <li class="list-group-item">Personal Use</li>
                                                <li class="list-group-item">20 Projects</li>
                                                <li class="list-group-item">20 GB Disk</li>
                                                <li class="list-group-item">Custom Domain</li>
                                                <li class="list-group-item">24/7 Support</li>
                                            </ul>
                                            <div class="panel-footer text-center">
                                                <a class="btn btn-default" href="#contact-section">Contact Us </a>
                                            </div>
                                            <div class="price-box-ribbon"><strong>Popular</strong></div>
                                        </div>
                                    </div>

                                    <div class="price-box col-sm-6 col-md-3 wow flipInY" data-wow-delay="0.9s">
                                        <div class="panel panel-default">
                                            <div class="panel-heading text-center">
                                                <i class="fa fa-plus fa-2x"></i>
                                                <h3>Ultimate</h3>
                                            </div>
                                            <div class="panel-body text-center">
                                                <p class="lead"><strong>$199</strong></p>
                                            </div>
                                            <ul class="list-group text-center">
                                                <li class="list-group-item">Multi Use</li>
                                                <li class="list-group-item">Unlimited Projects</li>
                                                <li class="list-group-item">99 GB Disk</li>
                                                <li class="list-group-item">Custom Domain</li>
                                                <li class="list-group-item">24/7 Support</li>
                                            </ul>
                                            <div class="panel-footer text-center">
                                                <a class="btn btn-default" href="#contact-section">Contact Us </a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="extra-space-l"></div>
                    </section>




                    <section id="social-section">


                        <div class="page-header-wrapper">
                            <div class="container">
                                <div class="page-header text-center wow fadeInDown" data-wow-delay="0.4s">
                                    <h2>Join Us</h2>
                                    <div class="devider"></div>
                                    <p class="subtitle">Follow us on social networks</p>
                                </div>
                            </div>
                        </div>


                        <div class="container">
                            <ul class="social-list">
                                <li> <a href="https://www.facebook.com/LiveChekInspections" class="rotate-box-1 square-icon text-center wow zoomIn" data-wow-delay="0.3s">  <span class="rotate-box-icon"><i class="fa fa-facebook"></i></span></a></li>
                                <li> <a href="https://www.merriam-webster.com/dictionary/link" class="rotate-box-1 square-icon text-center wow zoomIn" data-wow-delay="0.4s"><span class="rotate-box-icon"><i class="fa fa-twitter"></i></span></a></li>
                                <li> <a href="https://www.merriam-webster.com/dictionary/link" class="rotate-box-1 square-icon text-center wow zoomIn" data-wow-delay="0.5s"><span class="rotate-box-icon"><i class="fa fa-google-plus"></i></span></a></li>
                                <li> <a href="https://www.youtube.com/channel/UCIZpQSVMUubLllT6ZWdbnAA/featured" class="rotate-box-1 square-icon text-center wow zoomIn" data-wow-delay="0.6s"><span class="rotate-box-icon"><i class="fa fa-youtube"></i></span></a></li>
                                <li> <a href="https://www.merriam-webster.com/dictionary/link" class="rotate-box-1 square-icon text-center wow zoomIn" data-wow-delay="0.7s"><span class="rotate-box-icon"><i class="fa fa-tumblr"></i></span></a></li>
                                <li> <a href="https://www.merriam-webster.com/dictionary/link" class="rotate-box-1 square-icon text-center wow zoomIn" data-wow-delay="0.8s"><span class="rotate-box-icon"><i class="fa fa-dribbble"></i></span></a></li>
                            </ul>
                        </div>

                    </section>






                    <section id="contact-section" class="page text-white parallax" data-stellar-background-ratio="0.5" >
                        <div class="cover"></div>


                        <div class="page-header-wrapper">
                            <div class="container">
                                <div class="page-header text-center wow fadeInDown" data-wow-delay="0.4s">
                                    <h2>Contacts</h2>
                                    <div class="devider"></div>
                                    <p class="subtitle">All to contact us</p>
                                </div>
                            </div>
                        </div>

                        <div class="contact wow bounceInRight" data-wow-delay="0.4s">
                            <div class="container">
                                <div class="row">

                                    <div class="col-sm-6">
                                        <div class="contact-info">
                                            <h4>Our Address</h4>
                                            <ul class="contact-address">
                                                <li><i class="fa fa-map-marker fa-lg"></i>&nbsp; #13, 3rd Floor, Sant Nagar, East of Kailash,
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; New Delhi – 110065,
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </li>
                                                <li><i class="fa fa-phone"></i>&nbsp;  011-46015666, +919810755099</li>
                                                <li><i class="fa fa-print"></i>&nbsp; 1 -234 -456 -7890</li>
                                                <li><i class="fa fa-envelope"></i>  preeti.singh@livechek.com, info@livechek.com</li>
                                                <li><i class="fa fa-skype"></i>LiveChek Pvt Ltd </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <div class="contact-form">
                                            <h4>Contact Us &nbsp;</h4>
                                            <p>Send us a message</p>
                                            <form >
                                                <div class="form-group">
                                                    <input type="text" class="form-control input-lg" placeholder="Your Name" required />
                                                </div>
                                                <div class="form-group">
                                                    <input type="email" class="form-control input-lg" placeholder="E-mail" required />
                                                </div>
                                                <div class="form-group">
                                                    <input type="text" class="form-control input-lg" placeholder="Subject" required />
                                                </div>
                                                <div class="form-group">
                                                    <input type="tel" class="form-control input-lg" name="phone" placeholder="Enter Mobile Number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                                                </div>

                                                <div class="form-group">
                                                    <textarea class="form-control input-lg" rows="5" placeholder="Message" required />
                                                </div>

                                                <button type="submit" class="btn wow bounceInRight" data-wow-delay="0.8s">Send</button>
                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>

















                </div></body>

        )
    }
} export default home;
// <form action="/action_page.php">
//   <label for="phone">Enter a phone number:</label><br><br>
//   <input type="tel" id="phone" name="phone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required><br><br>
//   <small>Format: 123-45-678</small><br><br>
//   <input type="submit">
// </form>