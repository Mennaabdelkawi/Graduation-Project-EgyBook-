import React, { Component } from "react";
import { Link } from "react-router-dom";

class Packages extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <>
                {/* ===============  Package  area start =============== */}
                <div id="flightBooking" class="section">
                    <div class="section-center">
                        <div class="container">
                            <div class="row">
                                <div className="flightBooking-form">
                                    <form>
                                        <div className="form-group">
                                            <div className="form-checkbox">
                                                <label for="roundtrip">
                                                    <input type="radio" id="roundtrip" name="flight-type" />
                                                    <span></span>Roundtrip
                                                </label>
                                                <label for="one-way">
                                                    <input type="radio" id="one-way" name="flight-type" />
                                                    <span></span>One way
                                                </label>
                                                <label for="multi-city">
                                                    <input type="radio" id="multi-city" name="flight-type" />
                                                    <span></span>Multi-City
                                                </label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <span className="form-label">Flying from</span>
                                                    <input className="form-control" type="text" placeholder="City or airport" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <span className="form-label">Flyning to</span>
                                                    <input className="form-control" type="text" placeholder="City or airport" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <div className="form-group">
                                                    <span className="form-label">Departing</span>
                                                    <input className="form-control" type="date" required />
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="form-group">
                                                    <span className="form-label">Returning</span>
                                                    <input className="form-control" type="date" required />
                                                </div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="form-group">
                                                    <span className="form-label">Adults (18+)</span>
                                                    <select className="form-control">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                    <span className="select-arrow"></span>
                                                </div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="form-group">
                                                    <span className="form-label">Children (0-17)</span>
                                                    <select className="form-control">
                                                        <option>0</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                    <span className="select-arrow"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <div className="form-group">
                                                    <span className="form-label">Travel className</span>
                                                    <select className="form-control">
                                                        <option>Economy className</option>
                                                        <option>Business className</option>
                                                        <option>First className</option>
                                                    </select>
                                                    <span className="select-arrow"></span>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="form-btn">
                                                    <button className="submit-btn">Show flights</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ===============  Package  area end =============== */}
            </>
        );
    }
}

export default Packages;
