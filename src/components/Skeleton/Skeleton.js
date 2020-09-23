import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const CustomSkeleton = () => (
  <SkeletonTheme color="#ccc" highlightColor="#c4c4c4">
    <div className="skeleton">
      <Skeleton className="skeleton__img" />
      <Skeleton className="skeleton__title" />
      <Skeleton className="skeleton__origins" />
      <Skeleton className="skeleton__date" count={2} />
      <Skeleton className="skeleton__price" />
      <Skeleton className="skeleton__btn" />
    </div>
  </SkeletonTheme>
);

export default CustomSkeleton;
