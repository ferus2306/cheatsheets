/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import ListsImage from '../images/python/lists.png'
import CastingImage from '../images/python/casting.png'
import ComprehensionsImage from '../images/python/comprehensions.png'
import DictionaryImage from '../images/python/dictionary.png'
import IterationImage from '../images/python/iteration.png'
import ManagerImage from '../images/python/manager.png'
import ReadImage from '../images/python/read.png'
import RegexImage from '../images/python/regex.png'
import StringImage from '../images/python/string.png'
import OverwriteImage from '../images/python/overwrite.png'
import WriteImage from '../images/python/write.png'



const PythonSheet = () => {
    return (
        <div className="container">
            <h4 className="center">Python</h4>
            
            <div class="row ">

                <div class="col s12 m12">
                    <div class="card-panel teal grey lighten-3">
                        <span class="black-text">Lists</span>
                    </div>
                    <img src={ListsImage} alt="list image"></img>
                </div>

                <div class="col s12 m12">
                    <div class="card-panel teal grey lighten-3">
                        <span class="black-text">Dictionary</span>
                    </div>
                    <img src={DictionaryImage} alt="list image"></img>
                </div>

                <div class="col s12 m12">
                    <div class="card-panel teal grey lighten-3">
                        <span class="black-text">Iteration</span>
                    </div>
                    <img src={IterationImage} alt="list image"></img>
                </div>

                <div class="col s12 m12">
                    <div class="card-panel teal grey lighten-3">
                        <span class="black-text">String</span>
                    </div>
                    <img src={StringImage} alt="list image"></img>
                </div>

                <div class="col s12 m12">
                    <div class="card-panel teal grey lighten-3">
                        <span class="black-text">Casting</span>
                    </div>
                    <img src={CastingImage} alt="list image"></img>
                </div>

                <div class="col s12 m12">
                    <div class="card-panel teal grey lighten-3">
                        <span class="black-text">Comprehensions</span>
                    </div>
                    <img src={ComprehensionsImage} alt="list image"></img>
                </div>

                <div class="col s12 m12">
                    <div class="card-panel teal grey lighten-3">
                        <span class="black-text">Regex</span>
                    </div>
                    <img src={RegexImage} alt="list image"></img>
                </div>

                <div class="col s12 m12">
                    <div class="card-panel teal grey lighten-3">
                        <span class="black-text">Reading</span>
                    </div>
                    <img src={ReadImage} alt="list image"></img>
                </div>

                <div class="col s12 m12">
                    <div class="card-panel teal grey lighten-3">
                        <span class="black-text">Writing (overwrite)</span>
                    </div>
                    <img src={OverwriteImage} alt="list image"></img>
                </div>

                <div class="col s12 m12">
                    <div class="card-panel teal grey lighten-3">
                        <span class="black-text">Writing (append)</span>
                    </div>
                    <img src={WriteImage} alt="list image"></img>
                </div>

                <div class="col s12 m12">
                    <div class="card-panel teal grey lighten-3">
                        <span class="black-text">Content manager</span>
                    </div>
                    <img src={ManagerImage} alt="list image"></img>
                </div>

            </div>
        </div>
    )
}

export default PythonSheet