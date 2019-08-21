import React from 'react';
import MetisMenu from 'react-metismenu';
import 'react-metismenu/dist/react-metismenu-standart.min.css';

const SideBar = () => {
  const content=[
    {
        icon: 'fas fa-tachometer-alt',
        label: 'Dashboard',
        to: 'zero',
    },
    {
        icon: 'icon-class-name',
        label: 'First Item',
        content: [
            {
                icon: 'icon-class-name',
                label: 'First submenu',
                to: '/one',
            },
            {
              icon: 'icon-class-name',
              label: 'Second Submenu',
              to: 'two',
          }
        ],
    },
  ];

  const height = window.innerHeight;
    
  return (
    <div className="" style={{ minHeight: height, backgroundColor:'#303336'}}>
      <MetisMenu 
        content={content} 
        activeLinkFromLocation 
      />
    </div>
  )
}

export default SideBar;