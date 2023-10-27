import Link from 'next/link';
import React from 'react';
import { Play } from 'react-feather';

import styles from './style.module.css';

interface VideoCardProps {
  title: string;
  image: string;
  slug: string;
  size?: 'small' | 'medium';
}

function VideoCard({
  title, slug, image, size = 'medium'
}: VideoCardProps) {
  return (
    <div className={size === 'small' ? styles.smallContainer : styles.container} data-size={size}>
      <Link href={`/videos/${slug}`}>
        <div className={styles.videoCard}>

          <div className={styles.videoCover}>
            <img src={image} alt={title} />
            <div className={styles.mask}>
              <div className={styles.playerButton}>
                <Play />
              </div>
            </div>
          </div>
          <h6 className={styles.videoTitle}>{title}</h6>

        </div>
      </Link>
    </div>
  );
}

export default VideoCard;
