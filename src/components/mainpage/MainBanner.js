import React from 'react';
import MeetupBtn from '../../common/button/MeetupBtn';

function MainBanner() {
  return (
    <div className='main-banner'>
      <div>
        <div>
          <h2>사이트 소개</h2>
          <p>사이트 소개에 대한 설명글</p>
        </div>
        <div>
          <MeetupBtn />
        </div>
      </div>
      <div className='main-banner-img'></div>
    </div>
  );
}

export default MainBanner;
