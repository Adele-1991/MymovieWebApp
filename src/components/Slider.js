import React, { Component } from "react";
import style from "../styles/style.module.css";
import f1 from "../images/F1.jpg";
import f2 from "../images/F2.jpg";
import f3 from "../images/F3.jpg";
import f4 from "../images/F4.jpg";

class Slider extends Component {
     constructor(props) {
          super(props);
          this.state = {
              slideIndex:0,
          };
     }
     slides = [
          {id:1,src:f1,alt:"f1"},
          {id:2,src:f2,alt:"f2"},
          {id:3,src:f3,alt:"f3"},
          {id:4,src:f4,alt:"f4"},
     ];
     prevSlide = () => {
          if(this.state.slideIndex === 0){
               this.setState({
                    slideIndex:this.slides.length-1,
               });
          }else{
               this.setState({
                    slideIndex:this.state.slideIndex-1,
               });
          }
     };
     nextSlide = () => {
          if(this.state.slideIndex === this.slides.length-1){
               this.setState({
                    slideIndex:0,
               });
          }else{
               this.setState({
                    slideIndex:this.state.slideIndex+1,
               });
          }
     }
     
  render() {
    return (
      <div className={style["slider-container"]}>
        <div className={style["slider"]}>
         {this.slides.map((slide)=>(
          <img
          key={slide.id}
          src={slide.src}
          alt={slide.alt}
          className={
             this.state.slideIndex+1 === slide.id ? style["active"] :style["deactive"]   

          }/>
         ))}
        </div>
        <button className={style["prev-button"]} onClick={this.prevSlide}>Previous</button>
        <button className={style["next-button"]} onClick={this.nextSlide}>Next</button>
      </div>
    );
  }
}

export default Slider;
