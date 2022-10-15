import React, { useState } from "react";

interface ICourse {
    courseTitle: string;
    introTitle: string;
    courseImage: string;
    description: string;
    price: string;
    discountedPrice: string;
    discountPercent: string;
}
interface ICourseSection {
    sectionTitle: string;
    videoUrl?: string;
    videoFile?: any;
}

interface ICourseState extends ICourse, ICourseSection {}

function useCourseDetails() {
    const [courseDetails, setCourseDetails] = useState<ICourseState>({
        courseImage: "",
        courseTitle: "",
        description: "",
        discountedPrice: "",
        discountPercent: "",
        introTitle: "",
        price: "",
        sectionTitle: "",
        videoFile: "",
        videoUrl: "",
    });

    return <div>useCourseDetails</div>;
}

export default useCourseDetails;
