// components/Timeline.js
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase as WorkIcon, FaGraduationCap as SchoolIcon, FaStar as StarIcon } from 'react-icons/fa';
import { FaHouse as HouseIcon } from "react-icons/fa6";


const Timeline = () => {
  return (
    <div className='w-full'>
    <div className='min-w-[100vw] text-center bg-red-300'>Company Journey</div>
    <VerticalTimeline lineColor="#f1f1ef" >
      <VerticalTimelineElement
        // className="vertical-timeline-element--work"
        contentStyle={{ background: '#F5F5F5', color: 'black' }}
        contentArrowStyle={{ borderRight: '7px solid  #F5F5F5' }}
        date="2023/09 - Present"
        // iconStyle={{ background: '#899499', color: '#fff' }}
        // icon={<HouseIcon />}
        iconStyle={{ background: '#FFD700', color: '#fff' }}
        icon={<StarIcon />}
      >
        <h3 className="text-2xl pb-4">Group Director</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
        <span className='font-thin text-sm'>
          With New Consultant and Agency Director
        </span>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        // className="vertical-timeline-element--work"
        contentStyle={{ background: '#F5F5F5', color: 'black' }}
        contentArrowStyle={{ borderRight: '7px solid  #F5F5F5' }}
        date="2023"
        iconStyle={{ background: '#899499', color: '#fff' }}
        icon={<HouseIcon />}
      >
        <h3 className="text-2xl pb-4">Owner KPM</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
        <span className='font-thin text-sm'>
        Established New Koperasi Perumahan Malaysia
        </span>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        // className="vertical-timeline-element--work"
        contentStyle={{ background: '#F5F5F5', color: 'black' }}
        contentArrowStyle={{ borderRight: '7px solid  #F5F5F5' }}
        date="2019"
        iconStyle={{ background: '#899499', color: '#fff' }}
        icon={<HouseIcon />}
      >
        <h3 className="text-2xl pb-4">Top Agency Property Partner</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
        <span className='font-thin text-sm'>
        In Collaborations with Koperasi Malaysia
        </span>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        // className="vertical-timeline-element--work"
        contentStyle={{ background: '#F5F5F5', color: 'black' }}
        contentArrowStyle={{ borderRight: '7px solid  #F5F5F5' }}
        date="2019"
        iconStyle={{ background: '#899499', color: '#fff' }}
        icon={<HouseIcon />}
      >
        <h3 className="text-2xl pb-4">Property</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
        <span className='font-thin text-sm'>
        Commenced Property Market Venture
        </span>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        // className="vertical-timeline-element--work"
        contentStyle={{ background: '#F5F5F5', color: 'black' }}
        contentArrowStyle={{ borderRight: '7px solid  #F5F5F5' }}
        date="2019"
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <h3 className="text-2xl pb-4">Start</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
        <span className='font-thin text-sm'>
        Diverse Business Persuits
        </span>
      </VerticalTimelineElement>

    </VerticalTimeline>
    </div>
  );
};

export default Timeline;
