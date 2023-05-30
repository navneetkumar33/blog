import React from 'react';
import { Breadcrumb } from 'antd';

const Menu: React.FC = () => (
  <Breadcrumb style={{margin:'0 20px'}}
    items={[
      {
        title: 'All Posts',
      },
      {
        title: <a href="">Latest Posts</a>,
      },
      {
        title: 'Archived',
      },
    ]}
  />
);

export default Menu;