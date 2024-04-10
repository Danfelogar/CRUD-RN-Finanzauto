import {Fragment, useEffect, useState} from 'react';
import {Image, ImageSourcePropType} from 'react-native';

import {CustomImage} from '../types/customComponents';
import {TypeImage} from '../utils';

export const HandlerImage = ({
  imageSource,
  imgStyle,
  typeFile,
}: CustomImage) => {
  const [source, setSource] = useState<ImageSourcePropType>();

  useEffect(() => {
    if (typeFile === TypeImage.Remote && typeof imageSource === 'string') {
      setSource({uri: imageSource});
    } else {
      setSource(imageSource as ImageSourcePropType);
    }
  }, []);

  const handleImageError = () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    setSource(require('../assets/notImg.png'));
  };

  return (
    <Fragment>
      {source && (
        <Image source={source} style={imgStyle} onError={handleImageError} />
      )}
    </Fragment>
  );
};
