import React, { Component } from 'react';
import './Home.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'reactstrap';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Projects: [
                { name: "numan" },
                { name: "ahmed" }
            ]
        }
    };

    render(props) {
        return (
            <div>

                <div className="container-fluid" id="jmbtrn">
                    <img src={"images/myimg.jpg"} className="img-thumbnail" id="headimg1" align="left" /><span className="headtext">The More you Sweat in Training</span><br /><span className="headtext"> the Less you bleed in combat.</span>
                    <br /><br />
                    <div className="textd">
                        <span className="headtext2"> eaque ipsa quae ab illo inventore veritatis et quasi dicta nimato </span> <br /><span className="headtext2"> explicabo. Nemo enim ipsam voluptatem quia velit</span><br /><span className="headtext2"> voluptasadipisci numan  numqua <br /></span>
                        <Link to="/Services">
                            <Button bsStyle="success" className="headbtn">Read more</Button>
                        </Link>
                    </div>
                    <p className="he">.</p>
                </div>

                {/* <div className="container">
                    <div>
                        <h1>Welcome to Mongo </h1>
                        <hr />
                    </div>
                    <ul class="list-unstyled">
                        <li class="media">
                            <img class="mr-3" src="..." alt="Generic placeholder image" />
                            <div class="media-body">
                                <h5 class="mt-0 mb-1">List-based media object</h5>
                                Cras sit amet nibh libero,  vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </div>
                        </li>
                        <li class="media my-4">
                            <img class="mr-3" src="..." alt="Generic placeholder image" />
                            <div class="media-body">
                                <h5 class="mt-0 mb-1">List-based media object</h5>
                                . Nulla vel metus  purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </div>
                        </li>
                        <li class="media">
                            <img class="mr-3" src="..." alt="Generic placeholder image" />
                            <div class="media-body">
                                <h5 class="mt-0 mb-1">List-based media object</h5>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </div>
                        </li>
                    </ul>
                </div>
 */}
                <section className="heading">
                    <div className="container" >
                        <h1>Welcome to Mongo!</h1>
                        <hr className="hline" />
                    </div>
                </section>

                <section className="sidebar">
                    <div className="container">
                        good
</div>
                </section>

                <div className="content">
                    <div className="container" id="bodysite">

                        <strong>It has become appallingly obvious that our technology has exceeded our humanity.
    <br />Pakistan is a democratic country which is being run on the principles of Islam.</strong><br /><br />
                        <p>A lot of companies have chosen to downsize, and maybe that was the right thing for them.
    <br />We have to stop optimizing for programmers and start optimizing for users.</p>

                        <ul>
                            <li><p>Technology has forever changed the world we live in. We're online,<br /> in one way or another, all day long. Our phones and computers have become<br /> reflections of our personalities, our interests, and our identities.<br /> They hold much that is important to us.</p>
                            </li>
                            <li><p>The real problem is not whether machines think but whether men do.<br />numan</p>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="scroll">
                    <div className="container">
                        <p>Technology is nothing. What's important is that you have a faith in people,  </p>
                        <p>that they're basically good and smart, and if you give them tools, they'll do wonderful </p>
                        <p>things with them. </p>
                        <p>Technology can be our best friend, and technology can also be the biggest </p>
                        <p>party pooper of our lives. It interrupts our own story, </p>
                        <p> interrupts our ability to have a thought or a daydream, to imagine something wonderful,</p>
                        <p> because we're too busy bridging the walk from the cafeteria</p>
                        <p> back to the office on the cell phone.</p>
                    </div>
                </div>

                <footer className="bd-footer text-muted">
                    <div className="container-fluid p-3 p-md-5">
                        <ul className="bd-footer-links">
                            <li ><a href="https://github.com/technofun/React.js-front-end">GitHub</a></li>
                            <li ><a href="https://twitter.com/getbootstrap">Twitter</a></li>
                            <li ><a href="https://www.facebook.com/numan.ijaz.5059">facebook</a></li>
                        </ul>
                        <p>Designed and built with all the love in the world by <a href="https://github.com/technofun/React.js-front-end" target="_blank" rel="noopener">@git</a>. Maintained by the <a href="https://github.com/orgs/twbs/people">NuMan MirXa</a></p>
                        <p>Currently v4.1.1. Code licensed MIT, used <a href="https://www.bootstrap.com">bootstrap</a>.</p>
                        <p>©2018 Backbench,web.</p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Home;