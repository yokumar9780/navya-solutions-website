import React from 'react';
import { Security } from '@mui/icons-material';
import type { BlogPost } from '../BlogListPage';

export const post5: BlogPost = {
  id: '5',
  title: 'Zero Trust Architecture: Modern Security for Modern Threats',
  excerpt: 'Explore how zero trust security models protect enterprise data and systems in today\'s distributed, cloud-first environments.',
  category: 'Cybersecurity',
  icon: <Security />,
  date: '2024-12-20',
  readTime: '6 min read'
};

export default post5;
