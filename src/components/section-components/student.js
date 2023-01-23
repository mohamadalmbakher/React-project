import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class Student extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL
        let imagealt = 'image'
        let data = sectiondata.student
        let PaddingTop = this.props.PaddingTop ? this.props.PaddingTop : 'pd-top-90'
        let PaddingBottom = this.props.PaddingBottom ? this.props.PaddingBottom : 'pd-bottom-100'
let styleInlines="max-width:100px";

    return <div className={"client-area bg-gray "+PaddingTop+' '+PaddingBottom}>
          <div className="container">
            <div className="section-title text-center">
              <h2 className="title">What Our Students <br /> Are Saying</h2>
            </div>
            <div className="client-review-img">
              <img className="clr-img clr-img1" src={publicUrl+"/assets/img/students/1.png"} alt="client" />
              <img className="clr-img clr-img2" src={publicUrl+"/assets/img/students/2.jpg"} alt="client" />
              <img className="clr-img clr-img3" src={publicUrl+"/assets/img/students/3.jpg"} alt="client" />
              <img className="clr-img clr-img4" src={publicUrl+"/assets/img/students/4.jpg"} alt="client" />
              <img className="clr-img clr-img5" src={publicUrl+"/assets/img/students/5.jpg"} alt="client" />
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-7 col-md-10">
                  <div className="client-slider-2 text-center">
                  { data.items.map( (item, i)=>
                      <div key={ i } className="item">
                        <div className="single-client-review">
                          <div className="thumb">
                            <img className='width-100px'  src={publicUrl+item.image} alt={ imagealt } />
                          </div>
                          <div className="review-details">
                            <p>{ item.content }</p>
                            <h4>{ item.name }</h4>
                            <p>{ item.college }</p>
                          </div>
                        </div>
                    </div>
                   ) }

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        }
}

export default Student