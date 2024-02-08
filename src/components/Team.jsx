import React from 'react';

const Team = () => {
  return (
    <>
      <div className="container section-holder col-xl-8" id="team_container" >
        <h1>Meet Our Team</h1>
        <p className="intro">
          Ecell has come a long way and its growth is built on the foundation of teamwork and mutual support. The dedication and hard work put in by the designated faculty members and the committee have helped us reach our goals.
        </p>
        <div className="row faculty" id="team">
          <div className="col-md-12">
            <h2>Faculty Mentors</h2>
          </div>
          <div className="col-md-12 first-row">
            <h4 className="peach-text">Chairman</h4>
            <h5>Dr. Sunil Karamchandani</h5>
            <p className="peach-text">Electronics & Telecommunication</p>
          </div>
        </div>
        <h4 className="peach-text">Members</h4>
        <div class="row faculty">
        <div class="col-md-4">
          <h5>Dr. Atul Dhale</h5>
          <p class="peach-text newstyle">Production</p>
        </div>
        <div class="col-md-4">
          <h5>Dr. Ram Mangrulkar</h5>
          <p class="peach-text newstyle">Computer</p>
        </div>
        <div class="col-md-4">
          <h5>Dr. Rashmi Kumar</h5>
          <p class="peach-text newstyle">Chemical</p>
        </div>
        <div class="col-md-4">
          <h5>Prof. Mangla Monica</h5>
          <p class="peach-text newstyle">Information Technology</p>
        </div>
        <div class="col-md-4">
          <h5>Prof. Pratik Kanani</h5>
          <p class="peach-text newstyle">Computer</p>
        </div>
        <div class="col-md-4">
          <h5>Prof. Shashikant Auti</h5>
          <p class="peach-text newstyle">Mechanical</p>
        </div>
        <div class="col-md-4">
          <h5>Prof. Mayur Parulekar</h5>
          <p class="peach-text newstyle">Electronics</p>
        </div>
        <div class="col-md-4">
          <h5>Dr. Vinayak H Khatawate</h5>
          <p class="peach-text newstyle">Mechanical</p>
        </div>
      {/* </div> */}
        </div>
        <div className="row core" id="team">
          <div className="col-md-12">
            <h2>E-CELL CORE COMMITTEE 2022-23</h2>
          </div>

          <div className="col-md-3 first-row">
            <div
              className="team_member"
              style={{ backgroundImage: 'url(./src/public/static/images/Nihar.jpg)' }}    
            ></div>
            <h5>Nihar Nandoskar</h5>
            <p className="peach-text">VCP</p>
          </div>
        </div>

        <div class="row core">
        <div class="col-md-3 first-row">
          <div
            class="team_member"
            style={{ backgroundImage: 'url(./src/images/Nihar.jpg)' }}  
          ></div>
          <h5>Bhavesh</h5>
          <p class="peach-text">Chairperson</p>
        </div>
        <div class="col-md-3 first-row">
          <div
            class="team_member"
            style={{ backgroundImage: 'url(./src/images/Nihar.jpg)' }}  
          ></div>
          <h5>Bhargavee</h5>
          <p class="peach-text">Co-Chairperson</p>
        </div>
      </div>

      <div class="col-md-3 first-row row1">
        <div
          class="team_member"
          style={{ backgroundImage: 'url(./src/images/Nihar.jpg)' }} 
        ></div>
        <h5>Anushka</h5>
        <p class="peach-text">Admin</p>
      </div>

      <div class="row core">
        <div class="col-md-3">
          <div
            class="team_member"
            style={{ backgroundImage: 'url(./src/images/Nihar.jpg)' }} 
          ></div>
          <h5>Asim</h5>
          <p class="peach-text newstyle">
            Vice Chairperson Public Relations
          </p>
        </div>
        <div class="col-md-3">
          <div
            class="team_member"
            style={{ backgroundImage: 'url(./src/images/Nihar.jpg)' }} 
          ></div>
          <h5>RUCHI</h5>
          <p class="peach-text newstyle">Vice Chairperson Events</p>
        </div>
        <div class="col-md-3">
          <div
            class="team_member"
            style={{ backgroundImage: 'url(./src/images/Nihar.jpg)' }} 
          ></div>
          <h5>Krish Shah</h5>
          <p class="peach-text newstyle">Vice Chairperson Technical</p>
        </div>
        <div class="col-md-3">
          <div
            class="team_member"
            style={{ backgroundImage: 'url(./src/images/Nihar.jpg)' }} 
          ></div>
          <h5>Advait</h5>
          <p class="peach-text newstyle">Vice Chairperson Creatives</p>
        </div>
        <div class="col-md-3">
          <div
            class="team_member"
            style={{ backgroundImage: 'url(./src/images/Nihar.jpg)' }} 
          ></div>
          <h5>Pratham</h5>
          <p class="peach-text newstyle">Vice Chairperson Finance</p>
        </div>
        <div class="col-md-3">
          <div
            class="team_member"
            style={{ backgroundImage: 'url(./src/images/Nihar.jpg)' }} 
          ></div>
          <h5>Rushi</h5>
          <p class="peach-text newstyle">Vice Chairperson Marketing</p>
        </div>
    </div>

        {/* Add more core committee member divs here */}
      </div>
    </>
  );
}

export default Team;
