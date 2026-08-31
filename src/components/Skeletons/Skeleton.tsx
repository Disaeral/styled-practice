import { SkeletonText } from './SkeletonText';

type SkeletonProps = {
    type: "CARD"|"TEXT"|"IMAGE"
};

export const Skeleton = ({type}:SkeletonProps) => {
    switch (type) {
        case "CARD":
            return <></>;
        case "IMAGE":
            return <></>;
        case "TEXT":
            return <>
                <SkeletonText />
                <SkeletonText width="45%" />
                <SkeletonText width="60%" />
            </>
        default:
            return <>CARD</>;
    }
};