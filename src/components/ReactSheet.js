/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import ComponentImage from '../images/react/components.jpg'
import ChildrenImage from '../images/react/children.jpg'
import StatesImage from '../images/react/states.jpg'
import PropertiesImage from '../images/react/properties.jpg'
import NestingImage from '../images/react/nesting.jpg'



const ReactSheet = () => {
    return (
        <div className="container">
        <h4 className="center">React Sheet</h4>
        
        <div class="row ">

                <div class="col s12 m4">
                    <div class="card-panel teal grey lighten-3">
                        <span class="black-text">Components</span>
                    </div>
                    <img src={ComponentImage} alt="component image"></img>
                </div>


                <div class="col s12 m4">
                    <div class="card-panel teal grey lighten-3">
                        <span class="black-text">Children</span>
                    </div>
                    <img src={ChildrenImage} alt="children image"></img>
                </div>


                <div class="col s12 m4">
                    <div class="card-panel teal grey lighten-3">
                        <span class="black-text">States</span>
                    </div>
                    <img src={StatesImage} alt="states image"></img>
                </div>

                <div class="col s12 m6">
                    <div class="card-panel teal grey lighten-3">
                        <span class="black-text">Properties</span>
                    </div>
                    <img src={PropertiesImage} alt="states image"></img>
                </div>


                <div class="col s12 m6">
                    <div class="card-panel teal grey lighten-3">
                        <span class="black-text">Nesting</span>
                    </div>
                    <img src={NestingImage} alt="states image"></img>
                </div>

            </div>
        </div>
    )
}

export default ReactSheet