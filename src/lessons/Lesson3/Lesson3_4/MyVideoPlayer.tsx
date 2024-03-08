import { forwardRef } from "react";

type MyVideoPlayerProps = {
  width: string;
  type: string;
  src: string;
};

export const MyVideoPlayer = forwardRef<HTMLVideoElement, MyVideoPlayerProps>(
  (props, ref) => {
    return (
      <video ref={ref} width={props.width}>
        <source src={props.src} type={props.type} />
      </video>
    );
  }
);
