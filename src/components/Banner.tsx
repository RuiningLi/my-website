import { ComponentProps, PropsWithChildren } from 'react';

interface BannerProps extends ComponentProps<"div"> {}

function Banner({ children, ...rest }: PropsWithChildren<BannerProps>) {
  return (
    <div {...rest}>
      {children}
    </div>
  );
}

export default Banner;
