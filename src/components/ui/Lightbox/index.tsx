import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';

import * as React from 'react';
import ImageGallery from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';

interface Props {
  open: boolean,
  setOpen: (status:boolean) => void,
  items: {
    src: string,
    title: string,
    thumbnail: string,
    key: string,
  }[]
}

export default function Lightbox({ open, setOpen, items }: Props) {
  return (
    <ImageGallery
      plugins={[Captions]}
      open={open}
      close={() => setOpen(false)}
      slides={items}
    />
  );
}
