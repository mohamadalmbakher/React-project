import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class AnnouncementSection extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL
      
        let data = sectiondata.announcement


    return <div className="follow-dream-area pd-top-70">
            <div className="container">
              <div className="row">
                
                <div className="col-lg-12 align-self-center">
                  <div className="section-title">
                    <h2 className="title">{ data.sectiontitle }</h2>
                   </div>
                  { data.items.map( ( item, i )=>
                    <div key={ i } className={"single-follow-dream media "+item.class}>
                      <div className="media-left">
                        <i className={ item.icon } />
                      </div>
                      <div className="media-body">
                        <h6 className='border-bottom-yellow pb-1' >{ item.title } <span className='float-right'>11/05/2022</span></h6>
                       </div>
                    </div>
                   ) }
                </div>
              </div>
            </div>
          </div>

        }
}

export default AnnouncementSection