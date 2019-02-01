import React, { Component } from 'react';
import logo from './logo.svg';
import {TimelineMax, TweenLite} from 'gsap'
import jquery from 'jquery';
window.$ = window.jQuery = jquery;
require('jquery-slimscroll');
//import komp

export default class LoginLogo extends Component {
    componentDidMount() {
        (function($){
            var 
                    
            $logo = $('#logo'),
            $wings = $('.wing')
            ;
            
            function clearStage(){
                var clearTl = new TimelineMax();
        
                clearTl
                    .set($logo, {y:0})
                ;
                return clearTl;
            };
            
            function beeFlies() {
                var beeFliesTl = new TimelineMax({repeat: -1});
        
                beeFliesTl 
                .fromTo($logo, 1, {y:-10, x:0}, {y:50, x:200})
                .to($logo, 0.1, {rotationY:"180"})
                .fromTo($logo, 1, {y:50, x:200}, {y:50, x:0})
                .fromTo($logo, 1, {y:50, x:0}, {y:-10, x:-50})
                .to($logo, 0.1, {rotationY:"0"})
                .fromTo($logo, 1, {y:-10, x:-50}, {y:-10, x:0})
                ;
                return beeFliesTl;
            }
            function wingsFlap() {
                var wingsFlapTl = new TimelineMax({repeat: -1});
        
                wingsFlapTl
                .fromTo($wings, 0.1, {autoAlpha: 0},{autoAlpha:1})
                ;
                
                return wingsFlapTl;
            }
        
            function go() {
                
                var masterTl = new TimelineMax();
                masterTl
                    .add(clearStage(), 'scene-clear-stage')
                    .add(wingsFlap(), 'scene-wings-flap')
                    .add(beeFlies(), 'scene-bee-flies')
                ;
            }
        go();
        })(jquery);
                
    }
    render () {       
        return (
            <div className="login-logo">
                {/* <img src={logo} alt='logo' id="logo"/> */}
                <h1>b</h1>
                <img src="https://assets.productive.io/assets/images/text-logo.svg" alt="productive"/>
                <svg  id="logo" xmlns="http://www.w3.org/2000/svg" style={{width:100, height:100, viewbox:"0 0 300 100", }}>
                    <path class="wing" d="M35.3 34.8c2.8-4 0-7.1-3.9-8.2 -3.8-1-10.2 0.6-13.7 2.1C12 31.2 4 36.7 3.8 40.6c-0.3 3.5 11.1 5.8 14.7 4.7" style={{fill:"#C08728"}}/>
                    <path class="wing" d="M4.8 46.9C3.9 46.5 3.1 46 2.5 45.5c-2.3-1.9-2.5-4-2.5-5.1 0.4-6.8 11.8-13.2 16.2-15 3.3-1.4 10.8-3.7 16.1-2.3 3.7 1 6.4 3.2 7.4 6 0.9 2.5 0.5 5.4-1.3 7.9 -1.2 1.7-3.5 2.2-5.3 1 -1.7-1.2-2.1-3.5-1-5.3 0.4-0.6 0.5-1 0.4-1 -0.1-0.2-0.8-0.9-2.3-1.3 -2.4-0.6-7.9 0.5-11.2 2 -5.1 2.2-9.8 5.8-11.2 7.8 2.3 1.2 7.8 2.1 9.5 1.6 2-0.6 4.1 0.5 4.7 2.5 0.6 2-0.5 4.1-2.5 4.7C16.2 49.9 9.3 49 4.8 46.9z" style={{fill:"#333334"}}/>
                    <path d="M78.1 19.6c-0.3 0-0.6-0.1-0.8-0.2 -1.4-0.5-2.1-2-1.7-3.4 0.9-2.4 2.7-4.7 5.1-6.2 3.4-2.2 7.3-2.1 11.7 0.2 1.3 0.7 1.8 2.3 1.1 3.7 -0.7 1.3-2.3 1.8-3.7 1.1 -3.3-1.8-5-1.1-6.2-0.4 -1.4 0.9-2.4 2.2-2.9 3.4C80.3 18.9 79.2 19.6 78.1 19.6z" style={{fill:"#333334"}}/>
                    <path d="M78.1 19.6c-0.3 0-0.6-0.1-0.8-0.2 -1.4-0.5-2.1-2-1.7-3.4 0.9-2.4 2.7-4.7 5.1-6.2 3.4-2.2 7.3-2.1 11.7 0.2 1.3 0.7 1.8 2.3 1.1 3.7 -0.7 1.3-2.3 1.8-3.7 1.1 -3.3-1.8-5-1.1-6.2-0.4 -1.4 0.9-2.4 2.2-2.9 3.4C80.3 18.9 79.2 19.6 78.1 19.6z" style={{fill:"#333334"}}/>
                    <path d="M71.8 17.8c-0.2 0-0.4 0-0.6-0.1 -1.5-0.3-2.4-1.8-2-3.2 1.8-7.8 8.8-13.8 17-14.4 1.5-0.1 2.8 1 2.9 2.5 0.1 1.5-1 2.8-2.5 2.9 -5.8 0.5-10.9 4.8-12.2 10.3C74.2 16.9 73 17.8 71.8 17.8z" style={{fill:"#333334"}}/>
                    <path class="wing" d="M34.6 38.6c0.4-4.9-3.5-6.1-7.5-5.1 -3.7 1.1-8.5 5.7-10.8 8.7 -3.7 4.9-7.9 13.8-6.1 17.2 1.5 3.2 12.5-0.6 15.1-3.3" style={{fill:"#C08728"}}/>
                    <path class="wing" d="M14.3 64.4c-1 0.1-1.9 0.1-2.7-0.1 -2.9-0.5-4.2-2.2-4.7-3.2 -3.1-6.1 3.6-17.3 6.4-21.1 2.1-2.8 7.5-8.6 12.8-10.1 3.7-1 7.1-0.5 9.5 1.5 2.1 1.7 3.1 4.4 2.8 7.5 -0.2 2.1-2 3.6-4.1 3.5 -2.1-0.2-3.6-2-3.5-4.1 0.1-0.8-0.1-1.1-0.1-1.1 -0.2-0.2-1.1-0.4-2.6 0 -2.4 0.7-6.5 4.4-8.7 7.3 -3.3 4.4-5.5 9.9-5.8 12.4 2.6-0.1 7.8-2.1 9-3.4 1.4-1.5 3.8-1.6 5.4-0.2 1.5 1.4 1.6 3.8 0.2 5.4C25.7 61.2 19.2 64 14.3 64.4z" style={{fill:"#333334"}}/>
                    <path d="M71.5 76.2C66.2 88.8 35.3 98.3 35.3 98.3s-15-28.6-9.7-41.3L37.6 28.3c5.3-12.7 19.9-18.7 32.5-13.4l0 0c12.7 5.3 18.7 19.9 13.4 32.5L71.5 76.2z" style={{fill:"#FEC110"}}/>
                    <path d="M33.8 101.8c0-0.1-17.8-31.7-11.7-46.2l12-28.7C40.2 12.3 57 5.4 71.5 11.4c14.6 6.1 21.5 22.9 15.4 37.5L75 77.6C68.9 92.2 33.9 101.7 33.8 101.8zM68.6 18.4c-10.7-4.5-23.1 0.6-27.6 11.4L29 58.4c-4.5 10.7 8.8 33.7 8.8 33.7s25.7-6.7 30.2-17.5l12-28.7C84.5 35.3 79.4 22.9 68.6 18.4z" style={{fill:"#333334", strokeWidth:2, stroke:"#333334"}}/>
                    <path d="M71.4 40c-0.9 2.2-3.5 3.3-5.8 2.4 -2.2-0.9-3.3-3.5-2.4-5.8 0.9-2.2 3.5-3.3 5.7-2.4C71.3 35.2 72.3 37.8 71.4 40z" style={{fill:"#333334"}}/>
                    <path d="M63.1 83.7c-6.2-1.1-12.6-3-19-5.7 -6.6-2.8-12.6-6.1-18-9.9l0.7 9.5c4.4 2.7 9.3 5.2 14.4 7.3 4.5 1.9 8.9 3.4 13.4 4.6L63.1 83.7z" style={{fill:"#333334"}}/>
                    <path d="M46.1 72.6c-7.5-3.1-14.3-6.9-20.2-11.3 -1.7-1.2-2.1-3.6-0.8-5.3 1.2-1.7 3.6-2 5.3-0.8 5.5 4 11.8 7.5 18.7 10.4 6.8 2.9 13.7 4.9 20.3 6 2.1 0.3 3.4 2.3 3.1 4.3 -0.3 2.1-2.3 3.4-4.3 3.1C60.9 77.9 53.5 75.7 46.1 72.6z" style={{fill:"#333334"}}/>
                    <path d="M51.3 60.4c-7.5-3.1-14.3-6.9-20.2-11.3 -1.7-1.2-2-3.6-0.8-5.3 1.2-1.7 3.6-2.1 5.3-0.8 5.5 4 11.8 7.5 18.7 10.4 6.8 2.9 13.7 4.9 20.3 6 2.1 0.3 3.4 2.3 3.1 4.3 -0.3 2.1-2.3 3.4-4.3 3.1C66 65.7 58.6 63.5 51.3 60.4z" style={{fill:"#333334"}}/>
                </svg>
{/*                 <Komp > Sjdadjsahdkjhasjas <Komp> */}
            </div>
        )
    }  /* 
    const komp = (props) => {
        render() {
            return (
                <p onClick={props.nesto}> {props.nesto}</p>
         
            );
        }
    }  
 */
}